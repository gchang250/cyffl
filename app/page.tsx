import Link from "next/link";

const offerings = [
  {
    title: "Free Lessons",
    description:
      "Structured French courses you can work through at your own pace, no account, no paywall, no stress.",
    emoji: "📘",
    href: "/learn",
  },
  {
    title: "Tutoring",
    description:
      "One-on-one French support for homework, tests, speaking practice, and grammar questions, led by youth.",
    emoji: "💬",
    href: "/tutoring",
  },
  {
    title: "Study Resources",
    description:
      "Vocabulary lists, grammar guides, practice prompts, and exam tools you can use any time.",
    emoji: "✏️",
    href: "/resources",
  },
];

const steps = [
  {
    number: "01",
    title: "Pick your path",
    description:
      "Start from zero, brush up for school, or prep for advanced French, there is a course for where you are.",
  },
  {
    number: "02",
    title: "Learn and practise",
    description:
      "Short lessons, interactive exercises, and real examples so you actually remember what you study.",
  },
  {
    number: "03",
    title: "Use it for real",
    description:
      "Build the confidence to use French in class, on exams, in conversation, and beyond.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-[1.1fr_0.9fr] md:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7DAB9] bg-white px-4 py-1.5 text-sm font-semibold text-[#526173]">
            <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
            Youth-led · Free · Built for Canadian students
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            French for Canada's next generation.
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-8 text-[#526173]">
            We make French less intimidating. Free lessons, tutoring, and
            resources made by Canadian youth, for Canadian youth.
          </p>
          <p className="mt-3 max-w-lg text-sm text-[#C9A44C] font-semibold">
            CYFFL is open to students in Canada only.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/learn"
              className="rounded-full bg-[#2563EB] px-7 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
            >
              Start learning, it's free
            </Link>
            <Link
              href="/volunteer"
              className="rounded-full border border-[#C9A44C] bg-white px-7 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              Become a tutor
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-[#D62828]/10" />
          <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-full bg-[#2563EB]/10" />

          <div className="relative rounded-[2rem] border border-[#E7DAB9] bg-white p-6 shadow-xl">
            <div className="rounded-[1.5rem] bg-[#0B1F3A] p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
                Word of the day
              </p>
              <h2 className="mt-4 text-4xl font-black">Bonjour.</h2>
              <p className="mt-2 text-sm text-white/60">Hello.</p>
              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-white/70">Today's phrase</p>
                <p className="mt-1 text-xl font-black">Je peux apprendre.</p>
                <p className="mt-1 text-sm text-white/60">I can learn.</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-[#FFFDF7] p-3">
                <p className="text-xl font-black">Free</p>
                <p className="mt-0.5 text-xs text-[#526173]">Always</p>
              </div>
              <div className="rounded-2xl bg-[#FFFDF7] p-3">
                <p className="text-xl font-black">Youth</p>
                <p className="mt-0.5 text-xs text-[#526173]">Tutors</p>
              </div>
              <div className="rounded-2xl bg-[#FFFDF7] p-3">
                <p className="text-xl font-black">FR</p>
                <p className="mt-0.5 text-xs text-[#526173]">Practice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-y border-[#E7DAB9] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            French is an official language, it should feel reachable.
          </h2>
          <p className="text-lg leading-8 text-[#526173]">
            Plenty of Canadian students want to improve their French but find
            existing resources expensive, overwhelming, or just plain boring.
            CYFFL is here to fix that, practical lessons, real support, and
            zero cost.
          </p>
        </div>
      </section>

      {/* Offerings */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Everything you need in one place.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {offerings.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[1.75rem] border border-[#E7DAB9] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFFDF7] text-2xl">
                {item.emoji}
              </div>
              <h3 className="mt-5 text-xl font-black group-hover:text-[#2563EB]">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-[#526173]">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#0B1F3A] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            How it works.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-black text-[#C9A44C]">{step.number}</p>
                <h3 className="mt-4 text-xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Help make French click for students across Canada.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#526173]">
                CYFFL runs on volunteers. If you know French and want to teach,
                create resources, or help grow the community, we want you.
              </p>
            </div>
            <Link
              href="/volunteer"
              className="rounded-full bg-[#D62828] px-7 py-3 text-center text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C] whitespace-nowrap"
            >
              Join as a volunteer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
