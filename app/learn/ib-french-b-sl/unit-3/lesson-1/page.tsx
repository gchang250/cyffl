import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  {
    front: "Article (journal / magazine)",
    back: "Author name · Date · Title · Introduction and conclusion",
    subtext: "Semi-formal. The IB specifically requires author name, date, title, and both an introduction and a conclusion for full Criterion C marks.",
  },
  {
    front: "Blog",
    back: "Title · Author/date · First person (Je) · Address the reader",
    subtext: "Informal. Narrate in the first person. Show awareness of your reader by addressing them directly. Multiple blog posts are permitted.",
  },
  {
    front: "Exposé (speech/presentation)",
    back: "Opening address · Stylistic devices · Strong conclusion · Thank you",
    subtext: "Open with a direct address ('Mesdames et messieurs,' / 'Chers camarades,'). Use rhetorical questions and repetition. End with a clear impression and a thank-you.",
  },
  {
    front: "Instructions",
    back: "Title · Logical sequence with subheadings/bullet points · Address the reader",
    subtext: "Sequential, reader-focused format. Use subheadings, bullet points, or short paragraphs. Address the reader directly (e.g., 'Suivez ces étapes…').",
  },
  {
    front: "Proposition (proposal)",
    back: "Title · Introduction · Clear structure (bullets/paragraphs) · Convincing conclusion",
    subtext: "Can be submitted as a letter or email as long as all conventions are present. Ends with a recommendation or call to action.",
  },
  {
    front: "Critère C: Compréhension conceptuelle",
    back: "Text type choice + Register/tone + Conventions · out of /6",
    subtext: "Three things are assessed: (1) Did you choose an appropriate text type? (2) Is your register and tone right for the context, purpose, and recipient? (3) Did you correctly apply the conventions of that text type?",
  },
  {
    front: "Le registre et le ton",
    back: "Register and tone must match context, purpose, and recipient",
    subtext: "The IB assesses whether your register stays consistent throughout. Shifting between formal and informal mid-response costs marks.",
  },
  {
    front: "Le destinataire",
    back: "The recipient: the most important context clue",
    subtext: "The recipient determines almost everything: register, text type, pronoun (tu/vous), and tone. Identify the recipient before you write a word.",
  },
];

const matchPairs = [
  { left: "Article", right: "Author · date · title · intro and conclusion" },
  { left: "Blog", right: "Title · Je · date · address the reader" },
  { left: "Exposé", right: "Opening address · stylistic devices · thank-you" },
  { left: "Proposition", right: "Title · intro · structured · convincing conclusion" },
  { left: "Instructions", right: "Title · sequential · subheadings · address reader" },
  { left: "Critère C", right: "Text type + register + conventions · /6" },
];

