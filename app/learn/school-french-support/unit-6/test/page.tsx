import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "What is the first reading strategy to apply when you encounter a new French text?",
    options: ["Translate every word", "Read the title and use it to activate vocabulary", "Skip to the questions immediately", "Count the number of verbs"],
    correct: 1,
    explanation: "Reading the title first helps you anticipate the topic and activate related vocabulary before you read a word of the text.",
  },
  {
    question: "What does 'librairie' mean in French?",
    options: ["Library", "Reading room", "Bookshop", "Archive"],
    correct: 2,
    explanation: "Librairie = bookshop (where you buy books). A library (where you borrow books) = bibliothèque. This is a classic faux ami.",
  },
  {
    question: "What does 'actuel' mean in French?",
    options: ["Actual / real", "Active", "Current / present", "Accurate"],
    correct: 2,
    explanation: "'Actuel' means current or present-day (les problèmes actuels = current problems). It does not mean 'actual' in the English sense.",
  },
  {
    question: "In a beginner daily-life text, what tense will most verbs be in?",
    options: ["Passé composé", "Imparfait", "Present tense", "Futur simple"],
    correct: 2,
    explanation: "Beginner texts describing routines and daily life use the present tense: je me lève, je mange, je vais à l'école.",
  },
  {
    question: "In a past narrative, which tense is used for a sudden interrupting event?",
    options: ["Imparfait", "Passé composé", "Présent", "Futur proche"],
    correct: 1,
    explanation: "Sudden, completed events that interrupt the narrative use the passé composé: tout à coup, il a commencé à pleuvoir.",
  },
  {
    question: "Which time marker signals that the imparfait is likely to follow?",
    options: ["tout à coup", "soudain", "autrefois", "un jour"],
    correct: 2,
    explanation: "'Autrefois' means 'in the past / once upon a time' and introduces habitual or descriptive past actions → imparfait. Soudain and tout à coup signal passé composé.",
  },
  {
    question: "What does 'avoir l'habitude de + infinitive' express?",
    options: ["A sudden past event", "A future intention", "A habitual or repeated past action", "A completed action"],
    correct: 2,
    explanation: "'Avoir l'habitude de' means 'to be used to / to usually do' and describes a habitual past action, always in the imparfait.",
  },
  {
    question: "What does 'il est indéniable que' introduce in an argumentative text?",
    options: ["A contrast", "A question", "An accepted fact", "A personal opinion"],
    correct: 2,
    explanation: "'Il est indéniable que' (it is undeniable that) introduces a fact or point presented as universally accepted — common in formal opinion writing.",
  },
  {
    question: "What is a cognate?",
    options: ["A false friend (faux ami)", "A word similar in form and meaning across languages", "A verb tense", "A type of connector"],
    correct: 1,
    explanation: "Cognates are words that look and mean the same (or similar) in two languages: musique / music, université / university, important / important.",
  },
  {
    question: "According to the upper-intermediate texts, who does the environmental text say shares responsibility for environmental problems?",
    options: ["Governments alone", "Companies alone", "Both governments and individuals", "Scientists and researchers"],
    correct: 2,
    explanation: "The text states 'la responsabilité est partagée: les gouvernements doivent adopter des politiques ambitieuses, mais chacun d'entre nous a également un rôle à jouer' — both governments and individuals.",
  },
];

export default function Unit6TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support/unit-6/lesson-4" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Back to Lesson 4
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#854D0E]">Unit 6 · Test</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Reading Comprehension</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">10 questions covering all four lessons of Unit 6: reading strategies and faux amis, beginner present-tense texts, intermediate past-tense narratives, and upper-intermediate opinion texts.</p>
          </div>
          <div className="rounded-2xl border border-[#FEF9C3] bg-[#FEF9C3] p-5">
            <p className="text-sm font-black text-[#854D0E]">Unit 6 covers</p>
            <ul className="mt-3 space-y-2 text-sm text-[#0B1F3A]">
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#854D0E] text-xs font-black text-white">1</span> Reading Strategies</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#854D0E] text-xs font-black text-white">2</span> Beginner Texts</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#854D0E] text-xs font-black text-white">3</span> Intermediate Texts</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#854D0E] text-xs font-black text-white">4</span> Upper-Intermediate Texts</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 6 test" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-8 text-white">
          <p className="font-black text-2xl">Course complete!</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            You&apos;ve finished School French Support. You now have a strong foundation in grammar, tenses, writing, and reading — everything you need for school French.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/school-french-support/unit-6/lesson-4" className="rounded-full border border-[#334155] bg-[#0B1F3A] px-6 py-3 text-sm font-black text-[#CBD5E1] transition hover:-translate-y-0.5 hover:border-[#526173]">← Back to lesson</Link>
            <Link href="/learn" className="rounded-full bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5 hover:bg-[#F0FDF4]">Explore all courses →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
