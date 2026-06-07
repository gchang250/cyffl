import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "Poste offert", back: "Position offered", subtext: "Poste offert : Coordonnateur administratif — Position offered: Administrative Coordinator." },
  { front: "Lieu de travail", back: "Workplace / location", subtext: "Lieu de travail : Ottawa (mode hybride) — Workplace: Ottawa (hybrid mode)." },
  { front: "Type de poste", back: "Type of position", subtext: "Types courants : permanent, temporaire, contractuel — Common types: permanent, temporary, contract." },
  { front: "Entrée en fonction", back: "Start date (literally: entry into function)", subtext: "Entrée en fonction prévue : 1er septembre — Expected start date: September 1st." },
  { front: "Atout", back: "Asset — not required but helpful", subtext: "Expérience en gestion de projet est un atout. — Project management experience is an asset." },
  { front: "Requis / Exigé", back: "Required / mandatory", subtext: "Bilinguisme exigé. — Bilingualism required. Versus: bilinguisme souhaité — preferred." },
  { front: "Maîtrise du français", back: "French proficiency / mastery", subtext: "Maîtrise du français écrit et parlé requise. — Written and spoken French proficiency required." },
  { front: "Connaissance fonctionnelle", back: "Functional knowledge (of a language)", subtext: "Connaissance fonctionnelle de l'anglais — can work in English but not fully fluent." },
  { front: "Études postsecondaires", back: "Postsecondary education", subtext: "Diplôme d'études postsecondaires en administration — Postsecondary diploma in administration." },
  { front: "Envoyez votre candidature", back: "Send your application", subtext: "Envoyez votre candidature avant le 15 juin. — Send your application before June 15." },
  { front: "Faire parvenir votre CV", back: "Forward your CV / résumé", subtext: "Veuillez faire parvenir votre CV à rh@exemple.ca — Please forward your CV to rh@exemple.ca." },
  { front: "Seuls les candidats retenus seront contactés", back: "Only shortlisted candidates will be contacted", subtext: "Standard closing line on Canadian French job postings." },
];

const pairs = [
  { left: "Poste offert", right: "Position offered" },
  { left: "Entrée en fonction", right: "Start date" },
  { left: "Atout", right: "Asset (not required)" },
  { left: "Requis / Exigé", right: "Required / mandatory" },
  { left: "Études postsecondaires", right: "Postsecondary education" },
  { left: "Connaissance fonctionnelle", right: "Functional knowledge" },
];

const exercises = [
  {
    before: "Le bilinguisme (français/anglais) est",
    after: "pour ce poste au gouvernement fédéral.",
    answer: "exigé",
    hint: "Required / mandatory — a stronger word than 'souhaité'",
    translation: "Bilingualism (French/English) is required for this federal government position.",
  },
  {
    before: "L'expérience en gestion budgétaire constitue un",
    after: "mais n'est pas obligatoire.",
    answer: "atout",
    hint: "Asset — helpful but not mandatory",
    translation: "Budget management experience is an asset but is not mandatory.",
  },
  {
    before: "Veuillez faire",
    after: "votre CV à notre équipe de recrutement avant le 30 mai.",
    answer: "parvenir",
    hint: "Faire parvenir = to forward / to send",
    translation: "Please forward your CV to our recruitment team before May 30.",
  },
  {
    before: "L'",
    after: "en fonction est prévue pour le 1er octobre.",
    answer: "entrée",
    hint: "Entrée en fonction = start date / entry into the role",
    translation: "The start date is planned for October 1st.",
  },
  {
    before: "Seuls les candidats",
    after: "seront contactés pour une entrevue.",
    answer: "retenus",
    hint: "Retenus = shortlisted / selected",
    translation: "Only shortlisted candidates will be contacted for an interview.",
  },
];

