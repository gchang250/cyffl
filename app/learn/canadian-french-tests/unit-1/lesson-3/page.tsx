import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "la correction de texte", back: "editing / proofreading", subtext: "Part A of the SLE writing test. You receive a document containing deliberate errors — grammatical, spelling, vocabulary, punctuation — and must correct them." },
  { front: "la production écrite", back: "written production", subtext: "Part B of the SLE writing test. You produce a short text (memo, email, or briefing note) from scratch based on a given situation and instructions." },
  { front: "la grille de correction", back: "marking rubric", subtext: "The SLE writing test is marked on specific criteria: accuracy, clarity, register, vocabulary range, and adherence to format conventions." },
  { front: "le courriel officiel", back: "official email", subtext: "One of the most common Part B tasks — write an email from a government employee to a colleague, manager, or external partner. Follow government format conventions." },
  { front: "la note d'information", back: "briefing note", subtext: "A common Part B format — a structured document summarizing a situation, background, analysis, and recommended action. Used at all levels of government." },
  { front: "le scénario", back: "scenario / situation", subtext: "The Part B writing task begins with a scenario describing your role, your recipient, and what you must communicate. Read it carefully before writing." },
  { front: "le jeu de rôle", back: "role play", subtext: "One of the oral interaction tasks. The evaluator plays a role (e.g., a client or colleague) and you must respond naturally in a workplace context." },
  { front: "l'exposé", back: "short presentation / monologue", subtext: "One of the oral interaction tasks. You are given a topic or visual prompt and must speak for 2–3 minutes, organizing your ideas clearly." },
  { front: "la clarté des idées", back: "clarity of ideas", subtext: "A key oral criterion — the evaluator assesses whether your message is clear and well-organized, not just whether your French is grammatically perfect." },
  { front: "le débit", back: "speaking rate / fluency", subtext: "Oral criterion — natural speaking pace without excessive pauses. Hesitations and self-corrections are normal but too many suggest lower fluency." },
];

const matchPairs = [
  { left: "la correction de texte", right: "editing — fix errors in a document" },
  { left: "la production écrite", right: "write a text from scratch" },
  { left: "la note d'information", right: "briefing note" },
  { left: "le jeu de rôle", right: "oral role play with evaluator" },
  { left: "la clarté des idées", right: "clarity — is the message clear?" },
  { left: "le débit", right: "speaking rate / fluency" },
];

const quiz = [
  {
    question: "The SLE writing test has two parts. Part A requires you to:",
    options: [
      "Write a memo from scratch based on a given situation",
      "Translate a paragraph from English to French",
      "Identify and correct errors in a government document",
      "Answer comprehension questions about a written text",
    ],
    correct: 2,
    explanation: "Part A is a correction/editing task — a document is given to you with deliberate errors (grammar, spelling, vocabulary, punctuation) and you must find and fix them.",
  },
  {
    question: "Before writing your Part B response, the most important step is:",
    options: [
      "Start writing immediately to maximize time",
      "Read the scenario carefully to understand your role, recipient, and purpose",
      "Choose the most complex vocabulary you know",
      "Write in point form to save time",
    ],
    correct: 1,
    explanation: "The scenario defines everything — who you are, who you're writing to, and what you need to communicate. Misreading it is the most common reason for a lower score: your text may be well-written but off-topic.",
  },
  {
    question: "For the SLE oral interaction, which skill is specifically assessed by the evaluator?",
    options: [
      "Your accent and pronunciation only",
      "Whether you use vocabulary from the SLE word list",
      "Clarity of message, vocabulary range, and ability to interact spontaneously",
      "How many complex grammatical structures you use",
    ],
    correct: 2,
    explanation: "The SLE oral test assesses: clarity of communication, vocabulary range, fluency/speaking rate, grammatical accuracy, and interactive skills. Accent and pronunciation matter less than being understood.",
  },
  {
    question: "You are writing a Level B government memo. The register should be:",
    options: [
      "Informal and conversational — like an email to a friend",
      "Formal and administrative — passive voice, official vocabulary, and structured paragraphs",
      "Technical and scientific — using specialized jargon",
      "Creative and persuasive — using rhetorical devices",
    ],
    correct: 1,
    explanation: "Government memos use formal administrative French — structured opening, clear purpose, passive voice where appropriate ('il a été décidé que'), and precise vocabulary. Informal language is a register error.",
  },
  {
    question: "During the oral role-play task, the evaluator plays a colleague who disagrees with your proposal. The best response is:",
    options: [
      "Stop speaking and wait for them to ask another question",
      "Acknowledge their concern and develop your argument — 'Je comprends votre point de vue, cependant…'",
      "Agree with everything they say to avoid conflict",
      "Speak faster to demonstrate fluency",
    ],
    correct: 1,
    explanation: "Interactive skills are directly assessed in the oral test. Acknowledge the other perspective ('Je comprends que…'), then maintain and develop your position. This shows Level B–C oral interaction — not just answering, but engaging.",
  },
];

export default function SLELesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">
              Unit 1 · Lesson 3
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Writing & Oral Interaction
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The SLE writing test has two parts — editing a document and producing a short text. The oral interaction is a live assessment with a trained evaluator. Both reward clarity and register above perfection.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                The SLE does not expect perfect French. It expects{" "}
                <span className="font-black text-white">functional professional communication</span> — clear, appropriately formal, and accurate enough to work effectively in a bilingual environment.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Writing test structure</p>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>Part A:</strong> Editing — find and correct errors</p>
                <p><strong>Part B:</strong> Production — write a memo, email, or briefing note</p>
                <p className="mt-2 text-[#526173]">Both are timed. Read instructions carefully before writing.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Know what each test component involves.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="SLE writing & oral — formats & criteria" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each term to its definition.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Writing & oral terminology" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border-2 border-[#FEF3C7] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">How to prepare</p>
          <h2 className="mt-2 text-xl font-black">Practical preparation for writing and oral</h2>
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            <div>
              <p className="font-black text-[#0B1F3A]">Writing</p>
              <ul className="mt-2 space-y-1.5 text-sm text-[#526173]">
                {[
                  "Practice writing memos and emails in formal French",
                  "Learn the structure of a government briefing note",
                  "Proofread real French documents to train your eye for errors",
                  "Study common error types: agreement, verb tense, preposition use",
                  "Use a formal opening ('Suite à votre demande…') and closing ('Je demeure à votre disposition…')",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A44C]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-black text-[#0B1F3A]">Oral interaction</p>
              <ul className="mt-2 space-y-1.5 text-sm text-[#526173]">
                {[
                  "Practice speaking on work-related topics out loud — daily",
                  "Simulate role plays: explain a problem, give an update, handle a complaint",
                  "Record yourself and listen back — identify hesitation patterns",
                  "Learn transition phrases for interactive tasks: 'En effet…', 'Tout à fait…', 'Permettez-moi d'expliquer…'",
                  "Accept that some self-correction is normal — it doesn't fail you",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A44C]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Test your knowledge of the SLE writing and oral tests.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Writing & oral quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D97706]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">SLE complete.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Take the Unit 1 test to lock in SLE knowledge before moving on to TEF Canada and immigration.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-1/lesson-2" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/canadian-french-tests/unit-1/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Unit 1 Test →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
