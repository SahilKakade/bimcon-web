"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { 
  ArrowUpRight, Wrench, Shield, Target, Eye, 
  CheckCircle2, ShieldAlert, Cpu, ChevronRight, 
  Phone, Mail, MapPin, Image as ImageIcon, Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 120 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(numericValue);
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => setCurrent(Math.floor(latest)));
  }, [springValue]);

  return (
    <span ref={ref} className="font-mono text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">
      {current}{value.replace(/[0-9]/g, "")}
    </span>
  );
}

export default function Home() {
  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Industrial Clients", value: "100+" },
    { label: "Equipment Restored", value: "1000+" },
    { label: "Years Experience", value: "20+" }
  ];

  const services = [
    { 
      title: "Valve Servicing & Reconditioning", 
      desc: "Precision overhaul for all valve variants along with online settings, Trevi tests, & DP verification operations.",
      process: ["Initial Structural Inspection", "Precision Mechanical Grinding", "High-Spec Alloy Welding", "Micro-Lapping Alignment", "Hydrostatic Pressure Testing"]
    },
    { 
      title: "Pump Servicing & Upgrades", 
      desc: "Complete diagnostic breakdown repair, alignment recalibration, and performance optimization for heavy pump loops.",
      process: ["Vibration Analysis", "Impeller Balancing", "Bearing & Seal Upgrades", "Laser Shaft Alignment"]
    },
    { 
      title: "Cooler & Heat Exchanger Work", 
      desc: "Advanced maintenance arrays utilizing comprehensive hydro jetting systems and internal bullet shot cleaners.",
      process: ["Tube Bundle Extraction", "Hydro Jetting Scale Removal", "Bullet Shot Internal Cleansing", "Eddy Current Testing"]
    },
    { 
      title: "Turbine Auxiliary Mechanics", 
      desc: "Expert governance adjustments, pilot valve reconditioning, and end-to-end component lifecycle management.",
      process: ["Governing Loop Inspection", "Pilot Valve Calibration", "Journal Bearing Scanning"]
    },
    { 
      title: "Industrial Piping Assemblies", 
      desc: "Heavy mechanical blueprint design, field erection setup, seamless high-pressure welding, and repairs.",
      process: ["Isometric Blueprint Mapping", "Precision Edge Prepping", "High-Pressure GTAW/SMAW Welding"]
    },
    { 
      title: "Cooling Tower Architecture", 
      desc: "System maintenance cycles including industrial fan upgrades, shaft-motor balancing, and gearbox overhauls.",
      process: ["Structural Frame Integrity Check", "Infill Cleaning & Replacement", "Fan Assembly Alignment"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-400">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-radial from-cyan-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        
        <div className="relative z-10 text-center max-w-5xl px-6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/30 backdrop-blur-md mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-2xs font-mono text-cyan-400 tracking-widest uppercase">ISO 9001:2015 Premium Framework</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 uppercase leading-[1.1]">
              Engineering Reliable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Industrial Solutions
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
              Delivering high-performance shutdown execution, advanced mechanical reconditioning, and elite project oversight frameworks for India's major thermal energy grids.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto sm:max-w-none">
              <Button size="lg" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="w-full sm:w-auto bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-bold px-8 tracking-wide rounded-full transition-transform active:scale-98 shadow-lg shadow-cyan-500/10 cursor-pointer">
                EXPLORE CAPABILITIES <ArrowUpRight className="ml-1 w-4 h-4"/>
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="w-full sm:w-auto border-slate-800 hover:bg-slate-900/60 text-slate-300 hover:text-white px-8 rounded-full cursor-pointer">
                CONTACT CONTROL
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rebuilt Premium Stats & About Section */}
      <section id="about" className="py-24 border-t border-slate-900/60 bg-gradient-to-b from-[#060913] to-[#090f1f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-cyan-400 font-mono text-2xs tracking-widest uppercase block mb-2 font-bold">ESTABLISHED 2009</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase mb-6">About Bimcon Associates</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                Bimcon Associates has grown into a premier provider of specialized maintenance services for thermal power plants across India. Headquartered in Nashik, Maharashtra, we specialize in comprehensive mechanical solutions that ensure peak operational efficiency, safety, and extended equipment life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-800/80 pt-6">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 text-cyan-400"><Target className="w-4 h-4"/></div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Mission Metric</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Maintaining zero-compromise policies on absolute operational structural component lifetimes.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 text-cyan-400"><Eye className="w-4 h-4"/></div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Vision Architecture</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Scaling tactical execution teams into high-capacity private sector complex industrial domains.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats: Optimized into an app-like card loop */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
              {stats.map((stat, i) => (
                <div key={i} className="bg-slate-900/20 border border-slate-800/60 p-6 rounded-2xl backdrop-blur-sm hover:border-cyan-500/20 transition-all flex flex-col justify-center items-center text-center">
                  <AnimatedCounter value={stat.value} />
                  <p className="text-3xs text-slate-400 tracking-widest uppercase font-mono mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section: Native touch swiping for flawless Mobile performance */}
      <section id="services" className="py-24 border-t border-slate-900/60 bg-[#090f1f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black tracking-tight uppercase text-white">Core Capabilities</h2>
              <p className="text-xs font-mono text-cyan-400 mt-1">Tap workflows to review precise internal industrial process execution loops.</p>
            </div>
            <span className="text-3xs font-mono text-slate-500 uppercase mt-2 sm:mt-0 block md:hidden">Swipe Horizontally →</span>
          </div>
          
          {/* Scroll Container: Standard Grid on Desktop, Slick horizontal swiper on Mobile */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {services.map((srv, index) => (
              <Dialog key={index}>
                <DialogTrigger className="w-[85vw] sm:w-[45vw] md:w-full shrink-0 snap-start text-left bg-transparent border-0 p-0 block cursor-pointer outline-none">
                  <Card className="bg-slate-950 border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/20 transition-all duration-300 group flex flex-col justify-between h-full rounded-2xl shadow-xl">
                    <CardHeader className="p-6">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <CardTitle className="text-base text-white font-bold group-hover:text-cyan-400 transition-colors uppercase tracking-wide leading-snug">{srv.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal line-clamp-3">{srv.desc}</p>
                      <span className="text-3xs font-mono text-cyan-400 uppercase flex items-center tracking-widest font-bold">
                        REVIEW METRICS <ChevronRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5"/>
                      </span>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-slate-950 border-slate-800 text-slate-100 max-w-md rounded-2xl px-6 py-6">
                  <DialogHeader>
                    <DialogTitle className="text-cyan-400 font-bold uppercase tracking-wider text-base leading-snug">{srv.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 space-y-4">
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">{srv.desc}</p>
                    <div className="border-t border-slate-900 pt-4">
                      <h4 className="text-2xs font-mono text-white uppercase tracking-widest mb-3 flex items-center gap-1 font-bold">
                        <Cpu className="w-3 h-3 text-cyan-400"/> Operational Phases
                      </h4>
                      <ul className="space-y-2.5">
                        {srv.process.map((p, idx) => (
                          <li key={idx} className="text-xs text-slate-400 flex items-start gap-2.5 font-normal">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Rebuilt Luxury Projects Gallery */}
      <section id="projects" className="py-24 border-t border-slate-900/60 bg-[#060913]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black tracking-tight uppercase text-white">Verified Deployments</h2>
              <p className="text-xs font-mono text-cyan-400 mt-1">100% on-time project finalization logs across public state sectors.</p>
            </div>
            <span className="text-3xs font-mono text-slate-500 uppercase mt-2 sm:mt-0 block md:hidden">Swipe Horizontally →</span>
          </div>
          
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-6 pb-6 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {[
              { title: "Valve Reconditioning Loops", client: "MAHAGENCO", type: "Shutdown Maintenance", zone: "Turbine Core Complex" },
              { title: "Cooling Tower Structural Overhaul", client: "NTPC Grid Area", type: "Mechanical Engineering", zone: "Cell Assembly Deck" },
              { title: "High-Pressure Piping Modifications", client: "GSECL Authority", type: "Fabrication & Erection", zone: "Feedwater Loop Grid" },
              { title: "Condenser Tube Scale Extraction", client: "MPPGCL / KPCL", type: "Hydro-Jetting Systems", zone: "Main Cooling Systems" }
            ].map((proj, idx) => (
              <div key={idx} className="w-[85vw] sm:w-[60vw] md:w-full shrink-0 snap-start bg-slate-950 border border-slate-900 rounded-2xl overflow-hidden group hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div className="h-44 bg-[#080d1a] flex flex-col justify-center items-center text-slate-600 relative border-b border-slate-900">
                  <div className="absolute inset-0 bg-radial from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <ImageIcon className="w-6 h-6 mb-2 text-slate-600 group-hover:text-cyan-400/40 transition-colors" />
                  <span className="text-3xs font-mono uppercase tracking-widest text-slate-500">{proj.zone} Layout Spec</span>
                </div>
                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-3xs font-mono text-cyan-400 uppercase tracking-widest block mb-1 font-bold">{proj.type}</span>
                    <h4 className="text-sm sm:text-base text-white font-bold uppercase tracking-wide group-hover:text-cyan-400 transition-colors leading-snug">{proj.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 font-normal">Authority Client: {proj.client}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-slate-400 transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of unchanged layout arrays (Safety, Careers, Contact Forms) */}
      <section id="safety" className="py-24 border-t border-slate-900/60 bg-[#090f1f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cyan-400 font-mono text-2xs tracking-widest uppercase block mb-2 font-bold">ZERO-ACCIDENT PROTOCOL</span>
              <h2 className="text-3xl font-bold tracking-tight text-white uppercase mb-6">Quality & Safety Matrix</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                Our plant setups execute strict predictive risk mitigation loops and full PPE compliance guidelines to guarantee total continuity and protection during rigorous multi-stage shutdown operations.
              </p>
              <div className="space-y-3.5">
                {[
                  "Total systemic alignment with hazardous plant environment specs.",
                  "Mandatory industrial mechanical safety gear arrays.",
                  "Pre-startup operational diagnostics (Pressure, Alignment, and Flow checks)."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-300 font-normal">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-950 to-[#0c152b] border border-slate-800/80 p-6 sm:p-8 rounded-2xl relative overflow-hidden shadow-2xl">
              <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" /> Compliance Records
              </h3>
              <div className="space-y-4 font-mono text-3xs text-slate-400">
                <div className="border-b border-slate-900 pb-2.5">
                  <span className="text-white block font-sans font-bold text-xs mb-0.5">ISO 9001:2015 Standards</span>
                  Quality assurance processes checked and completely logged.
                </div>
                <div className="border-b border-slate-900 pb-2.5">
                  <span className="text-white block font-sans font-bold text-xs mb-0.5">TPM Control Loops</span>
                  Total Productive Maintenance patterns verified for mechanical stability.
                </div>
                <div>
                  <span className="text-white block font-sans font-bold text-xs mb-0.5">Non-Destructive Scanning</span>
                  Dye penetrant checks completed across critical pressure welds.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-24 border-t border-slate-900/60 bg-[#060913]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight uppercase text-white">Join Our Team</h2>
            <p className="text-xs text-slate-400 mt-2">Open recruitment positions across multi-state engineering sites.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["Mechanical Engineers", "Plant Supervisors", "High-Pressure Welders", "Fitters & Riggers", "Project Leaders", "Site Technicians"].map((job, idx) => (
              <div key={idx} className="border border-slate-800 bg-slate-950 p-4 rounded-xl flex items-center justify-between shadow-md">
                <span className="text-xs font-semibold text-slate-300">{job}</span>
                <span className="text-3xs font-mono text-cyan-400 uppercase bg-cyan-400/5 px-2.5 py-1 rounded border border-cyan-400/20 font-bold">Apply</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Wrapper */}
      <section id="contact" className="py-24 border-t border-slate-900/60 bg-[#090f1f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight uppercase text-white">Get In Touch</h2>
                <p className="text-xs text-slate-400 mt-2 font-normal">Establish immediate contact channels with our engineering desks.</p>
              </div>
              <div className="space-y-4 font-mono text-xs text-slate-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="font-normal">Plot No.5, Jerin Villa, Adke Nagar-1, Jaibhavani Road, Nashik Road, Maharashtra 422102</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <p>+91 9822971089 / 9764909778</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <p>bimconassociates@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 w-full">
              <form className="space-y-4 w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600 font-normal" placeholder="Corporate Identity / Client Name" required />
                  <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600 font-normal" placeholder="Email Anchor" required />
                </div>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600 font-normal" placeholder="Outline specific maintenance parameters or tender cycles..." required></textarea>
                <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold uppercase tracking-widest text-xs py-5 rounded-xl cursor-pointer transition-transform active:scale-99">
                  Transmit Specifications Node
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Footer Matrix */}
      <footer className="bg-[#060913] border-t border-slate-900/80 py-12 text-3xs font-mono text-slate-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-slate-400 font-bold tracking-wider mb-1">BIMCON ASSOCIATES</p>
            <p className="font-normal">ISO 9001:2015 Plant Systems Engineering</p>
          </div>
          <p className="text-center sm:text-right font-normal">© {new Date().getFullYear()} Bimcon Associates. All access channels secured.</p>
        </div>
      </footer>
    </div>
  );
}