import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const venirCards = [
  { front: "je viens", back: "I come / I'm coming", subtext: "Je viens dans cinq minutes. — I'm coming in five minutes." },
  { front: "tu viens", back: "you come", subtext: "Tu viens avec nous? — Are you coming with us?" },
  { front: "il/elle vient", back: "he/she comes", subtext: "Elle vient de France. — She comes from France." },
  { front: "nous venons", back: "we come", subtext: "Nous venons à pied. — We're coming on foot." },
  { front: "vous venez", back: "you come", subtext: "Vous venez ce soir? — Are you coming tonight?" },
  { front: "ils/elles viennent", back: "they come", subtext: "Ils viennent souvent ici. — They come here often." },
];

const prendreCards = [
  { front: "je prends", back: "I take", subtext: "Je prends le bus. — I take the bus." },
  { front: "tu prends", back: "you take", subtext: "Tu prends du sucre? — Do you take sugar?" },
  { front: "il/elle prend", back: "he/she takes", subtext: "Il prend le train. — He takes the train." },
  { front: "nous prenons", back: "we take", subtext: "Nous prenons nos affaires. — We're taking our things." },
  { front: "vous prenez", back: "you take", subtext: "Vous prenez quoi? — What are you having?" },
  { front: "ils/elles prennent", back: "they take", subtext: "Elles prennent l'avion. — They're taking the plane." },
];

const partirCards = [
  { front: "je pars", back: "I leave", subtext: "Je pars à 8h. — I leave at 8." },
  { front: "tu pars", back: "you leave", subtext: "Tu pars quand? — When are you leaving?" },
  { front: "il/elle part", back: "he/she leaves", subtext: "Il part en vacances. — He's leaving on holiday." },
  { front: "nous partons", back: "we leave", subtext: "Nous partons demain. — We're leaving tomorrow." },
  { front: "vous partez", back: "you leave", subtext: "Vous partez à quelle heure? — What time do you leave?" },
  { front: "ils/elles partent", back: "they leave", subtext: "Ils partent tout de suite. — They're leaving right away." },
];

const pairs = [
  { left: "je viens", right: "I come" },
  { left: "tu prends", right: "you take" },
  { left: "il part", right: "he leaves" },
  { left: "nous venons", right: "we come" },
  { left: "vous prenez", right: "you take" },
  { left: "ils partent", right: "they leave" },
];

const fillIn = [
  { before: "Je", after: "le bus tous les matins. (prendre)", answer: "prends", hint: "je form of prendre", translation: "I take the bus every morning." },
  { before: "Tu", after: "avec nous ce soir? (venir)", answer: "viens", hint: "tu form of venir", translation: "Are you coming with us tonight?" },
  { before: "Elle", after: "de manger. (venir de — just ate)", answer: "vient de manger", hint: "venir de + infinitive", translation: "She just ate." },
  { before: "Nous", after: "demain matin. (partir)", answer: "partons", hint: "nous form of partir", translation: "We're leaving tomorrow morning." },
  { before: "Ils", after: "de finir le projet. (venir de — just finished)", answer: "viennent de finir", hint: "ils form of venir + de + infinitive", translation: "They just finished the project." },
];

const quiz = [
  {
    question: "What is the 'ils' form of 'venir'?",
    options: ["ils venent", "ils vient", "ils viennent", "ils venons"],
    correct: 2,
    explanation: "Ils viennent — irregular stem change: ven- → vienn- for ils/elles. Je viens, ils viennent.",
  },
  {
    question: "What does 'Je viens de manger' mean?",
    options: ["I'm going to eat.", "I eat.", "I just ate.", "I want to eat."],
    correct: 2,
    explanation: "Venir de + infinitive expresses the recent past (just did something). Je viens de manger = I just ate.",
  },
  {
    question: "What is the 'nous' form of 'prendre'?",
    options: ["nous prennons", "nous prenez", "nous prenons", "nous prend"],
    correct: 2,
    explanation: "Nous prenons is the first-person plural of prendre. Note: ils/elles prennent (double n) but nous prenons (single n).",
  },
  {
    question: "Which sentence uses 'partir' correctly?",
    options: ["Je pars à midi.", "Je part à midi.", "Je parton à midi.", "Je partez à midi."],
    correct: 0,
    explanation: "Je pars is the je form of partir. Partir: je pars, tu pars, il part, nous partons, vous partez, ils partent.",
  },
];

export default function Unit7Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">← French Foundations</Link>
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 7 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Venir, Prendre, Partir</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Three more high-frequency irregular verbs — plus the 'venir de' construction for talking about what you just did.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Three verbs, one lesson</p>
            <div className="mt-3 space-y-4 text-sm">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#C9A44C]">venir</p>
                <div className="mt-1 grid grid-cols-2 gap-x-3 gap-y-0.5">
                  {[["je viens","nous venons"],["tu viens","vous venez"],["il/elle vient","ils/elles viennent"]].map(([a,b]) => (
                    <><p key={a} className="text-[#0B1F3A]">{a}</p><p key={b} className="text-[#0B1F3A]">{b}</p></>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#C9A44C]">prendre</p>
                <div className="mt-1 grid grid-cols-2 gap-x-3 gap-y-0.5">
                  {[["je prends","nous prenons"],["tu prends","vous prenez"],["il/elle prend","ils/elles prennent"]].map(([a,b]) => (
                    <><p key={a} className="text-[#0B1F3A]">{a}</p><p key={b} className="text-[#0B1F3A]">{b}</p></>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#C9A44C]">partir</p>
                <div className="mt-1 grid grid-cols-2 gap-x-3 gap-y-0.5">
                  {[["je pars","nous partons"],["tu pars","vous partez"],["il/elle part","ils/elles partent"]].map(([a,b]) => (
                    <><p key={a} className="text-[#0B1F3A]">{a}</p><p key={b} className="text-[#0B1F3A]">{b}</p></>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={venirCards} title="venir — to come" />
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={prendreCards} title="prendre — to take" />
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={partirCards} title="partir — to leave" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-sm font-black text-[#C9A44C]">Venir de + infinitive = just did something</p>
          <p className="mt-3 text-sm text-white/70">Use venir (present) + de + infinitive to say you just did something.</p>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            {[["Je viens de manger.","I just ate."],["Elle vient d'arriver.","She just arrived."],["Nous venons de finir.","We just finished."],["Ils viennent de partir.","They just left."]].map(([fr,en]) => (
              <div key={fr} className="rounded-xl bg-white/10 p-3">
                <p className="font-black">{fr}</p>
                <p className="mt-0.5 text-xs text-white/60">{en}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Venir, prendre, partir" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={fillIn} title="Venir, prendre, partir in context" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={quiz} title="Venir, prendre, partir quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/french-foundations/unit-7/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/french-foundations/unit-7/lesson-4" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
