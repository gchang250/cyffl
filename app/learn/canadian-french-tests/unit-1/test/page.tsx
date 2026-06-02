import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "'Le budget _____ approuvé par le ministre lors de la réunion.' Which passive construction is correct?",
    options: ["est approuvé", "a été approuvé", "approuve", "a approuvé"],
    correct: 1,
    explanation: "'A été approuvé' is the passé composé passive: être (a été) + past participle (approuvé, agreeing with 'le budget', masculine). Passive voice is used constantly in government French to describe decisions and actions.",
  },
  {
    question: "A memo reads: 'Les mesures _____ nous faisons référence seront mises en œuvre dès le 1er juillet.' Which relative pronoun fits?",
    options: ["que", "qui", "auxquelles", "dont"],
    correct: 2,
    explanation: "'Auxquelles' = à + lesquelles. 'Faire référence à quelque chose' requires 'à', so the relative pronoun must carry 'à'. 'Les mesures auxquelles nous faisons référence' = the measures we are referring to.",
  },
  {
    question: "Which sentence uses 'la mise en œuvre' correctly?",
    options: [
      "'La mise en œuvre a été retardée en raison de contraintes budgétaires.'",
      "'Nous avons mis en œuvre la procédure de la mise en œuvre.'",
      "'La mise en œuvre est un verbe important.'",
      "'Il faut mettre en la mise en œuvre immédiatement.'",
    ],
    correct: 0,
    explanation: "'La mise en œuvre a été retardée' = Implementation was delayed. 'Mise en œuvre' is a noun (implementation) — it replaces the verb 'mettre en œuvre'. Use it as a subject or object, not alongside the verb itself.",
  },
  {
    question: "Which opening line is correct for a formal government memo?",
    options: [
      "'Bonjour Marie, je voulais juste te tenir au courant…'",
      "'Suite à la réunion du 3 juin, je vous informe des développements suivants.'",
      "'Hey team, quick update:'",
      "'Chère collègue, j'espère que tu vas bien!'",
    ],
    correct: 1,
    explanation: "Government memos use formal register throughout: 'vous', no informal openings, clear statement of purpose. 'Suite à la réunion du [date]' is a standard and correct opening formula.",
  },
  {
    question: "'Il _____ de noter que le délai a été prolongé de deux semaines.' Which impersonal construction is correct?",
    options: ["convient", "est à", "importe", "faut"],
    correct: 0,
    explanation: "'Il convient de noter que' = It should be noted that. All four options can work in some contexts, but 'il convient de + infinitif' is the most common formal impersonal construction in this pattern.",
  },
  {
    question: "A briefing note recommendation reads: 'Nous recommandons que le sous-ministre _____ la proposition.' Which form is correct?",
    options: ["approuvera", "a approuvé", "approuve", "approuver"],
    correct: 2,
    explanation: "'Recommander que' triggers the subjunctive. 'Approuve' (present subjunctive) is correct — not the future 'approuvera' or the infinitive 'approuver'. This rule also applies to 'suggérer que', 'proposer que', 'demander que'.",
  },
  {
    question: "Your email is ending. Which closing is appropriate for a formal government email?",
    options: [
      "'Bonne journée et merci !'",
      "'À bientôt !'",
      "'Je demeure à votre disposition pour tout renseignement complémentaire. Veuillez agréer mes salutations distinguées.'",
      "'Ciao, [name]'",
    ],
    correct: 2,
    explanation: "Formal government correspondence closes with 'Je demeure à votre disposition pour tout renseignement complémentaire' (I remain available for any additional information) followed by 'Veuillez agréer mes salutations distinguées.'",
  },
  {
    question: "'_____ ce qui précède, il est recommandé de procéder à une révision complète du programme.' Which phrase fits?",
    options: ["En dépit de", "À la lumière de", "Bien que", "Il convient de"],
    correct: 1,
    explanation: "'À la lumière de ce qui précède' = In light of the foregoing. This phrase introduces the conclusion of a briefing note or report, drawing on the analysis that came before it.",
  },
  {
    question: "The sentence 'Les intervenants concernés ont été consultés' means:",
    options: [
      "The relevant stakeholders will be consulted",
      "The relevant stakeholders are being consulted",
      "The relevant stakeholders were consulted",
      "The relevant stakeholders consult the policy",
    ],
    correct: 2,
    explanation: "'Ont été consultés' = were consulted (passé composé passif). 'Les intervenants' (stakeholders) is one of the most common nouns in federal documents — know it. The passive voice tells you what happened to the stakeholders (they were consulted).",
  },
  {
    question: "Your memo needs to say 'Please find attached the report requested.' Which sentence is correct?",
    options: [
      "'J'ai attaché le rapport demandé.'",
      "'Voici le rapport demandé en attachement.'",
      "'Veuillez trouver ci-joint le rapport demandé.'",
      "'Je vous envoie le rapport que vous avez demandé en pièce.'",
    ],
    correct: 2,
    explanation: "'Veuillez trouver ci-joint [le document]' is the standard government formula for attachments. 'Ci-joint' is the formal term for 'attached'. 'En pièce jointe' is also correct but 'ci-joint' is more common in formal documents.",
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
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">Government French</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions testing government vocabulary, passive voice, relative pronouns, impersonal constructions, and formal writing formulas.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 1 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 2?</p>
          <p className="mt-2 text-[#526173]">Unit 2 covers the French you need for TEF Canada — topic vocabulary, opinion phrases, and formal writing for the immigration test.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-1/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/canadian-french-tests/unit-2/lesson-1" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Start Unit 2 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
