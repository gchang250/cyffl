import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "aller → allé(e)(s)", back: "to go: Elle est allée au marché.", subtext: "One of the most common être verbs." },
  { front: "venir → venu(e)(s)", back: "to come: Ils sont venus hier.", subtext: "Je suis venu(e)." },
  { front: "partir → parti(e)(s)", back: "to leave: Elle est partie tôt.", subtext: "Partir uses être." },
  { front: "arriver → arrivé(e)(s)", back: "to arrive: Nous sommes arrivés.", subtext: "Arriver always uses être." },
  { front: "entrer → entré(e)(s)", back: "to enter: Il est entré.", subtext: "The room-movement verbs use être." },
  { front: "sortir → sorti(e)(s)", back: "to go out: Elle est sortie.", subtext: "Sortir = to go out (uses être)." },
  { front: "monter → monté(e)(s)", back: "to go up: Ils sont montés.", subtext: "Monter = to go up / get on." },
  { front: "descendre → descendu(e)(s)", back: "to go down: Elle est descendue.", subtext: "Descendre = to go down / get off." },
  { front: "naître → né(e)(s)", back: "to be born: Je suis né(e) en 2008.", subtext: "Je suis né (male) / née (female)." },
  { front: "mourir → mort(e)(s)", back: "to die: Il est mort.", subtext: "Irregular past participle: mort." },
  { front: "rester → resté(e)(s)", back: "to stay: Nous sommes restés.", subtext: "Rester uses être." },
  { front: "tomber → tombé(e)(s)", back: "to fall: Elle est tombée.", subtext: "Tomber = to fall." },
];

const pairs = [
  { left: "aller", right: "to go" },
  { left: "venir", right: "to come" },
  { left: "partir", right: "to leave" },
  { left: "arriver", right: "to arrive" },
  { left: "sortir", right: "to go out" },
  { left: "naître", right: "to be born" },
];

const fillIn = [
  { before: "Elle", after: "au cinéma. (aller)", answer: "est allée", hint: "être + allé + -e for feminine", translation: "She went to the cinema." },
  { before: "Ils", after: "hier soir. (arriver)", answer: "sont arrivés", hint: "être + arrivé + -s for plural", translation: "They arrived last night." },
  { before: "Je suis", after: "en 2008. (naître)", answer: "né", hint: "naître → né (masc) / née (fem)", translation: "I was born in 2008." },
  { before: "Nous", after: "à minuit. (rentrer)", answer: "sommes rentrés", hint: "être + rentré + -s for plural", translation: "We got home at midnight." },
  { before: "Elle", after: "de la maison à 8h. (partir)", answer: "est partie", hint: "être + parti + -e for feminine", translation: "She left the house at 8." },
];

const quiz = [
  {
    question: "Why do some verbs use être instead of avoir?",
    options: ["Random: it must be memorized", "They are movement/state verbs (DR MRS VANDERTRAMP)", "They are irregular", "They end in -ir"],
    correct: 1,
    explanation: "The être verbs are mostly movement or change-of-state verbs: aller, venir, partir, arriver, etc. The mnemonic DR MRS VANDERTRAMP helps you remember them.",
  },
  {
    question: "How do you say 'She left' using partir?",
    options: ["Elle a partie.", "Elle est parti.", "Elle est partie.", "Elle a parti."],
    correct: 2,
    explanation: "Partir uses être. The subject is elle (feminine), so add -e: partie. Elle est partie.",
  },
  {
    question: "Which sentence shows INCORRECT agreement?",
    options: ["Elle est allée.", "Ils sont arrivés.", "Il est arrivée.", "Nous sommes partis."],
    correct: 2,
    explanation: "Il (masculine) should use arrivé, not arrivée. The past participle agrees with the subject's gender.",
  },
  {
    question: "Nous sommes _____ (arriver, nous = mixed group)",
    options: ["arrivée", "arrivées", "arrivés", "arrivé"],
    correct: 2,
    explanation: "Nous (masculine or mixed) → arrivés (masculine plural -s). Arrivées would be an all-female group.",
  },
  {
    question: "What does 'DR MRS VANDERTRAMP' help you remember?",
    options: ["The six -er verb endings", "Which verbs use être in the passé composé", "The irregular past participles", "The order of French adjectives"],
    correct: 1,
    explanation: "DR MRS VANDERTRAMP is a mnemonic for the verbs that use être as their auxiliary in the passé composé: Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir.",
  },
  {
    question: "Two girls went to the park. How do you say 'they went' using 'aller'?",
    options: ["Elles sont allé.", "Elles ont allées.", "Elles sont allées.", "Elles sont allé."],
    correct: 2,
    explanation: "Elles (all feminine) + aller = elles sont allées. Add -e for feminine, -s for plural → -es. Elles sont allées au parc.",
  },
  {
    question: "Which sentence uses the passé composé with être CORRECTLY?",
    options: ["Il est mangé une pomme.", "Il est arrivé en retard.", "Il a arrivé en retard.", "Il sont arrivés."],
    correct: 1,
    explanation: "Arriver uses être. Il est arrivé en retard = He arrived late. 'Il a arrivé' is wrong (wrong auxiliary). 'Il sont' is wrong (il is singular → il est).",
  },
  {
    question: "How do you say 'She was born in 2009'?",
    options: ["Elle a né en 2009.", "Elle est née en 2009.", "Elle est néé en 2009.", "Elle a nait en 2009."],
    correct: 1,
    explanation: "Naître uses être. Past participle: né. For a feminine subject (elle), add -e → née. Elle est née en 2009.",
  },
];

