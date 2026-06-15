import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "parler", back: "to speak", subtext: "Je parle français. I speak French." },
  { front: "manger", back: "to eat", subtext: "Note: nous mangeons (keep the g soft before -ons)." },
  { front: "regarder", back: "to watch", subtext: "Je regarde la télé. I watch TV." },
  { front: "écouter", back: "to listen", subtext: "Tu écoutes de la musique. You listen to music." },
  { front: "jouer", back: "to play", subtext: "Il joue au foot. He plays soccer." },
  { front: "travailler", back: "to work", subtext: "Elle travaille beaucoup. She works a lot." },
  { front: "habiter", back: "to live (somewhere)", subtext: "Nous habitons à Montréal. We live in Montreal." },
  { front: "danser", back: "to dance", subtext: "Vous dansez bien. You dance well." },
  { front: "chanter", back: "to sing", subtext: "Ils chantent ensemble. They sing together." },
  { front: "étudier", back: "to study", subtext: "J'étudie le français. I study French." },
  { front: "chercher", back: "to look for", subtext: "Elle cherche ses clés. She's looking for her keys." },
  { front: "aimer", back: "to like / to love", subtext: "Already familiar from Unit 3!" },
  { front: "rentrer", back: "to go home / to return", subtext: "Je rentre à 18h. I'm going home at 6pm." },
  { front: "oublier", back: "to forget", subtext: "N'oublie pas ton livre! Don't forget your book!" },
  { front: "montrer", back: "to show", subtext: "Il me montre comment faire. He's showing me how." },
  { front: "expliquer", back: "to explain", subtext: "Tu peux m'expliquer? Can you explain to me?" },
  { front: "préparer", back: "to prepare", subtext: "Elle prépare le souper. She's preparing dinner." },
  { front: "fermer", back: "to close", subtext: "Ferme la porte, s'il te plaît! Close the door, please!" },
  { front: "tomber", back: "to fall", subtext: "Il tombe souvent. He falls often." },
  { front: "rester", back: "to stay / to remain", subtext: "Je reste à la maison ce soir. I'm staying home tonight." },
];

const pairs = [
  { left: "parler", right: "to speak" },
  { left: "manger", right: "to eat" },
  { left: "regarder", right: "to watch" },
  { left: "écouter", right: "to listen" },
  { left: "jouer", right: "to play" },
  { left: "travailler", right: "to work" },
];

const exercises = [
  { before: "Je", after: "français. (parler)", answer: "parle", hint: "je form: remove -er, add -e", translation: "I speak French." },
  { before: "Nous", after: "la télé. (regarder)", answer: "regardons", hint: "nous form: remove -er, add -ons", translation: "We watch TV." },
  { before: "Ils", after: "au foot. (jouer)", answer: "jouent", hint: "ils form: remove -er, add -ent", translation: "They play soccer." },
  { before: "Tu", after: "de la musique? (écouter)", answer: "écoutes", hint: "tu form: remove -er, add -es", translation: "Do you listen to music?" },
  { before: "Vous", after: "beaucoup. (travailler)", answer: "travaillez", hint: "vous form: remove -er, add -ez", translation: "You work a lot." },
];

