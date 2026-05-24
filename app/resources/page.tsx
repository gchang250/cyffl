import Link from "next/link";

const categories = [
  {
    title: "Vocabulary",
    color: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
    items: [
      { label: "Beginner word lists", description: "Common nouns, verbs, and adjectives — organized by theme." },
      { label: "School vocabulary", description: "Words you actually use in French class every day." },
      { label: "Family & people", description: "Words for describing the people in your life." },
      { label: "Numbers & time", description: "Counting, telling the time, and calendar vocabulary." },
    ],
  },
  {
    title: "Grammar",
    color: "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]",
    items: [
      { label: "Être & avoir explained", description: "The two verbs that show up everywhere — demystified." },
      { label: "Subject pronouns", description: "Je, tu, il, elle, nous, vous, ils, elles — with context." },
      { label: "Regular -er verbs", description: "The most common verb pattern in French, with examples." },
      { label: "Negation (ne…pas)", description: "How to say 'no,' 'not,' and 'don't' in French." },
    ],
  },
  {
    title: "Practice & Exam Prep",
    color: "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]",
    items: [
      { label: "Speaking prompts", description: "Topics and questions to practise speaking out loud." },
      { label: "Reading comprehension", description: "Short French texts with comprehension questions." },
      { label: "IB French B prep", description: "Tips and strategies for Paper 1 and the individual oral." },
      { label: "Study tips for French", description: "How to actually build vocabulary and make it stick." },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-black tracking-tight md:text-6xl">
            Free resources for French students.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#526173]">
            Vocabulary lists, grammar guides, practice prompts, and exam prep —
            all organized and free to use. More resources are added as the
            project grows.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {categories.map((cat) => (
            <div key={cat.title}>
              <span className={`inline-block rounded-full border px-3 py-1 text-sm font-black ${cat.color}`}>
                {cat.title}
              </span>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {cat.items.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#E7DAB9] bg-white p-5 shadow-sm"
                  >
                    <p className="font-black">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-[#526173]">
                      {item.description}
                    </p>
                    <p className="mt-3 text-xs font-bold text-[#C9A44C]">
                      Coming soon
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Suggest */}
        <div className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xl font-black">
                Need something that isn't here yet?
              </p>
              <p className="mt-2 text-[#526173]">
                Email us and let us know what resources would help you most.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-[#0B1F3A] px-6 py-3 text-center text-sm font-black text-white transition hover:-translate-y-0.5"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Start learning nudge */}
        <div className="mt-6 rounded-[2rem] border border-[#E7DAB9] bg-[#0B1F3A] p-8 shadow-sm text-white">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xl font-black">
                Ready to use what you've learned?
              </p>
              <p className="mt-2 text-white/70">
                The French Foundations course is fully interactive and ready to go.
              </p>
            </div>
            <Link
              href="/learn/french-foundations"
              className="rounded-full bg-[#2563EB] px-6 py-3 text-center text-sm font-black text-white transition hover:-translate-y-0.5 whitespace-nowrap"
            >
              Start the course
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
