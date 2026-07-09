"use client";

import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";

const jobPostingRows: [string, string, string][] = [
  ["Poste offert", "Position offered", "Title of the job being advertised"],
  ["Lieu de travail", "Workplace / work location", "City, office, remote (télétravail), or hybrid"],
  ["Type de poste", "Type of position", "Describes the contract type"],
  ["Permanent / temporaire / contractuel", "Permanent / temporary / contract", "Determines job security and benefits"],
  ["Temps plein / temps partiel", "Full-time / part-time", "Often specified as hours per week"],
  ["Entrée en fonction", "Start date", "Literally: entry into function"],
  ["Salaire", "Salary", "May appear as an hourly (horaire) or annual (annuel) rate"],
  ["Gamme salariale", "Salary range", "e.g., 55 000 $ à 70 000 $ par année"],
  ["Atout", "Asset (not required but an advantage)", "Similar to 'nice to have'"],
  ["Requis / Exigé", "Required / mandatory", "Non-negotiable qualification"],
  ["Bilingue (français/anglais)", "Bilingual (French/English)", "Common requirement across federal and Quebec roles"],
  ["Maîtrise du français écrit et parlé", "Mastery of written and spoken French", "Highest language proficiency requirement"],
  ["Connaissance fonctionnelle", "Functional knowledge", "Ability to work in the language, not necessarily native-level"],
  ["Expérience souhaitée / pertinente", "Desired / relevant experience", "Preferred but not mandatory"],
  ["Études postsecondaires", "Postsecondary education", "College or university level"],
  ["DEC en...", "Diplôme d'études collégiales in...", "Quebec CEGEP diploma (2–3 year college program)"],
  ["BAC en... / Baccalauréat en...", "Bachelor's degree in...", "3 years in Quebec; 4 in most other provinces"],
  ["Seuls les candidats retenus seront contactés.", "Only shortlisted candidates will be contacted.", "Standard closing line in Quebec job postings"],
  ["Faire parvenir votre candidature à", "Send your application to", "Followed by email address or portal link"],
  ["Date limite de candidature", "Application deadline", "Also: date de clôture"],
  ["Conditions de travail avantageuses", "Advantageous working conditions", "Usually signals good benefits package"],
  ["Assurances collectives", "Group insurance benefits", "Covers health, dental, disability: employer-provided"],
];

const coverLetterRows: [string, string][] = [
  ["Opening: introduce yourself", "Je me permets de poser ma candidature au poste de [titre], tel qu'affiché sur [plateforme]."],
  ["Motivation: why this role", "Ce poste correspond parfaitement à mes aspirations professionnelles, notamment en raison de..."],
  ["Motivation: why this company", "L'engagement de votre organisation envers [valeur] m'a particulièrement interpellé(e)."],
  ["Relevant experience", "Au cours de mes [X] années d'expérience en [domaine], j'ai acquis des compétences solides en..."],
  ["Specific achievement", "Dans mon poste actuel chez [employeur], j'ai réussi à [accomplissement concret]."],
  ["Bilingualism", "Je maîtrise le français et l'anglais à l'oral et à l'écrit, ce qui me permettrait de contribuer pleinement dans un milieu bilingue."],
  ["Transferable skills", "Mes compétences en [compétence] et mon sens de l'organisation me permettraient de m'intégrer rapidement à votre équipe."],
  ["Enthusiasm", "C'est avec enthousiasme que j'envisage de contribuer à votre organisation."],
  ["Availability for interview", "Je suis disponible pour une entrevue à votre convenance et demeure joignable au [numéro]."],
  ["Enclosing CV", "Vous trouverez ci-joint mon curriculum vitae ainsi que [lettre de recommandation / portfolio / autres documents]."],
  ["Closing: formal", "Dans l'attente de votre réponse, veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées."],
  ["Closing: semi-formal", "Je vous remercie de l'attention portée à ma candidature et reste à votre disposition pour tout renseignement complémentaire."],
];

const emailSubjectRows: [string, string][] = [
  ["Follow-up after meeting", "Suivi de notre réunion du [date]"],
  ["Question about a project", "Question concernant [sujet/projet]"],
  ["Sending a document", "Envoi du rapport: [titre]"],
  ["Absence notification", "Absence du [date] au [date]"],
  ["Introduction", "Présentation: [votre prénom], [rôle]"],
  ["Request for information", "Demande de renseignements: [sujet]"],
  ["Confirming an appointment", "Confirmation du rendez-vous du [date]"],
];

