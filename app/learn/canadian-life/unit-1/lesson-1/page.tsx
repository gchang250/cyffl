import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "fin de semaine", back: "weekend — le weekend (standard)\n", subtext: "On se voit en fin de semaine? — See you this weekend?" },
  { front: "magasinage", back: "shopping — faire du shopping (standard)", subtext: "Je vais faire du magasinage au centre-ville. — I'm going shopping downtown." },
  { front: "dépanneur", back: "convenience store — épicerie de proximité (standard)", subtext: "Passe au dépanneur acheter du lait. — Stop at the dep to buy milk." },
  { front: "tuque", back: "winter knit hat — bonnet de laine (standard)", subtext: "N'oublie pas ta tuque, il fait -20! — Don't forget your tuque, it's -20!" },
  { front: "char", back: "car — voiture (standard)", subtext: "Mon char est brisé encore. — My car is broken again." },
  { front: "pogner", back: "to catch / to get / to succeed — attraper / réussir (standard)", subtext: "T'as pogné le bus? — Did you catch the bus?" },
  { front: "jaser", back: "to chat — bavarder (standard)", subtext: "On a jasé pendant des heures. — We chatted for hours." },
  { front: "tantôt", back: "earlier / later / in a bit — tout à l'heure / plus tard (standard)", subtext: "Je te rappelle tantôt. — I'll call you back in a bit." },
  { front: "virer", back: "to turn — tourner (standard)", subtext: "Vire à gauche au coin de la rue. — Turn left at the corner." },
  { front: "placoter", back: "to gossip / to chat — bavarder / cancaner (standard)", subtext: "Elles placotent depuis ce matin. — They've been gossiping since this morning." },
  { front: "courriel", back: "email — e-mail (standard)\nNote: courriel is the official Quebec government term and is widely used.", subtext: "Envoie-moi un courriel. — Send me an email." },
  { front: "stationnement", back: "parking lot — parking (standard)", subtext: "Le stationnement est gratuit le dimanche. — Parking is free on Sundays." },
  { front: "chum / blonde", back: "boyfriend / girlfriend — petit ami / petite amie (standard)", subtext: "C'est mon chum depuis deux ans. — He's been my boyfriend for two years." },
  { front: "niaiseux / niaiseuse", back: "silly, dumb — idiot / stupide (standard)", subtext: "Fais pas le niaiseux! — Don't be silly!" },
  { front: "gossant(e)", back: "annoying — agaçant(e) (standard)", subtext: "C'est vraiment gossant ce bruit-là. — That noise is really annoying." },
];

const pairs = [
  { left: "fin de semaine", right: "weekend" },
  { left: "char", right: "car" },
  { left: "tuque", right: "winter hat" },
  { left: "dépanneur", right: "convenience store" },
  { left: "jaser", right: "to chat" },
  { left: "gossant", right: "annoying" },
];

const exercises = [
  {
    before: "Est-ce que tu as un",
    after: "ce soir, ou tu restes à la maison? (car)",
    answer: "char",
    hint: "Quebec word for 'voiture' (car)",
    translation: "Do you have a car tonight, or are you staying home?",
  },
  {
    before: "Je vais faire du",
    after: "au Carrefour Laval samedi. (shopping)",
    answer: "magasinage",
    hint: "Quebec word for 'shopping'",
    translation: "I'm going shopping at Carrefour Laval on Saturday.",
  },
  {
    before: "Mets ta",
    after: ", il fait vraiment froid dehors! (winter hat)",
    answer: "tuque",
    hint: "Quebec word for a knit winter hat",
    translation: "Put on your tuque, it's really cold outside!",
  },
  {
    before: "On a",
    after: "longtemps après le souper. (chatted)",
    answer: "jasé",
    hint: "Past tense of 'jaser' — to chat",
    translation: "We chatted for a long time after dinner.",
  },
  {
    before: "Le",
    after: "du coin est ouvert jusqu'à minuit. (convenience store)",
    answer: "dépanneur",
    hint: "Quebec word for a convenience store",
    translation: "The corner store is open until midnight.",
  },
];

