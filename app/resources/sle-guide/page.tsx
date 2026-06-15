import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SLE Guide | CYFFL Resources",
  description:
    "Quick reference for the Second Language Evaluation (SLE): format, A/B/C levels, language profiles, test strategies, and how to prepare for federal government bilingual positions.",
};

const tests = [
  {
    name: "Reading Comprehension",
    french: "Compréhension de l'écrit",
    format: "Multiple choice",
    texts: "Government memos, briefing notes, policies, and reports",
    strategy: "Read the question first, then scan the text for the relevant section. Eliminate wrong options before committing.",
    tip: "Practice by reading real federal documents in French on canada.ca.",
    color: "bg-[#EFF6FF] text-[#2563EB]",
  },
  {
    name: "Writing",
    french: "Expression écrite",
    format: "Two parts: editing + production",
    texts: "Part A: edit a document for errors · Part B: write a memo, email, or briefing note from scratch",
    strategy: "Read the Part B scenario carefully: your role, your recipient, your purpose. Use formal register throughout. Plan before you write.",
    tip: "Practice writing memos and formal emails in French. Learn standard government opening and closing formulas.",
    color: "bg-[#FEF3C7] text-[#D97706]",
  },
  {
    name: "Oral Interaction",
    french: "Interaction orale",
    format: "Live assessment with a trained evaluator",
    texts: "Tasks: monologue on a topic, role play (workplace scenario), interactive discussion",
    strategy: "Clarity matters more than perfection. Acknowledge different perspectives, develop your ideas, and maintain your position when challenged.",
    tip: "Practice daily by speaking on work topics out loud. Record yourself to identify hesitation patterns.",
    color: "bg-[#F0FDF4] text-[#16A34A]",
  },
];

const profiles = [
  { profile: "BBB", description: "Most common bilingual position requirement. Intermediate in all three tests.", roles: "Administrative positions, analysts, project officers" },
  { profile: "CBC", description: "C in reading, B in writing, C in oral interaction. Higher requirement for supervisory roles.", roles: "Team leaders, managers, directors" },
  { profile: "CCC", description: "Advanced in all three tests. Required for senior and specialized roles.", roles: "Senior policy advisors, translation roles, senior leadership" },
  { profile: "Exempt", description: "French is the employee's first language or proficiency is already confirmed. No SLE required.", roles: "Native French speakers or previously tested employees" },
];

const writingPhrases = [
  { label: "Formal opening", examples: ["Suite à notre échange du [date], je vous informe que…", "Je vous écris afin de vous informer de…", "En réponse à votre demande du [date], je vous transmets…"] },
  { label: "Adding a point", examples: ["De plus, il importe de souligner que…", "Par ailleurs, il convient de noter que…", "En outre, nous souhaitons vous informer que…"] },
  { label: "Drawing a conclusion", examples: ["Par conséquent, nous recommandons que…", "Ainsi, il est proposé de…", "À la lumière de ce qui précède, nous suggérons…"] },
  { label: "Formal closing", examples: ["Je demeure à votre disposition pour tout renseignement complémentaire.", "Dans l'attente de votre réponse, je vous prie d'agréer mes salutations distinguées.", "Veuillez agréer l'expression de mes sentiments les meilleurs."] },
];

