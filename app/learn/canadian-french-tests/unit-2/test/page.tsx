import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "What does CLB stand for, and who uses it?",
    options: [
      "Canadian Language Band — used by Alliance française to certify students",
      "Canadian Language Benchmark — used by IRCC to assess language proficiency for immigration",
      "Certified Language Band — used by employers to assess bilingual candidates",
      "Canada Literacy Benchmark — used by provincial governments",
    ],
    correct: 1,
    explanation: "CLB = Canadian Language Benchmarks. IRCC uses CLB levels — not raw test scores — to assess French proficiency for immigration applications. TEF Canada and TCF Canada scores are converted to CLB.",
  },
  {
    question: "Under the Federal Skilled Worker (FSW) Express Entry stream, what is the minimum CLB level required in each of the four skills?",
    options: ["CLB 4", "CLB 5", "CLB 6", "CLB 7"],
    correct: 3,
    explanation: "CLB 7 is the FSW minimum in all four skills (listening, reading, writing, speaking). Below CLB 7 in any single skill means zero language points from that skill.",
  },
  {
    question: "Which two French tests are recognized by IRCC for immigration purposes?",
    options: [
      "DELF and DALF",
      "SLE and TEF Canada",
      "TEF Canada and TCF Canada",
      "DELF and TEF Canada",
    ],
    correct: 2,
    explanation: "IRCC recognizes TEF Canada and TCF Canada. The SLE is for federal government jobs, not immigration. DELF is a European qualification not recognized by IRCC for immigration applications.",
  },
  {
    question: "TEF Canada listening audio plays:",
    options: [
      "Twice — once for main idea, once for details",
      "Three times at decreasing speed",
      "Once — you must take notes while listening",
      "As many times as you need within the time limit",
    ],
    correct: 2,
    explanation: "TEF Canada audio plays only once. Taking notes during the first (and only) listen is essential — write key words, names, numbers, and opinions as you hear them.",
  },
  {
    question: "TEF Canada writing is assessed on four criteria. Which one, if failed, can bring down your entire response score the most?",
    options: [
      "Grammaire (grammar accuracy)",
      "Vocabulaire (vocabulary range)",
      "Pertinence (task relevance)",
      "Longueur (text length)",
    ],
    correct: 2,
    explanation: "Pertinence — whether your response addresses the task — is the most critical criterion. A grammatically perfect but off-topic text scores poorly. Always re-read the task before writing and stay focused on what's asked.",
  },
  {
    question: "For TEF Canada writing Task 2 (the formal task), the correct salutation when you don't know the recipient's name is:",
    options: [
      "'Bonjour,'",
      "'Salut,'",
      "'Madame, Monsieur,'",
      "'Cher directeur,'",
    ],
    correct: 2,
    explanation: "'Madame, Monsieur,' is the standard salutation for a formal letter or email when the recipient's name is unknown. 'Bonjour' is semi-formal. 'Cher directeur' is only correct if the recipient's title is specified.",
  },
  {
    question: "TEF Canada speaking responses are:",
    options: [
      "Assessed live by an examiner in the room with you",
      "Recorded and evaluated by a trained examiner after the test",
      "Submitted as a written transcript",
      "Self-assessed using a rubric",
    ],
    correct: 1,
    explanation: "TEF Canada speaking is recorded — you speak into a microphone and your responses are evaluated later by a trained examiner. There is no live evaluator present. Speak clearly, stay on topic, and maintain a steady pace.",
  },
  {
    question: "Which of the following best describes the purpose of CLB 9 in Express Entry?",
    options: [
      "It is the minimum requirement — candidates below CLB 9 earn no points",
      "It is the maximum possible CLB level for immigration",
      "It triggers a significant CRS boost, making your Express Entry profile much more competitive",
      "It replaces the English language requirement",
    ],
    correct: 2,
    explanation: "CLB 9 produces a significant jump in CRS points compared to CLB 7–8. Candidates with CLB 9+ in all four skills have a notably higher CRS score and are considered strong bilingual candidates by IRCC.",
  },
  {
    question: "A TEF Canada reading question asks what the word 'démarche' means in the context of paragraph 3. The best approach is:",
    options: [
      "Use the most common dictionary definition of 'démarche'",
      "Skip vocabulary questions — they're unpredictable",
      "Read the sentences around 'démarche' in paragraph 3 to understand how it's used in context",
      "Look for the word in the questions — it might appear again with a definition",
    ],
    correct: 2,
    explanation: "Vocabulary-in-context questions test reading comprehension, not dictionary knowledge. The answer is always supported by the surrounding text. Read 2–3 sentences around the word to infer its meaning in that specific context.",
  },
  {
    question: "Someone with CLB 5 in listening and reading, CLB 7 in writing, and CLB 4 in speaking applies under Express Entry FSW. What is their French points situation?",
    options: [
      "They earn maximum French bonus points",
      "They earn points for the two skills above CLB 7",
      "They earn zero French language points — all four skills must be at CLB 7+",
      "They qualify but with a reduced bonus",
    ],
    correct: 2,
    explanation: "Under FSW Express Entry, all four skills must be at CLB 7 or above to earn any French language points. CLB 4 in speaking means the language requirement is not met — zero French points regardless of the other skill scores.",
  },
];

export default function TEFTestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-black text-[#2563EB]">Unit 2 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">TEF Canada — Immigration</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions on CLB levels, IRCC requirements, Express Entry points, and TEF Canada test strategies.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 2 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm">
          <p className="text-sm font-bold text-[#C9A44C] uppercase tracking-widest">Course complete!</p>
          <h2 className="mt-3 text-3xl font-black">You&apos;ve finished French for Canadian Tests.</h2>
          <p className="mt-3 leading-7 text-white/70">
            You now understand the SLE for government jobs and TEF Canada for immigration — the format, scoring, and strategies for both. Keep practising with authentic French content.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests" className="rounded-full bg-[#C9A44C] px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Review the course
            </Link>
            <Link href="/resources/sle-guide" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5">
              SLE quick reference →
            </Link>
            <Link href="/resources/tef-canada-guide" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5">
              TEF Canada quick reference →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
