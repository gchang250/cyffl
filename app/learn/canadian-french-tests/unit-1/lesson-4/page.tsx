import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

// SLE Reading: 60 MCQ (50 scored + 10 pilot), 90 minutes.
// Texts: emails, memos, bulletins, reports, policies.
// Question types: main idea, explicit detail, vocabulary in context,
// implied meaning, document structure, relationships between ideas.

const flashcards = [
  { front: "l'idée principale", back: "main idea of the text or section", subtext: "The reading test always has a main-idea question per text. Ask: what is the WHOLE text about? The answer will be the most general option that covers all the sub-points — not a specific detail." },
  { front: "le renvoi (cross-reference)", back: "a reference to another section within the document", subtext: "Level C texts use document cross-references: 'Voir section 4.2' or 'Tel qu'indiqué à l'annexe B'. The question may ask what is found in the referenced section. Skim to find it." },
  { front: "la nuance", back: "nuance / qualifier that changes meaning", subtext: "Level C tests implied meaning and nuance. Words like 'seulement', 'rarement', 'à condition que', 'sous réserve de' change the scope of a claim. A statement ignoring these qualifiers is Faux." },
  { front: "le sens dans le contexte", back: "meaning in context (vocabulary question)", subtext: "A word from the text is underlined or bolded, and you choose its meaning in that context. Don't use the general dictionary definition — read the surrounding sentence. Government words often have specific bureaucratic senses." },
  { front: "l'inférence", back: "inference — what the text implies but doesn't state", subtext: "Level C question. The text doesn't say it directly — you must reason from what IS stated. The correct answer is always supported by evidence in the text, not by general knowledge." },
  { front: "la structure du document", back: "document structure question", subtext: "Where in a memo, report, or policy would you find [specific information]? The test may ask which section contains something, or what the purpose of a particular paragraph is." },
  { front: "le destinataire du document", back: "intended audience of the document", subtext: "Government texts are always addressed to someone: a specific department, the public, decision-makers. The question may ask who the document is addressed to — find the header (DESTINATAIRE) or the salutation." },
  { front: "l'objet du mémo", back: "subject line of the memo", subtext: "The OBJET line tells you what the memo is about before you read anything. Read it first. If a question asks about the purpose of a document, the OBJET is usually the fastest path to the answer." },
  { front: "la formulation négative", back: "negative phrasing — changes the meaning of a statement", subtext: "Test statements sometimes ignore negations. 'Le gouvernement n'a pas adopté cette mesure' is Faux if the statement says 'The government adopted this measure.' Read negations (ne…pas, ne…jamais, ne…que) carefully." },
  { front: "la restriction / l'exception", back: "restriction or exception within a policy or rule", subtext: "Government texts are full of conditions: 'à l'exception de', 'sauf dans les cas où', 'sous réserve de'. Level C questions test whether you noticed the exception. The answer is often narrower than it appears." },
];

const matchPairs = [
  { left: "l'idée principale", right: "what the whole text is about" },
  { left: "le sens dans le contexte", right: "word meaning from surrounding text" },
  { left: "l'inférence", right: "what the text implies but doesn't state" },
  { left: "la nuance", right: "qualifier that changes meaning" },
  { left: "la formulation négative", right: "negation that reverses a claim" },
  { left: "la restriction / l'exception", right: "condition or exception within a rule" },
];

