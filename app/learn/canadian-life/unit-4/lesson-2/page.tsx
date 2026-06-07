import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  {
    front: "la demande d'admission",
    back: "Application for admission",
    subtext: "Soumettre une demande d'admission = to submit an application. Done via the university portal or via SRAM/BCI in Quebec.",
  },
  {
    front: "le dossier de candidature",
    back: "Application file / dossier",
    subtext: "The complete package: transcript, letter of intent, references. Must be submitted before the date limite.",
  },
  {
    front: "les conditions d'admission",
    back: "Admission requirements",
    subtext: "Lists GPA minimums, prerequisite courses, language tests, and other criteria you must meet.",
  },
  {
    front: "la cote R",
    back: "Quebec's R-score — used for competitive university admissions",
    subtext: "Calculated from your cégep grades adjusted for class performance. Higher = more competitive programs.",
  },
  {
    front: "le relevé de notes officiel",
    back: "Official transcript",
    subtext: "Must be sent directly from your institution, often sealed or via official portal. Not the same as an unofficial copy.",
  },
  {
    front: "la lettre de motivation",
    back: "Letter of intent / statement of purpose",
    subtext: "Explains why you want to study in this program, your goals, and your fit. More personal than a cover letter.",
  },
  {
    front: "les lettres de recommandation",
    back: "Letters of recommendation",
    subtext: "Written by professors or supervisors. Required by many graduate programs and competitive undergrad programs.",
  },
  {
    front: "le programme contingent",
    back: "Competitive / limited-enrolment program",
    subtext: "A program where the number of spots is restricted. Examples: médecine, droit, architecture.",
  },
  {
    front: "la date limite",
    back: "Application deadline",
    subtext: "Missing the date limite typically means waiting a full year. Always check the university website directly.",
  },
  {
    front: "l'accusé de réception",
    back: "Acknowledgment of receipt",
    subtext: "Confirmation that the university received your file. Does not mean you have been accepted.",
  },
  {
    front: "la lettre d'acceptation",
    back: "Acceptance letter (offer of admission)",
    subtext: "You must accept or decline the offer by a specific date, usually by paying a deposit.",
  },
  {
    front: "l'inscription",
    back: "Registration / enrolment",
    subtext: "After accepting your offer, you complete l'inscription to officially enrol and select courses.",
  },
];

const pairs = [
  { left: "la demande d'admission", right: "application for admission" },
  { left: "la cote R", right: "Quebec's R-score" },
  { left: "la lettre de motivation", right: "letter of intent" },
  { left: "le programme contingent", right: "competitive / limited-enrolment program" },
  { left: "l'accusé de réception", right: "acknowledgment of receipt" },
  { left: "l'inscription", right: "registration / enrolment" },
];

const exercises = [
  {
    before: "Vous devez soumettre votre",
    after: "d'admission avant le 1er février pour les programmes contingentés.",
    answer: "demande",
    hint: "Demande d'admission = application for admission. Soumettre = to submit.",
    translation: "You must submit your application for admission before February 1 for competitive programs.",
  },
  {
    before: "Mon",
    after: "de notes officiel a été envoyé directement par le cégep à l'université.",
    answer: "relevé",
    hint: "Relevé de notes = transcript. The official version is sent by your institution.",
    translation: "My official transcript was sent directly by the cégep to the university.",
  },
  {
    before: "La médecine est un programme",
    after: "à l'Université de Montréal, avec un nombre limité de places.",
    answer: "contingent",
    hint: "Contingent = competitive / limited-enrolment. These programs have restricted spots.",
    translation: "Medicine is a competitive program at the Université de Montréal, with a limited number of spots.",
  },
  {
    before: "J'ai reçu un",
    after: "de réception confirmant que mon dossier est complet.",
    answer: "accusé",
    hint: "Accusé de réception = acknowledgment of receipt. Not the same as an acceptance letter.",
    translation: "I received an acknowledgment of receipt confirming that my file is complete.",
  },
  {
    before: "Après avoir accepté l'offre d'admission, j'ai complété mon",
    after: "pour la session d'automne.",
    answer: "inscription",
    hint: "Inscription = registration / enrolment. The step after accepting your offer.",
    translation: "After accepting the offer of admission, I completed my registration for the fall semester.",
  },
];

