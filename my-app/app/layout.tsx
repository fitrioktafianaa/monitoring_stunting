"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  IconActivity, 
  IconLayoutDashboard, 
  IconBabyCarriage, 
  IconBook, 
  IconUserCircle,
  IconLogout 
} from '@tabler/icons-react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const hideNavbar = pathname === '/' || pathname === '/auth';
  const isParent = pathname.startsWith('/parent');

  const navItemClass = (path: string) => `
    flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer
    ${pathname === path 
      ? 'bg-blue-50 text-blue-600' 
      : 'text-slate-500 hover:bg-slate-100'
    }
  `;

  return (
    <html lang="id">
      <body className="min-h-screen bg-slate-50 font-[sans-serif] text-slate-800">
        {!hideNavbar && (
          <div className="sticky top-0 z-50 w-full pt-4 px-4 md:px-6">
            <nav className="mx-auto max-w-6xl flex items-center justify-between p-3 bg-white shadow-sm border border-slate-200 rounded-2xl">
              {/* Sisi Kiri: Logo */}
              <div className="flex items-center gap-3 pl-2">
                <div className="p-2 bg-blue-500 rounded-xl text-white">
                  <IconActivity size={20} stroke={2.5} />
                </div>
                <span className="text-lg font-bold text-slate-900 tracking-tight">
                  {isParent ? "Parent Portal Monitoring Stunting" : "Monitoring Stunting"}
                </span>
              </div>

              {/* Sisi Kanan: Menu */}
              <div className="flex items-center gap-1">
                {isParent ? (
                  <>
                    <Link href="/parent/dashboard" className={navItemClass('/parent/dashboard')}>
                      <IconLayoutDashboard size={18} /> Dashboard
                    </Link>
                    <Link href="/parent/data_anak" className={navItemClass('/parent/data')}>
                      <IconBabyCarriage size={18} /> Data Anak
                    </Link>
                    <Link href="/parent/edukasi" className={navItemClass('/parent/edukasi')}>
                      <IconBook size={18} /> Edukasi
                    </Link>
                    <Link href="/parent/profil" className={navItemClass('/parent/profil')}>
                      <IconUserCircle size={18} /> Profil
                    </Link>
                    <Link href="/auth" className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition cursor-pointer">
                      <IconLogout size={18} /> Keluar
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/admin/dashboard" className={navItemClass('/admin/dashboard')}>
                      <IconLayoutDashboard size={18} /> Dashboard
                    </Link>
                    <Link href="/admin/data_anak" className={navItemClass('/admin/data_anak')}>
                      <IconBabyCarriage size={18} /> Data Anak
                    </Link>
                    <Link href="/admin/edukasi" className={navItemClass('/admin/edukasi')}>
                      <IconBook size={18} /> Edukasi
                    </Link>
                    <Link href="/admin/profil" className={navItemClass('/admin/profil')}>
                      <IconUserCircle size={18} /> Profil
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}

        <div className="pb-12">{children}</div>
      </body>
    </html>
  );
}