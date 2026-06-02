import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "TEF Canada", back: "Test d'évaluation de français pour le Canada", subtext: "The most widely used French language test for Canadian immigration. Recognized by IRCC for Express Entry, PNP, and citizenship applications." },
  { front: "TCF Canada", back: "Test de connaissance du français pour le Canada", subtext: "The other IRCC-recognized French test for immigration. Equivalent to TEF Canada — you choose which one to take. Both give CLB scores." },
  { front: "CLB", back: "Canadian Language Benchmarks", subtext: "Canada's official scale for measuring language proficiency, from CLB 1 (beginner) to CLB 12 (advanced). Immigration decisions are based on CLB levels, not raw test scores." },
  { front: "IRCC", back: "Immigration, Refugees and Citizenship Canada", subtext: "The federal department that manages immigration. IRCC accepts TEF Canada or TCF Canada scores as proof of French proficiency for immigration applications." },
  { front: "Express Entry", back: "Express Entry", subtext: "Canada's main immigration system for skilled workers. French proficiency can earn up to 50 bonus CRS points (single) or 25 points (with an Anglophone spouse). CLB 7 minimum is required to earn any points." },
  { front: "CRS", back: "Comprehensive Ranking System", subtext: "The points-based system used in Express Entry. Your CRS score determines if you receive an invitation to apply (ITA). French scores contribute directly to your CRS." },
  { front: "les quatre habiletés", back: "the four skills", subtext: "TEF Canada and TCF Canada test four skills: compréhension de l'oral (listening), compréhension de l'écrit (reading), expression écrite (writing), expression orale (speaking)." },
  { front: "CLB 7", back: "CLB 7 — Express Entry minimum", subtext: "The minimum score in all four skills to qualify under the Federal Skilled Worker Program (FSW). Below CLB 7 in any skill = no points from that skill." },
  { front: "CLB 9", back: "CLB 9 — significant CRS boost", subtext: "CLB 9 in all four skills means you are counted as a strong bilingual candidate. CRS points increase significantly above CLB 7, maximizing your Express Entry score." },
  { front: "le Programme des travailleurs qualifiés", back: "Federal Skilled Worker Program (FSW)", subtext: "The main Express Entry stream. Requires CLB 7 minimum in all four language skills if French is the primary language tested." },
];

const matchPairs = [
  { left: "TEF Canada", right: "Test d'évaluation de français pour le Canada" },
  { left: "CLB", right: "Canadian Language Benchmarks (1–12)" },
  { left: "IRCC", right: "Immigration, Refugees and Citizenship Canada" },
  { left: "CRS", right: "Comprehensive Ranking System (Express Entry points)" },
  { left: "CLB 7", right: "Express Entry minimum in each skill" },
  { left: "CLB 9", right: "significant CRS boost — strong bilingual candidate" },
];

const quiz = [
  {
    question: "Which two French language tests are recognized by IRCC for Canadian immigration?",
    options: [
      "DELF and DALF",
      "TEF Canada and TCF Canada",
      "SLE and TEF Canada",
      "Alliance française and TEF Canada",
    ],
    correct: 1,
    explanation: "IRCC recognizes TEF Canada (Test d'évaluation de français) and TCF Canada (Test de connaissance du français) for immigration purposes. You choose which one to take — both give CLB scores.",
  },
  {
    question: "What does CLB stand for, and what is the scale?",
    options: [
      "Canadian Language Benchmark — scale from 1 to 10",
      "Canadian Language Benchmark — scale from 1 to 12",
      "Certified Language Band — scale from A to C",
      "Canadian Literacy Band — scale from 1 to 7",
    ],
    correct: 1,
    explanation: "CLB = Canadian Language Benchmarks, from CLB 1 (beginner) to CLB 12 (advanced). All immigration French test scores are converted to CLB levels — this is the number IRCC uses.",
  },
  {
    question: "Under Express Entry (Federal Skilled Worker), what is the minimum CLB level required in each of the four skills to earn any language points?",
    options: ["CLB 4", "CLB 5", "CLB 6", "CLB 7"],
    correct: 3,
    explanation: "CLB 7 is the FSW minimum in each of the four skills (listening, reading, writing, speaking). Scoring below CLB 7 in any skill means zero language points from that skill in your CRS score.",
  },
  {
    question: "French proficiency can earn bonus CRS points in Express Entry because:",
    options: [
      "All federal jobs in Canada require bilingualism",
      "Canada has an economic interest in attracting French-speaking immigrants, especially for Quebec and francophone communities",
      "French scores replace English IELTS requirements",
      "The CRS system awards points for every language spoken",
    ],
    correct: 1,
    explanation: "Canada has a policy goal of attracting French-speaking immigrants — particularly outside Quebec — to support French-speaking minority communities. This is reflected in up to 50 bonus CRS points for strong French scores.",
  },
  {
    question: "TEF Canada and TCF Canada are different tests but:",
    options: [
      "TEF Canada is easier and more widely accepted",
      "TCF Canada is only for Quebec immigration",
      "Both are recognized by IRCC and produce CLB scores — you choose which to take",
      "You must take both to get the full French bonus in Express Entry",
    ],
    correct: 2,
    explanation: "TEF Canada and TCF Canada are both IRCC-recognized and produce equivalent CLB scores. Candidates choose based on availability, familiarity, or personal preference. Taking both is unnecessary.",
  },
];

