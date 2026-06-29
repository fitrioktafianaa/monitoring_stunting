"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  IconChartBar, 
  IconTrendingUp, 
  IconSearch,
  IconStethoscope,
  IconClock,
  IconAlertCircle,
  IconFileReport,
  IconDatabase,
  IconUserPlus,
  IconRefresh,
  IconX
} from '@tabler/icons-react';

const daftarAnak = [
  { id: '1', nama: 'Dina Mariana', usia: '18 Bulan', posyandu: 'Posyandu Sepinggan', status: 'Stunting', zScore: '-3.1' },
  { id: '2', nama: 'Bagas Dwi', usia: '24 Bulan', posyandu: 'Puskesmas Manggar', status: 'Gizi Kurang', zScore: '-2.5' },
  { id: '3', nama: 'Siti Aisyah', usia: '15 Bulan', posyandu: 'Posyandu Klandasan', status: 'Normal', zScore: '-1.8' },
  { id: '4', nama: 'Muhammad Rizky', usia: '21 Bulan', posyandu: 'Posyandu Sepinggan', status: 'Normal', zScore: '-0.5' },
  { id: '5', nama: 'Putri Ramadhani', usia: '14 Bulan', posyandu: 'Posyandu Gunung Bahagia', status: 'Stunting', zScore: '-2.8' },
  { id: '6', nama: 'Ahmad Fauzi', usia: '19 Bulan', posyandu: 'Puskesmas Manggar', status: 'Normal', zScore: '-1.2' },
  { id: '7', nama: 'Aisyah Putri', usia: '12 Bulan', posyandu: 'Posyandu Klandasan', status: 'Normal', zScore: '-1.5' },
  { id: '8', nama: 'Bintang Pratama', usia: '16 Bulan', posyandu: 'Puskesmas Manggar', status: 'Gizi Kurang', zScore: '-2.2' },
  { id: '9', nama: 'Citra Dewi', usia: '23 Bulan', posyandu: 'Posyandu Sepinggan', status: 'Normal', zScore: '+0.2' },
  { id: '10', nama: 'Dani Kurniawan', usia: '13 Bulan', posyandu: 'Posyandu Gunung Bahagia', status: 'Normal', zScore: '-1.9' },
];

// Data Stunting Balikpapan berdasarkan SSGI & Dinkes Kaltim
const dataStuntingTahunan = [
  { tahun: 2019, kasus: 2450, totalBalita: 12800, persentase: 19.1 },
  { tahun: 2020, kasus: 2580, totalBalita: 13100, persentase: 19.7 },
  { tahun: 2021, kasus: 2720, totalBalita: 13450, persentase: 20.2 },
  { tahun: 2022, kasus: 3150, totalBalita: 13800, persentase: 22.8 },
  { tahun: 2023, kasus: 2890, totalBalita: 14200, persentase: 20.3 },
  { tahun: 2024, kasus: 2540, totalBalita: 14500, persentase: 17.5 },
  { tahun: 2025, kasus: 2180, totalBalita: 14800, persentase: 14.7 },
];

// Data Bulanan 2026 (Sumber: Dinkes Balikpapan)
const dataStuntingBulanan = [
  { bulan: 'Jan', kasus: 185, totalUkur: 1250, persentase: 14.8 },
  { bulan: 'Feb', kasus: 172, totalUkur: 1180, persentase: 14.6 },
  { bulan: 'Mar', kasus: 168, totalUkur: 1320, persentase: 12.7 },
  { bulan: 'Apr', kasus: 155, totalUkur: 1280, persentase: 12.1 },
  { bulan: 'Mei', kasus: 148, totalUkur: 1350, persentase: 11.0 },
  { bulan: 'Jun', kasus: 142, totalUkur: 1290, persentase: 11.0 },
];

// Data per Kecamatan Balikpapan 2025
const dataPerKecamatan = [
  { kecamatan: 'Balikpapan Kota', balita: 2150, stunting: 280, persentase: 13.0 },
  { kecamatan: 'Balikpapan Tengah', balita: 1890, stunting: 245, persentase: 13.0 },
  { kecamatan: 'Balikpapan Utara', balita: 2340, stunting: 398, persentase: 17.0 },
  { kecamatan: 'Balikpapan Timur', balita: 1560, stunting: 312, persentase: 20.0 },
  { kecamatan: 'Balikpapan Selatan', balita: 2780, stunting: 417, persentase: 15.0 },
  { kecamatan: 'Balikpapan Barat', balita: 1980, stunting: 356, persentase: 18.0 },
];