const meetingRows: [string, string, string][] = [
  ["Opening", "Je déclare la réunion ouverte.", "I call the meeting to order."],
  ["Agenda", "À l'ordre du jour, nous avons...", "On the agenda we have..."],
  ["Taking the floor", "Si vous me permettez d'ajouter...", "If I may add..."],
  ["Asking to clarify", "Pourriez-vous préciser ce que vous entendez par...?", "Could you clarify what you mean by...?"],
  ["Agreeing", "Je suis tout à fait d'accord.", "I completely agree."],
  ["Disagreeing politely", "Je comprends votre point de vue, cependant...", "I understand your perspective, however..."],
  ["Action items", "Nous allons faire le suivi sur...", "We'll follow up on..."],
  ["Tabling an item", "Je propose de reporter ce point à la prochaine réunion.", "I suggest tabling this item until next meeting."],
  ["Closing", "Je lève la séance.", "I adjourn the meeting."],
];

const interviewRows: [string, string][] = [
  [
    "Parlez-moi de vous. (Tell me about yourself.)",
    "Je suis [profession/domaine] avec [X] ans d'expérience en [secteur]. J'ai notamment travaillé sur [exemple concret], ce qui m'a permis de développer...",
  ],
  [
    "Pourquoi postulez-vous pour ce poste? (Why are you applying?)",
    "Ce poste m'attire particulièrement parce que... / Je suis convaincu(e) que mes compétences en [X] correspondraient bien aux besoins de votre équipe.",
  ],
  [
    "Quels sont vos points forts? (What are your strengths?)",
    "On me reconnaît souvent pour ma capacité à... / L'un de mes points forts est ma rigueur, que j'ai démontrée en...",
  ],
  [
    "Quelle est votre plus grande faiblesse? (What is your greatest weakness?)",
    "J'ai tendance à vouloir tout vérifier en détail, ce qui peut ralentir mon travail. J'ai cependant mis en place des stratégies pour mieux gérer mon temps, notamment...",
  ],
  [
    "Décrivez une situation difficile et comment vous l'avez résolue. (Describe a difficult situation.)",
    "Dans mon ancien poste, j'ai été confronté(e) à [situation]. J'ai d'abord analysé le problème en... puis j'ai proposé une solution qui a permis de...",
  ],
  [
    "Avez-vous des questions pour nous? (Do you have any questions for us?)",
    "Oui, j'aimerais en savoir plus sur les possibilités de formation continue au sein de l'organisation. / Comment se déroule l'intégration pour les nouveaux employés?",
  ],
];

