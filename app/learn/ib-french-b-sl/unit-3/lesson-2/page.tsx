import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "le registre formel", back: "formal register", subtext: "Used for letters to officials, reports, and formal articles. Uses 'vous', complete sentences, and sophisticated vocabulary." },
  { front: "le registre informel", back: "informal register", subtext: "Used for blogs, diary entries, and messages to friends. Uses 'tu', contractions, and conversational expressions." },
  { front: "le registre semi-formel", back: "semi-formal register", subtext: "Balanced — professional but approachable. Used in magazine articles, reviews, and most newspaper articles." },
  { front: "vous", back: "you (formal / plural)", subtext: "Required in formal letters, speeches to strangers or officials, and any formal writing. Never use 'tu' in a formal letter." },
  { front: "tu", back: "you (informal / singular)", subtext: "Use in blogs, diary entries, and messages to people you know. Using 'tu' in a formal context is a register error." },
  { front: "le destinataire", back: "the recipient / addressee", subtext: "Who you are writing to. Determines register: a mayor needs 'vous' and formal language; a friend needs 'tu' and informal language." },
  { front: "l'objectif", back: "the purpose / objective", subtext: "What you are trying to achieve with your writing: inform, persuade, complain, recommend, describe?" },
  { front: "le ton persuasif", back: "persuasive tone", subtext: "Used when you want to convince the reader. Use rhetorical questions, statistics, and strong verbs: 'Il est essentiel que…', 'Nous devons…'" },
  { front: "le ton informatif", back: "informative tone", subtext: "Presents facts clearly and neutrally. Common in reports and press articles. Avoid personal opinions unless asked." },
  { front: "la salutation", back: "salutation / greeting", subtext: "The opening of a letter. Formal: 'Monsieur / Madame,'. Informal: 'Cher(e) [prénom],'. Must match your register." },
];

const matchPairs = [
  { left: "le registre formel", right: "formal register" },
  { left: "le registre informel", right: "informal register" },
  { left: "le destinataire", right: "the recipient" },
  { left: "le ton persuasif", right: "persuasive tone" },
  { left: "vous", right: "you (formal)" },
  { left: "tu", right: "you (informal)" },
];

const quiz = [
  {
    question: "You are writing a letter to the Minister of Education to request more funding for schools. Which salutation should you use?",
    options: ["Salut!", "Cher ministre,", "Monsieur le Ministre,", "Bonjour Monsieur,"],
    correct: 2,
    explanation: "Monsieur le Ministre is the required formal salutation for an elected official. 'Cher ministre' is too casual; 'Bonjour' is informal.",
  },
  {
    question: "A blog post is written using 'vous' throughout. This is:",
    options: ["Correct — blogs use formal language", "A register error — blogs should use 'tu' or 'je'", "Acceptable — any pronoun works in blogs", "Only correct if the blog is about a serious topic"],
    correct: 1,
    explanation: "Blogs are informal and personal. Using 'vous' where 'tu' or first-person 'je' is expected is a register error that costs marks.",
  },
  {
    question: "You want to convince your school to adopt a recycling programme. Your Paper 1 tone should be:",
    options: ["Informative and neutral", "Persuasive — using evidence and strong arguments", "Informal and conversational", "Personal and emotional only"],
    correct: 1,
    explanation: "When your goal is to convince, use a persuasive tone: evidence, rhetorical questions, and calls to action. 'Il est essentiel que notre école agisse maintenant.'",
  },
  {
    question: "The word 'destinataire' refers to:",
    options: ["The purpose of the text", "The recipient / who you are writing to", "The subject heading of a letter", "The text type you must produce"],
    correct: 1,
    explanation: "Le destinataire = the recipient — the person or organisation you are writing to. This determines register, pronoun choice, and format.",
  },
  {
    question: "A report for a city council should use which pronoun when referring to the reader?",
    options: ["tu", "vous", "on", "Either tu or vous is fine"],
    correct: 1,
    explanation: "A report for a city council is a formal document — always use 'vous'. 'On' can appear in formal writing but 'vous' is required when addressing the reader directly.",
  },
];

export default function Unit3Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 3 · Lesson 2
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Register & Audience
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Register is how formal or informal your language is. Getting it wrong
              costs marks — even if your French grammar is perfect. Learn to match
              your writing to your audience every time.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                Before you write a single sentence, ask:{" "}
                <span className="font-black text-white">who is my reader?</span>{" "}
                A stranger = vous. A friend = tu. An official = formal salutation.
                Register is the first decision, not an afterthought.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Register quick guide</p>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>Formal:</strong> vous, full sentences, complex vocab</p>
                <p><strong>Semi-formal:</strong> vous, clear, approachable</p>
                <p><strong>Informal:</strong> tu / je, conversational, contractions</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Register reference cards</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Register & audience — key terms" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each term to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Register vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Choose the correct register for each writing scenario.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Register & audience quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Register and audience covered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: writing techniques — connectors, opinion phrases, and how to structure a strong argument.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-3/lesson-1" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-3/lesson-3" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
