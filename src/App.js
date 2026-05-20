import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const CHARACTER_DIMS = [
  { id: "courage", label: "Courage", emoji: "🦁" },
  { id: "kindness", label: "Kindness", emoji: "🌸" },
  { id: "honesty", label: "Honesty", emoji: "⭐" },
  { id: "curiosity", label: "Curiosity", emoji: "🔭" },
  { id: "resilience", label: "Resilience", emoji: "🌱" },
  { id: "sharing", label: "Sharing", emoji: "🤝" },
  { id: "respect", label: "Respect", emoji: "🙏" },
  { id: "creativity", label: "Creativity", emoji: "🎨" },
];

const FAV_CHARACTERS = [
  { id: "ganesha", label: "Ganesha", emoji: "🐘" },
  { id: "krishna", label: "Krishna", emoji: "🪶" },
  { id: "hanuman", label: "Hanuman", emoji: "🌟" },
  { id: "animals", label: "Talking Animals", emoji: "🦊" },
  { id: "princess", label: "Princess / Prince", emoji: "👑" },
  { id: "villager", label: "Village Kids", emoji: "🏡" },
  { id: "nature", label: "Trees & Nature Spirits", emoji: "🌳" },
  { id: "surprise", label: "Surprise me!", emoji: "✨" },
];

const STORY_TIMES = [
  { id: "lunch", label: "Lunch", sub: "12–2 PM", emoji: "☀️" },
  { id: "evening", label: "Evening", sub: "5–7 PM", emoji: "🌇" },
  { id: "dinner", label: "Dinner", sub: "7–9 PM", emoji: "🍽️" },
  { id: "bedtime", label: "Bedtime", sub: "9–10 PM", emoji: "🌙" },
];

const LANGUAGES = [
  { id: "marathi", label: "Marathi", flag: "🟠" },
  { id: "hindi", label: "Hindi", flag: "🟢" },
  { id: "english", label: "English", flag: "🔵" },
  { id: "kannada", label: "Kannada", flag: "🟡" },
];

const INSTRUCTIONS = [
  {
    num: "01",
    title: "Put the phone down. Actually.",
    body: "You will receive this story in your email. Read it, learn it, then set your phone aside. Do not read it off a screen while your child sits next to you. That defeats the entire purpose of this exercise.",
    icon: "📵",
  },
  {
    num: "02",
    title: "Use your face. Use your voice.",
    body: "Make faces. Do accents. Whisper, roar, gasp. Your child will stop whatever they are doing and look straight into your eyes. That is the moment. Hold it. Then deliver the moral.",
    icon: "🎭",
  },
  {
    num: "03",
    title: "Get the story 30 minutes before.",
    body: "Set your delivery time 30 minutes before actual storytime. That buffer is for you — to absorb the story, internalize it, and show up fully present instead of winging it.",
    icon: "⏱️",
  },
  {
    num: "04",
    title: "No screens in the room. None.",
    body: "TV off. Phone in another room. Tablet out of sight. Every glowing rectangle in the room competes with you. You must be the most interesting thing in the room — and you will be.",
    icon: "🚫",
  },
  {
    num: "05",
    title: "These are seeds, not scripts.",
    body: "The story you receive is a starting point. Stretch it, shrink it, invent a new ending. Add a character named after your child. Make it yours. Creativity is contagious.",
    icon: "🌱",
  },
  {
    num: "06",
    title: "Mother tongue first. Always.",
    body: "Even if the story arrives in English — tell it in your mother tongue first. Marathi, Hindi, Kannada — whatever runs in your blood. Your child will be hooked. Then give them English if you must. But mother tongue first.",
    icon: "🗣️",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Toggle({ selected, onToggle, label, emoji, sub }) {
  return (
    <button
      onClick={onToggle}
      style={{
        padding: "10px 14px",
        borderRadius: 12,
        border: selected ? "1.5px solid #E8A838" : "1.5px solid rgba(255,255,255,0.1)",
        background: selected ? "rgba(232,168,56,0.15)" : "rgba(255,255,255,0.03)",
        color: selected ? "#E8A838" : "#a09080",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 13,
        cursor: "pointer",
        transition: "all 0.18s",
        display: "flex",
        alignItems: "center",
        gap: 7,
        whiteSpace: "nowrap",
      }}
    >
      {emoji && <span>{emoji}</span>}
      <span style={{ fontWeight: selected ? 500 : 400 }}>{label}</span>
      {sub && <span style={{ fontSize: 11, opacity: 0.6 }}>{sub}</span>}
    </button>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 10,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(200,170,120,0.55)",
        marginBottom: 12,
      }}>{title}</p>
      {children}
    </div>
  );
}

