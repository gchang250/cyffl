import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IB French B Prep | CYFFL Resources",
  description:
    "Assessment breakdown, exam tips, and the grammar and language resources you need to score higher on IB French B SL.",
};

const assessments = [
  {
    paper: "Paper 1",
    name: "Written Production",
    weight: "25%",
    marks: "/30",
    color: "bg-[#EFF6FF] text-[#2563EB]",
    description:
      "You choose one prompt from two and write a structured text in a specified format (article, letter, blog, speech, report, etc.). Minimum 250 words at SL.",
    criteria: [
      { label: "Criterion A", name: "Language", marks: "/12", note: "Accuracy, range, and complexity of grammar and vocabulary" },
      { label: "Criterion B", name: "Message", marks: "/12", note: "Relevance, development of ideas, and clarity of argument" },
      { label: "Criterion C", name: "Format", marks: "/6", note: "Appropriate text type conventions, structure, and register" },
    ],
    tips: [
      "Always open with the correct format convention for your text type (salutation, headline, date, etc.)",
      "Use the subjunctive, conditional, and futur simple — tense variety is directly rewarded in Criterion A",
      "Include at least one or two idiomatic expressions to demonstrate linguistic range",
      "Structure your argument: introduction → development (d'une part / d'autre part) → conclusion",
      "Check agreement, tense consistency, and accents before you finish",
    ],
  },
  {
    paper: "Paper 2A",
    name: "Reading Comprehension",
    weight: "25%",
    marks: "/40",
    color: "bg-[#FEF3C7] text-[#D97706]",
    description:
      "A series of written texts across different types and registers. Questions test comprehension, vocabulary in context, purpose, audience, and tone.",
    criteria: [
      { label: "Question types", name: "Vrai/Faux/On ne sait pas", marks: "", note: "Never infer — only use what the text explicitly states" },
      { label: "Question types", name: "Relevez / Identifiez", marks: "", note: "Find and copy from the text — don't add your own ideas" },
      { label: "Question types", name: "Expliquez / Quel est le but…", marks: "", note: "Explain in your own words — clarity over length" },
    ],
    tips: [
      "Read the questions before reading the text — it focuses your attention",
      "For Vrai/Faux/On ne sait pas: if the text doesn't explicitly say it, the answer is 'On ne sait pas'",
      "For 'Relevez', quote or closely paraphrase from the text — don't add your own interpretation",
      "Watch for negatives and qualifiers (ne…pas, seulement, rarement) — they change meaning",
      "Check word counts on 'Relevez' questions — if it says 'deux mots', give exactly two",
    ],
  },
  {
    paper: "Paper 2B",
    name: "Listening Comprehension",
    weight: "25%",
    marks: "/25",
    color: "bg-[#FEF3C7] text-[#D97706]",
    description:
      "A series of audio texts — interviews, news reports, announcements, and conversations — played twice each. Questions test main idea, speaker purpose, attitude, and details.",
    criteria: [
      { label: "Format", name: "Audio played twice", marks: "", note: "First listen: main idea and speaker. Second listen: details and specific answers" },
      { label: "Watch for", name: "Tone and attitude", marks: "", note: "Positive, negative, or mixed? Identify the speaker's stance" },
      { label: "Watch for", name: "Numbers and statistics", marks: "", note: "Dates, percentages, and quantities are frequently tested" },
    ],
    tips: [
      "Use the first listen for the big picture — who is speaking, what is it about, what is the purpose",
      "Write numbers, dates, and names immediately — they're easy to miss on second listen",
      "Identify tone and attitude — 'encourageants mais…' = cautiously optimistic, not fully positive",
      "Know common audio formats: interview, reportage, annonce, publicité",
      "Don't infer — only use what the speaker actually says",
    ],
  },
  {
    paper: "Individual Oral",
    name: "IA — Oral Assessment",
    weight: "25%",
    marks: "/30",
    color: "bg-[#FDF4FF] text-[#9333EA]",
    description:
      "You receive a visual stimulus image and have 15 minutes to prepare. The oral has two parts: a presentation (describe and analyse the image, ~3–4 min) followed by a discussion with your teacher (~6–9 min).",
    criteria: [
      { label: "Criterion A", name: "Language", marks: "/10", note: "Accuracy, range, and complexity — same principle as Paper 1" },
      { label: "Criterion B", name: "Message", marks: "/10", note: "Quality of description, analysis, and connection to global issue" },
      { label: "Criterion C", name: "Interactive skills", marks: "/10", note: "Spontaneity, responsiveness, and ability to sustain conversation" },
    ],
    tips: [
      "Use your 15 minutes: identify the IB theme, the global issue, and key vocabulary",
      "Follow the structure: describe (Au premier plan…) → analyse (Cette image illustre…) → discuss",
      "Never give one-word answers — every response needs opinion + reason + example",
      "Use complex language: 'Il est essentiel que nous agissions' (subjunctive), 'Ce serait mieux si…' (conditional)",
      "Show nuance: acknowledge the other side with 'Il faut admettre que… cependant…'",
    ],
  },
];

