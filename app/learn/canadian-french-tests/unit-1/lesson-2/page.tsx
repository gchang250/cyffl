import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "le texte administratif", back: "administrative text", subtext: "The core text type in the SLE reading test. Memos, briefing notes, policies, reports — the language of the federal public service." },
  { front: "la note de service", back: "memo / memorandum", subtext: "A standard government communication format. Short, structured, action-oriented. Very common in the SLE reading test." },
  { front: "le compte rendu", back: "minutes / summary report", subtext: "A record of a meeting or event. SLE texts often include decisions made, actions assigned, and responsible parties." },
  { front: "l'objet", back: "subject line", subtext: "The 'Re:' line in a memo or email. Sets the topic — read it first to orient yourself before reading the full text." },
  { front: "repérer", back: "to locate / to identify", subtext: "The core skill in the reading test — find the specific information the question asks for. Don't read for general understanding." },
  { front: "éliminer", back: "to eliminate", subtext: "The most reliable strategy for multiple-choice: eliminate options that are clearly wrong before choosing between the remaining two." },
  { front: "le sens implicite", back: "implied meaning", subtext: "At Level C, some questions test inferred meaning — what the text suggests but doesn't state directly. Level B is mostly explicit." },
  { front: "le registre soutenu", back: "formal register", subtext: "SLE reading texts use formal, bureaucratic French. Passive voice, nominalization, and complex sentence structures are common." },
  { front: "le renvoi", back: "cross-reference", subtext: "A reference from one part of a document to another ('Voir section 4.2'). At Level C, following these is part of the comprehension task." },
  { front: "gérer son temps", back: "to manage time", subtext: "The SLE reading test is timed. Don't spend more than about 90 seconds per question — move on and come back if you're stuck." },
];

const matchPairs = [
  { left: "la note de service", right: "memo" },
  { left: "le compte rendu", right: "minutes / summary report" },
  { left: "l'objet", right: "subject line" },
  { left: "repérer", right: "to locate information" },
  { left: "éliminer", right: "to eliminate wrong options" },
  { left: "le registre soutenu", right: "formal register" },
];

const quiz = [
  {
    question: "The most effective strategy for SLE reading multiple-choice questions is:",
    options: [
      "Read the whole text carefully before looking at the questions",
      "Read the question first, then scan the text for the relevant section",
      "Choose the longest answer — it's usually correct",
      "Trust your gut — the first option that seems right usually is",
    ],
    correct: 1,
    explanation: "Read the question first. This tells you exactly what information to look for. Then scan the text to find the relevant section — you don't need to read every word.",
  },
  {
    question: "A Level C SLE reading question asks what a text 'implies' about a policy. This tests:",
    options: [
      "Vocabulary — you need to know the word 'implique'",
      "Inferred meaning — what the text suggests without stating directly",
      "Explicit detail — the answer will be stated word-for-word in the text",
      "Grammar — the question is about verb tense",
    ],
    correct: 1,
    explanation: "Level C tests implied meaning — what the text suggests, implies, or leaves unsaid. Level A and B questions are mostly about explicitly stated information. If you're targeting B, focus on explicit comprehension first.",
  },
  {
    question: "You're stuck between two options. The best approach is:",
    options: [
      "Pick the one that mentions a word from the text",
      "Always pick option B — statistically more likely",
      "Go back to the specific part of the text the question refers to and compare both options",
      "Skip the question entirely",
    ],
    correct: 2,
    explanation: "Go back to the text. Read the specific sentence or paragraph the question is about, then decide which option is supported by what the text actually says — not what seems logical or plausible.",
  },
  {
    question: "The 'objet' (subject line) of a memo tells you:",
    options: [
      "Who wrote the memo",
      "The date the memo was written",
      "The main topic — read it first to orient yourself before reading the full text",
      "The official reference number",
    ],
    correct: 2,
    explanation: "The object/subject line sets the topic before you read anything else. In a timed test, reading it first helps you approach the text with context — you already know what to look for.",
  },
  {
    question: "SLE reading texts use 'registre soutenu' (formal register). This means you will encounter:",
    options: [
      "Informal expressions and colloquialisms",
      "Passive voice, complex sentence structures, and technical/administrative vocabulary",
      "Short, simple sentences designed for quick reading",
      "Mostly English loanwords",
    ],
    correct: 1,
    explanation: "Government French is formal and bureaucratic — passive voice ('il a été décidé que'), nominalization ('la mise en œuvre'), and long embedded clauses are common. Practice reading real government documents in French.",
  },
];

export default function SLELesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">
              Unit 1 · Lesson 2
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Reading Test Strategies
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The SLE reading test uses authentic government texts — memos, briefing notes, policies, and reports. The questions are multiple choice, but the language is dense. Know how to navigate it efficiently.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                Read the{" "}
                <span className="font-black text-white">question first</span>, then scan the text for the answer. Government reading texts are long — you don&apos;t need to read every word for every question.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">What the levels test</p>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>Level A:</strong> Basic vocabulary, short clear sentences</p>
                <p><strong>Level B:</strong> Longer texts, complex vocabulary, explicit detail</p>
                <p><strong>Level C:</strong> Abstract language, implied meaning, cross-references</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Know the text types and strategies.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="SLE reading — text types & strategies" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each term to its meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Reading vocabulary" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border-2 border-[#FEF3C7] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">Preparation tip</p>
          <h2 className="mt-2 text-xl font-black">Read real government documents in French</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            The PSC writes SLE reading texts to look exactly like real federal documents. The best way to prepare is to read the real thing. Try:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[#526173]">
            {[
              "canada.ca — read bilingual pages in French",
              "Reports tabled in Parliament (Rapports au Parlement)",
              "Treasury Board policy documents (Politique sur la gestion financière, etc.)",
              "Any federal department's 'rapports annuels' (annual reports)",
              "The Canada Gazette (Gazette du Canada) for regulatory language",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A44C]" />
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Test your reading strategies.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Reading strategies quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D97706]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Reading strategies in place.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: the SLE writing test and oral interaction — what they assess and how to prepare.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-1/lesson-1" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/canadian-french-tests/unit-1/lesson-3" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
