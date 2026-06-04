import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";
import MatchPairs from "@/components/MatchPairs";

const sentenceCards = [
  { front: "Je parle français.", back: "I speak French.", subtext: "Subject (je) + verb (parle) + object (français). Same order as English: no rearranging needed for simple statements." },
  { front: "Tu aimes le sport?", back: "Do you like sport?", subtext: "In French, questions can just use rising intonation. No 'do you' equivalent — just say the statement with a question tone." },
  { front: "Elle habite à Ottawa.", back: "She lives in Ottawa.", subtext: "Habiter à + city. Use 'à' before a city. Use 'en' before a country (feminine): elle habite en France." },
  { front: "Nous aimons la musique.", back: "We like music.", subtext: "'La musique' uses the definite article — French often uses le/la/les for general likes: j'aime le sport, j'adore la musique." },
  { front: "Ils jouent au foot.", back: "They play soccer.", subtext: "Jouer à + sport. 'Au' = à + le (contraction). Jouer au foot, jouer au tennis, jouer au basketball." },
];

const negationCards = [
  { front: "Je ne parle pas anglais.", back: "I don't speak English.", subtext: "Formula: ne + [verb] + pas. Ne goes before the verb, pas goes after — they 'sandwich' the verb." },
  { front: "Il ne mange pas.", back: "He doesn't eat.", subtext: "No object needed — the sandwich still works. In spoken French, the 'ne' is often dropped: 'Il mange pas.' (informal)" },
  { front: "Nous n'avons pas de chat.", back: "We don't have a cat.", subtext: "Ne → n' before a vowel (avons starts with 'a'). Also note: after negation, un/une/du/de la → de: 'pas de chat' not 'pas un chat'." },
  { front: "Tu n'es pas fatigué?", back: "You're not tired?", subtext: "Works with être too. Ne → n' before est/es (vowel). A question with negation like this often expresses surprise." },
];

const matchPairs = [
  { left: "Je parle.", right: "I speak." },
  { left: "Je ne parle pas.", right: "I don't speak." },
  { left: "Elle mange.", right: "She eats." },
  { left: "Elle ne mange pas.", right: "She doesn't eat." },
  { left: "Nous jouons.", right: "We play." },
  { left: "Nous ne jouons pas.", right: "We don't play." },
];

const fillIn = [
  {
    before: "Je",
    after: "pas le café.",
    answer: "n'aime",
    hint: "I don't like (ne…pas + aimer, vowel!)",
    translation: "I don't like coffee.",
  },
  {
    before: "Elle ne",
    after: "pas français.",
    answer: "parle",
    hint: "she speaks (parler)",
    translation: "She doesn't speak French.",
  },
  {
    before: "Tu",
    after: "football?",
    answer: "joues au",
    hint: "you play soccer (jouer au)",
    translation: "Do you play soccer?",
  },
  {
    before: "Nous n'",
    after: "pas de stylo.",
    answer: "avons",
    hint: "we have (avoir, vowel elision)",
    translation: "We don't have a pen.",
  },
];

