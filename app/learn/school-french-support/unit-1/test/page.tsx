import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "Which article is used before a masculine noun starting with a vowel?",
    options: ["le", "la", "l'", "un"],
    correct: 2,
    explanation: "Both le and la contract to l' before any noun starting with a vowel or silent h: l'ami, l'école, l'hôpital.",
  },
  {
    question: "How do you say 'some milk' (partitive, masculine)?",
    options: ["de le lait", "du lait", "des lait", "de lait"],
    correct: 1,
    explanation: "The partitive for masculine nouns is du (de + le). Du lait = some milk. De le never appears: it always contracts.",
  },
  {
    question: "What is the feminine form of the adjective 'sérieux'?",
    options: ["sérieuxe", "sérieuse", "sérieuxse", "sérieusse"],
    correct: 1,
    explanation: "Adjectives ending in -eux change to -euse in the feminine: sérieux → sérieuse, heureux → heureuse.",
  },
  {
    question: "Which adjective goes BEFORE the noun according to the BAGS rule?",
    options: ["rouge", "intéressant", "canadien", "jeune"],
    correct: 3,
    explanation: "BAGS = Beauty, Age, Goodness, Size. Jeune (young) is an Age adjective and goes before the noun: un jeune homme.",
  },
  {
    question: "'À + les' contracts to:",
    options: ["al", "à les", "aux", "auls"],
    correct: 2,
    explanation: "À + les always contracts to aux: Je parle aux élèves. Je vais aux États-Unis.",
  },
  {
    question: "Which preposition is used to say 'in Italy' (feminine country)?",
    options: ["au", "en", "dans", "à"],
    correct: 1,
    explanation: "En is used with feminine countries (most ending in -e): en France, en Italie, en Espagne, en Chine.",
  },
  {
    question: "What is the correct conjugation of 'être' for 'vous'?",
    options: ["sont", "sommes", "êtes", "suis"],
    correct: 2,
    explanation: "Vous êtes = you are (formal or plural). Full être: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.",
  },
  {
    question: "How do you express 'I am 16 years old' in French?",
    options: ["Je suis 16 ans.", "J'ai 16 ans.", "Je fais 16 ans.", "Il a 16 ans."],
    correct: 1,
    explanation: "Age uses avoir in French: j'ai 16 ans (I have 16 years). Never use être for age.",
  },
  {
    question: "Which sentence correctly uses 'avoir' for a physical feeling?",
    options: ["Je suis soif.", "J'ai soif.", "Je fais soif.", "Je vais soif."],
    correct: 1,
    explanation: "Physical sensations use avoir: j'ai soif (thirsty), j'ai faim (hungry), j'ai froid (cold), j'ai chaud (hot).",
  },
  {
    question: "'De + les' contracts to which form?",
    options: ["du", "de les", "des", "del"],
    correct: 2,
    explanation: "De + les = des. Les devoirs des élèves (the students' homework). Also the plural indefinite article: des livres.",
  },
];

export default function Unit1TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support/unit-1/lesson-4" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← Back to Lesson 4
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Unit 1 · Test</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Core Grammar</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">10 questions covering all four lessons of Unit 1: articles, adjective agreement, prepositions, and key irregular verbs.</p>
          </div>
          <div className="rounded-2xl border border-[#EFF6FF] bg-[#EFF6FF] p-5">
            <p className="text-sm font-black text-[#2563EB]">Unit 1 covers</p>
            <ul className="mt-3 space-y-2 text-sm text-[#0B1F3A]">
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D62828] text-xs font-black text-white">1</span> Articles & Gender</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D62828] text-xs font-black text-white">2</span> Adjective Agreement</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D62828] text-xs font-black text-white">3</span> Prepositions</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D62828] text-xs font-black text-white">4</span> Key Irregular Verbs</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 1 test" />
        </div>

        <div className="mt-12 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 2?</p>
          <p className="mt-2 text-[#526173]">Unit 2 dives into verb conjugation — regular -er, -ir, and -re verbs, plus the most-used irregular verbs in French.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/school-french-support/unit-1/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/school-french-support/unit-2/lesson-1" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Start Unit 2 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
