import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  {
    front: "le cégep",
    back: "Quebec's pre-university college",
    subtext: "Unique to Quebec. Stands for Collège d'enseignement général et professionnel. Two years for university-bound students, three for technical programs.",
  },
  {
    front: "le baccalauréat (bac)",
    back: "Bachelor's degree — 3 years in Quebec, 4 elsewhere",
    subtext: "Because Quebec has the cégep, university bac programs are one year shorter than in other provinces.",
  },
  {
    front: "la maîtrise",
    back: "Master's degree (typically 2 years)",
    subtext: "Equivalent to an anglophone MA or MSc. Required for many research and professional positions.",
  },
  {
    front: "le doctorat",
    back: "PhD / Doctorate (typically 3–5 years after the master's)",
    subtext: "The highest academic credential. Often called 'le PhD' colloquially in Quebec.",
  },
  {
    front: "le programme",
    back: "Program / major field of study",
    subtext: "Je suis inscrit(e) dans le programme de sciences politiques. — I'm enrolled in the political science program.",
  },
  {
    front: "les cours obligatoires",
    back: "Required / mandatory courses",
    subtext: "Courses every student in the program must complete, regardless of specialization.",
  },
  {
    front: "les cours complémentaires",
    back: "Elective / complementary courses",
    subtext: "Optional courses chosen by the student, often outside their main field.",
  },
  {
    front: "l'université francophone",
    back: "French-language university",
    subtext: "Ex: UQAM, Université de Montréal, Université Laval, Université d'Ottawa (bilingual), Université de Moncton.",
  },
  {
    front: "le relevé de notes",
    back: "Academic transcript",
    subtext: "Official document showing your grades. Required for applications, scholarships, and transfers.",
  },
  {
    front: "l'annuaire / le guide des programmes",
    back: "Course calendar / program guide",
    subtext: "Lists all courses, prerequisites, and program requirements. Essential for planning your studies.",
  },
];

const pairs = [
  { left: "le cégep", right: "Quebec's pre-university college" },
  { left: "le baccalauréat", right: "Bachelor's degree" },
  { left: "la maîtrise", right: "Master's degree" },
  { left: "le relevé de notes", right: "Academic transcript" },
  { left: "les cours obligatoires", right: "Required / mandatory courses" },
  { left: "le doctorat", right: "PhD / Doctorate" },
];

const exercises = [
  {
    before: "Au Québec, les étudiants complètent le",
    after: "avant d'accéder à l'université.",
    answer: "cégep",
    hint: "The unique Quebec pre-university institution between high school and university.",
    translation: "In Quebec, students complete the cégep before entering university.",
  },
  {
    before: "J'ai besoin de mon",
    after: "de notes officiel pour ma demande d'admission.",
    answer: "relevé",
    hint: "Relevé de notes = transcript. You need it for applications.",
    translation: "I need my official transcript for my application for admission.",
  },
  {
    before: "Le programme de droit à l'Université de Montréal exige plusieurs cours",
    after: "que tous les étudiants doivent suivre.",
    answer: "obligatoires",
    hint: "Obligatoires = required / mandatory. Opposite: complémentaires (elective).",
    translation: "The law program at the Université de Montréal requires several mandatory courses that all students must take.",
  },
  {
    before: "Après son baccalauréat, elle souhaite poursuivre une",
    after: "en sciences de l'environnement.",
    answer: "maîtrise",
    hint: "Maîtrise = Master's degree. The next step after the bac.",
    translation: "After her bachelor's, she hopes to pursue a master's in environmental sciences.",
  },
  {
    before: "L'Université de Moncton est la principale université",
    after: "du Nouveau-Brunswick.",
    answer: "francophone",
    hint: "Francophone = French-language. Key adjective for describing French institutions.",
    translation: "The Université de Moncton is the main French-language university in New Brunswick.",
  },
];