// ─── Tab: Setup ───────────────────────────────────────────────────────────────

function SetupTab() {
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [childName, setChildName] = useState("");
  const [dims, setDims] = useState([]);
  const [chars, setChars] = useState([]);
  const [storyTimes, setStoryTimes] = useState([]);
  const [language, setLanguage] = useState("");
  const [status, setStatus] = useState("idle");
  const [preview, setPreview] = useState("");
  const [previewing, setPreviewing] = useState(false);

  const SLOT_LABELS = {
    lunch: "Lunch (sends 11:30 AM)", evening: "Evening (sends 4:30 PM)",
    dinner: "Dinner (sends 6:30 PM)", bedtime: "Bedtime (sends 8:30 PM)",
  };

  function toggle(arr, setArr, val) {
    setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val]);
  }

  async function generateStory() {
    const dimLabels = CHARACTER_DIMENSIONS_FOR_IDS(dims);
    const charLabels = FAV_CHARACTERS.filter(c => chars.includes(c.id)).map(c => c.label).join(", ") || "any";
    const prompt = `Write a bedtime story for a 2-4 year old child named ${childName || "the child"}.
Character values to develop: ${dimLabels || "kindness and courage"}.
Favourite characters or themes: ${charLabels}.
Themes: Indian mythology, animals, or moral tales (pick what fits best).
Rules:
- 150-200 words max
- Very simple, soothing language
- Warm and imaginative
- End with: ✨ Moral: [one line]
Format: Title first, then story, then moral. No markdown.`;

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const data = await res.json();
    return data.content?.[0]?.text || "Could not generate story.";
  }

  function CHARACTER_DIMENSIONS_FOR_IDS(ids) {
    return CHARACTER_DIMS.filter(d => ids.includes(d.id)).map(d => d.label).join(", ");
  }

  async function handlePreview() {
    setPreviewing(true);
    setPreview("");
    const s = await generateStory();
    setPreview(s);
    setPreviewing(false);
  }

  async function handleActivate() {
    if (!email1 || !email2 || storyTimes.length === 0) return;
    setStatus("active");
  }

  const isActive = status === "active";

  return (
    <div style={{ padding: "24px 20px 100px" }}>
      {/* Header */}
      <div style={{ marginBottom: 32, textAlign: "center" }}>
        <div style={{ fontSize: 44, marginBottom: 8 }}>🌙</div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 26,
          color: "#f0e0c0",
          fontWeight: 600,
          letterSpacing: "-0.01em",
          lineHeight: 1.2,
        }}>
          Kahani
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          color: "rgba(200,170,120,0.6)",
          fontSize: 13,
          marginTop: 4,
        }}>
          Daily stories. Delivered to you. Told by you.
        </p>
      </div>

      {/* Child's name */}
      <Section title="Your child's name">
        <input
          className="inp"
          placeholder="e.g. Arjun, Aanya…"
          value={childName}
          onChange={e => setChildName(e.target.value)}
          disabled={isActive}
        />
      </Section>

      {/* Character dimensions */}
      <Section title="Values you want to nurture (pick up to 3)">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {CHARACTER_DIMS.map(d => (
            <Toggle
              key={d.id}
              selected={dims.includes(d.id)}
              onToggle={() => dims.length < 3 || dims.includes(d.id) ? toggle(dims, setDims, d.id) : null}
              label={d.label}
              emoji={d.emoji}
            />
          ))}
        </div>
      </Section>

      {/* Favourite characters */}
      <Section title="Your child's favourite characters / themes">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {FAV_CHARACTERS.map(c => (
            <Toggle
              key={c.id}
              selected={chars.includes(c.id)}
              onToggle={() => toggle(chars, setChars, c.id)}
              label={c.label}
              emoji={c.emoji}
            />
          ))}
        </div>
      </Section>

      {/* Storytime — multi select */}
      <Section title="Storytime slots (select all that apply — one story sent 30 min before each)">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {STORY_TIMES.map(t => (
            <Toggle
              key={t.id}
              selected={storyTimes.includes(t.id)}
              onToggle={() => !isActive && toggle(storyTimes, setStoryTimes, t.id)}
              label={t.label}
              emoji={t.emoji}
              sub={t.sub}
            />
          ))}
        </div>
        {storyTimes.length > 0 && (
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
            {storyTimes.map(id => (
              <div key={id} style={{
                display: "flex", alignItems: "center", gap: 8,
                fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                color: "rgba(200,170,120,0.6)", fontWeight: 300,
              }}>
                <span style={{ color: "#E8A838" }}>→</span>
                {SLOT_LABELS[id]}
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* Language */}
      <Section title="Your mother tongue (stories will be generated in English — you deliver in this language)">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {LANGUAGES.map(l => (
            <Toggle
              key={l.id}
              selected={language === l.id}
              onToggle={() => setLanguage(l.id)}
              label={l.label}
              emoji={l.flag}
            />
          ))}
        </div>
      </Section>

      {/* Emails */}
      <Section title="Deliver to">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <input className="inp" type="email" placeholder="Your email" value={email1} onChange={e => setEmail1(e.target.value)} disabled={isActive} />
          <input className="inp" type="email" placeholder="Partner's email" value={email2} onChange={e => setEmail2(e.target.value)} disabled={isActive} />
        </div>
      </Section>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {!isActive ? (
          <>
            <button className="btn-gold" onClick={handleActivate} style={{ flex: 1 }} disabled={!email1 || !email2 || storyTimes.length === 0}>
                ✨ Subscribe to the Kahani
              </button>
            <button className="btn-ghost" onClick={handlePreview} disabled={previewing}>
              {previewing ? "…" : "Preview"}
            </button>
          </>
        ) : (
          <div style={{
            flex: 1, background: "rgba(100,200,120,0.08)", border: "1px solid rgba(100,200,120,0.2)",
            borderRadius: 14, padding: "14px 20px",
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#90d8a0",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4cde8a", display: "inline-block", animation: "pulse 1.5s infinite" }} />
            {storyTimes.length} stor{storyTimes.length > 1 ? "ies" : "y"} scheduled daily
            <button className="btn-ghost" onClick={() => setStatus("idle")} style={{ marginLeft: "auto", fontSize: 12, padding: "6px 12px" }}>Stop</button>
          </div>
        )}
      </div>

      {/* Preview */}
      {preview && (
        <div style={{
          background: "rgba(232,168,56,0.05)",
          border: "1px solid rgba(232,168,56,0.15)",
          borderRadius: 16,
          padding: 22,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13.5,
          lineHeight: 1.85,
          color: "#e0d0b0",
          whiteSpace: "pre-wrap",
          fontWeight: 300,
        }}>
          <p style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(200,170,120,0.45)", marginBottom: 14 }}>Tonight's Story Preview</p>
          {preview}
        </div>
      )}
    </div>
  );
}

// ─── Tab: Instructions ────────────────────────────────────────────────────────

function InstructionsTab() {
  return (
    <div style={{ padding: "24px 20px 100px" }}>
      <div style={{ marginBottom: 28, textAlign: "center" }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>📖</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          color: "#f0e0c0",
          fontWeight: 600,
        }}>The Kahani Rules</h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: "rgba(200,170,120,0.55)",
          marginTop: 6,
          fontWeight: 300,
          lineHeight: 1.6,
        }}>
          The app delivers the story.<br />You deliver the magic. Here's how.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {INSTRUCTIONS.map((ins, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 18,
              padding: "20px 22px",
              animation: `floatIn 0.5s ${i * 0.08}s both ease`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Accent line */}
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0,
              width: 3,
              background: "linear-gradient(180deg, #E8A838, rgba(232,168,56,0))",
              borderRadius: "3px 0 0 3px",
            }} />
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{
                fontSize: 26,
                lineHeight: 1,
                minWidth: 36,
                textAlign: "center",
              }}>{ins.icon}</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: "#E8A838",
                    opacity: 0.7,
                  }}>{ins.num}</span>
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 15,
                    color: "#f0e0c0",
                    fontWeight: 500,
                    lineHeight: 1.3,
                  }}>{ins.title}</p>
                </div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "rgba(200,175,140,0.75)",
                  fontWeight: 300,
                  lineHeight: 1.75,
                }}>{ins.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Closing note */}
      <div style={{
        marginTop: 24,
        padding: "18px 22px",
        background: "rgba(232,168,56,0.07)",
        border: "1px solid rgba(232,168,56,0.2)",
        borderRadius: 16,
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: 14,
          color: "#d4a84a",
          lineHeight: 1.7,
        }}>
          "The stories you tell them now<br />are the ones they will tell their children."
        </p>
      </div>
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────

