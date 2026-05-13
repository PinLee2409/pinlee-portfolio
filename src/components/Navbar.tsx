"use client";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-darker/70 backdrop-blur-2xl border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black gradient-text">
          PinLee<span className="text-accent">.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <Link href="#intro" className="relative py-1 group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#skills" className="relative py-1 group">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#projects" className="relative py-1 group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#experience" className="relative py-1 group">
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#contact" className="relative py-1 group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-slate-300">
          <Link href="#intro" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="#skills" onClick={() => setOpen(false)}>
            Skills
          </Link>
          <Link href="#projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="#experience" onClick={() => setOpen(false)}>
            Experience
          </Link>
          <Link href="#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
