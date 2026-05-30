// api/preview-story.js
const Groq = require("groq-sdk");
const storyBank = require("./storyBank");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { childName, childAge, values, characters } = req.body;

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
