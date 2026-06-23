"use client";

import React from "react";
import Link from "next/link";
import { 
  IconUsers, 
  IconPlus, 
  IconActivity, 
  IconBook, 
  IconUser, 
  IconAlertTriangle 
} from "@tabler/icons-react";

export default function DashboardMainPage() {
  // Data Dummy untuk Aktivitas Terbaru
  const aktivitasTerbaru = [
    { nama: "Ahmad Fauzan", umur: "14 Bulan", aksi: "Baru saja diukur oleh Bidan", waktu: "5 menit yang lalu", status: "Normal" },
    { nama: "Siti Aminah", umur: "24 Bulan", aksi: "Pemberian Makanan Tambahan (PMT)", waktu: "1 jam yang lalu", status: "Waspada" },
    { nama: "Budi Santoso", umur: "8 Bulan", aksi: "Pendaftaran Balita Baru", waktu: "3 jam yang lalu", status: "Normal" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* 1. WELCOME BANNER */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Selamat Datang, Admin! 👋</h1>
            <p className="text-blue-100 mt-2 text-sm md:text-base max-w-xl">
              Sistem Monitoring Stunting siap digunakan. Hari ini ada <span className="font-bold underline">12 jadwal posyandu</span> yang perlu ditinjau.
            </p>
          </div>
          {/* Shortcut Tombol Input Data Anak (Sesuai Sitemap kamu) */}
          <Link 
            href="/dashboard/data-anak/input" // Nanti disesuaikan rutenya
            className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-5 py-3 rounded-xl hover:bg-blue-50 transition shadow-md text-sm"
          >
            <IconPlus size={18} /> Input Pengukuran Baru
          </Link>
        </div>

        {/* 2. MINI STATS (Sekilas Info) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><IconUsers size={24} /></div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase">Total Balita Terdata</p>
              <h3 className="text-2xl font-bold text-slate-800">142 Anak</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-red-50 rounded-xl text-red-600"><IconAlertTriangle size={24} /></div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase">Butuh Intervensi Gizi</p>
              <h3 className="text-2xl font-bold text-red-600">6 Anak</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600"><IconActivity size={24} /></div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase">Sudah Diukur Bulan Ini</p>
              <h3 className="text-2xl font-bold text-emerald-600">89% Selesai</h3>
            </div>
          </div>
        </div>

        {/* 3. DUA KOLOM: AKTIVITAS TERBARU & AKSES CEPAT SITEMAP */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Kiri (Lebar): Log Aktivitas Terkini */}
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <IconActivity className="text-blue-600" size={20} /> Aktivitas Posyandu Terkini
              </h2>
              <span className="text-xs text-blue-600 font-semibold cursor-pointer hover:underline">Lihat Semua</span>
            </div>

            <div className="divide-y divide-slate-100">
              {aktivitasTerbaru.map((log, idx) => (
                <div key={idx} className="py-4 first:pt-0 last:pb-0 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-700 text-sm">{log.nama} <span className="text-xs font-normal text-slate-400">({log.umur})</span></h4>
                    <p className="text-xs text-slate-500 mt-0.5">{log.aksi}</p>
                    <span className="text-[10px] text-slate-400 block mt-1">{log.waktu}</span>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                    log.status === "Normal" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                  }`}>
                    {log.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan (Kecil): Menu Terpintas Berdasarkan Gambar Sitemap-mu */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4">Navigasi Cepat</h2>
              <div className="space-y-3">
                <Link href="/dashboard/statistik" className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-all font-medium text-sm">
                  <div className="flex items-center gap-3">
                    <IconActivity size={18} /> <span>Statistik Gizi Anak</span>
                  </div>
                  <span className="text-xs text-slate-400">→</span>
                </Link>

                <Link href="/dashboard/grafik" className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 transition-all font-medium text-sm">
                  <div className="flex items-center gap-3">
                    <IconActivity size={18} /> <span>Grafik Pertumbuhan KMS</span>
                  </div>
                  <span className="text-xs text-slate-400">→</span>
                </Link>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 text-slate-400 font-medium text-sm opacity-60">
                  <div className="flex items-center gap-3">
                    <IconBook size={18} /> <span>Artikel Edukasi (Segera)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-400">
              <IconUser size={14} /> Logged in as Operator Posyandu
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}