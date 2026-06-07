import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "le réchauffement climatique", back: "global warming", subtext: "Appears in almost every TEF Canada environmental text. 'Les effets du réchauffement climatique se font sentir partout.' = The effects of global warming are being felt everywhere." },
  { front: "le développement durable", back: "sustainable development", subtext: "'Concilier développement économique et développement durable.' = Reconciling economic development and sustainable development. A central concept across environment, society, and economics texts." },
  { front: "l'empreinte carbone (f)", back: "carbon footprint", subtext: "'Réduire son empreinte carbone.' = To reduce one's carbon footprint. Related: les émissions de gaz à effet de serre (greenhouse gas emissions), la décarbonation (decarbonization)." },
  { front: "les inégalités sociales (f pl)", back: "social inequalities", subtext: "'Les inégalités sociales se creusent.' = Social inequalities are widening. 'Se creuser' = to widen/deepen. A very common structure for talking about growing problems." },
  { front: "l'intégration (f)", back: "integration (social)", subtext: "'Les politiques d'intégration des immigrants.' = Immigrant integration policies. Linked to immigration texts — very relevant to candidates taking TEF Canada for immigration purposes." },
  { front: "la cohésion sociale", back: "social cohesion", subtext: "'La diversité culturelle renforce la cohésion sociale.' = Cultural diversity strengthens social cohesion. A theme in both society and politics texts in TEF Canada." },
  { front: "l'intelligence artificielle (f)", back: "artificial intelligence (AI)", subtext: "'L'intelligence artificielle transforme le marché du travail.' = AI is transforming the labour market. Technology texts are among the most common in TEF Canada reading and listening sections." },
  { front: "la vie privée / la confidentialité", back: "privacy / confidentiality", subtext: "'La collecte de données soulève des questions de vie privée.' = Data collection raises privacy concerns. TEF Canada technology texts frequently discuss privacy, data, and digital rights." },
  { front: "la santé publique", back: "public health", subtext: "'Les mesures de santé publique ont permis de limiter la propagation.' = Public health measures helped limit the spread. Health texts are common — know public health vocabulary." },
  { front: "le système de soins de santé", back: "healthcare system", subtext: "'Le financement du système de soins de santé.' = Funding the healthcare system. Canada's healthcare is a frequent topic — l'accès aux soins (access to care), les temps d'attente (wait times)." },
  { front: "le marché du travail", back: "labour market / job market", subtext: "'Les transformations du marché du travail à l'ère numérique.' = Labour market transformations in the digital age. Links technology, society, and economics topics." },
  { front: "la mondialisation", back: "globalization", subtext: "'Les effets de la mondialisation sur les économies locales.' = The effects of globalization on local economies. Appears in economics, society, and politics texts." },
  { front: "la citoyenneté", back: "citizenship", subtext: "'L'acquisition de la citoyenneté canadienne nécessite une connaissance du français.' = Acquiring Canadian citizenship requires knowledge of French. Directly relevant to TEF Canada candidates." },
  { front: "le bénévolat", back: "volunteering", subtext: "'Le bénévolat contribue au tissu social.' = Volunteering contributes to the social fabric. A recurring theme in society and civic participation texts." },
];

const matchPairs = [
  { left: "le réchauffement climatique", right: "global warming" },
  { left: "le développement durable", right: "sustainable development" },
  { left: "l'empreinte carbone", right: "carbon footprint" },
  { left: "les inégalités sociales", right: "social inequalities" },
  { left: "l'intelligence artificielle", right: "artificial intelligence" },
  { left: "la santé publique", right: "public health" },
  { left: "la mondialisation", right: "globalization" },
  { left: "la cohésion sociale", right: "social cohesion" },
];

