const OpenAI = require('openai');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { childName, dims, chars } = req.body;
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const prompt = `Write a bedtime story for a 2-4 year old child named ${childName || "the child"}.
Character values to develop: ${dims || "kindness and courage"}.
Favourite characters or themes: ${chars || "animals"}.
Themes: Indian mythology, animals, or moral tales (pick what fits best).
Rules:
- 150-200 words max
- Very simple, soothing language
- Warm and imaginative
- End with: ✨ Moral: [one line]
Format: Title first, then story, then moral. No markdown.`;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }]
    });
    const story = response.choices?.[0]?.message?.content || "Could not generate story.";
    res.status(200).json({ story });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
};