const grammarResources = [
  {
    label: "Le subjonctif",
    note: "Triggered by il faut que, bien que, pour que, à condition que. Essential for formal writing and the oral.",
    href: "/resources/verbs-subjonctif",
    example: "Il est essentiel que nous agissions maintenant.",
  },
  {
    label: "Le conditionnel",
    note: "For polite requests, hypotheticals, and if-then structures. Shows linguistic sophistication.",
    href: "/resources/verbs-conditionnel",
    example: "Ce serait mieux si les gouvernements investissaient davantage.",
  },
  {
    label: "Le futur simple",
    note: "For predictions, consequences, and future plans. Common in opinion writing and speeches.",
    href: "/resources/verbs-futur-simple",
    example: "Si rien ne change, les conséquences seront désastreuses.",
  },
  {
    label: "Le passé composé",
    note: "Completed past actions. Know your avoir/être agreement and irregular participles.",
    href: "/resources/verbs-passe-compose",
    example: "Les émissions ont augmenté de 3% l'année dernière.",
  },
  {
    label: "L'imparfait",
    note: "Background, descriptions, and repeated past actions. Pairs with passé composé in narrative texts.",
    href: "/resources/verbs-imparfait",
    example: "Quand j'étais jeune, ma famille voyageait souvent.",
  },
  {
    label: "Connecting words",
    note: "From A1 to C1 — organised by function. Higher-band writing uses cependant, néanmoins, de surcroît, quant à.",
    href: "/resources/connecting-words",
    example: "Néanmoins, force est de constater que la situation s'aggrave.",
  },
  {
    label: "Idiomatic expressions",
    note: "One or two well-placed expressions push you into the top band. Examiners notice them.",
    href: "/resources/expressions",
    example: "Il va sans dire que / force est de constater que / avoir le cafard",
  },
];

const higherBandPhrases = [
  { phrase: "Il va sans dire que…", meaning: "It goes without saying that…" },
  { phrase: "Force est de constater que…", meaning: "One cannot help but notice that…" },
  { phrase: "Il est indéniable que…", meaning: "It is undeniable that…" },
  { phrase: "Il convient de souligner que…", meaning: "It is worth highlighting that…" },
  { phrase: "Quant à…", meaning: "As for… / Regarding…" },
  { phrase: "De surcroît…", meaning: "Moreover / On top of that…" },
  { phrase: "Il faut admettre que…", meaning: "One must acknowledge that…" },
  { phrase: "En dépit de…", meaning: "In spite of…" },
  { phrase: "À cet égard…", meaning: "In this regard…" },
  { phrase: "Il est à noter que…", meaning: "It should be noted that…" },
];

export default function IBFrenchBPrepPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/resources" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Resources
        </Link>

        <div className="mt-8 max-w-3xl">
          <span className="rounded-full bg-[#FDF4FF] px-3 py-1 text-xs font-black text-[#9333EA]">
            IB French B SL
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            IB French B Prep
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#526173]">
            Assessment breakdown, exam tips, and the grammar resources you need to score in the higher bands — for Paper 1, Paper 2, and the Individual Oral.
          </p>
        </div>

        {/* Assessment breakdown */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">Assessment breakdown</h2>
          <p className="mt-2 text-[#526173]">IB French B SL has four components. Each is worth 25% of your final grade.</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {assessments.map((a) => (
              <div key={a.paper} className="flex flex-col rounded-[2rem] border border-[#E7DAB9] bg-white shadow-sm overflow-hidden">
                <div className="bg-[#0B1F3A] px-6 py-5">
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-black ${a.color}`}>{a.paper}</span>
                    <span className="text-sm font-black text-white">{a.weight} · {a.marks}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-black text-white">{a.name}</h3>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-6 text-[#526173]">{a.description}</p>

                  <div className="mt-5 space-y-2">
                    {a.criteria.map((c) => (
                      <div key={c.name} className="rounded-xl bg-[#FFFDF7] px-4 py-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-black text-[#0B1F3A]">{c.name}</span>
                          {c.marks && <span className="font-bold text-[#C9A44C]">{c.marks}</span>}
                        </div>
                        <p className="mt-0.5 text-xs text-[#526173]">{c.note}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-[#E7DAB9] pt-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]">Exam tips</p>
                    <ul className="mt-3 space-y-1.5">
                      {a.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-[#526173]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A44C]" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Higher band phrases */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">Higher-band phrases</h2>
          <p className="mt-2 text-[#526173]">
            Use these in Paper 1 and the Individual Oral. Even two or three well-placed expressions demonstrate linguistic range and push you into the top band.
          </p>
          <div className="mt-6 grid gap-px bg-[#E7DAB9] sm:grid-cols-2 border border-[#E7DAB9] rounded-[1.5rem] overflow-hidden">
            {higherBandPhrases.map((p) => (
              <div key={p.phrase} className="bg-white px-5 py-4">
                <p className="font-black text-[#0B1F3A] italic">{p.phrase}</p>
                <p className="mt-0.5 text-sm text-[#526173]">{p.meaning}</p>
              </div>
            ))}
          </div>
          <Link href="/resources/expressions" className="mt-4 inline-block text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
            Full idiomatic expressions list →
          </Link>
        </section>

        {/* Grammar resources */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">Grammar & style resources</h2>
          <p className="mt-2 text-[#526173]">
            These are the specific resources that matter most for IB French B. Study them before your exams — they are the difference between a 5 and a 7.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {grammarResources.map((r) => (
              <Link
                key={r.label}
                href={r.href}
                className="group flex flex-col rounded-[1.5rem] border border-[#E7DAB9] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="font-black group-hover:text-[#2563EB]">{r.label} →</p>
                <p className="mt-2 text-sm leading-6 text-[#526173]">{r.note}</p>
                <p className="mt-3 rounded-xl bg-[#FFFDF7] px-3 py-2 text-xs italic text-[#526173]">
                  {r.example}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Course link */}
        <section className="mt-16 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xl font-black">Want the full interactive course?</p>
              <p className="mt-2 text-white/70">
                The IB French B SL course has 14 lessons and 4 unit tests covering all five themes, Paper 1, Paper 2, and the Individual Oral.
              </p>
            </div>
            <Link
              href="/learn/ib-french-b-sl"
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
