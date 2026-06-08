import Link from "next/link";

const units = [
  {
    number: "01",
    title: "Quebec French",
    description: "Regional vocabulary, expressions, and the differences that matter when you're actually in Quebec.",
    color: "bg-[#FEF2F2] text-[#B91C1C]",
    testHref: "/learn/canadian-life/unit-1/test",
    lessons: [
      { title: "Quebec Vocabulary", href: "/learn/canadian-life/unit-1/lesson-1" },
      { title: "Quebec Expressions", href: "/learn/canadian-life/unit-1/lesson-2" },
      { title: "Quebec French in Context", href: "/learn/canadian-life/unit-1/lesson-3" },
      { title: "Regional French Across Canada", href: "/learn/canadian-life/unit-1/lesson-4" },
    ],
  },
  {
    number: "02",
    title: "Government & Official Documents",
    description: "Healthcare, taxes, government forms — reading and writing in official French Canadian contexts.",
    color: "bg-[#EFF6FF] text-[#2563EB]",
    testHref: "/learn/canadian-life/unit-2/test",
    lessons: [
      { title: "Healthcare in French", href: "/learn/canadian-life/unit-2/lesson-1" },
      { title: "Government Forms", href: "/learn/canadian-life/unit-2/lesson-2" },
      { title: "Tax Vocabulary", href: "/learn/canadian-life/unit-2/lesson-3" },
      { title: "Writing Formal Requests", href: "/learn/canadian-life/unit-2/lesson-4" },
    ],
  },
  {
    number: "03",
    title: "The Bilingual Workplace",
    description: "Job postings, cover letters, workplace communication, and French job interviews.",
    color: "bg-[#F0FDF4] text-[#16A34A]",
    testHref: "/learn/canadian-life/unit-3/test",
    lessons: [
      { title: "Reading Job Postings", href: "/learn/canadian-life/unit-3/lesson-1" },
      { title: "The French CV & Cover Letter", href: "/learn/canadian-life/unit-3/lesson-2" },
      { title: "Workplace Communication", href: "/learn/canadian-life/unit-3/lesson-3" },
      { title: "Job Interview French", href: "/learn/canadian-life/unit-3/lesson-4" },
    ],
  },
  {
    number: "04",
    title: "Education in French Canada",
    description: "Cégep, université, scholarships, and the academic French you need in Canada.",
    color: "bg-[#EDE9FE] text-[#7C3AED]",
    testHref: "/learn/canadian-life/unit-4/test",
    lessons: [
      { title: "The Canadian Education System", href: "/learn/canadian-life/unit-4/lesson-1" },
      { title: "University Applications", href: "/learn/canadian-life/unit-4/lesson-2" },
      { title: "Scholarships & Financial Aid", href: "/learn/canadian-life/unit-4/lesson-3" },
      { title: "Student Life in French", href: "/learn/canadian-life/unit-4/lesson-4" },
    ],
  },
];

export default function CanadianLifePage() {
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
            <span className="rounded-full bg-[#FEF2F2] px-3 py-1 text-xs font-black text-[#B91C1C]">
              All levels
            </span>

            <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
              French for Canadian Life
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#526173]">
              The French that actually comes up in Canada. Quebec expressions, government forms, bilingual job postings, and education in French Canada — four practical units, no fluff.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">4</p>
                <p className="mt-1 text-xs text-[#526173]">Units</p>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">16</p>
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
                Navigate real Canadian life confidently in French — at work, at university, and in Quebec.
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
                      {lesson.title}
                      <span className="ml-auto text-xs font-normal text-[#526173]">→</span>
                    </Link>
                  ))}

                  <Link
                    href={unit.testHref}
                    className="flex items-center justify-between rounded-2xl border border-[#E7DAB9] bg-white px-4 py-3 text-sm font-bold text-[#526173] transition hover:border-[#0B1F3A] hover:text-[#0B1F3A]"
                  >
                    Unit Test
                    <span className="text-xs font-normal">→</span>
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
