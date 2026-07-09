import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "External Resources | CYFFL Resources",
  description:
    "Free French learning resources beyond CYFFL: news, podcasts, TV, practice sites, and dictionaries curated for Canadian learners.",
};

const categories = [
  {
    title: "News & reading",
    color: "bg-[#FEF2F2] text-[#B91C1C]",
    note: "Reading news daily is one of the fastest ways to build vocabulary. Start with shorter articles, work up to long-form journalism.",
    items: [
      {
        name: "Radio-Canada",
        url: "https://ici.radio-canada.ca",
        description: "Canada's French public broadcaster. News, articles, and video: in Canadian French. One of the best sources for authentic, high-quality Canadian French articles.",
        level: "B1–C1",
        flag: "🍁 Canadian French",
      },
      {
        name: "Le Devoir",
        url: "https://www.ledevoir.com",
        description: "Quebec's premier independent newspaper. Long-form journalism, editorials, and opinion: excellent for building argument vocabulary and formal French.",
        level: "B2–C1",
        flag: "🍁 Canadian French",
      },
      {
        name: "Le Monde",
        url: "https://www.lemonde.fr",
        description: "France's newspaper of record. Formal, clear, dense. Great for upper-intermediate and advanced learners: but note the vocabulary is European, not Canadian.",
        level: "B2–C1",
        flag: "🇫🇷 European French",
      },
      {
        name: "Le Figaro",
        url: "https://www.lefigaro.fr",
        description: "Conservative French daily. Strong for current events, culture, and society. Good counterpoint to Le Monde for balanced reading.",
        level: "B2–C1",
        flag: "🇫🇷 European French",
      },
      {
        name: "RFI: Savoirs",
        url: "https://savoirs.rfi.fr",
        description: "Radio France Internationale's learning site. Annotated articles and audio at levels A2–B2, with comprehension exercises. Purpose-built for French learners.",
        level: "A2–B2",
        flag: "🌍 International French",
      },
      {
        name: "1jour1actu",
        url: "https://www.1jour1actu.com",
        description: "Current events explained simply for students. Each article covers one news story in clear, accessible French. Excellent for A2–B1 learners who find newspapers too dense.",
        level: "A2–B1",
        flag: "🇫🇷 European French",
      },
    ],
  },
  {
    title: "Listening & audio",
    color: "bg-[#EFF6FF] text-[#2563EB]",
    note: "Listen daily: even 15 minutes of real French audio builds the ear faster than any exercise. Vary your sources: news, conversation, and narrative all sound different.",
    items: [
      {
        name: "Radio-Canada Première",
        url: "https://ici.radio-canada.ca/premiere",
        description: "Live and on-demand Canadian French radio. Talk shows, news, interviews, and culture programs. Best source for authentic Québécois French in a formal but conversational register.",
        level: "B1–C1",
        flag: "🍁 Canadian French",
      },
      {
        name: "InnerFrench (podcast)",
        url: "https://innerfrench.com/podcast",
        description: "Slow, clear French with no English: entirely in French from the first episode. Hugo talks about culture, society, and language itself. One of the best intermediate immersion podcasts.",
        level: "B1–B2",
        flag: "🇫🇷 European French",
      },
      {
        name: "Coffee Break French (podcast)",
        url: "https://coffeebreaklanguages.com/coffeebreakfrench",
        description: "Structured lessons for all levels delivered in podcast format. The early seasons build grammar and vocabulary through dialogue; later seasons tackle authentic texts.",
        level: "A1–B2",
        flag: "🌍 Neutral French",
      },
      {
        name: "RFI Journal en français facile",
        url: "https://www.rfi.fr/fr/podcasts/journal-en-francais-facile",
        description: "RFI's daily news summary spoken at a reduced speed. Real news, simplified vocabulary: one of the best bridges between learning French and listening to real French.",
        level: "A2–B1",
        flag: "🌍 International French",
      },
      {
        name: "Français Authentique (YouTube/podcast)",
        url: "https://www.francaisauthentique.com",
        description: "Johan Tekfak speaks natural, relatively slow French about language-learning and culture. Entirely in French: no English crutches. Great for building listening stamina.",
        level: "B1–B2",
        flag: "🇫🇷 European French",
      },
      {
        name: "TV5Monde",
        url: "https://apprendre.tv5monde.com",
        description: "TV5's free learning platform uses authentic French TV clips (news, documentaries, fiction) with built-in exercises. Subtitles can be toggled: a genuine immersion tool.",
        level: "A1–C1",
        flag: "🌍 International French",
      },
    ],
  },
  {
    title: "Practice & exercises",
    color: "bg-[#F0FDF4] text-[#16A34A]",
    note: "Passive input (reading, listening) builds recognition. Active practice (exercises, writing) builds production. You need both.",
    items: [
      {
        name: "Français Facile",
        url: "https://www.francaisfacile.com",
        description: "Thousands of free French grammar and vocabulary exercises. Sorted by level (A1–C2) and topic. Solid for drilling specific grammar points: agreement, tense, pronouns, prepositions.",
        level: "A1–C2",
        flag: "💻 Exercises",
      },
      {
        name: "Conjuguemos",
        url: "https://conjuguemos.com",
        description: "Timed conjugation drills across all tenses and moods. Good for building automatic recall of verb forms: especially irregular verbs, the subjunctive, and the conditional.",
        level: "A2–B2",
        flag: "💻 Exercises",
      },
      {
        name: "Lingolia French",
        url: "https://french.lingolia.com/en",
        description: "Grammar explanations with interactive exercises. Clear, well-organized by topic: good for looking up a specific rule and practising it immediately.",
        level: "A2–B2",
        flag: "💻 Exercises",
      },
      {
        name: "DELF / DALF sample papers (CIEP)",
        url: "https://www.ciep.fr/delfdalf/documents.shtml",
        description: "Official DELF and DALF past papers from the Centre international d'études pédagogiques. The best available practice materials for anyone preparing for a French certification exam.",
        level: "A1–C2",
        flag: "📝 Exam prep",
      },
    ],
  },
  {
    title: "Dictionaries & references",
    color: "bg-[#FDF4FF] text-[#9333EA]",
    note: "The right dictionary makes a difference. Use a French–French dictionary once you hit B1: it forces you to think in French and builds vocabulary depth, not just translation.",
    items: [
      {
        name: "Le Robert en ligne",
        url: "https://dictionnaire.lerobert.com",
        description: "The definitive French dictionary: definitions, examples, synonyms, and etymology. Free for basic lookups. Essential for understanding nuance between near-synonyms.",
        level: "B1–C2",
        flag: "📖 French–French",
      },
      {
        name: "CNRTL (Centre national de ressources textuelles)",
        url: "https://www.cnrtl.fr/definition",
        description: "Academic French dictionary with etymology and historical usage. More detailed than Le Robert: excellent for understanding why a word means what it means.",
        level: "B2–C2",
        flag: "📖 French–French",
      },
      {
        name: "Termium Plus",
        url: "https://www.btb.termiumplus.gc.ca",
        description: "The Government of Canada's official terminology database: bilingual French/English, with government and legal vocabulary. Invaluable for federal workplace French.",
        level: "B2–C2",
        flag: "🍁 Government French",
      },
      {
        name: "Linguee",
        url: "https://www.linguee.com/french-english",
        description: "Shows real translation examples from published documents. Better than a standard dictionary for finding how a phrase is actually used in context: not just what a word means.",
        level: "A2–C1",
        flag: "🔍 Translation aid",
      },
      {
        name: "Reverso Context",
        url: "https://context.reverso.net/translation/french-english",
        description: "Like Linguee: shows a word or phrase in hundreds of real translated sentences. Especially useful for prepositions, verb constructions, and collocations that dictionaries miss.",
        level: "A2–C1",
        flag: "🔍 Translation aid",
      },
    ],
  },
];

