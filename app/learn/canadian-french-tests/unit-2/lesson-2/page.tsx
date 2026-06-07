import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "À mon avis, / Selon moi, / À mon sens,", back: "In my opinion, / In my view,", subtext: "The three safest ways to introduce a personal opinion. 'À mon avis, les énergies renouvelables sont la solution.' Use one — don't use all three in the same text." },
  { front: "Il me semble que…", back: "It seems to me that…", subtext: "Softer than 'je pense que'. 'Il me semble que cette approche est insuffisante.' = It seems to me that this approach is insufficient. Expresses an opinion with slight uncertainty." },
  { front: "Je suis convaincu(e) que…", back: "I am convinced that…", subtext: "Stronger than 'je pense que'. 'Je suis convaincu que des mesures urgentes sont nécessaires.' Use this when you want to express a firm, well-argued position." },
  { front: "D'une part… d'autre part…", back: "On one hand… on the other hand…", subtext: "The classic two-sided structure. 'D'une part, la technologie crée des emplois ; d'autre part, elle en supprime d'autres.' = On one hand, technology creates jobs; on the other, it eliminates others." },
  { front: "Certes… mais…", back: "Admittedly… but…", subtext: "Acknowledges the opposing view before countering it. 'Certes, le progrès technologique est inévitable, mais ses effets sociaux méritent une attention particulière.' Examiners reward this structure — it shows nuance." },
  { front: "Il faut admettre que… / Il convient de reconnaître que…", back: "One must admit that… / One must acknowledge that…", subtext: "More formal version of 'certes'. 'Il faut admettre que la situation est complexe.' Introduces a concession — the point you're granting to the other side before making your own." },
  { front: "Par conséquent, / Ainsi, / C'est pourquoi,", back: "Therefore, / Thus, / That is why,", subtext: "Signals a conclusion drawn from evidence. 'Les émissions ont augmenté de 3%. Par conséquent, des mesures immédiates s'imposent.' These three are interchangeable but have slightly different weights." },
  { front: "Cela dit, / Cependant, / Néanmoins, / Toutefois,", back: "That said, / However, / Nevertheless, / Yet,", subtext: "Four ways to introduce a contrast or qualification. 'Cela dit' is more conversational; 'Néanmoins' and 'Toutefois' are more formal and impressive in writing." },
  { front: "Il est indéniable que…", back: "It is undeniable that…", subtext: "Strong, confident claim. 'Il est indéniable que le changement climatique constitue une menace pour la biodiversité.' Use when your position is well-supported and you want to sound authoritative." },
  { front: "Force est de constater que…", back: "One cannot help but notice that…", subtext: "A sophisticated phrase — signals that the evidence speaks for itself. 'Force est de constater que les inégalités persistent malgré les politiques mises en place.' Immediately signals B2+ level French." },
  { front: "Il va sans dire que…", back: "It goes without saying that…", subtext: "Introduces something you're presenting as obvious or self-evident. 'Il va sans dire qu'une bonne maîtrise du français est indispensable.' A hallmark of confident, upper-register writing." },
  { front: "Il est à craindre que… (+ subjonctif)", back: "There is reason to fear that… (+ subjunctive)", subtext: "'Il est à craindre que la situation ne s'aggrave.' = There is reason to fear that the situation may worsen. 'Craindre que' takes the subjunctive. A formal way to express concern or risk." },
];

const matchPairs = [
  { left: "À mon avis,", right: "In my opinion," },
  { left: "Je suis convaincu(e) que…", right: "I am convinced that…" },
  { left: "Certes… mais…", right: "Admittedly… but…" },
  { left: "Par conséquent,", right: "Therefore," },
  { left: "Force est de constater que…", right: "One cannot help but notice that…" },
  { left: "Il va sans dire que…", right: "It goes without saying that…" },
];

