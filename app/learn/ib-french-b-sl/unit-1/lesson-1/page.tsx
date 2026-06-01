import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "l'identité (f)", back: "identity", subtext: "Theme 1: Identities — a core concept for Paper 1 texts and the oral." },
  { front: "les valeurs (f pl)", back: "values", subtext: "What a person or culture considers important." },
  { front: "les croyances (f pl)", back: "beliefs", subtext: "Religious, cultural, or personal convictions." },
  { front: "le mode de vie", back: "lifestyle / way of life", subtext: "How someone lives day-to-day. Very common in Paper 1 texts." },
  { front: "le bien-être", back: "well-being", subtext: "Physical and mental health together. A key Identities sub-topic." },
  { front: "les loisirs (m pl)", back: "leisure activities / hobbies", subtext: "Theme 2: Experiences — what people do in their free time." },
  { front: "le voyage", back: "travel / journey", subtext: "Travel and tourism is a major Experiences sub-topic." },
  { front: "les traditions (f pl)", back: "traditions", subtext: "Cultural practices passed down through generations." },
  { front: "l'immigration (f)", back: "immigration", subtext: "Movement of people between countries — overlaps Identities and Experiences." },
  { front: "les rites de passage (m pl)", back: "rites of passage", subtext: "Milestones like graduations, weddings — common in Experiences texts." },
];

const matchPairs = [
  { left: "l'identité", right: "identity" },
  { left: "les valeurs", right: "values" },
  { left: "le bien-être", right: "well-being" },
  { left: "les loisirs", right: "leisure activities" },
  { left: "le voyage", right: "travel" },
  { left: "l'immigration", right: "immigration" },
];

const quiz = [
  {
    question: "A Paper 1 text discusses how social media affects teenagers' sense of self. Which IB theme does this fall under?",
    options: ["Sharing the Planet", "Identities", "Human Ingenuity", "Social Organisation"],
    correct: 1,
    explanation: "Sense of self, personal identity, and how external forces shape who we are is the Identities theme.",
  },
  {
    question: "What does 'le bien-être' mean?",
    options: ["Belief system", "Lifestyle", "Well-being", "Identity"],
    correct: 2,
    explanation: "Le bien-être covers physical and mental health — a sub-topic within Identities.",
  },
  {
    question: "A text about a Canadian student studying abroad and experiencing culture shock fits best under:",
    options: ["Human Ingenuity", "Social Organisation", "Experiences", "Sharing the Planet"],
    correct: 2,
    explanation: "Cultural encounters and life abroad fall under the Experiences theme.",
  },
  {
    question: "Which of these is the correct translation of 'les rites de passage'?",
    options: ["Tourist passports", "Rites of passage", "Travel documents", "Cultural journeys"],
    correct: 1,
    explanation: "Les rites de passage refers to significant life milestones — graduations, coming-of-age ceremonies, etc.",
  },
  {
    question: "A text about a family's religious traditions and how they shape daily life touches on which two Identities sub-topics?",
    options: ["Travel and immigration", "Beliefs and lifestyle", "Technology and community", "Arts and language"],
    correct: 1,
    explanation: "Les croyances (beliefs) and le mode de vie (lifestyle/daily life) are both Identities sub-topics.",
  },
];

export default function Unit1Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 1 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Identities & Experiences
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The vocabulary you need for Themes 1 and 2. These words appear
              constantly in Paper 1 texts and are essential for the Individual Oral.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                All five IB themes overlap. A text about{" "}
                <span className="font-black text-white">immigration</span> might
                touch on identity, cultural traditions, and social change at once.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Theme 1 sub-topics</p>
              <ul className="mt-2 space-y-1 text-sm text-[#0B1F3A]">
                <li>→ Lifestyle choices</li>
                <li>→ Health and well-being</li>
                <li>→ Beliefs and values</li>
                <li>→ Cultural identity</li>
                <li>→ Language and identity</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Learn the word and its IB context.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Identities & Experiences — key terms" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each French term to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Theme 1 & 2 vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply the vocabulary to real IB-style scenarios.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Identities & Experiences quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Themes 1 and 2 covered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: Human Ingenuity and Social Organisation — themes 3 and 4.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Back to course
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-1/lesson-2" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
