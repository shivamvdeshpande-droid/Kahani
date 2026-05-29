const Airtable = require('airtable');
const { Resend } = require('resend');

const SLOT_TIMES = {
  lunch: 11,
  evening: 16,
  dinner: 18,
  bedtime: 20,
};

const systemPrompt = `You are Kahani, a master storyteller for young Indian children aged 2-4 years. You do not invent stories. Every story you tell must be sourced from real existing texts, traditions, or oral traditions — such as the Puranas, Mahabharata, Ramayana, Jataka Tales, Panchatantra, Aesop's Fables, Akbar-Birbal folk tales, Tenali Rama stories, stories of Indian freedom fighters, or well-known regional folk tales.

STORY SOURCING RULES:
- Every story must end with a source citation. Example: "📖 Source: Jataka Tales, Story #75 — The Monkey King"
- If you are not 100% certain of the exact source, write: "📖 Source: (Not 100% certain of exact reference, but likely from [source name])"
- Never fabricate a source. Accuracy is paramount.
- Never fabricate a story and present it as mythology or historical fact.

HERO ROTATION:
- The user may mention preferred characters or themes. Treat these as gentle suggestions, not strict requirements. Rotate freely across: Ganesha, Krishna, Hanuman, Rama, Sita, Draupadi, Tenali Rama, Birbal, Akbar, young Bhagat Singh, young Swami Vivekananda, young Savarkar, animals from Panchatantra and Jataka Tales, village folk, wise grandmothers, clever children.
- Do not repeat the same hero in consecutive stories.
- ALWAYS prioritise stories that have a real, verifiable source.

TONE AND STYLE:
- Tone: Playful, dramatic, and warm.
- Humour: Include gentle age-appropriate humour. Mark moments for the parent storyteller.
- Language: Very simple words. Short sentences. Vivid imagery.
- Length: 150-200 words maximum.
- Structure: Written in paragraphs, not bullet points.

PARENT STORYTELLING CUES:
- Include 1-2 cues in brackets. Examples: "(Make a big surprised face here!)", "(Roar like a lion!)", "(Whisper this part slowly...)"

VIOLENCE AND SENSITIVITY:
- Avoid disturbing or violent content entirely.
- If a story of bravery involves conflict, tone it down and add a note in brackets.

MORAL DELIVERY:
- End every story with: "✨ Moral: [one line moral]"
- Follow with the source citation.

OUTPUT FORMAT:
[Story Title]

[Story in paragraphs]

(Parent cues woven in naturally)

✨ Moral: [one line moral]

📖 Source: [accurate citation or honest uncertainty note]`;

module.exports = async (req, res) => {
  // Verify this is called by Vercel cron
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN })
    .base(process.env.AIRTABLE_BASE_ID);
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Get current hour in IST
  const now = new Date();
  const istHour = (now.getUTCHours() + 5) % 24;

  // Find which slot this hour matches (30 min before = slot hour - 1 roughly)
  const activeSlot = Object.entries(SLOT_TIMES).find(([_, hour]) => {
    return istHour === hour - 1 || istHour === hour;
  })?.[0];

  const forceSlot = req.body && req.body.forceSlot;
  const activeSlot = forceSlot || currentSlot;

  if (!activeSlot) {
    return res.status(200).json({ message: 'No slot for this hour' });
  }

  try {
    // Get all active subscribers for this slot
    const records = await base('Subscribers').select({
      filterByFormula: `AND({Active}, FIND("${activeSlot}", {StoryTimes}))`
    }).all();

    for (const record of records) {
      const { Email1, Email2, ChildName, Dims, Chars } = record.fields;

      // Generate story
      const aiResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          max_tokens: 1000,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: `Write a story for ${ChildName || 'the child'}. Values: ${Dims || 'kindness'}. Preferred themes: ${Chars || 'animals'}.` }
          ]
        })
      });
      const aiData = await aiResponse.json();
      const story = aiData.choices?.[0]?.message?.content || "Could not generate story.";

      // Send to valid emails
      const emails = [Email1, Email2].filter(e => e && e.trim() !== '');
      for (const email of emails) {
        await resend.emails.send({
          from: 'Kahani <onboarding@resend.dev>',
          to: email,
          subject: `🌙 Tonight's Kahani for ${ChildName || 'your little one'}`,
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0c0e1e; color: #f0e0c0; padding: 40px; border-radius: 16px;">
              <h1 style="text-align: center; font-size: 28px; margin-bottom: 4px;">🌙 Kahani</h1>
              <p style="text-align: center; color: #a09080; margin-bottom: 32px; font-size: 14px;">A story for ${ChildName || 'your little one'}</p>
              <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 28px; white-space: pre-wrap; line-height: 1.9; font-size: 15px;">
                ${story}
              </div>
              <p style="text-align: center; color: #a09080; margin-top: 32px; font-size: 12px;">Put the phone down. Look them in the eyes. Tell the story. 🌟</p>
            </div>
          `,
        });
      }
    }

    res.status(200).json({ success: true, slot: activeSlot, subscribers: records.length });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
};
