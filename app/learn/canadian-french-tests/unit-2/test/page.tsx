import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "'Les _____ sociales se creusent malgré les politiques de redistribution.' Which word fills the gap?",
    options: ["cohésions", "mondialisation", "inégalités", "bénévolats"],
    correct: 2,
    explanation: "'Les inégalités sociales se creusent' = social inequalities are widening. 'Se creuser' (to deepen) is the standard verb used with inequalities, divisions, and gaps in French. This sentence structure appears frequently in TEF Canada texts on society.",
  },
  {
    question: "A TEF Canada text discusses 'l'intelligence artificielle et son impact sur le marché du travail.' The text is most likely about:",
    options: [
      "Environmental sustainability",
      "How AI is transforming employment and jobs",
      "Government immigration policy",
      "Public health funding",
    ],
    correct: 1,
    explanation: "'L'intelligence artificielle' (AI) + 'le marché du travail' (labour market) = technology and employment — one of the most common TEF Canada themes. Recognizing these topic markers tells you immediately what the text is about before you read in depth.",
  },
  {
    question: "You are writing TEF Canada Task 2 — a formal letter to a city council. Which salutation is correct?",
    options: [
      "'Chère Madame la Mairesse,'",
      "'Bonjour,'",
      "'Salut !'",
      "'Madame, Monsieur,'",
    ],
    correct: 3,
    explanation: "'Madame, Monsieur,' is the standard salutation when writing to an institution or unknown recipient. 'Chère Madame la Mairesse,' would only be correct if the letter is addressed directly to the mayor by name. Never 'Bonjour' or 'Salut' in a formal letter.",
  },
  {
    question: "Which structure best shows a balanced argument in TEF Canada Task 2?",
    options: [
      "'La mondialisation est très bonne mais aussi très mauvaise.'",
      "'D'une part, la mondialisation stimule la croissance économique ; d'autre part, elle peut aggraver les inégalités.'",
      "'La mondialisation, c'est compliqué.'",
      "'Je pense que la mondialisation est bonne et mauvaise parfois.'",
    ],
    correct: 1,
    explanation: "'D'une part… ; d'autre part…' presents two sides of an argument in one clean structure — separated by a semicolon. The examiner immediately sees organised, balanced thinking. This is the correct two-sided structure for formal writing.",
  },
  {
    question: "Which sentence uses 'Certes… mais…' correctly?",
    options: [
      "'Certes le français, mais aussi l'anglais.'",
      "'Certes, les énergies renouvelables coûtent cher, mais elles réduisent la dépendance aux combustibles fossiles.'",
      "'Certes et mais c'est la mondialisation.'",
      "'Certes oui mais non.'",
    ],
    correct: 1,
    explanation: "'Certes, [concession], mais [counter-argument].' = Admittedly, renewable energy is expensive, but it reduces dependence on fossil fuels. The structure acknowledges the opposing view and then argues against it — this shows critical thinking to the examiner.",
  },
  {
    question: "'_____ constater que les émissions de CO₂ continuent d'augmenter malgré les accords internationaux.' Which phrase fits?",
    options: ["Il est à craindre de", "Force est de", "Il va sans dire de", "Il convient de bien"],
    correct: 1,
    explanation: "'Force est de constater que…' = One cannot help but notice that / The evidence compels us to note that. It is a fixed expression — 'force est de constater' always together. Using it correctly signals upper-register French to the examiner.",
  },
  {
    question: "Task 1 (informal) asks you to write to a friend about a problem at your apartment. Which opening line is correct?",
    options: [
      "'Madame, Monsieur, Je me permets de vous contacter afin de…'",
      "'Je tiens à souligner que la situation est grave.'",
      "'Chère Lucie, Je t'écris pour te parler d'un problème dans mon appartement.'",
      "'Veuillez agréer mes salutations distinguées.'",
    ],
    correct: 2,
    explanation: "Task 1 is informal. 'Chère Lucie,' (informal salutation) + 'Je t'écris pour te parler de…' (casual, uses 'tu') is the correct register. All the other options are formal — appropriate for Task 2 but wrong for Task 1.",
  },
  {
    question: "Your Task 2 letter closes. Which sequence is correct?",
    options: [
      "'Merci et bonne journée !'",
      "'À très bientôt.'",
      "'Dans l'attente de votre réponse, je vous prie d'agréer mes salutations distinguées.'",
      "'Bisous, [name]'",
    ],
    correct: 2,
    explanation: "'Dans l'attente de votre réponse, je vous prie d'agréer mes salutations distinguées.' is the standard formal French letter closing. These two formulas always appear together. Any informal closing in a formal letter costs register marks.",
  },
  {
    question: "The connector 'Par conséquent' is used to:",
    options: [
      "Introduce a concession — the other side of the argument",
      "Introduce a conclusion or consequence drawn from the evidence presented",
      "Open a new topic",
      "Add an example",
    ],
    correct: 1,
    explanation: "'Par conséquent' = therefore / as a result. It draws a logical conclusion from what was said before. 'Les émissions augmentent. Par conséquent, des mesures s'imposent.' = Emissions are rising. Therefore, action is required. It shows cause-and-effect reasoning.",
  },
  {
    question: "Which sentence about sustainable development is correctly built?",
    options: [
      "'Le développement est durable si on développe durablement.'",
      "'Concilier croissance économique et développement durable demeure un défi fondamental de notre siècle.'",
      "'La durabilité développe l'économie et le développement.'",
      "'Il faut développer durablement le développement durable.'",
    ],
    correct: 1,
    explanation: "'Concilier [X] et [Y]' = to reconcile / balance X and Y. 'Concilier croissance économique et développement durable demeure un défi fondamental de notre siècle.' = Reconciling economic growth and sustainable development remains a fundamental challenge of our century. This is the kind of sentence that appears in TEF Canada reading texts — and that you can write in Task 2.",
  },
];

export default function TEFTestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-black text-[#2563EB]">Unit 2 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">French for TEF Canada</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions on topic vocabulary, opinion phrases, argument structure, and formal vs. informal writing register.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 2 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm">
          <p className="text-sm font-bold text-[#C9A44C] uppercase tracking-widest">Course complete!</p>
          <h2 className="mt-3 text-3xl font-black">You&apos;ve finished French for Canadian Tests.</h2>
          <p className="mt-3 leading-7 text-white/70">
            You&apos;ve built government vocabulary, formal grammar, writing formulas, topic vocabulary, opinion phrases, and letter-writing register. Keep practising by reading French documents and writing regularly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests" className="rounded-full bg-[#C9A44C] px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Review the course
            </Link>
            <Link href="/resources/sle-guide" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5">
              SLE reference →
            </Link>
            <Link href="/resources/tef-canada-guide" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5">
              TEF Canada reference →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
