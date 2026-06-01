import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "l'identité (f)", back: "identity", subtext: "The core concept of Theme 1 — who a person is, shaped by culture, language, beliefs, and experience." },
  { front: "le mode de vie", back: "lifestyle / way of life", subtext: "How someone lives day-to-day: diet, habits, values, routines. Very common in Paper 1 texts." },
  { front: "le bien-être", back: "well-being", subtext: "Physical and mental health together. A key Identities sub-topic — often linked to lifestyle choices." },
  { front: "les croyances (f pl)", back: "beliefs", subtext: "Religious, spiritual, or personal convictions that shape how someone sees the world." },
  { front: "les valeurs (f pl)", back: "values", subtext: "What a person or culture considers important — honesty, family, freedom, success." },
  { front: "la sous-culture", back: "subculture", subtext: "A group within a larger culture with its own distinct identity — music scenes, online communities, etc." },
  { front: "la langue maternelle", back: "mother tongue / first language", subtext: "Language and identity are deeply linked in IB. Your first language shapes how you think and who you are." },
  { front: "appartenir à", back: "to belong to", subtext: "A key verb for discussions of identity — belonging to a group, culture, or community." },
  { front: "se définir", back: "to define oneself", subtext: "How a person describes or understands their own identity. Common in oral discussion questions." },
  { front: "l'estime de soi (f)", back: "self-esteem", subtext: "How a person values themselves — linked to well-being and mental health sub-topics." },
];

const matchPairs = [
  { left: "le mode de vie", right: "lifestyle" },
  { left: "le bien-être", right: "well-being" },
  { left: "les croyances", right: "beliefs" },
  { left: "les valeurs", right: "values" },
  { left: "la sous-culture", right: "subculture" },
  { left: "appartenir à", right: "to belong to" },
];

const quiz = [
  {
    question: "According to the IB, what is the guiding principle of the Identities theme?",
    options: [
      "Explore the challenges faced by individuals in the modern world",
      "Explore the nature of the self and what it is to be human",
      "Explore the ways human creativity affects our world",
      "Explore how groups of people organise themselves",
    ],
    correct: 1,
    explanation: "The Identities guiding principle is: 'Explore the nature of the self and what it is to be human.' This is the lens for all texts and discussions in this theme.",
  },
  {
    question: "A text discusses how growing up bilingual shapes a person's sense of self. Which Identities sub-topic is this?",
    options: ["Health and well-being", "Subcultures", "Language and identity", "Lifestyles"],
    correct: 2,
    explanation: "Language and identity is an official Identities sub-topic. Bilingualism, mother tongue, and how language shapes self-perception all fall here.",
  },
  {
    question: "Which IB Identities question best fits a text about young people rejecting their parents' religious traditions?",
    options: [
      "How and why do different cultures mark important moments in life?",
      "What constitutes an identity?",
      "What role do rules and regulations play in society?",
      "How do the media change the way we relate to each other?",
    ],
    correct: 1,
    explanation: "'What constitutes an identity?' — rejecting or adopting beliefs and values is central to forming identity. This is one of the two IB guiding questions for this theme.",
  },
  {
    question: "What does 'appartenir à' mean?",
    options: ["To define oneself", "To belong to", "To identify with", "To separate from"],
    correct: 1,
    explanation: "Appartenir à = to belong to. It's essential vocabulary for discussing identity, group membership, and cultural belonging.",
  },
  {
    question: "A teenager joins an online gaming community with its own language and norms. Which Identities sub-topic is this?",
    options: ["Health and well-being", "Beliefs and values", "Language and identity", "Subcultures"],
    correct: 3,
    explanation: "Subcultures — groups within a larger culture with their own distinct identity, norms, and practices — is an official Identities sub-topic.",
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
              Identities
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Theme 1. Explore the nature of the self and what it is to be human — through lifestyle, belief, language, and belonging.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Guiding principle</p>
              <p className="mt-2 leading-7 text-white/80">
                Explore the nature of the self and what it is to be human.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">IB guiding questions</p>
              <ul className="mt-2 space-y-2 text-sm text-[#0B1F3A]">
                <li>→ What constitutes an identity?</li>
                <li>→ How do language and culture contribute to form our identity?</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Recommended topics</p>
              <div className="mt-2 grid grid-cols-2 gap-1 text-sm text-[#0B1F3A]">
                {["Lifestyles", "Health and well-being", "Beliefs and values", "Subcultures", "Language and identity"].map(t => (
                  <span key={t} className="rounded-full bg-[#FFFDF7] px-2 py-1 text-xs font-bold">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. These words appear constantly in Identities texts.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Identities — key vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each French term to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Identities vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply the theme to real IB-style scenarios and questions.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Identities quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Theme 1 covered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: Experiences — the events, journeys, and moments that shape our lives.
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
