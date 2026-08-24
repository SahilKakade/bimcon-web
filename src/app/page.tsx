"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { 
  ArrowUpRight, Wrench, Shield, Target, Eye, 
  CheckCircle2, ShieldAlert, Cpu, ChevronRight, 
  Phone, Mail, MapPin, Activity, Gauge, 
  Building2, Navigation, GraduationCap, UserCheck,
  Briefcase, CheckSquare2, FileText, Send, Layers
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
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
    <span ref={ref} className="font-mono text-3xl sm:text-4xl font-black text-white tracking-tight">
      {current}{value.replace(/[0-9]/g, "")}
    </span>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeJobIndex, setActiveJobIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<null | {
    title: string;
    badge: string;
    desc: string;
    highlights: string[];
    process: string[];
  }>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const yearsExperience = 17;

  const stats = [
    { label: "Projects Completed", value: "250+" },
    { label: "Industrial Clients", value: "40+" },
    { label: "Equipment Restored", value: "400+" },
    { label: "Years Experience", value: `${yearsExperience}+` }
  ];

  const founders = [
    {
      name: "Zachariah C.T",
      role: "Founder",
      degree: "B.E. Mechanical Engineering",
      phone: "+91 9822971089",
      email: "bimconassociates@gmail.com",
      image: "/founders/founder1.jpg"
    },
    {
      name: "Jerin Chirackal",
      role: "Co-Founder & Technical Director",
      degree: "B.E",
      phone: "+91 7066515116",
      email: "bimconassociates@gmail.com",
      image: "/founders/founder2.jpg"
    }
  ];

  const services = [
    { 
      title: "Valves Servicing", 
      badge: "Precision Systems",
      desc: "We give services to all types of valves including Turbine Values (including High Pressure Valves, Intermediate Pressure Valves), Pilot Values, Emergency Stop Valve (ESV), Steam Line Valves, Safety Valves along with Online setting. Tools: Portable Lapping Machine, Seat cutting for Safety valves tools, DP test kit.",
      highlights: ["Online setting available", "Portable Lapping Machine", "Seat cutting for Safety valves", "DP test kit"],
      process: [
        "Isolation and Safety.",
        "Visual Inspection and baseline testing.",
        "Overhaul and Component Servicing.",
        "Reassembly and Calibration.",
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
        "Visual Inspection and baseline testing.",
        "Overhaul and Component Servicing.",
        "Reassembly and Calibration.",
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
        "Visual Inspection and baseline testing.",
        "Overhaul and Component Servicing.",
        "Reassembly and Calibration.",
        "Routine Preventive Maintenance.",
        "Diagnostic & Troubleshooting Testing.",
        "Major Overhaul & Offline Calibration."
      ]
    },
    { 
      title: "Cooler Work", 
      badge: "Heat Transfer",
      desc: "All types including Condensers, Working Oil coolers, Main oil coolers, Lube oil coolers, GTR coolers. Tools: Jetting machines, Bullet machine including all types of bullets, ceramic coating equipments, various size SS rods.",
      highlights: ["Jetting & Bullet machines", "Ceramic coating equipment", "Multi-size SS rods"],
      process: [
        "Isolation and Safety.",
        "Visual Inspection and baseline testing.",
        "Overhaul and Component Servicing.",
        "Reassembly and Calibration.",
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
        "Visual Inspection and baseline testing.",
        "Overhaul and Component Servicing.",
        "Reassembly and Calibration.",
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

  const deploymentCategories = [
    {
      id: "valves-actuators",
      title: "Valves and Actuator Servicing",
      subtitle: "High-Pressure Calibration, Overhauls & In-Situ Remediation",
      cards: [
        {
          title: "HP Control Valves Breakdown Maintenance",
          location: "Bhusawal TPS, Deepnagar",
          spec: "Unit No. 3 (210 MW)",
          desc: "Work of attending breakdown maintenance of HP control valves of T.G. Set UnitNo.3, 210 MW, Bhusawal TPS, Deepnagar.",
          bgImage: "/services/valves/valve-1.jpg"
        },
        {
          title: "In-Situ HP CCI Valves Repair",
          location: "CSTPS, Chandrapur",
          spec: "AOH Unit - 4",
          desc: "Work of In-situ repairing various High Pressure CCI Valves during AOH Unit -4 CSTPS, Chandrapur.",
          bgImage: "/services/valves/valve-2.jpg"
        },
        {
          title: "HP & Safety Valves Servicing & Repair",
          location: "TPS Parli",
          spec: "Unit - 7 AOH (250 MW, BM-1)",
          desc: "Work of Servicing and In-situ repair of HP and safety valves during Unit - 7 AOH at BM-1 250 MW TPS Parli.",
          bgImage: "/services/valves/valve-3.jpg"
        },
        {
          title: "Boiler Safety Valve In-Situ Repair & PC Testing",
          location: "Bhusawal TPS",
          spec: "Unit - 5 (2 X 500 MW)",
          desc: "Work contract for insitu repairs of safety valve & online testing by PC Based S.V. Testing machine in Boiler during annual overhaul of unit - 5 at 2 X 500 MW, Bhusawal TPS.",
          bgImage: "/services/valves/valve-4.jpg"
        },
        {
          title: "Valves, Actuators & AC Plant Capital Overhaul",
          location: "TM-II, NTPS, Eklahare",
          spec: "Unit No. 3 Capital Overhaul",
          desc: "Work contract for servicing of valves, Actuators, AC Plant etc. of Unit No 3 during capital overhaul at TM-II, NTPS, Eklahare.",
          bgImage: "/services/valves/valve-5.jpg"
        }
      ]
    },
    {
      id: "pumps",
      title: "Pumps Servicing",
      subtitle: "Boiler Feed Pumps, CEP Assemblies & TG Auxiliaries Overhauls",
      cards: [
        {
          title: "BFP, CAM Shaft, HPCV & Governing System Works",
          location: "TM-II, NTPS, Eklahare",
          spec: "Turbine Auxiliaries & Condenser",
          desc: "Work contract for maintenance works of BFP, HPT CAM Shaft, HPCV 1 to 4 Emergency stop valve, Governing system Elements and attending condenser tube leakages as & when required at TM-II, NTPS, Eklahare.",
          bgImage: "/services/pumps/pump-1.jpg"
        },
        {
          title: "Condensate Extraction Pump (BHRC-28) Replacement",
          location: "TM-II, NTPS, Eklahare",
          spec: "Units 3, 4 & 5 (Kirloskar Brother Ltd)",
          desc: "Work contract for replacement of Condensate Extraction Pump (BHRC-28, Make Kirloskar Brother Ltd) i.e. Complete Pump Assembly for Unit 3, 4 & 5 as and when required at TM-II, NTPS, Eklahare.",
          bgImage: "/services/pumps/pump-2.jpg"
        },
        {
          title: "Complete Overhauling of CEP (BHRC-28)",
          location: "NTPS, Eklahare, Nashik",
          spec: "Units 3, 4, 5 (210 MW, TM - II)",
          desc: "Work contract for TOP / Complete overhauling of condensate Extraction Pump (BHRC - 28, make- Kirloskar Brother Ltd.) i.e. Complete Pump Assembly at Unit 3,4,5, at TM - II (210 MW), NTPS, Eklahare, Nashik.",
          bgImage: "/services/pumps/pump-3.jpg"
        },
        {
          title: "TG Set & BOP Auxiliaries Pumps Overhaul",
          location: "Wanakbori TPS",
          spec: "800 MW Supercritical Unit AOH",
          desc: "Work of complete overhauling of various pumps Installed for T-G set & BOP auxiliaries at 800 MW Unit of Wanakbori TPS during AOH.",
          bgImage: "/services/pumps/pump-4.jpg"
        }
      ]
    },
    {
      id: "heat-exchangers",
      title: "Heat Exchanger (Cooler) Works",
      subtitle: "Condenser Hydro-Cleaning, Hydrogen Cooler Overhauls & Descaling",
      cards: [
        {
          title: "TG Set Auxiliaries Coolers Cleaning",
          location: "TM-II Nashik TPS, Eklahare",
          spec: "Turbine Auxiliaries Grid",
          desc: "Work contract for cleaning of T.G. set Auxiliaries coolers (as and when required) at TM-II Nashik TPS, Eklahare.",
          bgImage: "/services/coolers/cooler-1.jpg"
        },
        {
          title: "210 MW Generator Hydrogen Cooler Overhaul",
          location: "TM-II, Nashik TPS",
          spec: "Units 3, 4 & 5 AOH",
          desc: "Work of 210 MW Generator Hydrogen cooler cleaning, Repair & Replacement during AOH /Unit 3, 4 & 5 (as & when required ) at TM-II, Nashik TPS.",
          bgImage: "/services/coolers/cooler-2.jpg"
        },
        {
          title: "Condenser & Multi-Cooler Cleaning Cycles",
          location: "TMD-II & III, WTPS",
          spec: "Units 4, 5, 6 & 7",
          desc: "Work of cleaning of Condenser and various cooler of unit -4,5,6 & 7 of at WTPS as & when required basis TMD-II & III WTPS.",
          bgImage: "/services/coolers/cooler-3.jpg"
        }
      ]
    },
    {
      id: "industrial-pipeline",
      title: "Industrial Pipeline Work",
      subtitle: "Large Diameter Headers, Heavy Fabrication & Structural Rigging",
      cards: [
        {
          title: "CW Underground Header Repair (Up to 2700 mm)",
          location: "TM-II NTPS, Eklahare",
          spec: "Units 3, 4 & 5 (2700 mm Dia Pipeline)",
          desc: "Work contract for Repairing & strengthening of CW Underground Header ( Underground Pipeline of size - up to 2700 mm ) at Unit No 3, 4 & 5 at TM-II NTPS, Eklahare.",
          bgImage: "/services/pipelines/pipeline-1.jpg"
        },
        {
          title: "GS Water Header Repair & Replacement (600-750 NB)",
          location: "TM-II NTPS, Eklahare",
          spec: "Units 3, 4 & 5 (600 to 750 NB)",
          desc: "Work contract for repairing / Replacement GS water Header (Pipe Size 600 to 750 NB ) along with material (as & when required ) at Unit No. 3 / 4 /5  TM -II NTPS, Eklahare.",
          bgImage: "/services/pipelines/pipeline-2.jpg"
        },
        {
          title: "Boiler & Turbine Pipeline Load Hangers Servicing",
          location: "GTPS, Uran",
          spec: "Main Steam & Auxiliary Headers",
          desc: "Work of servicing and repair of load hangers and supports of boiler and turbine pipelines at GTPS, Uran.",
          bgImage: "/services/pipelines/pipeline-3.jpg"
        }
      ]
    },
    {
      id: "cooling-towers",
      title: "Cooling Tower Works",
      subtitle: "Fan Dynamic Balancing, CT Gearbox Rigging & Oil Line Alignment",
      cards: [
        {
          title: "CT Fan Gearbox Assembly, Erection & Galvanizing",
          location: "NTPS, Eklahare",
          spec: "Fabrication, Erection & Oil Piping",
          desc: "Work Of assembly of CT Fan gearbox and installation / fitting, Fabrication , Erection, Shifting and Galvanizing of gear box and replacement of oil pipe line at NTPS, Eklahare ( as & when required ).",
          bgImage: "/services/cooling-towers/ct-1.jpg"
        },
        {
          title: "CT Fan Gearbox Installation & Oil Line Overhaul",
          location: "NTPS, Eklahare",
          spec: "Precision Fitting & Dynamic Alignment",
          desc: "Work of assembly of CT fan gearbox and installation/ fitting, of gear box and replacement of oil pipe line at NTPS, Eklahare. (as & when required).",
          bgImage: "/services/cooling-towers/ct-2.jpg"
        }
      ]
    }
  ];

  const careerPositions = [
    {
      title: "Mechanical Engineers",
      type: "Full Time / On-Site",
      experience: "2-5 Years",
      location: "Plant Shutdown Sites",
      description: "Supervise plant overhauls, coordinate precision valve & pump assembly, verify alignment tolerances, and prepare quality inspection dossiers.",
      requirements: ["B.E. / Diploma in Mechanical Engineering", "Experience with steam turbine auxiliaries", "Proficiency in reading mechanical layout blueprints"]
    },
    {
      title: "Plant Supervisors",
      type: "Full Time / Site-Based",
      experience: "3+ Years",
      location: "Maharashtra & Pan-India Sites",
      description: "Manage shift-wise workforce execution, enforce zero-accident safety matrices, and ensure scheduled delivery of mechanical overhauls.",
      requirements: ["Strong hands-on experience in thermal/process plants", "Crew management and task delegation skills", "Safety permit handling knowledge"]
    },
    {
      title: "High-Pressure Welders",
      type: "Contract / Full Time",
      experience: "4+ Years",
      location: "Site Deployments",
      description: "Execute GTAW (TIG) and SMAW (ARC) high-pressure boiler piping welding with zero defect rate under radiography inspection.",
      requirements: ["IBR certified or 6G position qualification", "Experience with CS, SS, and Alloy Steel materials", "Clean track record in non-destructive testing"]
    },
    {
      title: "Fitters & Riggers",
      type: "Full Time / Project-Based",
      experience: "2+ Years",
      location: "Field Units",
      description: "Execute dismantling, overhaul, precise lapping, gasket replacements, and heavy machinery rigging under engineering supervision.",
      requirements: ["ITI in Fitter / Rigger trade", "Familiarity with torque wrenches, dial gauges, and lapping tools", "Ability to work on heights and tight shutdown timelines"]
    },
    {
      title: "Store In-charge",
      type: "Full Time",
      experience: "2-4 Years",
      location: "Central Nashik / Site Units",
      description: "Maintain real-time inventory for specialty overhaul tools, DP kits, PPE gear, consumables, gaskets, and site equipment logistics.",
      requirements: ["Knowledge of mechanical tools & industrial consumables", "Proficiency in inventory logging and stock management", "Good communication and dispatch coordination"]
    },
    {
      title: "Site Technicians",
      type: "Full Time",
      experience: "1-3 Years",
      location: "Multi-State Deployments",
      description: "Assist lead technicians in hydraulic actuator calibration, high-pressure jetting loops, and non-destructive dye penetrant checking.",
      requirements: ["ITI/Diploma qualification", "Technical aptitude in pump and valve mechanism maintenance", "Willingness to travel for plant shutdown projects"]
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#030712] text-slate-100 font-sans antialiased overflow-x-hidden">
        <Navbar />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-300">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(6,182,212,0.12),rgba(0,0,0,0))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl px-5 sm:px-8 mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              className="lg:col-span-7 text-left space-y-6"
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono font-medium text-cyan-300 tracking-wider uppercase">Industrial Engineering Partner</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.12]">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-emerald-400">
                  Reliable Industrial
                </span> <br />
                Solutions
              </h1>
              
              <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl leading-relaxed font-normal text-justify">
                Bimcon Associates, Nashik is one of India&apos;s emerging industrial engineering and maintenance solution providers, delivering comprehensive mechanical maintenance, shutdown execution, fabrication, and project management services.
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

              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 font-mono text-xs text-slate-400">
                <div>
                  <span className="text-white block font-bold">{yearsExperience}+ YEARS</span>
                  <span className="text-[10px] text-slate-500 uppercase">Industry Mastery</span>
                </div>
                <div>
                  <span className="text-cyan-400 block font-bold">250+</span>
                  <span className="text-[10px] text-slate-500 uppercase">Projects Executed</span>
                </div>
                <div>
                  <span className="text-emerald-400 block font-bold">100% SAFE</span>
                  <span className="text-[10px] text-slate-500 uppercase">Zero-Accident Record</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5 bg-[#070d1e] border border-slate-800 p-6 sm:p-8 rounded-2xl relative shadow-2xl overflow-hidden hidden sm:block"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
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

              <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed font-normal text-justify">
                <p>
                  Bimcon Associates, Nashik is one of India&apos;s emerging industrial engineering and maintenance solution providers, delivering comprehensive mechanical maintenance, shutdown execution, fabrication, and project management services to thermal power plants and heavy process industries. Since its establishment in 2009, the company has consistently built a reputation for technical excellence, quality workmanship, and timely project execution.
                </p>
                <p>
                  With extensive practical experience in complex industrial environments, Bimcon Associates specializes in the maintenance and overhauling of critical power plant equipment including all types of valves, pumps including boiler feed pumps (BFPs), condensers, coolers, cooling tower works, piping systems, actuators, gearboxes, compressors, and auxiliary units. Every project is executed by a dedicated team committed to delivering safe, reliable, and cost-effective solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-slate-800/80 pt-8">
                <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                    <Target className="w-5 h-5"/>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wide">Our Mission</h4>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed text-justify">Deliver high-quality engineering and maintenance solutions that improve equipment reliability, reduce downtime, and optimize operational costs.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                    <Eye className="w-5 h-5"/>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wide">Our Vision</h4>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed text-justify">To become India&apos;s leading engineering partner for steam turbines, turbine auxiliaries, and critical industrial process equipment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pure White Counter Numbers */}
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

      {/* Leadership / Founders Section */}
      <section id="leadership" className="py-24 sm:py-32 border-t border-slate-800/80 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold block mb-2">MANAGEMENT</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-white">Founders & Leadership</h2>
            </div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Engineering Technical Backbone</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, idx) => (
              <div 
                key={idx} 
                className="bg-[#070d1e] border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 group"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 flex items-center justify-center shrink-0 overflow-hidden relative shadow-inner">
                  {founder.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-500 group-hover:text-cyan-400 transition-colors">
                      <UserCheck className="w-10 h-10 mb-1" />
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase">EXECUTIVE</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 text-center sm:text-left space-y-3 w-full">
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block font-bold">{founder.role}</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-cyan-300 transition-colors">{founder.name}</h3>
                  </div>

                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-300 font-sans">
                    <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{founder.degree}</span>
                  </div>

                  <div className="pt-3 border-t border-slate-800 space-y-2 text-xs font-mono text-slate-400">
                    <div className="flex items-center justify-center sm:justify-start gap-2.5">
                      <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <a href={`tel:${founder.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-cyan-300 transition-colors">{founder.phone}</a>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <a href={`mailto:${founder.email}`} className="hover:text-cyan-300 transition-colors">{founder.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Core Capabilities (Original Layout with Modal Workflow) */}
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
              <div 
                key={index}
                onClick={() => setSelectedService(srv)}
                className="w-[85vw] max-w-[340px] md:w-full shrink-0 snap-start text-left bg-transparent border-0 p-0 block cursor-pointer outline-none"
              >
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
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal line-clamp-3 text-justify">
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
              </div>
            ))}
          </div>

          <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
            <DialogContent className="bg-[#070d1e] border-slate-800 text-slate-100 max-w-lg rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
              {selectedService && (
                <>
                  <DialogHeader className="pb-2">
                    <div className="inline-block text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">{selectedService.badge}</div>
                    <DialogTitle className="text-cyan-300 font-bold uppercase tracking-wide text-lg sm:text-xl leading-snug">
                      {selectedService.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 space-y-6">
                    <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-justify">
                      {selectedService.desc}
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-4 flex items-center gap-2 font-bold">
                        <Cpu className="w-4 h-4 text-cyan-400"/> Operational Phases & Execution Loops
                      </h4>
                      <div className="space-y-2.5 bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                        {selectedService.process.map((p, idx) => (
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
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Verified Deployments Section (New Categorized Wide Cards Layout) */}
      <section id="projects" className="py-24 sm:py-32 border-t border-slate-800/80 bg-gradient-to-b from-[#030712] to-[#060e20] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="px-5 sm:px-8 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold block mb-2">FIELD PORTFOLIO</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-white">Verified Deployments</h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-400 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> State-Wide Power Plant Shutdown & Maintenance Records
            </p>
          </div>

          <div className="space-y-16">
            {deploymentCategories.map((category, catIdx) => (
              <div key={category.id} className="space-y-4">
                
                {/* Category Heading Banner */}
                <div className="px-5 sm:px-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-md">
                      0{catIdx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black tracking-tight uppercase text-white">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider pl-9 sm:pl-0">
                    {category.subtitle}
                  </span>
                </div>

                {/* Horizontal Scroll on Mobile showing partial next card peek */}
                <div className="w-full overflow-x-auto py-3 px-5 sm:px-8 snap-x snap-mandatory scroll-pl-5 sm:scroll-pl-8 no-scrollbar scroll-smooth flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {category.cards.map((cardItem, cardIdx) => (
                    <div
                      key={cardIdx}
                      className="w-[82vw] min-w-[300px] sm:min-w-[340px] md:w-full shrink-0 snap-start h-[270px] sm:h-[285px]"
                    >
                      <Card className="relative overflow-hidden border border-slate-700/80 hover:border-cyan-400 transition-all duration-300 group h-full rounded-2xl bg-[#091124] flex flex-col justify-between shadow-xl">
                        
                        {/* High Visibility Background Image */}
                        <div 
                          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ 
                            backgroundImage: `url('${cardItem.bgImage}'), radial-gradient(circle at 50% 50%, #1e293b, #030712)` 
                          }}
                        />

                        {/* Top Gradient Overlay */}
                        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950/90 to-transparent z-[1]" />
                        
                        {/* Bottom Gradient Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent z-[1]" />

                        {/* Card Header Row */}
                        <div className="relative z-10 p-4 pb-0 flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-cyan-300 bg-slate-950/90 border border-cyan-500/50 px-2.5 py-0.5 rounded-md uppercase backdrop-blur-md shadow-md">
                            Scope #{cardIdx + 1}
                          </span>
                          <div className="w-6 h-6 rounded-md bg-slate-950/90 border border-slate-700 flex items-center justify-center text-cyan-400 backdrop-blur-md shadow-md">
                            <Layers className="w-3 h-3" />
                          </div>
                        </div>

                        {/* Card Content & Details Block */}
                        <div className="relative z-10 p-4 pt-0 space-y-2">
                          <div className="bg-slate-950/85 backdrop-blur-md p-3 rounded-xl border border-slate-800/80 shadow-md space-y-1">
                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide group-hover:text-cyan-300 transition-colors leading-snug line-clamp-1">
                                {cardItem.title}
                              </h4>
                              <p className="text-[10px] font-mono text-cyan-300 font-semibold truncate">
                                {cardItem.spec}
                              </p>
                            </div>
                            
                            <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed font-normal line-clamp-2 text-justify">
                              {cardItem.desc}
                            </p>
                          </div>

                          <div className="pt-1.5 border-t border-slate-700/60 flex items-center justify-between text-[10px] font-mono text-slate-300">
                            <span className="flex items-center gap-1 text-emerald-400 font-semibold truncate max-w-[190px]">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> {cardItem.location}
                            </span>
                            <span className="text-cyan-400 font-bold shrink-0">Executed</span>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}

                  {/* "And Many More..." Milestone Card */}
                  <div className="w-[82vw] min-w-[300px] sm:min-w-[340px] md:w-full shrink-0 snap-start h-[270px] sm:h-[285px]">
                    <Card className="relative overflow-hidden border border-dashed border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 group h-full rounded-2xl bg-gradient-to-br from-cyan-950/70 via-slate-950 to-slate-900 flex flex-col justify-between shadow-xl p-4 sm:p-5">
                      <div className="space-y-2">
                        <span className="inline-block text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                          Comprehensive Portfolio
                        </span>
                        <h4 className="text-base sm:text-lg font-black uppercase tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                          And Many More...
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed text-justify line-clamp-3">
                          Additional proprietary execution dossiers, emergency breakdown repair logs, and custom shutdown contracts available upon technical request.
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                        <button
                          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                          className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 uppercase tracking-wider font-bold inline-flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          REQUEST DOSSIER <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </Card>
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
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal text-justify">
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
                  <span className="text-white block font-sans font-bold text-sm mb-1">Standardized QA Protocols</span>
                  Quality assurance processes and execution logs systematically verified.
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
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold block mb-2">JOIN OUR ENGINEERING DESK</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-white">Career Opportunities</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal">
              Select an open role to view operational requirements and initiate immediate application channels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              {careerPositions.map((job, idx) => {
                const isActive = activeJobIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveJobIndex(idx)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isActive 
                        ? "bg-[#0b1836] border-cyan-500/60 shadow-lg shadow-cyan-500/10 translate-x-1" 
                        : "bg-[#070d1e] border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isActive ? "bg-cyan-400 text-slate-950" : "bg-slate-800 text-cyan-400"}`}>
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className={`text-sm font-bold uppercase tracking-wide ${isActive ? "text-cyan-300" : "text-white"}`}>
                          {job.title}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-400 block mt-0.5">{job.experience} Exp • {job.type}</span>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-cyan-400 translate-x-1" : "text-slate-600"}`} />
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-7 bg-[#070d1e] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-1">
                    {careerPositions[activeJobIndex].type}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                    {careerPositions[activeJobIndex].title}
                  </h3>
                </div>
                <span className="text-xs font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 w-fit">
                  📍 {careerPositions[activeJobIndex].location}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" /> Role Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal text-justify">
                  {careerPositions[activeJobIndex].description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-3 font-bold flex items-center gap-2">
                  <CheckSquare2 className="w-4 h-4 text-cyan-400" /> Key Prerequisites & Criteria
                </h4>
                <div className="space-y-2">
                  {careerPositions[activeJobIndex].requirements.map((req, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs font-mono text-slate-400">
                  Send CV to: <strong className="text-slate-200">bimconassociates@gmail.com</strong>
                </p>

                <Button 
                  onClick={() => setIsApplyModalOpen(true)}
                  className="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl cursor-pointer shadow-lg shadow-cyan-500/15"
                >
                  Quick Apply for Role <ArrowUpRight className="ml-1.5 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <Dialog open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen}>
            <DialogContent className="bg-[#070d1e] border-slate-800 text-slate-100 max-w-md rounded-2xl p-6 sm:p-8">
              <DialogHeader>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Recruitment Portal</span>
                <DialogTitle className="text-white font-bold uppercase tracking-wide text-lg sm:text-xl">
                  Apply: {careerPositions[activeJobIndex].title}
                </DialogTitle>
              </DialogHeader>

              <form className="space-y-4 mt-4" onSubmit={(e) => { e.preventDefault(); setIsApplyModalOpen(false); alert("Application details transmitted. Our HR team will get in touch shortly."); }}>
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  required 
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  required 
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                />
                <textarea 
                  rows={3} 
                  placeholder="Brief summary of years of experience and core skills..." 
                  required 
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                />
                <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold uppercase tracking-wider text-xs py-3 rounded-xl">
                  Submit Application Data <Send className="w-3.5 h-3.5 ml-2" />
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 sm:py-32 border-t border-slate-800/80 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold block mb-2">HEADQUARTERS</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-white">Office Location</h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-400 flex items-center gap-2">
              <Navigation className="w-4 h-4 text-cyan-400" /> Nashik Road, Maharashtra, India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-8 bg-[#070d1e] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative min-h-[380px] sm:min-h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3750.355466702035!2d73.82327767522773!3d19.951547781441825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDU3JzA1LjYiTiA3M8KwNDknMzMuMSJF!5e0!3m2!1sen!2sin!4v1785665192980!5m2!1sen!2sin" 
                className="w-full h-full border-0 absolute inset-0 filter invert contrast-125 grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Bimcon Associates Office Location"
              />
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-[#070d1e] to-slate-950 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-xl space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base uppercase tracking-wide">Nashik Desk</h3>
                    <p className="text-xs font-mono text-cyan-400">Central Operations Node</p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <p className="leading-relaxed font-sans">
                      Plot No.5, Jerin Villa, Adke Nagar-1, Jaibhavani Road, Nashik Road, Maharashtra 422102
                    </p>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <p>+91 9822971089 / 9764909778</p>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <p>bimconassociates@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80">
                <a 
                  href="https://maps.google.com/?q=19.951547781441825,73.82327767522773" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 hover:text-white font-mono text-xs font-bold py-3.5 px-4 rounded-xl transition-colors uppercase tracking-wider gap-2"
                >
                  GET DIRECTIONS <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 border-t border-slate-800/80 bg-gradient-to-b from-[#030712] to-[#060e20]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold block mb-2">COMMUNICATION NODE</span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">Get In Touch</h2>
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
            <p className="text-slate-500 font-sans">Mechanical Engineering & Plant Maintenance Services</p>
          </div>
          <p className="text-center sm:text-right font-sans text-slate-500">
            © 2026 Bimcon Associates. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}