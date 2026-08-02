"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { 
  ArrowUpRight, Wrench, Shield, Target, Eye, 
  CheckCircle2, ShieldAlert, Cpu, ChevronRight, 
  Phone, Mail, MapPin, Image as ImageIcon, Sparkles,
  Activity, Gauge, Layers
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
    <span ref={ref} className="font-mono text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
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
      title: "Valves Servicing", 
      badge: "Precision Systems",
      desc: "We give services to all types of valves including Turbine Values (including High Pressure Valves, Intermediate Pressure Valves), Pilot Values, Emergency Stop Valve (ESV), Steam Line Valves, Safety Valves. Online setting pn krun deto. Tools: Portable Lapping Machine, Seat cutting for Safety valves tools, DP test kit.",
      highlights: ["Online setting available", "Portable Lapping Machine", "Seat cutting for Safety valves", "DP test kit"],
      process: [
        "Isolation and Safety.",
        "Visual Inspection and baseline testing .",
        "Overhaul and Component Servicing.",
        "Reassembly and Calibration",
        "Routine Preventive Maintenance.",
        "Diagnostic & Troubleshooting Testing.",
        "Major Overhaul & Offline Calibration."
      ]
    },
    { 
      title: "Pumps Servicing", 
      badge: "Heavy Fluid Loops",
      desc: "All types of pumps including Circulating Water Pump (CWP), Condensate Extraction Pump (CEP), Boiler Feed Pumps (BFP).",
      highlights: ["Circulating Water Pump (CWP)", "Condensate Extraction Pump (CEP)", "Boiler Feed Pumps (BFP)"],
      process: [
        "Isolation and Safety.",
        "Visual Inspection and baseline testing .",
        "Overhaul and Component Servicing.",
        "Reassembly and Calibration",
        "Routine Preventive Maintenance.",
        "Diagnostic & Troubleshooting Testing.",
        "Major Overhaul & Offline Calibration."
      ]
    },
    { 
      title: "Actuators Servicing", 
      badge: "Automation Control",
      desc: "All types of actuators electric, pneumatic, hydraulic, mechanical, electro-hydraulic actuators like Control Valve Servo Motor (CVSM).",
      highlights: ["Electric & Pneumatic", "Hydraulic & Electro-Hydraulic", "Control Valve Servo Motor (CVSM)"],
      process: [
        "Isolation and Safety.",
        "Visual Inspection and baseline testing .",
        "Overhaul and Component Servicing.",
        "Reassembly and Calibration",
        "Routine Preventive Maintenance.",
        "Diagnostic & Troubleshooting Testing.",
        "Major Overhaul & Offline Calibration."
      ]
    },
    { 
      title: "Cooler Work", 
      badge: "Heat Transfer",
      desc: "All types including Condensers, Working Oil coolers, Main oil coolers, Lube oil coolers, GTR coolers. Tools: Jetting machines, Bullet machine inclunig all types of bullets, ceramic coating equipments, various size ss rods.",
      highlights: ["Jetting & Bullet machines", "Ceramic coating equipment", "Multi-size SS rods"],
      process: [
        "Isolation and Safety.",
        "Visual Inspection and baseline testing .",
        "Overhaul and Component Servicing.",
        "Reassembly and Calibration",
        "Routine Preventive Maintenance.",
        "Diagnostic & Troubleshooting Testing.",
        "Major Overhaul & Offline Calibration."
      ]
    },
    { 
      title: "Governing System Mechanics", 
      badge: "Turbine Core",
      desc: "Speed sensing subsystems, control units, Servo valves, pilot valves, hydraulic servo motor governor values.",
      highlights: ["Speed sensing subsystems", "Control units & Servo valves", "Pilot & Governor valves"],
      process: [
        "Isolation and Safety.",
        "Visual Inspection and baseline testing .",
        "Overhaul and Component Servicing.",
        "Reassembly and Calibration",
        "Routine Preventive Maintenance.",
        "Diagnostic & Troubleshooting Testing.",
        "Major Overhaul & Offline Calibration."
      ]
    },
    { 
      title: "Industrial Piping Assemblies", 
      badge: "High Pressure",
      desc: "Heavy mechanical blueprint design, field erection setup, seamless high-pressure welding, and repairs.",
      highlights: ["Isometric Blueprint Mapping", "Precision Edge Prepping", "GTAW / SMAW Welding"],
      process: [
        "Isometric Blueprint Mapping",
        "Precision Edge Prepping",
        "High-Pressure GTAW/SMAW Welding"
      ]
    },
    { 
      title: "Cooling Tower Architecture", 
      badge: "Infrastructure",
      desc: "System maintenance cycles including industrial fan upgrades, shaft-motor balancing, and gearbox overhauls.",
      highlights: ["Structural Frame Integrity", "Infill Cleaning & Replacement", "Fan Assembly Alignment"],
      process: [
        "Structural Frame Integrity Check",
        "Infill Cleaning & Replacement",
        "Fan Assembly Alignment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-300">
      <Navbar />

      {/* Modern Industrial Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(6,182,212,0.12),rgba(0,0,0,0))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl px-5 sm:px-8 mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Main Content Area */}
            <motion.div 
              className="lg:col-span-7 text-left space-y-6"
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono font-medium text-cyan-300 tracking-wider uppercase">ISO 9001:2015 Certified Engineering Partner</span>
              </div>
              
              {/* Refined Headline - Perfectly Proportioned */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.12]">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-emerald-400">
                  Reliable Industrial
                </span> <br />
                Solutions
              </h1>
              
              <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl leading-relaxed font-normal">
                Bimcon Associates, Nashik is one of India's emerging industrial engineering and maintenance solution providers, delivering comprehensive mechanical maintenance, shutdown execution, fabrication, and project management services.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button 
                  size="lg" 
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} 
                  className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-8 py-6 text-xs tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-cyan-500/15 active:scale-[0.98] cursor-pointer"
                >
                  EXPLORE CAPABILITIES <ArrowUpRight className="ml-2 w-4 h-4"/>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} 
                  className="border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 hover:text-white px-8 py-6 text-xs tracking-wider uppercase rounded-xl transition-all active:scale-[0.98] cursor-pointer backdrop-blur-md"
                >
                  CONTACT CONTROL
                </Button>
              </div>

              {/* High-Impact Mini Spec Badges */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 font-mono text-xs text-slate-400">
                <div>
                  <span className="text-white block font-bold">20+ YEARS</span>
                  <span className="text-[10px] text-slate-500 uppercase">Industry Mastery</span>
                </div>
                <div>
                  <span className="text-cyan-400 block font-bold">500+</span>
                  <span className="text-[10px] text-slate-500 uppercase">Projects Executed</span>
                </div>
                <div>
                  <span className="text-emerald-400 block font-bold">100% SAFE</span>
                  <span className="text-[10px] text-slate-500 uppercase">Zero-Accident Record</span>
                </div>
              </div>
            </motion.div>

            {/* Industrial Live Command Preview Card */}
            <motion.div 
              className="lg:col-span-5 bg-[#070d1e] border border-slate-800 p-6 sm:p-8 rounded-2xl relative shadow-2xl overflow-hidden hidden sm:block"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Activity className="w-32 h-32 text-cyan-400" />
              </div>

              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-cyan-400" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">Operational Overview</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">LIVE GRID</span>
              </div>

              <div className="space-y-4 py-6 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">Plant Shutdown Support</span>
                  <span className="text-cyan-300 font-bold">ACTIVE</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">Turbine Valve Overhauls</span>
                  <span className="text-cyan-300 font-bold">READY</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">BFP & Pump Line Testing</span>
                  <span className="text-cyan-300 font-bold">VERIFIED</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Headquarters: Nashik, MH</span>
                <span className="text-cyan-400 font-bold">Bimcon Engine Core</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32 border-t border-slate-800/80 bg-gradient-to-b from-[#030712] via-[#060e20] to-[#030712]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold block mb-3">ESTABLISHED 2009</span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase leading-tight">About Bimcon Associates</h2>
              </div>

              <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Bimcon Associates, Nashik is one of India's emerging industrial engineering and maintenance solution providers, delivering comprehensive mechanical maintenance, shutdown execution, fabrication, and project management services to thermal power plants and heavy process industries. Since its establishment in 2009, the company has consistently built a reputation for technical excellence, quality workmanship, and timely project execution.
                </p>
                <p>
                  With years of practical experience in complex industrial environments, Bimcon Associates specializes in the maintenance and overhauling of critical power plant equipment including all types of valves, all types of pumps including boiler feed pumps (BFPs), condensers, coolers, cooling tower works, piping systems, actuators, gearboxes, compressors, and other auxiliary equipment. Every project is executed by a team of skilled engineers, supervisors, technicians, welders, and fitters who are committed to delivering safe, reliable, and cost-effective engineering solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-slate-800/80 pt-8">
                <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                    <Target className="w-5 h-5"/>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wide">Our Mission</h4>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">Deliver high-quality engineering and maintenance solutions that improve equipment reliability, reduce downtime, and optimize costs.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                    <Eye className="w-5 h-5"/>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wide">Our Vision</h4>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">To become India's leading engineering partner for steam turbines, turbine auxiliaries, and critical industrial equipment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-5">
              {stats.map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-slate-900/80 to-slate-950 border border-slate-800/90 p-6 sm:p-8 rounded-2xl backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-center items-center text-center group shadow-xl">
                  <AnimatedCounter value={stat.value} />
                  <p className="text-xs text-slate-400 tracking-widest uppercase font-mono mt-3 font-medium group-hover:text-cyan-300 transition-colors">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Services / Core Capabilities */}
      <section id="services" className="py-24 sm:py-32 border-t border-slate-800/80 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold block mb-2">TECHNICAL SERVICES</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-white">Core Capabilities</h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-400 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Tap cards to view operational phases
            </p>
          </div>
          
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
            {services.map((srv, index) => (
              <Dialog key={index}>
                <DialogTrigger className="w-[85vw] max-w-[340px] md:w-full shrink-0 snap-start text-left bg-transparent border-0 p-0 block cursor-pointer outline-none focus:ring-0">
                  <Card className="bg-[#070d1e] border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0a132b] transition-all duration-300 group flex flex-col justify-between h-full rounded-2xl shadow-xl overflow-hidden outline-none ring-0">
                    <CardHeader className="p-6 sm:p-7 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                          <Wrench className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono bg-slate-900/90 text-cyan-300 px-3 py-1 rounded-full border border-slate-800 uppercase tracking-widest font-semibold">
                          {srv.badge}
                        </span>
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-white font-bold group-hover:text-cyan-300 transition-colors uppercase tracking-wide leading-snug">
                        {srv.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-6 sm:p-7 pt-0 flex flex-col justify-between flex-1">
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal line-clamp-3">
                        {srv.desc}
                      </p>

                      {srv.highlights && (
                        <div className="mb-6 pt-4 border-t border-slate-800/80 space-y-2">
                          {srv.highlights.slice(0, 2).map((item, hIdx) => (
                            <div key={hIdx} className="text-xs text-slate-400 flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <span className="text-xs font-mono text-cyan-400 uppercase flex items-center tracking-wider font-bold pt-1">
                        EXPLORE WORKFLOW <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"/>
                      </span>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="bg-[#070d1e] border-slate-800 text-slate-100 max-w-lg rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
                  <DialogHeader className="pb-2">
                    <div className="inline-block text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">{srv.badge}</div>
                    <DialogTitle className="text-cyan-300 font-bold uppercase tracking-wide text-lg sm:text-xl leading-snug">
                      {srv.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 space-y-6">
                    <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                      {srv.desc}
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-4 flex items-center gap-2 font-bold">
                        <Cpu className="w-4 h-4 text-cyan-400"/> Operational Phases & Execution Loops
                      </h4>
                      <div className="space-y-2.5 bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                        {srv.process.map((p, idx) => (
                          <div key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-3 py-1">
                            <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-cyan-500/20">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-24 sm:py-32 border-t border-slate-800/80 bg-gradient-to-b from-[#030712] to-[#060e20]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold block mb-2">PORTFOLIO</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-white">Verified Deployments</h2>
            </div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">State-Wide Power Infrastructure</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { title: "Valve Reconditioning Loops", client: "MAHAGENCO", type: "Shutdown Maintenance", zone: "Turbine Core Complex" },
              { title: "Cooling Tower Structural Overhaul", client: "NTPC Grid Area", type: "Mechanical Engineering", zone: "Cell Assembly Deck" },
              { title: "High-Pressure Piping Modifications", client: "GSECL Authority", type: "Fabrication & Erection", zone: "Feedwater Loop Grid" },
              { title: "Condenser Tube Scale Extraction", client: "MPPGCL / KPCL", type: "Hydro-Jetting Systems", zone: "Main Cooling Systems" }
            ].map((proj, idx) => (
              <div key={idx} className="bg-[#070d1e] border border-slate-800/80 rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div className="h-44 sm:h-48 bg-gradient-to-b from-[#0a1228] to-[#050a18] flex flex-col justify-center items-center text-slate-500 relative border-b border-slate-800/80">
                  <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <ImageIcon className="w-8 h-8 mb-2.5 text-slate-600 group-hover:text-cyan-400/60 transition-colors" />
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">{proj.zone} Layout Spec</span>
                </div>
                <div className="p-6 sm:p-7 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1 font-bold">{proj.type}</span>
                    <h4 className="text-base sm:text-lg text-white font-bold uppercase tracking-wide group-hover:text-cyan-300 transition-colors leading-snug">{proj.title}</h4>
                    <p className="text-xs text-slate-400 mt-1.5">Authority Client: <span className="text-slate-200 font-medium">{proj.client}</span></p>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-slate-800 bg-slate-900/80 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-cyan-500/40 transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-24 sm:py-32 border-t border-slate-800/80 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold block mb-2">ZERO-ACCIDENT PROTOCOL</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">Quality & Safety Matrix</h2>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Our plant setups execute strict predictive risk mitigation loops and full PPE compliance guidelines to guarantee total continuity and protection during rigorous multi-stage shutdown operations.
              </p>
              <div className="space-y-3.5">
                {[
                  "Total systemic alignment with hazardous plant environment specs.",
                  "Mandatory industrial mechanical safety gear arrays.",
                  "Pre-startup operational diagnostics (Pressure, Alignment, and Flow checks)."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                    <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-300 font-normal">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#070d1e] to-slate-950 border border-slate-800 p-7 sm:p-10 rounded-2xl relative overflow-hidden shadow-2xl">
              <h3 className="text-base font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-cyan-400" /> Compliance Records
              </h3>
              <div className="space-y-5 font-mono text-xs sm:text-sm text-slate-400">
                <div className="border-b border-slate-800/80 pb-4">
                  <span className="text-white block font-sans font-bold text-sm mb-1">ISO 9001:2015 Standards</span>
                  Quality assurance processes checked and completely logged.
                </div>
                <div className="border-b border-slate-800/80 pb-4">
                  <span className="text-white block font-sans font-bold text-sm mb-1">TPM Control Loops</span>
                  Total Productive Maintenance patterns verified for mechanical stability.
                </div>
                <div>
                  <span className="text-white block font-sans font-bold text-sm mb-1">Non-Destructive Scanning</span>
                  Dye penetrant checks completed across critical pressure welds.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-24 sm:py-32 border-t border-slate-800/80 bg-gradient-to-b from-[#030712] to-[#060e20]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold block mb-2">JOIN OUR RECRUITMENT NETWORK</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-white">Career Opportunities</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">Open recruitment positions across multi-state engineering sites.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["Mechanical Engineers", "Plant Supervisors", "High-Pressure Welders", "Fitters & Riggers", "Project Leaders", "Site Technicians"].map((job, idx) => (
              <div key={idx} className="border border-slate-800 bg-[#070d1e] p-4 rounded-xl flex items-center justify-between shadow-md hover:border-cyan-500/40 transition-colors">
                <span className="text-xs sm:text-sm font-semibold text-slate-200">{job}</span>
                <span className="text-[10px] font-mono text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20 font-bold">Apply</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 border-t border-slate-800/80 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold block mb-2">COMMUNICATION NODE</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-white">Get In Touch</h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal">Establish immediate contact channels with our engineering desks.</p>
              </div>
              <div className="space-y-4 font-mono text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="font-sans text-xs sm:text-sm leading-relaxed">Plot No.5, Jerin Villa, Adke Nagar-1, Jaibhavani Road, Nashik Road, Maharashtra 422102</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                  <p>+91 9822971089 / 9764909778</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                  <p>bimconassociates@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 w-full">
              <form className="space-y-5 w-full bg-[#070d1e] border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="text" className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-500 font-normal" placeholder="Corporate Identity / Client Name" required />
                  <input type="email" className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-500 font-normal" placeholder="Email Anchor" required />
                </div>
                <textarea rows={5} className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-500 font-normal" placeholder="Outline specific maintenance parameters or tender cycles..." required></textarea>
                <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold uppercase tracking-widest text-xs sm:text-sm py-5 rounded-xl cursor-pointer transition-transform active:scale-[0.99] shadow-lg shadow-cyan-500/20">
                  Transmit Specifications Node
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#02050e] border-t border-slate-800/80 py-10 text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-slate-300 font-bold tracking-wider mb-1">BIMCON ASSOCIATES</p>
            <p className="text-slate-500 font-sans">ISO 9001:2015 Plant Systems Engineering</p>
          </div>
          <p className="text-center sm:text-right font-sans text-slate-500">© {new Date().getFullYear()} Bimcon Associates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}