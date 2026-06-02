import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "A federal job posting requires a language profile of 'CBC.' In what order are the letters read?",
    options: [
      "Writing / Reading / Oral Interaction",
      "Reading / Writing / Oral Interaction",
      "Oral Interaction / Writing / Reading",
      "Reading / Oral Interaction / Writing",
    ],
    correct: 1,
    explanation: "Profile letters always go in order: Reading / Writing / Oral Interaction. CBC = C in reading, B in writing, C in oral interaction. This is a supervisory-level profile.",
  },
  {
    question: "Which government body administers the Second Language Evaluation (SLE)?",
    options: [
      "Treasury Board of Canada",
      "IRCC (Immigration, Refugees and Citizenship Canada)",
      "The Public Service Commission (PSC)",
      "The Office of the Commissioner of Official Languages",
    ],
    correct: 2,
    explanation: "The Public Service Commission (Commission de la fonction publique) administers and oversees the SLE for federal bilingual positions.",
  },
  {
    question: "The SLE reading test uses what type of texts?",
    options: [
      "Literary fiction and poetry",
      "Conversational dialogues and interviews",
      "Authentic federal government documents — memos, reports, briefing notes, policies",
      "News articles and social media posts",
    ],
    correct: 2,
    explanation: "The SLE reading test uses texts that look exactly like real federal government documents — administrative memos, briefing notes, policy summaries, and reports. Practice by reading real government documents in French.",
  },
  {
    question: "Part A of the SLE writing test requires you to:",
    options: [
      "Summarize a document you have just read",
      "Identify and correct deliberate errors in a provided document",
      "Translate a paragraph from English to French",
      "Answer short-answer comprehension questions",
    ],
    correct: 1,
    explanation: "Part A is an editing task. A document with embedded errors (grammar, spelling, vocabulary, punctuation) is provided, and you must find and correct them. Part B is the production task — writing from scratch.",
  },
  {
    question: "For the SLE oral interaction, the evaluator assesses all of the following EXCEPT:",
    options: [
      "Clarity of message",
      "Vocabulary range",
      "Grammatical accuracy",
      "Regional French accent",
    ],
    correct: 3,
    explanation: "Accent is not assessed — the SLE is not a pronunciation competition. What matters is clarity, vocabulary range, grammatical accuracy, fluency, and interactive skills.",
  },
  {
    question: "The most effective strategy when you encounter a difficult SLE reading passage is:",
    options: [
      "Read the passage three times before looking at any questions",
      "Skip the entire passage and its questions",
      "Read each question first, then scan the text for the relevant section",
      "Answer based on your general knowledge of the topic",
    ],
    correct: 2,
    explanation: "Always read the question first, then go to the text with a specific target. This is more efficient than reading the whole passage without knowing what's being asked.",
  },
  {
    question: "An employee is marked 'exempté(e)' on their language profile. This means:",
    options: [
      "They failed the SLE and are waiting to retake it",
      "They are only required to take two of the three SLE tests",
      "Their French is confirmed — no SLE is required",
      "They have received an automatic Level A rating",
    ],
    correct: 2,
    explanation: "Exempt employees have confirmed French proficiency — typically because French is their first language or they've already been tested. They don't need to take the SLE.",
  },
  {
    question: "You are writing a Part B memo for the SLE. Your opening line should be:",
    options: [
      "'Salut! Je t'écris pour...'",
      "'Je voulais juste te dire que...'",
      "'Suite à notre réunion du 14 mars, je vous informe que...'",
      "'Hey, quick update:'",
    ],
    correct: 2,
    explanation: "Government memos use formal register. Openings like 'Suite à…' (Following…) or 'Je vous écris afin de…' (I am writing in order to…) are standard. Informal language is a register error that lowers your score.",
  },
  {
    question: "Which level — A, B, or C — is required to handle abstract language, implied meaning, and cross-references in complex federal documents?",
    options: ["Level A", "Level B", "Level C", "All three levels handle this equally"],
    correct: 2,
    explanation: "Level C is the advanced level — required for texts that use abstract language, implied meaning, specialized vocabulary, and complex document structures. Levels A and B focus on more explicit, concrete information.",
  },
  {
    question: "During the SLE oral role-play, the evaluator presents a problem and you disagree with their position. The best approach is:",
    options: [
      "Immediately agree to avoid conflict — the evaluator controls your grade",
      "Stay silent until they ask you another question",
      "Acknowledge their point, then maintain and develop your position clearly",
      "Ask to skip the role-play and do a monologue instead",
    ],
    correct: 2,
    explanation: "Interactive skills are directly graded. Saying 'Je comprends votre point de vue, cependant…' shows you can engage, not just respond. Level B–C candidates hold their position while acknowledging the other perspective.",
  },
];

export default function SLETestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-black text-[#D97706]">Unit 1 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">SLE — Federal Government Jobs</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions on SLE format, language profiles, reading strategies, writing test structure, and oral interaction criteria.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 1 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 2?</p>
          <p className="mt-2 text-[#526173]">Unit 2 covers TEF Canada and TCF Canada — the French tests recognized by IRCC for Express Entry and immigration.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-1/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/canadian-french-tests/unit-2/lesson-1" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Start Unit 2 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
