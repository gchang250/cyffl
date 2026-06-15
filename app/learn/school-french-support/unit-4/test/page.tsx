import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "How do you form the imparfait stem of a verb?",
    options: [
      "Take the infinitive and remove -er/-ir/-re.",
      "Take the nous present form and remove -ons.",
      "Take the past participle as the stem.",
      "Take the je present form and remove -s.",
    ],
    correct: 1,
    explanation: "The imparfait stem comes from the nous present tense form with -ons removed: nous parlons → parl-, nous finissons → finiss-, nous buvons → buv-. Only être is irregular (ét-).",
  },
  {
    question: "What is the imparfait form of 'aller' for 'je'?",
    options: ["j'allé", "j'allais", "je suis allé", "j'ai allé"],
    correct: 1,
    explanation: "Aller: nous allons → stem all-. Add imparfait ending -ais for je: j'allais. Full conjugation: j'allais, tu allais, il allait, nous allions, vous alliez, ils allaient.",
  },
  {
    question: "Which verb has an irregular imparfait stem?",
    options: ["avoir", "faire", "aller", "être"],
    correct: 3,
    explanation: "Être is the only verb with an irregular imparfait stem: ét- (j'étais, tu étais, il était...). Avoir (av-), faire (fais-), and aller (all-) all follow the regular pattern from the nous form.",
  },
  {
    question: "Which sentence correctly uses the imparfait for a habitual action?",
    options: [
      "Chaque soir, il a regardé la télé.",
      "Chaque soir, il regardait la télé.",
      "Chaque soir, il va regarder la télé.",
      "Chaque soir, il a regarder la télé.",
    ],
    correct: 1,
    explanation: "'Chaque soir' signals a habitual, repeated past action: always imparfait. Il regardait la télé chaque soir = he used to watch TV every evening.",
  },
  {
    question: "When should you use the passé composé rather than the imparfait?",
    options: [
      "To describe an ongoing background state.",
      "To describe a habitual action in the past.",
      "To describe a specific, completed single event.",
      "To describe a mental or emotional state.",
    ],
    correct: 2,
    explanation: "The passé composé is used for specific, completed events with a defined start or end: hier, j'ai mangé une pizza. Habitual actions, states, and background descriptions all use the imparfait.",
  },
  {
    question: "Which time expression signals the imparfait?",
    options: ["soudain", "un jour", "autrefois", "puis"],
    correct: 2,
    explanation: "'Autrefois' (in the old days / formerly) signals habitual or ongoing past: imparfait. 'Soudain', 'un jour', and 'puis' all signal completed events: passé composé.",
  },
  {
    question: "In 'Il pleuvait quand je suis arrivé', what is the role of 'il pleuvait'?",
    options: [
      "It is the interrupting event.",
      "It is the background ongoing action.",
      "It is wrong: should be passé composé.",
      "It describes a habit.",
    ],
    correct: 1,
    explanation: "'Il pleuvait' (imparfait) is the ongoing background: the rain was the stage. 'Je suis arrivé' (passé composé) is the event: my arrival interrupted the background rain.",
  },
  {
    question: "Which sentence correctly opens a story using both tenses?",
    options: [
      "Un jour, il a fait beau et les oiseaux ont chanté, et soudain elle était tombée.",
      "Il était une fois une fille qui habitait près d'une forêt. Un jour, elle a trouvé une carte.",
      "Il était une fois et elle a trouvé une carte tous les jours.",
      "Soudain, il pleuvait et les oiseaux chantaient hier.",
    ],
    correct: 1,
    explanation: "Classic narrative structure: imparfait for scene-setting (il était une fois, habitait) + passé composé for the event that starts the story (elle a trouvé). The other options mix tenses incorrectly.",
  },
  {
    question: "What is the imparfait of 'faire' for 'nous'?",
    options: ["nous faisissions", "nous faisions", "nous fisions", "nous avons fait"],
    correct: 1,
    explanation: "Faire: nous faisons → stem fais-. Add -ions for nous: nous faisions. J'ai fait is passé composé, not imparfait.",
  },
  {
    question: "Which storytelling phrase introduces the conclusion of a narrative?",
    options: ["Il était une fois...", "Pendant que...", "Finalement, ...", "Quand j'étais jeune..."],
    correct: 2,
    explanation: "'Finalement' (finally) marks the concluding event: always followed by passé composé. 'Il était une fois' opens, 'pendant que' introduces background, and 'quand j'étais jeune' signals habitual past.",
  },
];

export default function Unit4TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support/unit-4/lesson-4" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← Back to Lesson 4
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#9D174D]">Unit 4 · Test</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Describing the Past</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              10 questions covering all four lessons of Unit 4: imparfait formation, its four uses, the contrast with the passé composé, and storytelling with both tenses together.
            </p>
          </div>

          <div className="rounded-2xl border border-[#FCE7F3] bg-[#FCE7F3] p-5">
            <p className="text-sm font-black text-[#9D174D]">Unit 4 covers</p>
            <ul className="mt-3 space-y-2 text-sm text-[#0B1F3A]">
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#9D174D] text-xs font-black text-white">1</span>
                L'imparfait Formation
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#9D174D] text-xs font-black text-white">2</span>
                Uses of L'imparfait
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#9D174D] text-xs font-black text-white">3</span>
                Passé Composé vs Imparfait
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#9D174D] text-xs font-black text-white">4</span>
                Telling a Story in French
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 4 test" />
        </div>

        <div className="mt-12 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 5?</p>
          <p className="mt-2 text-[#526173]">Unit 5 builds on everything you've learned so far, introducing the future tense and more advanced French grammar structures.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/school-french-support/unit-4/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/school-french-support/unit-5/lesson-1" className="rounded-full bg-[#9D174D] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#831843]">Start Unit 5 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
