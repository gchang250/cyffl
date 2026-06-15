import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  {
    front: "le cours magistral",
    back: "Lecture (professor to a large group)",
    subtext: "A one-way presentation format in a large auditorium. No discussion: just note-taking.",
  },
  {
    front: "le séminaire / le cours",
    back: "Seminar / class (smaller group, discussion-based)",
    subtext: "Smaller than a lecture. Students are expected to participate and present ideas.",
  },
  {
    front: "le travail pratique (TP)",
    back: "Practical work / lab session",
    subtext: "Hands-on session in a lab or workshop. Common in sciences, engineering, and health programs.",
  },
  {
    front: "le devoir",
    back: "Assignment / homework",
    subtext: "Remettre un devoir = to hand in an assignment. La date de remise = the due date.",
  },
  {
    front: "la dissertation",
    back: "Essay / long-form written assignment",
    subtext: "More formal than a devoir. Requires structured argument, references, and a bibliography.",
  },
  {
    front: "la date de remise",
    back: "Due date / submission deadline",
    subtext: "La date de remise est le vendredi 13 juin à 23h59.: The due date is Friday June 13 at 11:59 pm.",
  },
  {
    front: "le plan de cours",
    back: "Course syllabus",
    subtext: "Distributed at the start of the semester. Contains objectives, schedule, grading, and policies.",
  },
  {
    front: "la résidence universitaire",
    back: "Student residence / dormitory",
    subtext: "On-campus housing. May be called 'les résidences' or 'le foyer étudiant' depending on the institution.",
  },
  {
    front: "le syndicat étudiant",
    back: "Student union: collective labour/advocacy body",
    subtext: "In Quebec, student syndicats are powerful: they negotiate with universities and can call strikes.",
  },
  {
    front: "l'association étudiante",
    back: "Student association: social and representational body",
    subtext: "Represents students in a given faculty or program. Organizes events and advocates within the institution.",
  },
  {
    front: "l'abandon de cours",
    back: "Course withdrawal / dropping a course",
    subtext: "Must be done by a set deadline to avoid a failing grade on transcript. Rules vary by institution.",
  },
  {
    front: "l'échec",
    back: "Failure (grade below the passing threshold)",
    subtext: "Échouer un cours = to fail a course. The passing grade is typically 60% in Quebec universities.",
  },
  {
    front: "le bureau du registraire",
    back: "Registrar's office",
    subtext: "Handles transcripts, enrolment records, graduation, and official documents. Key administrative office.",
  },
  {
    front: "le café étudiant",
    back: "Student café: often run by the student association",
    subtext: "A campus café managed by students. Common in Quebec universities and cégeps.",
  },
];

const pairs = [
  { left: "le cours magistral", right: "lecture (large group, no discussion)" },
  { left: "la date de remise", right: "due date for an assignment" },
  { left: "le plan de cours", right: "course syllabus" },
  { left: "l'abandon de cours", right: "course withdrawal / dropping a course" },
  { left: "le bureau du registraire", right: "registrar's office" },
  { left: "l'échec", right: "failure (below passing grade)" },
];

const exercises = [
  {
    before: "Le",
    after: "de cours indique que la participation orale vaut 20 % de la note finale.",
    answer: "plan",
    hint: "Plan de cours = course syllabus. Distributed at the start of each semester.",
    translation: "The course syllabus indicates that oral participation is worth 20% of the final grade.",
  },
  {
    before: "La",
    after: "de remise pour la dissertation est le 2 décembre à 23h59.",
    answer: "date",
    hint: "Date de remise = due date / submission deadline.",
    translation: "The due date for the essay is December 2 at 11:59 pm.",
  },
  {
    before: "Si tu n'aimes pas ce cours, tu peux faire un",
    after: "de cours avant la date limite pour éviter un échec sur ton relevé.",
    answer: "abandon",
    hint: "Abandon de cours = course withdrawal / dropping a course.",
    translation: "If you don't like this course, you can withdraw from it before the deadline to avoid a failure on your transcript.",
  },
  {
    before: "Pour obtenir ton relevé de notes officiel, tu dois contacter le bureau du",
    after: ".",
    answer: "registraire",
    hint: "Bureau du registraire = registrar's office. Handles transcripts and official records.",
    translation: "To get your official transcript, you must contact the registrar's office.",
  },
  {
    before: "Le",
    after: "étudiant organise chaque année une semaine d'accueil pour les nouveaux étudiants.",
    answer: "syndicat",
    hint: "Syndicat étudiant = student union. In Quebec, a powerful student advocacy body.",
    translation: "The student union organizes a welcome week for new students every year.",
  },
];

