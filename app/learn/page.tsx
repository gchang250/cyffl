import Link from "next/link";

const courses = [
  {
    title: "French for Canadian Life",
    level: "All levels",
    href: "/learn/canadian-life",
    description:
      "Quebec expressions, government forms, bilingual job postings, and university applications. The French that actually comes up in Canada.",
    lessonCount: "16 lessons · 4 unit tests",
  },
  {
    title: "French Foundations",
    level: "Beginner",
    href: "/learn/french-foundations",
    description:
      "Start from zero. Greetings, introductions, essential verbs, past tense, and key irregular verbs, with a unit test after every unit.",
    lessonCount: "27 lessons · 7 unit tests",
  },
  {
    title: "School French Support",
    level: "Grades 4–10",
    href: "/learn/school-french-support",
    description:
      "Review and strengthen your school French. Articles, noun gender, verb conjugations, adjective agreement, and key irregular verbs.",
    lessonCount: "24 lessons · 6 unit tests",
  },
  {
    title: "IB French B SL",
    level: "Advanced",
    href: "/learn/ib-french-b-sl",
    description:
      "Prepare for Paper 2, Paper 1, and the Individual Oral. All five core themes, reading and listening strategies, text types, and oral discussion language.",
    lessonCount: "14 lessons · 4 unit tests",
  },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        <div className="max-w-2xl">
          <h1 className="text-5xl font-black tracking-tight md:text-6xl">
            Pick your path.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#526173]">
            Whether you&apos;re starting from zero, reviewing for school, prepping for IB, or building French skills for everyday Canadian life, there&apos;s a course for where you are.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {courses.map((course) => (
            <div key={course.title} className="flex flex-col rounded-2xl border border-[#E7DAB9] bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[#526173]">
                {course.level}
              </p>

              <h2 className="mt-3 text-xl font-black">
                {course.title}
              </h2>

              <p className="mt-3 grow text-sm leading-7 text-[#526173]">
                {course.description}
              </p>

              <p className="mt-5 text-xs text-[#526173]">{course.lessonCount}</p>

              <Link
                href={course.href}
                className="mt-5 inline-block text-sm font-black text-[#D62828] hover:underline"
              >
                Start course →
              </Link>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
