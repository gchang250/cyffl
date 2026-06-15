import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "What is the 'carte-soleil' in Quebec?",
    options: [
      "A federal travel document",
      "A transit card for the Montreal metro",
      "Quebec's provincial health insurance card (RAMQ)",
      "A provincial driver's licence",
    ],
    correct: 2,
    explanation: "The 'carte-soleil' is the informal name for Quebec's RAMQ health insurance card, named for its yellow colour. It's issued by the Régie de l'assurance maladie du Québec and gives access to provincially covered health services.",
  },
  {
    question: "What does 'S.O.' mean on a Canadian government form?",
    options: [
      "Signé officiellement",
      "Sans objet: not applicable (N/A)",
      "Section obligatoire",
      "Soumis officiellement",
    ],
    correct: 1,
    explanation: "'S.O.' stands for 'sans objet': the French equivalent of N/A (not applicable). Use it when a question on a government form doesn't apply to your situation.",
  },
  {
    question: "What does 'CLSC' stand for, and what is it?",
    options: [
      "Centre légal de soins cliniques: a private specialist clinic",
      "Centre local de services communautaires: a Quebec community health centre",
      "Commission de liaison des services de santé canadiens",
      "Clinique locale de soins chirurgicaux",
    ],
    correct: 1,
    explanation: "CLSC stands for Centre local de services communautaires. These are Quebec community health centres that provide primary care, mental health support, social services, and more: often without requiring an appointment for basic needs.",
  },
  {
    question: "Which document is the Quebec provincial equivalent of the federal T4?",
    options: ["TP-1", "RL-1", "NAS", "T1"],
    correct: 1,
    explanation: "The RL-1 (Relevé 1) is the provincial income slip issued by Quebec employers, equivalent to the federal T4. It shows provincial income and amounts withheld for Quebec income tax, QPP, and QPIP.",
  },
  {
    question: "What does 'pièces justificatives' mean?",
    options: [
      "Justice documents from a court",
      "Supporting documents attached to an application",
      "Justified expenses for a tax deduction",
      "Official stamps from a notary",
    ],
    correct: 1,
    explanation: "'Pièces justificatives' are supporting documents: proof you attach to an application such as a birth certificate, proof of address, or recent paycheque. You'll see this on virtually every government application form.",
  },
  {
    question: "What is 'l'assurance-emploi' (AE)?",
    options: [
      "Private health insurance",
      "Quebec health insurance (RAMQ)",
      "Employment Insurance: a federal benefit when you lose your job",
      "A mandatory pension plan",
    ],
    correct: 2,
    explanation: "'L'assurance-emploi' (AE) is Employment Insurance (EI): a federal program that provides temporary income support when you lose your job through no fault of your own. Contributions are deducted from every Canadian paycheque.",
  },
  {
    question: "In a French formal letter, where does 'Objet:' appear?",
    options: [
      "After the closing formula",
      "Before the salutation, after the recipient's address",
      "Inside the body of the letter",
      "At the very top, before the sender's details",
    ],
    correct: 1,
    explanation: "The 'Objet:' (subject) line appears after the recipient's address and before the salutation (Madame, Monsieur,). It's a required element of French formal correspondence and should be brief and specific.",
  },
  {
    question: "What does 'le remboursement' mean in a tax context?",
    options: [
      "A payment you owe the government",
      "A tax deduction",
      "A refund from the government",
      "A contribution to EI",
    ],
    correct: 2,
    explanation: "'Remboursement' means refund. When your employer withholds more tax than you actually owe for the year, the government refunds the difference after you file your tax return.",
  },
  {
    question: "What is the correct formal closing for a French letter to an institution?",
    options: [
      "Cordialement,",
      "À bientôt!",
      "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
      "Merci et bonne journée,",
    ],
    correct: 2,
    explanation: "'Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées' is the standard full formal closing in French: equivalent to 'Yours faithfully.' It's used when writing to someone you don't know.",
  },
  {
    question: "What does 'accusé de réception' mean?",
    options: [
      "A court document",
      "Acknowledgment of receipt: confirmation that something was received",
      "A form to fill out at reception",
      "An accusation in legal proceedings",
    ],
    correct: 1,
    explanation: "'Accusé de réception' means acknowledgment of receipt: a confirmation that a document or application was received. You'll often see: 'Vous recevrez un accusé de réception par courriel.': You will receive an acknowledgment by email.",
  },
];

export default function Unit2TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life/unit-2/lesson-4" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← Back to Lesson 4
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Unit 2 · Test</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Government & Official Documents</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              10 questions covering all four lessons of Unit 2: healthcare in French, government forms, tax vocabulary, and writing formal requests.
            </p>
          </div>

          <div className="rounded-2xl border border-[#EFF6FF] bg-[#EFF6FF] p-5">
            <p className="text-sm font-black text-[#2563EB]">Unit 2 covers</p>
            <ul className="mt-3 space-y-2 text-sm text-[#0B1F3A]">
              {[
                "Healthcare in French",
                "Government Forms",
                "Tax Vocabulary",
                "Writing Formal Requests",
              ].map((item, i) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D62828] text-xs font-black text-white">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 2 test" />
        </div>

        <div className="mt-12 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-lg font-black">Ready for Unit 3?</p>
          <p className="mt-2 text-[#526173]">Unit 3 covers the bilingual workplace — reading job postings, writing a French CV and cover letter, communicating at work, and handling a French-language job interview.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/canadian-life/unit-2/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/canadian-life/unit-3/lesson-1" className="rounded-full bg-[#16A34A] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#15803D]">Start Unit 3 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
