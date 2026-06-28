"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  IconUser, IconMail, IconLock, IconBuildingCommunity, 
  IconLogout, IconDeviceFloppy 
} from "@tabler/icons-react";

export default function ProfilPage() {
  const router = useRouter();
  
  // 1. Data yang TAMPIL di UI (Profile)
  const [profileData, setProfileData] = useState({
    nama: "Admin",
    email: "operator.puskesmas@gmail.com",
    posyandu: "Puskesmas Manggar",
  });

  // 2. Data yang SEDANG DIKETIK (Form Input)
  const [formData, setFormData] = useState(profileData);
  const [password, setPassword] = useState("********");

  const handleLogout = () => {
    if (confirm("Apakah Anda yakin ingin keluar dari sistem?")) {
      router.push("/"); 
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Pindahkan data dari Form ke Profil setelah tombol diklik
    setProfileData(formData); 
    alert("Perubahan data akun berhasil disimpan!");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Pengaturan Profil & Akun</h1>
          <p className="text-sm text-slate-500 mt-1">Kelola informasi data diri petugas dan keamanan akun Anda di sini.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* KOLOM KIRI (Menggunakan profileData, BUKAN formData) */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm text-center">
              <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-3xl shadow-md shadow-blue-100">
                {profileData.nama.charAt(0)}
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mt-4">{profileData.nama}</h3>
              <p className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full inline-block mt-1">
                Petugas Operator
              </p>
              
              <div className="border-t border-slate-100 mt-6 pt-4 text-left space-y-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <IconBuildingCommunity size={16} className="text-slate-400" />
                  <span>{profileData.posyandu}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconMail size={16} className="text-slate-400" />
                  <span className="truncate">{profileData.email}</span>
                </div>
              </div>
            </div>

            <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold p-4 rounded-2xl border border-red-200 transition-all text-sm">
              <IconLogout size={18} /> Keluar dari Akun
            </button>
          </div>

          {/* KOLOM KANAN (Menggunakan formData) */}
          <div className="md:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6 flex items-center gap-2">
              <IconUser className="text-blue-500" size={20} /> Detail Informasi Akun
            </h2>

            <form onSubmit={handleSave} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nama Lengkap</label>
                <input 
                  type="text" 
                  value={formData.nama}
                  onChange={(e) => setFormData({...formData, nama: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none text-sm bg-slate-50/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Alamat Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none text-sm bg-slate-50/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lokasi Tugas / Posyandu</label>
                <input 
                  type="text" 
                  value={formData.posyandu}
                  onChange={(e) => setFormData({...formData, posyandu: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none text-sm bg-slate-50/50"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end cursor-pointer">
                <button type="submit" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm cursor pointer">
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