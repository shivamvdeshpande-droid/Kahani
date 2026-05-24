const Airtable = require('airtable');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email1, email2, childName, dims, chars, storyTimes } = req.body;

  if (!email1 || !storyTimes) {
    return res.status(400).json({ error: 'Email and story times are required' });
  }

  const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN })
    .base(process.env.AIRTABLE_BASE_ID);

  try {
    await base('Subscribers').create([{
      fields: {
        Email1: email1,
        Email2: email2 || '',
        ChildName: childName || '',
        Dims: dims || '',
        Chars: chars || '',
        StoryTimes: storyTimes,
        Active: true,
      }
    }]);
    res.status(200).json({ success: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
};
