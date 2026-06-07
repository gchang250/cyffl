import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  {
    front: "Opening a cover letter",
    back: "Madame, Monsieur, je vous soumets ma candidature pour le poste de...",
    subtext: "I am submitting my application for the position of... — formal and standard.",
  },
  {
    front: "Highlighting experience",
    back: "Fort(e) de X années d'expérience en...",
    subtext: "Drawing on X years of experience in... — opens the body of the letter strongly.",
  },
  {
    front: "Stating motivation",
    back: "Ce poste m'intéresse particulièrement car...",
    subtext: "This position particularly interests me because... — personalise with specifics.",
  },
  {
    front: "Claiming skills",
    back: "Je maîtrise / Je possède de solides compétences en...",
    subtext: "I am proficient in / I have strong skills in... — use 'maîtrise' for software, languages.",
  },
  {
    front: "Stating bilingualism",
    back: "Je suis parfaitement bilingue français-anglais.",
    subtext: "I am fully bilingual in French and English. — direct and confident.",
  },
  {
    front: "Stating availability",
    back: "Je suis disponible dès le [date] pour...",
    subtext: "I am available from [date] for... — e.g., 'dès le 1er septembre pour débuter ce rôle'.",
  },
  {
    front: "Closing a cover letter",
    back: "Dans l'attente de vous rencontrer, je vous prie d'agréer...",
    subtext: "Awaiting the pleasure of meeting you, I ask you to accept... — classic formal close.",
  },
  {
    front: "Education on a CV",
    back: "Baccalauréat en [domaine], Université de [nom], [année]",
    subtext: "Bachelor's in [field], University of [name], [year] — reverse chronological order.",
  },
  {
    front: "Work experience — leading duties",
    back: "Chargé(e) de... / Responsable de... / Assuré(e) la gestion de...",
    subtext: "Responsible for... / Managed... — strong action phrases for bullet points.",
  },
  {
    front: "Volunteering on a CV",
    back: "Bénévole auprès de... / Membre actif(ve) de...",
    subtext: "Volunteer with... / Active member of... — shows community engagement.",
  },
  {
    front: "References on a CV",
    back: "Références disponibles sur demande.",
    subtext: "References available on request. — standard last line of a French CV.",
  },
  {
    front: "Professional summary opener",
    back: "Professionnel(le) dynamique avec une expérience confirmée en...",
    subtext: "Dynamic professional with proven experience in... — strong summary opener.",
  },
];

const pairs = [
  { left: "Opening a cover letter", right: "Madame, Monsieur, je vous soumets..." },
  { left: "Highlighting experience", right: "Fort(e) de X années d'expérience en..." },
  { left: "Stating motivation", right: "Ce poste m'intéresse particulièrement car..." },
  { left: "Stating bilingualism", right: "Je suis parfaitement bilingue français-anglais." },
  { left: "Closing a cover letter", right: "Dans l'attente de vous rencontrer..." },
  { left: "Work experience duty", right: "Chargé(e) de... / Responsable de..." },
];

const exercises = [
  {
    before: "Madame, Monsieur, je vous",
    after: "ma candidature pour le poste de gestionnaire de projet.",
    answer: "soumets",
    hint: "Soumettre — to submit. Je soumets = I submit.",
    translation: "I am submitting my application for the position of project manager.",
  },
  {
    before: "Fort(e) de cinq années d'",
    after: "en ressources humaines, je suis en mesure de contribuer immédiatement.",
    answer: "expérience",
    hint: "Expérience — experience (feminine noun in French).",
    translation: "Drawing on five years of experience in human resources, I am able to contribute immediately.",
  },
  {
    before: "Je",
    after: "parfaitement bilingue français-anglais, tant à l'oral qu'à l'écrit.",
    answer: "suis",
    hint: "Je suis — I am (être, first person singular).",
    translation: "I am fully bilingual in French and English, both spoken and written.",
  },
  {
    before: "Dans l'attente de vous",
    after: ", je vous prie d'agréer mes salutations distinguées.",
    answer: "rencontrer",
    hint: "Rencontrer — to meet. 'Dans l'attente de vous rencontrer' = awaiting the pleasure of meeting you.",
    translation: "Awaiting the pleasure of meeting you, I ask you to accept my distinguished greetings.",
  },
  {
    before: "Références",
    after: "sur demande.",
    answer: "disponibles",
    hint: "Disponibles — available. The standard closing line of a French CV.",
    translation: "References available on request.",
  },
];

