"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  IconChartBar, 
  IconTrendingUp, 
  IconSearch,
  IconStethoscope,
  IconClock
} from '@tabler/icons-react';

const daftarAnak = [
  { id: 'dina', nama: 'Dina Mariana', usia: '18 Bulan', posyandu: 'Posyandu Sepinggan', status: 'Stunting' },
  { id: 'bagas', nama: 'Bagas Dwi', usia: '24 Bulan', posyandu: 'Puskesmas Manggar', status: 'Gizi Kurang' },
  { id: 'siti', nama: 'Siti Aisyah', usia: '12 Bulan', posyandu: 'Posyandu Klandasan', status: 'Stunting' },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'statistik' | 'grafik'>('statistik');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = daftarAnak.filter((anak) =>
    anak.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="mx-auto max-w-6xl px-4 md:px-6 mt-8">
      
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Ringkasan Pemantauan</h1>
        <p className="text-slate-500 mt-1">Pantau statistik status gizi dan grafik pertumbuhan balita.</p>
      </div>

      <div className="flex gap-3 mb-6 border-b border-slate-200 pb-px">
        <button onClick={() => setActiveTab('statistik')} className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab === 'statistik' ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
          <IconChartBar size={20} /> Data Statistik
        </button>
        <button onClick={() => setActiveTab('grafik')} className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab === 'grafik' ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
          <IconTrendingUp size={20} /> Grafik Pertumbuhan
        </button>
      </div>

      {activeTab === 'statistik' && (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><span className="text-sm text-slate-500">Total Balita</span><p className="text-3xl font-black">1,245</p></div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><span className="text-sm text-slate-500">Gizi Normal</span><p className="text-3xl font-black text-emerald-600">1,080</p></div>
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200 shadow-sm"><span className="text-sm text-red-600">Stunting</span><p className="text-3xl font-black text-red-600">85</p></div>
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 shadow-sm"><span className="text-sm text-amber-600">Gizi Kurang</span><p className="text-3xl font-black text-amber-600">80</p></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tabel Prioritas */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-bold text-slate-900">Perhatian Khusus</h3>
                <div className="relative w-48">
                  <IconSearch className="absolute left-2 top-2 text-slate-400" size={16} />
                  <input placeholder="Cari..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-8 pr-2 py-1 rounded-md border border-slate-300 text-xs" />
                </div>
              </div>
              <table className="w-full text-left divide-y divide-slate-100">
                <tbody className="divide-y divide-slate-100">
                {filteredData.map((anak) => (
                  <tr key={anak.id} className="hover:bg-slate-50">
                    <td className="p-3 font-bold">{anak.nama}</td>
                    <td className="p-3 text-sm text-slate-500">{anak.posyandu}</td>
                    <td className="p-3 text-right">
                      <Link href={`/dashboard/detail/${anak.id}`} className="px-3 py-1 text-xs font-bold text-blue-600 bg-blue-50 rounded-md hover:bg-blue-600 hover:text-white transition">Detail</Link>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>

            {/* Aktivitas Sistem */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <h3 className="font-bold text-slate-900 mb-4">Aktivitas Sistem</h3>
              <div className="flex gap-4 mb-4">
                <div className="bg-blue-100 p-2 rounded-full h-fit"><IconStethoscope size={18} className="text-blue-600"/></div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Data pengukuran ditambahkan</p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><IconClock size={14}/> 2 Jam yang lalu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

     {activeTab === 'grafik' && (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
    <h3 className="text-lg font-bold text-slate-900 mb-6">Grafik Kasus Stunting di Balikpapan (2026)</h3>
    <div className="flex items-end gap-4 h-64 w-full border-b border-l border-slate-200 p-4 pt-0">
      {[
        { bln: 'Jan', val: 95 }, { bln: 'Feb', val: 90 }, { bln: 'Mar', val: 88 }, 
        { bln: 'Apr', val: 88 }, { bln: 'Mei', val: 86 }, { bln: 'Jun', val: 85 }
      ].map((data, index) => (
        <div key={index} className="flex-1 flex flex-col items-center justify-end gap-2 h-full group relative">
          {/* Teks angka yang muncul saat di-hover */}
          <span className="absolute -top-8 text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {data.val}
          </span>
          
          {/* Batang Grafik dengan cursor-pointer */}
          <div 
            className="w-full bg-blue-500 rounded-t-sm transition-all group-hover:bg-blue-600 cursor-pointer" 
            style={{ height: `${data.val}%` }}
          ></div>
          
          <span className="text-xs font-medium text-slate-400">{data.bln}</span>
        </div>
            ))}
          </div>
          <p className="text-xs text-center text-slate-400 mt-6 italic">*Arahkan kursor ke batang grafik untuk melihat detail angka.</p>
        </div>
        )}
    </main>
  );
}