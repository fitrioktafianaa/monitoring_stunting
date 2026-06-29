"use client";

import React from 'react';
import Link from 'next/link';
import {
  IconBabyCarriage,
  IconRuler,
  IconScale,
  IconActivity,
  IconCalendarEvent,
  IconTrendingUp,
  IconTrendingDown,
  IconHeart,
  IconAlertTriangle,
  IconBook,
  IconChevronRight,
  IconClock,
  IconHeartbeat,
  IconThermometer
} from '@tabler/icons-react';
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area
} from 'recharts';

const dataAnak = {
  nama: "Dina Mariana",
  usia: "18 Bulan",
  posyandu: "Posyandu Sepinggan",
  statusGizi: "Normal",
  zScoreBB: -0.8,
  zScoreTB: -1.2,
  bbTerkini: 10.2,
  tbTerkini: 81.5,
  persentil: 45,
  beratBadan: 10.2,
  tinggiBadan: 81.5,
  tekananDarah: "90/60",
  detakJantung: 110,
  suhu: 36.5,
  tanggalPemeriksaan: "15 Maret 2026"
};

const dataGrafikBB = [
  { bulan: 'Okt', bb: 8.2, standar: 8.5 },
  { bulan: 'Nov', bb: 8.8, standar: 9.0 },
  { bulan: 'Des', bb: 9.2, standar: 9.4 },
  { bulan: 'Jan', bb: 9.5, standar: 9.7 },
  { bulan: 'Feb', bb: 9.8, standar: 10.0 },
  { bulan: 'Mar', bb: 10.2, standar: 10.3 }
];

const dataGrafikTB = [
  { bulan: 'Okt', tb: 72, standar: 74 },
  { bulan: 'Nov', tb: 74, standar: 75.5 },
  { bulan: 'Des', tb: 76, standar: 77 },
  { bulan: 'Jan', tb: 78, standar: 78.5 },
  { bulan: 'Feb', tb: 80, standar: 80 },
  { bulan: 'Mar', tb: 81.5, standar: 81.2 }
];

const riwayatPengukuran = [
  { tanggal: '15 Mar 2026', bb: 10.2, tb: 81.5, status: 'Normal', zScore: '-0.8' },
  { tanggal: '15 Feb 2026', bb: 9.8, tb: 80.0, status: 'Normal', zScore: '-0.9' },
  { tanggal: '15 Jan 2026', bb: 9.5, tb: 78.0, status: 'Normal', zScore: '-1.0' },
  { tanggal: '15 Des 2025', bb: 9.2, tb: 76.0, status: 'Normal', zScore: '-1.1' },
  { tanggal: '15 Nov 2025', bb: 8.8, tb: 74.0, status: 'Kurang', zScore: '-1.5' }
];

const tipsNutrisi = [
  {
    judul: "Perbanyak Protein Hewani",
    deskripsi: "Berikan ikan, telur, atau daging minimal 2x sehari untuk mendukung pertumbuhan otot dan tubuh.",
    icon: <IconHeart size={20} className="text-red-500" />
  },
  {
    judul: "Variasi Sayur & Buah",
    deskripsi: "Sertakan sayuran hijau dan buah-buahan setiap makan untuk asupan vitamin dan mineral.",
    icon: <IconActivity size={20} className="text-emerald-500" />
  }
];

