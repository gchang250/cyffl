import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "tout d'abord", back: "first of all / to begin with", subtext: "Opens your first argument. More formal than 'premièrement'." },
  { front: "de plus / en outre", back: "furthermore / moreover", subtext: "Adds a new point that supports your argument." },
  { front: "cependant / néanmoins", back: "however / nevertheless", subtext: "Introduces a contrast or counterargument. Essential for balanced writing." },
  { front: "par conséquent / c'est pourquoi", back: "therefore / that is why", subtext: "Signals cause and effect. Use when you're drawing a conclusion from evidence." },
  { front: "en conclusion / pour conclure", back: "in conclusion / to conclude", subtext: "Opens your final paragraph. Required in every Paper 2 text." },
  { front: "à mon avis / selon moi", back: "in my opinion / according to me", subtext: "Introduces a personal viewpoint. Use in blogs, letters, and opinion pieces." },
  { front: "il est indéniable que", back: "it is undeniable that", subtext: "Strong opener for a well-supported argument. Shows confidence in your claim." },
  { front: "il faut reconnaître que", back: "one must acknowledge that", subtext: "Introduces a concession — useful for balanced essays and formal writing." },
  { front: "d'une part… d'autre part", back: "on one hand… on the other hand", subtext: "Classic structure for presenting two sides of an argument." },
  { front: "grâce à / à cause de", back: "thanks to / because of", subtext: "Grâce à (positive), à cause de (negative). Both explain cause." },
];

const matchPairs = [
  { left: "tout d'abord", right: "first of all" },
  { left: "cependant", right: "however" },
  { left: "par conséquent", right: "therefore" },
  { left: "à mon avis", right: "in my opinion" },
  { left: "d'une part… d'autre part", right: "on one hand… on the other hand" },
  { left: "grâce à", right: "thanks to" },
];

const quiz = [
  {
    question: "You want to introduce a counterargument in your formal letter. Which connector is best?",
    options: ["de plus", "tout d'abord", "cependant", "par conséquent"],
    correct: 2,
    explanation: "Cependant (however) or néanmoins (nevertheless) introduce a counterargument or contrast. 'De plus' adds a point, 'par conséquent' signals a conclusion.",
  },
  {
    question: "Your conclusion begins with: '_____, il est clair que des mesures urgentes sont nécessaires.' Which phrase fits?",
    options: ["Tout d'abord", "En conclusion", "De plus", "Cependant"],
    correct: 1,
    explanation: "En conclusion or Pour conclure open the final paragraph. This is a required Paper 2 convention.",
  },
  {
    question: "Which sentence correctly uses 'grâce à'?",
    options: ["Grâce à la pollution, les villes souffrent.", "Grâce à ce programme, les émissions ont baissé.", "Grâce à la pauvreté, rien ne change.", "Grâce à l'échec du projet, les résultats sont mauvais."],
    correct: 1,
    explanation: "Grâce à expresses a positive cause. 'Thanks to this programme, emissions have fallen.' For negative causes, use 'à cause de'.",
  },
  {
    question: "In a balanced article discussing both sides of an issue, which structure is most useful?",
    options: ["tout d'abord… de plus… en conclusion", "d'une part… d'autre part", "à mon avis… selon moi", "par conséquent… c'est pourquoi"],
    correct: 1,
    explanation: "'D'une part… d'autre part' (on one hand… on the other hand) is the classic structure for presenting two sides of an argument.",
  },
  {
    question: "You write: 'Les jeunes passent trop de temps sur les réseaux sociaux. _____, leur concentration diminue.' Which connector best fills the gap?",
    options: ["De plus", "Par conséquent", "Cependant", "D'une part"],
    correct: 1,
    explanation: "Par conséquent / C'est pourquoi signals cause and effect: 'they spend too much time on social media — therefore, their concentration decreases.'",
  },
];

export default function Unit3Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 3 · Lesson 3
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Writing Techniques & Connectors
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The connectors, opinion phrases, and argument structures that make
              Paper 2 writing clear, coherent, and convincing. These are the phrases
              examiners notice — and reward.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                Every strong Paper 2 response has three moves:{" "}
                <span className="font-black text-white">state, support, connect</span>.
                Make a claim, give evidence or an example, then use a connector to
                move to the next point.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Essential connectors</p>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>Add:</strong> de plus, en outre, également</p>
                <p><strong>Contrast:</strong> cependant, néanmoins, or</p>
                <p><strong>Cause:</strong> grâce à, à cause de, puisque</p>
                <p><strong>Result:</strong> par conséquent, donc, c'est pourquoi</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Connector reference cards</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Know when to use each connector.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Connectors & writing techniques" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each connector to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Connectors" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Choose the right connector for each writing situation.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Writing techniques quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Paper 2 skills complete.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Take the Unit 3 test, then move to Unit 4 — the Individual Oral.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-3/lesson-2" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-3/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Unit 3 Test →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
