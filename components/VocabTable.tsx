import SpeakButton from "./SpeakButton";

export interface VocabRow {
  fr: string;
  ipa: string;
  en: string;
  note?: string; // optional: gender, usage note, etc.
}

interface Props {
  rows: VocabRow[];
  showNote?: boolean;
}

export default function VocabTable({ rows, showNote = false }: Props) {
  return (
    <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#E7DAB9] bg-[#FFFDF7]">
            <th className="py-3 pl-4 w-8" aria-label="Pronounce" />
            <th className="py-3 pl-2 text-left font-black text-[#0B1F3A]">French</th>
            <th className="py-3 pl-4 text-left font-mono text-xs font-bold text-[#526173]">IPA</th>
            <th className="py-3 pl-4 pr-5 text-left font-black text-[#0B1F3A]">English</th>
            {showNote && (
              <th className="py-3 pl-4 pr-5 text-left text-xs font-bold text-[#526173]">Note</th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#F3EDD8]">
          {rows.map((row) => (
            <tr key={row.fr} className="group hover:bg-[#FFFDF7] transition-colors">
              <td className="py-2.5 pl-4">
                <SpeakButton text={row.fr} size="sm" />
              </td>
              <td className="py-2.5 pl-2 font-black">{row.fr}</td>
              <td className="py-2.5 pl-4 font-mono text-xs text-[#526173] group-hover:text-[#0B1F3A] transition-colors">{row.ipa}</td>
              <td className="py-2.5 pl-4 pr-5 text-[#526173]">{row.en}</td>
              {showNote && (
                <td className="py-2.5 pl-4 pr-5 text-xs text-[#526173] italic">{row.note ?? ""}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
