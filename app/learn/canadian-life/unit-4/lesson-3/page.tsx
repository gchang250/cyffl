import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  {
    front: "la bourse",
    back: "Scholarship / bursary / grant",
    subtext: "Bourse d'excellence = merit scholarship. Bourse de besoin = need-based bursary. The word covers both.",
  },
  {
    front: "l'aide financière aux études (AFE)",
    back: "Quebec student financial assistance program",
    subtext: "Administered by the Quebec government. Provides a mix of grants (non-remboursable) and loans (prêts) based on financial need.",
  },
  {
    front: "le prêt étudiant",
    back: "Student loan",
    subtext: "Must be repaid after graduation. Part of the AFE package in Quebec; also available federally (Prêt canadien aux étudiants).",
  },
  {
    front: "la subvention",
    back: "Grant / subsidy: does not need to be repaid",
    subtext: "Unlike a loan, a subvention is non-remboursable. Often awarded by governments or foundations.",
  },
  {
    front: "les critères d'admissibilité",
    back: "Eligibility criteria",
    subtext: "Conditions you must meet to apply: minimum GPA, field of study, province of residence, financial need, etc.",
  },
  {
    front: "le revenu familial",
    back: "Family income: used to assess financial need",
    subtext: "Many need-based programs calculate your grant amount based on le revenu familial brut (gross family income).",
  },
  {
    front: "en situation de besoin financier",
    back: "In financial need",
    subtext: "Standard phrase used in scholarship criteria to indicate the program targets students facing economic hardship.",
  },
  {
    front: "déposer une demande",
    back: "To submit / file an application",
    subtext: "Vous pouvez déposer une demande de bourse en ligne.: You can submit a scholarship application online.",
  },
  {
    front: "les pièces justificatives",
    back: "Supporting documents",
    subtext: "Proof documents required with your application: tax slips, transcripts, reference letters, proof of enrolment.",
  },
  {
    front: "le comité de sélection",
    back: "Selection committee",
    subtext: "The panel that reviews applications and awards scholarships. Often asks for a statement of intent.",
  },
  {
    front: "le montant de la bourse",
    back: "Scholarship amount",
    subtext: "Le montant de la bourse est de 5 000 $ par année.: The scholarship amount is $5,000 per year.",
  },
  {
    front: "renouvelable / non renouvelable",
    back: "Renewable / non-renewable",
    subtext: "A renouvelable scholarship can be received again if criteria are maintained (e.g., minimum GPA). Non renouvelable is one-time only.",
  },
];

const pairs = [
  { left: "la bourse", right: "scholarship / bursary / grant" },
  { left: "le prêt étudiant", right: "student loan" },
  { left: "la subvention", right: "grant (non-repayable)" },
  { left: "les pièces justificatives", right: "supporting documents" },
  { left: "renouvelable", right: "renewable (can be received again)" },
  { left: "déposer une demande", right: "to submit an application" },
];

const exercises = [
  {
    before: "Pour être admissible à cette bourse, vous devez répondre aux",
    after: "d'admissibilité, notamment maintenir une moyenne de 3,5/4,3.",
    answer: "critères",
    hint: "Critères d'admissibilité = eligibility criteria.",
    translation: "To be eligible for this scholarship, you must meet the eligibility criteria, including maintaining a GPA of 3.5/4.3.",
  },
  {
    before: "L'aide financière aux",
    after: "du Québec (AFE) offre à la fois des prêts et des subventions selon le revenu familial.",
    answer: "études",
    hint: "Aide financière aux études = student financial assistance.",
    translation: "Quebec's student financial assistance (AFE) offers both loans and grants based on family income.",
  },
  {
    before: "Vous devez joindre toutes les",
    after: "justificatives, dont votre relevé de notes et votre preuve d'inscription.",
    answer: "pièces",
    hint: "Pièces justificatives = supporting documents.",
    translation: "You must include all supporting documents, including your transcript and proof of enrolment.",
  },
  {
    before: "Cette bourse est",
    after: "pendant trois ans, à condition de maintenir une moyenne minimale de B.",
    answer: "renouvelable",
    hint: "Renouvelable = renewable: can be received again each year if conditions are met.",
    translation: "This scholarship is renewable for three years, provided you maintain a minimum average of B.",
  },
  {
    before: "Le",
    after: "de la bourse est de 4 000 $ par année universitaire.",
    answer: "montant",
    hint: "Montant = amount. 'Le montant de la bourse' = the scholarship amount.",
    translation: "The scholarship amount is $4,000 per academic year.",
  },
];

