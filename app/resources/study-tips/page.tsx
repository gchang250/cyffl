import Link from "next/link";

const sections = [
  {
    number: "1",
    title: "Vocabulary strategies",
    tips: [
      {
        heading: "Learn words in context",
        body: "Instead of memorising isolated words, learn them in example sentences. Seeing je mange une pomme is more memorable than just pomme.",
      },
      {
        heading: "Use spaced repetition",
        body: "Review vocabulary at increasing intervals — after one day, then three days, then a week. This matches how long-term memory works.",
      },
      {
        heading: "Group by theme",
        body: "Learn vocabulary in semantic clusters: food, transport, emotions. When you think of one word, you trigger the whole group.",
      },
      {
        heading: "Label your environment",
        body: "Stick sticky notes on objects in your home with their French names. Every time you see la fenêtre or le réfrigérateur, you reinforce the word.",
      },
    ],
  },
  {
    number: "2",
    title: "Grammar practice",
    tips: [
      {
        heading: "Learn one structure at a time",
        body: "Master the present tense before moving to the past. Trying to study everything at once leads to confusion and slow progress.",
      },
      {
        heading: "Write example sentences yourself",
        body: "Do not just read grammar rules — apply them. Write five sentences using each new structure. Your own examples are easier to remember.",
      },
      {
        heading: "Notice patterns, not exceptions",
        body: "French grammar has far more regularities than exceptions. Learn the -er verb pattern once, and you can conjugate hundreds of verbs.",
      },
      {
        heading: "Revisit old grammar regularly",
        body: "Set aside ten minutes a week to review grammar you learned a month ago. Language is a skill — it needs maintenance.",
      },
    ],
  },
  {
    number: "3",
    title: "Speaking practice",
    tips: [
      {
        heading: "Think aloud in French",
        body: "Narrate everyday activities to yourself in French. Describing what you are doing as you do it builds fluency without needing a partner.",
      },
      {
        heading: "Record and listen back",
        body: "Your ear catches errors that your mouth does not notice while speaking. Even a short one-minute recording once a day makes a real difference.",
      },
      {
        heading: "Embrace mistakes",
        body: "Every error is data. When you make a mistake, note it, correct it, and use the correct form three times. Mistakes are part of the process, not a sign of failure.",
      },
    ],
  },
  {
    number: "4",
    title: "Listening strategies",
    tips: [
      {
        heading: "Start with slower audio",
        body: "News in Slow French or podcasts designed for learners give your brain time to process. Speed up as your ear adjusts.",
      },
      {
        heading: "Watch with French subtitles",
        body: "Once you can follow audio reasonably well, switch from English subtitles to French. You will connect spoken and written forms simultaneously.",
      },
      {
        heading: "Listen repeatedly",
        body: "Play the same clip several times. On the first pass, get the gist. On the second, focus on phrases you missed. On the third, you will be surprised how much more you catch.",
      },
      {
        heading: "Do not translate word for word",
        body: "Try to grasp the meaning of whole phrases at once rather than decoding each word. Real fluency means processing French as French, not as coded English.",
      },
    ],
  },
  {
    number: "5",
    title: "Writing skills",
    tips: [
      {
        heading: "Keep a French journal",
        body: "Write three to five sentences in French every day about what you did, thought, or felt. Even simple entries build consistency and reinforce vocabulary.",
      },
      {
        heading: "Use connectors and transitions",
        body: "Practise using d'abord, ensuite, cependant, par contre, en revanche, c'est pourquoi to link ideas. These words are what separate good writing from great writing.",
      },
      {
        heading: "Check your gender and agreement",
        body: "French adjective and article agreement is a common source of errors in writing. Before submitting anything, do one quick pass just for gender and agreement.",
      },
    ],
  },
  {
    number: "6",
    title: "Making it stick",
    tips: [
      {
        heading: "Be consistent, not intense",
        body: "Twenty minutes every day beats two hours on a weekend. Daily exposure keeps French active in your memory.",
      },
      {
        heading: "Connect French to what you love",
        body: "Follow French-language accounts about your hobbies. Read about your interests in French. Motivation is much easier when the content matters to you.",
      },
      {
        heading: "Set specific goals",
        body: "Instead of 'I want to improve my French,' try 'I want to learn ten new food-related words this week.' Specific goals are easier to achieve and measure.",
      },
      {
        heading: "Celebrate small wins",
        body: "Recognise your progress. Understanding a sentence you would have missed a month ago, or using a new word naturally — these are real achievements.",
      },
    ],
  },
];

export default function StudyTipsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Resources
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]">
            Study
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Study tips for French
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            Practical, evidence-informed strategies to help you learn French more effectively — from building vocabulary to staying motivated over the long term.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.number}>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#F0FDF4] px-3 py-1 text-sm font-black text-[#16A34A]">
                  {section.number}
                </span>
                <h2 className="text-xl font-black">{section.title}</h2>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {section.tips.map((tip, i) => (
                  <div key={i} className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                    <p className="font-black">{tip.heading}</p>
                    <p className="mt-2 text-sm leading-7 text-[#526173]">{tip.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-[#C9A44C]">The most important tip of all</p>
          <p className="mt-3 text-sm leading-7 text-white/80">
            No single study method works for everyone. Experiment with the strategies above, keep what works for you, and discard what does not. The best method is the one you will actually stick to. Consistency over months and years is the true secret to language learning.
          </p>
        </div>
      </section>
    </main>
  );
}
