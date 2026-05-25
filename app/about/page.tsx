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
      "Built by students who actually know what it feels like to struggle with school French, so we know what actually helps.",
  },
  {
    title: "Practical",
    description:
      "We focus on French you can use: in class, on exams, in conversation, and in life. Not just grammar for grammar's sake.",
  },
];

const stats = [
  {
    number: "~10%",
    label: "Outside Quebec",
    description:
      "Approximate share of youth bilingual in English and French outside Quebec.",
  },
  {
    number: "~70%",
    label: "Quebec",
    description:
      "Approximate share of youth bilingual in English and French in Quebec.",
  },
  {
    number: "~30%",
    label: "New Brunswick",
    description:
      "Approximate share of youth bilingual in English and French in Canada's only officially bilingual province.",
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
              reachable, not stressful.
            </p>
            <p className="mt-4 text-sm font-semibold text-[#C9A44C]">
              Open to students in Canada only.
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
                CYFFL was built because we saw a real gap in French learning
                across Canada. Students are expected to study French, but too
                many do not have access to support that feels simple,
                affordable, and made for them.
              </p>
              <p>
                According to Statistics Canada, English-French bilingualism
                among youth is much lower outside Quebec than inside Quebec.
                Outside Quebec, roughly 10% of youth are bilingual in English
                and French. In Quebec, that number is about 70%. In New
                Brunswick, Canada's only officially bilingual province, it is
                roughly 30%.
              </p>
              <p>
                That matters because Canada has two official languages at the
                federal level: English and French. If French is part of
                Canada's identity, education system, and public life, students
                should have better access to resources that help them actually
                learn it.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-16">
          <div className="rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-widest text-[#C9A44C]">
                The gap
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                French access is not equal across Canada.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#526173]">
                The numbers show why student-focused French support matters.
                Bilingualism is much higher in Quebec than in the rest of
                Canada, even though English and French are both official
                languages federally.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-[#E7DAB9] bg-[#FFFDF7] p-6"
                >
                  <p className="text-4xl font-black text-[#2563EB]">
                    {stat.number}
                  </p>
                  <p className="mt-2 font-black">{stat.label}</p>
                  <p className="mt-2 text-sm leading-6 text-[#526173]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#E7DAB9] bg-[#FFF8ED] p-5 text-sm leading-6 text-[#526173]">
              <span className="font-black text-[#0B1F3A]">Sources: </span>
              Statistics Canada language data and the Department of Justice
              Canada's explanation of official language rights in Canada.
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
                community builders. If you want to help, email us.
              </p>
            </div>
            <Link
              href="/volunteer"
              className="whitespace-nowrap rounded-full bg-[#D62828] px-7 py-3 text-center text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]"
            >
              Volunteer
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}