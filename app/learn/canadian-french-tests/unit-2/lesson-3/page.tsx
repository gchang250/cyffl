import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "Madame, Monsieur,", back: "Dear Sir or Madam, (formal salutation)", subtext: "Use when you don't know the recipient's name or gender. Never 'Bonjour' in a formal letter. If you know the name: 'Madame Dupont,' or 'Monsieur le Directeur,'." },
  { front: "Je me permets de vous contacter afin de…", back: "I am taking the liberty of contacting you in order to…", subtext: "'Afin de' is more formal than 'pour'. This opening immediately sets formal register. Follow with an infinitive: 'afin de vous soumettre ma candidature' / 'afin de vous faire part de ma préoccupation'." },
  { front: "Suite à votre annonce parue dans…", back: "Following your advertisement published in…", subtext: "Standard opening for a letter of interest responding to a posting. 'Suite à' = following / in response to. Also: 'En réponse à votre offre d'emploi…' = In response to your job offer…" },
  { front: "Je vous serais reconnaissant(e) de bien vouloir…", back: "I would be grateful if you would kindly…", subtext: "The most polished way to make a formal request. 'Je vous serais reconnaissante de bien vouloir m'accuser réception.' = I would be grateful if you would kindly acknowledge receipt." },
  { front: "Dans l'attente de votre réponse,", back: "Awaiting your reply, / Looking forward to your response,", subtext: "Standard pre-closing formula. Always followed by the sign-off phrase. 'Dans l'attente de votre réponse, je vous prie d'agréer mes salutations distinguées.' — these two always go together." },
  { front: "Je vous prie d'agréer mes salutations distinguées.", back: "Yours sincerely / Yours faithfully. (formal closing)", subtext: "The standard French letter closing. Variations: 'Veuillez agréer l'expression de mes sentiments distingués.' or 'Je vous adresse mes cordiales salutations.' The more official the letter, the more elaborate the closing." },
  { front: "Cher [Prénom], / Chère [Prénom],", back: "Dear [First name], (informal salutation)", subtext: "For Task 1 — informal register. Use 'tu' throughout, casual expressions, and a friendly tone. Closing: 'Bonne journée !' / 'À bientôt !' / 'Grosses bises !' (depending on relationship)." },
  { front: "Je t'écris pour te dire que…", back: "I'm writing to tell you that… (informal)", subtext: "Informal equivalent of 'Je vous écris afin de vous informer que…'. Note 'te' and 'tu' instead of 'vous'. Switching between 'tu' and 'vous' in the same text is a register error." },
  { front: "Tout d'abord, … De plus, … Enfin,", back: "First of all, … Furthermore, … Finally,", subtext: "The classic three-part structure. 'Tout d'abord' opens the body. 'De plus' or 'En outre' adds a point. 'Enfin' or 'Pour conclure' closes. This structure works for both Task 1 and Task 2." },
  { front: "En ce qui concerne…", back: "Regarding… / As far as … is concerned,", subtext: "'En ce qui concerne le logement, les prix ont augmenté de façon significative.' = Regarding housing, prices have risen significantly. Useful for introducing a new sub-topic or redirecting the text." },
  { front: "Je tiens à souligner que…", back: "I wish to point out that… / I want to emphasize that…", subtext: "'Je tiens à souligner que ma demande est urgente.' = I wish to point out that my request is urgent. 'Tenir à + infinitif' = to insist on / to want to make clear. Signals something important follows." },
  { front: "Je reste à votre disposition pour tout renseignement complémentaire.", back: "I remain available for any additional information.", subtext: "Standard pre-closing line. Slightly less elaborate than the full government version. Works for both formal letters and professional emails in TEF Canada writing tasks." },
];

const matchPairs = [
  { left: "Madame, Monsieur,", right: "Dear Sir or Madam, (formal)" },
  { left: "Je me permets de vous contacter afin de…", right: "I am contacting you in order to…" },
  { left: "Je vous serais reconnaissant(e) de bien vouloir…", right: "I would be grateful if you would kindly…" },
  { left: "Dans l'attente de votre réponse,", right: "Awaiting your reply," },
  { left: "Je tiens à souligner que…", right: "I wish to emphasize that…" },
  { left: "Cher [Prénom],", right: "Dear [First name], (informal)" },
];