const questions = [
  {
    question: "What is the correct order of sections on a French CV?",
    options: [
      "Références, Formation, Expérience professionnelle, Coordonnées",
      "Coordonnées, Profil professionnel, Expérience professionnelle, Formation",
      "Compétences, Coordonnées, Expérience professionnelle, Formation",
      "Formation, Coordonnées, Expérience professionnelle, Compétences",
    ],
    correct: 1,
    explanation: "A French CV typically opens with Coordonnées (contact info), then Profil professionnel, Expérience professionnelle (reverse chronological), Formation, Compétences, and Bénévolat.",
  },
  {
    question: "How do you open a formal French cover letter?",
    options: [
      "Bonjour, je veux ce travail.",
      "Cher Directeur,",
      "Madame, Monsieur, je vous soumets ma candidature pour le poste de...",
      "À qui de droit,",
    ],
    correct: 2,
    explanation: "'Madame, Monsieur' is the standard formal salutation when you don't know the recipient's gender. 'Je vous soumets ma candidature' is the standard opening phrase.",
  },
  {
    question: "What does 'Fort(e) de X années d'expérience en...' convey?",
    options: [
      "I have been unemployed for X years.",
      "Drawing on X years of experience in... — confident statement of experience.",
      "I need X more years of experience.",
      "I studied for X years.",
    ],
    correct: 1,
    explanation: "'Fort(e) de' means 'drawing on' or 'backed by'. It's used to introduce your experience confidently at the start of a cover letter paragraph.",
  },
  {
    question: "Which phrase is used for work experience bullet points on a French CV?",
    options: [
      "J'aime faire...",
      "Je voulais...",
      "Chargé(e) de... / Responsable de...",
      "C'est mon travail de...",
    ],
    correct: 2,
    explanation: "'Chargé(e) de' (responsible for) and 'Responsable de' (in charge of) are the standard action phrases for CV bullet points. They are equivalent to English phrases like 'Managed' or 'Led'.",
  },
  {
    question: "What is the standard French closing formula for a formal job application letter?",
    options: [
      "Cordialement,",
      "À bientôt,",
      "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
      "Merci beaucoup,",
    ],
    correct: 2,
    explanation: "'Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.' is the required closing for a formal French job application letter. 'Cordialement' is used in professional emails but is too casual for a formal application letter.",
  },
  {
    question: "On a French CV, how should you order your work experience?",
    options: [
      "Chronological — oldest job first",
      "Reverse chronological — most recent job first",
      "Alphabetical by employer name",
      "By salary, highest to lowest",
    ],
    correct: 1,
    explanation: "French CVs use reverse chronological order — most recent position first. This is the standard in both France and Canada. Employers want to see your most relevant recent experience immediately, not have to scroll to the bottom.",
  },
  {
    question: "A cover letter paragraph reads: 'Je suis convaincu(e) que mes compétences en gestion de projets et mon expérience bilingue répondent pleinement aux exigences de ce poste.' What is the purpose of this sentence?",
    options: [
      "Closing the letter with a thank you",
      "Introducing yourself for the first time",
      "Connecting your skills explicitly to the job requirements",
      "Requesting a higher salary",
    ],
    correct: 2,
    explanation: "This is the 'value proposition' sentence — explicitly showing why your profile matches the job. 'Répondre aux exigences' = to meet the requirements. Strong cover letters don't just list experience; they link it directly to what the employer needs.",
  },
  {
    question: "When the hiring manager's name is not given in a French job posting, how do you address the cover letter?",
    options: [
      "Monsieur le Directeur,",
      "À qui de droit,",
      "Madame, Monsieur,",
      "Cher Recruteur,",
    ],
    correct: 2,
    explanation: "'Madame, Monsieur,' is the standard opening when you don't know the recipient's name or gender. It's neutral and professional. If the posting names the hiring manager, address them specifically: 'Madame [Nom],' or 'Monsieur [Nom],'",
  },
];

export default function Unit3Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Unit 3 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">The French CV & Cover Letter</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              A French CV (curriculum vitae) and lettre de motivation follow specific conventions. Sections appear in a standard order, opening and closing phrases are formulaic by design, and action verbs on a CV take a different form than in English.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              In Canada, French employers expect a CV that mirrors French conventions — not a translated English résumé. Getting the tone, structure, and key phrases right signals that you understand the professional culture.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">French CV sections — in order</p>
            <ol className="mt-3 space-y-2 text-sm">
              {[
                ["1", "Coordonnées", "Contact info: name, phone, email, LinkedIn, city"],
                ["2", "Profil professionnel / Résumé", "Professional summary (3–5 lines)"],
                ["3", "Expérience professionnelle", "Work experience — reverse chronological"],
                ["4", "Formation / Études", "Education — most recent first"],
                ["5", "Compétences", "Skills — langues, informatique, autres"],
                ["6", "Bénévolat / Activités", "Volunteering and extracurricular activities"],
                ["7", "Références", "Références disponibles sur demande"],
              ].map(([num, title, desc]) => (
                <li key={num} className="flex items-start gap-3">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F0FDF4] text-xs font-black text-[#16A34A] border border-[#BBF7D0]">{num}</span>
                  <span>
                    <span className="font-bold text-[#0B1F3A]">{title}</span>
                    <span className="text-[#526173]"> — {desc}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Model lettre de motivation — opening paragraph</p>
          <p className="mt-1 text-sm text-[#CBD5E1]">Fully in French — bilingual workplace context</p>
          <blockquote className="mt-4 rounded-xl bg-white/10 p-5 text-sm leading-8 italic text-[#E2E8F0]">
            Madame, Monsieur, je vous soumets ma candidature pour le poste de coordonnatrice administrative affiché sur votre site. Forte de quatre années d'expérience au sein d'organismes gouvernementaux bilingues, je maîtrise les outils de bureautique ainsi que la communication professionnelle en français et en anglais. Ce poste m'intéresse particulièrement car il me permettrait de mettre à profit mes compétences en gestion administrative tout en évoluant dans un environnement dynamique et axé sur le service aux citoyens.
          </blockquote>
          <p className="mt-3 text-xs text-[#94A3B8]">Translation: I am submitting my application for the administrative coordinator position posted on your website. Drawing on four years of experience in bilingual government organizations, I am proficient in office software and professional communication in both French and English. This position particularly interests me as it would allow me to leverage my administrative management skills while growing in a dynamic, citizen-service-focused environment.</p>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="CV & cover letter phrases" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the purpose to the French phrase" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the cover letter sentences" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="French CV & cover letter quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/canadian-life/unit-3/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">← Lesson 1</Link>
          <Link href="/learn/canadian-life/unit-3/lesson-3" className="rounded-full bg-[#16A34A] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#15803D]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