const questions = [
  {
    question: "What is the AFE in Quebec?",
    options: [
      "A French proficiency test required for university admission",
      "The Quebec government's student financial assistance program",
      "A merit scholarship for cégep graduates",
      "A federal scholarship for bilingual students",
    ],
    correct: 1,
    explanation: "The AFE (Aide financière aux études) is Quebec's provincial student financial assistance program. It provides a combination of grants and loans based on financial need.",
  },
  {
    question: "What is the difference between a 'bourse' and a 'prêt étudiant'?",
    options: [
      "A bourse must be repaid; a prêt étudiant does not.",
      "A bourse is for graduate students only; a prêt étudiant is for undergraduates.",
      "A bourse is a scholarship/grant (typically non-repayable); a prêt étudiant is a loan that must be repaid.",
      "They are the same thing in Quebec.",
    ],
    correct: 2,
    explanation: "A 'bourse' is a scholarship, bursary, or grant: money that generally does not need to be repaid. A 'prêt étudiant' is a student loan that must be repaid after graduation.",
  },
  {
    question: "What does 'renouvelable' mean for a scholarship?",
    options: [
      "The scholarship is one-time only.",
      "The scholarship can be received again in subsequent years if conditions are met.",
      "The scholarship amount increases each year.",
      "The scholarship requires an annual interview.",
    ],
    correct: 1,
    explanation: "A 'renouvelable' scholarship can be received again in subsequent years, typically subject to conditions like maintaining a minimum GPA. 'Non renouvelable' means it is awarded once only.",
  },
  {
    question: "What are 'pièces justificatives' in a scholarship application?",
    options: [
      "Justification for your choice of program",
      "The names of your selection committee members",
      "Supporting documents (transcripts, proof of enrolment, tax slips, etc.)",
      "Your published academic work",
    ],
    correct: 2,
    explanation: "'Pièces justificatives' are the supporting documents required with your application: such as transcripts, proof of enrolment, income statements, or reference letters.",
  },
  {
    question: "What does 'bourses d'excellence' mean and how do they typically differ from 'bourses de besoins'?",
    options: [
      "They are identical: both are merit-based scholarships",
      "'Bourses d'excellence' are awarded for academic merit; 'bourses de besoins' are awarded based on financial need",
      "'Bourses d'excellence' are only for graduate students; 'bourses de besoins' are only for undergraduates",
      "'Bourses de besoins' require a higher GPA than 'bourses d'excellence'",
    ],
    correct: 1,
    explanation: "'Bourses d'excellence' = merit-based scholarships, awarded for high academic performance. 'Bourses de besoins' (or 'bourses d'aide financière') = need-based awards, based on financial situation. Many scholarships combine both criteria: 'bourses mixtes' require both good grades and demonstrated financial need.",
  },
  {
    question: "What is the AFE (Aide financière aux études) in Quebec?",
    options: [
      "A private scholarship foundation",
      "The Quebec government program providing loans and bursaries to full-time students",
      "A federal program for first-generation university students",
      "A work-study program at Quebec universities",
    ],
    correct: 1,
    explanation: "The AFE (Aide financière aux études) is Quebec's provincial financial aid program. It provides a mix of loans (prêts) and bursaries (bourses) to eligible full-time students based on financial need. Students apply annually through the AFE portal on the Ministère de l'Éducation website.",
  },
  {
    question: "What does 'renouvelable' mean for a scholarship, and what condition is usually attached?",
    options: [
      "The scholarship can be transferred to another student",
      "The scholarship is paid in one lump sum",
      "The scholarship can be received again in subsequent years, usually conditional on maintaining a minimum GPA",
      "The scholarship covers renewable energy programs only",
    ],
    correct: 2,
    explanation: "'Renouvelable' = renewable: the scholarship can be awarded again the following year(s), typically subject to maintaining a minimum average (e.g., 3.0/4.3 or 80%). 'Non renouvelable' means it is awarded once only. Always check if your scholarship is renewable when applying.",
  },
  {
    question: "What is a 'lettre de référence' and when is it typically required?",
    options: [
      "A letter proving you are enrolled in a Canadian institution",
      "A letter from a professor, employer, or supervisor recommending you for an award or program",
      "A letter confirming your financial need",
      "A government letter confirming your immigration status",
    ],
    correct: 1,
    explanation: "Une lettre de référence = a reference / recommendation letter. It is written by a professor, employer, or mentor attesting to your abilities and character. Required for competitive scholarships (like the FRQSC or Vanier), graduate school applications, and many merit-based awards.",
  },
];

