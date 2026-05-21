const { Resend } = require('resend');
const OpenAI = require('openai');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { emails, childName, dims, chars } = req.body;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const prompt = `Write a bedtime story for a 2-4 year old child named ${childName || "the child"}.
Character values to develop: ${dims || "kindness and courage"}.
Favourite characters or themes: ${chars || "animals"}.
Themes: Indian mythology, animals, or moral tales.
Rules:
- 150-200 words max
- Very simple, soothing language
- End with: ✨ Moral: [one line]
Format: Title first, then story, then moral. No markdown.`;

  try {
    const aiResponse = await client.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }]
    });
    const story = aiResponse.choices?.[0]?.message?.content || "Could not generate story.";

    for (const email of emails) {
      await resend.emails.send({
        from: 'Kahani <onboarding@resend.dev>',
        to: email,
        subject: `🌙 Tonight's Kahani for ${childName || 'your little one'}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0c0e1e; color: #f0e0c0; padding: 40px; border-radius: 16px;">
            <h1 style="text-align: center; font-size: 28px; margin-bottom: 4px;">🌙 Kahani</h1>
            <p style="text-align: center; color: #a09080; margin-bottom: 32px; font-size: 14px;">Tonight's story for ${childName || 'your little one'}</p>
            <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 28px; white-space: pre-wrap; line-height: 1.9; font-size: 15px;">
              ${story}
            </div>
            <p style="text-align: center; color: #a09080; margin-top: 32px; font-size: 12px;">Put the phone down. Look them in the eyes. Tell the story. 🌟</p>
          </div>
        `,
      });
    }
    res.status(200).json({ success: true, story });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
};
