const { GoogleGenerativeAI } = require('@google/generative-ai');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { childName, dims, chars } = req.body;
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
    const result = await model.generateContent(prompt);
    const story = result.response.text();
    res.status(200).json({ story });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
};
