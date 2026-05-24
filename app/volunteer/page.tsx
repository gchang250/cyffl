import Link from "next/link";

const roles = [
  {
    title: "French Tutor",
    description:
      "Work one-on-one or in small groups with students who need help with school French, beginner grammar, or speaking practice.",
    commitment: "1–2 hours/week",
  },
  {
    title: "Content Creator",
    description:
      "Help write lessons, vocabulary lists, grammar guides, and practice prompts that students can use for free.",
    commitment: "Flexible",
  },
  {
    title: "Community Outreach",
    description:
      "Help spread the word about CYFFL to schools, community centres, and students who could benefit from free French support.",
    commitment: "Flexible",
  },
];

const requirements = [
  "At least 13 years old",
  "Strong conversational or written French",
  "Comfortable communicating with students",
  "Reliable and responsible",
  "High school student, post-secondary student, or young adult",
];

const faqs = [
  {
    q: "Do I need teaching experience?",
    a: "No formal teaching experience is required. CYFFL is youth-led, we value enthusiasm, patience, and a genuine interest in helping others learn French.",
  },
  {
    q: "How much time does volunteering take?",
    a: "It depends on the role. Tutoring typically requires 1–2 hours per week. Content and outreach roles are more flexible.",
  },
  {
    q: "Is this open to students outside Canada?",
    a: "CYFFL is focused on supporting Canadian students, but volunteers from anywhere are welcome as long as they can communicate effectively in French.",
  },
];

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-[#FFF8ED] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A44C]">
              Volunteer with CYFFL
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Help students learn French.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526173]">
              CYFFL is built by young people, for young people. If you have
              strong French skills and want to make a difference, we would love
              to have you on the team.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://docs.google.com/forms/d/1QJOBFTuc0_pKFZeTnEapvB7ANERUBy9MAyzpvhNErl4/viewform"
                className="rounded-full bg-[#D62828] px-7 py-3 text-center text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]"
              >
                Apply now
              </a>

              <Link
                href="/about"
                className="rounded-full border border-[#C9A44C] bg-white px-7 py-3 text-center text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
              >
                Learn About CYFFL
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A44C]">
              Why volunteer?
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Strengthen your own French through teaching",
                "Build leadership and communication skills",
                "Contribute to a meaningful community initiative",
                "Gain volunteer hours for school or applications",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-[#C9A44C]" />
                  <span className="leading-7 text-white/80">{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-white/50">
              canadianyouthffl@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E7DAB9] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A44C]">
            Volunteer roles
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
            Find the role that fits you.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-[1.75rem] border border-[#E7DAB9] bg-[#FFF8ED] p-6 shadow-sm"
              >
                <h3 className="text-xl font-black">{role.title}</h3>

                <p className="mt-3 leading-7 text-[#526173]">
                  {role.description}
                </p>

                <p className="mt-5 text-sm font-bold text-[#C9A44C]">
                  {role.commitment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A44C]">
              What we look for
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Basic requirements.
            </h2>

            <ul className="mt-8 space-y-4">
              {requirements.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-3 rounded-2xl border border-[#E7DAB9] bg-white px-5 py-4 shadow-sm"
                >
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-[#2563EB]" />
                  <span className="font-semibold">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A44C]">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Common questions.
            </h2>

            <div className="mt-8 space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-[1.5rem] border border-[#E7DAB9] bg-white p-6 shadow-sm"
                >
                  <p className="font-black">{faq.q}</p>
                  <p className="mt-3 leading-7 text-[#526173]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A44C]">
                Ready to join?
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Apply to volunteer with CYFFL.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-white/70">
                Fill out the application form, it only takes a few minutes. We'll
                be in touch once we've reviewed it.
              </p>
            </div>

            <a
              href="https://docs.google.com/forms/d/1QJOBFTuc0_pKFZeTnEapvB7ANERUBy9MAyzpvhNErl4/viewform"
              className="rounded-full bg-[#D62828] px-7 py-3 text-center text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]"
            >
              Apply now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
