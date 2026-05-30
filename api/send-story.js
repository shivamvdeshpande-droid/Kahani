// api/send-story.js
const Groq = require("groq-sdk");
const { Resend } = require("resend");
const storyBank = require("./storyBank");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { parentName, parentEmail, childName, childAge, values, characters } = req.body;

    if (!parentEmail) return res.status(400).json({ error: "Email is required" });

    // Pick a random story from the bank
    const story = storyBank[Math.floor(Math.random() * storyBank.length)];

    const prompt = `You are a warm, gentle storyteller helping a parent read a bedtime story to their child.

Here is the child's details:
- Name: ${childName || "little one"}
- Age: ${childAge || "3"} years old
- Values the parent cares about: ${values || "kindness, courage"}
- Favourite characters: ${characters || "none specified"}

Here is the original story — do NOT change the plot, characters, moral, or source. Only simplify the language so a ${childAge || "3"}-year-old can understand it when a parent reads it aloud. Keep all the interactive cues (in parentheses) exactly as they are.

Story title: ${story.title}
Source: ${story.source}
Moral: ${story.moral}

Story:
${story.content}

---

Now rewrite this story in simpler, warmer words for a ${childAge || "3"}-year-old. Address the child as "${childName || "little one"}" once at the start. Keep it short — under 300 words. Keep the moral, the interactive cues, and the ending intact. Do not invent new plot points.

End with:
🌙 Moral: ${story.moral}
📖 Source: ${story.source}`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 600,
      temperature: 0.5,
    });

    const storyText = completion.choices[0]?.message?.content || "Story generation failed.";

    // Format email HTML
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
      <p style="color:#78716c;text-align:center;font-size:14px;">Welcome, ${parentName || "Friend"}! Here's your first story for ${childName || "your little one"}.</p>
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

    await resend.emails.send({
      from: "Kahani <stories@kahani-liard.vercel.app>",
      to: parentEmail,
      subject: `🌙 Welcome to Kahani — Here's your first story: ${story.title}`,
      html,
    });

    res.status(200).json({ success: true, title: story.title });
  } catch (err) {
    console.error("Send story error:", err);
    res.status(500).json({ error: "Failed to send story." });
  }
};
