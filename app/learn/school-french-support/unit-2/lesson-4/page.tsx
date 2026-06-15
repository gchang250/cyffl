import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const irregularCards = [
  { front: "je fais", back: "I do / make (faire)", subtext: "faire: to do, to make. Used in weather, sports, and activities." },
  { front: "tu fais", back: "you do / make (faire)", subtext: "Qu'est-ce que tu fais ce soir?: What are you doing tonight?" },
  { front: "il/elle fait", back: "he/she does (faire)", subtext: "Il fait beau aujourd'hui.: The weather is nice today." },
  { front: "nous faisons", back: "we do / make (faire)", subtext: "Nous faisons la cuisine ensemble.: We cook together." },
  { front: "vous faites", back: "you do / make (faire)", subtext: "Vous faites du sport?: Do you play sports?" },
  { front: "ils/elles font", back: "they do / make (faire)", subtext: "Ils font leurs devoirs.: They're doing their homework." },
  { front: "je veux", back: "I want (vouloir)", subtext: "vouloir: to want. Used for wishes and requests." },
  { front: "tu veux", back: "you want (vouloir)", subtext: "Tu veux venir avec nous?: Do you want to come with us?" },
  { front: "il/elle veut", back: "he/she wants (vouloir)", subtext: "Elle veut être médecin.: She wants to be a doctor." },
  { front: "nous voulons", back: "we want (vouloir)", subtext: "Nous voulons changer les choses.: We want to change things." },
  { front: "vous voulez", back: "you want (vouloir)", subtext: "Vous voulez du café?: Would you like some coffee?" },
  { front: "ils/elles veulent", back: "they want (vouloir)", subtext: "Ils veulent partir tôt.: They want to leave early." },
  { front: "je peux", back: "I can (pouvoir)", subtext: "pouvoir: to be able to. Used for permission and ability." },
  { front: "tu peux", back: "you can (pouvoir)", subtext: "Tu peux m'aider?: Can you help me?" },
  { front: "il/elle peut", back: "he/she can (pouvoir)", subtext: "Elle ne peut pas venir.: She can't come." },
  { front: "nous pouvons", back: "we can (pouvoir)", subtext: "Nous pouvons essayer!: We can try!" },
  { front: "vous pouvez", back: "you can (pouvoir)", subtext: "Vous pouvez partir.: You may leave." },
  { front: "ils/elles peuvent", back: "they can (pouvoir)", subtext: "Ils peuvent nager très bien.: They can swim very well." },
];

const pairs = [
  { left: "faire du sport", right: "to play sports / exercise" },
  { left: "faire la cuisine", right: "to cook" },
  { left: "faire les devoirs", right: "to do homework" },
  { left: "faire une promenade", right: "to go for a walk" },
  { left: "faire du vélo", right: "to ride a bike" },
  { left: "faire beau", right: "to be nice weather" },
];

const exercises = [
  { before: "Elle", after: "du vélo tous les matins. (faire)", answer: "fait", hint: "faire → elle fait", translation: "She rides her bike every morning." },
  { before: "Ils", after: "partir avant la pluie. (vouloir)", answer: "veulent", hint: "vouloir → ils veulent", translation: "They want to leave before the rain." },
  { before: "Tu ne", after: "pas sortir ce soir? (pouvoir)", answer: "peux", hint: "pouvoir → tu peux (ne...pas around verb)", translation: "Can't you go out tonight?" },
  { before: "Nous", after: "la cuisine pour toute la famille. (faire)", answer: "faisons", hint: "faire → nous faisons", translation: "We cook for the whole family." },
  { before: "Vous", after: "venir à la fête? (pouvoir)", answer: "pouvez", hint: "pouvoir → vous pouvez", translation: "Can you (all) come to the party?" },
];

