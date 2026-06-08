import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "la mise en œuvre", back: "implementation", subtext: "One of the most common government nouns. 'La mise en œuvre du projet a été retardée.' = Implementation of the project was delayed." },
  { front: "le cadre", back: "framework / context", subtext: "'Dans le cadre de cette politique…' = Within the framework of this policy… A word that signals structure and scope." },
  { front: "la politique", back: "policy (not politics)", subtext: "'La politique en matière de ressources humaines' = the human resources policy. Context determines meaning — 'la politique' can also mean politics." },
  { front: "la directive", back: "directive / instruction", subtext: "'Conformément à la directive du Conseil du Trésor…' = In accordance with the Treasury Board directive… Used for official instructions that must be followed." },
  { front: "les intervenants", back: "stakeholders", subtext: "'Les intervenants concernés ont été consultés.' = The relevant stakeholders were consulted. Almost every government document mentions stakeholders." },
  { front: "la reddition de comptes", back: "accountability", subtext: "A key concept in federal governance. 'La reddition de comptes est essentielle à la bonne gestion.' = Accountability is essential to good management." },
  { front: "le mandat", back: "mandate / term of office", subtext: "'Dans le cadre de notre mandat, nous sommes chargés de…' = Within our mandate, we are responsible for… Every department has a mandate." },
  { front: "la conformité", back: "compliance", subtext: "'Assurer la conformité aux exigences réglementaires.' = Ensure compliance with regulatory requirements. Opposite: la non-conformité." },
  { front: "les lignes directrices", back: "guidelines", subtext: "'Les lignes directrices précisent les modalités d'application.' = The guidelines specify the terms of application. Less binding than a directive." },
  { front: "l'approbation (f)", back: "approval", subtext: "'Le projet est en attente d'approbation.' = The project is pending approval. Related: approuver (to approve), approuvé (approved)." },
  { front: "la surveillance", back: "monitoring / oversight", subtext: "'Assurer la surveillance des activités du programme.' = Ensure monitoring of programme activities. Not security surveillance — programmatic oversight." },
  { front: "la prestation de services", back: "service delivery", subtext: "'Améliorer la prestation de services aux citoyens.' = Improve service delivery to citizens. A central goal in most federal programme descriptions." },
  { front: "l'ébauche (f)", back: "draft (document)", subtext: "'Cette ébauche sera révisée avant distribution.' = This draft will be revised before distribution. Final = définitif or final." },
  { front: "la consultation", back: "consultation", subtext: "'Une consultation publique a été menée.' = A public consultation was conducted. Federal decisions are often preceded by consultations." },
  { front: "le procès-verbal", back: "minutes (of a meeting)", subtext: "'Le procès-verbal de la réunion du 5 mai…' = The minutes of the May 5 meeting… Abbreviated as PV. Records decisions and action items." },
];

const matchPairs = [
  { left: "la mise en œuvre", right: "implementation" },
  { left: "le cadre", right: "framework / context" },
  { left: "la directive", right: "directive / instruction" },
  { left: "les intervenants", right: "stakeholders" },
  { left: "la reddition de comptes", right: "accountability" },
  { left: "la conformité", right: "compliance" },
  { left: "les lignes directrices", right: "guidelines" },
  { left: "l'ébauche", right: "draft document" },
];

