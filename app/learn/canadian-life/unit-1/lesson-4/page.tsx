import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "Quebec", back: "Home to 8 million+ francophones. French is the sole official language of the province. The most influential centre of French in North America.", subtext: "Key institution: Office québécois de la langue française (OQLF)" },
  { front: "New Brunswick", back: "Canada's only officially bilingual province. Roughly 33% of the population is francophone — most are Acadian, with roots predating the British conquest.", subtext: "City to know: Moncton — a major bilingual hub" },
  { front: "Ontario", back: "Approximately 600,000 Franco-Ontarians. Strong communities in Ottawa (especially Vanier/Orléans), Sudbury, Timmins, Hearst, and northern Ontario.", subtext: "Symbol: the Franco-Ontarian flag (green and white)" },
  { front: "Manitoba", back: "The Saint-Boniface neighbourhood of Winnipeg is the largest francophone community west of Ontario. Has its own Franco-Manitoban institutions and radio.", subtext: "University: Université de Saint-Boniface" },
  { front: "Nova Scotia", back: "Home to Acadian communities, particularly in Clare (Baie Sainte-Marie) and Chéticamp. Acadian French differs from Quebec French.", subtext: "Note: Acadians were expelled by the British in 1755 (Le Grand Dérangement)" },
  { front: "Prince Edward Island", back: "Small but historically significant Acadian community. The Évangéline region maintains active French-language institutions.", subtext: "" },
  { front: "Saskatchewan & Alberta", back: "Small but established francophone communities. Legal battles have protected French-language rights in these provinces.", subtext: "Community radio: Radio-Canada has regional stations across western Canada" },
  { front: "Federal bilingualism", back: "The Official Languages Act (1969) makes English and French co-official at the federal level. All federal services must be available in both languages across Canada.", subtext: "Commissioner of Official Languages oversees compliance" },
];

const pairs = [
  { left: "New Brunswick", right: "Only officially bilingual province" },
  { left: "Ontario", right: "~600,000 Franco-Ontarians" },
  { left: "Manitoba", right: "Saint-Boniface community in Winnipeg" },
  { left: "Quebec", right: "8 million+ francophones, French official" },
  { left: "Acadian French", right: "New Brunswick, Nova Scotia, PEI" },
  { left: "Official Languages Act", right: "Makes French & English co-official federally" },
];

const exercises = [
  {
    before: "New Brunswick est la seule province",
    after: "au Canada. (officially bilingual)",
    answer: "officiellement bilingue",
    hint: "officiellement bilingue = officially bilingual",
    translation: "New Brunswick is the only officially bilingual province in Canada.",
  },
  {
    before: "Les Franco-Ontariens habitent surtout à Ottawa,",
    after: "et dans le nord de l'Ontario. (Sudbury)",
    answer: "Sudbury",
    hint: "Sudbury is a major Franco-Ontarian city in northern Ontario",
    translation: "Franco-Ontarians live mainly in Ottawa, Sudbury, and northern Ontario.",
  },
  {
    before: "La communauté francophone la plus importante à l'ouest de l'Ontario se trouve à",
    after: ", au Manitoba. (Saint-Boniface)",
    answer: "Saint-Boniface",
    hint: "Saint-Boniface is the francophone neighbourhood in Winnipeg",
    translation: "The most significant francophone community west of Ontario is in Saint-Boniface, Manitoba.",
  },
  {
    before: "La Loi sur les langues officielles de 1969 fait du français et de l'anglais les langues",
    after: "du gouvernement fédéral. (co-official)",
    answer: "co-officielles",
    hint: "co-officielles = co-official",
    translation: "The 1969 Official Languages Act makes French and English the co-official languages of the federal government.",
  },
  {
    before: "Le français acadien est parlé surtout au",
    after: ", en Nouvelle-Écosse et à l'Île-du-Prince-Édouard. (New Brunswick)",
    answer: "Nouveau-Brunswick",
    hint: "New Brunswick = le Nouveau-Brunswick in French",
    translation: "Acadian French is spoken mainly in New Brunswick, Nova Scotia, and Prince Edward Island.",
  },
];

