import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sentence Structure | CYFFL Resources",
  description:
    "A complete reference for French sentence structure — word order, coordination, subordinate clauses, relative clauses, emphasis, impersonal constructions, and nominalization.",
};

const sections = [
  {
    id: "word-order",
    title: "Word order",
    subtitle: "The basic rules for how a French sentence is built",
    color: "bg-[#EFF6FF] text-[#2563EB]",
    rows: [
      {
        label: "Basic order",
        pattern: "Sujet + Verbe + Objet",
        example: "Le gouvernement adopte une nouvelle politique.",
        note: "French is SVO (subject–verb–object), like English. Most simple sentences follow this pattern.",
      },
      {
        label: "Adjective position",
        pattern: "Most adjectives come AFTER the noun",
        example: "une décision importante · un problème complexe",
        note: "Exceptions that come BEFORE: beau, bon, grand, gros, haut, jeune, joli, long, mauvais, meilleur, nouveau, petit, premier, vieux. BAGS = Beauty, Age, Goodness, Size.",
      },
      {
        label: "Adverb position",
        pattern: "After the conjugated verb (or between auxiliary and past participle)",
        example: "Il parle souvent français. · Il a souvent parlé français.",
        note: "Short adverbs (bien, mal, souvent, déjà, encore, toujours) go between avoir/être and the past participle. Longer adverbs go after the full verb phrase.",
      },
      {
        label: "Negation",
        pattern: "ne … pas wrap the conjugated verb",
        example: "Il ne parle pas français. · Il n'a pas parlé français.",
        note: "In compound tenses, ne…pas wraps the auxiliary: 'n'a pas' (not 'a pas parlé'). In informal spoken French, 'ne' is often dropped: 'Il parle pas.'",
      },
      {
        label: "Object pronouns",
        pattern: "Before the verb: me / te / le / la / lui / nous / vous / les / leur / y / en",
        example: "Je le vois. · Elle lui parle. · Nous y allons. · Il en a besoin.",
        note: "Order when multiple pronouns: me/te/nous/vous → le/la/les → lui/leur → y → en. 'Je le lui donne.' = I give it to him.",
      },
    ],
  },
  {
    id: "coordination",
    title: "Coordination",
    subtitle: "Joining two clauses or elements of the same type",
    color: "bg-[#FEF3C7] text-[#D97706]",
    rows: [
      { label: "et", pattern: "and — adds a point", example: "Il parle français et il comprend l'anglais.", note: "Do not use a comma before 'et' in French (unlike in English)." },
      { label: "mais", pattern: "but — introduces a contrast", example: "Il veut réussir, mais il ne travaille pas assez.", note: "Always preceded by a comma. Stronger contrast than 'cependant'." },
      { label: "ou", pattern: "or — presents an alternative", example: "Tu viens ce soir ou tu restes chez toi ?", note: "'Ou' = or. Don't confuse with 'où' (where, with accent)." },
      { label: "donc", pattern: "therefore / so — signals a consequence", example: "Il pleut, donc nous restons.", note: "'Donc' is coordination, not subordination. The clause it introduces remains independent." },
      { label: "or", pattern: "now / yet — introduces a contrast or new element", example: "Il pensait avoir raison ; or, les faits le contredisent.", note: "'Or' (no accent) is a coordinating conjunction meaning 'now' or 'and yet'. Often confused with 'or' in English." },
      { label: "ni … ni …", pattern: "neither … nor …", example: "Il ne parle ni français ni anglais.", note: "Use 'ne' before the verb. Both 'ni' elements replace 'et' or 'ou'. The verb stays singular if both subjects are singular." },
      { label: "car", pattern: "for / because (formal) — gives a reason", example: "Il est absent, car il est malade.", note: "'Car' is more formal than 'parce que' and introduces a justification — not a cause. It cannot start a sentence." },
    ],
  },
  {
    id: "subordinate",
    title: "Subordinate clauses",
    subtitle: "Dependent clauses joined by a subordinating conjunction — some trigger the subjunctive",
    color: "bg-[#F0FDF4] text-[#16A34A]",
    rows: [
      {
        label: "Cause → indicative",
        pattern: "parce que · puisque · étant donné que · vu que · comme",
        example: "Il réussit parce qu'il travaille dur. · Puisque tu es là, commençons.",
        note: "'Parce que' answers 'pourquoi?'. 'Puisque' introduces a known / obvious reason. 'Comme' (meaning 'since') always starts the sentence.",
      },
      {
        label: "Consequence → indicative",
        pattern: "si bien que · de sorte que · à tel point que",
        example: "Il travaille si bien qu'il a été promu. · Elle a tellement insisté qu'on a cédé.",
        note: "These always take the indicative. 'De sorte que + subjonctif' is possible but shifts the meaning to purpose (in order that), not result.",
      },
      {
        label: "Opposition → indicative",
        pattern: "alors que · tandis que · même si",
        example: "Il réussit alors que son frère échoue. · Même si c'est difficile, il faut essayer.",
        note: "'Alors que' and 'tandis que' contrast two simultaneous or opposing states. 'Même si' = even if — takes indicative (not subjunctive).",
      },
      {
        label: "Concession → SUBJUNCTIVE",
        pattern: "bien que · quoique · encore que",
        example: "Bien qu'il soit fatigué, il continue. · Quoiqu'elle ait tort, elle insiste.",
        note: "⚠️ Subjunctive required. 'Bien que je sois…', 'bien qu'il fasse…'. Never 'bien que + indicative'. One of the most tested grammar points.",
      },
      {
        label: "Condition → indicative",
        pattern: "si (if) · à moins que (→ subj) · à condition que (→ subj)",
        example: "Si tu travailles, tu réussiras. · À moins qu'il ne vienne, nous partirons.",
        note: "'Si' + present → future. 'Si' + imperfect → conditional. 'À moins que' and 'à condition que' always take the subjunctive.",
      },
      {
        label: "Purpose → SUBJUNCTIVE",
        pattern: "pour que · afin que · de peur que · de crainte que",
        example: "Je parle lentement pour que tu comprennes. · Il chuchote de peur qu'on l'entende.",
        note: "⚠️ Subjunctive required. 'Pour que je fasse…', 'afin qu'elle vienne…'. If the subject is the same in both clauses, use 'pour + infinitif' instead.",
      },
      {
        label: "Time → indicative (mostly)",
        pattern: "quand · lorsque · dès que · avant que (→ subj) · après que (→ indic)",
        example: "Dès qu'il arrive, appelle-moi. · Avant qu'il parte, dis-lui au revoir.",
        note: "'Avant que' = subjunctive. 'Après que' = indicative (though subjunctive is increasingly used in speech). 'Quand' + future in both clauses when future is implied.",
      },
    ],
  },
  {
    id: "relative",
    title: "Relative clauses",
    subtitle: "Clauses that describe or define a noun — introduced by a relative pronoun",
    color: "bg-[#FDF4FF] text-[#9333EA]",
    rows: [
      {
        label: "qui",
        pattern: "subject of the relative clause",
        example: "C'est l'homme qui parle. · La loi qui a été adoptée…",
        note: "'Qui' replaces the subject. Ask: who/what is doing the verb in the relative clause? If it's the noun you're describing → use 'qui'.",
      },
      {
        label: "que / qu'",
        pattern: "object of the relative clause",
        example: "Le rapport que j'ai lu… · La décision qu'il a prise…",
        note: "'Que' replaces the object. Ask: who/what is the relative clause acting on? If it's the noun you're describing → use 'que'. Note past participle agreement: 'la décision qu'il a prise'.",
      },
      {
        label: "dont",
        pattern: "replaces 'de + noun' — used with verbs/nouns requiring 'de'",
        example: "Le projet dont je parle… · L'outil dont nous avons besoin… · L'auteur dont j'admire l'œuvre…",
        note: "'Dont' replaces 'de + [noun]'. Common triggers: parler de, avoir besoin de, se souvenir de, tenir compte de, faire partie de. Also used for possession: 'l'auteur dont j'admire l'œuvre' = the author whose work I admire.",
      },
      {
        label: "où",
        pattern: "replaces a place or time expression",
        example: "La ville où je suis né… · Le jour où tout a changé…",
        note: "'Où' replaces 'dans lequel', 'sur lequel', etc. for place. Also used for time: 'à l'époque où…' = at the time when…",
      },
      {
        label: "lequel / laquelle / lesquels / lesquelles",
        pattern: "used after prepositions (other than 'de' and 'à' + place)",
        example: "La table sur laquelle… · Le comité au sein duquel… · Les raisons pour lesquelles…",
        note: "'Duquel' = de + lequel. 'Auquel' = à + lequel. Use after prepositions: sur, dans, avec, pour, par, sans, grâce à, en raison de. More formal than 'où' or 'que'.",
      },
    ],
  },
  {
    id: "emphasis",
    title: "Emphasis structures",
    subtitle: "Structures that highlight a particular element of the sentence",
    color: "bg-[#FEF2F2] text-[#B91C1C]",
    rows: [
      {
        label: "C'est… qui (subject emphasis)",
        pattern: "C'est [emphasized subject] qui [verb]",
        example: "C'est Marie qui a décidé. · C'est lui qui a tort.",
        note: "Emphasizes the subject. 'Qui' agrees with the emphasized noun. 'Ce sont eux qui ont décidé.' (plural → ce sont).",
      },
      {
        label: "C'est… que (object emphasis)",
        pattern: "C'est [emphasized element] que [rest of clause]",
        example: "C'est cette décision que je conteste. · C'est maintenant qu'il faut agir.",
        note: "Emphasizes any element except the subject — object, time, place, manner. 'Que' becomes 'qu'' before a vowel.",
      },
      {
        label: "Ce qui… c'est (subject)",
        pattern: "Ce qui [verb], c'est [complement]",
        example: "Ce qui m'inquiète, c'est l'absence de dialogue. · Ce qui est remarquable, c'est la rapidité.",
        note: "'Ce qui' = what (subject). The structure delays the key information to the end — this is called dislocation. Very common in formal writing and speaking.",
      },
      {
        label: "Ce que… c'est (object)",
        pattern: "Ce que [subject + verb], c'est [complement]",
        example: "Ce que je veux dire, c'est que la situation est grave. · Ce qu'il faut, c'est de la patience.",
        note: "'Ce que' = what (object). Same dislocation structure. 'Ce qu'il faut, c'est…' is a very common formal phrase meaning 'What is needed is…'",
      },
      {
        label: "Inversion (stylistic)",
        pattern: "Verb before subject — after certain adverbs or in formal writing",
        example: "Ainsi peut-on expliquer… · À peine avait-il parlé que… · Jamais il n'avait vu cela.",
        note: "Inversion is required after 'ainsi', 'à peine', 'peut-être', 'aussi' (meaning 'therefore') at the start of a clause. Very formal — signals advanced register.",
      },
    ],
  },
  {
    id: "impersonal",
    title: "Impersonal constructions",
    subtitle: "Structures with 'il' as a dummy subject — not referring to any person",
    color: "bg-[#FFF7ED] text-[#C2410C]",
    rows: [
      { label: "il faut que + subj", pattern: "it is necessary that / one must", example: "Il faut que tu sois présent. · Il faudrait qu'on agisse maintenant.", note: "⚠️ Always triggers the subjunctive. To avoid subjunctive, use 'il faut + infinitif': 'Il faut agir maintenant.'" },
      { label: "il faut + infinitif", pattern: "one must / it is necessary to", example: "Il faut partir maintenant. · Il ne faut pas mentir.", note: "No subjunctive — use when the action is general (no specific subject). 'Il faut + que + subj' when there IS a specific subject." },
      { label: "il est + adj + de + inf", pattern: "it is [adjective] to [verb]", example: "Il est important de noter que… · Il est difficile de comprendre.", note: "Followed by 'de + infinitif'. The adjective describes the action. Compare: 'Il est important que tu notes' (+ subjunctive, specific subject)." },
      { label: "il convient de + inf", pattern: "it is appropriate to / one should", example: "Il convient de souligner que… · Il convient d'examiner cette question.", note: "Formal, impersonal. Very common in government French and formal writing. Slightly weaker than 'il faut' — suggests appropriateness rather than necessity." },
      { label: "il s'agit de", pattern: "it is a matter of / it concerns / this is about", example: "Il s'agit d'un problème complexe. · Dans ce texte, il s'agit de…", note: "'Il s'agit de' is never personal — never say 'je m'agis'. Always impersonal. Used to introduce a topic: 'Il s'agit de comprendre les enjeux.' = It is a matter of understanding the issues." },
      { label: "il est à noter / il est à craindre", pattern: "it is to be noted / there is reason to fear", example: "Il est à noter que les délais sont courts. · Il est à craindre que la situation s'aggrave.", note: "'Il est à + infinitif passif' is a formal structure. 'Il est à craindre que' takes the subjunctive. Common in formal reports and formal writing." },
    ],
  },
  {
    id: "nominalization",
    title: "Nominalization",
    subtitle: "Converting verbs and adjectives into nouns — the hallmark of formal written French",
    color: "bg-[#EDE9FE] text-[#7C3AED]",
    rows: [
      { label: "Verb → noun", pattern: "Use the noun form instead of the verb", example: "mettre en œuvre → la mise en œuvre · décider → la décision · analyser → l'analyse", note: "Nominalization is more formal than a verb clause. 'La mise en œuvre de cette politique' is more formal than 'mettre en œuvre cette politique'. Very common in government and academic French." },
      { label: "Common suffixes", pattern: "-tion / -sion / -ment / -age / -ance / -ure", example: "évaluer → l'évaluation · améliorer → l'amélioration · traiter → le traitement", note: "Many French nouns are formed by adding these suffixes to verb stems. Recognizing the pattern helps you decode unknown nouns: 'la mise en application' = application / implementation." },
      { label: "Adjective → noun", pattern: "Use the noun form of the adjective", example: "efficace → l'efficacité · complexe → la complexité · durable → la durabilité", note: "Common suffix: -ité. 'La durabilité' (sustainability) rather than 'le fait d'être durable'. Higher register." },
      { label: "Verb → abstract noun", pattern: "le fait de + infinitif → nominalized equivalent", example: "Le fait d'agir rapidement est essentiel. → La rapidité d'action est essentielle.", note: "'Le fait de + infinitif' is always correct but wordy. When a noun form exists, use it for a higher register: 'la prise de décision' not 'le fait de prendre des décisions'." },
    ],
  },
];

