const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { emails, story, childName } = req.body;

  try {
    for (const email of emails) {
      await resend.emails.send({
        from: 'Kahani <onboarding@resend.dev>',
        to: email,
        subject: `🌙 Tonight's Kahani for ${childName}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0c0e1e; color: #f0e0c0; padding: 40px; border-radius: 16px;">
            <h1 style="text-align: center; font-size: 28px; margin-bottom: 4px;">🌙 Kahani</h1>
            <p style="text-align: center; color: #a09080; margin-bottom: 32px; font-size: 14px;">Tonight's story for ${childName}</p>
            <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 28px; white-space: pre-wrap; line-height: 1.9; font-size: 15px;">
              ${story}
            </div>
            <p style="text-align: center; color: #a09080; margin-top: 32px; font-size: 12px;">Put the phone down. Look them in the eyes. Tell the story. 🌟</p>
          </div>
        `,
      });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
