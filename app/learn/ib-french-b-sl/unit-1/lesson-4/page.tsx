import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "les relations sociales (f pl)", back: "social relationships", subtext: "How people interact with each other — friendships, family dynamics, professional relationships. An official sub-topic." },
  { front: "la communauté", back: "community", subtext: "A group of people sharing a place, interest, or identity. Community is a core Social Organisation sub-topic." },
  { front: "l'engagement social (m)", back: "social engagement / civic participation", subtext: "Getting involved in society — volunteering, activism, voting, community work." },
  { front: "l'éducation (f)", back: "education", subtext: "Schools, universities, access to learning. One of the most tested Social Organisation sub-topics." },
  { front: "le monde du travail", back: "the working world", subtext: "Jobs, careers, workplace dynamics, unemployment — an officially listed sub-topic." },
  { front: "la loi", back: "the law", subtext: "Rules and legal systems that govern society. Pairs with 'l'ordre' in the sub-topic 'Law and order'." },
  { front: "l'ordre (m)", back: "order", subtext: "Social order — how rules keep a society functioning. Often discussed alongside justice and rights." },
  { front: "s'organiser", back: "to organise oneself / to come together", subtext: "How groups form and structure themselves. Reflects the IB guiding principle directly." },
  { front: "le rôle de l'individu", back: "the role of the individual", subtext: "How one person fits into and contributes to a larger community or system. Directly from the IB guiding questions." },
  { front: "les inégalités sociales (f pl)", back: "social inequalities", subtext: "Gaps in access to education, work, and opportunity. Often the focus of Social Organisation Paper 1 texts." },
];

const matchPairs = [
  { left: "les relations sociales", right: "social relationships" },
  { left: "l'engagement social", right: "civic participation" },
  { left: "le monde du travail", right: "the working world" },
  { left: "la loi", right: "the law" },
  { left: "s'organiser", right: "to organise / come together" },
  { left: "les inégalités sociales", right: "social inequalities" },
];

const quiz = [
  {
    question: "According to the IB, what is the guiding principle of the Social Organisation theme?",
    options: [
      "Explore the ways human creativity and innovation affect our world",
      "Explore the challenges and opportunities faced by individuals in the modern world",
      "Explore the nature of the self and what it is to be human",
      "Explore the ways in which groups of people organise themselves through common systems or interests",
    ],
    correct: 3,
    explanation: "Social Organisation guiding principle: 'Explore the ways in which groups of people organize themselves, or are organized, through common systems or interests.'",
  },
  {
    question: "A text examines rising youth unemployment and its effect on young people's place in society. Which sub-topic fits best?",
    options: ["Social relationships", "Education", "The working world", "Law and order"],
    correct: 2,
    explanation: "'The working world' is an official Social Organisation sub-topic. Youth unemployment directly concerns access to and participation in the world of work.",
  },
  {
    question: "Which IB Social Organisation guiding question fits a text about mandatory community service for high school students?",
    options: [
      "How does our past shape our present and future?",
      "What is the individual's role in the community?",
      "How do the media change the way we relate to each other?",
      "What constitutes an identity?",
    ],
    correct: 1,
    explanation: "'What is the individual's role in the community?' — mandatory service is directly about the relationship between individuals and their communities.",
  },
  {
    question: "A news article argues that stricter sentencing reduces crime rates. Which Social Organisation sub-topic is this?",
    options: ["Community", "Education", "The working world", "Law and order"],
    correct: 3,
    explanation: "'Law and order' is an official Social Organisation sub-topic. Sentencing, crime, policing, and legal systems all fall here.",
  },
  {
    question: "What does 'l'engagement social' mean?",
    options: ["Social media engagement", "Social inequalities", "Civic participation / social engagement", "Social relationships"],
    correct: 2,
    explanation: "L'engagement social = civic participation or social engagement — getting involved in community life, activism, volunteering, or civic processes.",
  },
];

export default function Unit1Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 1 · Lesson 4
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Social Organisation
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Theme 4. How groups of people organise themselves — through families, communities, education, work, and the law.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Guiding principle</p>
              <p className="mt-2 leading-7 text-white/80">
                Explore the ways in which groups of people organize themselves, or are organized, through common systems or interests.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">IB guiding questions</p>
              <ul className="mt-2 space-y-2 text-sm text-[#0B1F3A]">
                <li>→ What is the individual's role in the community?</li>
                <li>→ What role do rules and regulations play in the formation of a society?</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Recommended topics</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {["Social relationships", "Community", "Social engagement", "Education", "The working world", "Law and order"].map(t => (
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
            <FlashCardDeck cards={flashcards} title="Social Organisation — key vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each French term to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Social Organisation vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply the theme to real IB-style scenarios.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Social Organisation quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Theme 4 covered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            One more: Sharing the Planet — environment, rights, conflict, and globalisation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-1/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-1/lesson-5" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
