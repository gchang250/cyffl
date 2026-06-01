import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "l'article de presse (m)", back: "newspaper / press article", subtext: "Formal or semi-formal. Has a headline, subheading, introduction, and paragraphs. Attributed to a journalist or publication." },
  { front: "le blog / le journal intime", back: "blog / diary entry", subtext: "Personal, informal, first-person ('je'). Expresses opinions and personal experience. Conversational tone." },
  { front: "la lettre formelle", back: "formal letter", subtext: "Fixed structure: sender, recipient, date, subject line, formal salutation, body, closing. Uses 'vous'." },
  { front: "l'e-mail / le message", back: "email / message", subtext: "Varies from informal (to a friend) to formal (to a company). Register must match the recipient." },
  { front: "le rapport", back: "report", subtext: "Structured with numbered sections or subheadings. Objective tone. Often from an organisation or researcher." },
  { front: "le discours / l'exposé", back: "speech / presentation", subtext: "Opens with a direct address ('Mesdames et messieurs', 'Chers camarades'). Structured with clear sections." },
  { front: "la critique", back: "review (film, book, restaurant…)", subtext: "Semi-formal. Summarises and evaluates. Balanced — both positives and negatives." },
  { front: "la brochure / le dépliant", back: "brochure / leaflet", subtext: "Used for promotion or information. Often has sections and bullet points. Persuasive or informative." },
  { front: "l'en-tête (m)", back: "header / heading", subtext: "The title or subject line at the top of a document — required in formal letters and reports." },
  { front: "la conclusion", back: "conclusion", subtext: "Every Paper 2 text needs one. Summarise your argument or call to action." },
];

const matchPairs = [
  { left: "l'article de presse", right: "newspaper article" },
  { left: "la lettre formelle", right: "formal letter" },
  { left: "le rapport", right: "report" },
  { left: "le discours", right: "speech" },
  { left: "la critique", right: "review" },
  { left: "la brochure", right: "brochure / leaflet" },
];

const quiz = [
  {
    question: "A Paper 2 task asks you to write a piece for your school newspaper about a new environmental initiative. What text type should you produce?",
    options: ["A formal letter", "A diary entry", "A newspaper article", "A report"],
    correct: 2,
    explanation: "A school newspaper piece = un article de presse. It should have a headline, introduction, structured paragraphs, and semi-formal register.",
  },
  {
    question: "Which text type opens with 'Mesdames et messieurs' and has a direct address to an audience?",
    options: ["Blog", "Formal letter", "Report", "Speech"],
    correct: 3,
    explanation: "Un discours (speech) always opens with a direct address. This is a required convention — examiners look for it.",
  },
  {
    question: "You're writing a formal letter to a mayor. Which salutation is correct?",
    options: ["Salut!", "Cher ami,", "Monsieur le Maire,", "Bonjour,"],
    correct: 2,
    explanation: "Monsieur le Maire (or Madame la Mairesse) is the correct formal salutation for writing to an elected official.",
  },
  {
    question: "A blog post about your experience volunteering abroad should be written in:",
    options: ["First person ('je'), informal, personal tone", "Third person ('il/elle'), formal, objective tone", "Second person ('tu'), instructional tone", "Passive voice, no personal pronouns"],
    correct: 0,
    explanation: "Blogs are personal, first-person (je), and conversational. They express opinions and personal experiences — the opposite of a formal report.",
  },
  {
    question: "Every Paper 2 text type requires:",
    options: ["A formal salutation and closing", "A headline and byline", "An appropriate format AND a conclusion", "Numbered sections and subheadings"],
    correct: 2,
    explanation: "Every text type needs appropriate format conventions AND a conclusion. Missing the format loses marks in Criterion A even if the content is strong.",
  },
];

export default function Unit3Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 3 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Text Types & Format Conventions
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Paper 2 requires you to write in a specific format. Each text type has
              expected conventions — structure, opening, and closing — that examiners
              mark directly.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                Format marks are easy to lose and easy to win. Always include the
                required{" "}
                <span className="font-black text-white">opening, structure, and closing</span>{" "}
                for your text type — even if time is short.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Paper 2 quick facts</p>
              <ul className="mt-2 space-y-1 text-sm text-[#0B1F3A]">
                <li>→ 1 hour total</li>
                <li>→ 25% of final grade</li>
                <li>→ Choose 1 from 3 prompts</li>
                <li>→ Minimum 250 words (SL)</li>
                <li>→ Format marks in Criterion A</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Text type reference cards</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Know the conventions for each format.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Paper 2 — text types" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each text type to its English name.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Text types" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Choose the right text type for each Paper 2 scenario.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Text types & format quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Text types and format covered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: register and audience — how to match your language to who you're writing for.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Back to course
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-3/lesson-2" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