const quiz = [
  {
    question: "You are writing a TEF Canada Task 2 response arguing that social media harms young people. Which sentence best introduces your position?",
    options: [
      "'Je pense que les réseaux sociaux sont mauvais pour les jeunes.'",
      "'Je suis convaincu(e) que l'usage excessif des réseaux sociaux nuit au bien-être des jeunes, comme en témoignent de nombreuses études.'",
      "'Les réseaux sociaux sont mauvais c'est sûr.'",
      "'Tout le monde sait que les réseaux sociaux sont dangereux.'",
    ],
    correct: 1,
    explanation: "'Je suis convaincu(e) que…, comme en témoignent de nombreuses études' = I am convinced that…, as shown by numerous studies. This gives a clear opinion + evidence signal. The examiner sees a structured argument, not just a claim.",
  },
  {
    question: "You want to show both sides of an argument about globalization. Which structure is best?",
    options: [
      "'La mondialisation est bonne et mauvaise.'",
      "'D'une part, la mondialisation favorise les échanges économiques ; d'autre part, elle peut fragiliser les industries locales.'",
      "'La mondialisation, c'est compliqué.'",
      "'Je pense que la mondialisation est bonne mais aussi mauvaise parfois.'",
    ],
    correct: 1,
    explanation: "'D'une part… d'autre part…' is the correct two-sided structure. Notice the use of the semicolon between clauses — this is how high-scoring TEF candidates structure balanced arguments. The examiner can immediately see your organisation.",
  },
  {
    question: "Which sentence correctly uses 'Certes… mais…'?",
    options: [
      "'Certes c'est vrai mais c'est aussi faux.'",
      "'Certes, les énergies renouvelables représentent un coût initial élevé, mais elles permettent des économies significatives à long terme.'",
      "'Certes je suis d'accord mais pas vraiment.'",
      "'Certes et donc c'est pourquoi mais néanmoins.'",
    ],
    correct: 1,
    explanation: "'Certes, [concession], mais [counter-argument].' — This structure signals: I acknowledge the opposing point, AND here is why my position stands. The examiner sees critical thinking and nuance. This single structure can raise your writing score significantly.",
  },
  {
    question: "'Les émissions de CO₂ ont atteint un niveau record cette année. _____, des mesures urgentes s'imposent.' Which connector fits best?",
    options: ["D'une part", "Certes", "Par conséquent", "Il me semble"],
    correct: 2,
    explanation: "'Par conséquent' = therefore. It signals a logical conclusion drawn from the evidence presented in the first sentence. 'Par conséquent, des mesures urgentes s'imposent' = Therefore, urgent measures are necessary.",
  },
  {
    question: "'_____ constater que les politiques actuelles sont insuffisantes pour atteindre les objectifs climatiques.' Which phrase fits?",
    options: ["Il va sans dire que", "Force est de", "Il est à craindre de", "Il convient de reconnaître"],
    correct: 1,
    explanation: "'Force est de constater que…' = One cannot help but notice that / The evidence compels us to note that. This is a fixed phrase — you can't split it. 'Force est de constater que les politiques sont insuffisantes' immediately signals upper-register French.",
  },
  {
    question: "Which phrase best expresses 'I believe this is a serious issue' at the upper register level expected for TEF Canada writing?",
    options: [
      "Je pense que c'est grave.",
      "Il me semble que c'est un problème sérieux.",
      "Je suis d'avis que cette problématique mérite une attention accrue.",
      "C'est un problème assez grave selon moi.",
    ],
    correct: 2,
    explanation: "'Je suis d'avis que' = I am of the view that. 'Cette problématique mérite une attention accrue' = this issue deserves increased attention. This uses formal vocabulary (d'avis, problématique, mériter, attention accrue) that signals B2–C1 level. The other options are lower register.",
  },
  {
    question: "TEF Canada Section A asks you to continue an article. What key constraint must you respect?",
    options: [
      "You must write exactly 100 words",
      "You must continue the topic, style, and register of the original text — not change direction",
      "You must disagree with the article's argument",
      "You must use the passé composé throughout",
    ],
    correct: 1,
    explanation: "Section A requires you to continue the article seamlessly — same topic, same style (journalistic, editorial, etc.), same register (formal or semi-formal). Abruptly changing topic or shifting from impersonal to personal register breaks the continuity the examiner is assessing.",
  },
  {
    question: "Which phrase correctly introduces a counterargument before your rebuttal?",
    options: [
      "'Voici pourquoi j'ai raison:'",
      "'D'autres personnes disent oui.'",
      "'Il est vrai que certains soutiennent que… Cependant, cette position ignore le fait que…'",
      "'Pas tout le monde est d'accord mais j'ai raison quand même.'",
    ],
    correct: 2,
    explanation: "'Il est vrai que [counterargument]. Cependant, [your rebuttal].' — This structure concedes the opposing view and then refutes it. Using 'il est vrai que' + 'cependant' shows you can engage with complexity. Upper-register markers: 'il est vrai que', 'soutiennent', 'ignore le fait que'.",
  },
];

