import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const futureCards = [
  { front: "Je vais partir demain.", back: "I am going to leave tomorrow.: Futur proche (immediate/planned).", subtext: "Futur proche = aller (conjugated) + infinitive. Use for near-future plans." },
  { front: "Elle va étudier ce soir.", back: "She is going to study tonight.: Futur proche.", subtext: "Very common in speech; feels more certain/immediate than futur simple." },
  { front: "Nous allons voyager cet été.", back: "We are going to travel this summer.: Futur proche.", subtext: "Use futur proche for intentions and decisions already made." },
  { front: "Je partirai à huit heures.", back: "I will leave at eight o'clock.: Futur simple.", subtext: "Futur simple = infinitive + endings. Drop the final -e from -re verbs first." },
  { front: "Il sera médecin.", back: "He will be a doctor.: Futur simple of être: ser- + ai/as/a/ons/ez/ont.", subtext: "Être → stem: ser-. Used for predictions, distant plans, dreams." },
  { front: "Nous aurons une grande maison.", back: "We will have a big house.: Futur simple of avoir: aur-.", subtext: "Avoir → stem: aur-. Irregular stem, regular endings." },
  { front: "Tu feras tes devoirs.", back: "You will do your homework.: Futur simple of faire: fer-.", subtext: "Faire → stem: fer-. Don't forget the irregular stem." },
  { front: "Ils iront en France.", back: "They will go to France.: Futur simple of aller: ir-.", subtext: "Aller → stem: ir-. Same stem as the infinitive of partir! Don't confuse." },
  { front: "Elle voudra partir tôt.", back: "She will want to leave early.: Futur simple of vouloir: voudr-.", subtext: "Vouloir → stem: voudr-. Notice the d is kept from the infinitive." },
  { front: "Vous pourrez venir.", back: "You will be able to come.: Futur simple of pouvoir: pourr-.", subtext: "Pouvoir → stem: pourr-. Double-r is the key feature." },
];

const pairs = [
  { left: "aller", right: "ir- (futur simple stem)" },
  { left: "être", right: "ser- (futur simple stem)" },
  { left: "avoir", right: "aur- (futur simple stem)" },
  { left: "faire", right: "fer- (futur simple stem)" },
  { left: "vouloir", right: "voudr- (futur simple stem)" },
  { left: "pouvoir", right: "pourr- (futur simple stem)" },
];

const exercises = [
  { before: "Ce soir, je", after: "mes devoirs. (aller + faire: futur proche)", answer: "vais faire", hint: "aller conjugated: je vais + infinitive faire", translation: "Tonight, I am going to do my homework." },
  { before: "L'année prochaine, nous", after: "à Paris. (aller: futur simple)", answer: "irons", hint: "aller → ir- + ons (nous ending)", translation: "Next year, we will go to Paris." },
  { before: "Elle", after: "médecin un jour. (être: futur simple)", answer: "sera", hint: "être → ser- + a (il/elle ending)", translation: "She will be a doctor one day." },
  { before: "Tu", after: "le temps de terminer. (avoir: futur simple)", answer: "auras", hint: "avoir → aur- + as (tu ending)", translation: "You will have time to finish." },
  { before: "Ils", after: "une fête demain soir. (aller + organiser: futur proche)", answer: "vont organiser", hint: "aller conjugated: ils vont + infinitive organiser", translation: "They are going to organise a party tomorrow evening." },
];

