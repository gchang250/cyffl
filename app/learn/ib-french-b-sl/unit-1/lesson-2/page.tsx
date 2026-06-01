import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "la créativité", back: "creativity", subtext: "Theme 3: Human Ingenuity — arts, invention, and self-expression." },
  { front: "les médias (m pl)", back: "media", subtext: "News, social media, advertising — all fall under Human Ingenuity." },
  { front: "l'innovation (f)", back: "innovation", subtext: "New ideas, inventions, and scientific breakthroughs." },
  { front: "la technologie", back: "technology", subtext: "Covers both digital tech and broader scientific advances." },
  { front: "les arts (m pl)", back: "the arts", subtext: "Visual art, music, literature, film — all Human Ingenuity sub-topics." },
  { front: "la famille", back: "family", subtext: "Theme 4: Social Organisation — family structures and roles." },
  { front: "l'éducation (f)", back: "education", subtext: "Schools, universities, learning systems — a major Social Organisation topic." },
  { front: "le travail", back: "work / employment", subtext: "Jobs, careers, the workplace — common in Paper 1 and Paper 2 prompts." },
  { front: "la communauté", back: "community", subtext: "Local groups, neighbourhoods, social networks." },
  { front: "la justice", back: "justice", subtext: "Law, rights, fairness — key Social Organisation sub-topic." },
];

const matchPairs = [
  { left: "la créativité", right: "creativity" },
  { left: "les médias", right: "media" },
  { left: "l'innovation", right: "innovation" },
  { left: "l'éducation", right: "education" },
  { left: "le travail", right: "work / employment" },
  { left: "la justice", right: "justice" },
];

const quiz = [
  {
    question: "A text discusses how streaming platforms have changed how young people consume music. Which theme is this?",
    options: ["Social Organisation", "Identities", "Human Ingenuity", "Sharing the Planet"],
    correct: 2,
    explanation: "Media, technology, and how creativity is distributed all fall under Human Ingenuity.",
  },
  {
    question: "What does 'le travail' mean in an IB French context?",
    options: ["Travel", "Work / employment", "Technology", "Arts"],
    correct: 1,
    explanation: "Le travail = work or employment. It appears frequently in Social Organisation texts about careers and the modern workplace.",
  },
  {
    question: "A news article about rising youth unemployment and its effect on family structures fits which theme?",
    options: ["Experiences", "Human Ingenuity", "Sharing the Planet", "Social Organisation"],
    correct: 3,
    explanation: "Employment, family structures, and social change are all core Social Organisation sub-topics.",
  },
  {
    question: "Which of these is a Human Ingenuity sub-topic?",
    options: ["Rites of passage", "Environmental protection", "Scientific advances", "Immigration"],
    correct: 2,
    explanation: "Scientific advances — along with arts, media, and technology — is a key Human Ingenuity sub-topic.",
  },
  {
    question: "A text about how a city redesigned its school system to be more inclusive touches on:",
    options: ["Identities and Experiences", "Social Organisation and Identities", "Human Ingenuity and Sharing the Planet", "Experiences and Human Ingenuity"],
    correct: 1,
    explanation: "Education (Social Organisation) and identity and inclusion (Identities) overlap here. IB texts frequently cross themes.",
  },
];

export default function Unit1Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 1 · Lesson 2
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Human Ingenuity & Social Organisation
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Themes 3 and 4. Technology, creativity, community, and the structures
              that shape how we live together.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                <span className="font-black text-white">Social Organisation</span> texts
                often ask you to identify problems and solutions. Look for cause-and-effect
                language: <em>à cause de, c'est pourquoi, par conséquent.</em>
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Theme 4 sub-topics</p>
              <ul className="mt-2 space-y-1 text-sm text-[#0B1F3A]">
                <li>→ Family structures</li>
                <li>→ Education and youth</li>
                <li>→ Work and careers</li>
                <li>→ Community and belonging</li>
                <li>→ Law, rights, and justice</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Human Ingenuity & Social Organisation — key terms" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each French term to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Theme 3 & 4 vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply the themes to real IB-style scenarios.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Human Ingenuity & Social Organisation quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Themes 3 and 4 covered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            One more theme to go: Sharing the Planet — the environment, global issues, and equality.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-1/lesson-1" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-1/lesson-3" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