const quiz = [
  {
    question: "'La _____ du projet a été retardée en raison de contraintes budgétaires.' Which word completes this sentence?",
    options: ["consultation", "mise en œuvre", "conformité", "ébauche"],
    correct: 1,
    explanation: "'La mise en œuvre' (implementation) is the correct word — the implementation of the project was delayed due to budget constraints. This is one of the most common nouns in federal documents.",
  },
  {
    question: "'Les _____ concernés ont été consultés avant la prise de décision.' What does the missing word mean?",
    options: ["lignes directrices", "procès-verbaux", "intervenants", "mandats"],
    correct: 2,
    explanation: "'Les intervenants concernés' = the relevant stakeholders. Almost every federal decision-making document mentions stakeholder consultation. Know this word — it appears constantly.",
  },
  {
    question: "A government document says: 'Conformément à la _____ du Conseil du Trésor, les ministères doivent…' Which word fits?",
    options: ["politique", "directive", "consultation", "surveillance"],
    correct: 1,
    explanation: "'Conformément à la directive' = In accordance with the directive. A 'directive' is a binding instruction. 'Lignes directrices' would be non-binding guidelines. Context matters.",
  },
  {
    question: "What is the difference between 'la politique' and 'la directive'?",
    options: [
      "They are synonyms — use either interchangeably",
      "'La politique' sets overall orientation; 'la directive' is a specific binding instruction on how to act",
      "'La politique' is regional; 'la directive' is national",
      "'La politique' is written; 'la directive' is always verbal",
    ],
    correct: 1,
    explanation: "'La politique' sets the overall goals and orientation (e.g. 'la politique sur les langues officielles'). 'La directive' gives specific, binding instructions on how to carry out the policy. The SLE reading test often requires you to distinguish these.",
  },
  {
    question: "A briefing note says: 'Ce document est une _____ et non la version finale.' What does this tell you?",
    options: [
      "The document is already approved",
      "The document is a draft — not yet final",
      "The document is classified",
      "The document is a minutes record",
    ],
    correct: 1,
    explanation: "'Une ébauche' = a draft. The sentence means 'This document is a draft and not the final version.' Recognizing document status words like ébauche, brouillon, définitif, and final is essential for reading government texts.",
  },
  {
    question: "A memo reads: 'Le procès-verbal de la réunion du 12 mai indique que…' What does 'procès-verbal' refer to?",
    options: [
      "A verbal reprimand given to an employee",
      "The minutes of a meeting — a written record of decisions and discussions",
      "A legal complaint filed by an employee",
      "A verbal instruction given by a manager",
    ],
    correct: 1,
    explanation: "Le procès-verbal (PV) = meeting minutes — the official written record of a meeting's decisions and action items. 'Rédiger le procès-verbal' = to write up the minutes. Government meetings always produce a PV, which is a legally binding record of decisions.",
  },
  {
    question: "'La surveillance du programme incombe au directeur général.' What does 'incombe à' mean?",
    options: [
      "Is forbidden to",
      "Is delegated away from",
      "Falls to / is the responsibility of",
      "Is shared with",
    ],
    correct: 2,
    explanation: "'Incomber à' = to fall to / to be the responsibility of. 'Cette tâche incombe au ministère' = This task falls to the ministry. It's a formal verb for assigning responsibility. Know it — it appears in mandates, job descriptions, and accountability documents.",
  },
  {
    question: "What is 'la reddition de comptes' and why is it a key concept in government French?",
    options: [
      "Counting government money during audits",
      "A reduction in government spending",
      "Accountability — the obligation to explain and justify decisions and results to those who granted authority",
      "The process of returning money after a budget overrun",
    ],
    correct: 2,
    explanation: "'La reddition de comptes' = accountability. It's one of the foundational principles of public administration — officials must account for how they used authority and resources. It appears in virtually every government strategic plan, annual report, and mandate letter.",
  },
];

export default function SLELesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">
              Unit 1 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Government Vocabulary
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The SLE reading test uses real federal documents. The same words appear constantly across memos, briefing notes, and reports. Learn these and you will recognize them under pressure.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Why this matters</p>
              <p className="mt-2 leading-7 text-white/80">
                You can&apos;t answer comprehension questions about a text you can&apos;t read. Government French uses a specific vocabulary — these 15 words will appear in almost every document you encounter.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">High-frequency nouns</p>
              <div className="mt-2 grid grid-cols-2 gap-1 text-sm">
                <p>la mise en œuvre</p>
                <p>le cadre</p>
                <p>la directive</p>
                <p>les intervenants</p>
                <p>la conformité</p>
                <p>la surveillance</p>
                <p>la reddition de comptes</p>
                <p>les lignes directrices</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Learn the vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click to flip. Read the subtext — it shows you how each word is used in a real government sentence.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Government French — 15 essential nouns" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each French word to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Government vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Use the vocabulary in context</h2>
          <p className="mt-1 text-[#526173]">Each question puts these words into real government sentences. The SLE reading test works exactly like this.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Government vocabulary quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <h2 className="mt-3 text-3xl font-black">Government vocabulary built.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: the grammar structures that make government French hard to read — and how to handle them.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Back to course
            </Link>
            <Link href="/learn/canadian-french-tests/unit-1/lesson-2" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
