"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Safety", href: "#safety" },
  { name: "Location", href: "#location" },
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

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#030712]/95 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group cursor-pointer focus:outline-none"
        >
          <Image
            src="/logo.png"
            alt="Bimcon Associates Logo"
            width={240}
            height={72}
            className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation Links & Enquire Now Button */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleScrollTo(e, item.href)} 
              className="text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wider"
            >
              {item.name}
            </a>
          ))}

          <Button 
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-2 rounded-xl transition-all shadow-md shadow-cyan-500/15 cursor-pointer flex items-center gap-1.5"
          >
            Enquire Now <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Actions (Enquire Button + Menu Toggle) */}
        <div className="lg:hidden flex items-center gap-3">
          <Button 
            size="sm"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-lg transition-all"
          >
            Enquire
          </Button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-slate-300 hover:text-white p-1 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#070d1e] border-b border-slate-800/90 px-4 pt-3 pb-5 space-y-1 shadow-2xl">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleScrollTo(e, item.href)} 
              className="block px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-900 hover:text-cyan-400 uppercase tracking-wider transition-colors"
            >
              {item.name}
            </a>
          ))}

          <div className="pt-3 border-t border-slate-800/80">
            <Button 
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl"
            >
              Enquire Now <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}