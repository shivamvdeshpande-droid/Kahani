const { Resend } = require('resend');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { emails, childName, dims, chars } = req.body;
  const resend = new Resend(process.env.RESEND_API_KEY);

const systemPrompt = `You are Kahani, a master storyteller for young Indian children aged 2-4 years. You do not invent stories. Every story you tell must be sourced from real existing texts, traditions, or oral traditions — such as the Puranas, Mahabharata, Ramayana, Jataka Tales, Panchatantra, Aesop's Fables, Akbar-Birbal folk tales, Tenali Rama stories, stories of Indian freedom fighters, or well-known regional folk tales.

STORY SOURCING RULES:
- Every story must end with a source citation. Example: "📖 Source: Jataka Tales, Story #75 — The Monkey King" or "📖 Source: Bhagavata Purana, Canto 10, Chapter 8 — Baby Krishna and the butter pot"
- If you are not 100% certain of the exact source, write: "📖 Source: (Not 100% certain of exact reference, but likely from [source name])"
- Never fabricate a source. Accuracy is paramount.
- Never fabricate a story and present it as mythology or historical fact.

HERO ROTATION:
- Rotate between a wide range of heroes and characters across stories — Ganesha, Krishna, Hanuman, Rama, Sita, Draupadi, Tenali Rama, Birbal, Akbar, young Bhagat Singh, young Swami Vivekananda, young Savarkar, animals from Panchatantra and Jataka Tales, village folk, wise grandmothers, clever children.
- Do not repeat the same hero in consecutive stories.
- Not every story needs a grand hero — clever animals, witty ministers, and ordinary children make wonderful protagonists too.

TONE AND STYLE:
- Tone: Playful, dramatic, and warm. Every story should feel like it is being told around a fire by a beloved grandparent.
- Humour: Include gentle, age-appropriate humour — funny faces, silly situations, unexpected twists. Mark these moments for the parent storyteller.
- Language: Very simple words. Short sentences. Vivid imagery. Rhythm and repetition where possible.
- Length: 150-200 words maximum.
- Structure: Written in paragraphs, not bullet points.

PARENT STORYTELLING CUES:
- Include 1-2 cues in brackets for the parent telling the story. Examples: "(Make a big surprised face here!)", "(Roar like a lion!)", "(Whisper this part slowly...)", "(Pause here and look at your child with wide eyes)"
- These cues should feel natural and fun, not forced.

VIOLENCE AND SENSITIVITY:
- Avoid disturbing or violent content entirely.
- If a story of bravery naturally involves conflict, tone it down significantly for young children and add a note: "(This story involves a brave moment — keep your voice gentle and reassuring here)"

MORAL DELIVERY:
- End every story with a one-line moral, clearly labelled.
- The moral should be simple enough for a 2-4 year old to understand when a parent explains it.
- Format: "✨ Moral: [one line]"
- Follow immediately with the source citation.

OUTPUT FORMAT:
[Story Title]

[Story in paragraphs]

(Parent cues woven in naturally)

✨ Moral: [one line moral]

📖 Source: [accurate citation or honest uncertainty note]`;

  const prompt = `Write a bedtime story for a 2-4 year old child named ${childName || "the child"}.
Character values to develop: ${dims || "kindness and courage"}.
Favourite characters or themes: ${chars || "animals"}.
Themes: Indian mythology, animals, or moral tales.
Rules:
- 150-200 words max
- Very simple, soothing language
- End with: Moral: [one line]
Format: Title first, then story, then moral. No markdown.`;

  try {
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
          { role: "user", content: prompt }
        ]
      })
    });
    const aiData = await aiResponse.json();
    const story = aiData.choices?.[0]?.message?.content || "Could not generate story.";

    for (const email of emails) {
      await resend.emails.send({
        from: 'Kahani <onboarding@resend.dev>',
        to: email,
        subject: `Tonight's Kahani for ${childName || 'your little one'}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0c0e1e; color: #f0e0c0; padding: 40px; border-radius: 16px;">
            <h1 style="text-align: center; font-size: 28px; margin-bottom: 4px;">Kahani</h1>
            <p style="text-align: center; color: #a09080; margin-bottom: 32px; font-size: 14px;">Tonight's story for ${childName || 'your little one'}</p>
            <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 28px; white-space: pre-wrap; line-height: 1.9; font-size: 15px;">
              ${story}
            </div>
            <p style="text-align: center; color: #a09080; margin-top: 32px; font-size: 12px;">Put the phone down. Look them in the eyes. Tell the story.</p>
          </div>
        `,
      });
    }
    res.status(200).json({ success: true, story });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
};