export default function SentenceStructurePage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/resources" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Resources
        </Link>

        <div className="mt-8 max-w-3xl">
          <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-black text-[#7C3AED]">
            Grammar
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Sentence Structure
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#526173]">
            A complete reference for how French sentences are built — from basic word order to relative clauses, emphasis structures, impersonal constructions, and the nominalization that defines formal written French.
          </p>
        </div>

        {/* Quick nav */}
        <nav className="mt-10 flex flex-wrap gap-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`rounded-full px-4 py-1.5 text-xs font-black transition hover:-translate-y-0.5 ${s.color}`}
            >
              {s.title}
            </a>
          ))}
        </nav>

        {/* Sections */}
        <div className="mt-12 space-y-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <div className="flex items-start gap-4">
                <span className={`mt-0.5 shrink-0 rounded-full px-3 py-1 text-xs font-black ${section.color}`}>
                  {section.title}
                </span>
              </div>
              <h2 className="mt-3 text-3xl font-black">{section.title}</h2>
              <p className="mt-1 text-[#526173]">{section.subtitle}</p>

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#E7DAB9]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0B1F3A] text-white">
                      <th className="w-36 px-5 py-3 text-left text-xs font-black uppercase tracking-widest">Structure</th>
                      <th className="px-5 py-3 text-left text-xs font-black uppercase tracking-widest">Pattern</th>
                      <th className="px-5 py-3 text-left text-xs font-black uppercase tracking-widest">Example</th>
                      <th className="hidden px-5 py-3 text-left text-xs font-black uppercase tracking-widest lg:table-cell">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, i) => (
                      <tr
                        key={row.label}
                        className={`border-t border-[#E7DAB9] align-top ${i % 2 === 0 ? "bg-white" : "bg-[#FFFDF7]"}`}
                      >
                        <td className="px-5 py-4 font-black text-[#0B1F3A]">{row.label}</td>
                        <td className="px-5 py-4 text-[#526173]">{row.pattern}</td>
                        <td className="px-5 py-4 italic text-[#0B1F3A]">{row.example}</td>
                        <td className="hidden px-5 py-4 text-xs leading-5 text-[#526173] lg:table-cell">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Notes shown on small screens */}
              <div className="mt-3 space-y-2 lg:hidden">
                {section.rows.map((row) => (
                  <div key={row.label} className="rounded-xl bg-white px-4 py-3 text-xs text-[#526173]">
                    <strong className="text-[#0B1F3A]">{row.label}:</strong> {row.note}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Warning box for subjunctive triggers */}
        <section className="mt-16 rounded-[2rem] border-2 border-[#F0FDF4] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">⚠️ Subjunctive triggers — summary</p>
          <p className="mt-2 text-[#526173]">These conjunctions and verbs always require the subjunctive in the subordinate clause.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "Conjunctions",
                items: ["bien que", "quoique", "pour que", "afin que", "à moins que", "à condition que", "de peur que", "avant que", "bien que"],
              },
              {
                label: "Impersonal expressions",
                items: ["il faut que", "il est important que", "il est nécessaire que", "il est possible que", "il est dommage que", "il est à craindre que"],
              },
              {
                label: "Verbs of wish / doubt / emotion",
                items: ["vouloir que", "souhaiter que", "douter que", "craindre que", "regretter que", "être content(e) que", "recommander que", "suggérer que"],
              },
            ].map((group) => (
              <div key={group.label}>
                <p className="text-xs font-black uppercase tracking-widest text-[#0B1F3A]">{group.label}</p>
                <ul className="mt-2 space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm italic text-[#526173]">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#16A34A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/resources/verbs-subjonctif" className="mt-5 inline-block text-sm font-black text-[#16A34A] hover:opacity-80">
            Full subjunctive guide →
          </Link>
        </section>

        {/* Related resources */}
        <section className="mt-10 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm">
          <p className="text-xl font-black">Related resources</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { label: "Le subjonctif", href: "/resources/verbs-subjonctif" },
              { label: "Le conditionnel", href: "/resources/verbs-conditionnel" },
              { label: "Connecting words", href: "/resources/connecting-words" },
              { label: "Le passé composé", href: "/resources/verbs-passe-compose" },
              { label: "L'imparfait", href: "/resources/verbs-imparfait" },
            ].map((r) => (
              <Link
                key={r.label}
                href={r.href}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-black text-white transition hover:-translate-y-0.5"
              >
                {r.label} →
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
