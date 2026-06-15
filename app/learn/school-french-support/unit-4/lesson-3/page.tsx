import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "Hier, je suis allé au marché.", back: "Yesterday I went to the market.: passé composé", subtext: "PC: specific, single, completed event at a defined point in time." },
  { front: "Avant, j'allais au marché le samedi.", back: "Before, I used to go to the market on Saturdays.: imparfait", subtext: "Imparfait: habitual/routine action, no specific endpoint." },
  { front: "Il pleuvait quand je suis sorti.", back: "It was raining when I went out.: imp. + PC", subtext: "Imparfait (background) + passé composé (event that broke the background)." },
  { front: "Soudain, le chien a aboyé.", back: "Suddenly the dog barked.: passé composé", subtext: "PC: 'soudain' (suddenly) signals a sudden, single completed event." },
  { front: "J'avais faim, alors j'ai mangé.", back: "I was hungry, so I ate.: imp. + PC", subtext: "Imparfait (state) followed by passé composé (resulting action)." },
  { front: "Tous les étés, ils allaient au lac.", back: "Every summer they went to the lake.: imparfait", subtext: "Imparfait: 'tous les étés' signals habitual past action." },
  { front: "Un jour, il a décidé de partir.", back: "One day he decided to leave.: passé composé", subtext: "PC: 'un jour' signals a single, completed decision: a turning point." },
  { front: "Elle était triste parce qu'elle avait perdu son chat.", back: "She was sad because she had lost her cat.: two imparfaits", subtext: "Both are states (emotion + possession in the past): both imparfait." },
];

const pairs = [
  { left: "Il faisait beau ce matin-là.", right: "Imparfait: background description" },
  { left: "Tout à coup, elle a crié.", right: "Passé composé: sudden event" },
  { left: "D'habitude, je prenais le bus.", right: "Imparfait: habitual action" },
  { left: "Puis, il a ouvert la porte.", right: "Passé composé: sequence of events" },
  { left: "Nous étions heureux.", right: "Imparfait: emotional state" },
  { left: "Il a commencé à pleuvoir.", right: "Passé composé: completed change of state" },
];

const exercises = [
  { before: "Pendant qu'elle", after: "(dormir), le téléphone a sonné.", answer: "dormait", hint: "Ongoing background action interrupted: imparfait: dormir → stem dorm- → dormait", translation: "While she was sleeping, the phone rang." },
  { before: "Soudain, il", after: "sur le verglas. (tomber)", answer: "est tombé", hint: "Sudden, single completed event: passé composé: être (il est) + tombé", translation: "Suddenly he fell on the ice." },
  { before: "Chaque matin, elle", after: "un café avant d'aller travailler. (boire)", answer: "buvait", hint: "Habitual action: imparfait: boire → stem buv- (nous buvons) → buvait", translation: "Every morning she used to drink a coffee before going to work." },
  { before: "Hier, nous", after: "un long message. (écrire)", answer: "avons écrit", hint: "Single completed event yesterday: passé composé: avoir (nous avons) + écrit", translation: "Yesterday we wrote a long message." },
  { before: "À cette époque, les enfants", after: "librement dans la rue. (jouer)", answer: "jouaient", hint: "Background description of a past era: imparfait: jouer → stem jou- → jouaient", translation: "At that time, children used to play freely in the street." },
];

const questions = [
  {
    question: "Which tense describes the background/setting of a story?",
    options: ["passé composé", "présent", "imparfait", "futur simple"],
    correct: 2,
    explanation: "The imparfait provides background descriptions, ongoing states, and the stage on which events happen. Passé composé provides the events (the action that moves the story forward).",
  },
  {
    question: "Which word signals that passé composé should be used?",
    options: ["toujours", "chaque jour", "soudain", "autrefois"],
    correct: 2,
    explanation: "'Soudain' (suddenly) signals a sudden, single, completed event: passé composé. Toujours, chaque jour, and autrefois all signal habitual or repeated actions: imparfait.",
  },
  {
    question: "Which sentence correctly mixes passé composé and imparfait?",
    options: [
      "Il pleuvait quand je suis sorti.",
      "Il a plu quand j'étais sorti.",
      "Il pleuvait quand je sortais.",
      "Il a plu quand je suis sorti.",
    ],
    correct: 0,
    explanation: "Il pleuvait (ongoing background: imparfait) quand je suis sorti (completed event that broke the background: passé composé). This is the classic mixed-tense structure.",
  },
  {
    question: "What does the imparfait signal about an action's duration?",
    options: [
      "The action was brief and completed.",
      "The action was a single definite event.",
      "The action was ongoing, habitual, or had no defined end.",
      "The action happened before another past action.",
    ],
    correct: 2,
    explanation: "The imparfait presents an action as ongoing, habitual, or without a defined end point. In contrast, the passé composé presents an action as completed and bounded in time.",
  },
  {
    question: "In 'J'avais faim, alors j'ai mangé,' which tense is used for the state and which for the action?",
    options: [
      "Both verbs are in the passé composé.",
      "Avais (imparfait) = ongoing state; ai mangé (passé composé) = resulting action.",
      "Avais (passé composé) = state; ai mangé (imparfait) = action.",
      "Both verbs are in the imparfait.",
    ],
    correct: 1,
    explanation: "J'avais faim (imparfait) describes the ongoing state of hunger. J'ai mangé (passé composé) is the completed action that resulted from it. States use imparfait; resulting actions use passé composé.",
  },
  {
    question: "Which sentence uses the wrong tense for a sudden event?",
    options: [
      "Soudain, elle a crié.",
      "Tout à coup, il a couru.",
      "Soudain, elle criait.",
      "Tout à coup, le chien a aboyé.",
    ],
    correct: 2,
    explanation: "'Soudain, elle criait' is wrong: 'soudain' signals a sudden, completed event → passé composé. Correct: soudain, elle a crié. Imparfait for sudden events is a common exam error.",
  },
  {
    question: "How do you choose between passé composé and imparfait for 'Every day I ate at noon'?",
    options: [
      "Passé composé, because eating happened at a specific time.",
      "Imparfait, because 'every day' signals a repeated habit.",
      "Either tense works equally well.",
      "Futur proche, because this is an ongoing action.",
    ],
    correct: 1,
    explanation: "'Every day' (chaque jour / tous les jours) signals a repeated or habitual past action → imparfait. Chaque jour, je mangeais à midi. Passé composé would imply it happened just once.",
  },
  {
    question: "A student translates 'He was watching TV when his friend called.' They write 'Il regardait la télé quand son ami a appelé.' Is this correct?",
    options: [
      "No: both verbs should be in the passé composé.",
      "No: both verbs should be in the imparfait.",
      "Yes: regardait (ongoing background) and a appelé (interrupting event) are correct.",
      "No: regardait should be a regardé.",
    ],
    correct: 2,
    explanation: "Il regardait la télé (imparfait = ongoing background action) quand son ami a appelé (passé composé = the interrupting event). This is the perfect example of the classic PC + imparfait structure.",
  },
];

