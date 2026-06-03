import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const vocabCards = [
  { front: "nuire à", back: "to harm / to damage — Les écrans peuvent nuire à notre concentration.", subtext: "Irregular verb. Nuire à + noun. Common in environmental/opinion texts." },
  { front: "le réseau social", back: "social network — Les réseaux sociaux influencent nos opinions.", subtext: "Plural: les réseaux sociaux. Plural of réseau = réseaux." },
  { front: "pourtant", back: "yet / nevertheless — Pourtant, certains avantages sont réels.", subtext: "Contrast connector; adds nuance to an argument." },
  { front: "la prise de conscience", back: "awareness / awakening — La prise de conscience environnementale est nécessaire.", subtext: "Literally 'taking of awareness'. A key phrase in environmental writing." },
  { front: "il est indéniable que", back: "it is undeniable that — Il est indéniable que le climat change.", subtext: "A formal phrase used to introduce an accepted fact in an argument." },
  { front: "à condition que", back: "provided that / as long as — C'est utile à condition qu'on l'utilise bien.", subtext: "Followed by the subjunctive in formal French; in school writing, the infinitive is acceptable." },
  { front: "la déforestation", back: "deforestation — La déforestation détruit des millions d'hectares chaque année.", subtext: "A cognate! Note the French spelling." },
  { front: "s'engager", back: "to commit / to get involved — Chacun doit s'engager pour protéger la planète.", subtext: "A strong verb for writing about responsibility and action." },
];

const pairs = [
  { left: "nuire à", right: "to harm / to damage" },
  { left: "les réseaux sociaux", right: "social networks" },
  { left: "la prise de conscience", right: "awareness / awakening" },
  { left: "il est indéniable que", right: "it is undeniable that (formal opinion)" },
  { left: "la déforestation", right: "deforestation" },
  { left: "s'engager", right: "to commit / get involved" },
];

const questions = [
  {
    question: "According to Text A, what positive effect can social media have?",
    options: ["It improves academic results", "It allows young people to stay connected and raise social awareness", "It replaces traditional media entirely", "It eliminates loneliness completely"],
    correct: 1,
    explanation: "The text mentions 'il permet de rester en contact avec des amis et de partager des idées, voire de sensibiliser à des causes importantes' — staying connected and raising awareness.",
  },
  {
    question: "What concern does Text A raise about screen time?",
    options: ["It causes eye problems", "It leads to poor diet", "Spending too many hours on screens can harm sleep and concentration", "It makes young people forget their homework"],
    correct: 2,
    explanation: "The text says 'passer trop de temps devant un écran peut nuire au sommeil et à la concentration' — harm to sleep and concentration.",
  },
  {
    question: "In Text B, what does the narrator say humans must do urgently?",
    options: ["Stop using cars entirely", "Reduce consumption, plant trees, and choose renewable energy", "Ban factories from producing goods", "Move to the countryside"],
    correct: 1,
    explanation: "The text states we must 'réduire notre consommation, planter des arbres et choisir des sources d'énergie renouvelables' — reduce consumption, plant trees, and choose renewables.",
  },
  {
    question: "What persuasive device does Text B use to involve the reader directly?",
    options: ["Rhetorical questions only", "Statistics and graphs", "Direct address using 'nous' and 'chacun d'entre nous'", "Quotes from scientists"],
    correct: 2,
    explanation: "Text B uses 'nous' (we) and 'chacun d'entre nous' (each one of us) to address the reader directly and create a sense of shared responsibility.",
  },
  {
    question: "What does 'nuire à' mean, and what grammatical feature does it have?",
    options: [
      "To help with — used before nouns only.",
      "To harm/damage — irregular verb followed by à + noun.",
      "To know — followed by an infinitive.",
      "To improve — used with de + noun.",
    ],
    correct: 1,
    explanation: "Nuire à = to harm / to damage. It's an irregular verb followed by à: nuire à la santé (harm health), nuire à l'environnement (harm the environment). Common in formal and environmental writing.",
  },
  {
    question: "Which phrase from the vocabulary introduces a widely accepted fact in an argument?",
    options: ["à mon avis", "je pense que", "il est indéniable que", "pourtant"],
    correct: 2,
    explanation: "'Il est indéniable que' = it is undeniable that. This phrase introduces a fact the writer presents as beyond dispute. It signals objective, strong evidence — ideal for exam writing.",
  },
  {
    question: "What type of text are both texts in this lesson, and how can you tell?",
    options: [
      "Narratives — because they tell a story with characters.",
      "Opinion/argumentative texts — because they present a position, evidence, and counterpoints.",
      "Descriptions — because they describe places and events.",
      "Instructions — because they tell the reader what to do.",
    ],
    correct: 1,
    explanation: "Both texts are argumentative/opinion texts. Signs include: opinion phrases (selon moi, il est clair que), contrast connectors (pourtant, cependant), evidence phrases (il est indéniable que), and a call to action at the end.",
  },
  {
    question: "What does 's'engager' mean in the context of Text B?",
    options: ["To hire someone", "To commit / to get involved (in a cause)", "To communicate", "To agree with someone"],
    correct: 1,
    explanation: "S'engager = to commit / to get involved. Chacun doit s'engager pour protéger la planète = Everyone must commit to protecting the planet. It's a strong, formal verb used in writing about responsibility.",
  },
];

