import Link from "next/link";

type ResourceItem = {
  label: string;
  description: string;
  href: string;
  comingSoon?: boolean;
};

type ResourceCategory = {
  title: string;
  color: string;
  items: ResourceItem[];
};

const categories: ResourceCategory[] = [
  {
    title: "Canadian French",
    color: "bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]",
    items: [
      {
        label: "Quebec French essentials",
        description:
          "Fin de semaine, dépanneur, magasinage, tuque — the vocabulary and expressions that make Quebec French distinct.",
        href: "/resources/quebec-french",
      },
      {
        label: "Government & official French",
        description:
          "How to read bilingual forms, government vocabulary, and the French you need for healthcare, taxes, and official documents.",
        href: "/resources/government-french",
      },
      {
        label: "Workplace French",
        description:
          "Job posting vocabulary, cover letter phrases, workplace communication, and interview French for bilingual environments.",
        href: "/resources/workplace-french",
      },
    ],
  },
  {
    title: "Vocabulary",
    color: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
    items: [
      {
        label: "Beginner word lists",
        description:
          "Common nouns, verbs, and adjectives organized by theme: colors, numbers, days, and more.",
        href: "/resources/beginner-word-lists",
      },
      {
        label: "School vocabulary",
        description:
          "Subjects, classroom words, and useful phrases for French class every day.",
        href: "/resources/school-vocabulary",
      },
      {
        label: "Family & people",
        description:
          "Words for describing family members, friends, and personalities.",
        href: "/resources/family-people",
      },
      {
        label: "Numbers & time",
        description:
          "Counting 1–100, telling the time, and calendar vocabulary.",
        href: "/resources/numbers-time",
      },
    ],
  },
  {
    title: "Grammar",
    color: "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]",
    items: [
      {
        label: "Être & avoir explained",
        description:
          "The two verbs that appear everywhere, with conjugation tables, examples, and practice.",
        href: "/resources/etre-avoir",
      },
      {
        label: "Subject pronouns",
        description:
          "Je, tu, il, elle, nous, vous, ils, elles — when and how to use each one.",
        href: "/resources/subject-pronouns",
      },
      {
        label: "Regular -er verbs",
        description:
          "The most common verb pattern in French, with 20 verbs and conjugation practice.",
        href: "/resources/regular-er-verbs",
      },
      {
        label: "Negation (ne…pas)",
        description:
          "How to say no, not, never, and nothing — with common mistakes to avoid.",
        href: "/resources/negation",
      },
    ],
  },
  {
    title: "Verb Tenses",
    color: "bg-[#EDE9FE] text-[#7C3AED] border-[#DDD6FE]",
    items: [
      {
        label: "Le présent",
        description: "Present tense conjugation for regular and irregular verbs — the foundation of everything.",
        href: "/resources/verbs-present",
      },
      {
        label: "Le passé composé",
        description: "The most common past tense. How to form it, when to use avoir vs être, and irregular past participles.",
        href: "/resources/verbs-passe-compose",
      },
      {
        label: "L'imparfait",
        description: "The imperfect tense for descriptions, habits, and ongoing past actions. Includes passé composé vs imparfait.",
        href: "/resources/verbs-imparfait",
      },
      {
        label: "Le futur simple",
        description: "The simple future tense — conjugation, irregular stems, and when to use it.",
        href: "/resources/verbs-futur-simple",
      },
      {
        label: "Le futur antérieur",
        description: "The future perfect — talking about actions that will have been completed before another future event.",
        href: "/resources/verbs-futur-anterieur",
      },
      {
        label: "Le subjonctif",
        description: "The subjunctive mood — triggers, formation, and the most common irregular forms.",
        href: "/resources/verbs-subjonctif",
      },
      {
        label: "Le conditionnel",
        description: "The conditional mood for polite requests, hypotheticals, and if-then clauses.",
        href: "/resources/verbs-conditionnel",
      },
    ],
  },
  {
    title: "Expressions & Style",
    color: "bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]",
    items: [
      {
        label: "Connecting words",
        description:
          "En outre, par ailleurs, néanmoins, de surcroît — a full reference of connectors organized by function, with level labels from A1 to C1.",
        href: "/resources/connecting-words",
      },
      {
        label: "Idiomatic expressions",
        description:
          "Culturally French expressions for conversation and writing, from avoir le cafard to force est de constater — with examples and usage notes.",
        href: "/resources/expressions",
      },
    ],
  },
  {
    title: "Practice & Exam Prep",
    color: "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]",
    items: [
      {
        label: "Speaking prompts",
        description:
          "Curated questions and topics to practise French conversation out loud.",
        href: "/resources/speaking-prompts",
      },
      {
        label: "Reading comprehension",
        description:
          "Three short French texts at increasing difficulty, each with comprehension questions.",
        href: "/resources/reading-comprehension",
      },
      {
        label: "IB French B prep",
        description:
          "Assessment breakdown, exam tips, higher-band phrases, and the grammar resources that matter most for Paper 1, Paper 2, and the Individual Oral.",
        href: "/resources/ib-french-b-prep",
      },
      {
        label: "Study tips for French",
        description:
          "Proven strategies for vocabulary, grammar, speaking, and listening — and making it stick.",
        href: "/resources/study-tips",
      },
    ],
  },
  {
    title: "Canadian Test Prep",
    color: "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]",
    items: [
      {
        label: "SLE quick reference",
        description:
          "Second Language Evaluation guide for federal government bilingual jobs — the three tests, A/B/C levels, language profiles, and writing formulas.",
        href: "/resources/sle-guide",
      },
      {
        label: "TEF Canada guide",
        description:
          "TEF Canada and TCF Canada reference for immigration — CLB levels, Express Entry CRS points, section formats, and writing register guide.",
        href: "/resources/tef-canada-guide",
      },
    ],
  },
];

