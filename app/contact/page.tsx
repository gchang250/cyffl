const topics = [
  { label: "Partnership or collaboration", href: "mailto:canadianyouthffl@gmail.com?subject=Partnership" },
  { label: "Resource suggestion", href: "mailto:canadianyouthffl@gmail.com?subject=Resource%20Suggestion" },
  { label: "General question", href: "mailto:canadianyouthffl@gmail.com?subject=Question" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-5xl font-black tracking-tight md:text-6xl">
          Get in touch.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#526173]">
          Questions, partnership ideas, resource suggestions, or anything else,
          reach us by email.
        </p>

        {/* Email card */}
        <div className="mt-10 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm">
          <p className="text-sm font-bold text-[#C9A44C]">Email us at</p>
          <a
            href="mailto:canadianyouthffl@gmail.com"
            className="mt-3 block text-2xl font-black text-white transition hover:text-[#C9A44C]"
          >
            canadianyouthffl@gmail.com
          </a>
          <p className="mt-3 text-white/60 text-sm">
            We read every email and try to reply within a few days.
          </p>
        </div>

        {/* Quick links */}
        <div className="mt-10">
          <p className="font-black text-[#526173]">Reach out about:</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {topics.map((topic) => (
              <a
                key={topic.label}
                href={topic.href}
                className="flex items-center justify-between rounded-2xl border border-[#E7DAB9] bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="font-bold">{topic.label}</span>
                <span className="text-[#526173]">→</span>
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-[#526173]">
          CYFFL is a youth-led initiative run by volunteers. We're not always
          online in real time, email is the best way to reach us.
        </p>
      </section>
    </main>
  );
}
