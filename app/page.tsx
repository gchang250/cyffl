import Link from "next/link";

export const revalidate = 3600;

const differentiators = [
  {
    label: "Quebec French",
    detail: "Fin de semaine, dépanneur, magasinage — the vocabulary that changes across the border.",
  },
  {
    label: "Government forms",
    detail: "Health cards, tax returns, immigration documents — navigating official French with confidence.",
  },
  {
    label: "Bilingual workplaces",
    detail: "Job postings, cover letters, workplace emails, and French job interviews.",
  },
  {
    label: "University applications",
    detail: "Cégep, bourse, dossier d'admission — education French in Canada.",
  },
];

const offerings = [
  {
    title: "French for Canadian Life",
    description: "Quebec expressions, government forms, bilingual job postings, university applications.",
    href: "/learn/canadian-life",
  },
  {
    title: "French for Canadian Tests",
    description: "Government vocabulary and exam strategy for the SLE and TEF Canada.",
    href: "/learn/canadian-french-tests",
  },
  {
    title: "All Courses",
    description: "Structured French from zero to advanced — IB prep, school support, grammar, verb tenses.",
    href: "/learn",
  },
  {
    title: "Tutoring",
    description: "One-on-one support for homework, tests, speaking practice, and grammar questions.",
    href: "/tutoring",
  },
];

const weeklyWords = [
  { word: "l'épanouissement", pos: "n.m.", meaning: "fulfillment, blossoming", example: "L'épanouissement personnel passe souvent par l'éducation." },
  { word: "la perspicacité", pos: "n.f.", meaning: "insight, perspicacity", example: "Sa perspicacité lui permet de saisir les nuances rapidement." },
  { word: "vraisemblable", pos: "adj.", meaning: "likely, plausible", example: "Il est vraisemblable qu'il réussira ses examens." },
  { word: "la bienveillance", pos: "n.f.", meaning: "benevolence, kindness", example: "Agir avec bienveillance envers les autres est essentiel." },
  { word: "l'acuité", pos: "n.f.", meaning: "sharpness, acuity — of mind or perception", example: "L'acuité de son analyse a impressionné l'ensemble de l'équipe." },
  { word: "s'épanouir", pos: "v.", meaning: "to flourish, to thrive", example: "Elle s'épanouit dans son nouvel environnement." },
  { word: "irréfutable", pos: "adj.", meaning: "irrefutable, undeniable", example: "Les preuves présentées sont irréfutables." },
  { word: "la résilience", pos: "n.f.", meaning: "resilience", example: "La résilience est la capacité de surmonter les épreuves." },
  { word: "ambivalent(e)", pos: "adj.", meaning: "ambivalent, conflicted", example: "Il reste ambivalent face à cette opportunité." },
  { word: "prépondérant(e)", pos: "adj.", meaning: "predominant, paramount", example: "Elle joue un rôle prépondérant dans l'organisation." },
  { word: "l'ambiguïté", pos: "n.f.", meaning: "ambiguity, vagueness", example: "Ce discours laisse trop d'ambiguïtés." },
  { word: "de surcroît", pos: "adv.", meaning: "on top of that, what's more", example: "C'est coûteux, et de surcroît peu pratique." },
];

const weeklyExpressions = [
  { expression: "Avoir le cafard", meaning: "To feel down / blue" },
  { expression: "Faire d'une pierre deux coups", meaning: "To kill two birds with one stone" },
  { expression: "Avoir du pain sur la planche", meaning: "To have a lot on one's plate" },
  { expression: "Il pleut des cordes", meaning: "It's raining cats and dogs" },
  { expression: "Coûter les yeux de la tête", meaning: "To cost a fortune" },
  { expression: "Mettre les points sur les i", meaning: "To spell things out clearly" },
  { expression: "Avoir d'autres chats à fouetter", meaning: "To have bigger fish to fry" },
  { expression: "Appeler un chat un chat", meaning: "To call a spade a spade" },
  { expression: "Poser un lapin à quelqu'un", meaning: "To stand someone up" },
  { expression: "Noyer le poisson", meaning: "To dodge the issue" },
  { expression: "Casser du sucre sur le dos de quelqu'un", meaning: "To badmouth someone behind their back" },
  { expression: "Se noyer dans un verre d'eau", meaning: "To make a mountain out of a molehill" },
  { expression: "Avoir le beurre et l'argent du beurre", meaning: "To have your cake and eat it too" },
  { expression: "Force est de constater", meaning: "One cannot help but notice" },
  { expression: "Avoir le vent en poupe", meaning: "To be on a roll" },
  { expression: "Ne pas y aller par quatre chemins", meaning: "To not beat around the bush" },
  { expression: "L'habit ne fait pas le moine", meaning: "Don't judge a book by its cover" },
  { expression: "Mettre les bouchées doubles", meaning: "To work twice as hard, to step it up" },
  { expression: "Tenir le coup", meaning: "To hold on, to hang in there" },
  { expression: "Avoir la tête dans les nuages", meaning: "To have one's head in the clouds" },
];

