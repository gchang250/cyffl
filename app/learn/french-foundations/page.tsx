import Link from "next/link";

const units = [
  {
    number: "01",
    title: "First Words",
    description: "Greetings, introductions, and basic conversation starters.",
    color: "bg-[#EFF6FF] text-[#2563EB]",
    lessons: [
      { title: "Greetings", href: "/learn/french-foundations/unit-1/lesson-1", done: true },
      { title: "Introducing Yourself", href: "/learn/french-foundations/unit-1/lesson-2", done: true },
      { title: "How Are You?", href: "/learn/french-foundations/unit-1/lesson-3", done: true },
    ],
  },
  {
    number: "02",
    title: "Building Sentences",
    description: "Subject pronouns, être, avoir, and simple sentence structure.",
    color: "bg-[#FEF3C7] text-[#D97706]",
    lessons: [
      { title: "Subject Pronouns", href: "/learn/french-foundations/unit-2/lesson-1", done: true },
      { title: "Être: To Be", href: "/learn/french-foundations/unit-2/lesson-2", done: true },
      { title: "Avoir: To Have", href: "/learn/french-foundations/unit-2/lesson-3", done: true },
      { title: "Simple Sentences", href: "/learn/french-foundations/unit-2/lesson-4", done: true },
    ],
  },
  {
    number: "03",
    title: "Everyday French",
    description: "Numbers, days, family vocabulary, and expressing what you like.",
    color: "bg-[#F0FDF4] text-[#16A34A]",
    lessons: [
      { title: "Numbers 1–20", href: "/learn/french-foundations/unit-3/lesson-1", done: true },
      { title: "Days & Months", href: "/learn/french-foundations/unit-3/lesson-2", done: true },
      { title: "Family", href: "/learn/french-foundations/unit-3/lesson-3", done: true },
      { title: "Likes & Dislikes", href: "/learn/french-foundations/unit-3/lesson-4", done: true },
    ],
  },
];

export default function FrenchFoundationsPage() {
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
              Beginner
            </span>

            <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
              French Foundations
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#526173]">
              New to French? This is your starting point. Three units, eleven
              lessons, and plenty of interactive exercises to make things stick.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">3</p>
                <p className="mt-1 text-xs text-[#526173]">Units</p>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">11</p>
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
                Understand and use simple French in real situations.
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
