import Link from "next/link";

const values = [
  {
    title: "Canadian",
    description:
      "We teach the French that actually comes up in Canada: Quebec expressions, government forms, bilingual job postings, university applications. Not just classroom grammar.",
  },
  {
    title: "Accessible",
    description:
      "No paywalls, no sign-ups, no barriers. Everything CYFFL builds is free and available to any Canadian student.",
  },
  {
    title: "Youth-led",
    description:
      "Built by students who actually know what it feels like to struggle with French in Canada, so we build what actually helps.",
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
                className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5"
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

          <div className="rounded-2xl bg-[#0B1F3A] p-8 text-white">
            <p className="text-sm font-bold text-[#C9A44C]">Our mission</p>
            <p className="mt-4 text-3xl font-black leading-tight">
              French built for Canadian life.
            </p>
            <p className="mt-5 leading-7 text-white/70">
              Generic apps teach you to order a coffee. We teach you to navigate
              a Quebec government form, read a bilingual job posting, and
              understand why Quebecers say <em>fin de semaine</em> instead of
              <em> weekend</em>. Canada-specific, always free.
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
                CYFFL was built around a simple observation: most French
                learning resources were not made for Canada. Textbooks teach
                European French. Apps teach tourist French. Neither teaches you
                to navigate a Quebec healthcare form, decode a bilingual job
                posting, or understand what a Quebecer means when they say
                something is <em>pas pire</em>.
              </p>
              <p>
                That gap matters. Canada has two official languages, and French
                opens real doors: federal jobs, Quebec universities, bilingual
                workplaces, and the ability to participate in half the country's
                public life. According to Statistics Canada, English-French
                bilingualism among youth is far lower outside Quebec (roughly
                10%) than inside it (roughly 70%). Better resources close
                that gap.
              </p>
              <p>
                So we built the course we wished existed: one that starts with
                grammar fundamentals but ends with the French you actually need
                in Canada. Quebec expressions, government vocabulary, workplace
                French, university applications. All of it, free.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-16">
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
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
                  className="rounded-2xl border border-[#E7DAB9] bg-[#FFFDF7] p-6"
                >
                  <p className="text-4xl font-black text-[#D62828]">
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
                className="rounded-2xl border border-[#E7DAB9] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black">{v.title}</h3>
                <p className="mt-3 leading-7 text-[#526173]">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm md:p-12">
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