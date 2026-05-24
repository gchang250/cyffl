import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import FillInTheBlank from "@/components/FillInTheBlank";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "Comment ça va?", back: "How's it going? / How are you?", subtext: "Casual, works with friends." },
  { front: "Ça va?", back: "You okay? / How's it going?", subtext: "Even more casual, just the short form." },
  { front: "Ça va bien.", back: "I'm doing well.", subtext: "The most common answer." },
  { front: "Très bien, merci.", back: "Very well, thanks.", subtext: "Polite and positive." },
  { front: "Pas mal.", back: "Not bad.", subtext: "A relaxed, neutral response." },
  { front: "Comme ci, comme ça.", back: "So-so.", subtext: "Literally: 'like this, like that.'" },
  { front: "Ça va mal.", back: "Not doing great.", subtext: "Honest when things aren't going well." },
  { front: "Et toi?", back: "And you? (informal)", subtext: "Ask right back, it's polite." },
  { front: "Et vous?", back: "And you? (formal)", subtext: "Use with adults or in formal situations." },
];

const matchPairs = [
  { left: "Ça va bien.", right: "I'm doing well." },
  { left: "Pas mal.", right: "Not bad." },
  { left: "Très bien, merci.", right: "Very well, thanks." },
  { left: "Comme ci, comme ça.", right: "So-so." },
  { left: "Et toi?", right: "And you? (casual)" },
  { left: "Ça va mal.", right: "Not doing great." },
];

const fillIn = [
  {
    before: "Comment ça va? , Ça va",
    after: ", merci.",
    answer: "bien",
    hint: "well",
    translation: "How are you?, I'm doing well, thanks.",
  },
  {
    before: "Ça va?  —",
    after: "mal.",
    answer: "Pas",
    hint: "not",
    translation: "How's it going?, Not bad.",
  },
  {
    before: "Je suis fatigué(e). Ça va",
    after: ".",
    answer: "mal",
    hint: "badly",
    translation: "I'm tired. Things aren't going great.",
  },
  {
    before: "Très bien! Et",
    after: "?",
    answer: "toi",
    hint: "you (casual)",
    translation: "Very well! And you?",
  },
];

const quiz = [
  {
    question: "Someone asks 'Comment ça va?', what are they asking?",
    options: ["What's your name?", "Where are you from?", "How are you?", "How old are you?"],
    correct: 2,
    explanation: "Comment ça va? is the standard way to ask 'how are you?' in French.",
  },
  {
    question: "Your friend is having a rough day and says they feel 'comme ci, comme ça.' What do they mean?",
    options: ["Great!", "So-so.", "Terrible.", "I don't know."],
    correct: 1,
    explanation: "Comme ci, comme ça means so-so, neither good nor bad. Literally 'like this, like that.'",
  },
  {
    question: "After answering 'ça va bien,' it's polite to add:",
    options: ["Au revoir!", "Bonjour!", "Et toi?", "Merci beaucoup."],
    correct: 2,
    explanation: "Et toi? (And you?) turns the question back to the other person, always appreciated.",
  },
  {
    question: "You're talking to your teacher. They ask how you're doing. You reply very well. What's the polite response?",
    options: ["Ça va bien, et toi?", "Très bien, merci, et vous?", "Pas mal, salut.", "Ça va, et toi?"],
    correct: 1,
    explanation: "With a teacher, use 'vous', so 'et vous?' is correct, not 'et toi?'.",
  },
];

export default function Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/learn/french-foundations"
          className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]"
        >
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 1 · Lesson 3
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              How Are You?
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Ask how someone's doing, give an honest answer, and keep
              the conversation going, all in French.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-xs font-bold text-[#526173]">Full exchange</p>
            <div className="mt-3 space-y-2">
              <div>
                <p className="font-black">Salut! Comment ça va?</p>
                <p className="text-sm text-[#526173]">Hey! How's it going?</p>
              </div>
              <div>
                <p className="font-black">Très bien, merci. Et toi?</p>
                <p className="text-sm text-[#526173]">Very well, thanks. And you?</p>
              </div>
              <div>
                <p className="font-black">Pas mal!</p>
                <p className="text-sm text-[#526173]">Not bad!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flashcards */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Vocabulary</h2>
          <p className="mt-1 text-[#526173]">Nine expressions, flip each card to learn the meaning.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="How are you?" />
          </div>
        </section>

        {/* Match */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the responses</h2>
          <p className="mt-1 text-[#526173]">Connect each French response to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Responses" />
          </div>
        </section>

        {/* Fill in the blank */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Fill in the blank</h2>
          <p className="mt-1 text-[#526173]">Complete each mini-conversation.</p>
          <div className="mt-6">
            <FillInTheBlank exercises={fillIn} title="Conversation practice" />
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Put it all together.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Unit 1 check-in" />
          </div>
        </section>

        {/* Done */}
        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">
            Unit 1 complete!
          </p>
          <h2 className="mt-3 text-3xl font-black">
            You can greet, introduce yourself, and check in, all in French.
          </h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Unit 2 is where things get interesting: subject pronouns and the
            two most important verbs in French.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/learn/french-foundations/unit-1/lesson-2"
              className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Previous
            </Link>
            <Link
              href="/learn/french-foundations/unit-2/lesson-1"
              className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
            >
              Start Unit 2 →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
