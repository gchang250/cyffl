import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "hier", back: "yesterday", subtext: "Hier, j'ai vu un film.: Yesterday, I watched a film." },
  { front: "hier soir", back: "yesterday evening / last night", subtext: "Hier soir, nous avons mangé au restaurant.: Last night we ate at a restaurant." },
  { front: "ce matin", back: "this morning", subtext: "Ce matin, elle est arrivée en retard.: This morning she arrived late." },
  { front: "la semaine dernière", back: "last week", subtext: "La semaine dernière, ils sont partis en vacances.: Last week they went on holiday." },
  { front: "le mois dernier", back: "last month", subtext: "Le mois dernier, j'ai commencé un nouveau cours.: Last month I started a new course." },
  { front: "l'année dernière", back: "last year", subtext: "L'année dernière, nous avons visité Paris.: Last year we visited Paris." },
  { front: "il y a deux jours", back: "two days ago", subtext: "Il y a deux jours, il a perdu ses clés.: Two days ago he lost his keys." },
  { front: "tout à l'heure", back: "a little while ago / just now", subtext: "Je l'ai vu tout à l'heure.: I saw him just now." },
  { front: "déjà", back: "already", subtext: "Tu as déjà fini?: Have you already finished?" },
  { front: "il y a longtemps", back: "a long time ago", subtext: "Ça s'est passé il y a longtemps.: That happened a long time ago." },
];

const pairs = [
  { left: "hier", right: "yesterday" },
  { left: "la semaine dernière", right: "last week" },
  { left: "il y a deux jours", right: "two days ago" },
  { left: "ce matin", right: "this morning" },
  { left: "l'année dernière", right: "last year" },
  { left: "déjà", right: "already" },
];

const exercises = [
  { before: "Elle n'", after: "pas mangé ce matin.", answer: "a", hint: "ne...pas wraps the auxiliary: elle n'a pas mangé", translation: "She didn't eat this morning." },
  { before: "Ils ne sont", after: "venus ici.", answer: "jamais", hint: "ne...jamais = never. ne wraps the auxiliary: ils ne sont jamais venus", translation: "They have never come here." },
  { before: "Je n'ai", after: "compris la question.", answer: "rien", hint: "ne...rien = nothing. ne wraps auxiliary, rien follows past participle", translation: "I didn't understand anything." },
  { before: "Nous n'avons", after: "travaillé depuis lundi.", answer: "plus", hint: "ne...plus = no longer/anymore. ne wraps auxiliary: nous n'avons plus travaillé", translation: "We haven't worked since Monday." },
  { before: "La semaine dernière, elle", after: "à une conférence. (assister)", answer: "a assisté", hint: "avoir (elle a) + past participle of assister (assisté): time phrase at the start", translation: "Last week she attended a conference." },
];

const questions = [
  {
    question: "Where does 'ne...pas' go in the passé composé?",
    options: [
      "Before the subject and after the past participle.",
      "Before and after the past participle.",
      "Around the auxiliary verb (ne + auxiliary + pas).",
      "Before the auxiliary only.",
    ],
    correct: 2,
    explanation: "Negation wraps the auxiliary: ne + [avoir/être] + pas (jamais/plus/rien) + past participle. Example: il n'a pas mangé, elle n'est jamais venue.",
  },
  {
    question: "How do you say 'I never spoke to him'?",
    options: [
      "Je n'ai jamais parlé lui.",
      "Je ne jamais ai parlé à lui.",
      "Je n'ai jamais parlé à lui.",
      "Je n'ai pas jamais parlé à lui.",
    ],
    correct: 2,
    explanation: "Ne...jamais wraps the auxiliary: je n'ai jamais parlé. The negation ne goes before avoir, and jamais goes immediately after avoir, before the past participle.",
  },
  {
    question: "Which time expression signals that passé composé is needed?",
    options: ["toujours", "hier soir", "chaque jour", "autrefois"],
    correct: 1,
    explanation: "'Hier soir' (yesterday evening) signals a specific, completed event in the past, so passé composé is used. The other options suggest habit or repeated actions (imparfait).",
  },
  {
    question: "What does 'il y a deux semaines' mean?",
    options: ["in two weeks", "for two weeks", "since two weeks", "two weeks ago"],
    correct: 3,
    explanation: "'Il y a + time' means 'ago' when used with a past tense: il y a deux semaines = two weeks ago. Compare: dans deux semaines = in two weeks.",
  },
  {
    question: "How do you say 'We haven't studied since Monday'?",
    options: [
      "Nous n'avons pas étudié depuis lundi.",
      "Nous n'avons pas étudié il y a lundi.",
      "Nous n'avons pas étudié avant lundi.",
      "Nous ne pas avons étudié depuis lundi.",
    ],
    correct: 0,
    explanation: "Depuis + time = since. Nous n'avons pas étudié depuis lundi. Negation wraps the auxiliary: ne + avons + pas. 'Il y a' means ago, not since.",
  },
  {
    question: "What does 'ne...rien' mean?",
    options: ["never", "nothing / not anything", "no longer", "not yet"],
    correct: 1,
    explanation: "Ne...rien = nothing / not anything. Je n'ai rien mangé = I didn't eat anything. Contrast: ne...jamais = never, ne...plus = no longer, ne...pas encore = not yet.",
  },
  {
    question: "What does 'déjà' mean in 'Tu as déjà fini?'",
    options: ["not yet", "still", "already", "again"],
    correct: 2,
    explanation: "Déjà = already. Tu as déjà fini? = Have you already finished? It goes between the auxiliary and the past participle: tu as déjà fini.",
  },
  {
    question: "How do you say 'She has never come here'?",
    options: [
      "Elle n'est jamais venue ici.",
      "Elle n'a jamais vendu ici.",
      "Elle n'est pas venue jamais ici.",
      "Elle jamais est venue ici.",
    ],
    correct: 0,
    explanation: "Venir uses être. Elle n'est jamais venue ici. Jamais goes between the auxiliary (est) and the past participle (venue). Remember gender agreement: elle → venue.",
  },
];

