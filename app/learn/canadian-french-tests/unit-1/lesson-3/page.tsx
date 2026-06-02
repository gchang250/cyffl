import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

// The SLE Written Expression test is 65 multiple-choice questions (90 min).
// Two question types: (1) fill-in-the-blank and (2) error identification.
// It does NOT require producing a memo or email from scratch.
// Texts used: emails, memos, bulletins, reports — government register throughout.

const flashcards = [
  { front: "complétez la phrase", back: "complete the sentence (fill-in-the-blank)", subtext: "The most common SLE writing question type. A sentence or short paragraph has one blank, and you choose the best word or phrase from four options. Grammar, register, and vocabulary are all tested." },
  { front: "choisissez la version correcte", back: "choose the correct version (error identification)", subtext: "The second SLE writing question type. Four versions of a sentence or paragraph are given; you choose the one that contains no errors. Errors include: agreement, tense, preposition, register, and word choice." },
  { front: "l'accord en genre et en nombre", back: "agreement in gender and number", subtext: "One of the most tested error types. 'La décision final' (wrong) → 'La décision finale' (correct). Adjective agreement with noun gender/number is a frequent trap." },
  { front: "la concordance des temps", back: "sequence of tenses / tense agreement", subtext: "Using the correct tense relative to the main clause. 'Il a dit qu'il viendra' (wrong in formal writing) → 'Il a dit qu'il viendrait' (reported speech requires conditional). Tense errors are heavily tested at Level C." },
  { front: "le mauvais registre", back: "wrong register", subtext: "Using an informal word in a formal government document. 'Le boss a confirmé...' (wrong) → 'Le directeur a confirmé...' Mixing registers is a classic Level B trap." },
  { front: "la préposition incorrecte", back: "wrong preposition", subtext: "'Conformément avec la politique' (wrong) → 'Conformément à la politique' (correct). Preposition errors are common: conformément à, par rapport à, en vue de, à l'égard de." },
  { front: "le pléonasme", back: "redundancy / pleonasm", subtext: "'une courte bref résumé' (wrong — bref already means short) → 'un bref résumé'. Government writing values precision; redundancy is an error." },
  { front: "le participe passé", back: "past participle (agreement)", subtext: "'Les décisions que le ministre a pris' (wrong — pris must agree with 'les décisions', feminine plural preceding COD) → 'Les décisions que le ministre a prises'. This agreement rule is heavily tested." },
  { front: "le choix lexical", back: "word choice / lexical error", subtext: "Choosing the wrong word for the context. 'Cette mesure est effectuée' vs 'Cette mesure est prise' — the verb matters. Government French uses specific collocations: prendre une décision, adopter une politique, mettre en œuvre des mesures." },
  { front: "la structure de la phrase", back: "sentence structure", subtext: "'C'est une question dont il faut tenir compte de.' (wrong — dont already includes 'de': tenir compte DE → dont) → 'C'est une question dont il faut tenir compte.' Double prepositions are a classic trap." },
];

const matchPairs = [
  { left: "complétez la phrase", right: "fill-in-the-blank question type" },
  { left: "choisissez la version correcte", right: "error identification question type" },
  { left: "l'accord en genre et en nombre", right: "agreement — gender and number" },
  { left: "la concordance des temps", right: "tense agreement / sequence" },
  { left: "le mauvais registre", right: "wrong register" },
  { left: "le participe passé", right: "past participle agreement" },
];