export default function HomePage() {
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const word = weeklyWords[weekNumber % weeklyWords.length];
  const expression = weeklyExpressions[(weekNumber + 7) % weeklyExpressions.length];

  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">

      {/* Hero */}
      <section className="border-b border-[#E7DAB9]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold text-[#526173]">
            Youth-led · Free · Students in Canada
          </p>
          <h1 className="mt-6 max-w-2xl text-6xl font-black leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
            French built<br />for Canadian<br />life.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#526173]">
            Quebec expressions, government forms, bilingual job postings, university applications — the French no app teaches you. Free, made by Canadian youth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/learn/canadian-life"
              className="rounded-full bg-[#D62828] px-7 py-3 text-sm font-black text-white transition hover:bg-[#B91C1C]"
            >
              French for Canadian Life
            </Link>
            <Link
              href="/learn"
              className="rounded-full border border-[#0B1F3A] px-7 py-3 text-sm font-black text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white"
            >
              All courses
            </Link>
          </div>
        </div>
      </section>

      {/* Word / Expression strip */}
      <section className="border-b border-[#E7DAB9]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 md:divide-x md:divide-[#E7DAB9]">
            <div className="border-b border-[#E7DAB9] py-8 md:border-b-0 md:pr-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#526173]">Mot de la semaine</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-black">{word.word}</span>
                <span className="text-xs text-[#526173]">{word.pos}</span>
              </div>
              <p className="mt-0.5 text-sm leading-5 text-[#526173]">{word.meaning}</p>
              <p className="mt-3 border-l-2 border-[#E7DAB9] pl-3 text-sm italic leading-6 text-[#526173]">{word.example}</p>
            </div>
            <div className="py-8 md:pl-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#526173]">Expression de la semaine</p>
              <p className="mt-3 text-xl font-black">{expression.expression}</p>
              <p className="mt-1 text-sm leading-6 text-[#526173]">{expression.meaning}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why CYFFL */}
      <section className="border-b border-[#E7DAB9]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Most French courses weren't built for Canada.
              </h2>
              <p className="mt-5 leading-7 text-[#526173]">
                Knowing how to order a coffee in Paris won&apos;t help you fill out a RAMQ form, read a federal job posting, or understand why Quebecers say <em>fin de semaine</em> instead of <em>weekend</em>. CYFFL teaches the French that actually comes up in Canadian life — not textbook scenarios.
              </p>
              <Link
                href="/learn/canadian-life"
                className="mt-6 inline-block text-sm font-black text-[#D62828] hover:underline"
              >
                See the course →
              </Link>
            </div>

            <div className="divide-y divide-[#E7DAB9]">
              {differentiators.map((d) => (
                <div key={d.label} className="py-5">
                  <p className="font-black">{d.label}</p>
                  <p className="mt-1 text-sm leading-6 text-[#526173]">{d.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="border-b border-[#E7DAB9]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-black">Courses &amp; services</h2>

          <div className="mt-8 grid gap-px border border-[#E7DAB9] bg-[#E7DAB9] sm:grid-cols-2">
            {offerings.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white p-7 transition hover:bg-[#FFFDF7]"
              >
                <h3 className="font-black group-hover:text-[#D62828]">
                  {item.title} →
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#526173]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-black">
                Help make French click for students across Canada.
              </h2>
              <p className="mt-2 leading-7 text-[#526173]">
                CYFFL runs on volunteers. If you know French and want to teach, create resources, or help grow the community — we want you.
              </p>
            </div>
            <Link
              href="/volunteer"
              className="shrink-0 rounded-full bg-[#D62828] px-7 py-3 text-center text-sm font-black text-white transition hover:bg-[#B91C1C]"
            >
              Join as a volunteer
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