export default function Kahani() {
  const [tab, setTab] = useState("setup");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0c0e1e; }

        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.85; }
        }
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .inp {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1.5px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          padding: 12px 16px;
          color: #f0e0c0;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          outline: none;
          transition: border-color 0.2s;
        }
        .inp:focus { border-color: #E8A838; }
        .inp::placeholder { color: rgba(200,170,120,0.3); }

        .btn-gold {
          background: linear-gradient(135deg, #E8A838, #c47d1a);
          border: none;
          border-radius: 14px;
          padding: 14px 24px;
          color: #1a0f00;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: transform 0.15s, opacity 0.15s;
          letter-spacing: 0.02em;
        }
        .btn-gold:hover { transform: translateY(-2px); }
        .btn-gold:disabled { opacity: 0.35; cursor: not-allowed; transform: none; }

        .btn-ghost {
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 12px 20px;
          color: rgba(200,170,120,0.7);
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.09); }
        .btn-ghost:disabled { opacity: 0.4; cursor: not-allowed; }

        .tab-btn {
          flex: 1;
          background: none;
          border: none;
          padding: "14px 0";
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transition: opacity 0.2s;
        }
      `}</style>

      {/* Stars background */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {Array.from({ length: 70 }).map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 2 + 0.5,
            height: Math.random() * 2 + 0.5,
            borderRadius: "50%",
            background: "white",
            animation: `twinkle ${Math.random() * 3 + 2}s ${Math.random() * 5}s infinite`,
          }} />
        ))}
      </div>

      {/* Glow orb */}
      <div style={{
        position: "fixed",
        top: -120, left: "50%", transform: "translateX(-50%)",
        width: 400, height: 300,
        background: "radial-gradient(ellipse, rgba(232,168,56,0.12) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Scrollable content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 520, margin: "0 auto", minHeight: "100vh" }}>
        {tab === "setup" ? <SetupTab /> : <InstructionsTab />}
      </div>

      {/* Bottom Tab Bar */}
      <div style={{
        position: "fixed",
        bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 520,
        background: "rgba(12,14,30,0.92)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)",
        display: "flex",
        zIndex: 10,
        padding: "10px 0 14px",
      }}>
        {[
          { id: "setup", label: "Setup", emoji: "⚙️" },
          { id: "instructions", label: "The Rules", emoji: "📖" },
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              flex: 1,
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: "8px 0",
              opacity: tab === t.id ? 1 : 0.4,
              transition: "opacity 0.2s",
            }}
          >
            <span style={{ fontSize: 20 }}>{t.emoji}</span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              color: tab === t.id ? "#E8A838" : "#a09080",
              fontWeight: tab === t.id ? 500 : 300,
              letterSpacing: "0.04em",
            }}>{t.label}</span>
            {tab === t.id && (
              <div style={{ width: 20, height: 2, background: "#E8A838", borderRadius: 2, marginTop: 2 }} />
            )}
          </button>
        ))}
      </div>
    </>
  );
}