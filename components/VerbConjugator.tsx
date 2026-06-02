"use client";

import { useState } from "react";

export interface ConjForm {
  pronoun: string;
  form: string;
}

export interface Tense {
  name: string;
  example: string;
  englishExample: string;
  forms: ConjForm[];
}

export interface Mood {
  name: string;
  bg: string;
  activeBg: string;
  text: string;
  activeText: string;
  borderColor: string;
  tenses: Tense[];
}

interface Props {
  verb: string;
  english: string;
  ipa?: string;
  moods: Mood[];
}

export default function VerbConjugator({ verb, english, ipa, moods }: Props) {
  const [activeMood, setActiveMood] = useState(0);
  const mood = moods[activeMood];

  return (
    <div className="rounded-[2rem] border border-[#E7DAB9] bg-white overflow-hidden shadow-sm">

      {/* Verb header */}
      <div className="bg-[#0B1F3A] px-7 py-6">
        <div className="flex flex-wrap items-baseline gap-3">
          <h2 className="text-4xl font-black text-white">{verb}</h2>
          {ipa && (
            <span className="font-mono text-base text-white/40">{ipa}</span>
          )}
        </div>
        <p className="mt-1 text-[#C9A44C] font-bold">{english}</p>
      </div>

      {/* Mood tabs */}
      <div className="flex overflow-x-auto border-b border-[#E7DAB9]">
        {moods.map((m, i) => (
          <button
            key={m.name}
            onClick={() => setActiveMood(i)}
            className={`shrink-0 px-5 py-3 text-sm font-black border-b-2 transition-colors ${
              activeMood === i
                ? `${m.activeBg} ${m.activeText} border-current`
                : "border-transparent text-[#526173] hover:text-[#0B1F3A]"
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* Tense grid */}
      <div className="p-6 grid gap-4 sm:grid-cols-2">
        {mood.tenses.map((tense) => (
          <div
            key={tense.name}
            className={`rounded-2xl border ${mood.borderColor} overflow-hidden`}
          >
            {/* Tense header */}
            <div className={`${mood.bg} px-4 py-3`}>
              <p className={`text-xs font-black uppercase tracking-widest ${mood.text}`}>
                {tense.name}
              </p>
              <p className="mt-0.5 font-black text-[#0B1F3A] italic">{tense.example}</p>
              <p className="text-xs text-[#526173]">{tense.englishExample}</p>
            </div>

            {/* Forms table */}
            <table className="w-full text-sm">
              <tbody>
                {tense.forms.map(({ pronoun, form }) => {
                  // Split the form to highlight the stem vs ending
                  // We'll just show the full form in accent color
                  return (
                    <tr
                      key={pronoun}
                      className="border-t border-[#F3EDD8] group"
                    >
                      <td className="py-2 pl-4 text-[#526173] w-2/5 group-hover:text-[#0B1F3A] transition-colors">
                        {pronoun}
                      </td>
                      <td className={`py-2 pr-4 font-black ${mood.text}`}>
                        {form}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
