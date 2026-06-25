"use client"; // Kita butuh ini karena menggunakan hook usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  IconActivity, 
  IconLayoutDashboard, 
  IconBabyCarriage, 
  IconBook, 
  IconUserCircle 
} from '@tabler/icons-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Mengambil URL yang sedang aktif (misal: "/dashboard" atau "/data-anak")
  const pathname = usePathname();

  // Fungsi untuk memberi gaya berbeda jika menu sedang diklik/aktif
  const navItemClass = (path: string) => `
    flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors
    ${pathname === path 
      ? 'text-blue-600 bg-blue-50 font-bold' 
      : 'text-slate-500 hover:text-blue-600 hover:bg-slate-50 font-semibold'
    }
  `;

  return (
    <div className="min-h-screen bg-slate-50 font-[sans-serif] text-slate-800">
      
      {/* GLOBAL NAVBAR */}
      <div className="sticky top-0 z-50 w-full pt-4 px-4 md:px-6 transition-all duration-300">
        <nav className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between p-4 bg-white/90 backdrop-blur-md shadow-sm border border-slate-200 rounded-2xl gap-4 md:gap-0">
          
          {/* Kiri: Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-500 rounded-xl text-white shadow-sm shadow-blue-200">
              <IconActivity size={24} stroke={2.5} />
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              Monitoring <span className="text-blue-500">Stunting</span>
            </span>
          </div>

          {/* Kanan: Menu Navigasi Dinamis */}
          <div className="flex items-center gap-2 md:gap-6 text-sm">
            <Link href="/dashboard" className={navItemClass('/dashboard')}>
              <IconLayoutDashboard size={18} />
              <span className="hidden md:inline">Dashboard</span>
            </Link>
            <Link href="/data_anak" className={navItemClass('/data_anak')}>
              <IconBabyCarriage size={18} />
              <span className="hidden md:inline">Data Anak</span>
            </Link>
            <Link href="/edukasi" className={navItemClass('/edukasi')}>
              <IconBook size={18} />
              <span className="hidden md:inline">Edukasi</span>
            </Link>
            <Link href="/profil" className={navItemClass('/profil')}>
              <IconUserCircle size={18} />
              <span className="hidden md:inline">Profil</span>
            </Link>
          </div>

        </nav>
      </div>

      {/* ISI KONTEN (page.tsx akan dirender di dalam {children} ini) */}
      <div className="pb-12">
        {children}
      </div>

    </div>
  );
}