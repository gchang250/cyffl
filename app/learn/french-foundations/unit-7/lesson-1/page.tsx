import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const faireCards = [
  { front: "je fais", back: "I do / I make", subtext: "Je fais mes devoirs. — I do my homework." },
  { front: "tu fais", back: "you do / you make", subtext: "Tu fais du sport? — Do you play sport?" },
  { front: "il/elle fait", back: "he/she does/makes", subtext: "Elle fait la cuisine. — She cooks." },
  { front: "nous faisons", back: "we do / we make", subtext: "Nous faisons une promenade. — We're going for a walk." },
  { front: "vous faites", back: "you do / you make", subtext: "Vous faites quoi ce soir? — What are you doing tonight?" },
  { front: "ils/elles font", back: "they do / they make", subtext: "Ils font du vélo. — They cycle." },
];

const pouvoirCards = [
  { front: "je peux", back: "I can", subtext: "Je peux t'aider. — I can help you." },
  { front: "tu peux", back: "you can", subtext: "Tu peux venir? — Can you come?" },
  { front: "il/elle peut", back: "he/she can", subtext: "Elle peut parler français. — She can speak French." },
  { front: "nous pouvons", back: "we can", subtext: "Nous pouvons essayer. — We can try." },
  { front: "vous pouvez", back: "you can", subtext: "Vous pouvez m'aider? — Can you help me?" },
  { front: "ils/elles peuvent", back: "they can", subtext: "Ils peuvent partir. — They can leave." },
];

const vouloirCards = [
  { front: "je veux", back: "I want", subtext: "Je veux un café. — I want a coffee." },
  { front: "tu veux", back: "you want", subtext: "Tu veux venir? — Do you want to come?" },
  { front: "il/elle veut", back: "he/she wants", subtext: "Elle veut partir. — She wants to leave." },
  { front: "nous voulons", back: "we want", subtext: "Nous voulons aider. — We want to help." },
  { front: "vous voulez", back: "you want", subtext: "Vous voulez du thé? — Do you want some tea?" },
  { front: "ils/elles veulent", back: "they want", subtext: "Ils veulent rester. — They want to stay." },
];

const pairs = [
  { left: "je fais", right: "I do" },
  { left: "tu peux", right: "you can" },
  { left: "elle veut", right: "she wants" },
  { left: "nous faisons", right: "we do" },
  { left: "vous pouvez", right: "you can" },
  { left: "ils font", right: "they do" },
  { left: "tu veux", right: "you want" },
  { left: "il peut", right: "he can" },
];

const fillIn = [
  { before: "Je", after: "mes devoirs maintenant. (faire)", answer: "fais", hint: "je form of faire", translation: "I'm doing my homework now." },
  { before: "Est-ce que tu", after: "venir ce soir? (pouvoir)", answer: "peux", hint: "tu form of pouvoir", translation: "Can you come tonight?" },
  { before: "Elle", after: "partir tôt. (vouloir)", answer: "veut", hint: "elle form of vouloir", translation: "She wants to leave early." },
  { before: "Nous", after: "une promenade. (faire)", answer: "faisons", hint: "nous form of faire", translation: "We're going for a walk." },
  { before: "Ils ne", after: "pas travailler aujourd'hui. (pouvoir)", answer: "peuvent", hint: "ils form of pouvoir — irregular!", translation: "They can't work today." },
];

const quiz = [
  {
    question: "What is the 'vous' form of 'faire'?",
    options: ["vous faisez", "vous faites", "vous font", "vous faisons"],
    correct: 1,
    explanation: "Faire is irregular: vous faites (not vous faisez). One of the only -tes endings in French.",
  },
  {
    question: "'Je voudrais' is more polite than 'je veux.' What mood is 'voudrais'?",
    options: ["Present tense", "Past tense", "Conditional", "Future"],
    correct: 2,
    explanation: "Je voudrais is the conditional of vouloir — more polite for ordering or requesting. Je veux is direct.",
  },
  {
    question: "What is the 'ils' form of 'pouvoir'?",
    options: ["ils peuventent", "ils pouvent", "ils peuvent", "ils peuvont"],
    correct: 2,
    explanation: "Ils peuvent is the correct third-person plural of pouvoir. Note the stem change: peu- → pouv-.",
  },
  {
    question: "Which means 'He can speak French'?",
    options: ["Il fait parler français.", "Il peut parler français.", "Il veut parler français.", "Il va parler français."],
    correct: 1,
    explanation: "Pouvoir = can / be able to. Il peut parler français = He can speak French.",
  },
];

export default function Unit7Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">← French Foundations</Link>
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 7 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Faire, Pouvoir, Vouloir</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Three of the most-used irregular verbs in French. Master these and you unlock a huge range of expressions.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Three essential verbs</p>
            <div className="mt-3 space-y-4 text-sm">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#C9A44C]">faire</p>
                <div className="mt-1 grid grid-cols-2 gap-x-3 gap-y-0.5">
                  {[["je fais","nous faisons"],["tu fais","vous faites"],["il/elle fait","ils/elles font"]].map(([a,b]) => (
                    <><p key={a} className="text-[#0B1F3A]">{a}</p><p key={b} className="text-[#0B1F3A]">{b}</p></>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#C9A44C]">pouvoir</p>
                <div className="mt-1 grid grid-cols-2 gap-x-3 gap-y-0.5">
                  {[["je peux","nous pouvons"],["tu peux","vous pouvez"],["il/elle peut","ils/elles peuvent"]].map(([a,b]) => (
                    <><p key={a} className="text-[#0B1F3A]">{a}</p><p key={b} className="text-[#0B1F3A]">{b}</p></>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#C9A44C]">vouloir</p>
                <div className="mt-1 grid grid-cols-2 gap-x-3 gap-y-0.5">
                  {[["je veux","nous voulons"],["tu veux","vous voulez"],["il/elle veut","ils/elles veulent"]].map(([a,b]) => (
                    <><p key={a} className="text-[#0B1F3A]">{a}</p><p key={b} className="text-[#0B1F3A]">{b}</p></>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={faireCards} title="faire — to do / make" />
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={pouvoirCards} title="pouvoir — can / to be able to" />
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={vouloirCards} title="vouloir — to want" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Faire, pouvoir, vouloir" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={fillIn} title="Faire, pouvoir, vouloir in context" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={quiz} title="Faire, pouvoir, vouloir quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/french-foundations/unit-6/test" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/french-foundations/unit-7/lesson-2" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