const questions = [
  {
    question: "How do you form the futur proche?",
    options: ["infinitive + futur endings", "aller (conjugated) + infinitive", "avoir + past participle", "être + infinitive"],
    correct: 1,
    explanation: "Futur proche = aller (conjugated in the present) + infinitive: je vais partir, tu vas manger, il va finir.",
  },
  {
    question: "What is the futur simple stem of 'vouloir'?",
    options: ["vouloir-", "voudr-", "voul-", "vouler-"],
    correct: 1,
    explanation: "Vouloir has the irregular futur simple stem voudr-: je voudrai, tu voudras, il voudra, etc.",
  },
  {
    question: "Which sentence uses the futur simple correctly?",
    options: ["Je vais serai riche.", "Je serai riche.", "Je suis serai riche.", "J'ai été riche."],
    correct: 1,
    explanation: "Je serai = I will be. Stem: ser- + ai (je ending). Futur simple of être.",
  },
  {
    question: "When is the futur proche most appropriate?",
    options: ["Predictions about the distant future", "Describing what was happening in the past", "Plans and intentions that are certain or imminent", "Habitual past actions"],
    correct: 2,
    explanation: "Use futur proche for planned, immediate, or certain future events: Je vais partir dans cinq minutes. Use futur simple for more distant or hypothetical futures.",
  },
  {
    question: "What are the futur simple endings for 'je', 'tu', and 'il/elle'?",
    options: ["-ai, -as, -a", "-ais, -ait, -a", "-erai, -eras, -era", "-ai, -as, -ont"],
    correct: 0,
    explanation: "Futur simple endings: je -ai, tu -as, il/elle -a, nous -ons, vous -ez, ils/elles -ont. These are added to the infinitive (or irregular stem): parler + ai = je parlerai.",
  },
  {
    question: "How do you say 'They will go to France next year'?",
    options: [
      "Ils vont aller en France l'année prochaine.",
      "Ils iront en France l'année prochaine.",
      "Ils allaient en France l'année prochaine.",
      "Ils allons en France l'année prochaine.",
    ],
    correct: 1,
    explanation: "For a distant future plan (next year), futur simple is preferred. Aller → irregular stem ir-. Ils + -ont = ils iront. L'année prochaine = next year.",
  },
  {
    question: "What is the futur simple of 'avoir' for 'nous'?",
    options: ["nous avrons", "nous aurons", "nous aurions", "nous avons"],
    correct: 1,
    explanation: "Avoir → irregular stem aur-. Nous + -ons = nous aurons. Nous aurons du temps = We will have time.",
  },
  {
    question: "A student writes 'Je vais serai médecin.' What's wrong?",
    options: [
      "Serai should be être.",
      "You can't combine futur proche (vais) and futur simple (serai): choose one.",
      "Médecin should have an article.",
      "Nothing is wrong.",
    ],
    correct: 1,
    explanation: "Don't combine futur proche and futur simple: use one or the other. Correct options: 'Je vais être médecin' (futur proche) OR 'Je serai médecin' (futur simple).",
  },
];

export default function Unit5Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Unit 5 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Writing About the Future</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              French has two main ways to express the future. The <strong>futur proche</strong> (aller + infinitive) is used for immediate or planned events — things you intend to do soon. The <strong>futur simple</strong> uses special endings added to the infinitive and is used for predictions, hypotheses, and more distant plans. Both appear in school writing tasks.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Futur simple endings + irregular stems</p>
            <div className="mt-3 grid grid-cols-2 gap-x-4 text-xs">
              <div>
                <p className="font-bold text-[#0B1F3A] mb-1">Endings (add to stem)</p>
                <p className="text-[#526173]">je -<span className="font-bold text-[#16A34A]">ai</span></p>
                <p className="text-[#526173]">tu -<span className="font-bold text-[#16A34A]">as</span></p>
                <p className="text-[#526173]">il/elle -<span className="font-bold text-[#16A34A]">a</span></p>
                <p className="text-[#526173]">nous -<span className="font-bold text-[#16A34A]">ons</span></p>
                <p className="text-[#526173]">vous -<span className="font-bold text-[#16A34A]">ez</span></p>
                <p className="text-[#526173]">ils/elles -<span className="font-bold text-[#16A34A]">ont</span></p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A] mb-1">Irregular stems</p>
                <p className="text-[#526173]">aller → <span className="font-bold text-[#16A34A]">ir-</span></p>
                <p className="text-[#526173]">être → <span className="font-bold text-[#16A34A]">ser-</span></p>
                <p className="text-[#526173]">avoir → <span className="font-bold text-[#16A34A]">aur-</span></p>
                <p className="text-[#526173]">faire → <span className="font-bold text-[#16A34A]">fer-</span></p>
                <p className="text-[#526173]">vouloir → <span className="font-bold text-[#16A34A]">voudr-</span></p>
                <p className="text-[#526173]">pouvoir → <span className="font-bold text-[#16A34A]">pourr-</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={futureCards} title="Future tense expressions" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-lg">Model future paragraph</p>
          <p className="mt-3 leading-7 text-[#CBD5E1] italic text-sm">
            Ce week-end, je vais retrouver mes amis au parc. Nous allons jouer au football et ensuite nous allons manger une pizza ensemble. À l&apos;avenir, j&apos;espère que je serai médecin. Je ferai de longues études et j&apos;aurai ma propre clinique. Ce ne sera pas facile, mais je suis sûr que j&apos;y arriverai.
          </p>
          <p className="mt-3 text-xs text-[#16A34A] font-bold">First half: futur proche (plans for the weekend) · Second half: futur simple (distant ambitions)</p>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Infinitive → futur simple stem" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Form the correct future" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Future tense quiz" />
        </div>

        <div className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">

          <p className="mt-2 text-[#526173]">You&apos;ve covered connectors, writing about yourself, past narratives, and the future tense. Take the test to confirm your mastery before moving on to Unit 6.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/school-french-support/unit-5/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Lesson 3</Link>
            <Link href="/learn/school-french-support/unit-5/test" className="rounded-full bg-[#16A34A] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#15803D]">Take the unit test →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