export default function TEFLesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Unit 2 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              CLB Levels & Immigration Requirements
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              TEF Canada and TCF Canada are the two IRCC-recognized French tests for Canadian immigration. Both give CLB scores — and CLB scores determine how many CRS points you earn in Express Entry.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                IRCC does not use raw TEF/TCF scores — it converts them to{" "}
                <span className="font-black text-white">CLB levels</span>. Your immigration application is assessed based on CLB, not the test&apos;s own scale.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Express Entry French bonus</p>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>CLB 7–8:</strong> moderate CRS bonus</p>
                <p><strong>CLB 9+:</strong> significant CRS boost</p>
                <p><strong>CLB 7 minimum</strong> in all 4 skills to earn any points</p>
                <p className="mt-2 text-[#526173]">Up to 50 bonus points (single applicant)</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Understand the tests and the immigration system.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="TEF Canada — CLB & immigration" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border-2 border-[#EFF6FF] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">CLB levels explained</p>
          <h2 className="mt-2 text-xl font-black">What each level means for immigration</h2>
          <div className="mt-5 space-y-3">
            {[
              { range: "CLB 1–3", label: "Beginner", color: "bg-[#FEE2E2] text-[#B91C1C]", note: "Not sufficient for any immigration pathway requiring language proficiency." },
              { range: "CLB 4–6", label: "Intermediate", color: "bg-[#FEF3C7] text-[#D97706]", note: "Meets minimum requirements for some Provincial Nominee Programs. Not enough for Express Entry FSW." },
              { range: "CLB 7–8", label: "Upper Intermediate", color: "bg-[#EFF6FF] text-[#2563EB]", note: "Meets the Express Entry FSW minimum. Earns moderate CRS bonus points. Citizenship requirement level." },
              { range: "CLB 9–10", label: "Advanced", color: "bg-[#F0FDF4] text-[#16A34A]", note: "Significant CRS boost. Demonstrates strong professional proficiency. Highly competitive Express Entry profile." },
              { range: "CLB 11–12", label: "Near-native", color: "bg-[#FDF4FF] text-[#9333EA]", note: "Maximum French proficiency. Maximizes all available CRS French bonus points." },
            ].map((level) => (
              <div key={level.range} className="flex items-start gap-4 rounded-2xl border border-[#E7DAB9] p-4">
                <div className="text-center">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-black ${level.color}`}>{level.range}</span>
                  <p className="mt-1 text-xs font-bold text-[#526173]">{level.label}</p>
                </div>
                <p className="text-sm leading-6 text-[#526173]">{level.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each term to its meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="TEF Canada & CLB terminology" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Test your knowledge of CLB levels and immigration requirements.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="CLB & immigration quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#2563EB]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">CLB system understood.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: strategies for the TEF Canada listening and reading sections.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-1/test" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Unit 1 Test
            </Link>
            <Link href="/learn/canadian-french-tests/unit-2/lesson-2" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
