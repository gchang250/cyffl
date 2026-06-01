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
      { label: "Criterion A", name: "Language", marks: "/12", note: "Accuracy, range, and complexity of grammar and vocabulary. Idiomatic expressions push you to the top band." },
      { label: "Criterion B", name: "Message", marks: "/12", note: "Relevance, development of ideas, and clarity. Factual inaccuracies are NOT penalised — only coherence and depth." },
      { label: "Criterion C", name: "Conceptual understanding", marks: "/6", note: "Three things: (1) did you choose an appropriate text type? (2) is your register consistent? (3) did you use the correct conventions?" },
    ],
    tips: [
      "The prompt gives you THREE text type options — choose the one that best fits the context, recipient, and purpose",
      "Open with the required conventions for your chosen text type before writing any content",
      "Use the subjunctive, conditional, and futur simple — tense variety is directly rewarded in Criterion A",
      "Include at least one or two idiomatic expressions to reach the Criterion A top band",
      "Criterion B does not penalise factual errors — if your ideas are coherent and well-developed, you will be rewarded",
      "Keep your register consistent throughout — shifting between formal and informal mid-response loses Criterion C marks",
    ],
  },
  {
    paper: "Paper 2A",
    name: "Reading Comprehension",
    weight: "25%",
    marks: "/40",
    color: "bg-[#FEF3C7] text-[#D97706]",
    description:
      "Three texts, each with different question types. The answer is always in the text — every question is testing whether you can locate and use the right information.",
    criteria: [
      { label: "Question types", name: "Choose N true statements · sentence completion · multiple choice", marks: "", note: "First two texts typically use these formats" },
      { label: "Question types", name: "Matching · synonym matching · gap fill from word bank", marks: "", note: "Common in the second text — use grammar and context to eliminate" },
      { label: "Question types", name: "True/False + direct quote · short answer · pronoun reference", marks: "", note: "Third text typically uses these — both T/F and quote are required for the mark" },
    ],
    tips: [
      "Use your common sense — the texts are written clearly and the right answer is almost always the most obvious one",
      "For True/False + Justification: you need both — T/F alone gets zero. Copy words exactly from the text",
      "For sentence completion ('Trouvez les mots'): use the words exactly as they appear in the text — no paraphrasing",
      "For synonym matching: use the line number — the meaning depends on how the word is used in context, not its general definition",
      "For gap fill: eliminate wrong options using grammar (gender, number, tense) before choosing from what remains",
      "Watch for negatives (ne…pas, ne…jamais, seulement) — they flip the meaning and are easy to miss under time pressure",
      "For pronoun reference: go back to the preceding lines and find the noun the pronoun replaces, then copy it from the text",
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
      "Use your 15 minutes: identify the IB theme, the global issue, and key vocabulary before you start speaking",
      "Follow the structure: describe (Au premier plan…) → analyse (Cette image illustre…) → discuss",
      "Never give one-word answers — every response needs opinion + reason + example",
      "If the examiner asks what you would do in this situation, answer in the conditional: 'Je ferais…', 'Je choisirais…', 'Ce serait…'",
      "If the examiner asks what must be done so that something happens, answer in the subjunctive: 'Il faut que nous…', 'Pour que cela change, il est essentiel que…'",
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

        {/* Paper 1 — text types */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">Paper 1 — text types and official conventions</h2>
          <p className="mt-2 text-[#526173]">
            Each prompt gives you three text type options. Pick the one that fits the context, recipient, and purpose. Then apply these conventions — examiners check for them directly in Criterion C.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                type: "Article",
                register: "Semi-formal",
                conventions: ["Author name", "Date", "Title", "Introduction and conclusion"],
                context: "School newspaper, magazine, or publication for a broad audience",
              },
              {
                type: "Blog",
                register: "Informal",
                conventions: ["Title", "Author name and/or date/time", "First person narration (je)", "Address the reader directly", "Multiple posts permitted"],
                context: "Sharing a personal experience or opinion with a general public audience",
              },
              {
                type: "Exposé (speech)",
                register: "Formal",
                conventions: ["Opening address (Mesdames et messieurs…)", "Introduction", "Stylistic devices (rhetorical questions, repetition)", "Strong conclusion", "Thank-you / closing formula"],
                context: "Addressing classmates, an assembly, or a public audience directly",
              },
              {
                type: "Instructions",
                register: "Neutral",
                conventions: ["Title", "Logical sequential structure", "Subheadings, bullet points, or short paragraphs", "Address the reader directly"],
                context: "Guiding or directing a reader through steps or a process",
              },
              {
                type: "Proposition (proposal)",
                register: "Semi-formal to formal",
                conventions: ["Title", "Introduction", "Clear structure (bullets or paragraphs)", "Convincing conclusion or final recommendation", "Can be sent as a letter or email"],
                context: "Presenting a project or idea to decision-makers or competition organisers",
              },
            ].map((t) => (
              <div key={t.type} className="rounded-[1.5rem] border border-[#E7DAB9] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-black text-[#0B1F3A]">{t.type}</p>
                  <span className="rounded-full bg-[#FFFDF7] px-2 py-0.5 text-xs font-bold text-[#526173]">{t.register}</span>
                </div>
                <p className="mt-1 text-xs italic text-[#526173]">{t.context}</p>
                <div className="mt-3 border-t border-[#E7DAB9] pt-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]">Required conventions</p>
                  <ul className="mt-2 space-y-1">
                    {t.conventions.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-[#526173]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A44C]" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Oral — using the right tense */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">Individual Oral — using the right tense</h2>
          <p className="mt-2 text-[#526173]">
            The examiner's questions are a signal. Listen to the question type and choose your tense deliberately — it's one of the clearest ways to demonstrate Criterion A range.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border-2 border-[#2563EB] bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Examiner asks…</p>
              <p className="mt-2 text-lg font-black text-[#0B1F3A]">&ldquo;What would you do in this situation?&rdquo;</p>
              <p className="mt-1 text-sm italic text-[#526173]">&ldquo;Que feriez-vous dans cette situation ?&rdquo;</p>
              <div className="mt-4 rounded-xl bg-[#EFF6FF] p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Answer in the conditional</p>
                <p className="mt-2 text-sm leading-6 text-[#0B1F3A]">
                  The conditional expresses what you <em>would</em> do. Use it to give a hypothetical response.
                </p>
                <div className="mt-3 space-y-1 text-sm italic text-[#526173]">
                  <p>« Je ferais davantage d'efforts pour… »</p>
                  <p>« Je choisirais de… parce que… »</p>
                  <p>« Ce serait important de… »</p>
                  <p>« J'essaierais de convaincre… »</p>
                </div>
              </div>
              <Link href="/resources/verbs-conditionnel" className="mt-4 inline-block text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
                Review le conditionnel →
              </Link>
            </div>

            <div className="rounded-[1.5rem] border-2 border-[#9333EA] bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-[#9333EA]">Examiner asks…</p>
              <p className="mt-2 text-lg font-black text-[#0B1F3A]">&ldquo;What must we do so that this changes?&rdquo;</p>
              <p className="mt-1 text-sm italic text-[#526173]">&ldquo;Que faut-il faire pour que les choses changent ?&rdquo;</p>
              <div className="mt-4 rounded-xl bg-[#FDF4FF] p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#9333EA]">Answer in the subjunctive</p>
                <p className="mt-2 text-sm leading-6 text-[#0B1F3A]">
                  Phrases like <em>pour que, il faut que, afin que</em> trigger the subjunctive — and using it shows you know your grammar.
                </p>
                <div className="mt-3 space-y-1 text-sm italic text-[#526173]">
                  <p>« Il faut que nous agissions immédiatement. »</p>
                  <p>« Pour que les choses changent, il est essentiel que… »</p>
                  <p>« Afin que la situation s'améliore, il faudrait que… »</p>
                  <p>« Il est nécessaire que les gouvernements prennent… »</p>
                </div>
              </div>
              <Link href="/resources/verbs-subjonctif" className="mt-4 inline-block text-sm font-black text-[#9333EA] hover:opacity-80">
                Review le subjonctif →
              </Link>
            </div>
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
