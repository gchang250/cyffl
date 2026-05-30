import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "la déclaration de revenus", back: "tax return — the annual document filed with the government reporting income and claiming credits", subtext: "Je dois remplir ma déclaration de revenus avant le 30 avril. — I need to file my tax return before April 30." },
  { front: "le revenu imposable", back: "taxable income — the amount of income subject to tax after deductions", subtext: "Votre revenu imposable détermine votre taux d'imposition. — Your taxable income determines your tax rate." },
  { front: "le remboursement", back: "refund — money returned by the government when too much tax was withheld", subtext: "J'ai reçu un remboursement de 450 $ cette année. — I received a $450 refund this year." },
  { front: "la cotisation", back: "contribution / assessment — refers to amounts contributed to programs like CPP or EI, or a tax assessment", subtext: "Les cotisations à l'assurance-emploi sont obligatoires. — EI contributions are mandatory." },
  { front: "les crédits d'impôt", back: "tax credits — amounts that reduce the tax you owe (federal and provincial)", subtext: "Le crédit d'impôt pour les frais de scolarité peut réduire votre impôt. — The tuition tax credit can reduce your taxes." },
  { front: "les retenues", back: "withholdings — amounts deducted from your paycheque for taxes, CPP, EI", subtext: "Les retenues apparaissent sur votre feuillet T4. — Withholdings appear on your T4 slip." },
  { front: "le numéro d'assurance sociale (NAS)", back: "Social Insurance Number (SIN) — required on all tax forms; 9-digit federal identifier", subtext: "N'inscrivez votre NAS que sur des documents officiels. — Only put your SIN on official documents." },
  { front: "l'assurance-emploi (AE)", back: "Employment Insurance (EI) — federal program that pays benefits when you lose your job", subtext: "Si vous perdez votre emploi, vous pouvez demander l'assurance-emploi. — If you lose your job, you can apply for EI." },
  { front: "le Régime de pensions du Canada (RPC)", back: "Canada Pension Plan (CPP) — mandatory retirement pension plan for employees", subtext: "Les cotisations au RPC sont retenues directement sur votre salaire. — CPP contributions are deducted directly from your salary." },
  { front: "les prestations", back: "benefits — payments received from government programs (EI, CPP, etc.)", subtext: "Vous recevrez vos prestations d'AE par dépôt direct. — You'll receive your EI benefits by direct deposit." },
];

const pairs = [
  { left: "remboursement", right: "tax refund" },
  { left: "revenu imposable", right: "taxable income" },
  { left: "NAS", right: "Social Insurance Number" },
  { left: "assurance-emploi (AE)", right: "Employment Insurance (EI)" },
  { left: "RPC", right: "Canada Pension Plan (CPP)" },
  { left: "crédits d'impôt", right: "tax credits" },
];

const exercises = [
  {
    before: "La date limite pour soumettre votre",
    after: "de revenus est le 30 avril. (tax return)",
    answer: "déclaration",
    hint: "déclaration de revenus = tax return",
    translation: "The deadline to submit your tax return is April 30.",
  },
  {
    before: "Votre employeur déduit les",
    after: "pour l'impôt, le RPC et l'AE directement de votre salaire. (withholdings)",
    answer: "retenues",
    hint: "les retenues = withholdings (deducted from your paycheque)",
    translation: "Your employer deducts withholdings for tax, CPP, and EI directly from your salary.",
  },
  {
    before: "Si vous êtes mis à pied, vous pouvez demander des prestations d'",
    after: ". (Employment Insurance)",
    answer: "assurance-emploi",
    hint: "assurance-emploi (AE) = Employment Insurance (EI)",
    translation: "If you are laid off, you can apply for Employment Insurance benefits.",
  },
  {
    before: "Votre",
    after: "d'assurance sociale est requis sur tous les formulaires fiscaux. (SIN)",
    answer: "numéro",
    hint: "numéro d'assurance sociale (NAS) = Social Insurance Number (SIN)",
    translation: "Your Social Insurance Number is required on all tax forms.",
  },
  {
    before: "Les",
    after: "d'impôt pour enfants peuvent considérablement réduire votre facture fiscale. (tax credits)",
    answer: "crédits",
    hint: "les crédits d'impôt = tax credits",
    translation: "Child tax credits can significantly reduce your tax bill.",
  },
];