const quiz = [
  {
    question: "You receive a Paper 1 prompt with three text type options. How should you choose?",
    options: [
      "Always pick the first option listed: it's usually the easiest",
      "Pick the text type that best fits the context, purpose, and recipient described in the prompt",
      "Always pick the formal option to impress examiners",
      "Pick whichever format you've practised the most, regardless of the prompt",
    ],
    correct: 1,
    explanation: "Criterion C marks whether your text type choice is appropriate. Read the prompt carefully: who is the recipient? What is the purpose? That determines the right format.",
  },
  {
    question: "The prompt asks you to share your opinion on a topic with your classmates. Which is the most directly appropriate text type?",
    options: ["Formal letter", "Proposal", "Speech (exposé) or article for the school paper", "Instructions"],
    correct: 2,
    explanation: "Sharing with classmates = an audience you know. An exposé (speech) is the most direct way to address them: or an article in the school newspaper. A formal letter or proposal would be over-formal for this context.",
  },
  {
    question: "For an article, which four elements does the IB require for full Criterion C marks?",
    options: [
      "Opening address, stylistic devices, conclusion, thank-you",
      "Author name, date, title, introduction and conclusion",
      "Title, first person narration, reader address, date",
      "Title, introduction, bullet points, final recommendation",
    ],
    correct: 1,
    explanation: "The official IB conventions for an article are: author name, date, title, and both an introduction and conclusion. Missing any of these costs Criterion C marks.",
  },
  {
    question: "In a blog, which two features show 'reader awareness' that the IB looks for?",
    options: [
      "A formal salutation and a bibliography",
      "A thank-you formula and numbered sections",
      "Addressing the reader directly and writing in the first person",
      "A title and an author name",
    ],
    correct: 2,
    explanation: "The IB defines blog 'reader awareness' as addressing the reader directly (e.g., 'Et vous, qu'en pensez-vous ?') and narrating in first person (je). These are required for full Criterion C.",
  },
  {
    question: "The marking guide notes that Criterion B does NOT penalise…",
    options: [
      "Writing in an informal register",
      "Using the wrong text type conventions",
      "Factual inaccuracies: only coherence and development are assessed",
      "Using the wrong tense",
    ],
    correct: 2,
    explanation: "The IB explicitly states that examiners should not penalise factually incorrect information in Criterion B, as long as ideas are coherent and sufficiently developed. Don't worry if you can't recall an exact statistic: make a logical claim and develop it.",
  },
  {
    question: "A prompt asks you to write a 'blog' about a social media campaign. What format conventions must you follow for Criterion C?",
    options: [
      "Opening address (Mesdames et messieurs…), stylistic devices, thank-you",
      "Title, author name/date, first-person narration, and address the reader directly",
      "Title, introduction, bullet points, concluding recommendation",
      "Author name, date, title, introduction, conclusion",
    ],
    correct: 1,
    explanation: "Blog conventions: title, author name/date, first-person narration (je), and reader awareness: address the reader directly (e.g., 'Et vous, avez-vous déjà participé…?'). These are the four elements assessed by Criterion C for blogs.",
  },
  {
    question: "A prompt about a school environmental project gives you three text type options. You know how to write an article well but the prompt specifies classmates as the audience. What is the best choice?",
    options: [
      "Always choose the article: you know it best",
      "Choose the text type that best fits the audience and purpose, even if it means using a type you've practised less",
      "Choose the speech (exposé) because it's always the right choice for school audiences",
      "Choose whichever appears first in the list",
    ],
    correct: 1,
    explanation: "Criterion C assesses whether your text type choice is appropriate to the context, purpose, and recipient. An article written for classmates could work: but an exposé (speech) or blog might fit the audience even better. The choice must be justified by the prompt's context, not by what you find easiest.",
  },
  {
    question: "You are writing a proposal (proposition) for a city council. What is the required conclusion element?",
    options: [
      "A thank-you formula (Merci pour votre attention…)",
      "A rhetorical question asking the council to reflect",
      "A convincing conclusion or call to action / final recommendation",
      "A summary of all arguments made",
    ],
    correct: 2,
    explanation: "Proposals end with a convincing conclusion or clear recommendation: the call to action. 'C'est pourquoi je vous recommande vivement d'adopter cette mesure' or 'Je vous invite à approuver ce projet.' Without a clear recommendation, a proposal is structurally incomplete under Criterion C.",
  },
];

