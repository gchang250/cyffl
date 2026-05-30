import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "What does 'atout' mean on a French job posting?",
    options: [
      "Required qualification",
      "Asset — helpful but not mandatory",
      "Application deadline",
      "Salary range",
    ],
    correct: 1,
    explanation: "'Atout' means asset — a quality that is beneficial but not required. The required qualifications are labelled 'requis' or 'exigé'.",
  },
  {
    question: "What is 'entrée en fonction'?",
    options: [
      "Job title",
      "Required education",
      "Expected start date",
      "Salary negotiation clause",
    ],
    correct: 2,
    explanation: "'Entrée en fonction' literally means 'entry into function' and indicates the expected start date of the position.",
  },
  {
    question: "What is the correct section order for a French CV?",
    options: [
      "Formation, Expérience, Coordonnées, Compétences",
      "Coordonnées, Profil professionnel, Expérience professionnelle, Formation",
      "Références, Bénévolat, Expérience, Coordonnées",
      "Compétences, Coordonnées, Formation, Expérience",
    ],
    correct: 1,
    explanation: "A French CV opens with Coordonnées (contact info), then Profil professionnel, followed by Expérience professionnelle (reverse chronological), Formation, Compétences, and Bénévolat.",
  },
  {
    question: "How do you open a formal French cover letter?",
    options: [
      "Bonjour, je voudrais ce poste.",
      "Cher(e) Directeur(trice),",
      "Madame, Monsieur, je vous soumets ma candidature pour le poste de...",
      "À qui de droit,",
    ],
    correct: 2,
    explanation: "'Madame, Monsieur, je vous soumets ma candidature pour le poste de...' is the standard formal opening. 'Cher/Chère' is too familiar for a first contact.",
  },
  {
    question: "What phrase introduces experience confidently on a French cover letter?",
    options: [
      "Depuis toujours, je travaille...",
      "Fort(e) de X années d'expérience en...",
      "J'ai beaucoup travaillé dans...",
      "Moi, je suis bon(ne) en...",
    ],
    correct: 1,
    explanation: "'Fort(e) de X années d'expérience en...' means 'Drawing on X years of experience in...' — the standard confident opener for a cover letter body paragraph.",
  },
  {
    question: "What does 'Objet :' at the top of a French email mean?",
    options: [
      "Attachment",
      "Priority",
      "Subject line",
      "Carbon copy",
    ],
    correct: 2,
    explanation: "'Objet :' is the French equivalent of 'Subject:' in email — always include it in professional French correspondence.",
  },
  {
    question: "How do you politely disagree in a French meeting?",
    options: [
      "Non, c'est faux.",
      "Je comprends votre point de vue, cependant...",
      "Vous avez tout à fait tort.",
      "C'est une mauvaise idée.",
    ],
    correct: 1,
    explanation: "'Je comprends votre point de vue, cependant...' acknowledges the other person before redirecting — the professional French way to disagree respectfully.",
  },
  {
    question: "What does 'délai' mean in a professional French context?",
    options: [
      "A problem or setback",
      "A paid leave period",
      "A deadline or timeframe",
      "A training period",
    ],
    correct: 2,
    explanation: "'Délai' is a false friend — it doesn't just mean delay. In professional French, 'délai' means deadline or timeframe: 'Quel est le délai?' = What is the deadline?",
  },
  {
    question: "What does 's'épanouir' mean in a French job interview?",
    options: [
      "To apply for a promotion",
      "To thrive / to flourish",
      "To ask for a raise",
      "To submit a resignation",
    ],
    correct: 1,
    explanation: "'Je m'épanouis particulièrement en équipe' means I particularly thrive in a team. It's a strong interview word that conveys genuine engagement.",
  },
  {
    question: "What is the STAR method called in French?",
    options: [
      "SAVE — Situation, Action, Valeur, Effet",
      "STAR — Situation, Tâche, Action, Résultat",
      "FARE — Fait, Action, Résultat, Expérience",
      "PACE — Problème, Action, Contexte, Effet",
    ],
    correct: 1,
    explanation: "The STAR method is used directly in French as Situation, Tâche, Action, Résultat — it structures answers to behavioural questions like 'Décrivez une situation difficile...'",
  },
];

export default function Unit3TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life/unit-3/lesson-4" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Back to Lesson 4
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Unit 3 · Test</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">The Bilingual Workplace</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              10 questions covering all four lessons of Unit 3: reading job postings, the French CV and cover letter, workplace communication, and job interview French.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-[#F0FDF4] p-5">
            <p className="text-sm font-black text-[#16A34A]">Unit 3 covers</p>
            <ul className="mt-3 space-y-2 text-sm text-[#0B1F3A]">
              {[
                "Reading Job Postings",
                "The French CV & Cover Letter",
                "Workplace Communication",
                "Job Interview French",
              ].map((lesson, i) => (
                <li key={lesson} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A] text-xs font-black text-white">{i + 1}</span>
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 3 test — The Bilingual Workplace" />
        </div>

        <div className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 4?</p>
          <p className="mt-2 text-[#526173]">Unit 4 covers education in French Canada — from the Quebec cégep system and university applications to scholarships and student life vocabulary.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/canadian-life/unit-3/lesson-4" className="rounded-full border border-[#E7DAB9] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/canadian-life/unit-4/lesson-1" className="rounded-full bg-[#16A34A] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#15803D]">Start Unit 4 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