export default function ExternalResourcesPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/resources" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← Resources
        </Link>

        <div className="mt-8 max-w-3xl">
          <span className="rounded-full bg-[#F0FDF4] px-3 py-1 text-xs font-black text-[#16A34A]">
            Free
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            External Resources
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#526173]">
            The best free French resources beyond CYFFL: curated for Canadian learners. News, podcasts, TV, grammar practice, and dictionaries, with notes on level and register.
          </p>
        </div>

        {/* Level key */}
        <div className="mt-8 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-[#E7DAB9] bg-white px-3 py-1 font-bold text-[#526173]">A1–A2 = Beginner</span>
          <span className="rounded-full border border-[#E7DAB9] bg-white px-3 py-1 font-bold text-[#526173]">B1–B2 = Intermediate</span>
          <span className="rounded-full border border-[#E7DAB9] bg-white px-3 py-1 font-bold text-[#526173]">C1–C2 = Advanced</span>
          <span className="rounded-full border border-[#E7DAB9] bg-white px-3 py-1 font-bold text-[#526173]">🍁 = Canadian French · 🇫🇷 = European French · 🌍 = International</span>
        </div>

        <div className="mt-12 space-y-16">
          {categories.map((cat) => (
            <section key={cat.title}>
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-black ${cat.color}`}>{cat.title}</span>
              </div>
              <h2 className="mt-3 text-3xl font-black">{cat.title}</h2>
              <p className="mt-1 max-w-2xl text-[#526173]">{cat.note}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {cat.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-2xl border border-[#E7DAB9] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-black group-hover:text-[#2563EB]">{item.name} ↗</p>
                      <div className="flex shrink-0 flex-wrap justify-end gap-1">
                        <span className="rounded-full bg-[#FFFDF7] px-2 py-0.5 text-xs font-bold text-[#526173]">{item.level}</span>
                      </div>
                    </div>
                    <p className="mt-2 grow text-sm leading-6 text-[#526173]">{item.description}</p>
                    <p className="mt-3 text-xs font-bold text-[#C9A44C]">{item.flag}</p>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Tips section */}
        <section className="mt-16 rounded-2xl bg-[#0B1F3A] p-8 text-white shadow-sm">
          <h2 className="text-2xl font-black">How to use external resources effectively</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Read actively, not passively",
                body: "When you encounter an unknown word, try to infer its meaning from context before looking it up. Then check. Then use it in a sentence. Three steps: not one.",
              },
              {
                title: "Listen without subtitles first",
                body: "Watch or listen once without support. Note what you understood. Then use subtitles or transcripts to fill gaps. Subtitles from the start build bad habits.",
              },
              {
                title: "Vary your register",
                body: "Québécois spoken French (Radio-Canada talk shows) and European formal French (Le Monde editorials) are both French: but they sound completely different. Expose yourself to both.",
              },
            ].map((tip) => (
              <div key={tip.title} className="rounded-2xl bg-white/5 p-5">
                <p className="font-black text-[#C9A44C]">{tip.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{tip.body}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