const questions = [
  {
    question: "Which Quebec French word means 'car'?",
    options: ["tuque", "char", "chum", "tantôt"],
    correct: 1,
    explanation: "'Char' is the Quebec French word for 'voiture' (car). It comes from the French word for chariot and has been repurposed in everyday Quebec speech.",
  },
  {
    question: "What does 'jaser' mean?",
    options: ["to drive", "to shop", "to chat", "to turn"],
    correct: 2,
    explanation: "'Jaser' means to chat or have a conversation. The equivalent in standard French is 'bavarder'. It's one of the most common verbs in everyday Quebec speech.",
  },
  {
    question: "Which of these is the official Quebec government term for 'email'?",
    options: ["e-mail", "mail", "courriel", "messagerie"],
    correct: 2,
    explanation: "'Courriel' was coined by the Office québécois de la langue française (OQLF) as a French equivalent for 'email' and is required on Quebec government documents and websites.",
  },
  {
    question: "'Tantôt' in Quebec French can mean which of the following?",
    options: [
      "Right now",
      "Never",
      "Earlier or a little later, depending on context",
      "Always",
    ],
    correct: 2,
    explanation: "'Tantôt' is context-dependent in Quebec French: 'Je l'ai vu tantôt' means 'I saw him earlier,' while 'Je te rappelle tantôt' means 'I'll call you back in a bit.' This ambiguity often surprises learners.",
  },
  {
    question: "What is a 'dépanneur' in Quebec?",
    options: ["A repair shop", "A pharmacy", "A convenience store open late hours", "A fast food restaurant"],
    correct: 2,
    explanation: "A dépanneur is a Quebec convenience store — typically open late and selling groceries, drinks, and everyday items. The name comes from 'dépanner' (to fix a problem). In standard French you'd say 'épicerie de proximité'.",
  },
  {
    question: "In Quebec French, what is the difference between 'chum' and 'blonde'?",
    options: [
      "Both mean friend — there is no difference",
      "Chum = boyfriend, blonde = girlfriend",
      "Chum = best friend, blonde = acquaintance",
      "Both are used only for children",
    ],
    correct: 1,
    explanation: "In Quebec French, 'chum' (or 'mon chum') = boyfriend, and 'blonde' (or 'ma blonde') = girlfriend. These meanings don't exist in standard French where 'blonde' just means a blonde-haired person.",
  },
  {
    question: "What is the Quebec French term for 'weekend'?",
    options: ["la fin de journée", "la semaine finale", "la fin de semaine", "le week-end"],
    correct: 2,
    explanation: "'La fin de semaine' is the standard Quebec French term for weekend. While 'le week-end' (borrowed from English) is understood and used in France, Quebec French officially prefers 'fin de semaine' — promoted by the OQLF.",
  },
  {
    question: "What does 'stationnement' mean in Quebec French?",
    options: ["A bus station", "A parking lot / parking space", "A train station", "A standing order"],
    correct: 1,
    explanation: "'Stationnement' = parking or parking lot. It's a key Quebec government term — you'll see it on signs, in notices, and on Quebec government websites. In France, 'stationnement' is used mainly in official/legal contexts, but 'parking' is common in everyday speech.",
  },
];

export default function Unit1Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#B91C1C]">Unit 1 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Quebec Vocabulary</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Quebec French has hundreds of words and expressions that differ from standard French. These aren't errors — they're a distinct and living variety of French. This lesson covers the most common vocabulary differences you'll encounter in Quebec.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Quick comparison</p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E7DAB9]">
                    <th className="pb-2 pr-4 text-left font-black text-[#B91C1C]">Quebec</th>
                    <th className="pb-2 pr-4 text-left font-black text-[#526173]">Standard</th>
                    <th className="pb-2 text-left font-black text-[#0B1F3A]">English</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3EDD6]">
                  {[
                    ["fin de semaine", "weekend", "weekend"],
                    ["magasinage", "shopping", "shopping"],
                    ["dépanneur", "épicerie de proximité", "convenience store"],
                    ["tuque", "bonnet de laine", "winter hat"],
                    ["char", "voiture", "car"],
                    ["pogner", "attraper / réussir", "to catch / succeed"],
                    ["jaser", "bavarder", "to chat"],
                    ["tantôt", "tout à l'heure / plus tard", "earlier / later"],
                    ["virer", "tourner", "to turn"],
                    ["placoter", "bavarder", "to gossip / chat"],
                    ["courriel", "e-mail", "email"],
                    ["stationnement", "parking", "parking lot"],
                    ["chum", "petit ami", "boyfriend"],
                    ["blonde", "petite amie", "girlfriend"],
                    ["niaiseux/se", "idiot / stupide", "silly, dumb"],
                    ["gossant(e)", "agaçant(e)", "annoying"],
                  ].map(([qc, std, en]) => (
                    <tr key={qc}>
                      <td className="py-1.5 pr-4 font-bold text-[#B91C1C]">{qc}</td>
                      <td className="py-1.5 pr-4 text-[#526173]">{std}</td>
                      <td className="py-1.5 text-[#0B1F3A]">{en}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Quebec vocabulary flashcards" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Why does Quebec French differ?</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            French was established in Quebec in the 17th century and then developed largely in isolation after Britain took control of New France in 1763. This means Quebec French preserved features of 17th-century French that disappeared in France, while also evolving on its own path. Centuries of proximity to English-speaking North America also produced <strong className="text-white">calques</strong> — words borrowed from English and adapted into French (like <em>stationnement</em> from "station"). Far from being degraded French, Quebec French is a rich and fully functional variety recognized by linguists worldwide.
          </p>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the Quebec word to its English meaning" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Choose the Quebec French word" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Quebec vocabulary quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <span className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#C4C9D0]">No previous lesson</span>
          <Link href="/learn/canadian-life/unit-1/lesson-2" className="rounded-full bg-[#B91C1C] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#991B1B]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
