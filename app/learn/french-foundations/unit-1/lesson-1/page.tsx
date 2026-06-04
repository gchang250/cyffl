import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "Bonjour", back: "Hello / Good morning", subtext: "[bɔ̃ʒuʁ] — The safest, most universal greeting. Use any time of day until early evening, in any situation formal or casual." },
  { front: "Bonsoir", back: "Good evening", subtext: "[bɔ̃swaʁ] — Replaces bonjour once it's evening (roughly after 6 pm). Use it when arriving somewhere in the evening." },
  { front: "Salut", back: "Hi / Bye (casual)", subtext: "[saly] — Casual, like 'hey'. Use only with people you know: friends, classmates. Never with a teacher, boss, or stranger." },
  { front: "Coucou", back: "Hey! (very informal)", subtext: "[kuku] — Even more casual than salut. Used with close friends and family, often in texts. Not appropriate in any formal or professional context." },
  { front: "Au revoir", back: "Goodbye", subtext: "[o ʁəvwaʁ] — Standard polite farewell. Use with everyone. Literally: 'until we see each other again'." },
  { front: "À bientôt", back: "See you soon", subtext: "[a bjɛ̃to] — Use when you expect to see the person again shortly. More specific than 'au revoir'." },
  { front: "À demain", back: "See you tomorrow", subtext: "[a dəmɛ̃] — For when you'll see the person the next day. Combines à (until) + demain (tomorrow)." },
  { front: "À tout à l'heure", back: "See you in a bit / later today", subtext: "[a tu ta lœʁ] — When you'll see the person later the same day. Often shortened in speech to 'à toute'." },
  { front: "Bonne journée!", back: "Have a good day!", subtext: "[bɔn ʒuʁne] — Said when leaving in the morning/daytime. Response: 'Merci, vous aussi!' (Thank you, you too!)" },
  { front: "Bonne soirée!", back: "Have a good evening!", subtext: "[bɔn swaʁe] — Said when leaving in the evening. Different from bonsoir — that's a greeting, this is a farewell." },
  { front: "Merci", back: "Thank you", subtext: "[mɛʁsi] — Works in every situation. 'Merci beaucoup' = thank you very much. 'Merci bien' = thanks a lot (friendly)." },
  { front: "De rien / Pas de quoi", back: "You're welcome", subtext: "[də ʁjɛ̃] / [pa də kwa] — Both mean 'you're welcome'. 'Je vous en prie' is the formal version. 'De rien' is the most common." },
  { front: "S'il vous plaît", back: "Please (formal/plural)", subtext: "[sil vu plɛ] — Use with strangers, adults, or when speaking to multiple people. Formal. Shorten to 'SVP' in writing." },
  { front: "S'il te plaît", back: "Please (informal)", subtext: "[sil tə plɛ] — Use with friends, classmates, family. Informal. Often shortened to 'STP' in texts." },
  { front: "Excusez-moi / Pardon", back: "Excuse me / Sorry", subtext: "[ɛkskyze mwa] / [paʁdɔ̃] — Use to get someone's attention or apologize. 'Excusez-moi' = formal; 'pardon' = quick, neutral." },
];

const matchPairs = [
  { left: "Bonjour", right: "Hello (any time, any situation)" },
  { left: "Salut", right: "Hi (casual, friends only)" },
  { left: "Bonsoir", right: "Good evening" },
  { left: "Au revoir", right: "Goodbye" },
  { left: "À demain", right: "See you tomorrow" },
  { left: "Bonne journée", right: "Have a good day" },
  { left: "Merci", right: "Thank you" },
  { left: "De rien", right: "You're welcome" },
];

const quiz = [
  {
    question: "You walk into a pharmacy and want to greet the pharmacist. What do you say?",
    options: ["Salut!", "Coucou!", "Bonjour!", "À bientôt!"],
    correct: 2,
    explanation: "Bonjour is the safe, universal greeting for any person, any situation, any time of day. Salut and coucou are too casual for a pharmacist or other professional.",
  },
  {
    question: "Your friend texts you 'Salut !' What does it mean and what tone is it?",
    options: ["Good evening — formal", "Goodbye — neutral", "Hi — casual, friends only", "Excuse me — polite"],
    correct: 2,
    explanation: "Salut means 'Hi' and is casual. It is only appropriate with people you know well. In a text to a friend, it's completely natural.",
  },
  {
    question: "You arrive at a dinner party at 7 pm. Which greeting is most appropriate?",
    options: ["Bonjour!", "Bonsoir!", "Bonne journée!", "À demain!"],
    correct: 1,
    explanation: "Bonsoir replaces bonjour once it's evening. 'Bonne journée' is said when leaving during the day, not when arriving. 'À demain' is a farewell, not a greeting.",
  },
  {
    question: "You're leaving your classroom at the end of the school day. Your teacher says 'Bonne journée!' What do you reply?",
    options: ["Au revoir, madame!", "Merci, vous aussi!", "Bonjour, madame!", "De rien!"],
    correct: 1,
    explanation: "'Merci, vous aussi!' (Thank you, you too!) is the standard polite response to 'Bonne journée'. You can also say 'Merci, bonne journée à vous aussi!'",
  },
  {
    question: "Which farewell should you use if you'll see the person again in a few hours?",
    options: ["Au revoir", "À demain", "À tout à l'heure", "Bonsoir"],
    correct: 2,
    explanation: "'À tout à l'heure' means 'see you in a bit / later today'. 'À demain' is for tomorrow, 'au revoir' is general. 'Bonsoir' is a greeting, not a farewell.",
  },
  {
    question: "What is the difference between 'Bonsoir' and 'Bonne soirée'?",
    options: [
      "They are identical in meaning",
      "Bonsoir is a greeting (arrival); bonne soirée is a farewell (departing in the evening)",
      "Bonsoir is casual; bonne soirée is formal",
      "Bonsoir is for men; bonne soirée is for women",
    ],
    correct: 1,
    explanation: "Bonsoir = 'good evening' (said when ARRIVING, equivalent to saying hello). Bonne soirée = 'have a good evening' (said when LEAVING). Same distinction as bonjour vs. bonne journée.",
  },
  {
    question: "A student asks their teacher 'S'il te plaît, puis-je aller aux toilettes?' Is this correct?",
    options: [
      "Yes — perfectly correct",
      "No — should be 's'il vous plaît' with a teacher, who is an adult",
      "No — should be 'Bonjour' first",
      "No — 'plaît' should be 'plait'",
    ],
    correct: 1,
    explanation: "'S'il te plaît' uses the informal 'te' and is for friends and family. With a teacher (an adult you show respect to), use 's'il vous plaît'. This is one of the most common politeness errors students make.",
  },
  {
    question: "Which phrase do you use to get a stranger's attention in a shop?",
    options: ["Salut!", "Coucou!", "Excusez-moi, s'il vous plaît.", "Pardon, s'il te plaît."],
    correct: 2,
    explanation: "'Excusez-moi, s'il vous plaît' is the polite way to get a stranger's attention. 'Pardon' alone also works for a quick excuse-me. Salut and coucou are too casual for strangers.",
  },
];

