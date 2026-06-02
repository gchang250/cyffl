import Link from "next/link";

const courses = [
  {
    title: "French for Canadian Life",
    level: "All levels",
    status: "Available now",
    statusColor: "bg-[#FEF2F2] text-[#B91C1C]",
    href: "/learn/canadian-life",
    description:
      "Quebec expressions, government forms, bilingual job postings, and university applications — the French that actually comes up in Canada.",
    units: ["Quebec French", "Government & Forms", "The Bilingual Workplace", "Education in French Canada"],
    lessonCount: "16 lessons · 4 unit tests",
  },
  {
    title: "French Foundations",
    level: "Beginner",
    status: "Available now",
    statusColor: "bg-[#F0FDF4] text-[#16A34A]",
    href: "/learn/french-foundations",
    description:
      "Start from zero. Greetings, introductions, essential verbs, past tense, and key irregular verbs — with a unit test after every unit.",
    units: ["First Words", "Être & avoir", "Everyday French", "The Past Tense", "Irregular Verbs"],
    lessonCount: "27 lessons · 7 unit tests",
  },
  {
    title: "School French Support",
    level: "Grades 4–10",
    status: "Available now",
    statusColor: "bg-[#F0FDF4] text-[#16A34A]",
    href: "/learn/school-french-support",
    description:
      "Review and strengthen your school French. Articles, noun gender, verb conjugations (-er, -ir, -re), and key irregular verbs.",
    units: ["Core Grammar", "Verb Conjugation", "The Past Tense", "Writing Practice", "Reading Comprehension"],
    lessonCount: "24 lessons · 6 unit tests",
  },
  {
    title: "IB French B SL",
    level: "Advanced",
    status: "Available now",
    statusColor: "bg-[#FDF4FF] text-[#9333EA]",
    href: "/learn/ib-french-b-sl",
    description:
      "Prepare for Paper 2, Paper 1, and the Individual Oral. All five core themes, reading and listening strategies, text types, and oral discussion language.",
    units: ["The Five Themes", "Paper 2", "Paper 1", "Individual Oral"],
    lessonCount: "14 lessons · 4 unit tests",
  },
  {
    title: "French for Canadian Tests",
    level: "Intermediate–Advanced",
    status: "Available now",
    statusColor: "bg-[#FEF3C7] text-[#D97706]",
    href: "/learn/canadian-french-tests",
    description:
      "Build the French that gets you through the SLE (government jobs) and TEF Canada (immigration). Government vocabulary, formal grammar, opinion phrases, and letter-writing register.",
    units: ["SLE — Government Jobs", "TEF Canada — Immigration"],
    lessonCount: "10 lessons · 2 unit tests",
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
            Whether you&apos;re starting from zero, reviewing for school, prepping for IB, pursuing a federal government job, or immigrating to Canada — there&apos;s a course for where you are.
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