export default function Unit3Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 3 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Text Types & Conventions
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Paper 1 gives you a choice of three text types per prompt. Criterion C marks whether you chose the right one, used the right register, and applied the correct conventions.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                Paper 1 <span className="font-black text-white">gives you three text type options</span> per prompt. You pick one. Criterion C (/6) then assesses whether your choice fits the context, whether your register is consistent, and whether you applied the conventions correctly.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Criterion C — /6 marks</p>
              <ul className="mt-2 space-y-1 text-sm text-[#0B1F3A]">
                <li>→ Text type choice appropriate to context/purpose/recipient</li>
                <li>→ Register and tone consistent throughout</li>
                <li>→ Text type conventions correctly applied</li>
              </ul>
              <p className="mt-3 text-xs text-[#526173]">Note: Criterion B does not penalise factual inaccuracies — only coherence and development are assessed.</p>
            </div>
          </div>
        </div>

        {/* Official IB conventions */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Official IB text type conventions</h2>
          <p className="mt-1 text-[#526173]">These are the specific elements examiners look for in each text type when marking Criterion C.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                type: "Article",
                register: "Semi-formal",
                elements: ["Author name", "Date", "Title", "Introduction", "Conclusion"],
              },
              {
                type: "Blog",
                register: "Informal",
                elements: ["Title", "Author name and/or date/time", "First person (je)", "Address the reader directly", "Note: multiple posts permitted"],
              },
              {
                type: "Exposé (speech)",
                register: "Formal",
                elements: ["Opening address (Mesdames et messieurs…)", "Introduction", "Stylistic devices (rhetorical questions, repetition)", "Strong conclusion", "Thank-you / closing formula"],
              },
              {
                type: "Instructions",
                register: "Neutral / semi-formal",
                elements: ["Title", "Logical sequential structure", "Subheadings, bullet points, or short paragraphs", "Address the reader directly"],
              },
              {
                type: "Proposition (proposal)",
                register: "Semi-formal to formal",
                elements: ["Title", "Introduction", "Clear structure (bullets or paragraphs)", "Convincing conclusion or final recommendation", "Note: can be sent as a letter or email"],
              },
            ].map((t) => (
              <div key={t.type} className="rounded-2xl border border-[#E7DAB9] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-black text-[#0B1F3A]">{t.type}</p>
                  <span className="rounded-full bg-[#FFFDF7] px-2 py-0.5 text-xs font-bold text-[#526173]">{t.register}</span>
                </div>
                <ul className="mt-3 space-y-1">
                  {t.elements.map((el) => (
                    <li key={el} className="flex items-start gap-2 text-sm text-[#526173]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A44C]" />
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Text type selection guide */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Read the prompt — it tells you the format</h2>
          <p className="mt-1 text-[#526173]">The prompt always contains context clues. Use the recipient, purpose, and setting to choose the right text type.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { clue: "Sharing your opinion with classmates or a school audience", format: "Exposé or article (school paper)", register: "Informal / semi-formal" },
              { clue: "Writing to a government body, competition organiser, or official organisation", format: "Proposition or formal letter", register: "Semi-formal to formal" },
              { clue: "Sharing a personal experience or opinion with a general public audience", format: "Blog or article", register: "Informal / semi-formal" },
              { clue: "Describing and promoting something to convince a broad audience", format: "Blog or article", register: "Informal / semi-formal" },
              { clue: "Presenting a project or initiative to decision-makers", format: "Proposition", register: "Formal" },
              { clue: "Addressing an audience at an event or debate", format: "Exposé", register: "Formal" },
            ].map((item) => (
              <div key={item.format + item.clue} className="rounded-2xl border border-[#E7DAB9] bg-[#FFFDF7] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#526173]">If the prompt involves…</p>
                <p className="mt-1 text-sm italic text-[#0B1F3A]">&ldquo;{item.clue}&rdquo;</p>
                <div className="mt-3 border-t border-[#D8D0C3] pt-3 flex items-center justify-between gap-2">
                  <p className="font-black text-[#0B1F3A]">{item.format}</p>
                  <span className="rounded-full bg-white border border-[#E7DAB9] px-2 py-0.5 text-xs font-bold text-[#526173]">{item.register}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Reference cards</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Paper 1: text types & Criterion C" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each text type to its IB conventions.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Text type conventions" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply what you know about text types and Criterion C.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Text types & conventions quiz" />
          </div>
        </section>

        {/* Grammar resources callout */}
        <section className="mt-16 rounded-2xl bg-[#0B1F3A] p-8 text-white shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Resources to study alongside this unit</p>
          <h2 className="mt-3 text-2xl font-black">Use these to write at a higher level.</h2>
          <p className="mt-3 leading-7 text-white/70">
            Criterion A rewards linguistic range and complexity. Review these before your exam.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { label: "Le subjonctif", desc: "Essential for formal writing: 'il faut que', 'bien que', 'pour que'", href: "/resources/verbs-subjonctif" },
              { label: "Le conditionnel", desc: "Polite requests, hypotheticals, and recommendations", href: "/resources/verbs-conditionnel" },
              { label: "Le futur simple", desc: "Predictions, plans, and consequences in your writing", href: "/resources/verbs-futur-simple" },
              { label: "Connecting words", desc: "Connectors from A1 to C1: elevate your argument structure", href: "/resources/connecting-words" },
              { label: "Idiomatic expressions", desc: "Add cultural fluency to your writing: Criterion A top band", href: "/resources/expressions" },
            ].map(r => (
              <Link key={r.label} href={r.href} className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <p className="font-black text-white group-hover:text-[#C9A44C]">{r.label} →</p>
                <p className="mt-1 text-sm text-white/60">{r.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <h2 className="mt-3 text-3xl font-black">Text types and conventions covered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: register and audience: how to keep your tone consistent throughout.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Back to course
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-3/lesson-2" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