export default function Unit6Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">← French Foundations</Link>
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 6 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Passé Composé with être</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">A special group of verbs uses être instead of avoir in the passé composé — and the past participle must agree with the subject.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">The être verbs</p>
            <p className="mt-2 text-xs text-[#526173]">These 17 verbs (+ reflexive verbs) use être. A helpful mnemonic: DR MRS VANDERTRAMP.</p>
            <div className="mt-3 grid grid-cols-2 gap-1 text-sm">
              {["Devenir","Revenir","Monter","Rester","Sortir","Venir","Aller","Naître","Descendre","Entrer","Rentrer","Tomber","Retourner","Arriver","Mourir","Partir"].map((v) => (
                <p key={v} className="font-semibold text-[#0B1F3A]">{v}</p>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-[#EDE9FE] p-3 text-xs">
              <p className="font-black text-[#7C3AED]">Key rule</p>
              <p className="mt-1 text-[#526173]">Past participle agrees with the subject: -e for feminine, -s for plural.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border-2 border-[#FEF3C7] bg-white p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">Common mistakes — être verbs</p>
          <div className="mt-4 space-y-3 text-sm">
            {[
              { wrong: "Il est arrivée.", right: "Il est arrivé.: arrivée is feminine. Il is masculine → arrivé." },
              { wrong: "Elle a partié.", right: "Elle est partie.: Wrong auxiliary (avoir) and wrong participle. Partir uses être + parti → partie for feminine." },
              { wrong: "Ils sont allé.", right: "Ils sont allés.: Masculine plural subject requires -s on the past participle: allés." },
              { wrong: "Elle a tombé.", right: "Elle est tombée.: Tomber uses être. Elle est tombée." },
              { wrong: "Je suis mangé.", right: "J'ai mangé.: Manger uses avoir, not être. Only movement/state verbs use être." },
            ].map((m) => (
              <div key={m.wrong} className="grid gap-1 rounded-xl border border-[#FDE68A] bg-[#FEFCE8] p-3">
                <p className="text-[#B45309]">✗ {m.wrong}</p>
                <p className="text-[#16A34A]">✓ {m.right}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="être verbs" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-sm font-black text-[#C9A44C]">Agreement of past participle</p>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            {[["je (m) suis allé","I (m) went"],["je (f) suis allée","I (f) went"],["il est allé","he went"],["elle est allée","she went"],["nous (m/mix) sommes allés","we went"],["nous (f) sommes allées","we (f) went"],["ils sont allés","they (m/mix) went"],["elles sont allées","they (f) went"]].map(([fr,en]) => (
              <div key={fr} className="rounded-xl bg-white/10 p-3">
                <p className="font-black">{fr}</p>
                <p className="mt-0.5 text-xs text-white/60">{en}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Infinitive to English" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={fillIn} title="Passé composé with être" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={quiz} title="Être verbs quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/french-foundations/unit-6/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/french-foundations/unit-6/lesson-3" className="rounded-full bg-[#D62828] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
