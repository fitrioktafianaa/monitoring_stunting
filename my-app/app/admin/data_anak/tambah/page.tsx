"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  IconActivity, 
  IconLayoutDashboard, 
  IconBabyCarriage, 
  IconBook, 
  IconUserCircle,
  IconArrowLeft,
  IconUserPlus
} from '@tabler/icons-react';

export default function TambahDataAnakPage() {
  const pathname = usePathname();
  const router = useRouter();

  const navItemClass = (path: string) => `
    flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors
    ${pathname.includes(path) 
      ? 'text-blue-600 bg-blue-50 font-bold' 
      : 'text-slate-500 hover:text-blue-600 hover:bg-slate-50 font-semibold'
    }
  `;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Data balita berhasil ditambahkan!");
    router.push('/admin/data_anak'); // Kembali ke halaman sebelumnya setelah simpan
  };

  return (
    <div className="min-h-screen bg-slate-50 font-[sans-serif] text-slate-800 pb-12">
    

      {/* KONTEN UTAMA FORM */}
      <main className="mx-auto max-w-3xl px-4 md:px-6 mt-8">
        
        {/* Tombol Kembali */}
        <Link href="/admin/data_anak" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors mb-6">
          <IconArrowLeft size={18} />
          Kembali ke Data Anak
        </Link>

        {/* Header Form */}
        <div className="mb-6 flex items-center gap-3">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
            <IconUserPlus size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Registrasi Balita Baru</h1>
            <p className="text-slate-500 text-sm mt-1">Masukkan data identitas balita untuk didaftarkan ke dalam sistem pemantauan.</p>
          </div>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* NIK & Nama */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">NIK Balita / KIA <span className="text-red-500">*</span></label>
                <input type="text" maxLength={16} placeholder="Masukkan 16 digit NIK" required className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap Balita <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Contoh: Ahmad Budi" required className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
            </div>

            {/* TTL & Jenis Kelamin */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Tempat, Tanggal Lahir <span className="text-red-500">*</span></label>
                <div className="flex gap-3">
                  <input type="text" placeholder="Tempat Lahir" required className="w-1/2 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                  <input type="date" required className="w-1/2 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Jenis Kelamin <span className="text-red-500">*</span></label>
                <div className="flex gap-4 h-12 items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="gender" value="L" required className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm font-medium text-slate-700">Laki-laki</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="gender" value="P" required className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm font-medium text-slate-700">Perempuan</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Data Orang Tua */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Ibu Kandung <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Nama Ibu" required className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Ayah Kandung</label>
                <input type="text" placeholder="Nama Ayah (Opsional)" className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
            </div>

            {/* Posyandu Terdaftar */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Posyandu Pendaftar <span className="text-red-500">*</span></label>
              <select required className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                <option value="">-- Pilih Posyandu/Puskesmas --</option>
                <option value="1">Posyandu Sepinggan</option>
                <option value="2">Puskesmas Manggar</option>
                <option value="3">Posyandu Klandasan</option>
              </select>
            </div>

            <hr className="border-slate-100" />

            {/* Tombol Aksi */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
              <Link href="/data_anak" className="text-center px-6 py-3 rounded-xl border border-slate-300 text-sm font-bold text-slate-600 hover:bg-slate-50 transition">
                Batal
              </Link>
              <button type="submit" className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition shadow-md shadow-blue-100 ">
                Simpan Data Balita
              </button>
            </div>

          </form>
        </div>
      </main>

    </div>
  );
}