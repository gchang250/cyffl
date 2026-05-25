import Link from "next/link";

const aboutYourself = [
  {
    french: "Comment tu t'appelles et d'où viens-tu ?",
    english: "What is your name and where are you from?",
    tip: "Start with Je m'appelle... and then use Je viens de... or Je suis de... to say where you're from.",
  },
  {
    french: "Quels sont tes passe-temps préférés ?",
    english: "What are your favourite hobbies?",
    tip: "Use J'aime + infinitive (J'aime jouer...) or Je fais de... for activities you do regularly.",
  },
  {
    french: "Décris ta personnalité en trois adjectifs.",
    english: "Describe your personality in three adjectives.",
    tip: "Remember adjective agreement — add -e for feminine, -s for plural. Je suis + adjective works perfectly.",
  },
  {
    french: "Quelle est l'importance de la famille dans ta vie ?",
    english: "How important is family in your life?",
    tip: "Use la famille est très importante pour moi and explain why with parce que.",
  },
  {
    french: "Qu'est-ce que tu voudrais faire dans l'avenir ?",
    english: "What would you like to do in the future?",
    tip: "Je voudrais + infinitive is perfect here. Je voudrais devenir... or Je voudrais travailler...",
  },
];

const dailyLife = [
  {
    french: "Décris ta routine quotidienne du matin.",
    english: "Describe your morning routine.",
    tip: "Use reflexive verbs: Je me lève, je me douche, je m'habille... Add time expressions like d'abord, ensuite, enfin.",
  },
  {
    french: "Qu'est-ce que tu fais après l'école ou le travail ?",
    english: "What do you do after school or work?",
    tip: "Après les cours / le travail, je... Use a mix of activities to make your answer varied.",
  },
  {
    french: "Décris un repas typique chez toi.",
    english: "Describe a typical meal at home.",
    tip: "Use on mange... or nous mangeons... Talk about what, when, and with whom you eat.",
  },
  {
    french: "Comment tu te déplaces dans ta ville ?",
    english: "How do you get around your city?",
    tip: "Je prends le bus / le métro / le vélo. Or Je vais à pied (I walk). You can also mention how long it takes.",
  },
  {
    french: "Qu'est-ce que tu fais le week-end ?",
    english: "What do you do on weekends?",
    tip: "Use le samedi / le dimanche (on Saturdays / Sundays) or le week-end. Mention different activities.",
  },
];

const opinions = [
  {
    french: "Quel est ton film préféré et pourquoi ?",
    english: "What is your favourite film and why?",
    tip: "Mon film préféré est... parce que... Use adjectives like captivant, émouvant, drôle to describe it.",
  },
  {
    french: "Penses-tu que les réseaux sociaux sont bons ou mauvais ?",
    english: "Do you think social media is good or bad?",
    tip: "Give a balanced answer: D'un côté... de l'autre côté... Use à mon avis or selon moi to signal your opinion.",
  },
  {
    french: "Quel type de musique préfères-tu ?",
    english: "What type of music do you prefer?",
    tip: "Je préfère / J'aime surtout... Explain why with car or parce que and some descriptive language.",
  },
  {
    french: "Est-ce qu'il est important d'apprendre des langues étrangères ?",
    english: "Is it important to learn foreign languages?",
    tip: "Use je crois que, je pense que, or il me semble que. Give reasons and an example from your own experience.",
  },
  {
    french: "Quel endroit voudrais-tu visiter et pourquoi ?",
    english: "What place would you like to visit and why?",
    tip: "Je voudrais visiter... parce que... Describe what appeals to you — the culture, food, landscape, history.",
  },
];