const quiz = [
  {
    question: "TEF Canada Task 1 asks you to write to a friend about a trip. Which salutation is correct?",
    options: [
      "'Madame, Monsieur,'",
      "'À qui de droit,'",
      "'Chère Sophie,'",
      "'Je vous contacte afin de vous informer,'",
    ],
    correct: 2,
    explanation: "Task 1 is informal — write to a friend. 'Chère Sophie,' (or 'Cher Marc,') is the correct informal salutation. 'Madame, Monsieur,' is formal and only for Task 2. Using formal register in Task 1 is a register error.",
  },
  {
    question: "Task 2 asks you to write to a city council about a local issue. Which opening is correct?",
    options: [
      "'Salut ! Je t'écris parce que j'ai un problème.'",
      "'Je me permets de vous contacter afin de vous faire part d'une préoccupation concernant…'",
      "'Bonjour, je voulais juste vous dire que…'",
      "'Hey, il y a un problème dans ma rue.'",
    ],
    correct: 1,
    explanation: "'Je me permets de vous contacter afin de vous faire part de…' = I am taking the liberty of contacting you to bring to your attention… This immediately sets formal register ('vous', formal vocabulary) appropriate for writing to an official body.",
  },
  {
    question: "Your Task 2 response needs to structure three points. Which ordering is correct?",
    options: [
      "Enfin… Tout d'abord… De plus…",
      "Tout d'abord… De plus… Enfin,…",
      "De plus… Enfin… Tout d'abord…",
      "Enfin… De plus… Tout d'abord…",
    ],
    correct: 1,
    explanation: "'Tout d'abord' (first) → 'De plus' / 'En outre' (furthermore) → 'Enfin' / 'Pour conclure' (finally). This is the standard three-part connector sequence. Using it correctly shows the examiner your text is organized and your argumentation is sequential.",
  },
  {
    question: "Which closing sequence is correct for a formal Task 2 letter?",
    options: [
      "'À bientôt !'",
      "'Merci d'avance, [name]'",
      "'Dans l'attente de votre réponse, je vous prie d'agréer mes salutations distinguées.'",
      "'Cordialement, [name]'",
    ],
    correct: 2,
    explanation: "'Dans l'attente de votre réponse, je vous prie d'agréer mes salutations distinguées.' is the standard formal French letter closing. 'Cordialement' is semi-formal and acceptable in some professional emails, but not in a formal letter to an institution.",
  },
  {
    question: "Your Task 2 letter wants to say 'I want to emphasize that this situation is serious.' Which sentence is correct?",
    options: [
      "'Je veux dire que c'est sérieux.'",
      "'Je tiens à souligner que cette situation est grave.'",
      "'Il faut dire sérieusement que cette situation est très grave.'",
      "'Selon moi, très sérieusement, cette situation est grave.'",
    ],
    correct: 1,
    explanation: "'Je tiens à souligner que cette situation est grave.' = I wish to emphasize that this situation is serious. 'Tenir à + infinitif' signals that what follows is important. 'Grave' (serious) is more formal than 'très grave' which sounds informal by over-intensification.",
  },
];

export default function TEFLesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Unit 2 · Lesson 3
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Formal & Informal Writing
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              TEF Canada writing has two tasks: one informal (to a friend), one formal (to an organization). These are the exact phrases, salutations, and closings that work — and the register errors that cost marks.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">The register rule</p>
              <p className="mt-2 leading-7 text-white/80">
                Every decision in Task 1 and Task 2 — pronoun, salutation, vocabulary, closing — must match the register. Using <span className="font-black text-white">vous</span> in Task 1 or <span className="font-black text-white">tu</span> in Task 2 is an automatic error.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Task 1 vs Task 2 at a glance</p>
              <div className="mt-2 grid grid-cols-2 gap-x-4 text-sm">
                <div>
                  <p className="font-black">Task 1 — Informal</p>
                  <p className="mt-1 text-[#526173]">Cher/Chère [Prénom]</p>
                  <p className="text-[#526173]">tu / te / ton</p>
                  <p className="text-[#526173]">À bientôt !</p>
                </div>
                <div>
                  <p className="font-black">Task 2 — Formal</p>
                  <p className="mt-1 text-[#526173]">Madame, Monsieur,</p>
                  <p className="text-[#526173]">vous / votre / vos</p>
                  <p className="text-[#526173]">Salutations distinguées</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Learn the phrases</h2>
          <p className="mt-1 text-[#526173]">These are the formulas that open, structure, and close French letters at different registers. Know which one to use and when.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Formal & informal writing — salutations, connectors, closings" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border-2 border-[#EFF6FF] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Side by side — same message, two registers</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-black text-[#0B1F3A] mb-3">Task 1 — Informal (to a friend)</p>
              <div className="space-y-2 text-sm text-[#526173] italic">
                <p>Chère Julie,</p>
                <p>Je t&apos;écris pour te parler de mon déménagement à Montréal. Tout d&apos;abord, j&apos;ai trouvé un appartement fantastique dans le Plateau. De plus, mon nouveau quartier est vraiment dynamique. Enfin, j&apos;espère que tu viendras me rendre visite très bientôt !</p>
                <p>À bientôt,<br />[Prénom]</p>
              </div>
            </div>
            <div>
              <p className="font-black text-[#0B1F3A] mb-3">Task 2 — Formal (to an organization)</p>
              <div className="space-y-2 text-sm text-[#526173] italic">
                <p>Madame, Monsieur,</p>
                <p>Je me permets de vous contacter afin de vous faire part d&apos;une préoccupation concernant les conditions de logement dans l&apos;arrondissement. Tout d&apos;abord, je tiens à souligner que la situation est urgente. De plus, de nombreux résidents partagent cette préoccupation. Dans l&apos;attente de votre réponse, je vous prie d&apos;agréer mes salutations distinguées.</p>
                <p>[Nom Prénom]</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each phrase to its meaning or equivalent.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Formal & informal writing phrases" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Apply the register</h2>
          <p className="mt-1 text-[#526173]">Each question tests whether you know which phrase belongs in which context.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Writing register quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#2563EB]">Unit 2 complete!</p>
          <h2 className="mt-3 text-3xl font-black">TEF Canada writing ready.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Take the Unit 2 test to confirm your topic vocabulary, opinion phrases, and writing formulas.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-2/lesson-2" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/canadian-french-tests/unit-2/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Unit 2 Test →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
