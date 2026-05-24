"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Learn", href: "/learn" },
  { label: "Resources", href: "/resources" },
  { label: "Tutoring", href: "/tutoring" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E7DAB9] bg-[#FFFDF7]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0B1F3A] text-xs font-black text-white">
            FR
          </div>
          <div>
            <p className="text-sm font-black tracking-widest text-[#0B1F3A]">CYFFL</p>
            <p className="text-xs text-[#526173]">French Literacy</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 text-sm font-semibold text-[#526173] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#0B1F3A]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/volunteer"
            className="rounded-full bg-[#0B1F3A] px-5 py-2 text-white transition hover:bg-[#15345f]"
          >
            Volunteer
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#E7DAB9] bg-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 rounded-full bg-[#0B1F3A] transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-[#0B1F3A] transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-[#0B1F3A] transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#E7DAB9] bg-[#FFFDF7] px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-[#526173] transition hover:bg-white hover:text-[#0B1F3A]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/volunteer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#0B1F3A] px-5 py-2.5 text-center text-sm font-black text-white"
            >
              Volunteer
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
