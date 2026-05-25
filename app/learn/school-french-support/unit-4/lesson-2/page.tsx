import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "Quand j'étais jeune, j'habitais à Lyon.", back: "When I was young, I lived in Lyon. — ongoing background state", subtext: "Use 1: background description / ongoing state in the past." },
  { front: "Le soleil brillait et les oiseaux chantaient.", back: "The sun was shining and the birds were singing. — setting the scene", subtext: "Use 1: painting the background picture of a scene." },
  { front: "Chaque soir, elle lisait avant de dormir.", back: "Every evening she used to read before sleeping. — habit", subtext: "Use 2: repeated action or habit in the past." },
  { front: "Nous allions à l'église tous les dimanches.", back: "We used to go to church every Sunday. — routine", subtext: "Use 2: regular, habitual action in the past." },
  { front: "Il était triste ce jour-là.", back: "He was sad that day. — mental/emotional state", subtext: "Use 3: describing a feeling, emotion, or mental state." },
  { front: "J'avais faim et je me sentais fatiguée.", back: "I was hungry and I felt tired. — physical/emotional state", subtext: "Use 3: physical sensations and mental states use imparfait." },
  { front: "Si j'avais le temps, j'apprendrais la guitare.", back: "If I had the time, I would learn the guitar. — si clause", subtext: "Use 4: imparfait in si (if) clauses expressing a hypothetical." },
  { front: "Pendant qu'il dormait, le téléphone a sonné.", back: "While he was sleeping, the phone rang. — ongoing action interrupted", subtext: "Use 1 + passé composé: imparfait = background, PC = the interrupting event." },
];

const pairs = [
  { left: "Chaque été, nous nagions.", right: "Habitual/repeated action" },
  { left: "Elle était très contente.", right: "Emotional/mental state" },
  { left: "Il pleuvait et il faisait froid.", right: "Background description" },
  { left: "Tous les jours, il courait.", right: "Habitual/repeated action" },
  { left: "Si j'avais de l'argent...", right: "Hypothetical (si clause)" },
  { left: "Ils voulaient partir.", right: "Emotional/mental state" },
];

const exercises = [
  { before: "Quand il était petit, il", after: "souvent au foot. (jouer)", answer: "jouait", hint: "Repeated past action — imparfait: jouer → stem jou- → jouait", translation: "When he was little, he often played football." },
  { before: "Nous", after: "fatigués après le voyage. (être)", answer: "étions", hint: "Emotional/physical state — imparfait of être: nous étions", translation: "We were tired after the journey." },
  { before: "Elle", after: "à la bibliothèque tous les mercredis. (aller)", answer: "allait", hint: "Habitual action — imparfait: aller → stem all- → allait", translation: "She used to go to the library every Wednesday." },
  { before: "Si tu", after: "plus, tu réussirais. (travailler)", answer: "travaillais", hint: "Si clause — always imparfait: travailler → stem travaill- → travaillais", translation: "If you worked more, you would succeed." },
  { before: "Le ciel", after: "bleu et il", answer: "était, faisait", hint: "Background description — two states: être → était, faire → faisait", translation: "The sky was blue and it was (good weather)." },
];