const questions = [
  {
    question: "What is 'le cours magistral'?",
    options: [
      "A small seminar with discussion",
      "A master's-level course",
      "A large lecture with a professor presenting to the group",
      "A practical lab session",
    ],
    correct: 2,
    explanation: "'Le cours magistral' is a lecture in the traditional sense: a professor presents to a large group with little or no discussion. It contrasts with a 'séminaire', which involves student participation.",
  },
  {
    question: "What is 'l'abandon de cours'?",
    options: [
      "Failing a course due to poor grades",
      "Withdrawing / dropping a course before the deadline",
      "Taking a leave of absence from university",
      "Transferring to a different program",
    ],
    correct: 1,
    explanation: "'L'abandon de cours' is the formal withdrawal from a course before the institutional deadline. Done in time, it avoids a failing grade appearing on your transcript.",
  },
  {
    question: "What is 'la session d'hiver' in a Canadian French university?",
    options: [
      "A winter sports week on campus",
      "The fall semester",
      "The winter semester (January–April)",
      "A year-long intensive French program",
    ],
    correct: 2,
    explanation: "'La session d'hiver' is the winter semester, typically running from January to April in Quebec and other Canadian French universities. 'La session d'automne' is the fall semester.",
  },
  {
    question: "What does the 'syndicat étudiant' do in Quebec?",
    options: [
      "It runs the university café.",
      "It is a collective advocacy body that represents students and can negotiate with universities.",
      "It manages student housing applications.",
      "It is the same as the student association in every way.",
    ],
    correct: 1,
    explanation: "In Quebec, the 'syndicat étudiant' is a powerful student advocacy body with collective bargaining-style power. It can negotiate with institutions and organize strikes. It differs from the 'association étudiante', which is more social and faculty-specific.",
  },
  {
    question: "What is a 'séance de tutorat' in a university context?",
    options: [
      "A mandatory lecture with the full class",
      "A paid part-time teaching position",
      "A tutoring session: one-on-one or small group academic support",
      "A formal academic assessment",
    ],
    correct: 2,
    explanation: "'Le tutorat' = tutoring / academic peer support. Many Quebec universities offer free séances de tutorat where senior students help juniors with course material. Look for 'service de tutorat par les pairs' on your university's website.",
  },
  {
    question: "What does 'charge de cours' mean at a Quebec university?",
    options: [
      "The cost of tuition per course",
      "A contract lecturer / course instructor (not a tenure-track professor)",
      "The number of credits in a course",
      "A student grader who marks assignments",
    ],
    correct: 1,
    explanation: "'Chargé(e) de cours' = course instructor / contract lecturer: someone hired on a per-course basis, distinct from a 'professeur' (tenure-track). Many university courses are taught by chargés de cours, especially at the undergraduate level. The distinction matters if you seek research supervision.",
  },
  {
    question: "In Quebec student culture, what is 'le bar étudiant'?",
    options: [
      "A student law clinic",
      "A campus pub / student bar run by student associations",
      "A study area with coffee",
      "An outdoor campus gathering space",
    ],
    correct: 1,
    explanation: "'Le bar étudiant' is a campus pub typically run by the student association: a social space for students. Quebec universities and cégeps often have well-known bars étudians that serve as hubs for student life. They're legally operated and serve alcohol at subsidized prices.",
  },
  {
    question: "What does 'travail de session' mean in French-language academic contexts?",
    options: [
      "Part-time work during the semester",
      "A mid-term exam",
      "A major written assignment or project due at the end of the semester",
      "A laboratory practical session",
    ],
    correct: 2,
    explanation: "'Un travail de session' = a semester paper / major assignment: a research paper, project, or report that is a significant portion of a course grade, typically due at the end of the semester. It differs from 'un examen final' (a final exam) and 'un devoir' (a homework assignment).",
  },
];

export default function Unit4Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Unit 4 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Student Life in French</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Day-to-day student life vocabulary in a French-language or bilingual Canadian institution: from registering for courses to navigating campus life. Whether you're in a cours magistral, working on a dissertation, or looking for your association étudiante, this vocabulary is the practical foundation.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Quebec student culture has its own rhythms and institutions: from the powerful syndicat étudiant to the relaxed café étudiant. Knowing the vocabulary helps you participate, not just observe.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Academic calendar vocabulary</p>
            <div className="mt-3 space-y-2 text-sm">
              {[
                ["la session d'automne", "fall semester"],
                ["la session d'hiver", "winter semester"],
                ["la session d'été", "summer session"],
                ["la semaine de relâche", "reading week / spring break"],
                ["la période des examens", "exam period"],
                ["la remise des diplômes", "graduation ceremony"],
                ["le calendrier universitaire", "academic calendar"],
              ].map(([fr, en]) => (
                <div key={fr} className="flex items-start justify-between gap-3 border-b border-[#F0EDD8] pb-2 last:border-0 last:pb-0">
                  <span className="font-bold text-[#0B1F3A]">{fr}</span>
                  <span className="text-right text-[#526173]">{en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Student life vocabulary" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the French term to its English meaning" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the student life sentences" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Student life in French quiz" />
        </div>

        <div className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">

          <p className="mt-2 text-[#526173]">You now know the Quebec education system, how to navigate university applications in French, find scholarships, and thrive in student life at a francophone institution.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/canadian-life/unit-4/lesson-3" className="rounded-full border border-[#E7DAB9] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Lesson 3</Link>
            <Link href="/learn/canadian-life/unit-4/test" className="rounded-full bg-[#7C3AED] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#6D28D9]">Take the final test →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