export default function Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 1 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Greetings
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              French has more greetings than you might think — and choosing the wrong one for the situation is one of the most common beginner mistakes. This lesson covers them all, with context for when to use each one.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">The single most important rule</p>
              <p className="mt-2 leading-7 text-white/80">
                <span className="font-black text-white">Bonjour</span> with anyone you don&apos;t know, any adult, any professional setting. <span className="font-black text-white">Salut</span> only with people you know. When in doubt: bonjour.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">A typical exchange</p>
              <div className="mt-3 space-y-1.5 text-sm">
                <p><span className="font-black">Person A:</span> Bonjour!</p>
                <p><span className="font-black">Person B:</span> Bonjour! Ça va?</p>
                <p><span className="font-black">Person A:</span> Ça va bien, merci. Et vous?</p>
                <p><span className="font-black">Person B:</span> Très bien, merci. Bonne journée!</p>
                <p><span className="font-black">Person A:</span> Merci, vous aussi!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formal vs informal */}
        <section className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Formal vs. informal register</h2>
          <p className="mt-2 text-sm text-[#526173]">French has a formal/informal distinction built into greetings and throughout the language. The choice signals respect.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#F0FDF4] p-4">
              <p className="font-black text-[#16A34A]">Formal (vous)</p>
              <p className="mt-1 text-xs text-[#526173]">Adults you don't know well, teachers, professionals, older people</p>
              <ul className="mt-3 space-y-1 text-sm">
                <li>Bonjour → Bonsoir</li>
                <li>S&apos;il vous plaît</li>
                <li>Excusez-moi</li>
                <li>Comment vous appelez-vous?</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[#EFF6FF] p-4">
              <p className="font-black text-[#2563EB]">Informal (tu)</p>
              <p className="mt-1 text-xs text-[#526173]">Friends, classmates, siblings, children</p>
              <ul className="mt-3 space-y-1 text-sm">
                <li>Salut → Coucou → Allô</li>
                <li>S&apos;il te plaît</li>
                <li>Excuse-moi</li>
                <li>Comment tu t&apos;appelles?</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="mt-8 rounded-[2rem] border-2 border-[#FEF3C7] bg-white p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">Common mistakes</p>
          <div className="mt-4 space-y-3 text-sm">
            {[
              { wrong: "Using 'bonsoir' as a farewell in the evening", right: "Bonsoir is a greeting. When leaving in the evening, say 'bonne soirée'." },
              { wrong: "'S'il te plaît' with a teacher or adult", right: "With adults and people you don't know well, always use 's'il vous plaît'." },
              { wrong: "Saying 'salut' to a stranger or professional", right: "Salut is only for people you know. Use 'bonjour' with anyone else." },
              { wrong: "Forgetting to greet the cashier", right: "In France and Quebec, it's rude not to say bonjour when entering a shop. Always greet!" },
            ].map((m) => (
              <div key={m.wrong} className="grid gap-1 rounded-xl border border-[#FDE68A] bg-[#FEFCE8] p-3">
                <p className="text-[#B45309]">✗ {m.wrong}</p>
                <p className="text-[#16A34A]">✓ {m.right}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Learn the vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click to flip. The IPA pronunciation is shown in square brackets — grey text on the front of each card.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Greetings, farewells & polite phrases" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Click a French phrase, then its correct English match.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Greetings → English" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Apply what you know</h2>
          <p className="mt-1 text-[#526173]">Eight situations — choose the right phrase for each one.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Greetings quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">You know French greetings.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: how to introduce yourself — your name, age, and where you&apos;re from.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/french-foundations" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Back to course
            </Link>
            <Link href="/learn/french-foundations/unit-1/lesson-2" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