const quiz = [
  {
    question: "Fill in the blank: 'Suite à notre réunion du 12 mars, je vous transmets _____ le rapport final.' Which option is correct?",
    options: ["par attaché", "ci-joint", "en attachement avec", "ensemble joint"],
    correct: 1,
    explanation: "'Ci-joint' is the standard government term for 'attached'. It is invariable before a noun without article: 'je vous transmets ci-joint le rapport.' 'Par attaché' does not exist; 'en attachement avec' is not standard government French.",
  },
  {
    question: "Error identification: Which sentence is correctly written?",
    options: [
      "A. Les recommandations que le comité a formulé seront examinées.",
      "B. Les recommandations que le comité a formulées seront examinées.",
      "C. Les recommandations que le comité a formulés seront examinées.",
      "D. Les recommandations qu'a formulées le comité seront examinées.",
    ],
    correct: 1,
    explanation: "B is correct: 'les recommandations' is the COD preceding 'a formulées' → the past participle must agree (feminine plural: formulées). A has no agreement; C uses masculine plural. D is grammatically awkward and non-standard.",
  },
  {
    question: "Fill in the blank: 'Cette mesure est _____ à la directive du Conseil du Trésor.' Which preposition is correct?",
    options: ["conforme", "conformément", "selon", "d'accord avec"],
    correct: 0,
    explanation: "'Conforme à' (adjective + preposition) = in compliance with / in accordance with. 'Conformément à' is an adverb and cannot be used here as a predicate adjective after 'est'. 'Selon' means 'according to' and changes the meaning. 'd'accord avec' = agreeing with (person), not document compliance.",
  },
  {
    question: "Error identification: 'C'est un problème dont il faut en tenir compte.' What is wrong?",
    options: [
      "Wrong tense — should use the subjunctive",
      "Double preposition — 'dont' already includes 'de', so 'en' is redundant",
      "Wrong subject — 'il' should be 'on'",
      "Wrong verb — 'tenir' should be 'prendre'",
    ],
    correct: 1,
    explanation: "'Tenir compte DE quelque chose' → relative pronoun 'dont' = de + lequel. So 'dont il faut tenir compte' is complete. Adding 'en' (also replacing 'de + thing') creates a double preposition: 'dont il faut en tenir compte' is wrong. Correct: 'C'est un problème dont il faut tenir compte.'",
  },
  {
    question: "Fill in the blank: 'La politique _____ a été adoptée en 2022 demeure en vigueur.' Which phrase correctly identifies the subject?",
    options: [
      "qu'il s'agit",
      "dont il est question",
      "de laquelle il parle",
      "à laquelle on réfère",
    ],
    correct: 1,
    explanation: "'La politique dont il est question' = the policy in question / the policy referred to. 'Dont' replaces 'de + noun' and 'il est question de quelque chose' uses 'de'. This is a standard government phrase — 'la politique dont il est question demeure en vigueur' = the policy in question remains in force.",
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
              Written Expression — What the Test Actually Is
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The SLE writing test is <strong>entirely multiple choice</strong> — 65 questions in 90 minutes. You are not asked to write a memo from scratch. You choose the best word to complete a sentence, or identify which version of a sentence has no errors.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">The two question types</p>
              <div className="mt-2 space-y-3 text-sm">
                <div>
                  <p className="font-black text-white">Type 1: Fill-in-the-blank</p>
                  <p className="mt-1 text-white/70">A sentence has one gap. Choose the best word or phrase from four options. Tests vocabulary, collocations, and prepositions.</p>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <p className="font-black text-white">Type 2: Error identification</p>
                  <p className="mt-1 text-white/70">Four versions of a sentence are given. Only one is correct. Tests agreement, tense, register, and sentence structure.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Error types most commonly tested</p>
              <div className="mt-2 space-y-1 text-sm text-[#526173]">
                <p>• Past participle agreement (COD before avoir)</p>
                <p>• Adjective agreement (gender / number)</p>
                <p>• Wrong preposition (conformément à, etc.)</p>
                <p>• Register mismatch (informal word in formal text)</p>
                <p>• Double prepositions (dont + en)</p>
                <p>• Tense sequence in reported speech</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary and error types</h2>
          <p className="mt-1 text-[#526173]">Flip each card to understand the error type and how to spot it.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="SLE Written Expression — question types & error categories" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each term to its definition.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Written expression vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Practice questions</h2>
          <p className="mt-1 text-[#526173]">These replicate the two real question types you will face on test day.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Written expression — fill-in-blank & error ID" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D97706]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Written Expression understood.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: the SLE reading test — comprehending government documents under time pressure.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-1/lesson-2" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/canadian-french-tests/unit-1/lesson-4" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
