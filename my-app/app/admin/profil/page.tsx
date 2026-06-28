"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  IconUser, 
  IconMail, 
  IconLock, 
  IconBuildingCommunity, 
  IconLogout, 
  IconDeviceFloppy 
} from "@tabler/icons-react";

export default function ProfilPage() {
  const router = useRouter();
  
  // State data akun
  const [nama, setNama] = useState("Admin");
  const [email, setEmail] = useState("operator.puskesmas@gmail.com");
  const [posyandu, setPosyandu] = useState("Puskesmas Manggar");
  const [password, setPassword] = useState("********");

  const handleLogout = () => {
    if (confirm("Apakah Anda yakin ingin keluar dari sistem?")) {
      router.push("/"); 
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Perubahan data akun berhasil disimpan!");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        
        {/* JUDUL HALAMAN */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Pengaturan Profil & Akun</h1>
          <p className="text-sm text-slate-500 mt-1">Kelola informasi data diri petugas dan keamanan akun Anda di sini.</p>
        </div>

        {/* GRID UTAMA (2 KOLOM) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* ================= KOLOM KIRI ================= */}
          <div className="space-y-6">
            
            {/* CARD PROFIL UTAMA (Ini yang tadi hilang) */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm text-center">
              {/* Avatar Bulat */}
              <div className="w-24 h-24 bg-linear-to-tr from-blue-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-3xl shadow-md shadow-blue-100">
                FP
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mt-4">{nama}</h3>
              <p className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full inline-block mt-1">
                Petugas Operator
              </p>
              
              <div className="border-t border-slate-100 mt-6 pt-4 text-left space-y-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <IconBuildingCommunity size={16} className="text-slate-400" />
                  <span>{posyandu}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconMail size={16} className="text-slate-400" />
                  <span className="truncate">{email}</span>
                </div>
              </div>
            </div>

            {/* TOMBOL LOGOUT */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold p-4 rounded-2xl border border-red-200 transition-all text-sm group shadow-sm"
            >
              <IconLogout size={18} className="group-hover:translate-x-1 transition-transform" /> 
              Keluar dari Akun
            </button>

            {/* CARD BANTUAN TEKNIS (Posisinya pas di bawah tombol keluar) */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-3xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider">
                Butuh Bantuan Teknis?
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Jika terjadi kesalahan sistem atau kendala sinkronisasi data anak, silakan hubungi Admin Puskesmas.
              </p>
              <a 
                href="https://wa.me/628123456789" 
                target="_blank" 
                className="w-full block text-center bg-blue-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-xl text-xs transition-colors shadow-sm"
              >
                Hubungi via WhatsApp
              </a>
            </div>

          </div>


          {/* ================= KOLOM KANAN ================= */}
          <div className="md:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6 flex items-center gap-2">
              <IconUser className="text-blue-500" size={20} /> Detail Informasi Akun
            </h2>

            <form onSubmit={handleSave} className="space-y-5">
              {/* Nama Lengkap */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nama Lengkap</label>
                <div className="relative">
                  <IconUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-medium bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Alamat Email</label>
                <div className="relative">
                  <IconMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-medium bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Lokasi Posyandu */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lokasi Tugas / Posyandu</label>
                <div className="relative">
                  <IconBuildingCommunity className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    value={posyandu}
                    onChange={(e) => setPosyandu(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-medium bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Kata Sandi (Password)</label>
                <div className="relative">
                  <IconLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-medium bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Tombol Simpan Perubahan */}
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md shadow-blue-100 transition-colors text-sm"
                >
                  <IconDeviceFloppy size={18} /> Simpan Perubahan
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}