import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "How is the passé composé formed for most verbs?",
    options: [
      "Subject + être conjugated + past participle",
      "Subject + avoir conjugated + past participle",
      "Subject + infinitive + avoir",
      "Subject + past participle alone",
    ],
    correct: 1,
    explanation: "Most verbs use avoir as their auxiliary: j'ai parlé, elle a fini, nous avons vendu. Only DR MRS VANDERTRAMP and reflexive verbs use être.",
  },
  {
    question: "What is the past participle of 'choisir'?",
    options: ["choisi", "choisé", "choisé", "choisu"],
    correct: 0,
    explanation: "Regular -ir verbs form their past participle by removing -ir and adding -i: choisir → choisi, finir → fini, remplir → rempli.",
  },
  {
    question: "Which sentence uses the passé composé correctly with être?",
    options: [
      "Elle a allée au marché.",
      "Elle est allé au marché.",
      "Elle est allée au marché.",
      "Elle a allé au marché.",
    ],
    correct: 2,
    explanation: "Aller uses être, and the past participle must agree with a feminine subject: allée (feminine singular). Elle est allée.",
  },
  {
    question: "What is the past participle of 'faire'?",
    options: ["faisé", "fait", "fais", "faisit"],
    correct: 1,
    explanation: "Faire has an irregular past participle: fait. J'ai fait mes devoirs. Qu'est-ce que tu as fait ce week-end?",
  },
  {
    question: "Where does negation go in the passé composé?",
    options: [
      "Ne before the subject, pas after the past participle.",
      "Ne and pas both before the past participle.",
      "Ne before the auxiliary, pas immediately after it.",
      "Ne and pas both after the past participle.",
    ],
    correct: 2,
    explanation: "Negation wraps the auxiliary verb: ne + [avoir/être] + pas + past participle. Example: il n'a pas mangé, elle n'est pas venue.",
  },
  {
    question: "Which verb uses être in the passé composé?",
    options: ["finir", "manger", "partir", "téléphoner"],
    correct: 2,
    explanation: "Partir is one of the DR MRS VANDERTRAMP verbs and uses être: il est parti, elles sont parties. The others use avoir.",
  },
  {
    question: "What is the past participle of 'voir'?",
    options: ["voyu", "voyé", "vu", "voit"],
    correct: 2,
    explanation: "Voir → vu (irregular). Same -u pattern: lire → lu, boire → bu, pouvoir → pu, avoir → eu.",
  },
  {
    question: "How do you say 'They never ate here'?",
    options: [
      "Ils n'ont jamais mangé ici.",
      "Ils ont jamais ne mangé ici.",
      "Ils ne mangé pas jamais ici.",
      "Ils ont ne jamais mangé ici.",
    ],
    correct: 0,
    explanation: "Ne...jamais wraps the auxiliary: ils n'ont jamais mangé. Ne contracts before ont → n'ont. Jamais follows directly after the auxiliary.",
  },
  {
    question: "What does 'il y a trois jours' mean?",
    options: ["in three days", "since three days", "three days ago", "for three days"],
    correct: 2,
    explanation: "'Il y a + time' used with a past tense means 'ago': il y a trois jours = three days ago. Il y a is also used to say 'there is/are' in the present.",
  },
  {
    question: "Which past participle is formed correctly from 'écrire'?",
    options: ["écrivu", "écrivé", "écrit", "écrivi"],
    correct: 2,
    explanation: "Écrire → écrit (irregular). Similar pattern: dire → dit. These belong to the -it group of irregular past participles.",
  },
];

export default function Unit3TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support/unit-3/lesson-4" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Back to Lesson 4
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Unit 3 · Test</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">The Past Tense</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              10 questions covering all four lessons of Unit 3: passé composé with avoir, passé composé with être, irregular past participles, and negation with time expressions.
            </p>
          </div>

          <div className="rounded-2xl border border-[#EDE9FE] bg-[#EDE9FE] p-5">
            <p className="text-sm font-black text-[#7C3AED]">Unit 3 covers</p>
            <ul className="mt-3 space-y-2 text-sm text-[#0B1F3A]">
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#7C3AED] text-xs font-black text-white">1</span>
                Passé Composé with avoir
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#7C3AED] text-xs font-black text-white">2</span>
                Passé Composé with être
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#7C3AED] text-xs font-black text-white">3</span>
                Irregular Past Participles
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#7C3AED] text-xs font-black text-white">4</span>
                Negation &amp; Time Expressions
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 3 test" />
        </div>

        <div className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 4?</p>
          <p className="mt-2 text-[#526173]">Unit 4 introduces the imparfait — the second key past tense in French. You'll learn when to use it and how it contrasts with the passé composé.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/school-french-support/unit-3/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/school-french-support/unit-4/lesson-1" className="rounded-full bg-[#7C3AED] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#6D28D9]">Start Unit 4 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
