import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "French for Canadian Tests | CYFFL",
  description:
    "Build the French you need for the SLE (federal government bilingual jobs) and TEF Canada (Express Entry and immigration). Government vocabulary, formal grammar, and all four TEF Canada skills.",
};

const units = [
  {
    number: "01",
    title: "SLE: Federal Government Jobs",
    description:
      "The SLE has three tests: reading (60 MCQ), written expression (65 MCQ: fill-in-blank and error identification), and oral interaction (20 to 40 min conversational interview). Build the vocabulary, grammar, and strategies for all three.",
    color: "bg-[#FEF3C7] text-[#D97706]",
    testHref: "/learn/canadian-french-tests/unit-1/test",
    resource: { label: "PSC self-assessment tests ↗", url: "https://www.canada.ca/en/public-service-commission/services/second-language-testing-public-service/self-assessment-tests.html" },
    lessons: [
      { title: "Government Vocabulary", href: "/learn/canadian-french-tests/unit-1/lesson-1" },
      { title: "Formal Grammar: Government French", href: "/learn/canadian-french-tests/unit-1/lesson-2" },
      { title: "Written Expression: Fill-in-Blank and Error Identification", href: "/learn/canadian-french-tests/unit-1/lesson-3" },
      { title: "Reading Comprehension: Government Texts", href: "/learn/canadian-french-tests/unit-1/lesson-4" },
      { title: "Oral Interaction: Interview Strategies", href: "/learn/canadian-french-tests/unit-1/lesson-5" },
    ],
  },
  {
    number: "02",
    title: "TEF Canada: Immigration",
    description:
      "TEF Canada tests four skills: reading (40 MCQ, 1 hr), listening (40 MCQ, 40 min, no going back), writing (continue an article plus argue a viewpoint), and speaking (information-gathering conversation plus persuasive presentation).",
    color: "bg-[#EFF6FF] text-[#2563EB]",
    testHref: "/learn/canadian-french-tests/unit-2/test",
    resource: { label: "TEF Canada official site ↗", url: "https://www.lefrancaisdesaffaires.fr/en/candidate/test-evaluation-francais/tef-canada/" },
    lessons: [
      { title: "Topic Vocabulary: Environment, Society, Technology, Health", href: "/learn/canadian-french-tests/unit-2/lesson-1" },
      { title: "Opinion & Argument Phrases", href: "/learn/canadian-french-tests/unit-2/lesson-2" },
      { title: "Written Expression: Sections A and B", href: "/learn/canadian-french-tests/unit-2/lesson-3" },
      { title: "Listening Comprehension: Strategies and Question Types", href: "/learn/canadian-french-tests/unit-2/lesson-4" },
      { title: "Oral Expression: Information Gathering and Persuasion", href: "/learn/canadian-french-tests/unit-2/lesson-5" },
    ],
  },
];

export default function CanadianFrenchTestsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/learn" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
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
              Build the French you need to pass the SLE (federal government bilingual jobs) or TEF Canada (Express Entry and permanent residence). Vocabulary, grammar, and strategies for every section of each test.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">2</p>
                <p className="mt-1 text-xs text-[#526173]">Units</p>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">10</p>
                <p className="mt-1 text-xs text-[#526173]">Lessons</p>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">Free</p>
                <p className="mt-1 text-xs text-[#526173]">Always</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-sm font-bold text-[#C9A44C]">What you&apos;ll build</p>
              <div className="mt-2 space-y-1 text-sm text-white/80">
                <p>Government vocabulary and collocations (SLE)</p>
                <p>Passive voice, nominalization, relative pronouns (SLE)</p>
                <p>Fill-in-blank and error identification skills (SLE writing)</p>
                <p>Reading government texts under time pressure (SLE)</p>
                <p>Topic vocabulary across TEF Canada themes</p>
                <p>Argumentation and opinion phrases (TEF writing & oral)</p>
                <p>Note-taking and listening strategies (TEF)</p>
                <p>Information-gathering and persuasion in French (TEF oral)</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173] uppercase tracking-widest">The two tests</p>
              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <p className="font-black text-[#0B1F3A]">SLE: federal bilingual jobs (PSC)</p>
                  <p className="mt-0.5 text-[#526173]">Reading (60 MCQ, 90 min) · Writing (65 MCQ, 90 min) · Oral (20–40 min interview). Graded A/B/C. Most positions require BBB or CBC profile.</p>
                </div>
                <div className="border-t border-[#E7DAB9] pt-3">
                  <p className="font-black text-[#0B1F3A]">TEF Canada: immigration (IRCC)</p>
                  <p className="mt-0.5 text-[#526173]">Reading (40 MCQ, 1 hr) · Listening (40 MCQ, 40 min) · Writing (2 tasks, 1 hr) · Speaking (2 tasks, 15 min). Scores convert to CLB levels. Express Entry minimum: CLB 7 in all four skills.</p>
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
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E7DAB9] text-xs font-black text-[#526173]">
                        {li + 1}
                      </span>
                      {lesson.title}
                    </Link>
                  ))}
                </div>

                <div className="mt-4 border-t border-[#E7DAB9] pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href={unit.testHref}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-black transition hover:-translate-y-0.5 ${unit.color} border border-current`}
                  >
                    Unit {unit.number} Test →
                  </Link>
                  <a
                    href={unit.resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black text-[#526173] hover:text-[#0B1F3A] transition"
                  >
                    {unit.resource.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