export default function Unit4Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Unit 4 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Scholarships & Financial Aid</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Quebec and other provinces offer extensive scholarship and financial aid programs in French. Whether you are applying to the provincial AFE, a university foundation scholarship, or a federal program, the vocabulary is consistent: and knowing it is the first step to accessing the money that's available.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Many students leave scholarships on the table simply because they don't know the application process exists. This lesson gives you the vocabulary and the roadmap.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Key scholarship and aid vocabulary</p>
            <div className="mt-3 space-y-2 text-sm">
              {[
                ["la bourse", "scholarship / bursary / grant"],
                ["l'aide financière aux études (AFE)", "student financial assistance (Quebec)"],
                ["le prêt étudiant", "student loan"],
                ["la subvention", "grant / subsidy (non-repayable)"],
                ["les critères d'admissibilité", "eligibility criteria"],
                ["le revenu familial", "family income"],
                ["en situation de besoin financier", "in financial need"],
                ["déposer une demande", "to submit an application"],
                ["les pièces justificatives", "supporting documents"],
                ["le comité de sélection", "selection committee"],
                ["le montant de la bourse", "scholarship amount"],
                ["renouvelable / non renouvelable", "renewable / non-renewable"],
              ].map(([fr, en]) => (
                <div key={fr} className="flex items-start justify-between gap-3 border-b border-[#F0EDD8] pb-2 last:border-0 last:pb-0">
                  <span className="font-bold text-[#0B1F3A]">{fr}</span>
                  <span className="text-right text-[#526173]">{en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Where to look for scholarships in French Canada</p>
          <p className="mt-1 text-sm text-[#CBD5E1]">Key sources — always check deadlines directly on official sites</p>
          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            {[
              {
                name: "Gouvernement du Québec: AFE",
                detail: "Need-based grants and loans for Quebec residents. Apply annually at afe.gouv.qc.ca.",
              },
              {
                name: "Programmes fédéraux (PAFVAC, BCET)",
                detail: "Federal bursaries for students in financial need, including the Canada Student Grant program.",
              },
              {
                name: "Bureaux d'aide financière universitaires",
                detail: "Each French-language university has its own financial aid office (bureau d'aide financière) with institution-specific scholarships.",
              },
              {
                name: "Fondations privées",
                detail: "Ex: Fondation du Barreau du Québec (law students), Fondation Desjardins, Fondation Lucie et André Chagnon, and many others.",
              },
            ].map(({ name, detail }) => (
              <div key={name} className="rounded-xl bg-white/10 p-4">
                <p className="font-bold">{name}</p>
                <p className="mt-1 text-sm text-[#CBD5E1]">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Scholarship and financial aid vocabulary" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the French term to its English meaning" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the scholarship sentences" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Scholarships and financial aid quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/canadian-life/unit-4/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">← Lesson 2</Link>
          <Link href="/learn/canadian-life/unit-4/lesson-4" className="rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#6D28D9]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