const quiz = [
  {
    question: "A memo reads: 'La présente politique s'applique à l'ensemble des employés, à l'exception des agents contractuels dont le contrat a été signé avant le 1er janvier 2023.' A test statement says: 'All employees are subject to this policy.' This statement is:",
    options: [
      "True — the memo says all employees",
      "False — contractual agents hired before Jan 1, 2023 are excluded",
      "True — the exception doesn't matter because it's a small group",
      "Cannot be determined from the text",
    ],
    correct: 1,
    explanation: "The restriction 'à l'exception des agents contractuels...' creates an exception. The statement 'all employees' is too broad — it ignores the exception. Government reading tests at Level C are full of these: the correct answer honours every condition in the text.",
  },
  {
    question: "A vocabulary question asks: the word 'vigueur' in 'La politique entre en vigueur le 1er avril' most likely means:",
    options: [
      "strength / energy",
      "force / effect (as in 'in force')",
      "rigour / strictness",
      "priority",
    ],
    correct: 1,
    explanation: "'Entrer en vigueur' is a fixed phrase meaning 'to come into force / take effect'. In the context of policies and laws, 'en vigueur' always means 'in force / in effect'. Government texts use it constantly — know this collocation.",
  },
  {
    question: "A briefing note has three sections: Contexte, Analyse, Recommandations. A question asks where to find the department's proposed course of action. You look in:",
    options: ["Contexte", "Analyse", "Recommandations", "The memo header"],
    correct: 2,
    explanation: "Document structure questions. The Recommandations section proposes what to do. Contexte gives background; Analyse examines the situation; Recommandations states the proposed action. Knowing standard government document structure saves you time — go directly to the right section.",
  },
  {
    question: "A report says: 'Les économies réalisées ne seraient significatives que si les mesures sont adoptées dans leur intégralité.' A test statement says: 'Partial implementation will produce meaningful savings.' This is:",
    options: [
      "True — any savings are meaningful",
      "False — the report says savings are only significant if ALL measures are adopted",
      "True — partial savings are still savings",
      "Cannot be determined from the text",
    ],
    correct: 1,
    explanation: "'Ne seraient significatives que si... dans leur intégralité' = would only be significant if... in their entirety. 'Que' here is a restrictor (ne…que = only). The statement removes this condition and overstates the claim — classic Level C reading trap.",
  },
  {
    question: "A policy document states: 'Les demandes doivent être soumises au plus tard 30 jours avant la date d'entrée en fonction prévue.' A test statement says: 'Requests can be submitted at any time before the start date.' This is:",
    options: [
      "True — any time before = before the start date",
      "False — the deadline is specifically 30 days before, not any time before",
      "True — 30 days is just a suggestion",
      "Partially true — it depends on the type of request",
    ],
    correct: 1,
    explanation: "'Au plus tard 30 jours avant' = at least 30 days before (no later than 30 days prior). 'At any time before the start date' ignores the 30-day requirement. The test exploits the reading trap of 'any time before' vs 'specifically 30 days before'. Always check time restrictions.",
  },
];

export default function SLELesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">
              Unit 1 · Lesson 4
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Reading Comprehension — Government Texts
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The SLE reading test has 50 scored questions in 90 minutes — about 1 min 45 sec per question. Every answer is in the text. The traps are restrictions, negations, and qualifiers that students miss by reading too fast.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">The three question levels</p>
              <div className="mt-2 space-y-2 text-sm text-white/80">
                <p><span className="font-black text-white">Level A:</span> Explicit, concrete. Answer clearly stated in the text. Find it.</p>
                <p><span className="font-black text-white">Level B:</span> Longer texts, complex vocabulary. Still explicit but requires scanning and comprehension of full paragraphs.</p>
                <p><span className="font-black text-white">Level C:</span> Nuance, inference, document structure. The answer requires understanding what the text implies or excludes.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Reading approach</p>
              <div className="mt-2 space-y-1 text-sm text-[#526173]">
                <p>1. Read the question before the text</p>
                <p>2. Locate the relevant section — don&apos;t read everything</p>
                <p>3. Check every qualifier and negation</p>
                <p>4. Eliminate options that add or remove a condition</p>
                <p>5. If stuck, the narrower, more conditional answer is usually right at Level C</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Question types and traps</h2>
          <p className="mt-1 text-[#526173]">Flip each card to understand the question type and how to approach it.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="SLE Reading — question types & traps" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each reading term to what it means.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Reading comprehension vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Practice with real-style questions</h2>
          <p className="mt-1 text-[#526173]">Each question below is based on a short government text excerpt. These replicate the structure of real SLE reading questions.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="SLE Reading quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-[#FEF3C7] border border-[#FDE68A] p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">Official practice resource</p>
          <h2 className="mt-2 text-xl font-black">PSC practice tests</h2>
          <p className="mt-2 text-[#526173] text-sm leading-6">
            The Public Service Commission provides official SLE practice tests for reading and writing. These are the closest thing to the real test available for free.
          </p>
          <a
            href="https://www.canada.ca/en/public-service-commission/services/second-language-testing-public-service/self-assessment-tests.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-[#D97706] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5"
          >
PSC self-assessment tests (official) ↗
          </a>
        </section>

        <section className="mt-8 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D97706]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Reading strategies ready.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: the oral interaction test — what it looks like and the phrases that work.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-1/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Previous lesson</Link>
            <Link href="/learn/canadian-french-tests/unit-1/lesson-5" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
