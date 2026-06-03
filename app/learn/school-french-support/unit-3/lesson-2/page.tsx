import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "aller", back: "allé(e) — gone", subtext: "Je suis allé au marché. — I went to the market." },
  { front: "venir", back: "venu(e) — come", subtext: "Elle est venue hier soir. — She came yesterday evening." },
  { front: "partir", back: "parti(e) — left", subtext: "Ils sont partis tôt. — They left early." },
  { front: "arriver", back: "arrivé(e) — arrived", subtext: "Tu es arrivée en retard. — You arrived late. (fem.)" },
  { front: "entrer", back: "entré(e) — entered", subtext: "Nous sommes entrés dans la salle. — We entered the room." },
  { front: "sortir", back: "sorti(e) — gone out", subtext: "Elle est sortie avec ses amis. — She went out with her friends." },
  { front: "naître", back: "né(e) — born", subtext: "Il est né en 2005. — He was born in 2005." },
  { front: "mourir", back: "mort(e) — died", subtext: "Le chien est mort la semaine dernière. — The dog died last week." },
  { front: "tomber", back: "tombé(e) — fallen", subtext: "Il est tombé dans l'escalier. — He fell on the stairs." },
  { front: "rester", back: "resté(e) — stayed", subtext: "Nous sommes restés à la maison. — We stayed at home." },
  { front: "monter", back: "monté(e) — gone up", subtext: "Elle est montée au premier étage. — She went up to the first floor." },
  { front: "descendre", back: "descendu(e) — gone down", subtext: "Ils sont descendus en courant. — They ran downstairs." },
];

const pairs = [
  { left: "aller", right: "allé(e)" },
  { left: "venir", right: "venu(e)" },
  { left: "naître", right: "né(e)" },
  { left: "mourir", right: "mort(e)" },
  { left: "partir", right: "parti(e)" },
  { left: "tomber", right: "tombé(e)" },
];

const exercises = [
  { before: "Elle", after: "au cinéma hier. (aller)", answer: "est allée", hint: "être (elle est) + allé + agreement: feminine → allée", translation: "She went to the cinema yesterday." },
  { before: "Nous", after: "à midi. (arriver)", answer: "sommes arrivés", hint: "être (nous sommes) + arrivé + agreement: masculine plural → arrivés", translation: "We arrived at noon." },
  { before: "Il", after: "à Paris. (naître)", answer: "est né", hint: "être (il est) + né — masculine singular, no agreement change", translation: "He was born in Paris." },
  { before: "Les filles", after: "de la salle. (sortir)", answer: "sont sorties", hint: "être (elles sont) + sorti + agreement: feminine plural → sorties", translation: "The girls left the room." },
  { before: "Je (m.)", after: "à l'hôtel. (rester)", answer: "suis resté", hint: "être (je suis) + resté — masculine subject, no extra ending", translation: "I stayed at the hotel." },
];

const questions = [
  {
    question: "Which auxiliary do DR MRS VANDERTRAMP verbs use in the passé composé?",
    options: ["avoir", "être", "aller", "faire"],
    correct: 1,
    explanation: "The DR MRS VANDERTRAMP verbs (and all reflexive verbs) use être as their auxiliary in the passé composé: je suis allé, tu es venu, etc.",
  },
  {
    question: "How does the past participle change with être verbs when the subject is feminine plural?",
    options: ["No change.", "Add -s.", "Add -e.", "Add -es."],
    correct: 3,
    explanation: "With être verbs, the past participle must agree with the subject in gender and number. Feminine plural adds -es: elles sont arrivées, elles sont parties.",
  },
  {
    question: "Which sentence is correct for 'She went to the market'?",
    options: [
      "Elle a allée au marché.",
      "Elle est allée au marché.",
      "Elle est allé au marché.",
      "Elle a allé au marché.",
    ],
    correct: 1,
    explanation: "Aller uses être, and the past participle agrees with a feminine subject: elle est allée. Adding -e marks feminine agreement.",
  },
  {
    question: "Which verb does NOT use être in the passé composé?",
    options: ["partir", "naître", "téléphoner", "tomber"],
    correct: 2,
    explanation: "Téléphoner is a regular -er verb that uses avoir. The DR MRS VANDERTRAMP verbs (partir, naître, tomber, etc.) use être.",
  },
  {
    question: "How do you say 'The boys left early'?",
    options: ["Les garçons sont partis tôt.", "Les garçons ont parti tôt.", "Les garçons sont parti tôt.", "Les garçons sont parties tôt."],
    correct: 0,
    explanation: "Partir uses être. Subject = les garçons (masculine plural) → partis (add -s for plural). Les garçons sont partis tôt.",
  },
  {
    question: "A student writes 'Il est tombé sur le verglas.' Is this correct?",
    options: ["No — tomber uses avoir.", "No — the past participle should be tombée.", "Yes — tomber uses être, and il (masculine) → tombé.", "No — the subject should agree with the participle differently."],
    correct: 2,
    explanation: "Tomber uses être. Il (masculine singular) → tombé (no extra ending). Il est tombé = He fell. Correct!",
  },
  {
    question: "How do you say 'We stayed at home' (mixed group, masculine)?",
    options: ["Nous sommes resté à la maison.", "Nous sommes restés à la maison.", "Nous avons resté à la maison.", "Nous sommes restées à la maison."],
    correct: 1,
    explanation: "Rester uses être. Nous (mixed/masculine plural) → restés (add -s). Nous sommes restés à la maison. Restées would be for an all-feminine group.",
  },
  {
    question: "Which best explains why être verbs require participle agreement?",
    options: [
      "It is a random rule with no reason.",
      "With être verbs, the participle acts like a predicate adjective and agrees with the subject.",
      "All past participles in French must agree.",
      "Because être is an irregular verb.",
    ],
    correct: 1,
    explanation: "With être as auxiliary, the past participle behaves like a describing adjective (e.g., elle est grande → elle est allée). It must agree with the subject in gender and number.",
  },
];

