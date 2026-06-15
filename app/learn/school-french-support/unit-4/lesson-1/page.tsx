import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "parler: je", back: "je parlais", subtext: "Quand j'étais jeune, je parlais beaucoup.: When I was young, I talked a lot." },
  { front: "parler: tu", back: "tu parlais", subtext: "Tu parlais français à l'école.: You spoke French at school." },
  { front: "parler: il/elle", back: "il/elle parlait", subtext: "Elle parlait doucement.: She was speaking softly." },
  { front: "parler: nous", back: "nous parlions", subtext: "Nous parlions tous les soirs.: We used to talk every evening." },
  { front: "parler: vous", back: "vous parliez", subtext: "Vous parliez trop vite.: You were speaking too fast." },
  { front: "parler: ils/elles", back: "ils/elles parlaient", subtext: "Ils parlaient en même temps.: They were talking at the same time." },
  { front: "finir: je", back: "je finissais", subtext: "Je finissais toujours mes devoirs.: I always used to finish my homework." },
  { front: "avoir: il", back: "il avait", subtext: "Il avait l'air fatigué.: He looked tired." },
  { front: "aller: nous", back: "nous allions", subtext: "Nous allions à la plage chaque été.: We used to go to the beach every summer." },
  { front: "faire: tu", back: "tu faisais", subtext: "Qu'est-ce que tu faisais?: What were you doing?" },
  { front: "avoir: vous", back: "vous aviez", subtext: "Vous aviez raison.: You were right." },
  { front: "aller: ils", back: "ils allaient", subtext: "Ils allaient au parc le week-end.: They used to go to the park at weekends." },
];

const pairs = [
  { left: "parler (je)", right: "je parlais" },
  { left: "finir (nous)", right: "nous finissions" },
  { left: "avoir (il)", right: "il avait" },
  { left: "aller (tu)", right: "tu allais" },
  { left: "faire (elles)", right: "elles faisaient" },
  { left: "vendre (vous)", right: "vous vendiez" },
];

const exercises = [
  { before: "Quand j'étais enfant, je", after: "à l'école à pied. (aller)", answer: "allais", hint: "imparfait of aller: stem = all- (from nous allons), add -ais", translation: "When I was a child, I used to walk to school." },
  { before: "Nous", after: "du sport chaque samedi. (faire)", answer: "faisions", hint: "imparfait of faire: stem = fais- (from nous faisons), add -ions", translation: "We used to do sport every Saturday." },
  { before: "Elle", after: "très bien le piano. (jouer)", answer: "jouait", hint: "imparfait of jouer: stem = jou- (from nous jouons), add -ait", translation: "She used to play the piano very well." },
  { before: "Vous", after: "toujours en retard. (arriver)", answer: "arriviez", hint: "imparfait of arriver: stem = arriv- (from nous arrivons), add -iez", translation: "You always used to arrive late." },
  { before: "Ils", after: "le français depuis un an. (apprendre)", answer: "apprenaient", hint: "imparfait of apprendre: stem = appren- (from nous apprenons), add -aient", translation: "They had been learning French for a year." },
];

