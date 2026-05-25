import Link from "next/link";

const units = [
  {
    number: "01",
    title: "Core Grammar",
    description: "Articles, noun gender, adjective agreement, and essential prepositions.",
    color: "bg-[#EFF6FF] text-[#2563EB]",
    testHref: "/learn/school-french-support/unit-1/test",
    lessons: [
      { title: "Articles & Gender", href: "/learn/school-french-support/unit-1/lesson-1" },
      { title: "Adjective Agreement", href: "/learn/school-french-support/unit-1/lesson-2" },
      { title: "Prepositions", href: "/learn/school-french-support/unit-1/lesson-3" },
      { title: "Key Irregular Verbs", href: "/learn/school-french-support/unit-1/lesson-4" },
    ],
  },
  {
    number: "02",
    title: "Verb Conjugation",
    description: "Regular -er, -ir, -re verbs and the most important irregular verbs in French.",
    color: "bg-[#FEF3C7] text-[#D97706]",
    testHref: "/learn/school-french-support/unit-2/test",
    lessons: [
      { title: "Regular -er Verbs", href: "/learn/school-french-support/unit-2/lesson-1" },
      { title: "Regular -ir & -re Verbs", href: "/learn/school-french-support/unit-2/lesson-2" },
      { title: "Irregular Verbs (être, avoir, aller)", href: "/learn/school-french-support/unit-2/lesson-3" },
      { title: "Irregular Verbs (faire, vouloir, pouvoir)", href: "/learn/school-french-support/unit-2/lesson-4" },
    ],
  },
  {
    number: "03",
    title: "The Past Tense",
    description: "The passé composé with avoir and être, irregular past participles, and negation in the past.",
    color: "bg-[#EDE9FE] text-[#7C3AED]",
    testHref: "/learn/school-french-support/unit-3/test",
    lessons: [
      { title: "Passé Composé with avoir", href: "/learn/school-french-support/unit-3/lesson-1" },
      { title: "Passé Composé with être", href: "/learn/school-french-support/unit-3/lesson-2" },
      { title: "Irregular Past Participles", href: "/learn/school-french-support/unit-3/lesson-3" },
      { title: "Negation & Time Expressions", href: "/learn/school-french-support/unit-3/lesson-4" },
    ],
  },
  {
    number: "04",
    title: "Describing the Past",
    description: "L'imparfait for descriptions and habits, and how to choose between the two past tenses.",
    color: "bg-[#FCE7F3] text-[#9D174D]",
    testHref: "/learn/school-french-support/unit-4/test",
    lessons: [
      { title: "L'imparfait Formation", href: "/learn/school-french-support/unit-4/lesson-1" },
      { title: "Uses of L'imparfait", href: "/learn/school-french-support/unit-4/lesson-2" },
      { title: "Passé Composé vs Imparfait", href: "/learn/school-french-support/unit-4/lesson-3" },
      { title: "Telling a Story in French", href: "/learn/school-french-support/unit-4/lesson-4" },
    ],
  },
  {
    number: "05",
    title: "Writing Practice",
    description: "Sentence structure, connectors, and guided writing — from paragraphs to short essays.",
    color: "bg-[#F0FDF4] text-[#16A34A]",
    testHref: "/learn/school-french-support/unit-5/test",
    lessons: [
      { title: "Connectors & Sentence Structure", href: "/learn/school-french-support/unit-5/lesson-1" },
      { title: "Writing About Yourself", href: "/learn/school-french-support/unit-5/lesson-2" },
      { title: "Writing About the Past", href: "/learn/school-french-support/unit-5/lesson-3" },
      { title: "Writing About the Future", href: "/learn/school-french-support/unit-5/lesson-4" },
    ],
  },
  {
    number: "06",
    title: "Reading Comprehension",
    description: "Strategies for reading French texts, with graded passages and comprehension practice.",
    color: "bg-[#FEF9C3] text-[#854D0E]",
    testHref: "/learn/school-french-support/unit-6/test",
    lessons: [
      { title: "Reading Strategies", href: "/learn/school-french-support/unit-6/lesson-1" },
      { title: "Beginner Texts", href: "/learn/school-french-support/unit-6/lesson-2" },
      { title: "Intermediate Texts", href: "/learn/school-french-support/unit-6/lesson-3" },
      { title: "Upper-Intermediate Texts", href: "/learn/school-french-support/unit-6/lesson-4" },
    ],
  },
];

export default function SchoolFrenchSupportPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link
          href="/learn"
          className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]"
        >
          ← Back to courses
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-black text-[#2563EB]">
              Grades 4–10
            </span>

            <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
              School French Support
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#526173]">
              Review and strengthen your school French. Grammar, verb tenses, writing skills, and reading comprehension — organized for Canadian school students.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">6</p>
                <p className="mt-1 text-xs text-[#526173]">Units</p>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">24</p>
                <p className="mt-1 text-xs text-[#526173]">Lessons</p>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">Free</p>
                <p className="mt-1 text-xs text-[#526173]">Always</p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-[#0B1F3A] p-5 text-white">
              <p className="text-sm font-bold text-[#C9A44C]">Goal</p>
              <p className="mt-2 font-black leading-7">
                Master the core grammar patterns taught in Canadian schools.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {units.map((unit) => (
              <div
                key={unit.number}
                className="rounded-[2rem] border border-[#E7DAB9] bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-black ${unit.color}`}>
                    Unit {unit.number}
                  </span>
                  <h2 className="text-lg font-black">{unit.title}</h2>
                </div>

                <p className="mt-2 text-sm leading-6 text-[#526173]">
                  {unit.description}
                </p>

                <div className="mt-4 space-y-2">
                  {unit.lessons.map((lesson, li) => (
                    <Link
                      key={lesson.href}
                      href={lesson.href}
                      className="flex items-center gap-3 rounded-2xl bg-[#FFFDF7] px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E7DAB9] text-xs font-black text-[#526173]">
                        {li + 1}
                      </span>
                      {lesson.title}
                      <span className="ml-auto text-xs font-normal text-[#526173]">→</span>
                    </Link>
                  ))}

                  <Link
                    href={unit.testHref}
                    className="flex items-center gap-3 rounded-2xl border border-[#E7DAB9] bg-white px-4 py-3 text-sm font-bold text-[#526173] transition hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] text-xs font-black text-white">
                      ★
                    </span>
                    Unit Test
                    <span className="ml-auto text-xs font-normal text-[#526173]">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