export default function Unit4Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#9D174D]">Unit 4 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Passé Composé vs Imparfait</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Choosing between the passé composé and the imparfait is one of the most tested grammar points in French exams. The key question is: does this action have a defined beginning and end, or was it ongoing, repeated, or a state?
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Think of the imparfait as a <strong>film running in the background</strong> and the passé composé as a <strong>snapshot</strong>: a photo capturing a specific moment that interrupted the film.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A] mb-3">Comparison table</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E7DAB9]">
                    <th className="pb-2 text-left text-[#9D174D]">Passé composé</th>
                    <th className="pb-2 text-left text-[#7C3AED]">Imparfait</th>
                  </tr>
                </thead>
                <tbody className="space-y-1">
                  <tr className="border-b border-[#F3F4F6]">
                    <td className="py-1 pr-2">Completed action</td>
                    <td className="py-1">Ongoing/background</td>
                  </tr>
                  <tr className="border-b border-[#F3F4F6]">
                    <td className="py-1 pr-2">Single event</td>
                    <td className="py-1">Habit / routine</td>
                  </tr>
                  <tr className="border-b border-[#F3F4F6]">
                    <td className="py-1 pr-2">Sequence of events</td>
                    <td className="py-1">State / emotion</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-2">Interrupting action</td>
                    <td className="py-1">Interrupted action</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 border-t border-[#E7DAB9] pt-3">
              <p className="text-xs font-bold text-[#9D174D]">PC signal words</p>
              <p className="text-xs text-[#526173]">soudain · tout à coup · un jour · d'abord · puis · ensuite</p>
              <p className="text-xs font-bold text-[#7C3AED] mt-2">Imparfait signal words</p>
              <p className="text-xs text-[#526173]">quand · pendant que · chaque jour · toujours · autrefois · d'habitude</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Passé composé vs imparfait: sentence pairs" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Signal words — your tense compass</p>
          <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <p className="font-bold text-[#F9A8D4] mb-2">Passé composé signals</p>
              <div className="space-y-1 text-[#CBD5E1]">
                <p><strong className="text-white">soudain</strong> — suddenly</p>
                <p><strong className="text-white">tout à coup</strong> — all of a sudden</p>
                <p><strong className="text-white">un jour</strong> — one day</p>
                <p><strong className="text-white">d'abord</strong> — first</p>
                <p><strong className="text-white">puis / ensuite</strong> — then / next</p>
                <p><strong className="text-white">finalement</strong> — finally</p>
              </div>
            </div>
            <div>
              <p className="font-bold text-[#A78BFA] mb-2">Imparfait signals</p>
              <div className="space-y-1 text-[#CBD5E1]">
                <p><strong className="text-white">quand / pendant que</strong> — when / while</p>
                <p><strong className="text-white">chaque jour</strong> — every day</p>
                <p><strong className="text-white">toujours / souvent</strong> — always / often</p>
                <p><strong className="text-white">autrefois</strong> — in the old days</p>
                <p><strong className="text-white">d'habitude</strong> — usually</p>
                <p><strong className="text-white">à cette époque</strong> — at that time</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Sentence → tense and reason" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Choose the correct tense" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Passé composé vs imparfait quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-4/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Lesson 2</Link>
          <Link href="/learn/school-french-support/unit-4/lesson-4" className="rounded-full bg-[#9D174D] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#831843]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
