"use client";

import React from 'react';
import { IconBabyCarriage, IconRuler, IconScale, IconActivity, IconCalendarEvent } from '@tabler/icons-react';

export default function ParentDashboard() {
  // Simulasi data pertumbuhan anak
  const anak = {
    nama: "Dina Mariana",
    usia: "18 Bulan",
    statusGizi: "Normal",
    dataBB: [8.2, 8.8, 9.2, 9.5, 9.8, 10.2], // kg
    dataTB: [72, 74, 76, 78, 80, 81.5],    // cm
  };

  const renderBar = (data: number[], color: string, scale: (val: number) => number) => (
    <svg viewBox="0 0 300 150" className="w-full h-40">
      {data.map((val, i) => (
        <rect
          key={i}
          x={i * 50 + 10}
          y={150 - scale(val)}
          width="30"
          height={scale(val)}
          fill={color}
          rx="4"
          className="hover:opacity-80 transition-opacity"
        />
      ))}
    </svg>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 animate-in fade-in duration-500">
      
      {/* 1. Bagian Identitas Anak */}
      <div className="bg-blue-500 p-8 rounded-3xl text-white shadow-xl mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="bg-white/20 p-4 rounded-2xl">
            <IconBabyCarriage size={48} />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{anak.nama}</h1>
            <p className="text-blue-100 font-medium">Anak Anda • {anak.usia}</p>
          </div>
        </div>
        <div className="bg-white/10 px-6 py-3 rounded-2xl border border-white/20 text-center">
          <p className="text-xs uppercase font-bold text-blue-100">Status Gizi</p>
          <p className="text-2xl font-black">{anak.statusGizi}</p>
        </div>
      </div>

      {/* Grid untuk Grafik */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Grafik Berat Badan */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-sm mb-4 flex items-center gap-2"><IconScale className="text-blue-500" />Berat Badan (kg)</h3>
          {renderBar(anak.dataBB, "#3b82f6", (v) => v * 12)}
        </div>

        {/* Grafik Tinggi Badan */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-sm mb-4 flex items-center gap-2"><IconRuler className="text-emerald-500" />Tinggi Badan (cm)</h3>
          {renderBar(anak.dataTB, "#A7BFAF", (v) => (v - 60) * 8)}
        </div>
      </div>

      {/* 3. Info Singkat */}
      <div className="mt-8 bg-white p-6 rounded-2xl border border-slate-200 flex gap-4 items-center">
        <IconActivity className="text-blue-500" size={32} />
        <div>
          <h4 className="font-bold text-sm">Pertumbuhan Stabil</h4>
          <p className="text-xs text-slate-500">Berat dan tinggi badan Dina naik secara konsisten setiap bulannya. Pertahankan asupan nutrisinya!</p>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
    <h3 className="font-bold text-blue-900 flex items-center gap-2 mb-4 text-sm">
      <IconCalendarEvent size={18} /> Jadwal Posyandu Anda
    </h3>
    <div className="flex gap-4">
      <div className="flex-1 bg-white p-3 rounded-xl border border-blue-200">
        <p className="text-[9px] uppercase font-bold text-slate-400">Lokasi</p>
        <p className="text-xs font-bold text-slate-800">Posyandu Mawar</p>
      </div>
      <div className="flex-1 bg-white p-3 rounded-xl border border-blue-200">
        <p className="text-[9px] uppercase font-bold text-slate-400">Waktu</p>
        <p className="text-xs font-bold text-slate-800">Tgl 15 tiap bulan</p>
      </div>
    </div>
  </div>
    </div>
    
    
  );
}