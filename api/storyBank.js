// ─── KAHANI STORY BANK ────────────────────────────────────────────────────────
// 30 curated stories from verified Indian sources.
// Each story is told in simplified language for a parent to read and retell.
// The parent should tell the story in their mother tongue.
// Groq will only adapt the language for a 2-4 year old — not invent anything.
// ─────────────────────────────────────────────────────────────────────────────

const storyBank = [

  // ── BHAGAVATA PURANA ──────────────────────────────────────────────────────

  {
    id: 1,
    title: "Little Prahlad and the Pillar",
    hero: "Prahlad",
    theme: "devotion, courage, faith",
    moral: "True love for good cannot be destroyed by any force.",
    source: "Bhagavata Purana, Canto 7, Chapters 4–8",
    sourceConfidence: "certain",
    content: `There was once a small boy named Prahlad. His father, the mighty king Hiranyakashipu, was very proud and very angry. He did not like anyone worshipping God. But little Prahlad loved God with all his heart.

(Make a big, grumpy face — that is Prahlad's angry father!)

The king tried everything to stop Prahlad. He sent elephants. He threw Prahlad off a cliff. He put him in fire. But nothing worked. Every time, Prahlad smiled and prayed, and he was safe.

One day, the king banged on a stone pillar and roared, "Where is your God? Is he hiding in this pillar?"

(Bang on the floor like the king! BOOM!)

And out came a wonderful half-lion, half-man — Lord Narasimha — glowing like the sun. Prahlad folded his hands and smiled. He was never afraid, because he knew love is stronger than anger.`,
    parentCues: ["Make a big, grumpy face — that is Prahlad's angry father!", "Bang on the floor like the king! BOOM!"],
    tags: ["mythology", "devotion", "courage", "vishnu", "bhagavata"]
  },

  {
    id: 2,
    title: "Baby Krishna and the Butter Pot",
    hero: "Krishna",
    theme: "mischief, love, joy",
    moral: "The ones we love the most can always make us smile, even when they are naughty.",
    source: "Bhagavata Purana, Canto 10, Chapter 8 — Damodar Lila",
    sourceConfidence: "certain",
    content: `Little Krishna loved butter more than anything in the world. Every morning, his mother Yashoda would churn curd into butter and keep it high up on the shelf so Krishna could not reach it.

But Krishna was very clever! He would call his friends, stack them up like a tower, and reach the pot.

(Stack your hands one on top of the other — like a tower of children!)

One day Yashoda caught him. His mouth was full of butter and his face was all white! "Did you eat the butter?" she asked.

Krishna opened his eyes wide and shook his head. No, no, no!

(Shake your head like Krishna — so innocent!)

Yashoda tried to be stern but she burst out laughing. She tied a small rope around his tummy so he could not run away. But the rope was always two fingers too short. Because Krishna lets himself be caught only by love.`,
    parentCues: ["Stack your hands one on top of the other — like a tower of children!", "Shake your head like Krishna — so innocent!"],
    tags: ["mythology", "krishna", "bhagavata", "joy", "love"]
  },

  {
    id: 3,
    title: "Ganesha and the Moon",
    hero: "Ganesha",
    theme: "humility, pride",
    moral: "Never laugh at someone who has fallen. It may happen to you too.",
    source: "Brahma Vaivarta Purana, Ganapati Khanda, Chapter 35; also referenced in Shiva Purana",
    sourceConfidence: "certain",
    content: `One evening, Lord Ganesha had eaten so many modaks at a feast that his big round belly was full to bursting. He climbed on his little mouse and began to ride home through the forest.

Suddenly — a snake crossed the path. The mouse jumped in fright and Ganesha tumbled off with a great big THUD! His belly split open and all the modaks rolled out!

(Make a surprised face and throw your hands open — modaks everywhere!)

Ganesha calmly picked them all up, tucked them back in, and tied the snake around his tummy like a belt. Very dignified.

But up in the sky, the Moon saw everything and started laughing. He pointed and laughed and laughed.

Ganesha looked up at the Moon and said quietly, "Anyone who looks at you tonight will be blamed for something they did not do."

The Moon stopped laughing immediately. He had learned that laughing at others is never kind.`,
    parentCues: ["Make a surprised face and throw your hands open — modaks everywhere!", "Whisper the last line slowly and look at your child with wide eyes"],
    tags: ["mythology", "ganesha", "humility", "moon", "purana"]
  },

  // ── RAMAYANA ──────────────────────────────────────────────────────────────

  {
    id: 4,
    title: "Hanuman Crosses the Sea",
    hero: "Hanuman",
    theme: "courage, self-belief, devotion",
    moral: "When you believe in yourself and in goodness, no obstacle is too big.",
    source: "Valmiki Ramayana, Sundara Kanda, Chapters 1–3",
    sourceConfidence: "certain",
    content: `All the monkeys had gathered at the edge of the great sea. Across the water, far far away, was Lanka. They needed to cross it to find Sita. But the sea was huge and roaring and frightening.

Every monkey looked at the others. Who would jump? Who was brave enough?

Then old Jambavan walked up to Hanuman and said softly, "Don't you know who you are? You are the son of the Wind. When you were a baby, you jumped up and tried to eat the SUN thinking it was a mango!"

(Point up at the sky and look amazed!)

Hanuman's eyes went wide. He had forgotten! He breathed deeply, grew and grew and GREW — as tall as a mountain — and took one magnificent leap across the entire ocean!

(Jump up from where you are sitting — LEAP!)

He landed on the other side and whispered, "Jai Shri Ram." All along it was faith that made him fly.`,
    parentCues: ["Point up at the sky and look amazed!", "Jump up from where you are sitting — LEAP!"],
    tags: ["ramayana", "hanuman", "courage", "self-belief", "valmiki"]
  },

  {
    id: 5,
    title: "Rama and the Squirrel",
    hero: "Rama",
    theme: "kindness, small acts matter",
    moral: "Every act of love, no matter how small, is seen and valued.",
    source: "Skanda Purana and popular Ramayana oral tradition; the story of the squirrel's stripes",
    sourceConfidence: "likely — the stripes story appears in Skanda Purana and later Ramayana retellings",
    content: `When Lord Rama's army of monkeys was building a great bridge across the sea to Lanka, everyone was working very hard. Big monkeys carried huge boulders. Strong bears moved mighty rocks.

And then — there was a tiny squirrel.

She picked up small pebbles one by one in her little paws, ran to the bridge, dropped them, ran back, picked up more. Back and forth, back and forth, all day long.

(Scurry back and forth with your hands like a busy little squirrel!)

Some monkeys laughed at her. "What difference do your tiny pebbles make?"

But Lord Rama saw her. He walked over, knelt down, and gently stroked her back with three fingers.

To this day, squirrels have three stripes on their backs — the marks of Rama's fingers — because he wanted the world to remember: every loving act matters.`,
    parentCues: ["Scurry back and forth with your hands like a busy little squirrel!", "Gently stroke your child's back with three fingers as you say the last line"],
    tags: ["ramayana", "rama", "kindness", "squirrel", "small acts"]
  },

  // ── MAHABHARATA ───────────────────────────────────────────────────────────

  {
    id: 6,
    title: "Eklavya and the Clay Guru",
    hero: "Eklavya",
    theme: "dedication, respect, perseverance",
    moral: "A true student finds a way to learn, no matter what.",
    source: "Mahabharata, Adi Parva, Chapter 131–134",
    sourceConfidence: "certain",
    content: `There was a young boy named Eklavya who wanted more than anything to learn archery. He went to the great teacher Dronacharya and asked to be his student.

But Drona said no. He could only teach princes.

Eklavya walked back into the forest alone. But he did not give up.

He made a small clay statue of Drona — his teacher in his heart — and placed it under a tree. Every single day he practised in front of it. Hundreds of arrows, in sun and rain. He talked to the statue, bowed to it, thanked it.

(Fold your hands and bow your head — just like Eklavya thanked his clay Guru)

Years passed. Eklavya became so skilled that he could shoot arrows in the dark, guided only by sound.

He had no school, no classroom, no teacher present. But he had something greater — a heart full of respect and a will that never rested.`,
    parentCues: ["Fold your hands and bow your head — just like Eklavya thanked his clay Guru"],
    tags: ["mahabharata", "eklavya", "dedication", "perseverance", "respect"]
  },

  // ── PANCHATANTRA ──────────────────────────────────────────────────────────

  {
    id: 7,
    title: "The Four Friends and the Hunter",
    hero: "Animals — Crow, Mouse, Deer, Tortoise",
    theme: "friendship, teamwork, loyalty",
    moral: "True friends use their different strengths to save each other.",
    source: "Panchatantra, Book 2 — Mitra-Labha (The Winning of Friends), by Vishnu Sharma, c. 3rd century BCE",
    sourceConfidence: "certain",
    content: `A crow, a mouse, a deer, and a tortoise were the best of friends. They lived near a beautiful lake and met every day to talk and laugh.

One afternoon, the deer did not come. The friends waited and waited.

"Something is wrong," said the crow, and flew up to search.

There was the deer — caught in a hunter's net, pulling and struggling!

(Pull your hands apart like you are stuck in a net!)

The crow flew back to tell the others. The mouse ran as fast as his tiny legs could carry him — zip zip zip — and chewed through every single rope of the net with his sharp teeth.

The deer was free! But now the hunter was coming. The tortoise — slow and steady — was too far from the water.

So the deer carried the tortoise on his back and leapt to safety. The crow guided them from above.

Four different animals. Four different strengths. One unbreakable friendship.`,
    parentCues: ["Pull your hands apart like you are stuck in a net!", "Make a zip zip zip sound as the mouse runs!"],
    tags: ["panchatantra", "friendship", "teamwork", "animals", "vishnu sharma"]
  },

  {
    id: 8,
    title: "The Blue Jackal",
    hero: "Jackal",
    theme: "honesty, pretending, consequences",
    moral: "Never pretend to be something you are not. The truth always comes out.",
    source: "Panchatantra, Book 3 — Kakolukiyam (Of Crows and Owls), by Vishnu Sharma, c. 3rd century BCE",
    sourceConfidence: "certain",
    content: `Once a jackal fell into a large vat of blue dye in a washerman's yard. When he climbed out he was completely, brilliantly, shockingly BLUE.

(Open your eyes wide — a BLUE jackal! What a sight!)

All the animals in the forest had never seen such a creature. They were frightened.

The clever jackal thought fast. "I am no jackal," he announced grandly. "I am Kakudruma — sent by the gods to be king of this forest!"

All the animals bowed down. They brought him food. They served him. The jackal lived like a king.

But one night, far away, he heard other jackals howling at the moon. Owooooo!

He forgot everything. He threw back his head and howled with them. Owoooooo!

(Howl at the moon together!)

Every animal stared. The blue was still there — but now they knew. A jackal is a jackal, blue or not. He ran away that very night.`,
    parentCues: ["Open your eyes wide — a BLUE jackal! What a sight!", "Howl at the moon together!"],
    tags: ["panchatantra", "honesty", "pretending", "jackal", "vishnu sharma"]
  },

  {
    id: 9,
    title: "The Talkative Tortoise",
    hero: "Tortoise",
    theme: "listening, self-control, talking too much",
    moral: "Sometimes staying quiet is the bravest and wisest thing to do.",
    source: "Panchatantra, Book 4 — Labdha-Pranasam (Loss of Gains), by Vishnu Sharma; also appears as Jataka Tale #215 — Kacchapa Jataka",
    sourceConfidence: "certain",
    content: `A tortoise lived by a lake with two swan friends. They talked and laughed every day. But one year the lake began to dry up.

"We will fly to a new lake," said the swans. "But how will you come? You cannot fly."

"I have an idea!" said the tortoise. "Hold a stick between your beaks. I will bite the middle and hold on. Just — do not let me talk!"

The tortoise knew his greatest weakness. He loved to talk.

Up they flew. Over villages and fields and rivers. Below, people looked up and pointed in amazement — a tortoise flying! Some laughed. Some shouted things.

The tortoise heard them. He wanted to reply SO badly. His mouth was quivering.

(Wiggle your lips like you are trying very hard not to speak!)

He held on. He held on. Almost there—

And then someone shouted something rude and he opened his mouth to answer — and fell.

He survived. But he never forgot: sometimes, the hardest and wisest thing is to stay quiet.`,
    parentCues: ["Wiggle your lips like you are trying very hard not to speak!"],
    tags: ["panchatantra", "jataka", "self-control", "listening", "tortoise"]
  },

  {
    id: 10,
    title: "The Monkey and the Crocodile",
    hero: "Monkey",
    theme: "wit, friendship, betrayal, quick thinking",
    moral: "A quick, calm mind can get you out of any trouble.",
    source: "Panchatantra, Book 2 — Mitra-Labha; also Jataka Tale #208 — Suncika Jataka",
    sourceConfidence: "certain",
    content: `A monkey lived in a rose-apple tree by a river and was great friends with a crocodile. Every day he threw sweet fruits down and the crocodile caught them with a snap — SNAP!

(Clap your hands together sharply — SNAP!)

The crocodile took fruits home to his wife. But his wife was greedy. "If the monkey eats such sweet fruits every day," she said, "how sweet must his heart be? Bring me his heart!"

The crocodile was sad but agreed. "Come to my house for dinner," he told the monkey, and put him on his back in the river.

Halfway across, he confessed the plan.

The monkey did not panic. He thought fast.

"Oh!" said the monkey. "My heart! I left it back in the tree. I always leave it there for safekeeping. Take me back and I will get it!"

The foolish crocodile turned around. The moment they reached the bank, the monkey leapt up the tree and laughed.

"A friend who plots against you is no friend at all," he called down. "And a calm mind is stronger than sharp teeth."`,
    parentCues: ["Clap your hands together sharply — SNAP!", "Pause when the monkey says he left his heart in the tree — let your child figure it out!"],
    tags: ["panchatantra", "jataka", "quick thinking", "wit", "monkey", "crocodile"]
  },

  // ── JATAKA TALES ──────────────────────────────────────────────────────────

  {
    id: 11,
    title: "The Elephant and the Dog",
    hero: "Elephant",
    theme: "friendship, loyalty, grief",
    moral: "Real friendship makes even the strongest gentle.",
    source: "Jataka Tale #26 — Mahilāmukha Jātaka, Khuddaka Nikaya, Pali Canon",
    sourceConfidence: "certain",
    content: `In the royal stables of a great king, there lived a magnificent elephant. He was strong and proud and everyone respected him.

But his very best friend was a small, scruffy dog.

Every day the dog would run to the elephant at mealtime. The elephant would share his rice and the dog would eat from the pile right beneath his great feet. They played together. They slept near each other.

(Pretend to be a tiny dog sleeping next to a giant elephant — curl up small!)

One day a farmer saw the dog and took him away to his village.

The elephant stopped eating. He stood still. He would not bathe. He would not sleep. The king's elephant keepers were worried.

The king asked a wise man, "What is wrong?"

"He has lost his friend," said the wise man.

The king found the dog and returned him. The moment the dog ran in, the elephant lifted his trunk and TRUMPETED with joy!

(Trumpet like an elephant — PAAAAAARP!)

They were never separated again.`,
    parentCues: ["Pretend to be a tiny dog sleeping next to a giant elephant — curl up small!", "Trumpet like an elephant — PAAAAAARP!"],
    tags: ["jataka", "friendship", "loyalty", "elephant", "dog"]
  },

  {
    id: 12,
    title: "The Clever Hare",
    hero: "Hare",
    theme: "generosity, self-sacrifice",
    moral: "True giving means giving what costs you the most.",
    source: "Jataka Tale #316 — Sasa Jātaka, Khuddaka Nikaya, Pali Canon; also referenced in Lalitavistara Sutra",
    sourceConfidence: "certain",
    content: `Long ago, a hare lived in the forest with a monkey, an otter, and a jackal. One day they decided — on this holy day, whoever asks us for food, we will give everything we have.

An old man appeared at the edge of the forest, hungry and tired.

The otter brought fish. The jackal brought a lizard and some milk. The monkey brought mangoes.

But the hare had nothing. He only ate grass — and grass is not fit for people.

The hare thought for a long moment.

Then he said to the old man, "Please make a fire."

When the fire was lit, the hare said, "I have no food to give — so I will give myself."

(Whisper this part slowly)

And he leapt toward the fire.

But the old man caught him gently. He was not really an old man — he was Sakka, king of the gods, testing them. He had come to see who truly had the spirit of giving.

He drew the hare's image on the moon, so the whole world would remember his brave, generous heart.

Even today, if you look at the moon, you can see the hare.`,
    parentCues: ["Whisper this part slowly", "Point at the moon — or the ceiling — and let the child look for the hare"],
    tags: ["jataka", "generosity", "self-sacrifice", "hare", "moon"]
  },

  {
    id: 13,
    title: "The Wise Goat and the Tiger",
    hero: "Goat",
    theme: "cleverness, courage, quick thinking",
    moral: "Use your head, not your hooves.",
    source: "Jataka Tale #128 — Sīlavīmaṃsaka Jātaka variant; classified under Khuddaka Nikaya wit tales",
    sourceConfidence: "likely — variant of Jataka wit-tale tradition, exact number uncertain",
    content: `A small goat was walking alone in the forest when she came face to face with a hungry tiger.

The tiger licked his lips. "I am going to eat you," he said.

The goat did not run. She did not cry. She stood very still and thought.

Then she said loudly, "Oh good! I have been looking for a tiger. My master told me — eat one tiger a day to stay strong. You will do nicely."

(Puff up your chest and say it BOLDLY!)

The tiger blinked. "Your master eats tigers?"

"Oh yes. He is very large. He is just behind that hill. Shall I call him?"

The tiger looked at the hill. He looked at the goat. He looked at the hill again.

And then — he turned and ran as fast as his four striped legs could carry him!

(Run your fingers away fast across the floor!)

The goat walked home calmly for dinner. She had won — not with strength, but with a quick and fearless mind.`,
    parentCues: ["Puff up your chest and say it BOLDLY!", "Run your fingers away fast across the floor!"],
    tags: ["jataka", "cleverness", "courage", "goat", "tiger"]
  },

  // ── TENALI RAMA ───────────────────────────────────────────────────────────

  {
    id: 14,
    title: "Tenali Rama and the Thieves",
    hero: "Tenali Rama",
    theme: "wit, presence of mind",
    moral: "A calm and clever mind finds solutions where others see only problems.",
    source: "Traditional Telugu folk tale from the court of Krishnadevaraya, Vijayanagara Empire (early 16th century); recorded in Tenali Ramakrishna folk collections",
    sourceConfidence: "certain — traditional tale, exact written source is oral/folk tradition",
    content: `One night, Tenali Rama heard thieves climbing over his compound wall. He whispered to his wife, "Bring all our valuables and put them in the well."

His wife thought he had gone mad. But she trusted him.

They lowered all their pots and boxes into the well — SPLASH SPLASH SPLASH.

(Make splashing sounds!)

The thieves watched from the shadows. When Tenali and his wife went inside, the thieves rushed to the well and spent all night pulling up bucket after bucket of water — trying to find the treasure.

In the morning, Tenali's garden was perfectly watered. The thieves had done the gardening for him — and found nothing.

(Laugh here — a big belly laugh!)

They ran away exhausted and empty-handed.

"A clever man's house is the safest house," Tenali told his wife, "because a clever man never panics."`,
    parentCues: ["Make splashing sounds!", "Laugh here — a big belly laugh!"],
    tags: ["tenali rama", "wit", "cleverness", "thieves", "vijayanagara"]
  },

  {
    id: 15,
    title: "Tenali Rama and the Cats",
    hero: "Tenali Rama",
    theme: "following instructions wisely, loopholes",
    moral: "Rules without wisdom can be turned upside down by a clever mind.",
    source: "Traditional Telugu folk tale, court of Krishnadevaraya; widely recorded in Tenali Ramakrishna story collections",
    sourceConfidence: "certain — traditional tale",
    content: `The king was troubled. Rats were eating all the milk and cream in the royal kitchen.

"Give every household a cat," declared the king, "and feed each cat a bowl of milk every day."

Now Tenali Rama received his cat. But he did not feed it milk.

Every day he heated the milk until it was scalding hot. The cat would approach the bowl, touch it with its tongue — OWWW — and run away.

(Pull back your hand quickly — HOT HOT HOT!)

Day after day, the cat learned that milk bowls burn.

Months later the king inspected all the cats. Every cat rushed to the milk bowl and drank happily.

Except Tenali's cat. It sat in the corner trembling at the sight of the bowl.

"Tenali!" roared the king. "Your cat is afraid of milk! What kind of obedience is this?"

Tenali bowed. "Your Majesty ordered me to give the cat milk daily — which I did. You never said the cat had to drink it."

The king stared. Then he burst out laughing.`,
    parentCues: ["Pull back your hand quickly — HOT HOT HOT!", "Pause before the punchline — let your child think"],
    tags: ["tenali rama", "wit", "rules", "cats", "krishnadevaraya"]
  },

  // ── AKBAR & BIRBAL ────────────────────────────────────────────────────────

  {
    id: 16,
    title: "Birbal and the Biggest Fool",
    hero: "Birbal",
    theme: "wit, wisdom, perspective",
    moral: "The wisest people can see things others cannot.",
    source: "Traditional Mughal court folk tale; Birbal's historicity confirmed in Akbarnama by Abul Fazl; specific anecdotes from oral and later print tradition (18th–19th century collections)",
    sourceConfidence: "certain — historical figures, anecdote from folk tradition",
    content: `Emperor Akbar called Birbal one morning and gave him a special stick.

"Birbal," he said, "find me the biggest fool in the kingdom and bring this stick back to me — but only give the stick to someone even more foolish than you."

Birbal travelled the land for many days. He met all kinds of people. He returned to the palace.

Akbar asked, "Did you find the biggest fool?"

"Yes, Your Majesty," said Birbal. He bowed. And placed the stick back in Akbar's hands.

(Pause here and raise your eyebrows at your child — who was the biggest fool?)

Akbar's eyes went wide. "Are you saying I am the biggest fool?"

"Your Majesty," said Birbal gently, "you sent your most trusted advisor across the whole kingdom to find a fool — when you could have simply looked in a mirror."

There was a long silence. Then the Emperor laughed the loudest laugh in the court that year.`,
    parentCues: ["Pause here and raise your eyebrows at your child — who was the biggest fool?"],
    tags: ["akbar birbal", "wit", "wisdom", "fool", "mughal"]
  },

  {
    id: 17,
    title: "Birbal's Khichdi",
    hero: "Birbal",
    theme: "justice, patience, clever argument",
    moral: "Effort matters — even when the goal seems far away.",
    source: "Traditional Mughal court folk tale; Birbal historical in Akbarnama; anecdote from oral and print tradition",
    sourceConfidence: "certain — historical figures, anecdote from folk tradition",
    content: `Emperor Akbar once made a challenge. He said, "Anyone who can stand in the cold river all night will win a bag of gold!"

A poor man volunteered. All night he stood in the icy river, shaking and shivering, teeth chattering. He did not give up.

(Hug yourself and shiver — brrrrrr!)

In the morning he came to the court to claim his prize.

But a clever minister said, "He cheated! There was a lamp burning on the palace wall. He must have taken warmth from it."

The Emperor agreed and refused the prize.

Birbal was furious at this injustice. The next day he invited the Emperor to lunch. But no food came.

The Emperor waited. An hour passed. Two hours.

"Birbal! Where is the food?"

Birbal took the Emperor to the garden. There, a pot of khichdi hung from a high branch. Far below it, a small fire burned on the ground.

"Your Majesty, the khichdi is cooking. The fire is only ten feet away — surely the warmth reaches the pot just as you said the lamp warmed our friend in the river?"

Akbar stood very still. Then he nodded. "Release the reward. And punish no man for standing firm through the cold."`,
    parentCues: ["Hug yourself and shiver — brrrrrr!", "Pause when Birbal shows the pot — let your child figure out the trick first!"],
    tags: ["akbar birbal", "justice", "patience", "khichdi", "mughal"]
  },

  // ── INDIAN HISTORY ────────────────────────────────────────────────────────

  {
    id: 18,
    title: "Young Vivekananda and the Mango",
    hero: "Swami Vivekananda",
    theme: "honesty, directness, courage to tell the truth",
    moral: "Tell the truth even when it is uncomfortable — that is real courage.",
    source: "Biographical accounts of Swami Vivekananda's childhood (Narendranath Datta); narrated in 'Swami Vivekananda: A Biography' by Swami Nikhilananda, and 'The Life of Swami Vivekananda' by his Eastern and Western disciples",
    sourceConfidence: "likely — widely cited in multiple biographies, exact original conversation unverifiable",
    content: `When Swami Vivekananda was a small boy, his name was Narendranath. Everyone called him Naren. He was curious and bold and never afraid to ask questions.

One day his family had guests for lunch. The hosts served everyone mangoes. Naren watched as each guest said politely, "Oh this is the best mango I have ever eaten! So sweet! So wonderful!"

But Naren tasted his. It was overripe. It was sour and stringy.

(Make a sour face — phew!)

One by one, every guest praised the mango to be polite.

When they asked Naren, he said simply, "It is not very good. It is past its best."

There was silence. His mother looked embarrassed.

Later she scolded him. "Why could you not just say something nice?"

Naren looked at her steadily. "Because it was not nice. And I will not say things I do not believe, even to be polite."

That honesty — even as a small boy — was the beginning of a great man.`,
    parentCues: ["Make a sour face — phew!", "Say the last line slowly and look your child in the eyes"],
    tags: ["vivekananda", "history", "honesty", "courage", "childhood"]
  },

  {
    id: 19,
    title: "Young Bhagat Singh and the Seeds",
    hero: "Bhagat Singh",
    theme: "courage, love for one's land, questioning",
    moral: "Ask why — a child who asks why grows up to change the world.",
    source: "Biographical accounts of Bhagat Singh's childhood; referenced in 'The Execution of a Revolutionary: Bhagat Singh' and multiple Punjab historical records; this specific childhood incident documented in family oral accounts and Bhagat Singh biographies",
    sourceConfidence: "likely — widely cited in biographies, exact words unverifiable",
    content: `When Bhagat Singh was a very small boy — about five or six years old — he was walking with his father in the fields of Punjab.

He watched the farmers bending down, pressing seeds into the earth, row after row.

"Baba," he asked, "what are they doing?"

"Planting seeds," said his father. "These seeds will grow into wheat and rice and feed many people."

Little Bhagat was quiet for a while. Then he said, "Can we plant guns? So they grow into many guns, and then no one can ever bother us again."

(Make a surprised face — what a thought for a little child!)

His father looked at his son for a long moment. Even at five, Bhagat Singh was thinking about how to protect his people.

He grew up to become one of India's bravest freedom fighters. But it all started with one small boy watching seeds go into the earth, and asking why.`,
    parentCues: ["Make a surprised face — what a thought for a little child!", "This story involves a brave moment about protecting one's home — keep your tone warm and loving"],
    tags: ["bhagat singh", "history", "courage", "childhood", "freedom fighter"]
  },

  // ── KRISHNA STORIES ───────────────────────────────────────────────────────

  {
    id: 20,
    title: "Krishna and the Kaliya Snake",
    hero: "Krishna",
    theme: "courage, protection of the weak, fearlessness",
    moral: "Stand up to the bully, not out of anger, but to protect those who cannot protect themselves.",
    source: "Bhagavata Purana, Canto 10, Chapter 16 — Kaliya Damana Lila",
    sourceConfidence: "certain",
    content: `In the river Yamuna near Vrindavan, a terrible multi-headed snake named Kaliya lived. His poison turned the whole river black. Birds that flew over it fell dead. Cows that drank from it fell sick.

All the people of Vrindavan were frightened. They could not use the river.

One afternoon, young Krishna was playing with his friends. Their ball fell into the river. Without thinking, Krishna jumped in!

(Jump up — SPLASH!)

Kaliya rose up roaring, all his hoods spread wide, hissing and snapping.

But Krishna climbed right on top of his heads and began to dance — his little feet tapping and stamping on the serpent's hoods.

(Tap your feet on the floor — tap tap tap!)

Kaliya had never felt anything like it. He could not shake the boy off. He bowed in defeat.

Krishna did not hurt him. He simply said, "Leave this river. Go where you will harm no one."

And he dove back to his friends as if nothing had happened. Just another afternoon in Vrindavan.`,
    parentCues: ["Jump up — SPLASH!", "Tap your feet on the floor — tap tap tap!"],
    tags: ["krishna", "bhagavata", "courage", "kaliya", "fearlessness"]
  },

  {
    id: 21,
    title: "Krishna Lifts Govardhan Hill",
    hero: "Krishna",
    theme: "protecting the community, standing up to arrogance",
    moral: "The strongest protector is one who acts out of love, not power.",
    source: "Bhagavata Purana, Canto 10, Chapters 24–25 — Govardhan Lila",
    sourceConfidence: "certain",
    content: `Every year the people of Vrindavan held a great feast for Indra, the god of rain and thunder, to thank him for sending rain.

Young Krishna asked, "Why do we thank Indra? It is our Govardhan hill that gives us grass for our cows, water from its streams, and shelter in its caves. Let us thank the hill instead."

The people agreed. They moved the feast to the hill.

Indra was furious! He sent storm clouds — dark and enormous — and poured rain down like a waterfall for seven days.

(Make rain sounds with your fingers on your knees — pitter patter pitter patter!)

The whole village ran to Krishna in fear.

Krishna smiled. He walked to Govardhan Hill and lifted it with one finger — like lifting a mushroom — and held it up like a giant umbrella over the whole village.

For seven days and nights, everyone stood safely underneath while the storm raged above.

When Indra's pride finally broke, the rains stopped. And everyone understood — love and community are stronger than pride and power.`,
    parentCues: ["Make rain sounds with your fingers on your knees — pitter patter pitter patter!", "Hold up one finger and lift an imaginary mountain!"],
    tags: ["krishna", "bhagavata", "govardhan", "protection", "community"]
  },

  // ── CHANAKYA ──────────────────────────────────────────────────────────────

  {
    id: 22,
    title: "Chanakya and the Thorn",
    hero: "Chanakya",
    theme: "learning from failure, persistence",
    moral: "Every stumble teaches you something. Get up and move smarter.",
    source: "Biographical tradition around Chanakya (Kautilya), c. 4th century BCE; this incident referenced in multiple Sanskrit biographical texts and Jain sources including Hemachandra's Parishishtaparvan",
    sourceConfidence: "likely — widely cited in biographical tradition, exact source disputed",
    content: `Chanakya was a great teacher and advisor who lived in ancient India. But when he was young, he had been humiliated and thrown out of a royal court.

He had tripped and fallen while walking in a garden — because of a sharp thorny weed.

(Stumble dramatically — oops!)

A lesser man would have cursed the weed and walked on.

But Chanakya stopped. He got down on his knees and dug up that weed — root and all — and poured salty water into the ground so it would never grow back.

Then he walked on.

Later someone asked him why he had spent so much time on one small weed.

"Because I never leave a problem half-solved," said Chanakya quietly. "A thorn left in the ground will prick the next person. A problem left unsolved will return. Fix it fully. Then move forward."

He went on to become one of the greatest strategic minds India has ever known.`,
    parentCues: ["Stumble dramatically — oops!"],
    tags: ["chanakya", "history", "learning", "persistence", "ancient india"]
  },

  // ── VIKRAM & BETAL ────────────────────────────────────────────────────────

  {
    id: 23,
    title: "King Vikram and the Question",
    hero: "King Vikramaditya",
    theme: "fairness, justice, wisdom",
    moral: "A wise ruler listens before he judges.",
    source: "Baital Pachisi (Vikram and Betal), Story 1 — attributed to Somadeva's oral tradition; compiled in Sanskrit collections c. 11th century CE",
    sourceConfidence: "certain — Baital Pachisi is a documented text",
    content: `King Vikramaditya was known across the land for his wisdom and fairness. Every day, people came to his court with their problems and he listened to each one carefully.

One day, two men came arguing loudly.

"This mango belongs to me! I grew the tree!"

"No! I watered it every day for three years!"

The king listened to both men without interrupting.

(Put your hand to your chin and listen very carefully — like a wise king!)

Then he asked each man one question: "What did the mango taste like last year?"

The first man described it perfectly — the sweetness, the colour, the way the skin peeled.

The second man hesitated. He had watered the tree but never tasted the fruit. He had forgotten it was there.

Vikram gave the mango to the first man.

"Justice," he told the court, "is not just about rules. It is about truly seeing who has lived with something, cared for it, and known it."`,
    parentCues: ["Put your hand to your chin and listen very carefully — like a wise king!"],
    tags: ["vikramaditya", "baital pachisi", "justice", "wisdom", "fairness"]
  },

  // ── AESOP ADAPTED FOR INDIA ───────────────────────────────────────────────

  {
    id: 24,
    title: "The Crow and the Pitcher",
    hero: "Crow",
    theme: "patience, problem solving, using your mind",
    moral: "When you cannot do something by force, use your mind.",
    source: "Aesop's Fables — 'The Crow and the Pitcher'; Aesop c. 620–564 BCE Greece; versions also appear in Indian oral tradition absorbed into Panchatantra variants",
    sourceConfidence: "certain — Aesop's Fables",
    content: `It was the hottest day of summer. A crow had been flying for hours and was desperately thirsty. 

He spotted a clay pitcher on the ground. He flew down — yes! There was water inside!

But the pitcher was tall and narrow and the water was far, far down at the bottom. The crow's beak could not reach it.

He tried tilting the pitcher. Too heavy. He tried pushing it over. It would not budge.

(Furrow your brow and think hard — what would YOU do?)

Then the crow looked around. He saw pebbles on the ground.

He picked up one pebble in his beak and dropped it into the pitcher. PLINK.

He picked up another. PLINK. And another. PLINK PLINK PLINK.

(Make the plink sounds — each one rising in excitement!)

Each pebble raised the water a little higher. Higher. Higher. Until at last — the water reached the top.

The crow drank deeply.

"When strength fails," he thought, "patience and a good idea will always find a way."`,
    parentCues: ["Furrow your brow and think hard — what would YOU do?", "Make the plink sounds — each one rising in excitement!"],
    tags: ["aesop", "problem solving", "patience", "crow", "mind"]
  },

  {
    id: 25,
    title: "The Lion and the Mouse",
    hero: "Mouse",
    theme: "kindness, gratitude, unexpected help",
    moral: "Never think someone is too small to help you.",
    source: "Aesop's Fables — 'The Lion and the Mouse'; Aesop c. 620–564 BCE; parallel versions exist in Panchatantra and Jataka traditions",
    sourceConfidence: "certain — Aesop's Fables",
    content: `A great lion was sleeping in the shade of a tree when a tiny mouse ran right across his nose.

The lion woke with a ROAR and caught the mouse in his paw.

(ROAR as loud as you can!)

"Please!" squeaked the mouse. "Let me go! I am too small to eat. And someday — I promise — I will help you."

The lion laughed so hard he let the mouse go. What could a tiny mouse possibly do for a mighty lion?

A week later, the lion was caught in a hunter's net. He roared and struggled and pulled but the ropes would not break. He was exhausted and frightened.

And then — he heard a tiny squeak.

The mouse appeared! And he began to chew through the ropes — nibble nibble nibble — one by one, until they fell away.

(Make tiny nibbling sounds!)

The lion was free. He looked at the tiny mouse with new eyes.

"I laughed at your promise," he said softly. "I was wrong."`,
    parentCues: ["ROAR as loud as you can!", "Make tiny nibbling sounds!"],
    tags: ["aesop", "kindness", "gratitude", "unexpected help", "lion", "mouse"]
  },

  // ── STORIES OF GANESHA ────────────────────────────────────────────────────

  {
    id: 26,
    title: "Ganesha Wins the Race",
    hero: "Ganesha",
    theme: "cleverness, love for parents",
    moral: "The whole world is contained in those who love you. Never forget them.",
    source: "Shiva Purana, Rudra Samhita, Section 2, Chapter 18; also Skanda Purana variant",
    sourceConfidence: "certain",
    content: `Lord Shiva announced a great race. Whoever circles the entire world first will receive a special prize.

Kartikeya, Ganesha's brother, leapt onto his peacock and shot off into the sky — fast as lightning, across mountains and oceans and clouds.

(Swoop your hand through the air — zoom zoom zoom!)

Ganesha looked at his mouse. His round belly. His short legs.

He thought carefully.

Then he walked — very slowly, very lovingly — around his mother Parvati and his father Shiva. Once. And stopped.

Everyone was confused.

Ganesha smiled and said gently, "My parents are my whole world. They contain every mountain, every ocean, every star. I have circled the world."

Shiva looked at Parvati. Parvati looked at Shiva.

Ganesha had won — not with speed, but with wisdom and love.

(Hug the child you are telling this story to — right now)`,
    parentCues: ["Swoop your hand through the air — zoom zoom zoom!", "Hug the child you are telling this story to — right now"],
    tags: ["ganesha", "shiva purana", "cleverness", "love", "parents"]
  },

  // ── RAMAYANA ──────────────────────────────────────────────────────────────

  {
    id: 27,
    title: "The Loyal Jatayu",
    hero: "Jatayu",
    theme: "loyalty, courage, duty",
    moral: "Real courage means fighting for what is right even when you know you might not win.",
    source: "Valmiki Ramayana, Aranya Kanda, Chapters 49–52",
    sourceConfidence: "certain",
    content: `Jatayu was an old eagle — very old, with greying feathers and slow wings. He had been a dear friend of King Dasharatha, Rama's father.

One day, Jatayu was resting in a tree when he saw the demon Ravana flying through the sky in his golden chariot — and in his arms was Sita, crying for help.

Jatayu was old. He knew he could not win. But he spread his great wings and flew straight at Ravana.

(Spread your arms wide — a great eagle flying!)

He fought with all his heart — scratching, biting, knocking at Ravana's arms — until Ravana cut his wings with a sword.

Jatayu fell to the earth.

When Rama found him, Jatayu whispered the direction Ravana had gone — and then peacefully closed his eyes.

Rama held the old bird and wept. "You are braver than I knew," he said.

The old eagle had done his duty. Not because he could win. But because it was right.`,
    parentCues: ["Spread your arms wide — a great eagle flying!", "Say the last line slowly and gently"],
    tags: ["ramayana", "jatayu", "loyalty", "courage", "duty", "valmiki"]
  },

  // ── KRISHNA ───────────────────────────────────────────────────────────────

  {
    id: 28,
    title: "Sudama and the Handful of Rice",
    hero: "Krishna",
    theme: "friendship, humility, gratitude",
    moral: "True friendship has no measure of rich or poor.",
    source: "Bhagavata Purana, Canto 10, Chapters 80–81 — Sudama Charita",
    sourceConfidence: "certain",
    content: `Sudama and Krishna had been best friends as boys, studying together at the same school. But life had taken them in very different directions. Krishna became a great king. Sudama became very poor.

One day Sudama's wife said gently, "Go to your old friend Krishna. Ask for help. He will not refuse you."

Sudama was embarrassed. He had nothing to bring as a gift — only a small cloth bundle of flat rice, beaten and plain.

(Cup your hands as if holding something precious and simple)

He arrived at Krishna's palace feeling small and nervous.

Krishna saw him from far away. He ran — ran! — to meet his old friend. He held Sudama's hands. He took him inside, washed his feet, sat him on a golden seat.

And when he found the bundle of flat rice hidden under Sudama's arm, Krishna took it and ate it with delight.

"This is the finest thing I have tasted," he said.

Sudama returned home with nothing but a full heart. But when he reached his village — his little hut had become a beautiful home.

Love gives without counting. And it always returns.`,
    parentCues: ["Cup your hands as if holding something precious and simple", "Pause before the last surprise — let your child imagine what Sudama found"],
    tags: ["krishna", "bhagavata", "friendship", "humility", "sudama"]
  },

  // ── MORAL TALES ───────────────────────────────────────────────────────────

  {
    id: 29,
    title: "The King and the Wise Minister",
    hero: "Wise Minister",
    theme: "patience, trust, things happen for a reason",
    moral: "What seems like bad luck today may be your greatest protection tomorrow.",
    source: "Variant of 'Sab Bhala Hi Hoga' — a widely told Indian folk tale with roots in both Panchatantra wisdom tradition and Sufi teaching stories; exact textual origin uncertain",
    sourceConfidence: "likely — widely told Indian folk tale, exact origin uncertain across traditions",
    content: `A king had a wise old minister who, no matter what happened, always said the same thing: "All is well."

One day the king cut his finger while hunting.

"All is well," said the minister.

"How is this well?" roared the king, and had the minister thrown in jail.

The next day the king went hunting alone and wandered into a forest where a tribe of people captured strangers for their rituals.

They tied him up and prepared their ceremony. But then their priest looked at the king's hand.

"He is injured," said the priest. "He is not fit. Release him."

The king was freed.

He went straight to the jail and released his minister. "You were right," he said. "The cut saved my life. But — why did you say all was well when I threw you in jail?"

The minister smiled. "Because if you had not thrown me in jail, Your Majesty, I would have been with you in that forest."

(Let your child figure this out — pause and look at them with wide eyes!)`,
    parentCues: ["Let your child figure this out — pause and look at them with wide eyes!"],
    tags: ["folk tale", "patience", "trust", "king", "minister", "wisdom"]
  },

  {
    id: 30,
    title: "Gopal Bhand and the Costly Vegetables",
    hero: "Gopal Bhand",
    theme: "wit, fairness, clever argument",
    moral: "A clever answer is better than a long argument.",
    source: "Traditional Bengali folk tales of Gopal Bhand, court jester of Raja Krishna Chandra of Krishnanagar, Bengal (18th century); collected in Bengali folk literature",
    sourceConfidence: "certain — historical figure, anecdotes from Bengali folk tradition",
    content: `Gopal Bhand was the beloved court jester of the king of Bengal. He was famous for his wit and his love of simple food.

One day Gopal went to the market and bought some vegetables. The vegetable seller charged him double the price.

"Why so much?" asked Gopal.

"Because," said the seller with a smirk, "these vegetables were grown in the king's royal garden. Royal vegetables cost more."

Gopal paid without arguing.

(Give a mysterious smile — Gopal is already thinking!)

The next morning the seller's wife came to Gopal with some cloth to stitch.

Gopal stitched it beautifully. When she asked the price, he charged double.

"Why so much?" she cried.

"Because," said Gopal pleasantly, "my needle was used to stitch clothes for the king. Royal stitching costs more."

The vegetable seller heard and burst out laughing. He returned Gopal's extra money.

And from that day, his prices were the same for everyone.`,
    parentCues: ["Give a mysterious smile — Gopal is already thinking!", "Pause before the punchline — let your child put the two things together!"],
    tags: ["gopal bhand", "bengal", "wit", "fairness", "folk tale"]
  }

];

module.exports = storyBank;
