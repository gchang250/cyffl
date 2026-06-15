import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "l'environnement (m)", back: "the environment", subtext: "Nature, ecosystems, pollution, climate: the most common Sharing the Planet sub-topic in Paper 2." },
  { front: "le changement climatique", back: "climate change", subtext: "The defining environmental challenge of the era. Central to Individual Oral images and Paper 2 reading texts." },
  { front: "les droits de l'homme (m pl)", back: "human rights", subtext: "Fundamental rights for all people. An officially listed sub-topic: appears in texts on conflict, inequality, and justice." },
  { front: "la paix", back: "peace", subtext: "Contrasted with conflict. 'Peace and conflict' is a single paired sub-topic in the IB framework." },
  { front: "le conflit", back: "conflict", subtext: "War, civil unrest, international disputes. Paired with 'peace' as a sub-topic." },
  { front: "l'égalité (f)", back: "equality", subtext: "Equal access to rights, opportunities, and resources. One of the Sharing the Planet sub-topics." },
  { front: "la mondialisation", back: "globalisation", subtext: "The increasing interconnection of economies, cultures, and people worldwide. Both a challenge and an opportunity." },
  { front: "l'éthique (f)", back: "ethics", subtext: "Questions of right and wrong: in science, business, media, and environmental decisions." },
  { front: "le milieu urbain / rural", back: "urban / rural environment", subtext: "The differences between city and countryside life: access, opportunity, and community. An official sub-topic." },
  { front: "le développement durable", back: "sustainable development", subtext: "Meeting present needs without compromising future generations. A key concept in environmental discussion." },
  { front: "le réchauffement climatique", back: "global warming", subtext: "The long-term rise in Earth's average temperature due to greenhouse gases. Arguably the defining Sharing the Planet issue: appears in nearly every exam." },
  { front: "la biodiversité", back: "biodiversity", subtext: "The variety of life on Earth: species, ecosystems, and genetic diversity. Threats to biodiversity are a common Paper 2 reading text topic." },
  { front: "les énergies renouvelables (f pl)", back: "renewable energy", subtext: "Solar, wind, and hydroelectric power: alternatives to fossil fuels. Central to sustainable development discussions and environmental policy texts." },
  { front: "polluer", back: "to pollute", subtext: "To contaminate air, water, or land. 'Les usines polluent les rivières.' = Factories pollute the rivers. Related nouns: la pollution, le polluant." },
  { front: "la surpopulation", back: "overpopulation", subtext: "Too many people for available resources. Often discussed alongside climate change, food security, and urban growth. Linked to urban/rural environment sub-topic." },
];

const matchPairs = [
  { left: "l'environnement", right: "the environment" },
  { left: "les droits de l'homme", right: "human rights" },
  { left: "le conflit", right: "conflict" },
  { left: "l'égalité", right: "equality" },
  { left: "la mondialisation", right: "globalisation" },
  { left: "le développement durable", right: "sustainable development" },
];