export default function WorkplaceFrenchPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← Resources
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]">
            Canadian French
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Workplace French
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            Job postings, cover letters, workplace communication, and interview vocabulary for bilingual
            Canadian workplaces.
          </p>
        </div>

        {/* Section 1: Job posting vocabulary */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Job posting vocabulary</h2>
          <p className="mt-4 text-[#526173] leading-7">
            Federal government positions and many Quebec employers post exclusively in French, or with French
            as the primary language. Understanding these terms lets you read postings accurately, identify
            genuine requirements versus nice-to-haves, and tailor your application.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">French</th>
                  <th className="pb-3 text-left font-black">English</th>
                  <th className="pb-3 text-left text-[#526173]">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {jobPostingRows.map(([fr, en, note]) => (
                  <tr key={fr}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                    <td className="py-3 text-[#526173] italic">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">BAC in Quebec vs. elsewhere: </span>
            A "baccalauréat" in Quebec is a 3-year undergraduate degree. In other Canadian provinces it is
            typically 4 years (called a bachelor's degree). When reading Quebec job postings, a BAC
            requirement means a 3-year university degree preceded by a 2-year CÉGEP program.
          </div>
        </div>

        {/* Section 2: CV vocabulary */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">CV vocabulary</h2>
          <p className="mt-4 text-[#526173] leading-7">
            A French-language CV in Canada follows a standard structure. Each section has a conventional
            French heading. Using the correct terms signals familiarity with the local professional context.
          </p>

          <div className="mt-6 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">Standard French CV sections</p>
            <div className="mt-4 space-y-3 text-sm">
              {[
                ["Coordonnées", "Contact information", "Name, address, phone, email, LinkedIn"],
                ["Profil professionnel", "Professional profile / summary", "3–4 lines at the top; tailor to each role"],
                ["Expérience professionnelle", "Work experience", "Reverse chronological; use action verbs in past tense"],
                ["Formation / Études", "Education / Training", "Degrees, diplomas, certificates: most recent first"],
                ["Compétences", "Skills", "Divided into: Langues, Informatique, and domain-specific skills"],
                ["Bénévolat", "Volunteering", "Valued in Quebec; include if relevant"],
                ["Références disponibles sur demande", "References available upon request", "Standard closing line on a French CV"],
              ].map(([fr, en, note]) => (
                <div key={fr} className="rounded-xl bg-white/10 p-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 shrink-0">
                      <SpeakButton text={fr} size="sm" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-black">{fr}</span>
                        <span className="text-[#C9A44C] text-xs font-black">{en}</span>
                      </div>
                      <p className="mt-1 text-white/70">{note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">Language skills on a CV: </span>
            Standard phrasing: Français (langue maternelle) / Anglais (niveau avancé: NCLC 10) /
            Espagnol (niveau intermédiaire). In bilingual federal roles, use NCLC (Niveaux de compétence
            linguistique canadiens) levels when applicable.
          </div>
        </div>

        {/* Section 3: Cover letter phrases */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Cover letter phrases</h2>
          <p className="mt-4 text-[#526173] leading-7">
            French cover letters (lettres de motivation) in Canada are typically one page and follow a
            formal register. These phrases give you a strong, professional starting point for each section.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">Purpose</th>
                  <th className="pb-3 text-left font-black">French phrase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {coverLetterRows.map(([purpose, phrase]) => (
                  <tr key={purpose}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={phrase} size="sm" /></td>
                    <td className="py-3 font-black text-[#526173] whitespace-nowrap pr-4">{purpose}</td>
                    <td className="py-3 font-black">{phrase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Workplace communication */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Workplace communication</h2>

          {/* Email subject lines */}
          <h3 className="mt-8 text-lg font-black">Email subject lines</h3>
          <p className="mt-2 text-[#526173] text-sm leading-6">
            French professional emails follow conventions for subject line wording. A clear, structured
            subject line is expected.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">Situation</th>
                  <th className="pb-3 text-left font-black">French subject line</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {emailSubjectRows.map(([situation, subject]) => (
                  <tr key={situation}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={subject} size="sm" /></td>
                    <td className="py-3 text-[#526173]">{situation}</td>
                    <td className="py-3 font-black">{subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Meeting phrases */}
          <h3 className="mt-10 text-lg font-black">Meeting phrases</h3>
          <p className="mt-2 text-[#526173] text-sm leading-6">
            In bilingual workplaces, meetings may shift between French and English. These phrases help you
            participate confidently in French-language meetings.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">Situation</th>
                  <th className="pb-3 text-left font-black">French phrase</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {meetingRows.map(([situation, fr, en]) => (
                  <tr key={situation}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black text-[#526173]">{situation}</td>
                    <td className="py-3 font-black">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">Vous vs. tu at work: </span>
            In Quebec workplaces, "tu" spreads faster than in European French offices: many Quebec
            workplaces default to "tu" even with managers. In more formal or federal bilingual environments,
            start with "vous" and follow the other person's lead.
          </div>
        </div>

        {/* Section 5: Interview phrases */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Interview phrases</h2>
          <p className="mt-4 text-[#526173] leading-7">
            French-language job interviews in Canada: especially in Quebec and for federal bilingual
            positions: follow a structured format. These answer openers help you respond fluently to
            the most common questions.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">Question</th>
                  <th className="pb-3 text-left font-black">Key French phrases to answer it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {interviewRows.map(([question, answer]) => (
                  <tr key={question}>
                    <td className="py-3 pl-3 w-8 align-top pt-4"><SpeakButton text={answer} size="sm" /></td>
                    <td className="py-3 font-black text-[#526173] pr-4 align-top">{question}</td>
                    <td className="py-3 font-black align-top">{answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">Federal bilingual positions</p>
            <p className="mt-3 text-sm text-white/80">
              Many federal government roles in Canada require proficiency in both official languages.
              Developing a strong command of workplace French vocabulary and professional communication is essential
              for candidates seeking to enter or advance in the public service.
            </p>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-6 shadow-sm">
            <p className="font-black">Practise in context</p>
            <p className="mt-2 text-sm text-[#526173]">
              The Workplace &amp; Career unit walks through job applications, mock interviews, and
              bilingual workplace scenarios with guided exercises.
            </p>
            <Link
              href="/learn/canadian-life/unit-3/lesson-1"
              className="mt-4 inline-block rounded-full bg-[#D62828] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#B91C1C]"
            >
              Go to course →
            </Link>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-6 shadow-sm">
            <p className="font-black">Write a strong cover letter</p>
            <p className="mt-2 text-sm text-[#526173]">
              See a full annotated example of a French cover letter for a bilingual Canadian job posting,
              with explanations of every section.
            </p>
            <Link
              href="/resources/cover-letter"
              className="mt-4 inline-block rounded-full bg-[#D62828] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#B91C1C]"
            >
              Cover letter resource →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
