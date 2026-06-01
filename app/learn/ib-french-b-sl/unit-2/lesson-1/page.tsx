import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "Vrai / Faux / On ne sait pas", back: "True / False / Not stated", subtext: "The most common Paper 2 question type. 'On ne sait pas' means the text doesn't say — don't infer." },
  { front: "Relevez…", back: "Find / Pick out…", subtext: "Locate specific words or phrases directly in the text. Quote or closely paraphrase." },
  { front: "Selon le texte…", back: "According to the text…", subtext: "A phrase in questions reminding you to use only what the text says — not your own knowledge." },
  { front: "Identifiez…", back: "Identify…", subtext: "Name or point out something from the text — often a purpose, audience, or idea." },
  { front: "Expliquez…", back: "Explain…", subtext: "Give a reason or meaning in your own words. Examiners want clarity, not length." },
  { front: "l'idée principale", back: "the main idea", subtext: "What the whole text is really about — usually tested with a multiple-choice question." },
  { front: "le but du texte", back: "the purpose of the text", subtext: "Is it to inform? Persuade? Entertain? Describe? This is regularly tested." },
  { front: "le public cible", back: "the target audience", subtext: "Who the text is written for — teenagers, professionals, tourists, etc. Identified from context clues." },
  { front: "le registre", back: "register / tone", subtext: "Formal or informal? Positive or negative? Register questions test awareness of language level." },
  { front: "le contexte", back: "context", subtext: "The setting and situation of the text — use it to guide your understanding and answers." },
];

const matchPairs = [
  { left: "Relevez…", right: "Find / Pick out…" },
  { left: "Selon le texte…", right: "According to the text…" },
  { left: "Expliquez…", right: "Explain…" },
  { left: "le but du texte", right: "the purpose of the text" },
  { left: "le public cible", right: "the target audience" },
  { left: "le registre", right: "register / tone" },
];

const quiz = [
  {
    question: "A Paper 2 question asks: 'Vrai, Faux ou On ne sait pas? — L'auteur travaille dans une école.' The text says the author is a teacher but doesn't say where. What do you answer?",
    options: ["Vrai", "Faux", "On ne sait pas", "Vrai et Faux"],
    correct: 2,
    explanation: "On ne sait pas — the text doesn't confirm the author works in a school specifically. Never infer; only use what is directly and explicitly stated.",
  },
  {
    question: "A question asks 'Quel est le but de ce texte?' The text is a brochure promoting eco-tourism. What is the best answer?",
    options: ["To entertain readers", "To inform and persuade readers to choose eco-friendly travel", "To give factual data about tourism statistics", "To warn against all forms of tourism"],
    correct: 1,
    explanation: "A brochure both informs and persuades — the purpose is to encourage eco-tourism. Give both functions when relevant.",
  },
  {
    question: "The instruction 'Relevez deux raisons pour lesquelles…' means:",
    options: ["Explain two reasons why…", "Find and write two reasons why…", "Choose the best reason why…", "Summarise two reasons why…"],
    correct: 1,
    explanation: "Relevez = pick out / find directly in the text. You should quote or paraphrase from the text, not create your own reasons.",
  },
  {
    question: "A text uses 'vous' throughout, discusses business topics, and is published in a professional magazine. What is the target audience?",
    options: ["Young children", "Professional adults", "Tourists on holiday", "Elementary school students"],
    correct: 1,
    explanation: "Formal register, vous, professional content = target audience of working adults. Le public cible questions require you to read context clues carefully.",
  },
  {
    question: "Before reading a Paper 2 text carefully, the best first step is to:",
    options: ["Read the text from start to finish without stopping", "Read the questions first to know what to look for", "Translate every unfamiliar word in the text", "Write a mental summary of what you expect"],
    correct: 1,
    explanation: "Read questions first — this focuses your reading so you can locate relevant information efficiently during the limited exam time.",
  },
];

export default function Unit2Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 2 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Reading Comprehension Strategies
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Paper 2 is 50% of your grade. The reading section (25%, /40 marks) rewards students who read strategically — not just carefully.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                For <span className="font-black text-white">Vrai/Faux/On ne sait pas</span>,
                the most common mistake is choosing Vrai when the answer is actually
                On ne sait pas. The text must explicitly state it — never assume.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Paper 2 reading — quick facts</p>
              <ul className="mt-2 space-y-1 text-sm text-[#0B1F3A]">
                <li>→ Reading section: 25% of final grade</li>
                <li>→ Out of 40 marks</li>
                <li>→ Multiple text types, all five themes</li>
                <li>→ Questions written in French</li>
                <li>→ Read questions before the text</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. These are the instructions and concepts you'll see in every Paper 2 reading section.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Paper 2 reading — question vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each instruction or term to its meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Paper 2 reading terms" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply reading strategies to realistic Paper 2 scenarios.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Reading comprehension strategies quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Reading strategies covered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: the grammar structures you need to understand complex French texts.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Back to course
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-2/lesson-2" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
