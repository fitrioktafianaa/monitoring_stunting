"use client";

import React from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from "recharts";
import { LineChart as ChartIcon, Info, TrendingUp } from "lucide-react";

// Data Dummy Tren Pertumbuhan Bulanan (Rata-rata)
const dataPertumbuhan = [
  { bulan: "Jan", tinggi: 65, berat: 7.2 },
  { bulan: "Feb", tinggi: 68, berat: 7.8 },
  { bulan: "Mar", tinggi: 72, berat: 8.5 },
  { bulan: "Apr", tinggi: 75, berat: 9.1 },
  { bulan: "Mei", tinggi: 79, berat: 9.8 },
  { bulan: "Jun", tinggi: 82, berat: 10.5 },
];

export default function GrafikPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Halaman */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <ChartIcon className="text-emerald-500" /> Grafik Pertumbuhan Anak
            </h1>
            <p className="text-slate-500 mt-1">
              Memantau kurva tren perkembangan rata-rata tinggi badan dan berat badan balita.
            </p>
          </div>
          
          {/* Badge Indikator Status Tren */}
          <div className="self-start sm:self-center flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
            <TrendingUp size={16} /> Tren Bulan Ini: Positif (Naik)
          </div>
        </div>

        {/* CONTAINER UTAMA GRAFIK */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 mb-8">
          <div className="h-112.5 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={dataPertumbuhan}
                margin={{ top: 10, right: 20, left: -20, bottom: 0 }}
              >
                {/* Definisi Warna Gradien */}
                <defs>
                  <linearGradient id="colorTinggi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorBerat" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                
                {/* Grid Belakang Grafik */}
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                
                {/* Sumbu X (Bulan) & Sumbu Y (Angka) */}
                <XAxis dataKey="bulan" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 13 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 13 }} />
                
                {/* Tooltip saat grafik di-hover */}
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' 
                  }} 
                />
                
                {/* Legenda Grafik */}
                <Legend verticalAlign="top" height={40} iconType="circle" />
                
                {/* Area Grafik Tinggi Badan */}
                <Area 
                  type="monotone" 
                  name="Rata-rata Tinggi (cm)" 
                  dataKey="tinggi" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorTinggi)" 
                />
                
                {/* Area Grafik Berat Badan */}
                <Area 
                  type="monotone" 
                  name="Rata-rata Berat (kg)" 
                  dataKey="berat" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorBerat)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* INFO BOX / KETERANGAN MEDIS */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 flex gap-4 items-start text-amber-800">
          <Info size={24} className="shrink-0 mt-0.5 text-amber-600" />
          <div>
            <h4 className="font-bold text-base mb-1">Cara Membaca Grafik Kurva</h4>
            <p className="text-sm text-amber-700 leading-relaxed">
              Pastikan grafik terus bergerak naik setiap bulannya mengikuti standar KMS (Kartu Menuju Sehat). Jika kurva pertumbuhan terlihat mendatar atau bahkan menurun selama 2 bulan berturut-turut, sistem akan memberikan sinyal peringatan kepada petugas Posyandu untuk tindakan intervensi gizi lebih lanjut.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}