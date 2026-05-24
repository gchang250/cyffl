import Link from "next/link";

const courses = [
  {
    title: "French Foundations",
    level: "Beginner",
    status: "Available now",
    statusColor: "bg-[#F0FDF4] text-[#16A34A]",
    href: "/learn/french-foundations",
    description:
      "Start from zero. Greetings, introductions, essential verbs, numbers, adjectives, and daily life — with a unit test after every unit.",
    units: ["First Words", "Building Sentences", "Everyday French", "Describing Things", "Daily Life"],
    lessonCount: "19 lessons · 5 unit tests",
  },
  {
    title: "School French Support",
    level: "Grades 4–10",
    status: "Coming soon",
    statusColor: "bg-[#FFF8ED] text-[#526173]",
    href: "#",
    description:
      "Review grammar, vocabulary, writing, reading comprehension, and speaking for regular French class.",
    units: ["Grammar", "Vocabulary", "Writing", "Reading"],
    lessonCount: "In development",
  },
  {
    title: "IB French B SL",
    level: "Advanced",
    status: "Coming soon",
    statusColor: "bg-[#FFF8ED] text-[#526173]",
    href: "#",
    description:
      "Prepare for Paper 1, Paper 2 reading, Paper 2 listening, and the individual oral assessment.",
    units: ["Paper 1", "Reading", "Listening", "Oral"],
    lessonCount: "In development",
  },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-black tracking-tight md:text-6xl">
            Pick your path.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#526173]">
            Whether you're starting from zero or prepping for advanced exams —
            CYFFL has a course for where you are.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group flex flex-col rounded-[2rem] border border-[#E7DAB9] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#FFFDF7] px-3 py-1 text-xs font-black text-[#2563EB]">
                  {course.level}
                </span>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${course.statusColor}`}>
                  {course.status}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-black group-hover:text-[#2563EB]">
                {course.title}
              </h2>

              <p className="mt-3 grow leading-7 text-[#526173]">
                {course.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {course.units.map((unit) => (
                  <span
                    key={unit}
                    className="rounded-full bg-[#FFFDF7] px-3 py-1 text-xs font-bold text-[#0B1F3A]"
                  >
                    {unit}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-xs text-[#526173]">{course.lessonCount}</p>

              {course.href !== "#" ? (
                <Link
                  href={course.href}
                  className="mt-6 rounded-full bg-[#2563EB] px-5 py-2.5 text-center text-sm font-black text-white transition hover:bg-[#1D4ED8]"
                >
                  Start course →
                </Link>
              ) : (
                <div className="mt-6 rounded-full border border-[#E7DAB9] px-5 py-2.5 text-center text-sm font-bold text-[#526173]">
                  Not yet available
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
