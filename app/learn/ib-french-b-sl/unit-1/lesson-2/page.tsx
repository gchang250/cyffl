import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "les loisirs (m pl)", back: "leisure activities / hobbies", subtext: "What people do in their free time: sport, arts, travel. A core Experiences sub-topic." },
  { front: "les vacances (f pl)", back: "holidays / vacation", subtext: "Holidays and travel is one of the main Experiences topics. Common in Paper 2 reading texts and Paper 1 writing prompts." },
  { front: "le voyage", back: "travel / journey", subtext: "Both the act of travelling and what that journey means. Often tied to personal growth and discovery." },
  { front: "le récit de vie", back: "life story", subtext: "A personal account of someone's experiences: often the format for memoir-style Paper 2 reading texts." },
  { front: "les rites de passage (m pl)", back: "rites of passage", subtext: "Significant life milestones: graduations, weddings, coming-of-age ceremonies. Officially listed as an Experiences topic." },
  { front: "les coutumes (f pl)", back: "customs / traditions", subtext: "Cultural practices passed down through generations. How communities mark important moments." },
  { front: "la migration", back: "migration", subtext: "Moving between places: within a country or internationally. Overlaps with Identities (cultural adjustment)." },
  { front: "se souvenir de", back: "to remember / to recall", subtext: "Key verb for life story and memory-based texts. 'Je me souviens de…' = I remember…" },
  { front: "marquer", back: "to mark / to leave an impression", subtext: "Used to describe experiences that have a lasting impact. 'Cette expérience m'a marqué(e).' = This experience left its mark on me." },
  { front: "l'aventure (f)", back: "adventure", subtext: "Exploration and new experiences. Common in travel writing and holiday narratives." },
  { front: "le témoignage", back: "testimony / personal account", subtext: "A first-person account of events experienced. Often the format of 'Life stories' texts in Paper 2: listen for je/mon/ma." },
  { front: "enrichissant(e)", back: "enriching / rewarding", subtext: "'Cette expérience m'a beaucoup enrichi(e).' = This experience enriched me greatly. A key adjective for positive personal narrative." },
  { front: "un tournant décisif", back: "a decisive turning point", subtext: "A moment that changed everything. 'Ce voyage a été un tournant décisif dans ma vie.' = That trip was a turning point in my life." },
  { front: "s'aventurer", back: "to venture / to go on an adventure", subtext: "To try something bold or new. 'S'aventurer hors de sa zone de confort.' = To venture outside one's comfort zone." },
  { front: "la nostalgie", back: "nostalgia", subtext: "A sentimental longing for the past. Common in memory-based and life-story texts. 'Avec nostalgie, il se souvient de son enfance.' = With nostalgia, he recalls his childhood." },
];

const matchPairs = [
  { left: "les loisirs", right: "leisure activities" },
  { left: "les vacances", right: "holidays" },
  { left: "les rites de passage", right: "rites of passage" },
  { left: "les coutumes", right: "customs / traditions" },
  { left: "la migration", right: "migration" },
  { left: "se souvenir de", right: "to remember" },
];

