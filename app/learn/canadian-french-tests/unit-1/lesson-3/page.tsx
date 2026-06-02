import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "Objet : [sujet du mémo]", back: "Subject: [memo topic]", subtext: "Every government memo starts with four header lines: DESTINATAIRE (To), EXPÉDITEUR (From), DATE, OBJET (Subject). The 'objet' line is like a subject line — be specific and concise." },
  { front: "Suite à notre échange du [date]…", back: "Following our exchange on [date]…", subtext: "Opens a memo or email that follows a previous conversation. Always more formal than 'Bonjour' or 'Comme convenu' in government contexts." },
  { front: "Je vous écris afin de…", back: "I am writing in order to…", subtext: "'Afin de' is more formal than 'pour'. Use it to state your purpose clearly at the start of any government correspondence. Follow with an infinitive: 'afin de vous informer que…'" },
  { front: "Je vous prie de bien vouloir…", back: "I ask that you kindly…", subtext: "The most formal way to make a request. 'Je vous prie de bien vouloir approuver la proposition ci-jointe.' = I ask that you kindly approve the attached proposal." },
  { front: "Veuillez trouver ci-joint…", back: "Please find attached…", subtext: "'Veuillez trouver ci-joint le rapport demandé.' = Please find attached the requested report. 'Ci-joint' is invariable when before the noun. Also useful: 'en pièce jointe'." },
  { front: "Il importe de souligner que…", back: "It is important to highlight that…", subtext: "Used in briefing notes to draw attention to a key point. More formal than 'il est important de noter'. 'Il importe de souligner que le délai est impératif.' = It is important to highlight that the deadline is imperative." },
  { front: "À la lumière de ce qui précède…", back: "In light of the foregoing…", subtext: "Signals a conclusion based on what was discussed above. 'À la lumière de ce qui précède, il est recommandé de…' = In light of the foregoing, it is recommended that… Used in every formal recommendation." },
  { front: "Nous recommandons que… (+ subjonctif)", back: "We recommend that… (+ subjunctive)", subtext: "'Nous recommandons que le comité examine cette question.' = We recommend that the committee examine this matter. 'Recommander que' triggers the subjunctive — don't forget it." },
  { front: "Je demeure à votre disposition…", back: "I remain at your disposal…", subtext: "Standard professional closing before the formal sign-off. 'Je demeure à votre disposition pour tout renseignement complémentaire.' = I remain available for any additional information." },
  { front: "Veuillez agréer mes salutations distinguées.", back: "Yours sincerely. (formal sign-off)", subtext: "The standard formal closing for letters and formal emails. Alternatives: 'Veuillez agréer l'expression de mes sentiments les meilleurs.' Never use 'Bonne journée' in a formal government document." },
  { front: "à titre informatif", back: "for information purposes / FYI (formal)", subtext: "'Le rapport ci-joint est transmis à titre informatif.' = The attached report is transmitted for information purposes. Government equivalent of FYI — used in forwarded documents." },
  { front: "prendre acte de", back: "to take note of / to acknowledge formally", subtext: "'Nous prenons acte de votre demande.' = We acknowledge / take note of your request. More formal than 'noter'. Used to confirm receipt or acknowledgment of a document or request." },
];

const matchPairs = [
  { left: "Suite à notre échange du…", right: "Following our exchange on…" },
  { left: "Je vous prie de bien vouloir…", right: "I ask that you kindly…" },
  { left: "Veuillez trouver ci-joint…", right: "Please find attached…" },
  { left: "À la lumière de ce qui précède…", right: "In light of the foregoing…" },
  { left: "Je demeure à votre disposition.", right: "I remain at your disposal." },
  { left: "prendre acte de", right: "to formally acknowledge" },
];