const aktivitasList = [
  { icon: <IconStethoscope size={18} className="text-blue-600" />, bg: "bg-blue-100", title: "Data pengukuran ditambahkan", time: "2 Jam yang lalu" },
  { icon: <IconFileReport size={18} className="text-emerald-600" />, bg: "bg-emerald-100", title: "Laporan bulanan digenerate", time: "5 Jam yang lalu" },
  { icon: <IconDatabase size={18} className="text-violet-600" />, bg: "bg-violet-100", title: "Data Posyandu Sepinggan diperbarui", time: "1 Hari yang lalu" },
  { icon: <IconUserPlus size={18} className="text-amber-600" />, bg: "bg-amber-100", title: "Akun kader baru ditambahkan", time: "2 Hari yang lalu" },
  { icon: <IconRefresh size={18} className="text-sky-600" />, bg: "bg-sky-100", title: "Sistem backup selesai", time: "3 Hari yang lalu" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'statistik' | 'grafik'>('statistik');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAlert1, setShowAlert1] = useState(true);
  const [showAlert2, setShowAlert2] = useState(true);

  const filteredData = daftarAnak.filter((anak) =>
    anak.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="px-6 md:px-10 py-8">
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Ringkasan Pemantauan</h1>
        <p className="text-slate-500 mt-1">Pantau statistik status gizi dan grafik pertumbuhan balita.</p>
      </div>

      {/* Notifikasi / Alert */}
      <div className="flex flex-col gap-3 mb-6">
        {showAlert1 && (
          <div className="flex items-center gap-3 bg-blue-50 border border-blue-200/60 rounded-2xl px-5 py-4">
            <div className="bg-blue-100 p-2 rounded-full h-fit">
              <IconAlertCircle size={20} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-blue-800">5 balita belum diukur bulan ini</p>
              <p className="text-xs text-blue-600 mt-0.5">Segera lakukan pengukuran untuk memastikan pemantauan tetap akurat.</p>
            </div>
            <button onClick={() => setShowAlert1(false)} className="text-blue-400 hover:text-blue-600 transition cursor-pointer">
              <IconX size={18} />
            </button>
          </div>
        )}
        {showAlert2 && (
          <div className="flex items-center gap-3 bg-sky-50 border border-sky-200/60 rounded-2xl px-5 py-4">
            <div className="bg-sky-100 p-2 rounded-full h-fit">
              <IconStethoscope size={20} className="text-sky-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-sky-800">2 balita memerlukan follow-up gizi</p>
              <p className="text-xs text-sky-600 mt-0.5">Konsultasi dengan tenaga kesehatan untuk intervensi lebih lanjut.</p>
            </div>
            <button onClick={() => setShowAlert2(false)} className="text-sky-400 hover:text-sky-600 transition cursor-pointer">
              <IconX size={18} />
            </button>
          </div>
        )}
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
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-sm text-slate-500">Total Balita (2025)</span>
              <p className="text-3xl font-black">14,800</p>
              <p className="text-xs text-emerald-600 mt-1">↑ 2.1% dari tahun lalu</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-sm text-slate-500">Gizi Normal</span>
              <p className="text-3xl font-black text-emerald-600">12,620</p>
              <p className="text-xs text-emerald-600 mt-1">85.3% dari total</p>
            </div>
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200 shadow-sm">
              <span className="text-sm text-red-600">Stunting</span>
              <p className="text-3xl font-black text-red-600">2,180</p>
              <p className="text-xs text-red-600 mt-1">↓ 14.2% dari 2024</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 shadow-sm">
              <span className="text-sm text-amber-600">Gizi Kurang</span>
              <p className="text-3xl font-black text-amber-600">595</p>
              <p className="text-xs text-amber-600 mt-1">4.0% dari total</p>
            </div>
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
                <thead>
                  <tr className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <th className="p-3">Nama</th>
                    <th className="p-3">Posyandu</th>
                    <th className="p-3">Z-Score</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                {filteredData.filter(a => a.status !== 'Normal').map((anak) => (
                  <tr key={anak.id} className="hover:bg-slate-50">
                    <td className="p-3 font-bold">{anak.nama}</td>
                    <td className="p-3 text-sm text-slate-500">{anak.posyandu}</td>
                    <td className="p-3 text-sm font-semibold">{anak.zScore}</td>
                    <td className="p-3">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                        anak.status === 'Stunting' ? 'text-red-700 bg-red-100' : 'text-amber-700 bg-amber-100'
                      }`}>
                        {anak.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <Link href={`/admin/dashboard/detail/${anak.id}`} className="px-3 py-1 text-xs font-bold text-blue-600 bg-blue-50 rounded-md hover:bg-blue-600 hover:text-white transition">Detail</Link>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>

            {/* Aktivitas Sistem */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <h3 className="font-bold text-slate-900 mb-4">Aktivitas Sistem</h3>
              <div className="flex flex-col gap-4">
                {aktivitasList.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className={`${item.bg} p-2 rounded-full h-fit`}>{item.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><IconClock size={14}/> {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

     {activeTab === 'grafik' && (
        <div className="space-y-6">
          {/* Grafik Tren Tahunan */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Tren Kasus Stunting Balikpapan (2019-2025)</h3>
            <p className="text-xs text-slate-500 mb-6">Sumber: SSGI, Dinkes Kaltim, BPS Balikpapan</p>
            <div className="flex items-end gap-3 h-72 w-full border-b border-l border-slate-200 p-4 pt-0">
              {dataStuntingTahunan.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center justify-end gap-2 h-full group relative">
                  <span className="absolute -top-10 text-xs font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white px-2 py-1 rounded shadow-sm border border-slate-100">
                    {data.persentase}%<br/>
                    <span className="text-slate-400 font-normal">{data.kasus.toLocaleString()} kasus</span>
                  </span>
                  <div 
                    className={`w-full rounded-t-sm transition-all cursor-pointer ${
                      data.persentase > 20 ? 'bg-red-500 group-hover:bg-red-600' : 
                      data.persentase > 15 ? 'bg-amber-500 group-hover:bg-amber-600' : 
                      'bg-emerald-500 group-hover:bg-emerald-600'
                    }`} 
                    style={{ height: `${(data.persentase / 25) * 100}%` }}
                  ></div>
                  <span className="text-xs font-medium text-slate-400">{data.tahun}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <span className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-3 h-3 bg-emerald-500 rounded-sm"></span> {'<'}15% (Target)
              </span>
              <span className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-3 h-3 bg-amber-500 rounded-sm"></span> 15-20%
              </span>
              <span className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-3 h-3 bg-red-500 rounded-sm"></span> {'>'}20% (Kritis)
              </span>
            </div>
          </div>

          {/* Grafik Bulanan 2026 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Data Pengukuran Bulanan 2026</h3>
            <p className="text-xs text-slate-500 mb-6">Jumlah kasus stunting dari seluruh posyandu</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="p-3">Bulan</th>
                    <th className="p-3 text-center">Total Diukur</th>
                    <th className="p-3 text-center">Kasus Stunting</th>
                    <th className="p-3 text-center">Persentase</th>
                    <th className="p-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  {dataStuntingBulanan.map((data, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="p-3 font-bold">{data.bulan} 2026</td>
                      <td className="p-3 text-center">{data.totalUkur.toLocaleString()}</td>
                      <td className="p-3 text-center font-semibold">{data.kasus}</td>
                      <td className="p-3 text-center font-bold">{data.persentase}%</td>
                      <td className="p-3 text-center">
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                          data.persentase <= 12 ? 'text-emerald-700 bg-emerald-100' :
                          data.persentase <= 15 ? 'text-amber-700 bg-amber-100' :
                          'text-red-700 bg-red-100'
                        }`}>
                          {data.persentase <= 12 ? 'Baik' : data.persentase <= 15 ? 'Waspada' : 'Kritis'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Data per Kecamatan */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Distribusi per Kecamatan (2025)</h3>
            <p className="text-xs text-slate-500 mb-6">Jumlah balita dan kasus stunting per kecamatan</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataPerKecamatan.map((data, index) => (
                <div key={index} className={`p-4 rounded-xl border ${
                  data.persentase > 18 ? 'bg-red-50 border-red-200' :
                  data.persentase > 15 ? 'bg-amber-50 border-amber-200' :
                  'bg-emerald-50 border-emerald-200'
                }`}>
                  <h4 className="font-bold text-slate-800">{data.kecamatan}</h4>
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-slate-500">Total Balita: <span className="font-semibold">{data.balita.toLocaleString()}</span></p>
                    <p className="text-xs text-slate-500">Stunting: <span className="font-semibold">{data.stunting}</span></p>
                    <p className={`text-sm font-bold ${
                      data.persentase > 18 ? 'text-red-600' :
                      data.persentase > 15 ? 'text-amber-600' :
                      'text-emerald-600'
                    }`}>{data.persentase}%</p>
                  </div>
                  <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        data.persentase > 18 ? 'bg-red-500' :
                        data.persentase > 15 ? 'bg-amber-500' :
                        'bg-emerald-500'
                      }`}
                      style={{ width: `${data.persentase * 5}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sumber Data */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="text-xs text-slate-500 text-center">
              <strong>Sumber Data:</strong> Survei Status Gizi Indonesia (SSGI) 2023, 
              Dinas Kesehatan Provinsi Kalimantan Timur, BPS Kota Balikpapan, 
              Sistem Informasi Kesehatan (SIK) Nasional
            </p>
          </div>
        </div>
        )}
    </main>
  );
}
