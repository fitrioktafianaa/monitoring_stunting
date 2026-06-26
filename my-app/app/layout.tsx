"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  IconActivity, 
  IconLayoutDashboard, 
  IconBabyCarriage, 
  IconBook, 
  IconUserCircle 
} from '@tabler/icons-react';
import './globals.css'; // Pastikan import CSS globalmu di sini

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Sembunyikan navbar di halaman auth/login
  const isAuthPage = pathname === '/auth';

  const navItemClass = (path: string) => `
    flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors
    ${pathname === path 
      ? 'text-blue-600 bg-blue-50 font-bold' 
      : 'text-slate-500 hover:text-blue-600 hover:bg-slate-50 font-semibold'
    }
  `;

  return (
    <html lang="id">
      <body className="min-h-screen bg-slate-50 font-[sans-serif] text-slate-800">
        
        {/* Navbar hanya muncul jika BUKAN halaman auth */}
        {!isAuthPage && (
          <div className="sticky top-0 z-50 w-full pt-4 px-4 md:px-6 transition-all duration-300">
            <nav className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between p-4 bg-white/90 backdrop-blur-md shadow-sm border border-slate-200 rounded-2xl gap-4 md:gap-0">
              
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-500 rounded-xl text-white shadow-sm shadow-blue-200">
                  <IconActivity size={24} stroke={2.5} />
                </div>
                <span className="text-lg font-bold text-slate-900 tracking-tight">
                  Monitoring <span className="text-blue-500">Stunting</span>
                </span>
              </div>

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
        )}

        <div className="pb-12">
          {children}
        </div>
      </body>
    </html>
  );
}