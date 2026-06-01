import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "la créativité", back: "creativity", subtext: "The ability to produce new ideas, art, or inventions. The defining quality of Human Ingenuity." },
  { front: "l'innovation (f)", back: "innovation", subtext: "New approaches, technologies, or inventions that change how we live. Scientific innovation is an official sub-topic." },
  { front: "les médias (m pl)", back: "media", subtext: "News, social media, advertising, broadcasting — Communication and media is a core Human Ingenuity sub-topic." },
  { front: "la technologie", back: "technology", subtext: "Digital tools, devices, the internet — how technology changes daily life and culture." },
  { front: "les arts (m pl)", back: "the arts", subtext: "Artistic expressions — painting, music, film, literature. How art reflects and shapes culture." },
  { front: "le divertissement", back: "entertainment", subtext: "Movies, music, sport, video games — what a culture produces to entertain itself." },
  { front: "l'expression artistique (f)", back: "artistic expression", subtext: "How artists communicate ideas and emotions. An officially listed Ingenuity sub-topic." },
  { front: "les réseaux sociaux (m pl)", back: "social media / social networks", subtext: "Platforms like Instagram, TikTok, X — a major focus in media and communication texts." },
  { front: "influencer", back: "to influence / to shape", subtext: "How technology or media changes behaviour, culture, or opinion. Core to many Paper 1 texts." },
  { front: "la recherche scientifique", back: "scientific research", subtext: "Studies, experiments, discoveries — Scientific innovation is an official Human Ingenuity sub-topic." },
];

const matchPairs = [
  { left: "la créativité", right: "creativity" },
  { left: "l'innovation", right: "innovation" },
  { left: "les médias", right: "media" },
  { left: "le divertissement", right: "entertainment" },
  { left: "les réseaux sociaux", right: "social media" },
  { left: "la recherche scientifique", right: "scientific research" },
];

const quiz = [
  {
    question: "According to the IB, what is the guiding principle of the Human Ingenuity theme?",
    options: [
      "Explore and tell the stories of events and journeys that shape our lives",
      "Explore the ways in which human creativity and innovation affect our world",
      "Explore the challenges and opportunities faced by individuals in the modern world",
      "Explore the nature of the self and what it is to be human",
    ],
    correct: 1,
    explanation: "Human Ingenuity guiding principle: 'Explore the ways in which human creativity and innovation affect our world.'",
  },
  {
    question: "A text examines how streaming services have changed how people discover music. Which Human Ingenuity sub-topic is this?",
    options: ["Scientific innovation", "Artistic expressions", "Communication and media", "Entertainment"],
    correct: 2,
    explanation: "Streaming = a media/communication platform. 'Communication and media' is the most direct fit, though 'Entertainment' also applies — IB texts often span sub-topics.",
  },
  {
    question: "Which IB Human Ingenuity guiding question best fits a text about how social media affects friendships?",
    options: [
      "What can we learn about a culture through its artistic expression?",
      "How do the media change the way we relate to each other?",
      "How does our past shape our present and future?",
      "What is the individual's role in the community?",
    ],
    correct: 1,
    explanation: "'How do the media change the way we relate to each other?' — this is one of the two official IB guiding questions for Human Ingenuity.",
  },
  {
    question: "A documentary on a country's film industry explores what values that culture expresses through cinema. Which guiding question does this match?",
    options: [
      "How and why do different cultures mark important moments in life?",
      "What constitutes an identity?",
      "What can we learn about a culture through its artistic expression?",
      "What challenges does globalisation bring?",
    ],
    correct: 2,
    explanation: "'What can we learn about a culture through its artistic expression?' — this is the other official IB guiding question for Human Ingenuity.",
  },
  {
    question: "What does 'influencer' mean as a verb in French?",
    options: ["To create content", "To influence / to shape", "To post online", "To communicate"],
    correct: 1,
    explanation: "Influencer = to influence or shape. 'Les réseaux sociaux influencent notre perception de la réalité.' = Social media shapes how we perceive reality.",
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
              Human Ingenuity
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Theme 3. How human creativity and innovation — through art, media, technology, and science — change the world around us.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Guiding principle</p>
              <p className="mt-2 leading-7 text-white/80">
                Explore the ways in which human creativity and innovation affect our world.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">IB guiding questions</p>
              <ul className="mt-2 space-y-2 text-sm text-[#0B1F3A]">
                <li>→ What can we learn about a culture through its artistic expression?</li>
                <li>→ How do the media change the way we relate to each other?</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Recommended topics</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {["Entertainment", "Artistic expressions", "Communication and media", "Technology", "Scientific innovation"].map(t => (
                  <span key={t} className="rounded-full bg-[#FFFDF7] px-2 py-1 text-xs font-bold">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Human Ingenuity — key vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each French term to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Human Ingenuity vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply the theme to real IB-style scenarios.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Human Ingenuity quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Theme 3 covered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: Social Organisation — how groups, communities, and institutions shape society.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-1/lesson-2" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-1/lesson-4" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
