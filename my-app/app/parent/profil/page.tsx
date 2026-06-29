"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  IconUser, 
  IconEdit, 
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconBabyCarriage, 
  IconDeviceFloppy, 
  IconX 
} from '@tabler/icons-react';

export default function ProfilParent() {
  const router = useRouter();

  // State untuk kontrol mode edit
  const [isEditing, setIsEditing] = useState(false);

  // State untuk menyimpan data profil secara dinamis (load dari localStorage)
  const saved = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('profilParent') || 'null') : null;
  const [nama, setNama] = useState(saved?.nama ?? "Siti Rahma");
  const [email, setEmail] = useState(saved?.email ?? "siti.rahma@email.com");
  const [telepon, setTelepon] = useState(saved?.telepon ?? "0812 3456 7890");
  const [alamat, setAlamat] = useState(saved?.alamat ?? "Jl. Mawar No. 12, Balikpapan");
  const [anak, setAnak] = useState(saved?.anak ?? "Dina Mariana");

  // State cadangan (untuk mengembalikan data jika user membatalkan edit)
  const [tempData, setTempData] = useState({ nama, email, telepon, alamat });

  // Fungsi saat tombol edit pensil ditekan
  const handleEditToggle = () => {
    setTempData({ nama, email, telepon, alamat }); // Simpan data lama
    setIsEditing(true);
  };

  // Fungsi simpan perubahan
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('profilParent', JSON.stringify({ nama, email, telepon, alamat, anak }));
    setIsEditing(false);
    alert("Profil Bunda berhasil diperbarui!");
  };

  // Fungsi batalkan perubahan
  const handleCancel = () => {
    setNama(tempData.nama);
    setEmail(tempData.email);
    setTelepon(tempData.telepon);
    setAlamat(tempData.alamat);
    setIsEditing(false);
  };

  // Fungsi pindah ke rute data anak (Sesuai folder gabungan)
  const handleGoToDataAnak = () => {
    router.push('/parent/data_anak');
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 animate-in fade-in duration-500">
      <h1 className="text-2xl font-bold mb-6">Profil Bunda</h1>

      {/* Kartu Profil Utama */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative mb-6">
        
        {/* Tombol Edit Atas (Hanya muncul jika TIDAK sedang mengedit) */}
        {!isEditing && (
          <button 
            onClick={handleEditToggle}
            className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition"
          >
            <IconEdit size={18} className="text-slate-600" />
          </button>
        )}
        

    <div className="flex items-center gap-6">
        {/* Lingkaran Foto Profil / Inisial */}
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold uppercase shrink-0">
            {nama ? nama.charAt(0) : "?"}
          </div>
  
        {/* Bagian Teks Nama / Input Nama */}
        <div className="grow">
            {isEditing ? (
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-slate-400">Nama Lengkap</p>
              <input 
              type="text" 
              value={nama} 
              onChange={(e) => setNama(e.target.value)}
              className="px-3 py-1.5 text-base font-bold border border-slate-200 rounded-lg outline-none focus:border-blue-500 bg-slate-50 w-full max-w-xs"/>
          </div>
    ) : (
      <>
              <h2 className="text-2xl font-bold text-slate-800">{nama}</h2>
              <p className="text-slate-500 text-sm">Akun Orang Tua</p>
            </>
          )}
        </div>
    </div>
    
        {/* FORM / DETAIL SECTION */}
        <form onSubmit={handleSave} className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Field Email */}
            <div className="flex items-center gap-3">
              <IconMail className="text-blue-500 shrink-0" />
              <div className="w-full">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Email</p>
                {isEditing ? (
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-1.5 text-sm font-semibold border border-slate-200 rounded-lg outline-none focus:border-blue-500 bg-slate-50"
                  />
                ) : (
                  <p className="text-sm font-semibold text-slate-700">{email}</p>
                )}
              </div>
            </div>

            {/* Field Telepon */}
            <div className="flex items-center gap-3">
              <IconPhone className="text-blue-500 shrink-0" />
              <div className="w-full">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Telepon</p>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={telepon} 
                    onChange={(e) => setTelepon(e.target.value)}
                    className="w-full px-3 py-1.5 text-sm font-semibold border border-slate-200 rounded-lg outline-none focus:border-blue-500 bg-slate-50"
                  />
                ) : (
                  <p className="text-sm font-semibold text-slate-700">{telepon}</p>
                )}
              </div>
            </div>

            {/* Field Alamat */}
            <div className="flex items-center gap-3 md:col-span-2">
              <IconMapPin className="text-blue-500 shrink-0" />
              <div className="w-full">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Alamat</p>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={alamat} 
                    onChange={(e) => setAlamat(e.target.value)}
                    className="w-full px-3 py-1.5 text-sm font-semibold border border-slate-200 rounded-lg outline-none focus:border-blue-500 bg-slate-50"
                  />
                ) : (
                  <p className="text-sm font-semibold text-slate-700">{alamat}</p>
                )}
              </div>
            </div>

          </div>

          {/* Tombol Aksi (Hanya muncul saat Mode Edit Aktif) */}
          {isEditing && (
            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-slate-100">
              <button 
                type="button"
                onClick={handleCancel}
                className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-xs rounded-xl transition"
              >
                <IconX size={14} /> Batal
              </button>
              <button 
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-md shadow-blue-100 transition"
              >
                <IconDeviceFloppy size={14} /> Simpan
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Info Anak Terhubung */}
      <div className="bg-slate-800 p-6 rounded-3xl flex items-center justify-between text-white shadow-sm">
        <div className="flex items-center gap-4">
          <IconBabyCarriage className="text-blue-400" size={32} />
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">Anak Terhubung</p>
            <p className="font-bold">{anak}</p>
          </div>
        </div>
        <button 
          onClick={handleGoToDataAnak}
          className="text-xs bg-white/10 px-4 py-2 rounded-xl hover:bg-white/20 transition font-medium"
        >
          Lihat Data Anak
        </button>
      </div>
    </div>
  );
}