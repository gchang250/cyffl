import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "French for Canadian Tests | CYFFL",
  description:
    "Prepare for the Second Language Evaluation (SLE) for federal government jobs, or the TEF Canada / TCF Canada for immigration and Express Entry.",
};

const units = [
  {
    number: "01",
    title: "SLE — Federal Government Jobs",
    description:
      "Build the French you need to pass the SLE. Government vocabulary (la mise en œuvre, les intervenants, la conformité), formal grammar (passive voice, nominalization, relative pronouns), and the exact writing formulas used in federal documents.",
    color: "bg-[#FEF3C7] text-[#D97706]",
    testHref: "/learn/canadian-french-tests/unit-1/test",
    lessons: [
      { title: "What is the SLE?", href: "/learn/canadian-french-tests/unit-1/lesson-1" },
      { title: "Reading Test Strategies", href: "/learn/canadian-french-tests/unit-1/lesson-2" },
      { title: "Writing & Oral Interaction", href: "/learn/canadian-french-tests/unit-1/lesson-3" },
    ],
  },
  {
    number: "02",
    title: "TEF Canada — Immigration",
    description:
      "Build the French you need to score CLB 7+ on TEF Canada. Topic vocabulary across environment, society, and technology themes; opinion and argument phrases (Force est de constater que…, Certes… mais…); and formal vs. informal writing register for both writing tasks.",
    color: "bg-[#EFF6FF] text-[#2563EB]",
    testHref: "/learn/canadian-french-tests/unit-2/test",
    lessons: [
      { title: "CLB Levels & Immigration Requirements", href: "/learn/canadian-french-tests/unit-2/lesson-1" },
      { title: "Listening & Reading Strategies", href: "/learn/canadian-french-tests/unit-2/lesson-2" },
      { title: "Writing & Speaking Strategies", href: "/learn/canadian-french-tests/unit-2/lesson-3" },
    ],
  },
];

export default function CanadianFrenchTestsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/learn" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Back to courses
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-black text-[#D97706]">
              Test Prep
            </span>

            <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
              French for Canadian Tests
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#526173]">
              Prepare for the tests that matter in Canada — whether you want a federal government job or a path to permanent residence.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">2</p>
                <p className="mt-1 text-xs text-[#526173]">Units</p>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">6</p>
                <p className="mt-1 text-xs text-[#526173]">Lessons</p>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">Free</p>
                <p className="mt-1 text-xs text-[#526173]">Always</p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-[#0B1F3A] p-5 text-white">
              <p className="text-sm font-bold text-[#C9A44C]">Course goal</p>
              <p className="mt-2 font-black leading-7">
                Walk into your test knowing the format, the scoring, and the strategies — so you don&apos;t lose marks to surprises.
              </p>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173] uppercase tracking-widest">The two tracks</p>
              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <p className="font-black text-[#0B1F3A]">Federal government jobs → SLE</p>
                  <p className="mt-0.5 text-[#526173]">Three tests (reading, writing, oral), graded A/B/C. Most bilingual positions require a BBB or CBC profile.</p>
                </div>
                <div className="border-t border-[#E7DAB9] pt-3">
                  <p className="font-black text-[#0B1F3A]">Immigration → TEF Canada or TCF Canada</p>
                  <p className="mt-0.5 text-[#526173]">Scores convert to CLB levels. Express Entry FSW requires CLB 7 minimum in all four skills.</p>
                </div>
              </div>
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
                    </Link>
                  ))}
                </div>

                <div className="mt-4 border-t border-[#E7DAB9] pt-4">
                  <Link
                    href={unit.testHref}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-black transition hover:-translate-y-0.5 ${unit.color} border border-current`}
                  >
                    Unit {unit.number} Test →
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
