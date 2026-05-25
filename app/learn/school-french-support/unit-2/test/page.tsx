import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "What ending is used for the 'nous' form of regular -er verbs?",
    options: ["-ez", "-ons", "-ent", "-es"],
    correct: 1,
    explanation: "Nous always takes -ons for regular -er verbs: nous parlons, nous mangeons, nous aimons.",
  },
  {
    question: "Which sentence correctly uses a regular -er verb?",
    options: ["Ils parlent français.", "Ils parle français.", "Ils parlons français.", "Ils parlez français."],
    correct: 0,
    explanation: "The ils/elles form of -er verbs ends in -ent (silent): ils parlent. The e-n-t is never pronounced.",
  },
  {
    question: "What is the special feature of -ir verb conjugation (nos/vous/ils)?",
    options: ["They add -e before the ending.", "They insert -iss- before the ending.", "They drop the final vowel.", "They use the same endings as -er verbs."],
    correct: 1,
    explanation: "-ir verbs insert -iss- before the nous, vous, and ils endings: finissons, finissez, finissent.",
  },
  {
    question: "What is the 'il' form of a regular -re verb like 'vendre'?",
    options: ["il vends", "il vendons", "il vend", "il vendent"],
    correct: 2,
    explanation: "The il/elle form of -re verbs drops the -re and adds nothing: il vend, elle attend, il répond.",
  },
  {
    question: "How do you form the near future in French?",
    options: ["aller + past participle", "avoir + infinitive", "aller + infinitive", "être + infinitive"],
    correct: 2,
    explanation: "Near future = aller (conjugated) + infinitive: je vais partir, nous allons étudier, ils vont finir.",
  },
  {
    question: "What is the 'vous' form of 'faire'?",
    options: ["vous faisez", "vous font", "vous faisons", "vous faites"],
    correct: 3,
    explanation: "Vous faites is irregular — one of only three -ez exceptions: vous faites, vous dites, vous êtes.",
  },
  {
    question: "Which faire expression means 'to go for a walk'?",
    options: ["faire du vélo", "faire une promenade", "faire la cuisine", "faire du sport"],
    correct: 1,
    explanation: "Faire une promenade = to go for a walk. Faire du vélo = to cycle, faire la cuisine = to cook.",
  },
  {
    question: "What is the 'ils' form of 'pouvoir'?",
    options: ["ils pouvez", "ils pouvons", "ils peuvent", "ils pouvent"],
    correct: 2,
    explanation: "Ils peuvent — pouvoir is irregular: je peux, tu peux, il/elle peut, nous pouvons, vous pouvez, ils/elles peuvent.",
  },
  {
    question: "'Nous voulons partir tôt' means:",
    options: ["We can leave early.", "We want to leave early.", "We are going to leave early.", "We are leaving early."],
    correct: 1,
    explanation: "Vouloir = to want. Nous voulons partir = we want to leave. Pouvoir = can, aller + inf. = going to.",
  },
  {
    question: "Why is it 'nous mangeons' and not 'nous mangons'?",
    options: ["Manger is an irregular -er verb.", "The -e preserves the soft g before -ons.", "Nous always adds -eons.", "It's a spelling mistake."],
    correct: 1,
    explanation: "G is hard before o (go). Adding -e keeps the g soft: mangeons (soft g). This applies to all -ger verbs.",
  },
];

export default function Unit2TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support/unit-2/lesson-4" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Back to Lesson 4
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">Unit 2 · Test</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Verb Conjugation</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">10 questions covering all four lessons of Unit 2: regular -er verbs, -ir and -re verbs, and the key irregular verbs être, avoir, aller, faire, vouloir, and pouvoir.</p>
          </div>
          <div className="rounded-2xl border border-[#FEF3C7] bg-[#FEF3C7] p-5">
            <p className="text-sm font-black text-[#D97706]">Unit 2 covers</p>
            <ul className="mt-3 space-y-2 text-sm text-[#0B1F3A]">
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D97706] text-xs font-black text-white">1</span> Regular -er Verbs</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D97706] text-xs font-black text-white">2</span> Regular -ir & -re Verbs</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D97706] text-xs font-black text-white">3</span> Irregular Verbs (être, avoir, aller)</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D97706] text-xs font-black text-white">4</span> Irregular Verbs (faire, vouloir, pouvoir)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 2 test" />
        </div>

        <div className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 3?</p>
          <p className="mt-2 text-[#526173]">Unit 3 introduces the passé composé — the most important past tense in French and a key part of every school exam.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/school-french-support/unit-2/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/school-french-support/unit-3/lesson-1" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Start Unit 3 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
