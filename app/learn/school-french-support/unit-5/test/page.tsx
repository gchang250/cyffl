import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "Which connector expresses a consequence?",
    options: ["car", "mais", "donc", "puisque"],
    correct: 2,
    explanation: "Donc means 'so/therefore' and expresses a consequence: Il a bien étudié, donc il a réussi. Car = cause, mais = contrast, puisque = cause.",
  },
  {
    question: "Which sentence correctly uses a contrast connector?",
    options: ["J'aime le sport, car je préfère la lecture.", "J'aime le sport, donc je préfère la lecture.", "J'aime le sport, cependant je préfère la lecture.", "J'aime le sport, ainsi je préfère la lecture."],
    correct: 2,
    explanation: "Cependant means 'however' and is a contrast connector. Car = cause, donc = consequence, ainsi = consequence.",
  },
  {
    question: "How do you say 'I am 17 years old' in French?",
    options: ["Je suis 17 ans.", "J'ai 17 ans.", "J'habite 17 ans.", "Je fais 17 ans."],
    correct: 1,
    explanation: "French uses avoir (to have) for age: J'ai 17 ans. Être is never used for age.",
  },
  {
    question: "Which verb is used for hobbies that are activities (swimming, cycling, etc.)?",
    options: ["jouer à", "faire de", "aller à", "prendre de"],
    correct: 1,
    explanation: "Faire de is used for activities: je fais de la natation, je fais du vélo. Jouer à is used for games and sports with opponents.",
  },
  {
    question: "Which tense describes background scenes and states in a past narrative?",
    options: ["Passé composé", "Futur simple", "Imparfait", "Présent"],
    correct: 2,
    explanation: "The imparfait describes background, ongoing states, and descriptions: il faisait beau, c'était calme, je me sentais fatigué.",
  },
  {
    question: "Which auxiliary does 'aller' use in the passé composé?",
    options: ["avoir", "faire", "être", "aller"],
    correct: 2,
    explanation: "Aller uses être in the passé composé: il est allé, nous sommes allés, elles sont allées.",
  },
  {
    question: "How do you form the futur proche?",
    options: ["infinitive + futur endings", "aller (conjugated) + infinitive", "avoir + past participle", "être + infinitive"],
    correct: 1,
    explanation: "Futur proche = aller conjugated in the present + infinitive: je vais partir, elle va étudier, nous allons voyager.",
  },
  {
    question: "What is the futur simple stem of 'être'?",
    options: ["êtr-", "ét-", "ser-", "est-"],
    correct: 2,
    explanation: "Être has the irregular futur simple stem ser-: je serai, tu seras, il sera, nous serons, vous serez, ils seront.",
  },
  {
    question: "Which connector introduces the first step in a sequence?",
    options: ["enfin", "ensuite", "d'abord", "pourtant"],
    correct: 2,
    explanation: "D'abord means 'first' and opens a sequence: d'abord… ensuite… enfin. Pourtant = yet (contrast).",
  },
  {
    question: "What is the futur simple of 'faire' in the 'nous' form?",
    options: ["nous faisrons", "nous ferons", "nous faisons", "nous fairons"],
    correct: 1,
    explanation: "Faire has the irregular stem fer-: nous ferons (fer- + ons). Nous faisons is the present tense, not the future.",
  },
];

export default function Unit5TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support/unit-5/lesson-4" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← Back to Lesson 4
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Unit 5 · Test</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Writing Practice</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">10 questions covering all four lessons of Unit 5: connectors and sentence structure, writing about yourself, past narratives using both tenses, and the future tense.</p>
          </div>
          <div className="rounded-2xl border border-[#F0FDF4] bg-[#F0FDF4] p-5">
            <p className="text-sm font-black text-[#16A34A]">Unit 5 covers</p>
            <ul className="mt-3 space-y-2 text-sm text-[#0B1F3A]">
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A] text-xs font-black text-white">1</span> Connectors &amp; Sentence Structure</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A] text-xs font-black text-white">2</span> Writing About Yourself</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A] text-xs font-black text-white">3</span> Writing About the Past</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A] text-xs font-black text-white">4</span> Writing About the Future</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 5 test" />
        </div>

        <div className="mt-12 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 6?</p>
          <p className="mt-2 text-[#526173]">Unit 6 builds on everything you&apos;ve learned — you&apos;ll practice reading and understanding French texts at beginner, intermediate, and upper-intermediate levels.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/school-french-support/unit-5/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/school-french-support/unit-6/lesson-1" className="rounded-full bg-[#16A34A] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#15803D]">Start Unit 6 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
