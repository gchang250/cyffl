import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "Paper 1 gives you how many text type options per prompt?",
    options: ["One — the text type is prescribed", "Two — formal or informal", "Three — you choose the most appropriate one", "As many as you like"],
    correct: 2,
    explanation: "Paper 1 gives you three text type options per prompt. You choose the one that best fits the context, recipient, and purpose described in the task.",
  },
  {
    question: "What are the three things Criterion C (Compréhension conceptuelle) assesses?",
    options: [
      "Grammar, vocabulary, and punctuation",
      "Text type choice, register/tone, and application of text type conventions",
      "Introduction, development, and conclusion",
      "Length, accuracy, and originality",
    ],
    correct: 1,
    explanation: "Criterion C (/6) assesses: (1) did you choose an appropriate text type? (2) is your register and tone consistent and appropriate? (3) did you correctly apply the conventions of that text type?",
  },
  {
    question: "Which four elements does the IB require for an article to earn full Criterion C marks?",
    options: [
      "Opening address, stylistic devices, conclusion, thank-you",
      "Author name, date, title, introduction and conclusion",
      "Title, first person narration, reader address, date",
      "Title, introduction, bullet points, final recommendation",
    ],
    correct: 1,
    explanation: "The official IB conventions for an article are: author name, date, title, and both an introduction and a conclusion. Missing any of these directly costs Criterion C marks.",
  },
  {
    question: "For a blog, the IB requires 'reader awareness.' This means:",
    options: [
      "Knowing who the IB examiner is",
      "Addressing the reader directly in the text and writing in first person",
      "Using a formal salutation",
      "Writing at least 300 words",
    ],
    correct: 1,
    explanation: "The IB defines blog reader awareness as: first-person narration (je) and directly addressing the reader (e.g., 'Et vous, qu'en pensez-vous ?'). Both are required for full Criterion C.",
  },
  {
    question: "A prompt asks you to share your opinion on a topic with your classmates. Which text type is the most directly appropriate?",
    options: ["Formal letter to the school administration", "Proposal to a committee", "Speech (exposé) or article in the school newspaper", "Instructions"],
    correct: 2,
    explanation: "Sharing with classmates = a direct address to an audience you know. An exposé is the most direct format. An article in the school newspaper also works. A proposal or formal letter would be over-formal for this context.",
  },
  {
    question: "Criterion B does NOT penalise…",
    options: [
      "Using the wrong text type",
      "Inconsistent register",
      "Factual inaccuracies — only coherence and development are assessed",
      "A missing conclusion",
    ],
    correct: 2,
    explanation: "The IB explicitly states that examiners do not penalise factually incorrect information in Criterion B. If your ideas are coherent and developed, you are rewarded — even if a statistic is wrong.",
  },
  {
    question: "An exposé (speech) must open with:",
    options: [
      "A title and the author's name",
      "A direct address ('Mesdames et messieurs,' or 'Chers camarades,')",
      "A thesis statement in the first sentence",
      "A date and subject line",
    ],
    correct: 1,
    explanation: "An exposé always opens with a direct address to the audience. This is a required convention — without it, Criterion C is capped.",
  },
  {
    question: "To reach the Criterion A top band (10–12), your writing must demonstrate:",
    options: [
      "Only basic present and passé composé tenses",
      "Varied vocabulary, complex tenses (subjunctive, conditional, futur simple), and idiomatic expressions",
      "Long sentences with minimal connectors",
      "Formal register regardless of text type",
    ],
    correct: 1,
    explanation: "The IB top band descriptor (10–12) explicitly requires varied vocabulary, idiomatic expressions, and both basic and complex grammatical structures used effectively.",
  },
  {
    question: "Which connector introduces a counterargument most effectively in a formal text?",
    options: ["de plus", "tout d'abord", "cependant / néanmoins", "par conséquent"],
    correct: 2,
    explanation: "Cependant (however) and néanmoins (nevertheless) introduce a contrast or counterargument. 'De plus' adds a point; 'par conséquent' draws a conclusion; 'tout d'abord' opens a sequence.",
  },
  {
    question: "A proposal (proposition) is acceptable when submitted as a letter or email, provided:",
    options: [
      "It is at least 300 words long",
      "It uses a formal register only",
      "All required conventions (title, intro, structure, convincing conclusion) are present",
      "It is addressed to a government official",
    ],
    correct: 2,
    explanation: "The IB explicitly states a proposition can be submitted as a letter, email, or similar format — as long as all four required conventions are present: title, introduction, clear structure, and convincing conclusion.",
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
            10 questions on text type conventions, Criterion C, register, text selection logic, and what separates the top band from the middle band.
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
