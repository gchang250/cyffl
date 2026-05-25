import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "manger", back: "mangé — J'ai mangé une pizza." },
  { front: "parler", back: "parlé — Elle a parlé au prof." },
  { front: "regarder", back: "regardé — Nous avons regardé un film." },
  { front: "écouter", back: "écouté — Tu as écouté la chanson?" },
  { front: "finir", back: "fini — Ils ont fini leurs devoirs." },
  { front: "choisir", back: "choisi — J'ai choisi le rouge." },
  { front: "attendre", back: "attendu — Vous avez attendu longtemps?" },
  { front: "répondre", back: "répondu — Il a répondu à la question." },
  { front: "avoir", back: "eu — J'ai eu un problème." },
  { front: "faire", back: "fait — Qu'est-ce que tu as fait?" },
  { front: "voir", back: "vu — J'ai vu un bon film." },
  { front: "prendre", back: "pris — Elle a pris le bus." },
];

const pairs = [
  { left: "manger", right: "mangé" },
  { left: "parler", right: "parlé" },
  { left: "finir", right: "fini" },
  { left: "voir", right: "vu" },
  { left: "faire", right: "fait" },
  { left: "prendre", right: "pris" },
];

const fillIn = [
  { before: "J'", after: "une pizza hier soir. (manger)", answer: "ai mangé", hint: "j'ai + mangé", translation: "I ate a pizza last night." },
  { before: "Elle", after: "à son prof. (parler)", answer: "a parlé", hint: "elle a + parlé", translation: "She spoke to her teacher." },
  { before: "Nous", after: "un bon film. (voir)", answer: "avons vu", hint: "nous avons + vu", translation: "We saw a good film." },
  { before: "Qu'est-ce que tu", after: "ce weekend? (faire)", answer: "as fait", hint: "tu as + fait", translation: "What did you do this weekend?" },
  { before: "Ils", after: "leurs devoirs. (finir)", answer: "ont fini", hint: "ils ont + fini", translation: "They finished their homework." },
];

const quiz = [
  {
    question: "How do you form the past participle of a regular -er verb?",
    options: ["Remove -er, add -i", "Remove -er, add -é", "Remove -er, add -u", "Keep the infinitive"],
    correct: 1,
    explanation: "Regular -er verbs: remove -er, add -é. Manger → mangé, parler → parlé.",
  },
  {
    question: "What is the passé composé of 'finir' for 'elle'?",
    options: ["Elle a fini.", "Elle est fini.", "Elle a finir.", "Elle avait fini."],
    correct: 0,
    explanation: "Finir is an -ir verb: past participle = fini. Auxiliary = avoir. Elle a fini.",
  },
  {
    question: "What is the past participle of 'voir'?",
    options: ["voiré", "voir", "vu", "voit"],
    correct: 2,
    explanation: "Voir (to see) is irregular: past participle = vu. J'ai vu un film.",
  },
  {
    question: "What auxiliary verb does 'manger' use in the passé composé?",
    options: ["Être", "Avoir", "Aller", "Faire"],
    correct: 1,
    explanation: "Most verbs use avoir as their auxiliary. Only a specific group of verbs (and reflexive verbs) use être.",
  },
];

export default function Unit6Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">← French Foundations</Link>
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 6 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Passé Composé with avoir</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Your first past tense in French. The passé composé is how you talk about completed actions — things that happened and are done.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">How to form it</p>
            <p className="mt-3 text-sm font-semibold text-[#526173]">avoir (present) + past participle</p>
            <div className="mt-4 space-y-2 text-sm">
              <div>
                <p className="font-bold text-[#0B1F3A]">-er verbs: remove -er → add -é</p>
                <p className="text-[#526173]">manger → mangé</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">-ir verbs: remove -ir → add -i</p>
                <p className="text-[#526173]">finir → fini</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">-re verbs: remove -re → add -u</p>
                <p className="text-[#526173]">attendre → attendu</p>
              </div>
            </div>
            <div className="mt-4 space-y-1 border-t border-[#E7DAB9] pt-4 text-sm">
              <p className="text-[#0B1F3A]"><span className="font-black">J'ai mangé.</span> <span className="text-[#526173]">I ate.</span></p>
              <p className="text-[#0B1F3A]"><span className="font-black">Tu as fini.</span> <span className="text-[#526173]">You finished.</span></p>
              <p className="text-[#0B1F3A]"><span className="font-black">Il a attendu.</span> <span className="text-[#526173]">He waited.</span></p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Past participles" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-sm font-black text-[#C9A44C]">Avoir as auxiliary</p>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2 md:grid-cols-3">
            {[["j'ai mangé","I ate"],["tu as mangé","you ate"],["il/elle a mangé","he/she ate"],["nous avons mangé","we ate"],["vous avez mangé","you ate"],["ils/elles ont mangé","they ate"]].map(([fr,en]) => (
              <div key={fr} className="rounded-xl bg-white/10 p-3">
                <p className="font-black">{fr}</p>
                <p className="mt-0.5 text-xs text-white/60">{en}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Infinitive to past participle" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={fillIn} title="Passé composé with avoir" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={quiz} title="Passé composé with avoir quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/french-foundations/unit-5/test" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/french-foundations/unit-6/lesson-2" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
