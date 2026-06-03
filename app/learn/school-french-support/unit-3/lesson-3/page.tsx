import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "avoir", back: "eu — had", subtext: "J'ai eu un problème. — I had a problem." },
  { front: "être", back: "été — been", subtext: "Nous avons été contents. — We were happy." },
  { front: "faire", back: "fait — done/made", subtext: "Qu'est-ce que tu as fait? — What did you do?" },
  { front: "dire", back: "dit — said", subtext: "Il a dit bonjour. — He said hello." },
  { front: "écrire", back: "écrit — written", subtext: "Elle a écrit une lettre. — She wrote a letter." },
  { front: "lire", back: "lu — read", subtext: "J'ai lu ce roman. — I read this novel." },
  { front: "voir", back: "vu — seen", subtext: "Tu as vu ce film? — Did you see that film?" },
  { front: "prendre", back: "pris — taken", subtext: "Nous avons pris le train. — We took the train." },
  { front: "mettre", back: "mis — put", subtext: "Il a mis son manteau. — He put on his coat." },
  { front: "pouvoir", back: "pu — been able to", subtext: "Je n'ai pas pu venir. — I wasn't able to come." },
  { front: "vouloir", back: "voulu — wanted", subtext: "Elle a voulu partir. — She wanted to leave." },
  { front: "boire", back: "bu — drunk", subtext: "Ils ont bu du jus d'orange. — They drank orange juice." },
  { front: "savoir", back: "su — known", subtext: "J'ai su la réponse. — I knew the answer." },
  { front: "ouvrir", back: "ouvert — opened", subtext: "Tu as ouvert la fenêtre? — Did you open the window?" },
];

const pairs = [
  { left: "avoir", right: "eu" },
  { left: "faire", right: "fait" },
  { left: "voir", right: "vu" },
  { left: "prendre", right: "pris" },
  { left: "écrire", right: "écrit" },
  { left: "boire", right: "bu" },
];

const exercises = [
  { before: "Qu'est-ce que vous", after: "ce week-end? (faire)", answer: "avez fait", hint: "avoir (vous avez) + past participle of faire → fait", translation: "What did you do this weekend?" },
  { before: "J'", after: "ce livre en deux jours. (lire)", answer: "ai lu", hint: "avoir (j'ai) + past participle of lire → lu", translation: "I read this book in two days." },
  { before: "Elle", after: "une longue lettre. (écrire)", answer: "a écrit", hint: "avoir (elle a) + past participle of écrire → écrit", translation: "She wrote a long letter." },
  { before: "Nous", after: "un film fantastique. (voir)", answer: "avons vu", hint: "avoir (nous avons) + past participle of voir → vu", translation: "We saw a fantastic film." },
  { before: "Ils n'", after: "pas venir. (pouvoir)", answer: "ont pu", hint: "avoir (ils ont) + past participle of pouvoir → pu; ne...pas wraps auxiliary", translation: "They weren't able to come." },
];

const questions = [
  {
    question: "What is the past participle of 'faire'?",
    options: ["fai", "fait", "faisé", "faisit"],
    correct: 1,
    explanation: "Faire → fait. This is one of the most common irregular past participles: j'ai fait mes devoirs, qu'est-ce que tu as fait?",
  },
  {
    question: "Which sentence correctly uses the past participle of 'voir'?",
    options: [
      "J'ai voir le match.",
      "J'ai voy le match.",
      "J'ai vu le match.",
      "J'ai vué le match.",
    ],
    correct: 2,
    explanation: "Voir → vu (irregular). J'ai vu le match. Similarly: j'ai lu (lire), j'ai bu (boire), j'ai eu (avoir).",
  },
  {
    question: "What is the past participle of 'prendre'?",
    options: ["prendé", "prendu", "pris", "prenu"],
    correct: 2,
    explanation: "Prendre → pris (irregular). Same pattern: comprendre → compris, apprendre → appris.",
  },
  {
    question: "Which group of past participles follows the same pattern?",
    options: [
      "vu, lu, bu — all end in -u",
      "fait, dit, écrit — all end in -it",
      "eu, été, pu — all use être",
      "pris, mis, dit — all use être",
    ],
    correct: 0,
    explanation: "Vu (voir), lu (lire), bu (boire), pu (pouvoir), voulu (vouloir), eu (avoir) all share the -u ending pattern. Recognising this group helps memorisation.",
  },
  {
    question: "What is the past participle of 'dire' (to say)?",
    options: ["diré", "dit", "disu", "dira"],
    correct: 1,
    explanation: "Dire → dit. J'ai dit bonjour = I said hello. Dit shares its -it pattern with fait (faire) and écrit (écrire).",
  },
  {
    question: "How do you say 'She wrote a long email'?",
    options: ["Elle a écrit un long email.", "Elle est écrit un long email.", "Elle a écrire un long email.", "Elle a écrivé un long email."],
    correct: 0,
    explanation: "Écrire → écrit (irregular). Auxiliary = avoir. Elle a écrit un long email. Never use the infinitive (écrire) after the auxiliary.",
  },
  {
    question: "'J'ai su la réponse.' What does 'su' come from?",
    options: ["suivre (to follow)", "savoir (to know)", "sortir (to go out)", "sentir (to feel)"],
    correct: 1,
    explanation: "Su is the past participle of savoir (to know). J'ai su = I knew. Savoir → su, following the -u pattern.",
  },
  {
    question: "Which past participle is spelled correctly?",
    options: ["voulé (vouloir)", "misé (mettre)", "voulu (vouloir)", "misu (mettre)"],
    correct: 2,
    explanation: "Voulu is the correct past participle of vouloir. Mettre → mis. Both are irregular: you must memorize them, as they don't follow regular patterns.",
  },
];

export default function Unit3Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Unit 3 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Irregular Past Participles</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Many of the most frequently used French verbs have past participles that do not follow the regular -é / -i / -u pattern. These irregular forms must be memorised individually, but many share recognisable groups that make learning them easier.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Notice the patterns: verbs ending in <strong>-u</strong> (vu, lu, bu, pu), verbs ending in <strong>-it</strong> (dit, écrit, fait), and verbs ending in <strong>-is</strong> (pris, mis). Grouping them this way dramatically cuts memorisation time.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A] mb-3">Quick-reference: irregular past participles</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <div>
                <p className="text-xs font-bold text-[#7C3AED] uppercase mt-2 mb-1">-u group</p>
                <p>avoir → <strong>eu</strong></p>
                <p>être → <strong>été</strong></p>
                <p>boire → <strong>bu</strong></p>
                <p>lire → <strong>lu</strong></p>
                <p>voir → <strong>vu</strong></p>
                <p>pouvoir → <strong>pu</strong></p>
                <p>vouloir → <strong>voulu</strong></p>
                <p>savoir → <strong>su</strong></p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#7C3AED] uppercase mt-2 mb-1">-it / -is group</p>
                <p>faire → <strong>fait</strong></p>
                <p>dire → <strong>dit</strong></p>
                <p>écrire → <strong>écrit</strong></p>
                <p>prendre → <strong>pris</strong></p>
                <p>mettre → <strong>mis</strong></p>
                <p className="text-xs font-bold text-[#7C3AED] uppercase mt-2 mb-1">other</p>
                <p>ouvrir → <strong>ouvert</strong></p>
                <p>offrir → <strong>offert</strong></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Irregular past participles" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Infinitive → irregular past participle" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Use the irregular past participle" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Irregular past participles quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-3/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Lesson 2</Link>
          <Link href="/learn/school-french-support/unit-3/lesson-4" className="rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#6D28D9]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