const questions = [
  {
    question: "How do you find the imparfait stem of a verb?",
    options: [
      "Use the infinitive and remove -er/-ir/-re.",
      "Take the nous present tense form and remove -ons.",
      "Use the past participle as the stem.",
      "Take the je present tense form and remove -s.",
    ],
    correct: 1,
    explanation: "To form the imparfait: take the nous present tense (ex. nous parlons), remove -ons (→ parl-), then add the imparfait endings. This works for virtually all verbs.",
  },
  {
    question: "What is the imparfait of 'avoir' for 'il'?",
    options: ["il a eu", "il était", "il avait", "il ait"],
    correct: 2,
    explanation: "Avoir: nous avons → stem av-. Il avait. Avoir follows the regular imparfait pattern from the nous stem: j'avais, tu avais, il avait, nous avions, vous aviez, ils avaient.",
  },
  {
    question: "Which imparfait ending is used for 'nous'?",
    options: ["-ait", "-ions", "-iez", "-aient"],
    correct: 1,
    explanation: "The nous imparfait ending is -ions: nous parlions, nous finissions, nous avions. Note: for -ger verbs we keep the e before -ions is not needed since -i already softens: nous mangions.",
  },
  {
    question: "What is the only verb with an irregular imparfait stem?",
    options: ["avoir", "aller", "faire", "être"],
    correct: 3,
    explanation: "Être is the only verb with an irregular imparfait stem: ét-. All other verbs, including aller and faire, form their imparfait stem from the nous form: all-, fais-.",
  },
  {
    question: "What is the imparfait of 'être' for 'je'?",
    options: ["j'étais", "j'était", "j'ai été", "j'étions"],
    correct: 0,
    explanation: "Être has the irregular stem ét-. Je form = j'étais. Full imparfait: j'étais, tu étais, il/elle était, nous étions, vous étiez, ils/elles étaient.",
  },
  {
    question: "What is the imparfait stem of 'manger'?",
    options: ["mange-", "mang-", "mangeait-", "mangeons-"],
    correct: 1,
    explanation: "Imparfait stem of manger: nous mangeons → remove -ons → mang-. Then add endings. Special: before -ais/-ait/-aient, write mange- to keep the g soft: je mangeais.",
  },
  {
    question: "Which ending is used for ils/elles in the imparfait?",
    options: ["-aient", "-ait", "-iez", "-ions"],
    correct: 0,
    explanation: "Ils/elles imparfait ending = -aient: ils parlaient, elles finissaient, ils avaient. This is the third-person plural ending for ALL verbs in the imparfait.",
  },
  {
    question: "How do you say 'We used to go to the beach every summer'?",
    options: [
      "Nous allions à la plage chaque été.",
      "Nous allons à la plage chaque été.",
      "Nous avons allé à la plage chaque été.",
      "Nous allaient à la plage chaque été.",
    ],
    correct: 0,
    explanation: "Aller → imparfait stem all-. Nous form = -ions: nous allions. Habitual past action = imparfait. 'Chaque été' (every summer) confirms the habitual nature.",
  },
];

export default function Unit4Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#9D174D]">Unit 4 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">L'imparfait Formation</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The imparfait is French's second key past tense. It describes ongoing states, background descriptions, habits, and repeated actions in the past. Fortunately, it has a very regular formation that applies to almost every verb.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The stem is found by taking the <strong>nous</strong> form of the present tense and removing <strong>-ons</strong>. Then add the six imparfait endings. Only <em>être</em> has an irregular stem: <strong>ét-</strong>.
            </p>
            <div className="mt-5 overflow-x-auto rounded-xl border border-[#E7DAB9] bg-white p-4 text-sm">
              <p className="font-black text-[#0B1F3A] mb-2">Step-by-step: parler</p>
              <p className="text-[#526173]">1. nous parlons → remove -ons → <strong>parl-</strong></p>
              <p className="text-[#526173] mt-1">2. Add endings: parl<strong>ais</strong>, parl<strong>ais</strong>, parl<strong>ait</strong>, parl<strong>ions</strong>, parl<strong>iez</strong>, parl<strong>aient</strong></p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A] mb-3">Imparfait endings (all verbs)</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <div>
                <p>je → <strong className="text-[#9D174D]">-ais</strong></p>
                <p>tu → <strong className="text-[#9D174D]">-ais</strong></p>
                <p>il/elle → <strong className="text-[#9D174D]">-ait</strong></p>
              </div>
              <div>
                <p>nous → <strong className="text-[#9D174D]">-ions</strong></p>
                <p>vous → <strong className="text-[#9D174D]">-iez</strong></p>
                <p>ils/elles → <strong className="text-[#9D174D]">-aient</strong></p>
              </div>
            </div>
            <div className="mt-4 border-t border-[#E7DAB9] pt-3 text-sm">
              <p className="font-bold text-[#0B1F3A]">Example: finir</p>
              <p className="text-[#526173]">nous finissons → stem: <strong>finiss-</strong></p>
              <p className="mt-1">je finissais · tu finissais · il finissait</p>
              <p>nous finissions · vous finissiez · ils finissaient</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Imparfait conjugations" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">être — the only irregular imparfait stem</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            Every verb except <em>être</em> forms its imparfait stem from the nous present tense. Être uses the stem <strong className="text-white">ét-</strong> (from the Latin imperfect).
          </p>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">j'étais</p>
              <p className="text-[#CBD5E1]">I was</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">tu étais</p>
              <p className="text-[#CBD5E1]">you were</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">il/elle était</p>
              <p className="text-[#CBD5E1]">he/she was</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">nous étions</p>
              <p className="text-[#CBD5E1]">we were</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">vous étiez</p>
              <p className="text-[#CBD5E1]">you were (pl)</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">ils/elles étaient</p>
              <p className="text-[#CBD5E1]">they were</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Verb + person → imparfait form" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Form the imparfait" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="L'imparfait formation quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-3/test" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Unit 3 Test</Link>
          <Link href="/learn/school-french-support/unit-4/lesson-2" className="rounded-full bg-[#9D174D] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#831843]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
