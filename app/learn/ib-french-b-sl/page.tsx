import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IB French B SL | CYFFL",
  description:
    "Free IB French B Standard Level course covering Paper 1, Paper 2, the Individual Oral, and all five core themes.",
};

const units = [
  {
    number: "01",
    title: "The Five Core Themes",
    description: "Each IB theme in its own lesson: guiding principle, recommended topics, key vocabulary, and guiding questions.",
    color: "bg-[#EFF6FF] text-[#2563EB]",
    testHref: "/learn/ib-french-b-sl/unit-1/test",
    lessons: [
      { title: "Identities", href: "/learn/ib-french-b-sl/unit-1/lesson-1" },
      { title: "Experiences", href: "/learn/ib-french-b-sl/unit-1/lesson-2" },
      { title: "Human Ingenuity", href: "/learn/ib-french-b-sl/unit-1/lesson-3" },
      { title: "Social Organisation", href: "/learn/ib-french-b-sl/unit-1/lesson-4" },
      { title: "Sharing the Planet", href: "/learn/ib-french-b-sl/unit-1/lesson-5" },
    ],
  },
  {
    number: "02",
    title: "Paper 2: Receptive Skills",
    description: "Reading and listening comprehension strategies, question types, and grammar for understanding complex texts.",
    color: "bg-[#FEF3C7] text-[#D97706]",
    testHref: "/learn/ib-french-b-sl/unit-2/test",
    lessons: [
      { title: "Reading Comprehension Strategies", href: "/learn/ib-french-b-sl/unit-2/lesson-1" },
      { title: "Grammar for Comprehension", href: "/learn/ib-french-b-sl/unit-2/lesson-2" },
      { title: "Listening Comprehension", href: "/learn/ib-french-b-sl/unit-2/lesson-3" },
    ],
  },
  {
    number: "03",
    title: "Paper 1: Written Production",
    description: "Text types, register, audience, writing conventions, connectors, and opinion phrases for the written paper.",
    color: "bg-[#F0FDF4] text-[#16A34A]",
    testHref: "/learn/ib-french-b-sl/unit-3/test",
    lessons: [
      { title: "Text Types & Format Conventions", href: "/learn/ib-french-b-sl/unit-3/lesson-1" },
      { title: "Register & Audience", href: "/learn/ib-french-b-sl/unit-3/lesson-2" },
      { title: "Writing Techniques & Connectors", href: "/learn/ib-french-b-sl/unit-3/lesson-3" },
    ],
  },
  {
    number: "04",
    title: "Individual Oral (IA)",
    description: "Oral structure, image description language, global issue discussion, and examiner interaction strategies.",
    color: "bg-[#FDF4FF] text-[#9333EA]",
    testHref: "/learn/ib-french-b-sl/unit-4/test",
    lessons: [
      { title: "Oral Structure & Preparation", href: "/learn/ib-french-b-sl/unit-4/lesson-1" },
      { title: "Describing Images", href: "/learn/ib-french-b-sl/unit-4/lesson-2" },
      { title: "Discussing Global Issues", href: "/learn/ib-french-b-sl/unit-4/lesson-3" },
    ],
  },
];

export default function IBFrenchBSLPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link
          href="/learn"
          className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]"
        >
          ← Back to courses
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="rounded-full bg-[#FDF4FF] px-3 py-1 text-xs font-black text-[#9333EA]">
              Advanced
            </span>

            <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
              IB French B SL
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#526173]">
              Prepare for all three IB French B Standard Level assessments: Paper 1
              (written production), Paper 2 (reading and listening), and the Individual
              Oral. Four units, fourteen lessons, four unit tests, all free.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">4</p>
                <p className="mt-1 text-xs text-[#526173]">Units</p>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">14</p>
                <p className="mt-1 text-xs text-[#526173]">Lessons</p>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">Free</p>
                <p className="mt-1 text-xs text-[#526173]">Always</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-sm font-bold text-[#C9A44C]">Course goal</p>
              <p className="mt-2 font-black leading-7">
                Score confidently on all three IB French B SL assessments.
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173] uppercase tracking-widest">Assessment breakdown</p>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-bold">Paper 1: Written Production</span>
                  <span className="text-[#526173]">25% · /30</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Paper 2A: Reading</span>
                  <span className="text-[#526173]">25% · /40</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Paper 2B: Listening</span>
                  <span className="text-[#526173]">25% · /25</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Individual Oral (IA)</span>
                  <span className="text-[#526173]">25% · /30</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {units.map((unit) => (
              <div
                key={unit.number}
                className="rounded-2xl border border-[#E7DAB9] bg-white p-6 shadow-sm"
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
