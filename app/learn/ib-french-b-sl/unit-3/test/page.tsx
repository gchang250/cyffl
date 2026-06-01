import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "A Paper 1 prompt asks you to write for your school newspaper about a local environmental issue. What text type is required?",
    options: ["A formal letter", "A diary entry", "A newspaper article", "A report"],
    correct: 2,
    explanation: "School newspaper = un article de presse. It needs a headline, structured paragraphs, and semi-formal register.",
  },
  {
    question: "Which text type always opens with a direct address like 'Mesdames et messieurs'?",
    options: ["Blog post", "Formal letter", "Speech / discours", "Report"],
    correct: 2,
    explanation: "Un discours (speech) opens with a direct address to the audience. This is a required convention that examiners look for.",
  },
  {
    question: "You are writing a complaint letter to a company. Which salutation is correct?",
    options: ["Salut!", "Cher directeur,", "Monsieur / Madame,", "Bonjour,"],
    correct: 2,
    explanation: "'Monsieur / Madame,' is the standard formal letter salutation when you don't know the recipient's name.",
  },
  {
    question: "A blog post about travelling to Vietnam is written using 'vous' throughout. This is:",
    options: ["Correct — all IB writing uses vous", "A register error — blogs use je and informal language", "Fine if the topic is serious", "Required in all Paper 1 tasks"],
    correct: 1,
    explanation: "Blogs are informal and personal. Using 'vous' where 'tu' or 'je' is expected is a register error that costs marks in Criterion A.",
  },
  {
    question: "You want to introduce a counterargument. Which connector do you use?",
    options: ["de plus", "tout d'abord", "cependant", "par conséquent"],
    correct: 2,
    explanation: "Cependant (however) / néanmoins (nevertheless) introduce a counterargument or contrast. 'De plus' adds a point; 'par conséquent' draws a conclusion.",
  },
  {
    question: "Which sentence correctly uses 'grâce à'?",
    options: ["Grâce à la crise, les gens souffrent.", "Grâce à ce projet, les résultats s'améliorent.", "Grâce à l'inégalité, rien ne change.", "Grâce à l'échec, tout s'empire."],
    correct: 1,
    explanation: "Grâce à expresses a positive cause. For negative causes use 'à cause de'. 'Thanks to this project, results are improving.'",
  },
  {
    question: "Every Paper 1 text must include:",
    options: ["A numbered list of points", "Appropriate format conventions and a conclusion", "At least three paragraphs and a headline", "A formal salutation and a bibliography"],
    correct: 1,
    explanation: "Every text type needs appropriate format conventions (opening, structure, closing) AND a conclusion. These are marked in Criterion A.",
  },
  {
    question: "To score in the higher bands on Paper 1, you should demonstrate:",
    options: ["Only the present and passé composé tenses", "Complex tenses like the subjunctive and conditional, plus idiomatic expressions", "Long sentences with no connectors", "Informal language regardless of text type"],
    correct: 1,
    explanation: "Higher-band writing uses the subjunctive, conditional, and futur simple — and idiomatic expressions like 'il va sans dire que' or 'force est de constater'. Tense variety and linguistic range are directly rewarded.",
  },
  {
    question: "For a report to a city council, which pronoun do you use when addressing the reader?",
    options: ["tu", "vous", "on", "il/elle"],
    correct: 1,
    explanation: "A report to a city council is a formal document. Always use 'vous' when directly addressing formal readers.",
  },
  {
    question: "Which structure is best for presenting both sides of an argument in a balanced article?",
    options: ["tout d'abord… de plus… en conclusion", "d'une part… d'autre part", "à mon avis… selon moi", "par conséquent… c'est pourquoi"],
    correct: 1,
    explanation: "'D'une part… d'autre part' (on one hand… on the other hand) is the standard structure for two-sided argument writing.",
  },
];

export default function Unit3TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-[#F0FDF4] px-3 py-1 text-xs font-black text-[#16A34A]">Unit 3 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">Paper 1 — Written Production</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions on text types, format conventions, register, audience, connectors, and what it takes to score in the higher bands.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 3 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 4?</p>
          <p className="mt-2 text-[#526173]">Unit 4 is the Individual Oral — oral structure, image description, and discussing global issues.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-3/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/ib-french-b-sl/unit-4/lesson-1" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Start Unit 4 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
