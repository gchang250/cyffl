import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "le changement climatique", back: "climate change", subtext: "Theme 5: Sharing the Planet — the most tested environmental topic." },
  { front: "la biodiversité", back: "biodiversity", subtext: "The variety of life in an ecosystem. Appears in environmental texts." },
  { front: "les ressources naturelles (f pl)", back: "natural resources", subtext: "Water, forests, fossil fuels — sustainability debates." },
  { front: "la pauvreté", back: "poverty", subtext: "Economic inequality and access — a key global issue for the oral." },
  { front: "l'inégalité (f)", back: "inequality", subtext: "Social, economic, or gender inequality. Very common in Paper 1 texts." },
  { front: "la mondialisation", back: "globalisation", subtext: "How the world is becoming more connected — and more unequal." },
  { front: "le développement durable", back: "sustainable development", subtext: "Growth that meets present needs without harming the future." },
  { front: "les droits de l'homme (m pl)", back: "human rights", subtext: "Fundamental rights for all people — a recurring theme in oral discussions." },
  { front: "le conflit", back: "conflict", subtext: "War, social tension, international disputes — Sharing the Planet sub-topic." },
  { front: "l'accès (m)", back: "access", subtext: "Access to education, healthcare, food — a key inequality concept." },
];

const matchPairs = [
  { left: "le changement climatique", right: "climate change" },
  { left: "la pauvreté", right: "poverty" },
  { left: "l'inégalité", right: "inequality" },
  { left: "la mondialisation", right: "globalisation" },
  { left: "le développement durable", right: "sustainable development" },
  { left: "les droits de l'homme", right: "human rights" },
];

const quiz = [
  {
    question: "An image shows melting glaciers and a caption about rising sea levels. Which theme should you connect it to in the Individual Oral?",
    options: ["Identities", "Human Ingenuity", "Sharing the Planet", "Social Organisation"],
    correct: 2,
    explanation: "Environmental issues — climate change, natural resources, sustainability — fall under Sharing the Planet.",
  },
  {
    question: "What does 'le développement durable' mean?",
    options: ["Economic development", "Cultural development", "Sustainable development", "Industrial growth"],
    correct: 2,
    explanation: "Le développement durable is sustainable development — growth that doesn't compromise future generations.",
  },
  {
    question: "A Paper 1 text examines how wealthier countries emit more carbon dioxide than poorer ones. This touches on:",
    options: ["Identities and Experiences", "Sharing the Planet and Social Organisation", "Human Ingenuity only", "Experiences only"],
    correct: 1,
    explanation: "Environmental responsibility (Sharing the Planet) and global inequality (Social Organisation) overlap here.",
  },
  {
    question: "Which word best fits this sentence: 'La _____ économique entre pays riches et pays pauvres s'est aggravée.'",
    options: ["mondialisation", "biodiversité", "inégalité", "créativité"],
    correct: 2,
    explanation: "L'inégalité (inequality) fits — 'Economic inequality between rich and poor countries has worsened.'",
  },
  {
    question: "An oral image shows refugees arriving at a border. The best global issue to discuss is:",
    options: ["The impact of technology on daily life", "Migration, conflict, and human rights", "How streaming changed music", "Educational reform"],
    correct: 1,
    explanation: "Refugees, migration, conflict, and human rights are all Sharing the Planet topics — ideal for the oral.",
  },
];

export default function Unit1Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 1 · Lesson 3
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Sharing the Planet
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Theme 5 — and the most common source of Individual Oral images. Climate,
              inequality, globalisation, conflict, and human rights.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                When you see an oral image, ask yourself:{" "}
                <span className="font-black text-white">what global problem</span> does
                this illustrate? Sharing the Planet images almost always connect to
                environment, inequality, or rights.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Theme 5 sub-topics</p>
              <ul className="mt-2 space-y-1 text-sm text-[#0B1F3A]">
                <li>→ Climate and environment</li>
                <li>→ Poverty and inequality</li>
                <li>→ Urban and rural communities</li>
                <li>→ Conflict and peace</li>
                <li>→ Globalisation</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Sharing the Planet — key terms" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each French term to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Theme 5 vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply the vocabulary to IB-style scenarios.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Sharing the Planet quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">All five themes covered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Take the Unit 1 test to lock in all the theme vocabulary before moving to Paper 1 skills.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-1/lesson-2" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-1/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Unit 1 Test →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
