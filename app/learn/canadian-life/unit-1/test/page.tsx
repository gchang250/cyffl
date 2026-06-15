import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "What is the Quebec French word for 'car'?",
    options: ["bagnole", "char", "carosse", "véhicule"],
    correct: 1,
    explanation: "'Char' is the Quebec French word for 'voiture' (car). It's derived from the old French word for chariot and is one of the most commonly used Quebec vocabulary differences.",
  },
  {
    question: "What does 'fin de semaine' mean?",
    options: ["end of the week (Monday)", "the weekend", "end of the month", "a holiday"],
    correct: 1,
    explanation: "'Fin de semaine' is the Quebec French expression for 'weekend.' In standard French, 'le weekend' (borrowed from English) is more common, but Quebec prefers its own term.",
  },
  {
    question: "Which expression means 'Don't give up!'?",
    options: ["C'est de valeur!", "Lâche pas!", "Wo là!", "Être game!"],
    correct: 1,
    explanation: "'Lâche pas!' is one of the most common encouragements in Quebec French. It literally means 'Don't let go!' and is equivalent to 'Hang in there!' or 'Keep at it!'",
  },
  {
    question: "What does 'avoir de la misère' mean?",
    options: [
      "To be very poor",
      "To be miserable",
      "To have difficulty / to struggle",
      "To be in trouble",
    ],
    correct: 2,
    explanation: "'Avoir de la misère' means to have difficulty or to struggle with something. Example: J'ai de la misère à comprendre cette leçon.: I'm struggling to understand this lesson.",
  },
  {
    question: "Which body enforces French language laws in Quebec and creates official French terminology?",
    options: [
      "L'Académie française",
      "Radio-Canada",
      "L'Office québécois de la langue française (OQLF)",
      "Le Conseil de la langue française",
    ],
    correct: 2,
    explanation: "The OQLF (Office québécois de la langue française) is the agency responsible for defining, promoting, and enforcing French in Quebec under the Charter of the French Language (Bill 101). It coined terms like 'courriel' for email.",
  },
  {
    question: "Which is Canada's only officially bilingual province?",
    options: ["Ontario", "Quebec", "Nova Scotia", "New Brunswick"],
    correct: 3,
    explanation: "New Brunswick is the only Canadian province with both English and French as official languages at the provincial level. About one third of its population is Acadian francophone.",
  },
  {
    question: "What does 'C'est de valeur' express?",
    options: [
      "That something is expensive",
      "That something is impressive",
      "That something is a shame / too bad",
      "That something is worth doing",
    ],
    correct: 2,
    explanation: "'C'est de valeur' is a common Quebec expression meaning 'that's a shame' or 'too bad.' Despite containing 'valeur' (value), it has nothing to do with monetary worth.",
  },
  {
    question: "Where is the largest francophone community in western Canada?",
    options: [
      "Vancouver, British Columbia",
      "Saint-Boniface in Winnipeg, Manitoba",
      "Calgary, Alberta",
      "Saskatoon, Saskatchewan",
    ],
    correct: 1,
    explanation: "Saint-Boniface, a neighbourhood in Winnipeg, Manitoba, is the largest francophone community west of Ontario. It has its own university (Université de Saint-Boniface) and a strong Franco-Manitoban cultural identity.",
  },
  {
    question: "In Quebec French, what does 'être chaud(e)' mean?",
    options: ["To be warm", "To be drunk", "To be in trouble", "To be excited"],
    correct: 1,
    explanation: "In Quebec French, 'être chaud(e)' means to be drunk: a false friend compared to standard French, where it simply means to be warm or hot. Context is key.",
  },
  {
    question: "What is 'le Grand Dérangement' in Acadian history?",
    options: [
      "The founding of the French colony in Quebec in 1608",
      "The forced expulsion of Acadians by the British between 1755 and 1763",
      "The passage of Bill 101 in Quebec in 1977",
      "The official recognition of Acadian French in New Brunswick",
    ],
    correct: 1,
    explanation: "Le Grand Dérangement (the Great Expulsion) refers to the British expulsion of the Acadian people from the Maritimes between 1755 and 1763. It is a defining event in Acadian history and helps explain why Acadian French developed separately from Quebec French.",
  },
];

export default function Unit1TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life/unit-1/lesson-4" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← Back to Lesson 4
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#B91C1C]">Unit 1 · Test</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Quebec French</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              10 questions covering all four lessons of Unit 1: Quebec vocabulary, Quebec expressions, Quebec French in context, and regional French across Canada.
            </p>
          </div>

          <div className="rounded-2xl border border-[#FEF2F2] bg-[#FEF2F2] p-5">
            <p className="text-sm font-black text-[#B91C1C]">Unit 1 covers</p>
            <ul className="mt-3 space-y-2 text-sm text-[#0B1F3A]">
              {[
                "Quebec Vocabulary",
                "Quebec Expressions",
                "Quebec French in Context",
                "Regional French Across Canada",
              ].map((item, i) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#B91C1C] text-xs font-black text-white">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 1 test" />
        </div>

        <div className="mt-12 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-lg font-black">Ready for Unit 2?</p>
          <p className="mt-2 text-[#526173]">Unit 2 covers the French you need for Canadian government and official documents — healthcare cards, tax returns, government forms, and formal letters.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/canadian-life/unit-1/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/canadian-life/unit-2/lesson-1" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Start Unit 2 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