const questions = [
  {
    question: "Which use of the imparfait describes a habitual past action?",
    options: [
      "Il avait faim. (He was hungry.)",
      "Chaque jour, il marchait. (Every day he walked.)",
      "Soudain, elle est tombée. (Suddenly she fell.)",
      "Si j'avais le temps... (If I had the time...)",
    ],
    correct: 1,
    explanation: "'Chaque jour, il marchait' expresses a repeated, habitual action — a classic use of the imparfait. Trigger words like chaque jour, tous les jours, souvent, toujours signal habit.",
  },
  {
    question: "Which sentence correctly uses the imparfait for a mental/emotional state?",
    options: [
      "J'ai été triste.",
      "J'étais triste.",
      "Je suis triste.",
      "J'ai eu triste.",
    ],
    correct: 1,
    explanation: "Mental and emotional states (happy, sad, tired, hungry, in love) are expressed with the imparfait: j'étais triste, il était amoureux, nous avions peur.",
  },
  {
    question: "What tense follows 'si' in a present hypothetical sentence?",
    options: ["passé composé", "présent", "imparfait", "futur"],
    correct: 2,
    explanation: "Present hypotheticals: Si + imparfait → conditionnel. Si j'avais le temps, je voyagerais. The si clause always uses imparfait, not conditionnel.",
  },
  {
    question: "Which word is a trigger for the imparfait?",
    options: ["soudain", "hier", "tout à coup", "autrefois"],
    correct: 3,
    explanation: "'Autrefois' (in the old days / formerly) signals habitual or ongoing past states — classic imparfait territory. 'Soudain', 'hier', and 'tout à coup' signal single completed events (passé composé).",
  },
];

export default function Unit4Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#9D174D]">Unit 4 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Uses of L'imparfait</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The imparfait is not simply "the other past tense" — it has four distinct uses. Understanding when to reach for the imparfait (rather than the passé composé) is one of the most important skills in French grammar.
            </p>
            <div className="mt-4 space-y-2 text-sm text-[#526173]">
              <p><strong className="text-[#0B1F3A]">Use 1:</strong> Ongoing background actions or descriptions ("the sky was blue", "she was reading")</p>
              <p><strong className="text-[#0B1F3A]">Use 2:</strong> Habits and repeated actions in the past ("every Sunday we went to church")</p>
              <p><strong className="text-[#0B1F3A]">Use 3:</strong> Mental, emotional, or physical states ("he was sad", "I was hungry")</p>
              <p><strong className="text-[#0B1F3A]">Use 4:</strong> Hypothetical si clauses ("if I had time, I would...")</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A] mb-3">Imparfait trigger words</p>
            <div className="space-y-1 text-sm text-[#526173]">
              <p><strong className="text-[#9D174D]">toujours</strong> — always</p>
              <p><strong className="text-[#9D174D]">souvent</strong> — often</p>
              <p><strong className="text-[#9D174D]">tous les jours</strong> — every day</p>
              <p><strong className="text-[#9D174D]">chaque jour / semaine</strong> — each day / week</p>
              <p><strong className="text-[#9D174D]">autrefois</strong> — in the old days / formerly</p>
              <p><strong className="text-[#9D174D]">quand j'étais jeune</strong> — when I was young</p>
              <p><strong className="text-[#9D174D]">d'habitude</strong> — usually / as a rule</p>
              <p><strong className="text-[#9D174D]">pendant que</strong> — while (ongoing action)</p>
              <p><strong className="text-[#9D174D]">quand / lorsque</strong> — when (background)</p>
              <p><strong className="text-[#9D174D]">si + [hypothetical]</strong> — if...</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Imparfait in context — the four uses" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Key contrast: passé composé vs imparfait</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            Think of the imparfait as the <strong className="text-white">stage set</strong> and the passé composé as the <strong className="text-white">action</strong>. The imparfait paints what was going on in the background; the passé composé describes what happened and interrupted it.
          </p>
          <div className="mt-4 rounded-lg bg-white/10 p-4 text-sm">
            <p className="font-bold text-white">Il <span className="text-[#F9A8D4]">lisait</span> [imparfait] quand le téléphone <span className="text-[#86EFAC]">a sonné</span> [passé composé].</p>
            <p className="mt-1 text-[#CBD5E1]">He was reading when the phone rang. — imparfait = ongoing background; passé composé = the event.</p>
          </div>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Imparfait sentence → use" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Choose and form the imparfait" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Uses of l'imparfait quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-4/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Lesson 1</Link>
          <Link href="/learn/school-french-support/unit-4/lesson-3" className="rounded-full bg-[#9D174D] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#831843]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
