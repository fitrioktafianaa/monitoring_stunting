"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Users, AlertTriangle, CheckCircle, Activity, Info } from "lucide-react";

// Data Dummy untuk Ringkasan Gizi Balita
const dataStatusGizi = [
  { name: "Gizi Baik (Normal)", value: 110, color: "#10b981" },     // Emerald
  { name: "Gizi Kurang (Waspada)", value: 12, color: "#f59e0b" },   // Amber
  { name: "Terindikasi Stunting", value: 6, color: "#ef4444" },     // Red
];

export default function StatistikPage() {
  // Hitung total balita secara dinamis dari data di atas
  const totalBalita = dataStatusGizi.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Halaman */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Statistik Data Anak</h1>
          <p className="text-slate-500 mt-1">
            Menganalisis angka status gizi dan kondisi stunting balita bulan ini.
          </p>
        </div>

        {/* SECTION 1: CARD RINGKASAN ANGKA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Balita */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Balita</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">{totalBalita}</h3>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
              <Users size={24} />
            </div>
          </div>

          {/* Gizi Baik */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gizi Baik</p>
              <h3 className="text-3xl font-bold text-emerald-600 mt-1">110</h3>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
              <CheckCircle size={24} />
            </div>
          </div>

          {/* Gizi Kurang */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gizi Kurang</p>
              <h3 className="text-3xl font-bold text-amber-500 mt-1">12</h3>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl text-amber-500">
              <Activity size={24} />
            </div>
          </div>

          {/* Terindikasi Stunting */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Stunting</p>
              <h3 className="text-3xl font-bold text-red-600 mt-1">6</h3>
            </div>
            <div className="p-3 bg-red-50 rounded-xl text-red-600">
              <AlertTriangle size={24} />
            </div>
          </div>
        </div>

        {/* SECTION 2: GRAFIK PIE & DETAIL PERSENTASE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Kiri: Visualisasi Grafik Lingkaran */}
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center">
            <h2 className="text-lg font-bold text-slate-800 self-start mb-4">
              Persentase Status Gizi Keseluruhan
            </h2>
            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataStatusGizi}
                    cx="50%"
                    cy="50%"
                    innerRadius={60} // Membuat efek Donut Chart agar lebih modern
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {dataStatusGizi.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} Anak`} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Kolom Kanan: Informasi & Edukasi Singkat */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 mb-4">
                <Info size={24} />
                <h3 className="text-lg font-bold">Catatan Evaluasi</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Mayoritas balita berada pada kategori <span className="text-emerald-400 font-semibold">Gizi Baik (Normal)</span>. 
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Namun, perhatian khusus harus tetap diberikan pada <span className="text-red-400 font-semibold">6 anak</span> yang terindikasi stunting melalui program pemberian makanan tambahan (PMT).
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-400">
              Terakhir diperbarui: Just now
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}