function ResourceCard({ item }: { item: ResourceItem }) {
  if (item.comingSoon) {
    return (
      <div className="flex flex-col rounded-2xl border border-[#E7DAB9] bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <p className="font-black text-[#0B1F3A]">{item.label}</p>
          <span className="shrink-0 rounded-full bg-[#FFF8ED] px-3 py-1 text-xs font-bold text-[#526173]">
            Coming soon
          </span>
        </div>
        <p className="mt-2 grow text-sm leading-6 text-[#526173]">
          {item.description}
        </p>
        <div className="mt-4 rounded-full border border-[#E7DAB9] px-5 py-2 text-center text-sm font-bold text-[#526173]">
          Not yet available
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className="group flex flex-col rounded-2xl border border-[#E7DAB9] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <p className="font-black group-hover:text-[#2563EB]">{item.label}</p>
      <p className="mt-2 grow text-sm leading-6 text-[#526173]">
        {item.description}
      </p>
      <p className="mt-3 text-xs font-bold text-[#2563EB]">Read →</p>
    </Link>
  );
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-black tracking-tight md:text-6xl">
            Free resources for French students.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#526173]">
            Vocabulary lists, grammar guides, verb tense references, and exam
            prep — all organized and free to use.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {categories.map((cat) => (
            <div key={cat.title}>
              <span
                className={`inline-block rounded-full border px-3 py-1 text-sm font-black ${cat.color}`}
              >
                {cat.title}
              </span>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {cat.items.map((item) => (
                  <ResourceCard key={item.label} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

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

        <div className="mt-6 rounded-[2rem] border border-[#E7DAB9] bg-[#0B1F3A] p-8 text-white shadow-sm">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xl font-black">
                Ready to use what you've learned?
              </p>
              <p className="mt-2 text-white/70">
                The French Foundations course is fully interactive and free to
                start right now.
              </p>
            </div>
            <Link
              href="/learn/french-foundations"
              className="whitespace-nowrap rounded-full bg-[#2563EB] px-6 py-3 text-center text-sm font-black text-white transition hover:-translate-y-0.5"
            >
              Start the course
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
