"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  IconActivity, 
  IconLayoutDashboard, 
  IconBabyCarriage, 
  IconBook, 
  IconUserCircle,
  IconLogout,
  IconPlus,
  IconDownload,
  IconAlertTriangle,
  IconX
} from '@tabler/icons-react';
import './globals.css';

const dataStunting = [
  { nama: "Dina Mariana", usia: "18 Bulan", posyandu: "Posyandu Sepinggan", zScore: "-3.1" },
  { nama: "Bagas Dwi", usia: "24 Bulan", posyandu: "Puskesmas Manggar", zScore: "-2.5" },
  { nama: "Siti Aisyah", usia: "12 Bulan", posyandu: "Posyandu Klandasan", zScore: "-3.1" },
  { nama: "Putri Ramadhani", usia: "14 Bulan", posyandu: "Posyandu Gunung Bahagia", zScore: "-2.8" },
  { nama: "Bintang Pratama", usia: "16 Bulan", posyandu: "Puskesmas Manggar", zScore: "-2.2" },
];

const dataLaporan = [
  { nama: "Dina Mariana", usia: "18 Bulan", berat: "10.2 kg", tinggi: "81.5 cm", status: "Stunting", posyandu: "Posyandu Sepinggan" },
  { nama: "Bagas Dwi", usia: "24 Bulan", berat: "12.5 kg", tinggi: "90.2 cm", status: "Gizi Kurang", posyandu: "Puskesmas Manggar" },
  { nama: "Siti Aisyah", usia: "15 Bulan", berat: "9.1 kg", tinggi: "76.3 cm", status: "Stunting", posyandu: "Posyandu Klandasan" },
  { nama: "Muhammad Rizky", usia: "21 Bulan", berat: "11.8 kg", tinggi: "87.4 cm", status: "Normal", posyandu: "Posyandu Sepinggan" },
  { nama: "Putri Ramadhani", usia: "14 Bulan", berat: "8.5 kg", tinggi: "73.1 cm", status: "Stunting", posyandu: "Posyandu Gunung Bahagia" },
  { nama: "Ahmad Fauzi", usia: "19 Bulan", berat: "10.9 kg", tinggi: "84.6 cm", status: "Normal", posyandu: "Puskesmas Manggar" },
  { nama: "Aisyah Putri", usia: "12 Bulan", berat: "7.8 kg", tinggi: "68.9 cm", status: "Normal", posyandu: "Posyandu Klandasan" },
  { nama: "Bintang Pratama", usia: "16 Bulan", berat: "10.1 kg", tinggi: "79.2 cm", status: "Gizi Kurang", posyandu: "Puskesmas Manggar" },
  { nama: "Citra Dewi", usia: "23 Bulan", berat: "11.3 kg", tinggi: "88.7 cm", status: "Normal", posyandu: "Posyandu Sepinggan" },
  { nama: "Dani Kurniawan", usia: "13 Bulan", berat: "8.9 kg", tinggi: "72.4 cm", status: "Normal", posyandu: "Posyandu Gunung Bahagia" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const hideNavbar = pathname === '/' || pathname === '/auth';
  const isParent = pathname.startsWith('/parent');
  const isAdmin = pathname.startsWith('/admin');
  const [showStuntingAlert, setShowStuntingAlert] = useState(false);

  const handleDownloadLaporan = () => {
    const headers = ["Nama", "Usia", "Berat Badan", "Tinggi Badan", "Status Gizi", "Posyandu"];
    const rows = dataLaporan.map(d => [d.nama, d.usia, d.berat, d.tinggi, d.status, d.posyandu]);
    const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "laporan_data_balita.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const navItemClass = (path: string) => `
    flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer
    ${pathname === path 
      ? 'bg-blue-50 text-blue-600' 
      : 'text-slate-500 hover:bg-slate-100'
    }
  `;

  return (
    <html lang="id">
      <body className="min-h-screen bg-slate-50 font-[sans-serif] text-slate-800">
        {!hideNavbar && isAdmin && (
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="sticky top-0 h-screen w-64 bg-white border-r border-slate-200 p-4 flex flex-col">
              {/* Logo */}
              <div className="flex items-center gap-3 px-3 py-2 mb-6">
                <div className="p-2 bg-blue-500 rounded-xl text-white">
                  <IconActivity size={20} stroke={2.5} />
                </div>
                <span className="text-lg font-bold text-slate-900 tracking-tight">
                  Monitoring Stunting
                </span>
              </div>

              {/* Nav Menu */}
              <nav className="flex flex-col gap-1 mb-6">
                <Link href="/admin/dashboard" className={navItemClass('/admin/dashboard')}>
                  <IconLayoutDashboard size={18} /> Dashboard
                </Link>
                <Link href="/admin/data_anak" className={navItemClass('/admin/data_anak')}>
                  <IconBabyCarriage size={18} /> Data Anak
                </Link>
                <Link href="/admin/profil" className={navItemClass('/admin/profil')}>
                  <IconUserCircle size={18} /> Profil
                </Link>
              </nav>

              {/* Quick Actions */}
              <div className="border-t border-slate-100 pt-4 mb-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-3">Aksi Cepat</p>
                <div className="flex flex-col gap-2">
                  <Link href="/admin/data_anak/tambah" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                    <div className="bg-blue-500 w-8 h-8 rounded-lg flex items-center justify-center text-white">
                      <IconPlus size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Tambah Data</p>
                      <p className="text-[10px] text-slate-500">Data anak baru</p>
                    </div>
                  </Link>

                  <button onClick={handleDownloadLaporan} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-colors text-left cursor-pointer">
                    <div className="bg-indigo-500 w-8 h-8 rounded-lg flex items-center justify-center text-white">
                      <IconDownload size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Laporan</p>
                      <p className="text-[10px] text-slate-500">Download laporan</p>
                    </div>
                  </button>

                  <button onClick={() => setShowStuntingAlert(true)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 transition-colors text-left cursor-pointer">
                    <div className="bg-sky-500 w-8 h-8 rounded-lg flex items-center justify-center text-white">
                      <IconAlertTriangle size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Stunting Alert</p>
                      <p className="text-[10px] text-slate-500">{dataStunting.length} kasus aktif</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Logout */}
              <Link href="/auth" className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition cursor-pointer">
                <IconLogout size={18} /> Keluar
              </Link>
            </aside>

            {/* Modal Stunting Alert */}
            {showStuntingAlert && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 overflow-hidden">
                  <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-red-50">
                    <div className="flex items-center gap-2">
                      <IconAlertTriangle size={20} className="text-red-600" />
                      <h3 className="font-bold text-red-800">Daftar Stunting Alert</h3>
                    </div>
                    <button onClick={() => setShowStuntingAlert(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                      <IconX size={20} />
                    </button>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-slate-500 mb-4">Berikut adalah balita yang terdeteksi mengalami stunting berdasarkan pengukuran terakhir.</p>
                    <div className="flex flex-col gap-3">
                      {dataStunting.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                          <div className="bg-red-100 p-2 rounded-lg">
                            <IconBabyCarriage size={18} className="text-red-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-bold text-slate-800">{item.nama}</p>
                            <p className="text-[10px] text-slate-500">{item.usia} • {item.posyandu}</p>
                          </div>
                          <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full border border-red-100">
                            Z-Score: {item.zScore}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
                    <button onClick={() => setShowStuntingAlert(false)} className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-xl text-sm font-bold transition cursor-pointer">
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className="flex-1 pb-12">{children}</div>
          </div>
        )}

        {!hideNavbar && isParent && (
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="sticky top-0 h-screen w-64 bg-white border-r border-slate-200 p-4 flex flex-col">
              {/* Logo */}
              <div className="flex items-center gap-3 px-3 py-2 mb-6">
                <div className="p-2 bg-blue-500 rounded-xl text-white">
                  <IconActivity size={20} stroke={2.5} />
                </div>
                <span className="text-lg font-bold text-slate-900 tracking-tight">
                  Parent Portal
                </span>
              </div>

              {/* Nav Menu */}
              <nav className="flex flex-col gap-1 mb-6">
                <Link href="/parent/dashboard" className={navItemClass('/parent/dashboard')}>
                  <IconLayoutDashboard size={18} /> Dashboard
                </Link>
                <Link href="/parent/data_anak" className={navItemClass('/parent/data_anak')}>
                  <IconBabyCarriage size={18} /> Data Anak
                </Link>
                <Link href="/parent/edukasi" className={navItemClass('/parent/edukasi')}>
                  <IconBook size={18} /> Edukasi
                </Link>
                <Link href="/parent/profil" className={navItemClass('/parent/profil')}>
                  <IconUserCircle size={18} /> Profil
                </Link>
              </nav>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Logout */}
              <Link href="/auth" className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition cursor-pointer">
                <IconLogout size={18} /> Keluar
              </Link>
            </aside>

            {/* Main Content */}
            <div className="flex-1 pb-12">{children}</div>
          </div>
        )}

        {hideNavbar && <div className="pb-12">{children}</div>}
      </body>
    </html>
  );
}