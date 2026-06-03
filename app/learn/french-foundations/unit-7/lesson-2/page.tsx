import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const devoirCards = [
  { front: "je dois", back: "I must / I have to", subtext: "Je dois partir. — I have to leave." },
  { front: "tu dois", back: "you must", subtext: "Tu dois étudier. — You have to study." },
  { front: "il/elle doit", back: "he/she must", subtext: "Il doit travailler. — He has to work." },
  { front: "nous devons", back: "we must", subtext: "Nous devons y aller. — We have to go." },
  { front: "vous devez", back: "you must", subtext: "Vous devez arriver à l'heure. — You must arrive on time." },
  { front: "ils/elles doivent", back: "they must", subtext: "Ils doivent finir. — They have to finish." },
];

const savoirCards = [
  { front: "je sais", back: "I know", subtext: "Je sais la réponse. — I know the answer." },
  { front: "tu sais", back: "you know", subtext: "Tu sais nager? — Can/Do you know how to swim?" },
  { front: "il/elle sait", back: "he/she knows", subtext: "Elle sait jouer du piano. — She can play the piano." },
  { front: "nous savons", back: "we know", subtext: "Nous savons qu'il a raison. — We know he's right." },
  { front: "vous savez", back: "you know", subtext: "Vous savez cuisiner? — Do you know how to cook?" },
  { front: "ils/elles savent", back: "they know", subtext: "Ils savent la vérité. — They know the truth." },
];

const connaitreCards = [
  { front: "je connais", back: "I know", subtext: "Je connais Marie. — I know Marie." },
  { front: "tu connais", back: "you know", subtext: "Tu connais ce restaurant? — Do you know this restaurant?" },
  { front: "il/elle connaît", back: "he/she knows", subtext: "Elle connaît bien Paris. — She knows Paris well." },
  { front: "nous connaissons", back: "we know", subtext: "Nous connaissons ses parents. — We know his parents." },
  { front: "vous connaissez", back: "you know", subtext: "Vous connaissez cette chanson? — Do you know this song?" },
  { front: "ils/elles connaissent", back: "they know", subtext: "Ils connaissent tout le monde. — They know everyone." },
];

const pairs = [
  { left: "je dois", right: "I must" },
  { left: "tu sais", right: "you know (fact)" },
  { left: "elle connaît", right: "she knows (person/place)" },
  { left: "nous devons", right: "we must" },
  { left: "vous savez", right: "you know (how to)" },
  { left: "ils connaissent", right: "they know (are acquainted)" },
];

const fillIn = [
  { before: "Je", after: "partir maintenant. (devoir)", answer: "dois", hint: "je form of devoir", translation: "I have to leave now." },
  { before: "Tu", after: "nager? (savoir)", answer: "sais", hint: "tu form of savoir — knowing how to do", translation: "Do you know how to swim?" },
  { before: "Elle", after: "bien Montréal. (connaître)", answer: "connaît", hint: "elle form of connaître — knowing a place", translation: "She knows Montreal well." },
  { before: "Nous", after: "travailler dur. (devoir)", answer: "devons", hint: "nous form of devoir", translation: "We have to work hard." },
  { before: "Tu", after: "ce café? (connaître)", answer: "connais", hint: "tu form of connaître — knowing a place", translation: "Do you know this café?" },
];