export default function Unit3Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Unit 3 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Passé Composé with être</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Sixteen verbs — remembered by the mnemonic <strong>DR MRS VANDERTRAMP</strong> — use <em>être</em> instead of avoir as their auxiliary. All reflexive verbs also use être. When être is the auxiliary, the past participle must agree in gender and number with the subject.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Agreement rules: add nothing for masculine singular, <strong>-e</strong> for feminine singular, <strong>-s</strong> for masculine plural, <strong>-es</strong> for feminine plural.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A] mb-3">The 16 être verbs (DR MRS VANDERTRAMP)</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <div>
                <p><strong>D</strong>escendre → descendu</p>
                <p><strong>R</strong>entrer → rentré</p>
                <p><strong>M</strong>onter → monté</p>
                <p><strong>R</strong>ester → resté</p>
                <p><strong>S</strong>ortir → sorti</p>
                <p><strong>V</strong>enir → venu</p>
                <p><strong>A</strong>rriver → arrivé</p>
                <p><strong>N</strong>aître → né</p>
              </div>
              <div>
                <p><strong>D</strong>evenir → devenu</p>
                <p><strong>E</strong>ntrer → entré</p>
                <p><strong>R</strong>etourner → retourné</p>
                <p><strong>T</strong>omber → tombé</p>
                <p><strong>R</strong>evenir → revenu</p>
                <p><strong>A</strong>ller → allé</p>
                <p><strong>M</strong>ourir → mort</p>
                <p><strong>P</strong>artir → parti</p>
              </div>
            </div>
            <div className="mt-3 border-t border-[#E7DAB9] pt-3 text-xs text-[#526173]">
              <p className="font-bold">+ all reflexive verbs</p>
              <p>se lever → je me suis levé(e)</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Être verbs — past participles" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Past participle agreement with être</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            Unlike avoir verbs, the past participle of être verbs changes to match the subject's gender and number — just like an adjective.
          </p>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">Masculine singular — no change</p>
              <p className="text-[#CBD5E1]">Il est allé. — He went.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">Feminine singular — add <span className="text-[#A78BFA]">-e</span></p>
              <p className="text-[#CBD5E1]">Elle est allé<span className="text-[#A78BFA] font-black">e</span>. — She went.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">Masculine plural — add <span className="text-[#A78BFA]">-s</span></p>
              <p className="text-[#CBD5E1]">Ils sont allé<span className="text-[#A78BFA] font-black">s</span>. — They went.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">Feminine plural — add <span className="text-[#A78BFA]">-es</span></p>
              <p className="text-[#CBD5E1]">Elles sont allé<span className="text-[#A78BFA] font-black">es</span>. — They went.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Infinitive → past participle (être verbs)" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Form the passé composé with être" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Passé composé with être quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-3/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Lesson 1</Link>
          <Link href="/learn/school-french-support/unit-3/lesson-3" className="rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#6D28D9]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
