import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TEF Canada Guide | CYFFL Resources",
  description:
    "Quick reference for TEF Canada and TCF Canada — CLB levels, IRCC score requirements, Express Entry points, and strategies for all four test sections.",
};

const sections = [
  {
    name: "Listening",
    french: "Compréhension de l'oral",
    format: "~40 questions · ~40 minutes · audio plays ONCE",
    types: ["Main idea", "Specific detail", "Speaker attitude / tone", "Implied meaning"],
    strategy: "Take notes as you listen — you only hear the audio once. Write key words, numbers, names, and opinions. For attitude questions, listen for tone, not just words.",
    tip: "Daily habit: listen to Radio-Canada news or podcasts. Practice noting key information in French while you listen.",
    color: "bg-[#EFF6FF] text-[#2563EB]",
  },
  {
    name: "Reading",
    french: "Compréhension de l'écrit",
    format: "~50 questions · ~60 minutes · multiple texts",
    types: ["Main idea", "Explicit detail", "Vocabulary in context", "Inferred meaning"],
    strategy: "Read the question first, then scan the text for the answer. Eliminate distractors — they often use words from the text in a misleading way.",
    tip: "Daily habit: read Le Devoir or Radio-Canada articles in French. Guess the meaning of unknown words from context before looking them up.",
    color: "bg-[#FEF3C7] text-[#D97706]",
  },
  {
    name: "Writing",
    french: "Expression écrite",
    format: "2 tasks · ~60 minutes total",
    types: ["Task 1: short informal text (~60–80 words)", "Task 2: formal structured text (~120–150 words)"],
    strategy: "Plan Task 2 before writing (2–3 minutes). Stay on topic — pertinence is the most critical criterion. Use connectors (de plus, cependant, par conséquent) to show organization.",
    tip: "Practice writing formal letters and informal messages under timed conditions. Learn the standard formal opening and closing formulas.",
    color: "bg-[#F0FDF4] text-[#16A34A]",
  },
  {
    name: "Speaking",
    french: "Expression orale",
    format: "4 tasks · ~15 minutes · recorded",
    types: ["Monologue on a given topic", "Interactive exchange (simulated)", "Responding to a scenario", "Giving an opinion / argument"],
    strategy: "Your responses are recorded — there is no live examiner. Speak clearly and at a steady pace. Stay on topic. Organize your ideas before speaking: state your position, give a reason, give an example.",
    tip: "Practice speaking on everyday topics out loud for 2–3 minutes. Record yourself on your phone and listen back to catch filler words and hesitations.",
    color: "bg-[#FDF4FF] text-[#9333EA]",
  },
];

const clbTable = [
  { clb: "CLB 12", listening: "393–400", reading: "263–277", writing: "393–450", speaking: "393–450", label: "Near-native" },
  { clb: "CLB 11", listening: "371–392", reading: "248–262", writing: "371–392", speaking: "371–392", label: "Advanced+" },
  { clb: "CLB 10", listening: "349–370", reading: "233–247", writing: "349–370", speaking: "349–370", label: "Advanced" },
  { clb: "CLB 9", listening: "328–348", reading: "217–232", writing: "328–348", speaking: "328–348", label: "Upper-intermediate+" },
  { clb: "CLB 8", listening: "298–327", reading: "201–216", writing: "298–327", speaking: "298–327", label: "Upper-intermediate" },
  { clb: "CLB 7 ★", listening: "249–297", reading: "181–200", writing: "271–297", speaking: "271–297", label: "FSW minimum" },
  { clb: "CLB 6", listening: "217–248", reading: "163–180", writing: "241–270", speaking: "241–270", label: "Intermediate" },
  { clb: "CLB 5", listening: "181–216", reading: "136–162", writing: "206–240", speaking: "206–240", label: "Low-intermediate" },
];

const expressEntryPoints = [
  { situation: "French only (no English test)", clb: "CLB 7–8 in all skills", points: "Up to 15 points (single) / 7 points (with Anglophone spouse)" },
  { situation: "French only (no English test)", clb: "CLB 9+ in all skills", points: "Up to 25 points (single) / 12 points (with Anglophone spouse)" },
  { situation: "French + strong English (CLB 5+)", clb: "CLB 7–8 in French skills", points: "Up to 25 points (single) / 12 points (with Anglophone spouse)" },
  { situation: "French + strong English (CLB 5+)", clb: "CLB 9+ in French skills", points: "Up to 50 points (single) / 25 points (with Anglophone spouse)" },
];

const writingFormulas = [
  { label: "Formal salutation", informal: "Salut [Prénom],", formal: "Madame, Monsieur," },
  { label: "Opening", informal: "Je t'écris parce que…", formal: "Je me permets de vous contacter afin de… / Suite à…, je vous transmets…" },
  { label: "Adding a point", informal: "Aussi,", formal: "De plus, / En outre, / Par ailleurs," },
  { label: "Concession", informal: "Mais…", formal: "Cependant, / Néanmoins, / Toutefois," },
  { label: "Conclusion", informal: "En tout cas…", formal: "Pour ces raisons, / En conclusion, / À la lumière de ces éléments," },
  { label: "Formal closing", informal: "Bonne journée!", formal: "Dans l'attente de votre réponse, veuillez agréer mes cordiales salutations." },
];

