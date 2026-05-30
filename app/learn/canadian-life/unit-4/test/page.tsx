import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "What is unique about the cégep in Quebec's education system?",
    options: [
      "It is a private high school.",
      "It is a pre-university college that exists only in Quebec.",
      "It is equivalent to the first year of a master's degree.",
      "It is a federal institution serving all provinces.",
    ],
    correct: 1,
    explanation: "The cégep (Collège d'enseignement général et professionnel) is unique to Quebec. It sits between secondary school and university, offering 2-year pre-university programs and 3-year technical programs.",
  },
  {
    question: "Why is a baccalauréat in Quebec typically 3 years rather than 4?",
    options: [
      "Quebec universities have a faster-paced curriculum.",
      "Federal law limits Quebec degrees to 3 years.",
      "The cégep covers content equivalent to the first university year elsewhere.",
      "Only honours programs in Quebec are 4 years.",
    ],
    correct: 2,
    explanation: "Because Quebec students complete 2 years of cégep before university, their bachelor's programs are one year shorter. In other provinces, students go directly from high school to a 4-year university degree.",
  },
  {
    question: "What is the 'cote R' used for?",
    options: [
      "Measuring French language proficiency for cégep admission",
      "Ranking cégep students for competitive university admissions in Quebec",
      "Calculating student loan eligibility",
      "Grading university dissertations",
    ],
    correct: 1,
    explanation: "The cote R (cote de rendement au collégial) is calculated from a student's cégep grades relative to their class. It is used as an admission metric for competitive university programs in Quebec.",
  },
  {
    question: "What does 'la lettre de motivation' refer to in a university application?",
    options: [
      "A letter from the selection committee",
      "A letter confirming receipt of your file",
      "A personal statement explaining your goals and fit for the program",
      "A reference letter from a professor",
    ],
    correct: 2,
    explanation: "'La lettre de motivation' is a personal statement — equivalent to a letter of intent or statement of purpose. It explains why you want to study in the program and what you bring to it.",
  },
  {
    question: "What is the AFE in Quebec?",
    options: [
      "A merit scholarship for academic excellence",
      "The Quebec government's student financial assistance program (grants and loans)",
      "A federal French language bursary",
      "A private foundation for arts students",
    ],
    correct: 1,
    explanation: "The AFE (Aide financière aux études) is Quebec's provincial student financial assistance program. It provides need-based grants and loans to qualifying students.",
  },
  {
    question: "What is the difference between a 'bourse' and a 'prêt étudiant'?",
    options: [
      "A bourse must be repaid; a prêt étudiant does not.",
      "A bourse is a scholarship/grant (typically non-repayable); a prêt étudiant is a loan to be repaid.",
      "They are identical in Quebec's system.",
      "A bourse is only for graduate students.",
    ],
    correct: 1,
    explanation: "A 'bourse' is a scholarship, bursary, or grant — generally non-repayable. A 'prêt étudiant' is a student loan that must be repaid after graduation.",
  },
  {
    question: "What is 'le cours magistral'?",
    options: [
      "A master's-level seminar with intensive discussion",
      "A traditional large-group lecture where the professor presents",
      "A practical lab session for hands-on learning",
      "An online course with no in-person component",
    ],
    correct: 1,
    explanation: "'Le cours magistral' is a lecture in the traditional sense — a professor addresses a large group, with students listening and taking notes. It contrasts with 'le séminaire', which involves participation.",
  },
  {
    question: "What does 'l'abandon de cours' mean?",
    options: [
      "Failing a course due to insufficient grades",
      "Taking a semester off from university",
      "Withdrawing / dropping a course before the institutional deadline",
      "Switching from one program to another",
    ],
    correct: 2,
    explanation: "'L'abandon de cours' is the formal process of withdrawing from a course before the deadline. Done on time, it prevents a failing grade from appearing on your transcript.",
  },
  {
    question: "What is 'la date de remise'?",
    options: [
      "The date you receive your final grade",
      "The graduation date",
      "The assignment due date / submission deadline",
      "The last day to register for courses",
    ],
    correct: 2,
    explanation: "'La date de remise' is the due date for submitting an assignment or paper. 'Remettre' means to hand in or submit. 'La date de remise est le vendredi à midi' = the due date is Friday at noon.",
  },
  {
    question: "What is 'le bureau du registraire'?",
    options: [
      "The student union office",
      "The financial aid office",
      "The registrar's office — handles transcripts, enrolment records, and graduation",
      "The professor's office hours",
    ],
    correct: 2,
    explanation: "'Le bureau du registraire' is the registrar's office, responsible for official academic records — transcripts, enrolment confirmation, graduation paperwork, and course registration.",
  },
];

export default function Unit4TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life/unit-4/lesson-4" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Back to Lesson 4
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Unit 4 · Test</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Education in French Canada</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              10 questions covering all four lessons of Unit 4: the Canadian education system, university applications, scholarships and financial aid, and student life in French.
            </p>
          </div>

          <div className="rounded-2xl border border-[#EDE9FE] bg-[#EDE9FE] p-5">
            <p className="text-sm font-black text-[#7C3AED]">Unit 4 covers</p>
            <ul className="mt-3 space-y-2 text-sm text-[#0B1F3A]">
              {[
                "The Canadian Education System",
                "University Applications",
                "Scholarships & Financial Aid",
                "Student Life in French",
              ].map((lesson, i) => (
                <li key={lesson} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#7C3AED] text-xs font-black text-white">{i + 1}</span>
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 4 test — Education in French Canada" />
        </div>

        <div className="mt-12 rounded-[2rem] bg-[#0B1F3A] p-8 text-white">
          <p className="text-lg font-black text-[#A78BFA]">Course complete!</p>
          <p className="mt-2 leading-7 text-[#CBD5E1]">
            You can navigate French in Canadian life — from Quebec expressions to government forms, bilingual workplaces, and university in French Canada. Take what you've learned and use it in the real world.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/canadian-life/unit-4/lesson-4" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn" className="rounded-full bg-[#7C3AED] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#6D28D9]">Explore more courses →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