const quiz = [
  {
    question: "'Les _____ sociales se creusent depuis plusieurs décennies.' Which word fills the gap?",
    options: ["cohésions", "inégalités", "mondialisation", "bénévolats"],
    correct: 1,
    explanation: "'Les inégalités sociales se creusent.' = Social inequalities are widening. 'Se creuser' (to deepen/widen) is the verb commonly used with inequalities, gaps, and divides in French texts. Know this construction.",
  },
  {
    question: "A TEF Canada listening text discusses 'la collecte de données et ses effets sur la vie privée.' This text is most likely about:",
    options: [
      "Environmental policy",
      "Technology and digital rights / privacy",
      "Public health",
      "Agricultural practices",
    ],
    correct: 1,
    explanation: "'La collecte de données' (data collection) and 'la vie privée' (privacy) are technology topic markers. TEF Canada technology texts frequently deal with data, privacy, AI, and digital transformation.",
  },
  {
    question: "Choose the sentence about sustainable development that is correctly structured:",
    options: [
      "'Le développement durable est un développement qui durable.'",
      "'Concilier croissance économique et développement durable est un défi majeur de notre époque.'",
      "'Le développement est durable si on développe.'",
      "'La durabilité développe l'économie durablement.'",
    ],
    correct: 1,
    explanation: "'Concilier [X] et [Y]' = to reconcile / balance X and Y. 'Concilier croissance économique et développement durable est un défi majeur' is a well-constructed, idiomatic sentence that could appear directly in a TEF Canada text.",
  },
  {
    question: "'Les transformations du marché du travail à l'ère numérique touchent de nombreux secteurs.' What does this sentence discuss?",
    options: [
      "Wage negotiations in traditional industries",
      "How the digital age is changing the job market across many sectors",
      "The end of the labour market",
      "Social media and its effect on youth employment",
    ],
    correct: 1,
    explanation: "'Les transformations du marché du travail' = changes in the labour market. 'À l'ère numérique' = in the digital age. 'Toucher de nombreux secteurs' = to affect many sectors. This sentence connects technology and employment — a very common TEF Canada theme.",
  },
  {
    question: "Which word means 'to reduce one's carbon footprint'?",
    options: [
      "'agrandir son empreinte carbone'",
      "'réduire son empreinte carbone'",
      "'calculer son empreinte carbone'",
      "'partager son empreinte carbone'",
    ],
    correct: 1,
    explanation: "'Réduire son empreinte carbone' = to reduce one's carbon footprint. TEF Canada environmental texts will ask you to answer questions about what a speaker or text says should be done — understanding 'réduire', 'limiter', 'diminuer' vs 'augmenter', 'accroître' is essential.",
  },
  {
    question: "Which health vocabulary phrase means 'universal healthcare' in French?",
    options: ["les soins payants", "le système de santé universel / la couverture universelle", "le régime privé", "l'assurance privée obligatoire"],
    correct: 1,
    explanation: "'Le système de santé universel' or 'la couverture universelle' describes universal healthcare. In Canada, this is the basis of provincial health systems. TEF Canada health texts often discuss the merits and challenges of universal vs. private healthcare.",
  },
  {
    question: "A TEF Canada text discusses 'le logement abordable' (affordable housing). Which topic category is this?",
    options: ["Technology", "Environment", "Society", "Health"],
    correct: 2,
    explanation: "'Le logement abordable' (affordable housing) falls under the Society topic — alongside themes like immigration, social inequality, education access, and urban development. These are all common TEF Canada reading and listening text subjects.",
  },
  {
    question: "Complete this sentence: 'Les avancées de _____ artificielle soulèvent des questions éthiques sur l'emploi.'",
    options: ["l'intelligence", "la recherche", "l'innovation", "la technologie"],
    correct: 0,
    explanation: "'L'intelligence artificielle' (AI) — 'les avancées de l'intelligence artificielle soulèvent des questions éthiques sur l'emploi' = AI advances raise ethical questions about employment. AI is a rapidly growing TEF Canada technology topic — learn to recognize 'IA' (the French abbreviation) and related vocabulary.",
  },
];

export default function TEFLesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Unit 2 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Topic Vocabulary
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              TEF Canada reading and listening texts draw from the same recurring themes: environment, society, technology, health, and work. The vocabulary in this lesson appears across all four test sections.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Why this matters</p>
              <p className="mt-2 leading-7 text-white/80">
                You can&apos;t answer a comprehension question about a text you can&apos;t follow. These 14 words and phrases cover the most frequent TEF Canada themes — knowing them turns confusing texts into readable ones.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">The four main themes</p>
              <div className="mt-2 space-y-1 text-sm">
                <p>🌱 <strong>Environment:</strong> climat, émissions, durabilité</p>
                <p>🏙️ <strong>Society:</strong> inégalités, cohésion, citoyenneté</p>
                <p>💻 <strong>Technology:</strong> IA, données, vie privée</p>
                <p>🏥 <strong>Health & work:</strong> santé publique, marché du travail</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Learn the vocabulary</h2>
          <p className="mt-1 text-[#526173]">Every card includes a real sentence from the kind of text you&apos;ll encounter in TEF Canada. Flip to see the English and the explanation.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="TEF Canada — topic vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each French term to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Topic vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Vocabulary in context</h2>
          <p className="mt-1 text-[#526173]">Each question uses these words in the kind of sentence that appears in TEF Canada texts.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Topic vocabulary quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#2563EB]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Topic vocabulary built.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: the opinion and argumentation phrases you need to score well on TEF Canada speaking and writing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-1/test" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Unit 1 Test
            </Link>
            <Link href="/learn/canadian-french-tests/unit-2/lesson-2" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
