// api/preview-story.js
const Groq = require("groq-sdk");
const storyBank = require("./storyBank");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

function pickStory(chars, dims) {
  // Normalise inputs to lowercase arrays
  const charList = (chars || "").toLowerCase().split(",").map(s => s.trim()).filter(Boolean);
  const dimList = (dims || "").toLowerCase().split(",").map(s => s.trim()).filter(Boolean);

  // Score each story by how many user preferences it matches
  const scored = storyBank.map(story => {
    const storyText = [
      story.hero,
      story.theme,
      story.moral,
      ...(story.tags || [])
    ].join(" ").toLowerCase();

    let score = 0;
    for (const c of charList) {
      if (c === "surprise") continue; // skip "Surprise me!"
      if (storyText.includes(c)) score += 2; // character match weighted higher
    }
    for (const d of dimList) {
      if (storyText.includes(d)) score += 1;
    }
    return { story, score };
  });

  // Filter to stories with at least one match
  const matches = scored.filter(s => s.score > 0);

  // If matches found, pick randomly from top scorers
  if (matches.length > 0) {
    const maxScore = Math.max(...matches.map(s => s.score));
    const topMatches = matches.filter(s => s.score === maxScore);
    return topMatches[Math.floor(Math.random() * topMatches.length)].story;
  }

  // Fallback: fully random
  return storyBank[Math.floor(Math.random() * storyBank.length)];
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { childName, dims, chars, language } = req.body;

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

    res.status(200).json({
      story: storyText,
      title: story.title,
      source: story.source,
      moral: story.moral,
    });
  } catch (err) {
    console.error("Preview story error:", err);
    res.status(500).json({ error: "Failed to generate story preview." });
  }
};