const describeExplain = [
  {
    french: "Décris la maison ou l'appartement idéal.",
    english: "Describe the ideal house or apartment.",
    tip: "Use il y aurait (there would be) and ce serait (it would be). Include location, rooms, and features.",
  },
  {
    french: "Explique comment préparer ton plat préféré.",
    english: "Explain how to prepare your favourite dish.",
    tip: "Use the imperative (Prenez, ajoutez, mélangez) or d'abord / ensuite / puis / enfin for sequencing.",
  },
  {
    french: "Décris une personne que tu admires.",
    english: "Describe someone you admire.",
    tip: "Start with physical description, then character. Use il / elle est + adjective and give a concrete reason for your admiration.",
  },
  {
    french: "Explique ce que signifie être un bon ami.",
    english: "Explain what it means to be a good friend.",
    tip: "Un bon ami doit... or Un bon ami est quelqu'un qui... Use devoir + infinitive for obligations.",
  },
  {
    french: "Décris un souvenir d'enfance important.",
    english: "Describe an important childhood memory.",
    tip: "Use the imparfait for the setting and background (quand j'étais petit...) and the passé composé for specific events.",
  },
];

export default function SpeakingPromptsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Resources
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]">
            Speaking
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Speaking prompts
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            Twenty curated French speaking prompts to build confidence and fluency. Each prompt includes an English translation and a practical tip for structuring your answer.
          </p>
        </div>

        {/* About yourself */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#F0FDF4] px-3 py-1 text-sm font-black text-[#16A34A]">1</span>
            <h2 className="text-xl font-black">About yourself</h2>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {aboutYourself.map((prompt, i) => (
              <div key={i} className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black text-lg">{prompt.french}</p>
                <p className="mt-1 text-[#526173]">{prompt.english}</p>
                <div className="mt-3 rounded-xl bg-[#F0FDF4] px-4 py-2 text-sm text-[#16A34A]">
                  <span className="font-black">Tip: </span>{prompt.tip}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily life */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#F0FDF4] px-3 py-1 text-sm font-black text-[#16A34A]">2</span>
            <h2 className="text-xl font-black">Daily life</h2>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {dailyLife.map((prompt, i) => (
              <div key={i} className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black text-lg">{prompt.french}</p>
                <p className="mt-1 text-[#526173]">{prompt.english}</p>
                <div className="mt-3 rounded-xl bg-[#F0FDF4] px-4 py-2 text-sm text-[#16A34A]">
                  <span className="font-black">Tip: </span>{prompt.tip}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opinions & preferences */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#F0FDF4] px-3 py-1 text-sm font-black text-[#16A34A]">3</span>
            <h2 className="text-xl font-black">Opinions &amp; preferences</h2>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {opinions.map((prompt, i) => (
              <div key={i} className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black text-lg">{prompt.french}</p>
                <p className="mt-1 text-[#526173]">{prompt.english}</p>
                <div className="mt-3 rounded-xl bg-[#F0FDF4] px-4 py-2 text-sm text-[#16A34A]">
                  <span className="font-black">Tip: </span>{prompt.tip}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Describe & explain */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#F0FDF4] px-3 py-1 text-sm font-black text-[#16A34A]">4</span>
            <h2 className="text-xl font-black">Describe &amp; explain</h2>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {describeExplain.map((prompt, i) => (
              <div key={i} className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black text-lg">{prompt.french}</p>
                <p className="mt-1 text-[#526173]">{prompt.english}</p>
                <div className="mt-3 rounded-xl bg-[#F0FDF4] px-4 py-2 text-sm text-[#16A34A]">
                  <span className="font-black">Tip: </span>{prompt.tip}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-[#C9A44C]">How to use these prompts</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3 text-sm">
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">Record yourself</p>
              <p className="mt-1 text-white/70">Answer each prompt aloud and listen back. You will quickly hear where you hesitate.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">Aim for 60 seconds</p>
              <p className="mt-1 text-white/70">A one-minute answer uses a range of vocabulary and grammar without becoming overwhelming.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">Vary your connectors</p>
              <p className="mt-1 text-white/70">Use d'abord, ensuite, cependant, pourtant, par contre to sound more fluent.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