export default function TEFCanadaGuidePage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/resources" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Resources
        </Link>

        <div className="mt-8 max-w-3xl">
          <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-black text-[#2563EB]">
            Immigration
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            TEF Canada Guide
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#526173]">
            TEF Canada and TCF Canada are the two French tests recognized by IRCC for Express Entry, PNP, and citizenship. Scores are converted to CLB levels — and CLB levels determine your CRS points.
          </p>
        </div>

        {/* Four sections */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">The four sections</h2>
          <p className="mt-2 text-[#526173]">TEF Canada tests all four language skills. CLB scores from each skill contribute independently to your immigration application.</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {sections.map((s) => (
              <div key={s.name} className="flex flex-col rounded-[2rem] border border-[#E7DAB9] bg-white shadow-sm overflow-hidden">
                <div className="bg-[#0B1F3A] px-6 py-5">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-black ${s.color}`}>{s.name}</span>
                  <h3 className="mt-2 text-lg font-black text-white">{s.french}</h3>
                  <p className="mt-1 text-sm text-white/60">{s.format}</p>
                </div>
                <div className="flex flex-1 flex-col p-6 space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#526173]">Question types</p>
                    <ul className="mt-2 space-y-1">
                      {s.types.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-sm text-[#526173]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A44C]" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#526173]">Strategy</p>
                    <p className="mt-1 text-sm leading-6 text-[#526173]">{s.strategy}</p>
                  </div>
                  <div className="mt-auto rounded-xl bg-[#FFFDF7] px-4 py-3 text-sm italic text-[#526173]">
                    💡 {s.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CLB score table */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">TEF Canada scores → CLB levels</h2>
          <p className="mt-2 text-[#526173]">
            Approximate score ranges. Official conversions are published by the test providers. CLB 7 (★) is the Express Entry FSW minimum in all four skills.
          </p>
          <div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-[#E7DAB9]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0B1F3A] text-white">
                  <th className="px-4 py-3 text-left font-black">CLB Level</th>
                  <th className="px-4 py-3 text-left font-black">Listening</th>
                  <th className="px-4 py-3 text-left font-black">Reading</th>
                  <th className="px-4 py-3 text-left font-black">Writing</th>
                  <th className="px-4 py-3 text-left font-black">Speaking</th>
                </tr>
              </thead>
              <tbody>
                {clbTable.map((row, i) => (
                  <tr key={row.clb} className={`border-t border-[#E7DAB9] ${row.clb.includes("★") ? "bg-[#FEF3C7] font-bold" : i % 2 === 0 ? "bg-white" : "bg-[#FFFDF7]"}`}>
                    <td className="px-4 py-3">
                      <span className="font-black">{row.clb}</span>
                      <span className="ml-2 text-xs text-[#526173]">{row.label}</span>
                    </td>
                    <td className="px-4 py-3 text-[#526173]">{row.listening}</td>
                    <td className="px-4 py-3 text-[#526173]">{row.reading}</td>
                    <td className="px-4 py-3 text-[#526173]">{row.writing}</td>
                    <td className="px-4 py-3 text-[#526173]">{row.speaking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#526173]">* Score ranges are approximate. Verify current conversions on the official TEF Canada website before your application.</p>
        </section>

        {/* Express Entry points */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">Express Entry CRS points for French</h2>
          <p className="mt-2 text-[#526173]">
            French proficiency can add significant points to your Comprehensive Ranking System (CRS) score. The bonus depends on your CLB level and whether you also have strong English.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {expressEntryPoints.map((row, i) => (
              <div key={i} className="rounded-[1.5rem] border border-[#E7DAB9] bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-[#526173]">{row.situation}</p>
                <p className="mt-2 font-black text-[#0B1F3A]">{row.clb}</p>
                <p className="mt-2 text-sm leading-6 text-[#526173]">{row.points}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-xl bg-[#FEF3C7] px-5 py-3 text-sm text-[#D97706]">
            <strong>Note:</strong> CRS points are subject to change. Always verify current point values on the official IRCC website before planning your application.
          </p>
        </section>

        {/* Writing formulas */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">Informal vs. formal — writing task register</h2>
          <p className="mt-2 text-[#526173]">
            TEF Canada Task 1 is informal (tu, casual tone). Task 2 is formal (vous, professional tone). Using the wrong register is one of the most common scoring errors.
          </p>
          <div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-[#E7DAB9]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0B1F3A] text-white">
                  <th className="px-4 py-3 text-left font-black">Function</th>
                  <th className="px-4 py-3 text-left font-black">Task 1 — Informal</th>
                  <th className="px-4 py-3 text-left font-black">Task 2 — Formal</th>
                </tr>
              </thead>
              <tbody>
                {writingFormulas.map((row, i) => (
                  <tr key={row.label} className={`border-t border-[#E7DAB9] ${i % 2 === 0 ? "bg-white" : "bg-[#FFFDF7]"}`}>
                    <td className="px-4 py-3 font-bold text-[#0B1F3A]">{row.label}</td>
                    <td className="px-4 py-3 italic text-[#526173]">{row.informal}</td>
                    <td className="px-4 py-3 italic text-[#526173]">{row.formal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Course link */}
        <section className="mt-16 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xl font-black">Want the full interactive course?</p>
              <p className="mt-2 text-white/70">
                The French for Canadian Tests course covers TEF Canada in depth — CLB levels, Express Entry strategy, and test preparation for all four skills.
              </p>
            </div>
            <Link
              href="/learn/canadian-french-tests"
              className="whitespace-nowrap rounded-full bg-[#2563EB] px-6 py-3 text-center text-sm font-black text-white transition hover:-translate-y-0.5"
            >
              Start the course →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
