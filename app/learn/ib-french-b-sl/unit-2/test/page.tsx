import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "A Paper 1 question says: 'Vrai, Faux ou On ne sait pas? — La conférencière est professeure.' The text says she works in education but doesn't specify her role. What do you answer?",
    options: ["Vrai", "Faux", "On ne sait pas", "Vrai et Faux"],
    correct: 2,
    explanation: "On ne sait pas — the text doesn't confirm she is specifically a teacher. Never infer; only use what is directly and explicitly stated.",
  },
  {
    question: "What does the instruction 'Relevez…' mean?",
    options: ["Summarise…", "Explain…", "Find and write…", "Translate…"],
    correct: 2,
    explanation: "Relevez = find / pick out directly from the text. You should quote or closely paraphrase the original text, not add your own ideas.",
  },
  {
    question: "Before reading a Paper 1 text carefully, the best first step is to:",
    options: ["Translate every unknown word", "Read the questions first", "Write a summary of what you expect", "Read the text twice through"],
    correct: 1,
    explanation: "Reading the questions first focuses your attention so you can locate relevant information efficiently.",
  },
  {
    question: "Choose the correct relative pronoun: 'C'est la loi _____ a changé le système.'",
    options: ["que", "dont", "où", "qui"],
    correct: 3,
    explanation: "Qui replaces the subject — 'the law that changed the system'. The law is the subject of 'a changé'.",
  },
  {
    question: "Choose the correct relative pronoun: 'C'est un sujet _____ tout le monde parle.'",
    options: ["qui", "que", "dont", "où"],
    correct: 2,
    explanation: "Dont is used because 'parler de' requires 'de'. 'Un sujet dont tout le monde parle' = A topic everyone talks about.",
  },
  {
    question: "You hear a recording twice. When should you write specific answers?",
    options: ["Only during the first listen", "During both listens, using each for different purposes", "Only during the second listen", "After both listens are finished"],
    correct: 1,
    explanation: "First listen = main idea, speaker, purpose. Second listen = specific details, numbers, answers. Use both listens strategically.",
  },
  {
    question: "You hear: 'Bienvenue à bord du train TGV 1042 à destination de Lyon.' This is:",
    options: ["An interview", "A news report", "An announcement", "An advertisement"],
    correct: 2,
    explanation: "Une annonce — a short, direct announcement providing key travel information.",
  },
  {
    question: "Which sentence uses the imparfait for the correct reason?",
    options: ["Il a voyagé au Maroc l'été dernier.", "Il voyageait souvent au Maroc quand il était jeune.", "Il voyagera au Maroc l'année prochaine.", "Il aurait voyagé au Maroc si possible."],
    correct: 1,
    explanation: "'Il voyageait souvent' (imperfect) describes a repeated past habit. The imperfect is for ongoing states, descriptions, and repeated actions in the past.",
  },
  {
    question: "What does 'le public cible' mean?",
    options: ["The main idea", "The target audience", "The tone of the text", "The purpose of the text"],
    correct: 1,
    explanation: "Le public cible = the target audience — who the text is written for. Identified from context clues: vocabulary, register, content.",
  },
  {
    question: "A listening question asks 'Quelle est l'attitude du chercheur?' He says the results are 'encourageants, mais la recherche doit continuer.' His attitude is:",
    options: ["Strongly negative", "Completely satisfied", "Cautiously optimistic", "Dismissive"],
    correct: 2,
    explanation: "Encourageants (encouraging) is positive, but 'la recherche doit continuer' shows he sees more work to do — cautiously optimistic.",
  },
];

export default function Unit2TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-black text-[#D97706]">Unit 2 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">Paper 1 — Receptive Skills</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions on reading strategies, question types, grammar for comprehension, and listening skills.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 2 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 3?</p>
          <p className="mt-2 text-[#526173]">Unit 3 covers Paper 2 — written production, text types, and writing techniques.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-2/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/ib-french-b-sl/unit-3/lesson-1" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Start Unit 3 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
