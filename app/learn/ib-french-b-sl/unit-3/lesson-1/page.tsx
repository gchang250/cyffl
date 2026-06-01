import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "l'article de presse (m)", back: "newspaper / press article", subtext: "Formal or semi-formal. Has a headline, subheading, introduction, and paragraphs. Attributed to a journalist or publication." },
  { front: "le blog / le journal intime", back: "blog / diary entry", subtext: "Personal, informal, first-person ('je'). Expresses opinions and personal experience. Opens with 'Cher journal…' and a date." },
  { front: "la lettre formelle", back: "formal letter", subtext: "Fixed structure: sender, recipient, date, subject line, formal salutation ('Monsieur / Madame,'), body, closing. Uses 'vous'." },
  { front: "l'e-mail / le message", back: "email / message", subtext: "Varies from informal (to a friend) to formal (to a company). Register must match the recipient." },
  { front: "le rapport", back: "report", subtext: "Structured with numbered sections or subheadings. Objective tone. Often from an organisation or researcher." },
  { front: "le discours / l'exposé", back: "speech / presentation", subtext: "Opens with a direct address ('Mesdames et messieurs', 'Chers camarades'). Structured with clear sections." },
  { front: "la critique", back: "review (film, book, restaurant…)", subtext: "Semi-formal. Summarises and evaluates. Balanced — both positives and negatives." },
  { front: "la brochure / le dépliant", back: "brochure / leaflet", subtext: "Used for promotion or information. Often has sections and bullet points. Persuasive or informative." },
  { front: "l'en-tête (m)", back: "header / heading", subtext: "The title or subject line at the top — required in formal letters and reports. Examiners look for this." },
  { front: "la conclusion", back: "conclusion", subtext: "Every Paper 1 text needs one. Summarise your argument or call to action — even a short one scores marks." },
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
    question: "A Paper 1 task asks you to write a piece for your school newspaper about a new environmental initiative. What text type should you produce?",
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
    explanation: "Blogs are personal, first-person (je), and conversational. They express opinions and personal experiences. Don't forget: opens with 'Cher journal…' and a date.",
  },
  {
    question: "Every Paper 1 text type requires:",
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
              Paper 1 is 25% of your grade, out of 30 marks. Each text type has expected conventions — structure, opening, and closing — that examiners mark directly.
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
              <p className="text-xs font-bold text-[#526173]">Paper 1 quick facts</p>
              <ul className="mt-2 space-y-1 text-sm text-[#0B1F3A]">
                <li>→ 25% of final grade · out of 30 marks</li>
                <li>→ Choose 1 from 2 prompts</li>
                <li>→ Minimum 250 words (SL)</li>
                <li>→ Format marks in Criterion A</li>
                <li>→ Language quality in Criterion B</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Text type reference cards</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Know the conventions for each format.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Paper 1 — text types" />
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
          <p className="mt-1 text-[#526173]">Choose the right text type for each Paper 1 scenario.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Text types & format quiz" />
          </div>
        </section>

        {/* Text type selection guide */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Read the prompt — it tells you the format</h2>
          <p className="mt-1 text-[#526173]">The prompt always contains context clues. Use them to identify the text type before you write a single word.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { clue: "Writing to a government body, minister, or official organisation", format: "Formal letter", note: "Monsieur / Madame, · use vous · formal closing formula" },
              { clue: "Writing to your closest friend or a family member", format: "Informal letter or message", note: "Cher(e) [prénom], · use tu · warm, personal tone" },
              { clue: "Sharing an experience or opinion with strangers or a general public", format: "Blog or social media post", note: "Title, first person, hook opening, no salutation needed" },
              { clue: "Writing for your school newspaper or a magazine", format: "Article de presse", note: "Headline + subheading · semi-formal · structured paragraphs" },
              { clue: "Addressing an audience at an event, assembly, or debate", format: "Speech (discours)", note: "Mesdames et messieurs, · clear structure · call to action" },
              { clue: "Presenting findings or recommendations to a committee or organisation", format: "Report (rapport)", note: "Numbered sections or subheadings · objective, formal tone" },
            ].map((item) => (
              <div key={item.format} className="rounded-2xl border border-[#E7DAB9] bg-[#FFFDF7] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#526173]">If the prompt says…</p>
                <p className="mt-1 text-sm italic text-[#0B1F3A]">&ldquo;{item.clue}&rdquo;</p>
                <div className="mt-3 border-t border-[#D8D0C3] pt-3">
                  <p className="font-black text-[#0B1F3A]">{item.format}</p>
                  <p className="mt-1 text-xs text-[#526173]">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grammar resources callout */}
        <section className="mt-16 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Resources to study alongside this unit</p>
          <h2 className="mt-3 text-2xl font-black">Use these to write at a higher level.</h2>
          <p className="mt-3 leading-7 text-white/70">
            Paper 1 examiners reward students who use complex grammar and varied vocabulary. Before your exam, make sure you've reviewed these resources.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { label: "Le subjonctif", desc: "Essential for formal writing — 'il faut que', 'bien que', 'pour que'", href: "/resources/verbs-subjonctif" },
              { label: "Le conditionnel", desc: "Polite requests, hypotheticals, and recommendations", href: "/resources/verbs-conditionnel" },
              { label: "Le futur simple", desc: "Predictions, plans, and consequences in your writing", href: "/resources/verbs-futur-simple" },
              { label: "Connecting words", desc: "Connectors from A1 to C1 — elevate your argument structure", href: "/resources/connecting-words" },
              { label: "Idiomatic expressions", desc: "Add cultural fluency to your writing — C-band and above", href: "/resources/expressions" },
            ].map(r => (
              <Link key={r.label} href={r.href} className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <p className="font-black text-white group-hover:text-[#C9A44C]">{r.label} →</p>
                <p className="mt-1 text-sm text-white/60">{r.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
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