const quiz = [
  {
    question: "According to the IB, what is the guiding principle of Sharing the Planet?",
    options: [
      "Explore the ways human creativity and innovation affect our world",
      "Explore the challenges and opportunities faced by individuals and communities in the modern world",
      "Explore the nature of the self and what it is to be human",
      "Explore the ways groups of people organise themselves",
    ],
    correct: 1,
    explanation: "Sharing the Planet guiding principle: 'Explore the challenges and opportunities faced by individuals and communities in the modern world.'",
  },
  {
    question: "An Individual Oral image shows a flooded city street. Which sub-topic and global issue should you identify?",
    options: [
      "Globalisation: international trade",
      "Urban and rural environment: the environment / climate change",
      "Peace and conflict: civil unrest",
      "Ethics: scientific responsibility",
    ],
    correct: 1,
    explanation: "A flooded city connects to both the urban environment sub-topic and the global issue of climate change and environmental degradation.",
  },
  {
    question: "Which IB Sharing the Planet guiding question best fits a text about trade agreements between rich and poor nations?",
    options: [
      "What constitutes an identity?",
      "How does our past shape our present and future?",
      "What challenges and benefits does globalisation bring?",
      "What is the individual's role in the community?",
    ],
    correct: 2,
    explanation: "'What challenges and benefits does globalisation bring?' is one of the two official IB guiding questions for Sharing the Planet.",
  },
  {
    question: "A text about a refugee family fleeing conflict and seeking asylum touches on which sub-topics?",
    options: [
      "Leisure activities and Migration",
      "Peace and conflict and Human rights",
      "Law and order and Education",
      "Globalisation and Artistic expressions",
    ],
    correct: 1,
    explanation: "Refugees fleeing conflict (Peace and conflict) and seeking protection (Human rights): both are official Sharing the Planet sub-topics.",
  },
  {
    question: "What does 'l'éthique' mean in the context of IB discussions?",
    options: ["Equality", "Ethics: questions of right and wrong", "The environment", "Globalisation"],
    correct: 1,
    explanation: "L'éthique = ethics. In IB discussions it comes up around scientific research, environmental decisions, media responsibility, and social justice.",
  },
  {
    question: "A text argues that developed nations have a greater responsibility to fund climate action than developing nations. Which Sharing the Planet guiding question does this address?",
    options: [
      "What can we learn about a culture through its artistic expression?",
      "What role do rules and regulations play in society?",
      "What environmental and social issues present challenges, and how can they be overcome?",
      "What is the individual's role in the community?",
    ],
    correct: 2,
    explanation: "'What environmental and social issues present challenges, and how can these challenges be overcome?': climate responsibility and funding are exactly the kind of challenge-and-solution debate this guiding question frames.",
  },
  {
    question: "An article explains that half of known plant species are threatened due to deforestation. Which Sharing the Planet sub-topic is this?",
    options: ["Human rights", "Peace and conflict", "Globalisation", "The environment"],
    correct: 3,
    explanation: "Threats to plant species from deforestation = biodiversity loss = an environmental issue. 'The environment' is the most direct sub-topic, and biodiversity is one of its core concepts.",
  },
  {
    question: "What is 'le développement durable' and why is it an IB key concept?",
    options: [
      "Rapid industrial development: the cause of environmental problems",
      "Sustainable development: meeting present needs without compromising future generations",
      "Durable infrastructure: long-lasting buildings and transport",
      "Cultural development: preserving traditions in a globalised world",
    ],
    correct: 1,
    explanation: "Le développement durable = sustainable development: development that meets present needs without harming the ability of future generations to meet theirs. It is the central concept linking the environment, equality, and globalisation.",
  },
];

export default function Unit1Lesson5Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 1 · Lesson 5
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Sharing the Planet
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Theme 5. The challenges and opportunities facing individuals and communities: environment, rights, conflict, equality, and globalisation.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Guiding principle</p>
              <p className="mt-2 leading-7 text-white/80">
                Explore the challenges and opportunities faced by individuals and communities in the modern world.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">IB guiding questions</p>
              <ul className="mt-2 space-y-2 text-sm text-[#0B1F3A]">
                <li>→ What environmental and social issues present challenges to the world, and how can these challenges be overcome?</li>
                <li>→ What challenges and benefits does globalisation bring?</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Recommended topics</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {["The environment", "Human rights", "Peace and conflict", "Equality", "Globalization", "Ethics", "Urban and rural environment"].map(t => (
                  <span key={t} className="rounded-full bg-[#FFFDF7] px-2 py-1 text-xs font-bold">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. This theme generates the most Individual Oral images.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Sharing the Planet: key vocabulary" />
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Key phrases for writing about Sharing the Planet</h2>
          <p className="mt-2 text-sm text-[#526173]">Use these in Paper 1 essays and the Individual Oral when addressing environmental or global issues.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { fr: "Le réchauffement climatique menace l'avenir de notre planète.", en: "Global warming threatens the future of our planet." },
              { fr: "Il est urgent d'agir pour protéger la biodiversité.", en: "It is urgent to act to protect biodiversity." },
              { fr: "Les énergies renouvelables sont la clé d'un avenir durable.", en: "Renewable energy is the key to a sustainable future." },
              { fr: "La mondialisation crée à la fois des opportunités et des inégalités.", en: "Globalisation creates both opportunities and inequalities." },
              { fr: "Chacun d'entre nous a un rôle à jouer dans la protection de l'environnement.", en: "Each one of us has a role to play in protecting the environment." },
              { fr: "Les droits de l'homme doivent être respectés partout dans le monde.", en: "Human rights must be respected everywhere in the world." },
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
            <MatchPairs pairs={matchPairs} title="Sharing the Planet vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply the theme to real IB-style scenarios.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Sharing the Planet quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <h2 className="mt-3 text-3xl font-black">All five themes covered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Take the Unit 1 test to lock in all five themes before moving on to Paper 2 skills.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-1/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-1/test" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">
              Unit 1 Test →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