const questions = [
  {
    question: "What does 'atout' mean on a French job posting?",
    options: [
      "Required qualification",
      "Asset — helpful but not mandatory",
      "Mandatory bilingualism",
      "Start date",
    ],
    correct: 1,
    explanation: "'Atout' means asset — a quality or skill that is beneficial but not required. The opposite is 'exigé' (required) or 'requis' (required).",
  },
  {
    question: "What is 'entrée en fonction'?",
    options: [
      "The job title",
      "The salary range",
      "The expected start date",
      "The application deadline",
    ],
    correct: 2,
    explanation: "'Entrée en fonction' literally means 'entry into function' and refers to the expected start date for the position.",
  },
  {
    question: "How would you say 'Send your application' in a formal French job posting?",
    options: [
      "Envoyez votre lettre",
      "Envoyez votre candidature",
      "Faites votre demande",
      "Soumettez votre intérêt",
    ],
    correct: 1,
    explanation: "'Envoyez votre candidature' is the standard phrase. 'Candidature' means application in the sense of one's candidacy for a role.",
  },
  {
    question: "What does 'connaissance fonctionnelle' of a language imply?",
    options: [
      "Full bilingual fluency at native level",
      "No knowledge required",
      "Working knowledge — can function but not fully fluent",
      "Written knowledge only",
    ],
    correct: 2,
    explanation: "'Connaissance fonctionnelle' means functional knowledge — you can work in the language for everyday tasks but it's a lower bar than 'maîtrise' (full proficiency/mastery).",
  },
  {
    question: "What does 'expérience souhaitée' mean on a job posting, and how is it different from 'exigée'?",
    options: [
      "They mean the same — both are required",
      "'Souhaitée' = preferred but not required; 'exigée' = required/mandatory",
      "'Souhaitée' = required; 'exigée' = optional",
      "'Souhaitée' means recent experience only",
    ],
    correct: 1,
    explanation: "'Souhaitée' = desired / preferred — it would help your application but isn't blocking. 'Exigée' = required / mandatory — you must have it to apply. 'Bilinguisme exigé' means the employer will reject applications without it; 'bilinguisme souhaité' means it's an asset.",
  },
  {
    question: "A job posting for a federal position lists 'Profil linguistique: CBC'. What does this mean for bilingualism?",
    options: [
      "You only need French, at level C",
      "English at level C, French at level B, English reading at level C",
      "You need a bilingual proficiency: English at Level C, French at Level B, the written component at Level C",
      "The position is broadcast on CBC",
    ],
    correct: 2,
    explanation: "CBC is the federal bilingual profile: English oral = C (advanced), French reading = B (intermediate), French written = C (advanced). Federal public service jobs each have a language profile code like BBB, CBC, or CCC — indicating the required level in each of the three SLE components.",
  },
  {
    question: "A job posting closes with 'Nous remercions tous les candidats de leur intérêt.' What does this signal?",
    options: [
      "All applicants will receive an interview",
      "The company will contact all applicants",
      "The company thanks all applicants but will only contact those selected — a standard polite closing",
      "You must respond to confirm your application",
    ],
    correct: 2,
    explanation: "This is a standard polite closing meaning the employer thanks all applicants for their interest but implies only selected candidates will be contacted — typically followed by 'Seuls les candidats retenus seront contactés.' Don't wait for a response if you don't hear back.",
  },
  {
    question: "What does 'mode hybride' mean as a work arrangement on a French job posting?",
    options: [
      "Working from two different offices",
      "A combination of remote work and on-site work",
      "Working with two languages",
      "A part-time position with full benefits",
    ],
    correct: 1,
    explanation: "'Mode hybride' = hybrid work arrangement — a combination of working from home (télétravail) and in-office (en présentiel). Post-pandemic, this has become a standard descriptor on Canadian job postings. The proportion may be specified: 'deux jours au bureau, trois jours en télétravail.'",
  },
];