export default function Unit6Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#854D0E]">Unit 6 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Upper-Intermediate Texts</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              These longer texts mix tenses, include opinions, and use more complex vocabulary. Both are argumentative or opinion-based — a common type in school exams. Look for opinion markers (<em>selon moi, il est clair que, pourtant</em>), contrast connectors, and phrases that introduce evidence or consequences. You won&apos;t know every word — use your strategies.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Language of argument</p>
            <div className="mt-3 space-y-2 text-xs">
              <div>
                <p className="font-bold text-[#854D0E]">Presenting an opinion</p>
                <p className="text-[#526173]">selon moi · à mon avis · il me semble que · je pense que</p>
              </div>
              <div>
                <p className="font-bold text-[#854D0E]">Presenting a fact</p>
                <p className="text-[#526173]">il est clair que · il est indéniable que · on sait que</p>
              </div>
              <div>
                <p className="font-bold text-[#854D0E]">Conceding a point</p>
                <p className="text-[#526173]">certes · il est vrai que · bien que (+ subj.)</p>
              </div>
              <div>
                <p className="font-bold text-[#854D0E]">Concluding</p>
                <p className="text-[#526173]">en conclusion · pour conclure · en fin de compte</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text A */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Text A — Les réseaux sociaux et les jeunes</h2>
          <div className="mt-4 rounded-2xl border border-[#E7DAB9] bg-white p-6 text-sm leading-7">
            <p>
              Aujourd&apos;hui, les réseaux sociaux font partie intégrante de la vie des jeunes. La grande majorité des adolescents utilisent des plateformes comme Instagram, TikTok ou YouTube chaque jour. Certes, ces outils présentent des avantages non négligeables: ils permettent de rester en contact avec des amis éloignés et de partager des idées, voire de sensibiliser à des causes importantes. Pourtant, certains experts s&apos;inquiètent des effets négatifs. Il est prouvé que passer trop de temps devant un écran peut nuire au sommeil et à la concentration. De plus, les images idéalisées diffusées sur ces plateformes peuvent affecter l&apos;image que les jeunes ont d&apos;eux-mêmes. Selon moi, les réseaux sociaux sont utiles à condition qu&apos;on les utilise de manière réfléchie et limitée. La clé, c&apos;est l&apos;équilibre.
            </p>
          </div>
          <div className="mt-4 space-y-3">
            <h3 className="text-sm font-black uppercase tracking-wide text-[#854D0E]">Comprehension questions — Text A</h3>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">1. Quels sont les avantages des réseaux sociaux mentionnés dans le texte?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Rester en contact avec des amis et partager des idées; sensibiliser à des causes importantes.</p>
            </div>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">2. Quel effet négatif les images idéalisées peuvent-elles avoir sur les jeunes?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Elles peuvent affecter l&apos;image que les jeunes ont d&apos;eux-mêmes (leur estime de soi).</p>
            </div>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">3. Quelle est l&apos;opinion de l&apos;auteur sur les réseaux sociaux?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Ils sont utiles à condition qu&apos;on les utilise de manière réfléchie et limitée. La clé est l&apos;équilibre.</p>
            </div>
          </div>
        </div>

        {/* Text B */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Text B — L&apos;environnement: notre responsabilité</h2>
          <div className="mt-4 rounded-2xl border border-[#E7DAB9] bg-white p-6 text-sm leading-7">
            <p>
              Il est indéniable que notre planète traverse une crise environnementale sans précédent. Le réchauffement climatique, la déforestation massive et la pollution des océans menacent la biodiversité et la qualité de vie de millions d&apos;êtres humains. Ces problèmes ne sont pas nouveaux — on les connaît depuis des décennies — pourtant, les actions concrètes restent insuffisantes. La responsabilité est partagée: les gouvernements doivent adopter des politiques ambitieuses, mais chacun d&apos;entre nous a également un rôle à jouer. Nous pouvons réduire notre consommation, planter des arbres, choisir des sources d&apos;énergie renouvelables et soutenir des organisations engagées dans la protection de l&apos;environnement. La prise de conscience est déjà là. Ce qui manque encore, c&apos;est le passage à l&apos;action. Il n&apos;est pas trop tard — mais il faut agir maintenant.
            </p>
          </div>
          <div className="mt-4 space-y-3">
            <h3 className="text-sm font-black uppercase tracking-wide text-[#854D0E]">Comprehension questions — Text B</h3>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">1. Quels problèmes environnementaux le texte mentionne-t-il?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Le réchauffement climatique, la déforestation massive et la pollution des océans.</p>
            </div>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">2. Selon le texte, qui est responsable des problèmes environnementaux?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> La responsabilité est partagée: les gouvernements et chaque individu.</p>
            </div>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">3. Selon l&apos;auteur, qu&apos;est-ce qui manque encore malgré la prise de conscience?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Le passage à l&apos;action — agir concrètement, pas seulement être conscient du problème.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={vocabCards} title="Advanced vocabulary from the texts" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Vocabulary match" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Text comprehension quiz" />
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg text-[#854D0E]">Unit 6 complete!</p>
          <p className="mt-2 text-[#526173]">You&apos;ve read and analysed French texts at three levels — from beginner daily-life texts to upper-intermediate opinion pieces. Take the test to complete Unit 6.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/school-french-support/unit-6/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Lesson 3</Link>
            <Link href="/learn/school-french-support/unit-6/test" className="rounded-full bg-[#854D0E] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#713D0A]">Take the unit test →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
