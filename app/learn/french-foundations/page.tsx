import Link from "next/link";

const units = [
  {
    number: "01",
    title: "First Words",
    description: "Greetings, introductions, and basic conversation starters.",
    color: "bg-[#EFF6FF] text-[#2563EB]",
    testHref: "/learn/french-foundations/unit-1/test",
    lessons: [
      { title: "Greetings", href: "/learn/french-foundations/unit-1/lesson-1" },
      { title: "Introducing Yourself", href: "/learn/french-foundations/unit-1/lesson-2" },
      { title: "How Are You?", href: "/learn/french-foundations/unit-1/lesson-3" },
    ],
  },
  {
    number: "02",
    title: "Building Sentences",
    description: "Subject pronouns, être, avoir, and simple sentence structure.",
    color: "bg-[#FEF3C7] text-[#D97706]",
    testHref: "/learn/french-foundations/unit-2/test",
    lessons: [
      { title: "Subject Pronouns", href: "/learn/french-foundations/unit-2/lesson-1" },
      { title: "Être: To Be", href: "/learn/french-foundations/unit-2/lesson-2" },
      { title: "Avoir: To Have", href: "/learn/french-foundations/unit-2/lesson-3" },
      { title: "Simple Sentences", href: "/learn/french-foundations/unit-2/lesson-4" },
    ],
  },
  {
    number: "03",
    title: "Everyday French",
    description: "Numbers, days, family vocabulary, and expressing what you like.",
    color: "bg-[#F0FDF4] text-[#16A34A]",
    testHref: "/learn/french-foundations/unit-3/test",
    lessons: [
      { title: "Numbers 1–20", href: "/learn/french-foundations/unit-3/lesson-1" },
      { title: "Days & Months", href: "/learn/french-foundations/unit-3/lesson-2" },
      { title: "Family", href: "/learn/french-foundations/unit-3/lesson-3" },
      { title: "Likes & Dislikes", href: "/learn/french-foundations/unit-3/lesson-4" },
    ],
  },
  {
    number: "04",
    title: "Describing Things",
    description: "Colors, adjectives, regular -er verbs, and asking questions.",
    color: "bg-[#FEF9C3] text-[#854D0E]",
    testHref: "/learn/french-foundations/unit-4/test",
    lessons: [
      { title: "Colors", href: "/learn/french-foundations/unit-4/lesson-1" },
      { title: "Adjectives", href: "/learn/french-foundations/unit-4/lesson-2" },
      { title: "Regular -er Verbs", href: "/learn/french-foundations/unit-4/lesson-3" },
      { title: "Asking Questions", href: "/learn/french-foundations/unit-4/lesson-4" },
    ],
  },
  {
    number: "05",
    title: "Daily Life",
    description: "Food and drink, school subjects, telling time, and getting around.",
    color: "bg-[#FCE7F3] text-[#9D174D]",
    testHref: "/learn/french-foundations/unit-5/test",
    lessons: [
      { title: "Food & Drink", href: "/learn/french-foundations/unit-5/lesson-1" },
      { title: "At School", href: "/learn/french-foundations/unit-5/lesson-2" },
      { title: "Telling Time", href: "/learn/french-foundations/unit-5/lesson-3" },
      { title: "Going Places", href: "/learn/french-foundations/unit-5/lesson-4" },
    ],
  },
  {
    number: "06",
    title: "Talking About the Past",
    description: "The passé composé with avoir and être, irregular past participles, and time expressions.",
    color: "bg-[#EDE9FE] text-[#7C3AED]",
    testHref: "/learn/french-foundations/unit-6/test",
    lessons: [
      { title: "Passé Composé with avoir", href: "/learn/french-foundations/unit-6/lesson-1" },
      { title: "Passé Composé with être", href: "/learn/french-foundations/unit-6/lesson-2" },
      { title: "Irregular Past Participles", href: "/learn/french-foundations/unit-6/lesson-3" },
      { title: "Talking About Yesterday", href: "/learn/french-foundations/unit-6/lesson-4" },
    ],
  },
  {
    number: "07",
    title: "Common Irregular Verbs",
    description: "Faire, pouvoir, vouloir, devoir, savoir, venir, prendre — the verbs you need most.",
    color: "bg-[#FFE4E6] text-[#BE123C]",
    testHref: "/learn/french-foundations/unit-7/test",
    lessons: [
      { title: "Faire, Pouvoir, Vouloir", href: "/learn/french-foundations/unit-7/lesson-1" },
      { title: "Devoir, Savoir, Connaître", href: "/learn/french-foundations/unit-7/lesson-2" },
      { title: "Venir, Prendre, Partir", href: "/learn/french-foundations/unit-7/lesson-3" },
      { title: "Putting It All Together", href: "/learn/french-foundations/unit-7/lesson-4" },
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
              New to French? This is your starting point. Seven units, twenty-seven
              lessons, and a unit test after each unit to make sure everything sticks.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">7</p>
                <p className="mt-1 text-xs text-[#526173]">Units</p>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="text-2xl font-black">27</p>
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
