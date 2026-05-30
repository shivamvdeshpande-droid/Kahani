// api/send-story.js
const Groq = require("groq-sdk");
const { Resend } = require("resend");
const storyBank = require("./storyBank");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const resend = new Resend(process.env.RESEND_API_KEY);

function pickStory(chars, dims) {
  const charList = (chars || "").toLowerCase().split(",").map(s => s.trim()).filter(Boolean);
  const dimList = (dims || "").toLowerCase().split(",").map(s => s.trim()).filter(Boolean);

  const scored = storyBank.map(story => {
    const storyText = [story.hero, story.theme, story.moral, ...(story.tags || [])].join(" ").toLowerCase();
    let score = 0;
    for (const c of charList) { if (c !== "surprise" && storyText.includes(c)) score += 2; }
    for (const d of dimList) { if (storyText.includes(d)) score += 1; }
    return { story, score };
  });

  const matches = scored.filter(s => s.score > 0);
  if (matches.length > 0) {
    const maxScore = Math.max(...matches.map(s => s.score));
    const topMatches = matches.filter(s => s.score === maxScore);
    return topMatches[Math.floor(Math.random() * topMatches.length)].story;
  }
  return storyBank[Math.floor(Math.random() * storyBank.length)];
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { emails, childName, dims, chars, language } = req.body;

    if (!emails || emails.length === 0) return res.status(400).json({ error: "Email is required" });

    const story = pickStory(chars, dims);

    const prompt = `You are a warm, gentle storyteller helping a parent read a bedtime story to their child.

Child's name: ${childName || "little one"}
Values the parent cares about: ${dims || "kindness, courage"}
Favourite characters: ${chars || "none specified"}

Here is the original story. Do NOT change the plot, characters, moral, or source. Only simplify the language so a young child can understand it when a parent reads it aloud. Keep all interactive cues (in parentheses) exactly as they are.

Story title: ${story.title}
Source: ${story.source}
Moral: ${story.moral}

Story:
${story.content}

---

Rewrite this story in simpler, warmer words. Address the child as "${childName || "little one"}" once at the start. Keep it under 300 words. Keep the moral, interactive cues, and ending intact. Do not invent new plot points.

End with:
🌙 Moral: ${story.moral}
📖 Source: ${story.source}

${language && language !== 'English' ? `Now translate the entire story above into ${language}. Keep all character names unchanged. Use simple natural ${language} a parent would speak to a young child. Use proper ${language} script, not transliteration. Keep the moral and source lines in ${language} too.` : ''}`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 600,
      temperature: 0.5,
    });

    const storyText = completion.choices[0]?.message?.content || "Story generation failed.";

    const paragraphs = storyText
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => {
        if (line.startsWith("(") && line.endsWith(")")) {
          return `<p style="color:#b45309;font-style:italic;margin:12px 0;">${line}</p>`;
        }
        if (line.startsWith("🌙") || line.startsWith("📖")) {
          return `<p style="color:#6b7280;font-size:13px;margin:6px 0;">${line}</p>`;
        }
        return `<p style="margin:10px 0;line-height:1.7;">${line}</p>`;
      })
      .join("");

    const html = `
    <div style="font-family:Georgia,serif;max-width:600px;margin:auto;padding:32px;background:#fffbf5;border-radius:12px;">
      <h1 style="font-size:22px;color:#92400e;text-align:center;">🌙 Kahani</h1>
      <p style="color:#78716c;text-align:center;font-size:14px;">Welcome! Here's your first story for ${childName || "your little one"}.</p>
      <hr style="border:none;border-top:1px solid #e7e5e4;margin:20px 0;" />
      <h2 style="font-size:18px;color:#1c1917;">${story.title}</h2>
      ${paragraphs}
      <hr style="border:none;border-top:1px solid #e7e5e4;margin:24px 0;" />
      <p style="font-size:12px;color:#a8a29e;text-align:center;">
        You'll receive stories daily at your chosen time.<br/>
        Kahani — real stories from India, told with love.<br/>
        <a href="https://kahani-liard.vercel.app" style="color:#b45309;">Visit Kahani</a>
      </p>
    </div>`;

    // Send to all emails (email1 and optionally email2)
    for (const email of emails) {
      await resend.emails.send({
        from: "Kahani <stories@kahani.space>",
        to: email,
        subject: `🌙 Welcome to Kahani — Here's your first story: ${story.title}`,
        html,
      });
    }

    res.status(200).json({ success: true, title: story.title });
  } catch (err) {
    console.error("Send story error:", err);
    res.status(500).json({ error: "Failed to send story." });
  }
};
