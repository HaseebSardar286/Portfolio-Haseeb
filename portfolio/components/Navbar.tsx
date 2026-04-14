"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#journey" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#000319]/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold gradient-text tracking-tight"
        >
          M. Haseeb
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "nav-link text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-white"
                  : "text-white/60 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Resume CTA */}
        <a
          href="/M.Haseeb Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block btn-primary text-sm text-white no-underline"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "w-6 h-0.5 bg-white transition-all duration-300",
              menuOpen && "rotate-45 translate-y-2",
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-white transition-all duration-300",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-white transition-all duration-300",
              menuOpen && "-rotate-45 -translate-y-2",
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#000319]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 text-sm font-medium hover:text-purple-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/M.Haseeb Resume.pdf"
            className="btn-primary text-sm text-white text-center no-underline"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
