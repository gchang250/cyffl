import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "Veuillez remplir", back: "Please fill in / Please complete", subtext: "Veuillez remplir toutes les cases. — Please fill in all the boxes." },
  { front: "Cochez la case appropriée", back: "Check the appropriate box / Tick the correct box", subtext: "Cochez la case appropriée selon votre situation. — Check the box that matches your situation." },
  { front: "Ci-joint", back: "Enclosed / Attached (used in letters and forms)", subtext: "Veuillez trouver ci-joint les documents requis. — Please find the required documents attached." },
  { front: "À l'usage officiel seulement", back: "For official use only", subtext: "This section appears on most government forms — leave it blank." },
  { front: "Renseignements obligatoires", back: "Required information / mandatory fields", subtext: "Les renseignements obligatoires sont indiqués par un astérisque (*). — Required fields are marked with an asterisk." },
  { front: "Sans objet (S.O.)", back: "Not applicable (N/A)", subtext: "Si la question ne vous concerne pas, inscrivez S.O. — If the question doesn't apply to you, write N/A." },
  { front: "Pièces justificatives", back: "Supporting documents / documentary evidence", subtext: "Joignez les pièces justificatives à votre demande. — Attach supporting documents to your application." },
  { front: "Date d'entrée en vigueur", back: "Effective date / date the document takes effect", subtext: "La date d'entrée en vigueur est le 1er janvier. — The effective date is January 1st." },
  { front: "Numéro de dossier", back: "File number / case number", subtext: "Indiquez votre numéro de dossier dans toute correspondance. — Include your file number in all correspondence." },
  { front: "Accusé de réception", back: "Acknowledgment of receipt / confirmation that something was received", subtext: "Vous recevrez un accusé de réception par courriel. — You will receive an acknowledgment by email." },
];

const pairs = [
  { left: "Ci-joint", right: "Enclosed / attached" },
  { left: "Sans objet (S.O.)", right: "Not applicable (N/A)" },
  { left: "Pièces justificatives", right: "Supporting documents" },
  { left: "Accusé de réception", right: "Acknowledgment of receipt" },
  { left: "À l'usage officiel seulement", right: "For official use only" },
  { left: "Date d'entrée en vigueur", right: "Effective date" },
];

const exercises = [
  {
    before: "Veuillez",
    after: "la case qui correspond à votre situation familiale. (check the box)",
    answer: "cocher",
    hint: "cocher la case = to check / tick the box",
    translation: "Please check the box that matches your family situation.",
  },
  {
    before: "Si cette section ne s'applique pas à vous, écrivez",
    after: "dans la case. (N/A)",
    answer: "S.O.",
    hint: "S.O. = sans objet = N/A (not applicable)",
    translation: "If this section doesn't apply to you, write N/A in the box.",
  },
  {
    before: "Veuillez trouver",
    after: "une copie de mon passeport. (enclosed)",
    answer: "ci-joint",
    hint: "ci-joint = enclosed / attached",
    translation: "Please find enclosed a copy of my passport.",
  },
  {
    before: "Joignez toutes les",
    after: "à votre formulaire de demande. (supporting documents)",
    answer: "pièces justificatives",
    hint: "pièces justificatives = supporting documents",
    translation: "Attach all supporting documents to your application form.",
  },
  {
    before: "Vous recevrez un",
    after: "de réception dans les 5 jours ouvrables. (acknowledgment)",
    answer: "accusé",
    hint: "accusé de réception = acknowledgment of receipt",
    translation: "You will receive an acknowledgment of receipt within 5 business days.",
  },
];

const questions = [
  {
    question: "What does 'S.O.' mean on a Canadian government form?",
    options: [
      "Section officielle",
      "Sans obligation",
      "Sans objet — not applicable",
      "Signé officiellement",
    ],
    correct: 2,
    explanation: "'S.O.' stands for 'sans objet,' which means 'not applicable.' It's the French equivalent of N/A on bilingual government forms. Use it when a question doesn't apply to your situation.",
  },
  {
    question: "What are 'pièces justificatives'?",
    options: [
      "Official stamps from a notary",
      "Supporting documents such as proof of identity or residence",
      "Completed form pages",
      "Government-issued identification numbers",
    ],
    correct: 1,
    explanation: "'Pièces justificatives' means supporting documents — any documentation you attach to support your application, such as a birth certificate, pay stub, or proof of address.",
  },
  {
    question: "What does 'À l'usage officiel seulement' mean?",
    options: [
      "For the applicant to fill out only",
      "For official use only — leave it blank",
      "Required to be signed by an official",
      "Official language section",
    ],
    correct: 1,
    explanation: "'À l'usage officiel seulement' means 'for official use only.' This section appears on most government forms and should be left blank by the applicant — it's completed by the government office.",
  },
  {
    question: "In a formal French document, 'ci-joint' means:",
    options: [
      "See below",
      "Attached / enclosed",
      "Confirmed and signed",
      "Required by law",
    ],
    correct: 1,
    explanation: "'Ci-joint' means 'enclosed' or 'attached.' It's used in formal correspondence: 'Veuillez trouver ci-joint...' = 'Please find enclosed...' You'll see it in both government forms and professional emails.",
  },
  {
    question: "On a government form, 'Renseignements obligatoires' means:",
    options: [
      "Optional information",
      "Information for official use only",
      "Required information — must be completed",
      "Information about your rights",
    ],
    correct: 2,
    explanation: "'Renseignements obligatoires' = required information. These fields must be completed for your application to be processed. Leaving obligatory fields blank typically results in the form being returned or rejected.",
  },
  {
    question: "You receive a letter confirming receipt of your application. In French, this acknowledgment is called:",
    options: [
      "une décision favorable",
      "une confirmation de dossier",
      "un accusé de réception",
      "une mise en demeure",
    ],
    correct: 2,
    explanation: "'Un accusé de réception' is an acknowledgment of receipt — a formal confirmation that your application or correspondence has been received. It is not a decision on your application; it just confirms it was received.",
  },
  {
    question: "A form has a field labelled 'Date d'entrée en vigueur.' What should you write there?",
    options: [
      "The date you filled out the form",
      "The date you were born",
      "The effective date when the provision, benefit, or change takes effect",
      "The deadline for submitting the form",
    ],
    correct: 2,
    explanation: "'Date d'entrée en vigueur' = effective date — the date from which something becomes valid or active. For example, an insurance policy has an 'entrée en vigueur' date when coverage begins.",
  },
  {
    question: "How would you say 'Please fill in this form in capital letters' in French?",
    options: [
      "Veuillez remplir ce formulaire en lettres minuscules.",
      "Veuillez remplir ce formulaire en lettres majuscules.",
      "Veuillez compléter ce formulaire en français seulement.",
      "Remplissez ce formulaire avec votre prénom seulement.",
    ],
    correct: 1,
    explanation: "'En lettres majuscules' = in capital letters. 'En lettres minuscules' = in lowercase. Government forms almost always specify 'en lettres majuscules' or 'en caractères d'imprimerie' (in print) to ensure legibility.",
  },
];

