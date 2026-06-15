import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "tout d'abord", back: "first of all / to begin with", subtext: "Opens your first argument. More formal than 'premièrement'. Use it to start a structured essay or speech." },
  { front: "de plus / en outre", back: "furthermore / moreover", subtext: "Adds a new point that supports your argument. En outre is more formal and impressive." },
  { front: "cependant / néanmoins", back: "however / nevertheless", subtext: "Introduces a contrast or counterargument. Essential for balanced writing: shows critical thinking." },
  { front: "par conséquent / c'est pourquoi", back: "therefore / that is why", subtext: "Signals cause and effect. Use when you're drawing a conclusion from evidence." },
  { front: "en conclusion / pour conclure", back: "in conclusion / to conclude", subtext: "Opens your final paragraph. Required in every Paper 1 text." },
  { front: "à mon avis / selon moi", back: "in my opinion / according to me", subtext: "Introduces a personal viewpoint. Use in blogs, letters, and opinion pieces." },
  { front: "il est indéniable que", back: "it is undeniable that", subtext: "Strong, formal opinion phrase. Shows confidence in your claim: ideal for higher-band writing." },
  { front: "il faut reconnaître que", back: "one must acknowledge that", subtext: "Introduces a concession: useful for balanced essays and formal writing. Shows nuance." },
  { front: "d'une part… d'autre part", back: "on one hand… on the other hand", subtext: "Classic structure for presenting two sides of an argument." },
  { front: "grâce à / à cause de", back: "thanks to / because of", subtext: "Grâce à (positive cause), à cause de (negative cause). Both explain cause-and-effect." },
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
    explanation: "En conclusion or Pour conclure open the final paragraph. This is a required Paper 1 convention.",
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
    question: "You write: 'Les jeunes passent trop de temps sur les réseaux sociaux. _____, leur concentration diminue.' Which connector fits best?",
    options: ["De plus", "Par conséquent", "Cependant", "D'une part"],
    correct: 1,
    explanation: "Par conséquent / C'est pourquoi signals cause and effect: 'they spend too much time on social media: therefore, their concentration decreases.'",
  },
  {
    question: "Which phrase is most effective for introducing your personal opinion in a formal Paper 1 text?",
    options: [
      "Je pense que…",
      "À mon humble avis…",
      "Je suis d'avis que… / Il me semble que… / Il est évident que…",
      "Selon moi je crois que…",
    ],
    correct: 2,
    explanation: "'Je suis d'avis que' (I am of the view that) is more formal than 'je pense que.' 'Il me semble que' (it seems to me that) signals a measured opinion. 'Il est évident que' (it is clear that) is used when presenting what you frame as an obvious fact. Use register-appropriate opinion markers.",
  },
  {
    question: "You want to concede a counterargument while maintaining your position. Which structure works best?",
    options: [
      "'Je suis totalement d'accord avec l'argument opposé.'",
      "'Certes, [counterargument], mais/cependant, [your position].'",
      "'L'argument contraire n'existe pas.'",
      "'Je ne considère pas les arguments opposés.'",
    ],
    correct: 1,
    explanation: "'Certes… mais / cependant' is the classic concession-and-counter structure. It shows intellectual honesty (you acknowledge the other side) while maintaining your thesis. Examiners reward nuance. Example: 'Certes, les réseaux sociaux facilitent la communication, mais ils réduisent aussi les contacts réels.'",
  },
  {
    question: "Which connecting phrase best introduces a specific example to support your argument?",
    options: [
      "En conclusion…",
      "D'une part…",
      "C'est notamment le cas de… / On peut citer l'exemple de… / Par exemple, en France…",
      "Il est important que…",
    ],
    correct: 2,
    explanation: "'C'est notamment le cas de…' (This is notably the case for…), 'On peut citer l'exemple de…' (One can cite the example of…), and 'Par exemple, en [country]…' are high-scoring example introduction phrases. They show linguistic range and support your argument with evidence.",
  },
];

export default function Unit3Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
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
              The connectors, opinion phrases, and argument structures that make Paper 1 writing clear, coherent, and convincing: and help you score in the higher bands.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                Every strong Paper 1 response has three moves:{" "}
                <span className="font-black text-white">state, support, connect</span>.
                Make a claim, give evidence or an example, then use a connector to
                move to the next point.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Essential connectors by function</p>
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

        {/* Scoring higher section */}
        <section className="mt-16 rounded-2xl border-2 border-[#C9A44C] bg-[#FFFDF7] p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Scoring in the higher bands</p>
          <h2 className="mt-3 text-2xl font-black text-[#0B1F3A]">What separates a 5 from a 7.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Paper 1 examiners reward linguistic range and complexity. To move into the higher bands, you need to demonstrate three things consistently:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="font-black text-[#0B1F3A]">Complex tenses</p>
              <p className="mt-2 text-sm leading-6 text-[#526173]">Use the <strong>subjunctive</strong>, <strong>conditional</strong>, and <strong>futur simple</strong> — not just the present and passé composé. Examiners notice variety.</p>
              <div className="mt-3 space-y-1 text-xs text-[#526173]">
                <p className="italic">"Il faudrait que nous agissions…"</p>
                <p className="italic">"Si nous ne faisons rien, les conséquences seront…"</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="font-black text-[#0B1F3A]">Idiomatic expressions</p>
              <p className="mt-2 text-sm leading-6 text-[#526173]">Native-sounding phrases show cultural and linguistic fluency. Even one or two well-placed expressions push you into the top band.</p>
              <div className="mt-3 space-y-1 text-xs text-[#526173]">
                <p className="italic">"Force est de constater que…"</p>
                <p className="italic">"Il va sans dire que…"</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="font-black text-[#0B1F3A]">Varied connectors</p>
              <p className="mt-2 text-sm leading-6 text-[#526173]">Don't repeat "mais" and "et" — use high-level connectors like <em>néanmoins, de surcroît, or, quant à</em> to show range.</p>
              <div className="mt-3 space-y-1 text-xs text-[#526173]">
                <p className="italic">"Néanmoins, il convient de souligner…"</p>
                <p className="italic">"Quant aux jeunes, ils sont…"</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/resources/verbs-subjonctif" className="rounded-full bg-[#0B1F3A] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5">
              Study le subjonctif →
            </Link>
            <Link href="/resources/verbs-conditionnel" className="rounded-full bg-[#0B1F3A] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5">
              Study le conditionnel →
            </Link>
            <Link href="/resources/verbs-futur-simple" className="rounded-full bg-[#0B1F3A] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5">
              Study le futur simple →
            </Link>
            <Link href="/resources/connecting-words" className="rounded-full border border-[#C9A44C] bg-white px-5 py-2.5 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">
              Full connectors list →
            </Link>
            <Link href="/resources/expressions" className="rounded-full border border-[#C9A44C] bg-white px-5 py-2.5 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">
              Idiomatic expressions →
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <h2 className="mt-3 text-3xl font-black">Paper 1 skills complete.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Take the Unit 3 test, then move to Unit 4: the Individual Oral.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-3/lesson-2" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-3/test" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">
              Unit 3 Test →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