const quiz = [
  {
    question: "According to the IB, what is the guiding principle of the Experiences theme?",
    options: [
      "Explore the nature of the self and what it is to be human",
      "Explore the ways human creativity and innovation affect our world",
      "Explore and tell the stories of the events, experiences and journeys that shape our lives",
      "Explore the challenges and opportunities faced by individuals in the modern world",
    ],
    correct: 2,
    explanation: "The Experiences guiding principle is: 'Explore and tell the stories of the events, experiences and journeys that shape our lives.'",
  },
  {
    question: "A text describes a family's annual tradition of returning to their home village for a harvest festival. Which Experiences sub-topic is this?",
    options: ["Leisure activities", "Rites of passage", "Customs and traditions", "Migration"],
    correct: 2,
    explanation: "Customs and traditions: cultural practices passed down through generations: is an official Experiences sub-topic.",
  },
  {
    question: "Which IB Experiences guiding question fits a text about a grandmother's immigration story?",
    options: [
      "What constitutes an identity?",
      "How does our past shape our present and our future?",
      "What role do rules and regulations play in society?",
      "What environmental issues challenge the world?",
    ],
    correct: 1,
    explanation: "'How does our past shape our present and our future?': an immigration story is directly about how past experiences define who we become.",
  },
  {
    question: "What does 'marquer' mean in the context of personal experience?",
    options: ["To travel", "To celebrate", "To leave a lasting impression / to mark", "To remember"],
    correct: 2,
    explanation: "Marquer means to leave a mark or impression. 'Cette expérience m'a marqué(e)' = This experience had a lasting impact on me.",
  },
  {
    question: "A student writes about a gap year spent volunteering abroad. Which two Experiences sub-topics does this best fit?",
    options: [
      "Rites of passage and Migration",
      "Holidays and travel and Life stories",
      "Leisure activities and Customs and traditions",
      "Migration and Rites of passage",
    ],
    correct: 1,
    explanation: "A gap year abroad involves travel (Holidays and travel) and is a significant personal story (Life stories). Both are Experiences sub-topics.",
  },
  {
    question: "What does 'enrichissant' mean and when would you use it in the IO or Paper 1?",
    options: [
      "Exhausting: to describe a tiring journey",
      "Enriching / rewarding: to describe a positive life experience",
      "Discouraging: to describe a setback",
      "Challenging: to describe a difficult rite of passage",
    ],
    correct: 1,
    explanation: "Enrichissant(e) = enriching / rewarding. 'Cette expérience m'a beaucoup enrichi(e)' is a high-level phrase for describing positive personal experiences in writing or the oral.",
  },
  {
    question: "A text opens with: 'Je me souviens de ce jour comme si c'était hier…' What narrative technique and sub-topic is being used?",
    options: [
      "Statistics: Social Organisation",
      "Personal testimony and nostalgia: Life stories / Experiences",
      "Persuasion: Human Ingenuity",
      "Official description: Sharing the Planet",
    ],
    correct: 1,
    explanation: "First-person memory-based narration ('je me souviens') is a personal testimony / témoignage: and nostalgia is its key tone. This fits Life stories, an official Experiences sub-topic.",
  },
  {
    question: "A ceremony marks a teenager's transition to adulthood in a specific culture. Which Experiences sub-topic is this?",
    options: ["Leisure activities", "Migration", "Rites of passage", "Customs and traditions"],
    correct: 2,
    explanation: "Rites of passage are significant life milestones: ceremonies marking major transitions like coming of age, graduation, or marriage. This is an official Experiences sub-topic.",
  },
];

export default function Unit1Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 1 · Lesson 2
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Experiences
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Theme 2. Tell the stories of the events, journeys, and moments that shape who we are: leisure, travel, traditions, and migration.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Guiding principle</p>
              <p className="mt-2 leading-7 text-white/80">
                Explore and tell the stories of the events, experiences and journeys that shape our lives.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">IB guiding questions</p>
              <ul className="mt-2 space-y-2 text-sm text-[#0B1F3A]">
                <li>→ How does our past shape our present and our future?</li>
                <li>→ How and why do different cultures mark important moments in life?</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Recommended topics</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {["Leisure activities", "Holidays and travel", "Life stories", "Rites of passage", "Customs and traditions", "Migration"].map(t => (
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
            <FlashCardDeck cards={flashcards} title="Experiences: key vocabulary" />
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Key phrases for writing about Experiences</h2>
          <p className="mt-2 text-sm text-[#526173]">Use these for Paper 1 narratives and life-story texts, and in the Individual Oral when discussing global issues.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { fr: "Cette expérience m'a profondément marqué(e).", en: "This experience profoundly affected me." },
              { fr: "Ce voyage a été un tournant décisif dans ma vie.", en: "This trip was a turning point in my life." },
              { fr: "Je me souviens de ce moment comme si c'était hier.", en: "I remember that moment as if it were yesterday." },
              { fr: "Cette tradition est au cœur de notre culture.", en: "This tradition is at the heart of our culture." },
              { fr: "S'aventurer hors de sa zone de confort est enrichissant.", en: "Venturing outside one's comfort zone is enriching." },
              { fr: "La migration façonne l'identité de manière unique.", en: "Migration shapes identity in a unique way." },
            ].map((p) => (
              <div key={p.fr} className="rounded-xl border border-[#E7DAB9] bg-[#FFFDF7] p-3">
                <p className="font-bold text-sm text-[#0B1F3A]">{p.fr}</p>
                <p className="mt-1 text-xs text-[#526173]">{p.en}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each French term to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Experiences vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply the theme to real IB-style scenarios.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Experiences quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <h2 className="mt-3 text-3xl font-black">Theme 2 covered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: Human Ingenuity: creativity, media, technology, and scientific innovation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-1/lesson-1" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-1/lesson-3" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
