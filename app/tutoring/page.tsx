import Link from "next/link";

const canHelpWith = [
  "School French homework",
  "Grammar explanations",
  "Vocabulary building",
  "Speaking and pronunciation",
  "Test and exam preparation",
  "Confidence and conversation",
];

const howItWorks = [
  {
    step: "01",
    title: "Reach out",
    description: "Email us with your name, grade level, and what kind of support you're looking for.",
  },
  {
    step: "02",
    title: "Get matched",
    description: "We'll connect you with a volunteer tutor who fits your needs and schedule.",
  },
  {
    step: "03",
    title: "Start your sessions",
    description: "Sessions are free, flexible, and focused on what actually helps you.",
  },
];

export default function TutoringPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        {/* Hero */}
        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Free French tutoring.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#526173]">
              Youth-led, one-on-one French support — for students who want help
              with school French, grammar, speaking, or building confidence.
            </p>
            <a
              href="mailto:canadianyouthffl@gmail.com?subject=Tutoring%20Request"
              className="mt-8 inline-block rounded-full bg-[#2563EB] px-7 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
            >
              Request tutoring
            </a>
          </div>

          <div className="rounded-[2rem] bg-[#0B1F3A] p-7 text-white">
            <p className="text-sm font-bold text-[#C9A44C]">What tutors can help with</p>
            <ul className="mt-5 space-y-3">
              {canHelpWith.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A44C] text-xs font-black text-[#0B1F3A]">
                    ✓
                  </span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Status */}
        <div className="mt-12 rounded-2xl border border-[#FDE68A] bg-[#FEF3C7] p-5">
          <p className="font-black text-[#92400E]">📣 Coming soon</p>
          <p className="mt-2 leading-7 text-[#78350F]">
            CYFFL is currently building the volunteer tutor team and preparing
            the first tutoring intake. Email us to join the waitlist — we'll
            reach out as soon as sessions open.
          </p>
        </div>

        {/* How it works */}
        <section className="mt-16 border-t border-[#E7DAB9] pt-14">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            How it works.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {howItWorks.map((step) => (
              <div
                key={step.step}
                className="rounded-[1.75rem] border border-[#E7DAB9] bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black text-[#C9A44C]">{step.step}</p>
                <h3 className="mt-3 text-xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#526173]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* While you wait */}
        <section className="mt-16">
          <div className="rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xl font-black">
                  While you wait — learn on your own.
                </p>
                <p className="mt-2 leading-7 text-[#526173]">
                  The French Foundations course is available right now — free,
                  interactive, and designed for beginners.
                </p>
              </div>
              <Link
                href="/learn/french-foundations"
                className="rounded-full bg-[#2563EB] px-6 py-3 text-center text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 whitespace-nowrap"
              >
                Start the course
              </Link>
            </div>
          </div>
        </section>

        {/* Want to tutor */}
        <section className="mt-6">
          <div className="rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xl font-black">Want to be a tutor?</p>
                <p className="mt-2 leading-7 text-white/70">
                  If you're strong in French and want to help other students —
                  we're building the volunteer team right now.
                </p>
              </div>
              <Link
                href="/volunteer"
                className="rounded-full bg-[#C9A44C] px-6 py-3 text-center text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5 whitespace-nowrap"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
