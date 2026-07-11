"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Safety", href: "#safety" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-amber-500 p-2 rounded-lg text-slate-950 font-bold tracking-wider flex items-center">
            <ShieldCheck className="w-5 h-5 mr-1" /> BIMCON
          </div>
          <span className="text-xs tracking-widest text-slate-400 font-mono hidden sm:inline-block">ASSOCIATES</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={(e) => handleScrollTo(e, item.href)} className="text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider">
              {item.name}
            </a>
          ))}
          <Button variant="outline" className="border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-950 font-mono text-xs h-8">
            ISO 9001:2015
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 hover:text-white focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={(e) => handleScrollTo(e, item.href)} className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-amber-400 uppercase tracking-wide">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}