const questions = [
  {
    question: "What is the 'nous' form of 'habiter'?",
    options: ["habitons", "habitez", "habitent", "habite"],
    correct: 0,
    explanation: "Nous + -er verb: remove -er, add -ons. Habit + ons = habitons.",
  },
  {
    question: "Why is 'nous mangeons' spelled with an extra 'e'?",
    options: ["It's irregular", "To keep the g soft before -ons", "It's a mistake", "It comes from Latin"],
    correct: 1,
    explanation: "In French, g before 'o' sounds hard (like English 'go'). Adding an e (mangeons) keeps the g soft, like in 'genre.'",
  },
  {
    question: "Which is the correct 'tu' form of 'écouter'?",
    options: ["écoute", "écoutez", "écoutes", "écoutons"],
    correct: 2,
    explanation: "Tu form: remove -er, add -es. Écout + es = écoutes.",
  },
  {
    question: "Which verb does NOT follow the regular -er pattern?",
    options: ["parler", "danser", "chanter", "avoir"],
    correct: 3,
    explanation: "Avoir (to have) is irregular and does not follow the -er conjugation pattern. The others are all regular -er verbs.",
  },
  {
    question: "What is the 'il/elle' form of 'chercher'?",
    options: ["il cherchons", "il cherche", "il cherches", "il cherchez"],
    correct: 1,
    explanation: "Il/elle form of -er verbs: remove -er and add -e. Cherch + e = cherche. Il cherche ses clés. The ending is silent.",
  },
  {
    question: "Conjugate 'étudier' for 'vous': Vous ___.",
    options: ["vous étudiez", "vous étudions", "vous étudient", "vous étudie"],
    correct: 0,
    explanation: "Vous form of -er verbs: remove -er, add -ez. Étudi + ez = étudiez. Vous étudiez beaucoup.",
  },
  {
    question: "Which sentence correctly uses 'habiter' in a negative sentence for 'ils'?",
    options: ["Ils habitent ne pas ici.", "Ils ne habitent pas ici.", "Ils n'habitent pas ici.", "Ils pas habitent ici."],
    correct: 2,
    explanation: "Habiter starts with h (treated as a vowel here), so ne → n'. Ils n'habitent pas ici. Ne/n' goes before the verb, pas goes after.",
  },
  {
    question: "A student conjugates 'danser' for 'elle' as 'elle dancez.' What is wrong?",
    options: ["The stem is wrong: it should be dans-.", "The ending -ez is only for vous.", "Danser is an irregular verb.", "The subject should be il, not elle."],
    correct: 1,
    explanation: "-ez is the vous ending. For elle, use -e: elle danse. Confusing vous (-ez) and il/elle (-e) is a very common mistake.",
  },
];

export default function Unit4Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 4 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Regular -er Verbs</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Master the most common verb pattern in French. Once you know the endings for -er verbs, you can conjugate hundreds of verbs.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">parler — to speak</p>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <div><span className="text-[#526173]">je</span> <span className="font-bold">parle</span></div>
              <div><span className="text-[#526173]">nous</span> <span className="font-bold">parlons</span></div>
              <div><span className="text-[#526173]">tu</span> <span className="font-bold">parles</span></div>
              <div><span className="text-[#526173]">vous</span> <span className="font-bold">parlez</span></div>
              <div><span className="text-[#526173]">il/elle</span> <span className="font-bold">parle</span></div>
              <div><span className="text-[#526173]">ils/elles</span> <span className="font-bold">parlent</span></div>
            </div>
            <p className="mt-4 text-xs text-[#526173]">Remove the -er ending from the infinitive, then add the endings shown above.</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">The -er verb pattern</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            Regular -er verbs all follow the same pattern: take the infinitive, remove the <strong className="text-white">-er</strong>, then add the right ending. There are six endings, one for each subject pronoun: <strong className="text-white">-e, -es, -e, -ons, -ez, -ent</strong>. The most important thing to know: the <em>je</em>, <em>il/elle</em>, and <em>ils/elles</em> endings are all silent when spoken. Only <em>-ons</em> and <em>-ez</em> produce audible endings.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
            {[
              ["je", "-e"],
              ["tu", "-es"],
              ["il/elle", "-e"],
              ["nous", "-ons"],
              ["vous", "-ez"],
              ["ils/elles", "-ent"],
            ].map(([pronoun, ending]) => (
              <div key={pronoun} className="rounded-xl bg-white/10 px-3 py-2">
                <span className="text-white/60">{pronoun} </span>
                <span className="font-black text-[#C9A44C]">{ending}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-[#CBD5E1]">
            <strong className="text-white">Watch out:</strong> some -er verbs have spelling changes in certain forms. Verbs ending in <em>-ger</em> (manger, voyager, nager) add a silent <em>e</em> before <em>-ons</em>: nous mangeons. Verbs ending in <em>-cer</em> (commencer, lancer) use a cedilla before <em>-ons</em>: nous commençons. These spelling changes preserve the soft sound of the consonant.
          </p>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={flashcards} title="Common -er verbs" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Verbs" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Conjugate the verb" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Regular -er verbs quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/french-foundations/unit-4/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/french-foundations/unit-4/lesson-4" className="rounded-full bg-[#D62828] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