const questions = [
  {
    question: "What is 'Revenu Québec' responsible for?",
    options: [
      "Federal income tax across Canada",
      "Quebec provincial tax returns and the TP-1 form",
      "Employment Insurance benefits",
      "CPP contributions",
    ],
    correct: 1,
    explanation: "Revenu Québec administers Quebec provincial taxes, including the TP-1 provincial tax return and the RL-1 income slip (equivalent to the federal T4). Residents of Quebec file both a federal return (CRA) and a provincial return (Revenu Québec).",
  },
  {
    question: "What does 'remboursement' mean in a tax context?",
    options: [
      "A payment you owe to the government",
      "A tax credit you can claim",
      "A refund from the government when too much tax was withheld",
      "A contribution to a pension plan",
    ],
    correct: 2,
    explanation: "'Remboursement' means refund. When your employer withholds more tax than you owe, the government returns the difference. J'ai reçu un remboursement de 300 $ — I received a $300 refund.",
  },
  {
    question: "In Quebec, which slip is the provincial equivalent of the federal T4?",
    options: ["TP-1", "RL-1", "T1", "NAS"],
    correct: 1,
    explanation: "The RL-1 (Relevé 1) is the Quebec provincial income slip issued by employers — the equivalent of the federal T4. It shows your employment income and amounts withheld for Quebec tax, QPP (Québec Pension Plan), and QPIP.",
  },
  {
    question: "What does 'NAS' stand for in French?",
    options: [
      "Numéro d'accès social",
      "Numéro d'assurance sociale",
      "Numéro annuel de sécurité",
      "Nom et adresse sociale",
    ],
    correct: 1,
    explanation: "NAS stands for 'Numéro d'assurance sociale' — the French equivalent of SIN (Social Insurance Number). This 9-digit number is your federal identifier required on all tax documents, employment forms, and benefit applications.",
  },
];

export default function Unit2Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Unit 2 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Tax Vocabulary</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Understanding your tax return in French — whether it's a federal T1 from the CRA or a Quebec TP-1 from Revenu Québec — requires specific vocabulary. This lesson demystifies the key terms so tax season is less stressful.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Federal vs. Quebec at a glance</p>
            <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-black text-[#2563EB]">Federal (CRA / ARC)</p>
                <p className="mt-0.5 text-xs text-[#526173]">Agence du revenu du Canada</p>
                <ul className="mt-2 space-y-1 text-[#526173]">
                  <li>T4 — income slip</li>
                  <li>T1 — tax return</li>
                  <li>NAS — SIN</li>
                  <li>RPC — CPP</li>
                  <li>AE — EI</li>
                  <li>remboursement — refund</li>
                </ul>
              </div>
              <div>
                <p className="font-black text-[#B91C1C]">Quebec (Revenu Québec)</p>
                <p className="mt-0.5 text-xs text-[#526173]">Provincial taxes only</p>
                <ul className="mt-2 space-y-1 text-[#526173]">
                  <li>RL-1 — provincial income slip</li>
                  <li>TP-1 — provincial return</li>
                  <li>RRQ — QPP (pension)</li>
                  <li>RQAP — QPIP (parental)</li>
                  <li>crédit d'impôt — tax credit</li>
                  <li>cotisation — contribution</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-[#EFF6FF] p-3 text-xs text-[#2563EB]">
              <strong>Note:</strong> Quebec residents file two separate tax returns every year — one federal (CRA) and one provincial (Revenu Québec).
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
          <p className="text-sm font-black text-[#0B1F3A]">Key tax vocabulary</p>
          <table className="mt-3 w-full text-sm">
            <thead>
              <tr className="border-b border-[#E7DAB9]">
                <th className="pb-2 pr-4 text-left font-black text-[#2563EB]">French</th>
                <th className="pb-2 text-left font-black text-[#0B1F3A]">English</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3EDD6]">
              {[
                ["la déclaration de revenus", "tax return"],
                ["le revenu imposable", "taxable income"],
                ["le remboursement", "refund"],
                ["la cotisation", "contribution / assessment"],
                ["les déductions", "deductions"],
                ["les crédits d'impôt", "tax credits"],
                ["l'employeur", "employer"],
                ["l'employé(e)", "employee"],
                ["les retenues", "withholdings"],
                ["le numéro d'assurance sociale (NAS)", "Social Insurance Number (SIN)"],
                ["le régime de retraite", "pension plan"],
                ["l'assurance-emploi (AE)", "Employment Insurance (EI)"],
                ["le Régime de pensions du Canada (RPC)", "Canada Pension Plan (CPP)"],
                ["les prestations", "benefits"],
              ].map(([fr, en]) => (
                <tr key={fr}>
                  <td className="py-1.5 pr-4 font-bold text-[#2563EB]">{fr}</td>
                  <td className="py-1.5 text-[#526173]">{en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Tax vocabulary flashcards" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the tax term to its meaning" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Tax vocabulary in context" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Tax vocabulary quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/canadian-life/unit-2/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">← Previous lesson</Link>
          <Link href="/learn/canadian-life/unit-2/lesson-4" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
