"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Baby, ChevronDown, BarChart3, LineChart, Home, LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State untuk mengontrol dropdown menu "Monitoring"
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* NAVBAR ATAS (Gaya seperti SIAM Universitas Mulia) */}
      <nav className="bg-slate-900 text-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo & Judul Aplikasi */}
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Baby size={20} />
              </div>
              <span className="font-bold text-lg tracking-wider hidden sm:block">
                MONITORING STUNTING
              </span>
            </div>

            {/* Menu Navigasi Utama */}
            <div className="flex items-center gap-2 h-full">
              
              <Link 
                href="/dashboard" 
                className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-slate-800 text-sm font-medium transition-colors"
              >
                <Home size={16} /> DASHBOARD
              </Link>

              {/* Menu Dropdown yang Beranak ke Bawah */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button 
                  className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-slate-800 text-sm font-medium transition-colors focus:outline-none"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  📊 FITUR MONITORING <ChevronDown size={14} />
                </button>

                {/* Anak Menu Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute top-[calc(100%-8px)] left-0 w-52 bg-slate-800 rounded-md shadow-xl py-2 border border-slate-700 animate-in fade-in slide-in-from-top-5 duration-200">
                    <Link 
                      href="/dashboard/statistik"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-200 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <BarChart3 size={16} /> Statistik Data
                    </Link>
                    <Link 
                      href="/dashboard/grafik"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-200 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <LineChart size={16} /> Grafik Pertumbuhan
                    </Link>
                  </div>
                )}
              </div>

            </div>

            {/* Tombol Logout */}
            <div>
              <Link 
                href="/" 
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-600 hover:bg-red-700 text-xs font-semibold uppercase transition-colors"
              >
                <LogOut size={14} /> Keluar
              </Link>
            </div>

          </div>
        </div>
      </nav>

      {/* Konten Halaman akan otomatis muncul di bawah sini */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}