const questions = [
  {
    question: "What is unique about the cégep in the Quebec education system?",
    options: [
      "It is a private secondary school.",
      "It is a pre-university college that does not exist in other provinces.",
      "It is equivalent to a master's degree.",
      "It is only for technical and trade programs.",
    ],
    correct: 1,
    explanation: "The cégep (Collège d'enseignement général et professionnel) is a public pre-university institution unique to Quebec. It offers 2-year university-prep programs and 3-year technical programs.",
  },
  {
    question: "Why is a baccalauréat in Quebec typically 3 years instead of 4?",
    options: [
      "Quebec universities are less rigorous.",
      "The cégep already covers the equivalent of the first university year.",
      "Quebec law limits university to 3 years.",
      "Federal funding only covers 3 years.",
    ],
    correct: 1,
    explanation: "Because Quebec students complete 2 years of cégep before university, their bachelor's programs are one year shorter than in other provinces where students go directly from high school.",
  },
  {
    question: "What is 'le relevé de notes'?",
    options: [
      "The program guide",
      "The course registration form",
      "The academic transcript",
      "The scholarship application",
    ],
    correct: 2,
    explanation: "'Le relevé de notes' is the official academic transcript — the document listing your grades. It is required for university applications, scholarships, and professional programs.",
  },
  {
    question: "Which of the following is a French-language university in Canada?",
    options: [
      "McGill University",
      "University of Toronto",
      "Simon Fraser University",
      "Université Laval",
    ],
    correct: 3,
    explanation: "Université Laval in Quebec City is one of Canada's oldest and most prestigious French-language universities. McGill, U of T, and SFU are English-language institutions.",
  },
];

export default function Unit4Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Unit 4 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">The Canadian Education System</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The French-Canadian education system differs significantly from the English one — especially in Quebec, where the cégep exists as a unique step between high school and university. Understanding this structure is essential whether you are applying, supporting someone who is, or working in an educational context.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Outside Quebec, French immersion and francophone schools exist in every province, and French-language universities serve Francophone communities from New Brunswick to Manitoba. This lesson maps the full landscape.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">The Quebec education path</p>
            <div className="mt-3 space-y-2 text-sm">
              {[
                ["École primaire", "Grades 1–6, ages 6–12"],
                ["École secondaire", "Secondary 1–5, ages 12–17"],
                ["Cégep", "2 years pre-university OR 3 years technical, ages 17–19"],
                ["Université — Baccalauréat", "3 years (Quebec) / 4 years (other provinces)"],
                ["Université — Maîtrise", "2 years"],
                ["Université — Doctorat", "3–5 years"],
              ].map(([level, detail]) => (
                <div key={level} className="flex items-start gap-3 border-b border-[#F0EDD8] pb-2 last:border-0 last:pb-0">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#7C3AED]" />
                  <div>
                    <span className="font-bold text-[#0B1F3A]">{level}</span>
                    <span className="text-[#526173]"> — {detail}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-[#EDE9FE] p-3 text-xs text-[#4C1D95]">
              <span className="font-black">Other provinces:</span> Elementary → Middle / High school → University (4 years). No cégep step.
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Francophone universities in Canada</p>
          <p className="mt-1 text-sm text-[#CBD5E1]">Key French-language institutions from coast to coast</p>
          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Université de Montréal", "Montreal, QC — large research university"],
              ["UQAM", "Montreal, QC — Université du Québec à Montréal"],
              ["Université Laval", "Quebec City, QC — oldest French university in North America"],
              ["Université d'Ottawa", "Ottawa, ON — officially bilingual (French/English)"],
              ["Université de Moncton", "Moncton, NB — main Francophone university in the Maritimes"],
              ["Université Saint-Boniface", "Winnipeg, MB — serves Western Canada's Francophone community"],
            ].map(([name, desc]) => (
              <div key={name} className="rounded-xl bg-white/10 p-3">
                <p className="font-bold">{name}</p>
                <p className="text-xs text-[#CBD5E1]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Education system vocabulary" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the French term to its English meaning" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the education sentences" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="The Canadian education system quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/canadian-life/unit-3/test" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">← Unit 3 test</Link>
          <Link href="/learn/canadian-life/unit-4/lesson-2" className="rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#6D28D9]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