const questions = [
  {
    question: "Which is Canada's only officially bilingual province?",
    options: ["Ontario", "Quebec", "New Brunswick", "Manitoba"],
    correct: 2,
    explanation: "New Brunswick is Canada's only officially bilingual province. Both English and French are official languages at the provincial level, which means all government services are available in both languages.",
  },
  {
    question: "What is Acadian French?",
    options: [
      "A dialect of French spoken in southern Quebec",
      "A variety of French spoken by descendants of the original French settlers in the Maritimes",
      "Standard French as taught in Ontario schools",
      "A 19th-century French dialect no longer spoken",
    ],
    correct: 1,
    explanation: "Acadian French is the variety of French spoken by Acadians — descendants of the original French settlers of the Maritime provinces (New Brunswick, Nova Scotia, PEI). It has a distinct accent, vocabulary, and history separate from Quebec French.",
  },
  {
    question: "Where is the largest francophone community west of Ontario?",
    options: [
      "Vancouver, British Columbia",
      "Calgary, Alberta",
      "Saint-Boniface in Winnipeg, Manitoba",
      "Regina, Saskatchewan",
    ],
    correct: 2,
    explanation: "Saint-Boniface, a neighbourhood of Winnipeg, is home to the largest francophone community west of Ontario. It has its own university (Université de Saint-Boniface), French schools, and cultural institutions.",
  },
  {
    question: "What did the Official Languages Act of 1969 establish?",
    options: [
      "French as the only official language of Canada",
      "French and English as co-official languages at the federal level",
      "A requirement for all Canadians to speak French",
      "French as the official language of Quebec",
    ],
    correct: 1,
    explanation: "The Official Languages Act of 1969 established English and French as co-official languages of the federal government of Canada. It requires federal services to be available in both languages across the country.",
  },
  {
    question: "Approximately how many Franco-Ontarians live in Ontario, and where are they primarily concentrated?",
    options: [
      "About 50,000 — mostly in Toronto",
      "About 600,000 — concentrated in Ottawa, Sudbury, and northern Ontario",
      "About 2 million — evenly distributed across the province",
      "About 100,000 — primarily in Windsor",
    ],
    correct: 1,
    explanation: "Ontario has approximately 600,000 francophones, making it the province with the second-largest French-speaking population after Quebec. Major francophone communities are in Ottawa (the capital region), Sudbury, and northern Ontario.",
  },
  {
    question: "What historical event is often called 'le Grand Dérangement' in Acadian history?",
    options: [
      "The founding of New France in the 1600s",
      "The forced deportation of Acadians by the British from 1755–1763",
      "The Quiet Revolution in Quebec in the 1960s",
      "The passing of the Official Languages Act in 1969",
    ],
    correct: 1,
    explanation: "Le Grand Dérangement (the Great Upheaval) was the forced deportation of the Acadian population from Nova Scotia and surrounding areas by British forces from 1755 to 1763. Thousands were displaced across the Atlantic world. This event is central to Acadian identity and collective memory.",
  },
  {
    question: "Radio-Canada plays a particularly important role for francophone communities outside Quebec. Why?",
    options: [
      "It is the only broadcaster allowed to produce French content in Canada",
      "It provides French-language news, culture, and entertainment to minority francophone communities who have limited local French media",
      "It produces content in English and French equally for all Canadians",
      "It is only available in Quebec and New Brunswick",
    ],
    correct: 1,
    explanation: "Radio-Canada is the French-language public broadcaster of CBC. For francophones in Alberta, Manitoba, and other provinces, Radio-Canada is often one of the few sources of professional French-language journalism and culture — vital for language maintenance in minority contexts.",
  },
  {
    question: "If a francophone from New Brunswick and a francophone from Quebec have a conversation, which French would they naturally use?",
    options: [
      "They would not understand each other",
      "They would both switch to English",
      "Standard French — both varieties are mutually intelligible, with some vocabulary differences",
      "Only Acadian French, which both understand",
    ],
    correct: 2,
    explanation: "Quebec French and Acadian French are both fully intelligible varieties of French. Despite regional vocabulary and pronunciation differences, speakers communicate comfortably in standard French. The differences are comparable to British vs. American English.",
  },
];

export default function Unit1Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#B91C1C]">Unit 1 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Regional French Across Canada</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              French in Canada isn't just Quebec. New Brunswick is officially bilingual, Ontario has over half a million francophones, and francophone communities exist in every province and territory. This lesson maps French across the country.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">French presence by region</p>
            <div className="mt-3 space-y-3 text-sm">
              {[
                { region: "Quebec", detail: "8M+ francophones · French is the official language" },
                { region: "New Brunswick", detail: "Only bilingual province · ~33% Acadian francophone" },
                { region: "Ontario", detail: "~600,000 Franco-Ontarians · Ottawa, Sudbury, north" },
                { region: "Manitoba", detail: "Saint-Boniface (Winnipeg) · Université de Saint-Boniface" },
                { region: "Nova Scotia", detail: "Acadian communities in Clare, Chéticamp" },
                { region: "PEI", detail: "Évangéline region · Acadian French tradition" },
                { region: "West (SK, AB, BC)", detail: "Smaller communities · Radio-Canada regional stations" },
              ].map(({ region, detail }) => (
                <div key={region} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-[#FEF2F2] px-2 py-0.5 text-xs font-black text-[#B91C1C]">{region}</span>
                  <span className="text-[#526173]">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="French communities across Canada" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Acadian French</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            Acadian French is the variety of French spoken by the Acadian people — descendants of the original French colonists who settled in the Maritime provinces in the 17th century. Unlike Quebec French, Acadian French was shaped by a different historical trajectory: the Acadians were forcibly expelled by the British between 1755 and 1763 in what is known as <strong className="text-white">le Grand Dérangement</strong> (the Great Expulsion). Many were scattered across the Atlantic seaboard before eventually returning to the Maritimes.
          </p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            The result is a variety of French with its own accent, vocabulary, and grammatical features distinct from both Quebec French and standard European French. One notable difference: Acadian French often preserves older verb forms and uses <strong className="text-white">je vas</strong> rather than <em>je vais</em> for "I go." Tutoiement (tu) and vouvoiement (vous) norms also vary subtly between Acadian and Quebec communities.
          </p>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the region to the key French fact" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the sentence about French in Canada" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Regional French across Canada quiz" />
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-lg font-black">Unit 1 complete!</p>
          <p className="mt-2 text-[#526173]">You've covered Quebec vocabulary, expressions, reading Quebec French in context, and French communities across Canada. Test yourself before moving on.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/canadian-life/unit-1/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/canadian-life/unit-1/test" className="rounded-full bg-[#B91C1C] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#991B1B]">Take unit test →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