export default function Unit3Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Unit 3 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Negation & Time Expressions</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Knowing how to negate a past tense sentence and how to locate events in time are essential skills. French offers several negation patterns beyond <em>ne...pas</em>, and a rich vocabulary of time expressions that signal when events occurred.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              In the passé composé, the two-part negation always wraps the auxiliary verb. The past participle comes after the negation. This rule applies to all negation types: <em>ne...pas, ne...jamais, ne...plus, ne...rien</em>.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A] mb-3">Time expressions for the past</p>
            <div className="space-y-1 text-sm">
              <p><strong>hier</strong> — yesterday</p>
              <p><strong>hier soir</strong> — last night / yesterday evening</p>
              <p><strong>ce matin</strong> — this morning</p>
              <p><strong>la semaine dernière</strong> — last week</p>
              <p><strong>le mois dernier</strong> — last month</p>
              <p><strong>l'année dernière</strong> — last year</p>
              <p><strong>il y a + [time]</strong> — [time] ago</p>
              <p><strong>déjà</strong> — already</p>
              <p><strong>tout à l'heure</strong> — just now / a moment ago</p>
              <p><strong>il y a longtemps</strong> — a long time ago</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Time expressions in the passé composé" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Negation — four key patterns</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            All negation patterns follow the same rule: <strong className="text-white">ne</strong> wraps the auxiliary verb, and the second element goes immediately after the auxiliary, before the past participle.
          </p>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold text-[#A78BFA]">ne...pas — not</p>
              <p className="text-[#CBD5E1]">Il n'a <strong className="text-white">pas</strong> mangé.</p>
              <p className="text-[#CBD5E1]">She didn't eat.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold text-[#A78BFA]">ne...jamais — never</p>
              <p className="text-[#CBD5E1]">Il n'a <strong className="text-white">jamais</strong> voyagé.</p>
              <p className="text-[#CBD5E1]">He has never travelled.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold text-[#A78BFA]">ne...plus — no longer</p>
              <p className="text-[#CBD5E1]">Elle n'est <strong className="text-white">plus</strong> venue.</p>
              <p className="text-[#CBD5E1]">She didn't come anymore.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold text-[#A78BFA]">ne...rien — nothing</p>
              <p className="text-[#CBD5E1]">Ils n'ont <strong className="text-white">rien</strong> dit.</p>
              <p className="text-[#CBD5E1]">They said nothing.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Time expressions: French to English" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Negation and time expressions" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Negation & time expressions quiz" />
        </div>

        <div className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">

          <p className="mt-2 text-[#526173]">You've covered passé composé with avoir and être, irregular past participles, and negation with time expressions. Test yourself before moving on to Unit 4.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/school-french-support/unit-3/test" className="rounded-full bg-[#7C3AED] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#6D28D9]">Take the unit test →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
