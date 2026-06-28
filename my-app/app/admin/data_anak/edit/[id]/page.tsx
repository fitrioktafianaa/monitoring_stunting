"use client";

import React, { useState, use } from 'react'; // 1. Tambahkan 'use' di import
import { useRouter } from 'next/navigation';
import { IconArrowLeft, IconDeviceFloppy } from '@tabler/icons-react';

// 2. Tambahkan 'params' sebagai Promise
export default function EditAnakPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  
  // 3. Unpack params menggunakan React.use()
  const { id } = use(params);

  const [formData, setFormData] = useState({
    nama: "Dina Mariana",
    nik: "1234567890123456",
    lahir: "2024-01-12",
    ibu: "Siti Rahma",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Data anak ID ${id} berhasil diupdate!`);
    router.push('/admin/data_anak');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-[sans-serif] text-slate-800 pb-12">
      <main className="mx-auto max-w-3xl px-4 md:px-6 mt-8">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 mb-6 transition cursor-pointer">
          <IconArrowLeft size={18} /> Kembali ke Data Anak
        </button>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h1 className="text-xl font-bold text-slate-900">Edit Data Balita</h1>
            <p className="text-xs text-slate-500 mt-1">ID Data: {id}</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nama Lengkap Balita *</label>
              <input 
                type="text" 
                value={formData.nama}
                onChange={(e) => setFormData({...formData, nama: e.target.value})}
                className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">NIK / KIA *</label>
                {/* 4. Gunakan onChange agar input bisa diedit, atau ganti ke defaultValue */}
                <input 
                  type="text" 
                  value={formData.nik}
                  onChange={(e) => setFormData({...formData, nik: e.target.value})}
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tanggal Lahir *</label>
                <input 
                  type="date" 
                  value={formData.lahir}
                  onChange={(e) => setFormData({...formData, lahir: e.target.value})}
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nama Ibu Kandung *</label>
              <input 
                type="text" 
                value={formData.ibu}
                onChange={(e) => setFormData({...formData, ibu: e.target.value})}
                className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-3">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold transition">
                 Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}