export default function SLEGuidePage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/resources" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← Resources
        </Link>

        <div className="mt-8 max-w-3xl">
          <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-black text-[#D97706]">
            Government Jobs
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            SLE Quick Reference
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#526173]">
            The Second Language Evaluation (SLE) is the federal government&apos;s French proficiency test for bilingual positions. Three separate tests: reading, writing, and oral interaction: each graded A, B, or C.
          </p>
        </div>

        {/* Test formats */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">The three tests</h2>
          <p className="mt-2 text-[#526173]">Administered by the Public Service Commission (PSC). Each test is graded independently — your job posting tells you what profile you need.</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {tests.map((test) => (
              <div key={test.name} className="flex flex-col rounded-2xl border border-[#E7DAB9] bg-white shadow-sm overflow-hidden">
                <div className="bg-[#0B1F3A] px-6 py-5">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-black ${test.color}`}>{test.name}</span>
                  <h3 className="mt-2 text-lg font-black text-white">{test.french}</h3>
                  <p className="mt-1 text-sm text-white/60">{test.format}</p>
                </div>
                <div className="flex flex-1 flex-col p-6 space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#526173]">What you&apos;ll see</p>
                    <p className="mt-1 text-sm leading-6 text-[#526173]">{test.texts}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#526173]">Strategy</p>
                    <p className="mt-1 text-sm leading-6 text-[#526173]">{test.strategy}</p>
                  </div>
                  <div className="mt-auto rounded-xl bg-[#FFFDF7] px-4 py-3 text-sm italic text-[#526173]">
                    💡 {test.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Levels */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">Levels A, B, C</h2>
          <p className="mt-2 text-[#526173]">Each test is graded on the same three-level scale.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { level: "Niveau A", label: "Basic", color: "bg-[#FEE2E2] text-[#B91C1C]", desc: "Can communicate in familiar, concrete situations. Understands short, simple administrative texts. The lowest passing level.", examples: "Short routine memos, basic instructions, straightforward policies" },
              { level: "Niveau B", label: "Intermediate", color: "bg-[#FEF3C7] text-[#D97706]", desc: "Can understand and produce most government texts and workplace conversations. The most common requirement.", examples: "Briefing notes, reports, professional emails, routine workplace discussions" },
              { level: "Niveau C", label: "Advanced", color: "bg-[#F0FDF4] text-[#16A34A]", desc: "Full professional proficiency. Handles complex, abstract, and specialized texts and conversations with ease.", examples: "Complex policy documents, nuanced debate, technical reports, strategic discussions" },
            ].map((l) => (
              <div key={l.level} className="rounded-2xl border border-[#E7DAB9] bg-white p-5 shadow-sm">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-black ${l.color}`}>{l.level} — {l.label}</span>
                <p className="mt-3 text-sm leading-6 text-[#526173]">{l.desc}</p>
                <p className="mt-3 text-xs italic text-[#526173]">Examples: {l.examples}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Language profiles */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">Language profiles</h2>
          <p className="mt-2 text-[#526173]">
            The profile in a job posting is a three-letter code in the order: <strong>Reading / Writing / Oral Interaction</strong>.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {profiles.map((p) => (
              <div key={p.profile} className="rounded-2xl border border-[#E7DAB9] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#0B1F3A] px-4 py-1.5 text-sm font-black text-white">{p.profile}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#526173]">{p.description}</p>
                <p className="mt-2 text-xs font-bold text-[#526173]">Typical roles: <span className="font-normal">{p.roles}</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* Writing phrases */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">Government writing phrases</h2>
          <p className="mt-2 text-[#526173]">
            Essential formulas for the SLE writing test (Part B). Examiners reward appropriate register: these phrases signal professional government French.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {writingPhrases.map((section) => (
              <div key={section.label} className="rounded-2xl border border-[#E7DAB9] bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]">{section.label}</p>
                <ul className="mt-3 space-y-2">
                  {section.examples.map((ex) => (
                    <li key={ex} className="rounded-xl bg-[#FFFDF7] px-3 py-2 text-sm italic text-[#526173]">{ex}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Course link */}
        <section className="mt-16 rounded-2xl bg-[#0B1F3A] p-8 text-white shadow-sm">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xl font-black">Want the full interactive course?</p>
              <p className="mt-2 text-white/70">
                The French for Canadian Tests course covers the SLE in depth: format, levels, reading strategies, writing and oral preparation.
              </p>
            </div>
            <Link
              href="/learn/canadian-french-tests"
              className="whitespace-nowrap rounded-full bg-[#C9A44C] px-6 py-3 text-center text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5"
            >
              Start the course →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