export default function Unit3Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Unit 3 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Reading Job Postings</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Canadian job postings — especially in government, federal agencies, and Quebec companies — are often bilingual or fully in French. Knowing how to decode them is a real advantage. Many candidates lose out simply because they misread a key term like <em>atout</em> (asset) or <em>exigé</em> (required).
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Federal public service jobs and positions at Crown corporations routinely list language requirements in French. Quebec employers may post entirely in French, while Ontario and B.C. employers increasingly include French sections. This lesson gives you the vocabulary to navigate all of them.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Job posting vocabulary</p>
            <div className="mt-3 space-y-2 text-sm">
              {[
                ["Poste offert", "Position offered"],
                ["Lieu de travail", "Workplace / location"],
                ["Type de poste", "Type of position (permanent, temporaire, contractuel)"],
                ["Entrée en fonction", "Start date (literally: entry into function)"],
                ["Salaire", "Salary"],
                ["Atout", "Asset (not required but helpful)"],
                ["Requis / Exigé", "Required"],
                ["Bilingue (français/anglais)", "Bilingual (French/English)"],
                ["Expérience souhaitée", "Desired experience"],
                ["Maîtrise du français", "French proficiency / mastery"],
                ["Connaissance fonctionnelle", "Functional knowledge"],
                ["Études postsecondaires", "Postsecondary education"],
                ["Envoyez votre candidature", "Send your application"],
                ["Faire parvenir votre CV", "Forward your CV"],
                ["Seuls les candidats retenus seront contactés", "Only shortlisted candidates will be contacted"],
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
          <p className="text-lg font-black">Sample job posting — French section</p>
          <p className="mt-1 text-sm text-[#CBD5E1]">Administrative Coordinator · National Capital Region</p>
          <div className="mt-4 rounded-xl bg-white/10 p-5 text-sm leading-7">
            <p className="font-black text-white">Poste offert : Coordonnateur(trice) administratif(ve)</p>
            <p className="mt-1 text-[#CBD5E1]"><span className="text-white font-bold">Lieu de travail :</span> Ottawa (Ontario) — mode hybride</p>
            <p className="text-[#CBD5E1]"><span className="text-white font-bold">Type de poste :</span> Permanent, temps plein</p>
            <p className="text-[#CBD5E1]"><span className="text-white font-bold">Salaire :</span> 52 000 $ – 65 000 $ par année, selon l'expérience</p>
            <p className="text-[#CBD5E1]"><span className="text-white font-bold">Entrée en fonction :</span> Dès que possible</p>
            <p className="mt-3 text-[#CBD5E1]">
              Nous recherchons une personne dynamique pour soutenir nos opérations administratives dans un environnement gouvernemental bilingue. Le bilinguisme (français/anglais) est <span className="text-white font-bold">exigé</span>. Une maîtrise avancée de la suite Microsoft Office est <span className="text-white font-bold">requise</span>. Une expérience en gestion de calendriers complexes constitue un <span className="text-white font-bold">atout</span>. Diplôme d'études postsecondaires en administration ou dans un domaine connexe.
            </p>
            <p className="mt-3 text-[#CBD5E1]">
              Veuillez faire parvenir votre CV et lettre de motivation à <span className="text-white">rh@agencefed.gc.ca</span> avant le <span className="text-white font-bold">15 juin 2026</span>. Seuls les candidats retenus seront contactés.
            </p>
          </div>
          <div className="mt-4 grid gap-2 text-xs sm:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-2">
              <p className="font-bold text-[#4ADE80]">exigé</p>
              <p className="text-[#CBD5E1]">= required (no negotiation)</p>
            </div>
            <div className="rounded-lg bg-white/10 p-2">
              <p className="font-bold text-[#FACC15]">atout</p>
              <p className="text-[#CBD5E1]">= asset (nice to have)</p>
            </div>
            <div className="rounded-lg bg-white/10 p-2">
              <p className="font-bold text-[#60A5FA]">retenus</p>
              <p className="text-[#CBD5E1]">= shortlisted</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Job posting terms" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the French term to its English meaning" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the job posting sentences" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Reading job postings quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/canadian-life/unit-2/test" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">← Unit 2 test</Link>
          <Link href="/learn/canadian-life/unit-3/lesson-2" className="rounded-full bg-[#16A34A] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#15803D]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
