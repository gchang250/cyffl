import Link from "next/link";

const values = [
  {
    title: "Accessible",
    description:
      "No paywalls, no sign-ups, no barriers. Everything CYFFL builds is free and available to any Canadian student.",
  },
  {
    title: "Youth-led",
    description:
      "Built by students who actually know what it feels like to struggle with school French — so we know what actually helps.",
  },
  {
    title: "Practical",
    description:
      "We focus on French you can use: in class, on exams, in conversation, and in life. Not just grammar for grammar's sake.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              About CYFFL.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#526173]">
              The Canadian Youth Foundation for French Literacy is a youth-led
              initiative making French learning more accessible for students
              across Canada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/learn"
                className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Start learning
              </Link>
              <Link
                href="/volunteer"
                className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
              >
                Volunteer
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#0B1F3A] p-8 text-white">
            <p className="text-sm font-bold text-[#C9A44C]">Our mission</p>
            <p className="mt-4 text-3xl font-black leading-tight">
              French for Canada's next generation.
            </p>
            <p className="mt-5 leading-7 text-white/70">
              Canada has two official languages. French is part of education,
              public life, and real opportunity. CYFFL exists to make it feel
              reachable — not stressful.
            </p>
          </div>
        </div>

        {/* Story */}
        <section className="mt-20 border-t border-[#E7DAB9] pt-16">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Why we built this.
            </h2>
            <div className="space-y-5 text-lg leading-8 text-[#526173]">
              <p>
                A lot of Canadian students grow up in multilingual households,
                attend French Immersion, or take Core French — but still don't
                feel confident actually using the language.
              </p>
              <p>
                Good French resources are either expensive, aimed at adult
                learners, or just plain boring for students. CYFFL was created to
                fill that gap: free, student-focused, and built by people who
                went through the same thing.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mt-20">
          <h2 className="text-3xl font-black tracking-tight">
            What we stand for.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-[1.75rem] border border-[#E7DAB9] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black">{v.title}</h3>
                <p className="mt-3 leading-7 text-[#526173]">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-black tracking-tight">
                Want to be part of it?
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-[#526173]">
                CYFFL is always looking for French tutors, content creators, and
                community builders. If you want to help — email us.
              </p>
            </div>
            <Link
              href="/volunteer"
              className="rounded-full bg-[#D62828] px-7 py-3 text-center text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C] whitespace-nowrap"
            >
              Volunteer
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
