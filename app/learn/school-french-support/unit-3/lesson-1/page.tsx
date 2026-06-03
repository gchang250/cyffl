import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "parler", back: "parlé — spoken", subtext: "J'ai parlé avec mon ami hier. — I spoke with my friend yesterday." },
  { front: "manger", back: "mangé — eaten", subtext: "Elle a mangé une pomme ce matin. — She ate an apple this morning." },
  { front: "regarder", back: "regardé — watched", subtext: "Nous avons regardé un film. — We watched a film." },
  { front: "écouter", back: "écouté — listened", subtext: "Tu as écouté la radio? — Did you listen to the radio?" },
  { front: "travailler", back: "travaillé — worked", subtext: "Ils ont travaillé toute la journée. — They worked all day." },
  { front: "finir", back: "fini — finished", subtext: "J'ai fini mes devoirs. — I finished my homework." },
  { front: "choisir", back: "choisi — chosen", subtext: "Elle a choisi une robe rouge. — She chose a red dress." },
  { front: "répondre", back: "répondu — answered", subtext: "Il a répondu à la question. — He answered the question." },
  { front: "vendre", back: "vendu — sold", subtext: "Ils ont vendu leur voiture. — They sold their car." },
  { front: "attendre", back: "attendu — waited", subtext: "Nous avons attendu le bus. — We waited for the bus." },
  { front: "remplir", back: "rempli — filled", subtext: "Tu as rempli le formulaire? — Did you fill in the form?" },
  { front: "aimer", back: "aimé — liked/loved", subtext: "J'ai aimé ce livre. — I liked this book." },
];

const pairs = [
  { left: "parler", right: "parlé" },
  { left: "finir", right: "fini" },
  { left: "répondre", right: "répondu" },
  { left: "choisir", right: "choisi" },
  { left: "manger", right: "mangé" },
  { left: "vendre", right: "vendu" },
];

const exercises = [
  { before: "J'", after: "mes devoirs hier soir. (finir)", answer: "ai fini", hint: "avoir (j'ai) + past participle of finir (fini)", translation: "I finished my homework yesterday evening." },
  { before: "Nous", after: "un film intéressant. (regarder)", answer: "avons regardé", hint: "avoir (nous avons) + past participle of regarder (regardé)", translation: "We watched an interesting film." },
  { before: "Elle", after: "à toutes les questions. (répondre)", answer: "a répondu", hint: "avoir (elle a) + past participle of répondre (répondu)", translation: "She answered all the questions." },
  { before: "Vous", after: "du sport ce matin. (pratiquer)", answer: "avez pratiqué", hint: "avoir (vous avez) + past participle of pratiquer (pratiqué)", translation: "You did sport this morning." },
  { before: "Ils", after: "leur maison. (vendre)", answer: "ont vendu", hint: "avoir (ils ont) + past participle of vendre (vendu)", translation: "They sold their house." },
];

const questions = [
  {
    question: "How is the passé composé formed?",
    options: [
      "Subject + infinitive + past participle",
      "Subject + avoir/être conjugated + past participle",
      "Subject + past participle alone",
      "Subject + être conjugated + infinitive",
    ],
    correct: 1,
    explanation: "Passé composé = subject + auxiliary (avoir or être, conjugated in present) + past participle. For most verbs, the auxiliary is avoir.",
  },
  {
    question: "What is the past participle of 'regarder'?",
    options: ["regardé", "regarder", "regardu", "regardi"],
    correct: 0,
    explanation: "-er verbs form their past participle by removing -er and adding -é: regarder → regardé, parler → parlé, écouter → écouté.",
  },
  {
    question: "Which sentence is correct?",
    options: [
      "J'ai fini mes devoirs.",
      "J'ai finir mes devoirs.",
      "Je fini mes devoirs.",
      "J'ai finis mes devoirs.",
    ],
    correct: 0,
    explanation: "J'ai fini: auxiliary avoir (j'ai) + past participle of finir (fini). With avoir, the past participle does not agree with the subject.",
  },
  {
    question: "How do you say 'He didn't eat' in French?",
    options: [
      "Il a mangé pas.",
      "Il ne mangé pas a.",
      "Il n'a pas mangé.",
      "Il pas a mangé.",
    ],
    correct: 2,
    explanation: "Negation wraps the auxiliary: ne + auxiliary + pas + past participle. Il n'a pas mangé — ne contracts to n' before a vowel.",
  },
  {
    question: "What is the past participle of 'travailler'?",
    options: ["travaillé", "travaillé", "travaillir", "travaillou"],
    correct: 0,
    explanation: "Travailler is a regular -er verb: past participle = travaillé. The pattern is simple: remove -er, add -é. Ils ont travaillé toute la journée.",
  },
  {
    question: "How do you say 'We waited for the bus'?",
    options: ["Nous avons attendu le bus.", "Nous sommes attendu le bus.", "Nous avons attendé le bus.", "Nous avons attendre le bus."],
    correct: 0,
    explanation: "Attendre is a -re verb: past participle = attendu. Auxiliary = avoir. Nous avons attendu le bus. Note: never use the infinitive as the past participle.",
  },
  {
    question: "With avoir in the passé composé, when does the past participle agree with something?",
    options: ["Always with the subject", "Never — it stays unchanged", "With the subject only when it's feminine", "With a preceding direct object"],
    correct: 3,
    explanation: "With avoir, the past participle normally stays unchanged. BUT it does agree with a direct object that precedes the verb: Les livres qu'elle a lus (the books she read). At this level, the key rule is: with avoir, the past participle does NOT agree with the subject.",
  },
  {
    question: "How do you say 'Did you listen to the radio?'",
    options: ["Tu as écouté la radio?", "Tu es écouté la radio?", "Tu as écouter la radio?", "Tu avais écouté la radio?"],
    correct: 0,
    explanation: "Écouter → past participle: écouté. Auxiliary: avoir. Tu as écouté la radio? Questions in passé composé use the same structure — just raise your voice.",
  },
];