export default function TEFLesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Unit 2 · Lesson 2
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Opinion & Argument
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              TEF Canada writing and speaking both require you to give opinions, acknowledge opposing views, and build arguments. These phrases don&apos;t just help you express ideas — they show the examiner you can think in French.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">The three moves</p>
              <div className="mt-2 space-y-2 text-sm text-white/80">
                <p><span className="font-black text-white">State your position</span> — À mon avis… / Je suis convaincu(e) que…</p>
                <p><span className="font-black text-white">Concede & counter</span> — Certes… mais… / Il faut admettre que…</p>
                <p><span className="font-black text-white">Draw a conclusion</span> — Par conséquent… / Ainsi… / Force est de constater que…</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Higher-register phrases</p>
              <div className="mt-2 space-y-1 text-sm italic text-[#526173]">
                <p>Force est de constater que…</p>
                <p>Il va sans dire que…</p>
                <p>Il est indéniable que…</p>
              </div>
              <p className="mt-2 text-xs text-[#526173]">One or two of these in Task 2 signals upper-band French.</p>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Learn the phrases</h2>
          <p className="mt-1 text-[#526173]">Every card shows how the phrase works in a real sentence on a TEF Canada topic. Flip to see the explanation.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Opinion & argument — 12 essential phrases" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each phrase to its English equivalent.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Opinion phrases" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border-2 border-[#EFF6FF] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">A high-scoring argument structure</p>
          <p className="mt-3 text-sm italic text-[#526173] leading-8">
            &ldquo;Il est indéniable que la mondialisation a favorisé la croissance économique dans de nombreux pays. Certes, cette ouverture des marchés a créé de nouvelles opportunités pour les entreprises ; cependant, il faut admettre que ses effets sur les inégalités sociales sont préoccupants. Force est de constater que les bénéfices de la mondialisation ne sont pas distribués équitablement. Par conséquent, il convient de mettre en place des mécanismes de redistribution plus efficaces.&rdquo;
          </p>
          <div className="mt-4 space-y-1 text-xs text-[#526173]">
            <p><strong className="text-[#0B1F3A]">Il est indéniable que</strong> → strong opening claim</p>
            <p><strong className="text-[#0B1F3A]">Certes… ; cependant,</strong> → acknowledge the other side, then counter</p>
            <p><strong className="text-[#0B1F3A]">Force est de constater que</strong> → evidence-based observation</p>
            <p><strong className="text-[#0B1F3A]">Par conséquent, il convient de</strong> → draw a conclusion and recommend action</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Use the phrases</h2>
          <p className="mt-1 text-[#526173]">Each question puts these phrases into real TEF Canada-style writing contexts.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Opinion & argument quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#2563EB]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Opinion phrases ready.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: TEF Canada Written Expression — what the two writing tasks actually are and how to approach each one.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-2/lesson-1" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/canadian-french-tests/unit-2/lesson-3" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
