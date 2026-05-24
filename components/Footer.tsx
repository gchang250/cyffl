import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E7DAB9] bg-white px-6 py-10 text-[#526173]">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-sm font-black tracking-widest text-[#0B1F3A]">
            CYFFL
          </p>
          <p className="mt-3 max-w-sm leading-7 text-sm">
            The Canadian Youth Foundation for French Literacy, free French
            lessons, tutoring, and resources for Canadian students.
          </p>
        </div>

        <div>
          <p className="font-black text-[#0B1F3A]">Explore</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/about" className="hover:text-[#0B1F3A]">About</Link>
            <Link href="/learn" className="hover:text-[#0B1F3A]">Learn</Link>
            <Link href="/resources" className="hover:text-[#0B1F3A]">Resources</Link>
            <Link href="/tutoring" className="hover:text-[#0B1F3A]">Tutoring</Link>
            <Link href="/volunteer" className="hover:text-[#0B1F3A]">Volunteer</Link>
          </div>
        </div>

        <div>
          <p className="font-black text-[#0B1F3A]">Contact</p>
          <a
            href="mailto:canadianyouthffl@gmail.com"
            className="mt-3 block text-sm hover:text-[#0B1F3A]"
          >
            canadianyouthffl@gmail.com
          </a>
          <p className="mt-5 text-sm font-semibold text-[#0B1F3A]">
            French for Canada's next generation.
          </p>
        </div>
      </div>
    </footer>
  );
}