export default function Unit3Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Unit 3 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Passé Composé with avoir</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The passé composé is the main past tense used in spoken and written French. It describes specific, completed events. Formed with a conjugated auxiliary verb (avoir or être) plus a past participle, it is the first past tense you need to master.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Most verbs use avoir as their auxiliary. Conjugate avoir in the present tense, then add the past participle of the main verb. For -er verbs remove -er and add -é; for -ir verbs remove -ir and add -i; for -re verbs remove -re and add -u.
            </p>
            <div className="mt-5 overflow-x-auto rounded-xl border border-[#E7DAB9] bg-white p-4 text-sm">
              <p className="font-black text-[#0B1F3A] mb-2">avoir — present tense (auxiliary)</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                <p><span className="font-bold">j'ai</span> — I have</p>
                <p><span className="font-bold">nous avons</span> — we have</p>
                <p><span className="font-bold">tu as</span> — you have</p>
                <p><span className="font-bold">vous avez</span> — you have (pl)</p>
                <p><span className="font-bold">il/elle a</span> — he/she has</p>
                <p><span className="font-bold">ils/elles ont</span> — they have</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Past participle formation</p>
            <div className="mt-3 space-y-3 text-sm">
              <div className="rounded-lg bg-[#EDE9FE] p-3">
                <p className="font-black text-[#7C3AED]">-er verbs → remove -er, add <span className="underline">-é</span></p>
                <p className="mt-1 text-[#0B1F3A]">parler → parl<strong>é</strong> &nbsp;|&nbsp; manger → mang<strong>é</strong></p>
              </div>
              <div className="rounded-lg bg-[#EDE9FE] p-3">
                <p className="font-black text-[#7C3AED]">-ir verbs → remove -ir, add <span className="underline">-i</span></p>
                <p className="mt-1 text-[#0B1F3A]">finir → fin<strong>i</strong> &nbsp;|&nbsp; choisir → chois<strong>i</strong></p>
              </div>
              <div className="rounded-lg bg-[#EDE9FE] p-3">
                <p className="font-black text-[#7C3AED]">-re verbs → remove -re, add <span className="underline">-u</span></p>
                <p className="mt-1 text-[#0B1F3A]">vendre → vend<strong>u</strong> &nbsp;|&nbsp; répondre → répond<strong>u</strong></p>
              </div>
              <div className="rounded-lg border border-[#E7DAB9] p-3">
                <p className="font-black text-[#0B1F3A]">Formula</p>
                <p className="mt-1 text-[#526173]">subject + <em>avoir</em> + past participle</p>
                <p className="mt-1 font-bold text-[#0B1F3A]">J'ai parlé. — I spoke.</p>
                <p className="font-bold text-[#0B1F3A]">Nous avons fini. — We finished.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Past participles of common verbs" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Negation in the passé composé</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            In negation, <strong className="text-white">ne...pas</strong> wraps the auxiliary verb — not the past participle. The structure is: <strong className="text-white">ne + avoir + pas + past participle</strong>.
          </p>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">Il n'a pas mangé.</p>
              <p className="text-[#CBD5E1]">He didn't eat.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">Nous n'avons pas fini.</p>
              <p className="text-[#CBD5E1]">We didn't finish.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">Elle n'a pas répondu.</p>
              <p className="text-[#CBD5E1]">She didn't answer.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="font-bold">Ils n'ont pas vendu.</p>
              <p className="text-[#CBD5E1]">They didn't sell.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Infinitive → past participle" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Form the passé composé" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Passé composé with avoir quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <span className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#C4C9D0]">No previous lesson</span>
          <Link href="/learn/school-french-support/unit-3/lesson-2" className="rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#6D28D9]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
