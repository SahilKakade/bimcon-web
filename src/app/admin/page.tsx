"use client";
export const dynamic = "force-dynamic";

import React, { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  RefreshCw, Briefcase, Mail, Phone, Calendar, 
  Lock, Trash2, Search, ArrowLeft, ShieldCheck, Inbox
} from "lucide-react";
import Link from "next/link";

interface CareerApp {
  id: string;
  created_at: string;
  job_title: string;
  full_name: string;
  phone: string;
  email: string;
  summary: string;
}

interface Inquiry {
  id: string;
  created_at: string;
  client_name: string;
  email: string;
  message: string;
}

export default function AdminPortal() {
  const [passkey, setPasskey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"careers" | "inquiries">("careers");
  const [searchQuery, setSearchQuery] = useState("");
  
  const [careerApps, setCareerApps] = useState<CareerApp[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const authenticate = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === "bimcon2026") {
      setIsAuthenticated(true);
      fetchData();
    } else {
      alert("Access Denied: Invalid Security Key");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const [careersRes, inqsRes] = await Promise.all([
      supabase.from("career_applications").select("*").order("created_at", { ascending: false }),
      supabase.from("contact_inquiries").select("*").order("created_at", { ascending: false })
    ]);

    if (careersRes.data) setCareerApps(careersRes.data);
    if (inqsRes.data) setInquiries(inqsRes.data);
    setLoading(false);
  };

  const handleDelete = async (table: "career_applications" | "contact_inquiries", id: string) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    
    setDeletingId(id);
    const { error } = await supabase.from(table).delete().eq("id", id);
    
    if (error) {
      alert("Delete failed: " + error.message);
    } else {
      if (table === "career_applications") {
        setCareerApps((prev) => prev.filter((item) => item.id !== id));
      } else {
        setInquiries((prev) => prev.filter((item) => item.id !== id));
      }
    }
    setDeletingId(null);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const filteredCareers = careerApps.filter(
    (app) =>
      app.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.job_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInquiries = inquiries.filter(
    (inq) =>
      inq.client_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#030712] text-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#070d1e] border border-slate-800 rounded-2xl p-8 shadow-2xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black uppercase text-white tracking-wide">Bimcon Console</h2>
              <p className="text-xs font-mono text-cyan-400">Restricted Access Portal</p>
            </div>
          </div>

          <form onSubmit={authenticate} className="space-y-4">
            <div>
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Master Passkey</label>
              <input
                type="password"
                placeholder="Enter access code..."
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                required
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold uppercase text-xs tracking-wider py-5 rounded-xl cursor-pointer">
              Decrypt & Enter <ShieldCheck className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="text-[11px] font-mono text-slate-500 text-center">
            Default passkey: <span className="text-cyan-400">bimcon2026</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans p-5 sm:p-8 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold block">Internal Control Node</span>
              <h1 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">Transmission Database</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              onClick={fetchData} 
              variant="outline" 
              size="sm" 
              className="border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white px-4 py-5 text-xs font-mono tracking-wider uppercase rounded-xl cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 mr-2 ${loading ? "animate-spin text-cyan-400" : ""}`} /> Refresh
            </Button>
            <Button 
              onClick={() => setIsAuthenticated(false)} 
              variant="outline" 
              size="sm" 
              className="border-red-500/30 bg-red-950/20 hover:bg-red-900/40 text-red-400 px-4 py-5 text-xs font-mono tracking-wider uppercase rounded-xl cursor-pointer"
            >
              Lock Node
            </Button>
          </div>
        </div>

        {/* Tab Selection & Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab("careers")}
              className={`px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "careers"
                  ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              Job Applications ({careerApps.length})
            </button>
            <button
              onClick={() => setActiveTab("inquiries")}
              className={`px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "inquiries"
                  ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              Client Inquiries ({inquiries.length})
            </button>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* List Content */}
        {activeTab === "careers" ? (
          filteredCareers.length === 0 ? (
            <div className="text-center py-20 bg-[#070d1e] border border-slate-800/80 rounded-2xl">
              <Inbox className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">No Applications Received</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCareers.map((app) => (
                <div key={app.id} className="bg-[#070d1e] border border-slate-800 hover:border-slate-700 transition-colors rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3 border-b border-slate-800/80 pb-3">
                      <div>
                        <h3 className="font-bold text-white text-base uppercase tracking-wide">{app.full_name}</h3>
                        <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 mt-1">
                          <Briefcase className="w-3.5 h-3.5 shrink-0" /> {app.job_title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 shrink-0">
                        <Calendar className="w-3 h-3" /> {new Date(app.created_at).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs font-mono text-slate-300">
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <a href={`mailto:${app.email}`} className="hover:text-cyan-300 truncate">{app.email}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <a href={`tel:${app.phone}`} className="hover:text-cyan-300">{app.phone}</a>
                      </div>
                    </div>

                    <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/60 text-xs text-slate-300 leading-relaxed font-sans text-justify">
                      {app.summary}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500">ID: {app.id.slice(0, 8)}</span>
                    <button
                      onClick={() => handleDelete("career_applications", app.id)}
                      disabled={deletingId === app.id}
                      className="text-red-400 hover:text-red-300 text-xs font-mono uppercase flex items-center gap-1 transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          filteredInquiries.length === 0 ? (
            <div className="text-center py-20 bg-[#070d1e] border border-slate-800/80 rounded-2xl">
              <Inbox className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">No Client Inquiries Logged</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredInquiries.map((inq) => (
                <div key={inq.id} className="bg-[#070d1e] border border-slate-800 hover:border-slate-700 transition-colors rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3 border-b border-slate-800/80 pb-3">
                      <div>
                        <h3 className="font-bold text-white text-base uppercase tracking-wide">{inq.client_name}</h3>
                        <a href={`mailto:${inq.email}`} className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1.5 mt-1">
                          <Mail className="w-3.5 h-3.5 shrink-0" /> {inq.email}
                        </a>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 shrink-0">
                        <Calendar className="w-3 h-3" /> {new Date(inq.created_at).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/60 text-xs text-slate-300 leading-relaxed font-sans text-justify">
                      {inq.message}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500">ID: {inq.id.slice(0, 8)}</span>
                    <button
                      onClick={() => handleDelete("contact_inquiries", inq.id)}
                      disabled={deletingId === inq.id}
                      className="text-red-400 hover:text-red-300 text-xs font-mono uppercase flex items-center gap-1 transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}