export default function Unit2Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Unit 2 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Government Forms</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Canadian government forms are bilingual by law — knowing how to read the French side helps you understand your rights, obligations, and options. This lesson covers the key vocabulary that appears on nearly every government document.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Common form field vocabulary</p>
            <div className="mt-3 space-y-1.5 text-sm">
              {[
                ["Veuillez remplir", "Please fill in"],
                ["Cochez la case appropriée", "Check the appropriate box"],
                ["Ci-joint", "Enclosed / attached"],
                ["Signé à", "Signed at"],
                ["En foi de quoi", "In witness whereof"],
                ["À l'usage officiel seulement", "For official use only"],
                ["Renseignements obligatoires", "Required information"],
                ["Sans objet (S.O.)", "Not applicable (N/A)"],
                ["Pièces justificatives", "Supporting documents"],
                ["Date d'entrée en vigueur", "Effective date"],
                ["Numéro de dossier", "File number"],
                ["Accusé de réception", "Acknowledgment of receipt"],
              ].map(([fr, en]) => (
                <div key={fr} className="flex items-start justify-between gap-2 border-b border-[#F3EDD6] py-1">
                  <span className="font-bold text-[#2563EB]">{fr}</span>
                  <span className="text-right text-[#526173]">{en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <p className="text-xs font-black uppercase tracking-widest text-[#526173]">Sample form excerpts</p>

          {/* Form excerpt 1 */}
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-6">
            <p className="mb-3 text-xs font-black text-[#2563EB] uppercase tracking-widest">Renouvellement de passeport — Passport Renewal</p>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-black text-[#0B1F3A]">Nom de famille / Surname</p>
                  <div className="mt-1 h-8 rounded border border-[#E7DAB9] bg-[#FFFDF7]"></div>
                </div>
                <div>
                  <p className="font-black text-[#0B1F3A]">Prénom(s) / Given name(s)</p>
                  <div className="mt-1 h-8 rounded border border-[#E7DAB9] bg-[#FFFDF7]"></div>
                </div>
              </div>
              <div>
                <p className="font-black text-[#0B1F3A]">Numéro de dossier / File number</p>
                <p className="text-[#526173]">À l'usage officiel seulement / For official use only</p>
                <div className="mt-1 h-8 rounded border border-dashed border-[#E7DAB9] bg-[#F9F9F9]"></div>
              </div>
              <div>
                <p className="font-black text-[#0B1F3A]">Pièces justificatives requises / Required supporting documents</p>
                <ul className="mt-1 list-inside list-disc text-[#526173]">
                  <li>Passeport actuel / Current passport</li>
                  <li>Photo conforme aux normes / Compliant photo</li>
                  <li>Preuve de citoyenneté / Proof of citizenship</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form excerpt 2 */}
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-6">
            <p className="mb-3 text-xs font-black text-[#2563EB] uppercase tracking-widest">Permis de conduire — Driver's Licence</p>
            <div className="space-y-3 text-sm">
              <p className="text-[#0B1F3A]"><strong>Renseignements obligatoires</strong> (Required information — marked with *)</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-black text-[#0B1F3A]">*Date de naissance / Date of birth</p>
                  <div className="mt-1 h-8 rounded border border-[#E7DAB9] bg-[#FFFDF7]"></div>
                </div>
                <div>
                  <p className="font-black text-[#0B1F3A]">*Numéro d'assurance sociale / SIN</p>
                  <div className="mt-1 h-8 rounded border border-[#E7DAB9] bg-[#FFFDF7]"></div>
                </div>
              </div>
              <div>
                <p className="font-black text-[#0B1F3A]">Cochez la case appropriée / Check the appropriate box</p>
                <div className="mt-2 flex gap-6 text-[#526173]">
                  <label className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-[#E7DAB9]"></span> Nouveau / New</label>
                  <label className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-[#E7DAB9]"></span> Renouvellement / Renewal</label>
                  <label className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-[#E7DAB9]"></span> Remplacement / Replacement</label>
                </div>
              </div>
              <div>
                <p className="font-black text-[#0B1F3A]">Date d'entrée en vigueur / Effective date</p>
                <div className="mt-1 h-8 w-40 rounded border border-[#E7DAB9] bg-[#FFFDF7]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Government form vocabulary" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the form term to its meaning" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the form language" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Government forms quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/canadian-life/unit-2/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">← Previous lesson</Link>
          <Link href="/learn/canadian-life/unit-2/lesson-3" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