const quiz = [
  {
    question: "You are writing a memo to inform your director of a policy change. Which opening is appropriate?",
    options: [
      "'Bonjour Directrice, je voulais juste vous dire que…'",
      "'Suite à la réunion du Conseil du 12 mars, je vous informe que la politique a été modifiée.'",
      "'Hey, quick update on the policy:'",
      "'Chère Marie, j'espère que tu vas bien!'",
    ],
    correct: 1,
    explanation: "Government memos open formally. 'Suite à la réunion du [date], je vous informe que…' is the correct model. It references the context, uses 'vous', and states the purpose immediately.",
  },
  {
    question: "'_____ le rapport demandé lors de la dernière réunion.' Which phrase completes this sentence about an attachment?",
    options: ["Voilà", "Veuillez trouver ci-joint", "Je vous envoie", "J'ai mis en pièce"],
    correct: 1,
    explanation: "'Veuillez trouver ci-joint le rapport demandé lors de la dernière réunion.' = Please find attached the report requested at the last meeting. This is the standard government formula for attachments.",
  },
  {
    question: "Which closing phrase is correct for a formal government email?",
    options: [
      "'Bonne journée !'",
      "'Merci et à bientôt.'",
      "'Je demeure à votre disposition pour tout renseignement complémentaire. Veuillez agréer mes salutations distinguées.'",
      "'Cordialement, [name]'",
    ],
    correct: 2,
    explanation: "Formal government correspondence ends with 'Je demeure à votre disposition…' followed by 'Veuillez agréer mes salutations distinguées.' 'Cordialement' is semi-formal and acceptable in some internal emails, but not in formal government letters.",
  },
  {
    question: "A briefing note conclusion reads: '_____ ce qui précède, il est recommandé que le ministre approuve la proposition.' Which phrase fits?",
    options: ["En dépit de", "À la lumière de", "Il convient de", "Bien que"],
    correct: 1,
    explanation: "'À la lumière de ce qui précède' = In light of the foregoing. This phrase introduces conclusions and recommendations based on the analysis above. It appears in almost every formal government recommendation.",
  },
  {
    question: "Your memo recommends action. Which construction correctly uses the subjunctive?",
    options: [
      "'Nous recommandons que le comité examinera cette question.'",
      "'Nous recommandons que le comité examine cette question.'",
      "'Nous recommandons que le comité a examiné cette question.'",
      "'Nous recommandons d'examiner cette question par le comité.'",
    ],
    correct: 1,
    explanation: "'Recommander que' triggers the subjunctive: 'examine' (not 'examinera' or 'a examiné'). This is also true of 'suggérer que', 'proposer que', 'demander que'. The subjunctive after these verbs is mandatory.",
  },
];

export default function SLELesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">
              Unit 1 · Lesson 3
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Writing Government Documents
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The SLE writing test asks you to produce a memo, email, or briefing note from scratch. These are the exact phrases, formulas, and structures that appear in real federal documents.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Memo header structure</p>
              <div className="mt-2 space-y-1 text-sm font-mono text-white/80">
                <p>DESTINATAIRE : [To]</p>
                <p>EXPÉDITEUR : [From]</p>
                <p>DATE : [Date]</p>
                <p>OBJET : [Subject]</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">The four moves in every formal document</p>
              <div className="mt-2 space-y-1 text-sm">
                <p>1. State your purpose (objet / raison)</p>
                <p>2. Provide context or background</p>
                <p>3. Present the main information or analysis</p>
                <p>4. Make a recommendation or request action</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Phrases and formulas</h2>
          <p className="mt-1 text-[#526173]">These phrases are used in real government documents. Memorize them — they work in the SLE writing test and in the workplace.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Government writing — formulas & phrases" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border-2 border-[#FEF3C7] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">Model memo — annotated</p>
          <div className="mt-4 space-y-1 text-sm font-mono text-[#0B1F3A]">
            <p>DESTINATAIRE : Mme Sophie Lavoie, Directrice générale</p>
            <p>EXPÉDITEUR : M. Antoine Tremblay, Chef de projet</p>
            <p>DATE : 3 juin 2026</p>
            <p>OBJET : Mise à jour sur la mise en œuvre du projet Horizon</p>
          </div>
          <div className="mt-4 space-y-3 text-sm text-[#526173]">
            <p><span className="font-black text-[#0B1F3A]">Suite à la réunion du 27 mai</span>, je vous transmets une mise à jour sur l&apos;avancement du projet Horizon.</p>
            <p>Il importe de souligner que la phase d&apos;analyse a été complétée conformément aux échéanciers prévus. <span className="font-black text-[#0B1F3A]">Les intervenants concernés ont été consultés</span> et leurs commentaires ont été intégrés à l&apos;ébauche.</p>
            <p><span className="font-black text-[#0B1F3A]">À la lumière de ce qui précède</span>, nous recommandons que la Directrice générale approuve le passage à la phase de mise en œuvre.</p>
            <p><span className="font-black text-[#0B1F3A]">Je demeure à votre disposition</span> pour tout renseignement complémentaire.</p>
          </div>
          <p className="mt-4 text-xs text-[#526173] italic">Highlighted phrases = the formulas from this lesson used in context.</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each formula to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Writing formulas" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Apply the formulas</h2>
          <p className="mt-1 text-[#526173]">Each question tests whether you can use these phrases correctly in context.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Writing formulas quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D97706]">Unit 1 complete!</p>
          <h2 className="mt-3 text-3xl font-black">Government French done.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Take the Unit 1 test to lock in government vocabulary, grammar, and writing formulas before moving on.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-1/lesson-2" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/canadian-french-tests/unit-1/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Unit 1 Test →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