const questions = [
  {
    question: "What is the 'vous' form of 'faire'?",
    options: ["vous faisez", "vous font", "vous faites", "vous faisons"],
    correct: 2,
    explanation: "Vous faites is the irregular vous form of faire: one of the only -ez exceptions in French: vous faites, vous dites, vous êtes.",
  },
  {
    question: "Which faire expression means 'to do homework'?",
    options: ["faire du vélo", "faire la cuisine", "faire les devoirs", "faire une promenade"],
    correct: 2,
    explanation: "Faire les devoirs = to do homework. Faire du vélo = to cycle, faire la cuisine = to cook, faire une promenade = to go for a walk.",
  },
  {
    question: "What is the 'ils' form of 'vouloir'?",
    options: ["ils voulons", "ils veulent", "ils voulant", "ils voulez"],
    correct: 1,
    explanation: "Ils veulent: vouloir is irregular. Full conjugation: je veux, tu veux, il/elle veut, nous voulons, vous voulez, ils/elles veulent.",
  },
  {
    question: "How do you say 'She can't swim' in French?",
    options: ["Elle ne veut pas nager.", "Elle ne peut pas nager.", "Elle ne fait pas nager.", "Elle ne va pas nager."],
    correct: 1,
    explanation: "Pouvoir = can / to be able to. Elle ne peut pas nager: she can't swim. Ne...pas wraps the conjugated verb.",
  },
  {
    question: "Which faire expression describes cooking?",
    options: ["faire du vélo", "faire une promenade", "faire la cuisine", "faire du sport"],
    correct: 2,
    explanation: "Faire la cuisine = to cook. Faire du vélo = to cycle, faire une promenade = to go for a walk, faire du sport = to play sports/exercise.",
  },
  {
    question: "What is the 'tu' form of 'pouvoir'?",
    options: ["tu pouvez", "tu peux", "tu peut", "tu pouvons"],
    correct: 1,
    explanation: "Tu peux: pouvoir is irregular. Conjugation: je peux, tu peux, il/elle peut, nous pouvons, vous pouvez, ils/elles peuvent. Je and tu share the same stem: peu-.",
  },
  {
    question: "How do you say 'They want to leave early'?",
    options: ["Ils font partir tôt.", "Ils peuvent partir tôt.", "Ils veulent partir tôt.", "Ils vont partir tôt."],
    correct: 2,
    explanation: "Vouloir = to want. Ils veulent partir tôt. Follow the pattern: vouloir + infinitive = want to + verb.",
  },
  {
    question: "A student writes 'Il fait beau.' What does this mean?",
    options: ["He does something beautiful.", "The weather is nice.", "He looks beautiful.", "He is doing well."],
    correct: 1,
    explanation: "Il fait beau = the weather is nice. This is a fixed faire expression for weather. Similarly: il fait froid (it's cold), il fait chaud (it's hot).",
  },
];

export default function Unit2Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">Unit 2 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Irregular Verbs: faire, vouloir, pouvoir</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">These three verbs are everywhere in spoken and written French. Faire is used for weather and activities, vouloir expresses desire, and pouvoir handles ability and permission.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Common faire expressions</p>
            <div className="mt-3 space-y-1.5 text-sm">
              <p className="text-[#0B1F3A]"><span className="font-bold">faire du sport</span> <span className="text-[#526173]">— to play sports</span></p>
              <p className="text-[#0B1F3A]"><span className="font-bold">faire la cuisine</span> <span className="text-[#526173]">— to cook</span></p>
              <p className="text-[#0B1F3A]"><span className="font-bold">faire les devoirs</span> <span className="text-[#526173]">— to do homework</span></p>
              <p className="text-[#0B1F3A]"><span className="font-bold">faire une promenade</span> <span className="text-[#526173]">— to go for a walk</span></p>
              <p className="text-[#0B1F3A]"><span className="font-bold">faire du vélo</span> <span className="text-[#526173]">— to ride a bike</span></p>
              <p className="text-[#0B1F3A]"><span className="font-bold">il fait beau / froid</span> <span className="text-[#526173]">— the weather is nice / cold</span></p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={irregularCards} title="faire, vouloir, pouvoir: all forms" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Faire expressions" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Conjugate faire, vouloir, or pouvoir" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="faire, vouloir, pouvoir quiz" />
        </div>

        <div className="mt-12 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">

          <p className="mt-2 text-[#526173]">You've covered all three regular verb families and the six most important irregular verbs in French. Take the unit test to prove you've got it all.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/school-french-support/unit-2/test" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Take Unit 2 Test →</Link>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-start gap-4">
          <Link href="/learn/school-french-support/unit-2/lesson-3" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
        </div>
      </section>
    </main>
  );
}