const questions = [
  {
    question: "What is the 'cote R' used for in Quebec?",
    options: [
      "Measuring student financial need",
      "Ranking cégep students for competitive university admissions",
      "Assessing French language proficiency",
      "Calculating student loan eligibility",
    ],
    correct: 1,
    explanation: "The cote R (cote de rendement au collégial) is a grade metric calculated from a cégep student's grades relative to their peers. It is used to rank applicants to competitive university programs in Quebec.",
  },
  {
    question: "What is the difference between 'l'accusé de réception' and 'la lettre d'acceptation'?",
    options: [
      "They are the same document.",
      "L'accusé de réception confirms your file was received; la lettre d'acceptation is the actual offer of admission.",
      "L'accusé de réception is the acceptance; la lettre d'acceptation is a scholarship notification.",
      "L'accusé de réception is for graduate programs only.",
    ],
    correct: 1,
    explanation: "L'accusé de réception simply confirms the university received your file — it is not an offer of admission. La lettre d'acceptation is the actual offer you accept or decline.",
  },
  {
    question: "What does 'programme contingent' mean?",
    options: [
      "A program offered in both French and English",
      "A program with unlimited spots available",
      "A competitive program with a limited number of enrolment spots",
      "A program that requires a placement test",
    ],
    correct: 2,
    explanation: "'Programme contingent' refers to a program where spots are limited and entry is competitive. Examples in Quebec include medicine, law, nursing, and architecture.",
  },
  {
    question: "What does 'l'inscription' refer to in the admissions process?",
    options: [
      "Writing your letter of motivation",
      "Submitting your initial application",
      "Registration / officially enrolling after accepting your offer",
      "Receiving your acceptance letter",
    ],
    correct: 2,
    explanation: "'L'inscription' is the registration or enrolment step — it happens after you accept your offer of admission. It typically involves selecting courses and paying fees.",
  },
  {
    question: "What is a 'lettre de motivation' and how is it different from a resume in the academic context?",
    options: [
      "It lists your grades — same as a transcript",
      "It is a personal statement / letter of intent explaining why you want to study the program",
      "It is a reference letter from a professor",
      "It is a financial aid application letter",
    ],
    correct: 1,
    explanation: "La lettre de motivation (also called 'lettre de présentation' or 'lettre d'intention') is a personal statement explaining your motivation, goals, and fit for the program. Unlike a CV (which lists what you've done), the letter explains why you want this specific program and what you bring to it.",
  },
  {
    question: "What does 'la cote R' measure in Quebec's cégep-to-university admissions?",
    options: [
      "Your high school graduation result",
      "Your performance on a standardized national test",
      "Your academic ranking relative to your cohort — used for university admissions in Quebec",
      "The cost (coût) of tuition at your cégep",
    ],
    correct: 2,
    explanation: "La cote R (cote de rendement au collégial) is a GPA adjusted for the strength of your cégep cohort — roughly equivalent to a class rank-adjusted GPA. It's the primary admissions criterion for competitive programs at Quebec universities.",
  },
  {
    question: "What is 'SRAM' in the Quebec university admissions process?",
    options: [
      "A scholarship fund for francophone students",
      "A centralized admissions service managing applications to most Montreal-area cégeps",
      "A standardized French language test for university admission",
      "A federal bursary for science students",
    ],
    correct: 1,
    explanation: "SRAM (Service régional d'admission du Montréal métropolitain) manages applications to most cégeps in the Montreal area. Similar services exist for Quebec City (SRASL) and other regions. These centralized portals simplify multi-school applications.",
  },
  {
    question: "You receive a letter saying 'Votre demande est en attente d'évaluation.' What does this mean?",
    options: [
      "Your application has been accepted",
      "Your application has been rejected",
      "Your application is under review — a decision has not yet been made",
      "You need to resubmit your application",
    ],
    correct: 2,
    explanation: "'En attente d'évaluation' = pending evaluation / under review. No decision has been made yet. You may need to provide additional documents or simply wait for the evaluation process to be completed.",
  },
];

export default function Unit4Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Unit 4 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">University Applications</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Applying to a French-language university or a bilingual Canadian university requires specific vocabulary and phrasing. The admissions process in Quebec is particularly structured, with the cote R playing a key role for competitive programs.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Understanding each step — from soumettre votre demande (submitting your application) to completing l'inscription (registration) — will help you navigate the process with confidence and in the right language.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Application vocabulary</p>
            <div className="mt-3 space-y-2 text-sm">
              {[
                ["la demande d'admission", "application for admission"],
                ["le dossier de candidature", "application file / dossier"],
                ["les conditions d'admission", "admission requirements"],
                ["la cote R", "Quebec's R-score"],
                ["le relevé de notes officiel", "official transcript"],
                ["la lettre de motivation", "letter of intent"],
                ["les lettres de recommandation", "letters of recommendation"],
                ["le programme contingent", "competitive / limited-enrolment program"],
                ["la date limite", "deadline"],
                ["l'accusé de réception", "acknowledgment of receipt"],
                ["la lettre d'acceptation", "acceptance letter"],
                ["l'inscription", "registration / enrolment"],
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
          <p className="text-lg font-black">University application portal — sample excerpt</p>
          <p className="mt-1 text-sm text-[#CBD5E1]">Fully in French — Quebec university context</p>
          <div className="mt-4 rounded-xl bg-white/10 p-5 text-sm leading-7">
            <p className="font-black text-white">Bienvenue dans votre espace de demande d'admission</p>
            <p className="mt-2 text-[#E2E8F0]">
              Pour compléter votre dossier de candidature, vous devez téléverser les documents suivants avant la <span className="font-bold text-white">date limite du 1er mars</span> : votre relevé de notes officiel du cégep, une lettre de motivation (maximum deux pages) et deux lettres de recommandation. Les programmes contingentés, comme le droit et la médecine, requièrent également la divulgation de votre cote R. Un accusé de réception vous sera transmis par courriel dans les cinq jours ouvrables suivant la soumission de votre dossier.
            </p>
          </div>
          <p className="mt-3 text-xs text-[#94A3B8]">Translation: Welcome to your application space. To complete your application file, you must upload the following documents before the March 1 deadline: your official cégep transcript, a letter of intent (maximum two pages), and two letters of recommendation. Competitive programs such as law and medicine also require disclosure of your R-score. An acknowledgment of receipt will be sent to you by email within five business days of submitting your file.</p>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="University application vocabulary" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the French term to its English meaning" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the application sentences" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="University applications quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/canadian-life/unit-4/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">← Lesson 1</Link>
          <Link href="/learn/canadian-life/unit-4/lesson-3" className="rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#6D28D9]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