export default function ParentDashboard() {
  const getTrend = (current: number, previous: number) => {
    return current > previous;
  };

  return (
    <main className="px-6 md:px-10 py-8 animate-in fade-in duration-500">

      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-8 rounded-3xl text-white shadow-xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <IconBabyCarriage size={48} />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{dataAnak.nama}</h1>
              <p className="text-blue-100 font-medium mt-1">
                {dataAnak.usia} • {dataAnak.posyandu}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/15 px-6 py-4 rounded-2xl backdrop-blur-sm border border-white/20">
              <p className="text-[10px] uppercase font-bold text-blue-200">Status Gizi</p>
              <p className="text-2xl font-black mt-1">{dataAnak.statusGizi}</p>
            </div>
            <div className="bg-white/15 px-6 py-4 rounded-2xl backdrop-blur-sm border border-white/20">
              <p className="text-[10px] uppercase font-bold text-blue-200">Persentil</p>
              <p className="text-2xl font-black mt-1">{dataAnak.persentil}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-blue-100 p-2 rounded-xl">
              <IconScale size={20} className="text-blue-600" />
            </div>
            <div className={`flex items-center gap-1 text-xs font-bold ${getTrend(dataAnak.bbTerkini, dataGrafikBB[4].bb) ? 'text-emerald-600' : 'text-red-500'}`}>
              {getTrend(dataAnak.bbTerkini, dataGrafikBB[4].bb) ? (
                <IconTrendingUp size={14} />
              ) : (
                <IconTrendingDown size={14} />
              )}
              {((dataAnak.bbTerkini - dataGrafikBB[4].bb) / dataGrafikBB[4].bb * 100).toFixed(1)}%
            </div>
          </div>
          <p className="text-xs text-slate-500 font-medium">Berat Badan</p>
          <p className="text-2xl font-black text-slate-800 mt-1">{dataAnak.bbTerkini} <span className="text-sm font-bold text-slate-400">kg</span></p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-emerald-100 p-2 rounded-xl">
              <IconRuler size={20} className="text-emerald-600" />
            </div>
            <div className={`flex items-center gap-1 text-xs font-bold ${getTrend(dataAnak.tbTerkini, dataGrafikTB[4].tb) ? 'text-emerald-600' : 'text-red-500'}`}>
              {getTrend(dataAnak.tbTerkini, dataGrafikTB[4].tb) ? (
                <IconTrendingUp size={14} />
              ) : (
                <IconTrendingDown size={14} />
              )}
              +{((dataAnak.tbTerkini - dataGrafikTB[4].tb)).toFixed(1)} cm
            </div>
          </div>
          <p className="text-xs text-slate-500 font-medium">Tinggi Badan</p>
          <p className="text-2xl font-black text-slate-800 mt-1">{dataAnak.tbTerkini} <span className="text-sm font-bold text-slate-400">cm</span></p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-violet-100 p-2 rounded-xl">
              <IconActivity size={20} className="text-violet-600" />
            </div>
          </div>
          <p className="text-xs text-slate-500 font-medium">Z-Score BB</p>
          <p className="text-2xl font-black text-slate-800 mt-1">{dataAnak.zScoreBB}</p>
          <p className="text-[10px] text-slate-400 mt-1">Standar WHO</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-amber-100 p-2 rounded-xl">
              <IconActivity size={20} className="text-amber-600" />
            </div>
          </div>
          <p className="text-xs text-slate-500 font-medium">Z-Score TB</p>
          <p className="text-2xl font-black text-slate-800 mt-1">{dataAnak.zScoreTB}</p>
          <p className="text-[10px] text-slate-400 mt-1">Standar WHO</p>
        </div>
      </div>

      {/* Grafik Pertumbuhan */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Grafik Berat Badan */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <IconScale className="text-blue-500" size={20} /> Berat Badan (kg)
            </h3>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+4.0%</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataGrafikBB} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBB" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="bulan" tick={{ fontSize: 12, fill: '#94a3b8' }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} tickLine={false} axisLine={false} domain={[7, 12]} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value, name) => [`${value} kg`, name === 'bb' ? 'Anak Anda' : 'Standar']}
                />
                <Area type="monotone" dataKey="standar" stroke="#cbd5e1" fill="none" strokeWidth={2} strokeDasharray="5 5" name="standar" />
                <Area type="monotone" dataKey="bb" stroke="#3b82f6" fill="url(#colorBB)" strokeWidth={3} name="bb" dot={{ r: 4, fill: '#3b82f6' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-slate-400 mt-3 text-center">Garis putus-putus = Standar WHO</p>
        </div>

        {/* Grafik Tinggi Badan */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <IconRuler className="text-emerald-500" size={20} /> Tinggi Badan (cm)
            </h3>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+1.5 cm</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataGrafikTB} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTB" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="bulan" tick={{ fontSize: 12, fill: '#94a3b8' }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} tickLine={false} axisLine={false} domain={[68, 85]} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value, name) => [`${value} cm`, name === 'tb' ? 'Anak Anda' : 'Standar']}
                />
                <Area type="monotone" dataKey="standar" stroke="#cbd5e1" fill="none" strokeWidth={2} strokeDasharray="5 5" name="standar" />
                <Area type="monotone" dataKey="tb" stroke="#10b981" fill="url(#colorTB)" strokeWidth={3} name="tb" dot={{ r: 4, fill: '#10b981' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-slate-400 mt-3 text-center">Garis putus-putus = Standar WHO</p>
        </div>
      </div>

      {/* Status Gizi Detail */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200/60 mb-8">
        <div className="flex items-start gap-4">
          <div className="bg-emerald-500 p-3 rounded-xl">
            <IconHeart size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-emerald-900 text-lg">Status Gizi Baik</h3>
            <p className="text-sm text-emerald-700 mt-1">
              {dataAnak.nama} berada dalam kategori <span className="font-bold">Normal</span> dengan Z-Score BB/TB di atas -2 SD. 
              Pertumbuhan anak mengikuti kurva yang baik. Pertahankan pola makan dan asupan nutrisinya!
            </p>
            <div className="flex gap-4 mt-4">
              <div className="bg-white/60 px-4 py-2 rounded-xl">
                <p className="text-[10px] font-bold text-emerald-600 uppercase">Z-Score BB</p>
                <p className="text-lg font-black text-emerald-800">{dataAnak.zScoreBB}</p>
              </div>
              <div className="bg-white/60 px-4 py-2 rounded-xl">
                <p className="text-[10px] font-bold text-emerald-600 uppercase">Z-Score TB</p>
                <p className="text-lg font-black text-emerald-800">{dataAnak.zScoreTB}</p>
              </div>
              <div className="bg-white/60 px-4 py-2 rounded-xl">
                <p className="text-[10px] font-bold text-emerald-600 uppercase">Persentil</p>
                <p className="text-lg font-black text-emerald-800">{dataAnak.persentil}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Pemeriksaan Terakhir */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-5 border-b border-slate-100 bg-amber-50/50">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <IconHeartbeat size={18} className="text-amber-500" /> Data Pemeriksaan Terakhir
            </h3>
            <span className="text-[10px] font-bold text-slate-400">{dataAnak.tanggalPemeriksaan}</span>
          </div>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconScale size={20} className="text-white" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Berat Badan</p>
              <p className="text-xl font-black text-slate-800 mt-1">{dataAnak.beratBadan} <span className="text-xs font-bold text-slate-400">kg</span></p>
            </div>
            <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconRuler size={20} className="text-white" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Tinggi Badan</p>
              <p className="text-xl font-black text-slate-800 mt-1">{dataAnak.tinggiBadan} <span className="text-xs font-bold text-slate-400">cm</span></p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-xl border border-red-100">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconHeartbeat size={20} className="text-white" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Tekanan Darah</p>
              <p className="text-xl font-black text-slate-800 mt-1">{dataAnak.tekananDarah} <span className="text-xs font-bold text-slate-400">mmHg</span></p>
            </div>
            <div className="text-center p-4 bg-pink-50 rounded-xl border border-pink-100">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconHeart size={20} className="text-white" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Detak Jantung</p>
              <p className="text-xl font-black text-slate-800 mt-1">{dataAnak.detakJantung} <span className="text-xs font-bold text-slate-400">bpm</span></p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-100">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconThermometer size={20} className="text-white" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Suhu Tubuh</p>
              <p className="text-xl font-black text-slate-800 mt-1">{dataAnak.suhu} <span className="text-xs font-bold text-slate-400">&deg;C</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Riwayat Pengukuran */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm mb-8 overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-bold text-slate-900 flex items-center gap-2">
            <IconClock size={18} className="text-blue-500" /> Riwayat Pengukuran
          </h3>
        </div>
        <div className="divide-y divide-slate-100">
          {riwayatPengukuran.map((item, index) => (
            <div key={index} className="px-5 py-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${item.status === 'Normal' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{item.tanggal}</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      BB: <span className="font-semibold">{item.bb} kg</span> • TB: <span className="font-semibold">{item.tb} cm</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                    item.status === 'Normal' 
                      ? 'text-emerald-700 bg-emerald-100' 
                      : 'text-amber-700 bg-amber-100'
                  }`}>
                    {item.status}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1">Z: {item.zScore}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips & Rekomendasi */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm mb-8 p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-slate-900 flex items-center gap-2">
            <IconBook size={18} className="text-blue-500" /> Tips Nutrisi untuk Usia {dataAnak.usia}
          </h3>
          <Link href="/parent/edukasi" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            Lihat Semua <IconChevronRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {tipsNutrisi.map((tip, index) => (
            <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="bg-white p-2 rounded-lg h-fit">{tip.icon}</div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">{tip.judul}</h4>
                <p className="text-xs text-slate-500 mt-1">{tip.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Jadwal Posyandu */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl text-white shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <IconCalendarEvent size={24} />
            <h3 className="font-bold text-lg">Jadwal Posyandu</h3>
          </div>
          <div className="bg-white/15 p-4 rounded-xl backdrop-blur-sm border border-white/20 mb-4">
            <p className="text-xs uppercase font-bold text-blue-200">Lokasi</p>
            <p className="font-bold mt-1">{dataAnak.posyandu}</p>
          </div>
          <div className="bg-white/15 p-4 rounded-xl backdrop-blur-sm border border-white/20">
            <p className="text-xs uppercase font-bold text-blue-200">Waktu</p>
            <p className="font-bold mt-1">Tgl 15 tiap bulan</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
            <IconAlertTriangle size={18} className="text-amber-500" /> Peringatan
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
              <div className="bg-amber-500 p-2 rounded-lg">
                <IconCalendarEvent size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-amber-800">Pengukuran Bulan Depan</p>
                <p className="text-xs text-amber-600">15 hari lagi</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div className="bg-blue-500 p-2 rounded-lg">
                <IconBook size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-800">Tips Pemantauan</p>
                <p className="text-xs text-blue-600">Catat berat dan tinggi badan secara berkala</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