const quiz = [
  {
    question: "Which is the correct negative of 'Je mange'?",
    options: ["Je pas mange.", "Je mange ne pas.", "Je ne mange pas.", "Ne je mange pas."],
    correct: 2,
    explanation: "Negation wraps the verb: ne + [verb] + pas. The verb stays in position — ne goes before it and pas goes after: 'Je ne mange pas.'",
  },
  {
    question: "You want to tell your teacher you don't speak English. Which is correct?",
    options: [
      "Elle parle pas anglais.",
      "Elle ne parle pas anglais.",
      "Je ne parle pas anglais.",
      "Je parle ne pas anglais.",
    ],
    correct: 2,
    explanation: "'Je ne parle pas anglais' — you're talking about yourself (je). 'Elle' would be speaking about a third person. Ne before the verb, pas after it.",
  },
  {
    question: "In French, what is the basic word order for a positive sentence?",
    options: [
      "Verb + Subject + Object",
      "Object + Subject + Verb",
      "Subject + Verb + Object",
      "Subject + Object + Verb",
    ],
    correct: 2,
    explanation: "Like English: Subject + Verb + Object. 'Je mange une pomme.' (I eat an apple.) The order is the same as English for basic statements — a big advantage for English speakers!",
  },
  {
    question: "How does 'ne' change before a vowel? Complete: 'Je ___ aime pas.'",
    options: ["ne", "n'", "non", "pas"],
    correct: 1,
    explanation: "Before a vowel (aimer starts with 'a'), ne contracts to n'. So: 'je n'aime pas.' This is called elision — French removes the vowel from 'ne' to avoid two vowels in a row.",
  },
  {
    question: "Which sentence correctly negates 'Ils jouent au foot'?",
    options: ["Ils ne jouent pas au foot.", "Ils jouent ne au foot pas.", "Ils ne pas jouent au foot.", "Pas ils jouent au foot."],
    correct: 0,
    explanation: "Ne goes before the verb (jouent) and pas goes after it — wrapping the verb. The rest of the sentence (au foot) comes after pas, unchanged.",
  },
  {
    question: "Your friend says 'Je n'ai pas de stylo.' What do they mean?",
    options: ["I don't have a pen.", "I have a pen.", "I don't like pens.", "I need a pen."],
    correct: 0,
    explanation: "'Je n'ai pas de stylo' = I don't have a pen. Notice: after negation (ne...pas), un/une/du/de la change to 'de' (or 'd' before a vowel). 'Un stylo' → 'pas de stylo'.",
  },
  {
    question: "Translate: 'Elle n'a pas de chat.' What's the key grammar rule at work?",
    options: [
      "She doesn't have a cat — ne...pas wraps avoir, and un/de becomes de after negation.",
      "She doesn't eat the cat — negation of manger.",
      "She isn't a cat — negation of être.",
      "She doesn't see the cat — negation of voir.",
    ],
    correct: 0,
    explanation: "'Elle n'a pas de chat' = She doesn't have a cat. Two rules: (1) ne + a → n'a before vowel; (2) after ne...pas, un/une/du/de la → de. 'Elle a un chat' → 'elle n'a pas de chat'.",
  },
  {
    question: "How do you say 'We don't play tennis'?",
    options: ["Nous ne jouons au tennis.", "Nous jouons pas au tennis.", "Nous ne jouons pas au tennis.", "Nous n'jouons pas au tennis."],
    correct: 2,
    explanation: "'Nous ne jouons pas au tennis.' Note: 'ne' stays as 'ne' before a consonant (jouons starts with 'j') — only contracts to n' before a vowel. The full ne...pas sandwich wraps the verb.",
  },
];

export default function Unit2Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/learn/french-foundations"
          className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]"
        >
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 2 · Lesson 4
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Simple Sentences
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Build your first real French sentences, and learn how to make
              them negative with ne…pas.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-sm font-black text-[#C9A44C]">The formula</p>
              <div className="mt-3 space-y-2 text-sm">
                <p className="text-white/80">
                  Positive:{" "}
                  <span className="font-black text-white">
                    Subject + Verb + Object
                  </span>
                </p>
                <p className="text-white/80">
                  Negative:{" "}
                  <span className="font-black text-white">
                    Subject + ne + Verb + pas
                  </span>
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Example</p>
              <p className="mt-2 font-black">Je parle français.</p>
              <p className="text-sm text-[#526173]">I speak French.</p>
              <p className="mt-2 font-black">Je ne parle pas anglais.</p>
              <p className="text-sm text-[#526173]">I don't speak English.</p>
            </div>
          </div>
        </div>

        {/* Sentences flashcards */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Positive sentences</h2>
          <p className="mt-1 text-[#526173]">Five examples, Subject + Verb + Object.</p>
          <div className="mt-6">
            <FlashCardDeck cards={sentenceCards} title="Positive sentences" />
          </div>
        </section>

        {/* Negation flashcards */}
        <section className="mt-12">
          <h2 className="text-2xl font-black">Negation: ne…pas</h2>
          <p className="mt-1 text-[#526173]">Flip these to see how ne…pas wraps the verb.</p>
          <div className="mt-6">
            <FlashCardDeck cards={negationCards} title="Negative sentences" />
          </div>
        </section>

        {/* Match positive ↔ negative */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Positive vs. negative</h2>
          <p className="mt-1 text-[#526173]">Match each French sentence to its English translation.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Sentence matching" />
          </div>
        </section>

        {/* Fill in */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Fill in the blank</h2>
          <p className="mt-1 text-[#526173]">Complete each sentence, some are negative, some positive.</p>
          <div className="mt-6">
            <FillInTheBlank exercises={fillIn} title="Sentence completion" />
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Four questions on sentence structure.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Sentences quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">
            Unit 2 complete!
          </p>
          <h2 className="mt-3 text-3xl font-black">
            You can build sentences, and break them with negation.
          </h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Test yourself on subject pronouns, être, avoir, and sentence structure before moving on.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/learn/french-foundations/unit-2/lesson-3"
              className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Previous
            </Link>
            <Link
              href="/learn/french-foundations/unit-2/test"
              className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
            >
              Take the unit test →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