const quiz = [
  {
    question: "Which verb would you use to say 'I know how to cook'?",
    options: ["Je connais cuisiner.", "Je sais cuisiner.", "Je dois cuisiner.", "Je peux cuisiner."],
    correct: 1,
    explanation: "Savoir + infinitive = to know how to do something. Je sais cuisiner = I know how to cook.",
  },
  {
    question: "Which verb would you use to say 'I know Paris'?",
    options: ["Je sais Paris.", "Je dois Paris.", "Je connais Paris.", "Je peux Paris."],
    correct: 2,
    explanation: "Connaître is used for places, people, and things you are acquainted with. Je connais Paris = I know Paris.",
  },
  {
    question: "What does 'Vous devez arriver à l'heure' mean?",
    options: ["You want to arrive on time.", "You can arrive on time.", "You must arrive on time.", "You know how to arrive on time."],
    correct: 2,
    explanation: "Devoir = must / have to. Vous devez = you must. À l'heure = on time.",
  },
  {
    question: "What is the 'il' form of 'connaître'?",
    options: ["il connaite", "il connait", "il connaît", "il connaisse"],
    correct: 2,
    explanation: "Il connaît (with a circumflex on the î — it distinguishes it from connait without accent). This is the standard form.",
  },
  {
    question: "Which verb would you use to say 'Do you know what time it is?'",
    options: ["connaître", "savoir", "devoir", "pouvoir"],
    correct: 1,
    explanation: "Savoir is used for factual knowledge and information: Tu sais quelle heure il est? You're asking if someone knows a fact, not if they're acquainted with a person.",
  },
  {
    question: "How do you say 'We have to finish the project'?",
    options: ["Nous voulons finir le projet.", "Nous pouvons finir le projet.", "Nous devons finir le projet.", "Nous savons finir le projet."],
    correct: 2,
    explanation: "Devoir = must / have to. Nous devons finir le projet. Compare: vouloir = want, pouvoir = can, savoir = know how to.",
  },
  {
    question: "A student writes 'Je sais Marie.' What's wrong?",
    options: ["Sais should be connais — you know a person with connaître.", "Sais should be peux.", "The sentence needs a direct object marker.", "Nothing is wrong."],
    correct: 0,
    explanation: "You use connaître for people: Je connais Marie. Savoir is for facts and skills. This is one of the most common confusion points between these two verbs.",
  },
  {
    question: "What does 'Vous devez arriver à l'heure' mean?",
    options: ["You want to arrive on time.", "You know how to arrive on time.", "You must arrive on time.", "You can arrive on time."],
    correct: 2,
    explanation: "Devoir (vous devez) = must / have to. À l'heure = on time. So: you must arrive on time. An instruction from a teacher or authority figure.",
  },
];

export default function Unit7Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">← French Foundations</Link>
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 7 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Devoir, Savoir, Connaître</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Three more essential irregular verbs — devoir expresses obligation, savoir is for knowing facts, and connaître is for knowing people and places.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Savoir vs. Connaître</p>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <p className="font-black text-[#2563EB]">Savoir</p>
                <p className="text-[#526173]">to know facts, information, or how to do something.</p>
                <p className="mt-1 font-semibold text-[#0B1F3A]">Je sais nager.</p>
                <p className="text-[#526173] text-xs">I know how to swim.</p>
                <p className="mt-1 font-semibold text-[#0B1F3A]">Tu sais quelle heure il est?</p>
                <p className="text-[#526173] text-xs">Do you know what time it is?</p>
              </div>
              <div className="border-t border-[#E7DAB9] pt-3">
                <p className="font-black text-[#2563EB]">Connaître</p>
                <p className="text-[#526173]">to know people, places, or things (be acquainted with).</p>
                <p className="mt-1 font-semibold text-[#0B1F3A]">Je connais Marie.</p>
                <p className="text-[#526173] text-xs">I know Marie.</p>
                <p className="mt-1 font-semibold text-[#0B1F3A]">Elle connaît Paris.</p>
                <p className="text-[#526173] text-xs">She knows Paris.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={devoirCards} title="devoir — must / to have to" />
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={savoirCards} title="savoir — to know (facts)" />
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={connaitreCards} title="connaître — to know (people/places)" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Devoir, savoir, connaître" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={fillIn} title="Devoir, savoir, connaître in context" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={quiz} title="Devoir, savoir, connaître quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/french-foundations/unit-7/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/french-foundations/unit-7/lesson-3" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
