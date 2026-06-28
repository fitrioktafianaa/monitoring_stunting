"use client";

import React from 'react';
import { IconStethoscope, IconRuler, IconScale, IconInfoCircle, IconUserCircle } from '@tabler/icons-react';

export default function DataAnakParent() {
  // Data anak yang sudah terisi (simulasi)
  const anak = {
    nama: "Dina Mariana",
    nik: "1234567890123456",
    tglLahir: "12 Januari 2024",
    usia: "18 Bulan",
    jk: "Perempuan",
    ibu: "Siti Rahma",
    riwayatKesehatan: "Tidak ada alergi"
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 animate-in fade-in duration-500">
      <h1 className="text-2xl font-bold mb-6">Data Detail Anak</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Kolom Kiri: Profil Utama */}
        <div className="md:col-span-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
            <IconUserCircle size={40} />
          </div>
          <h2 className="text-center font-bold text-lg">{anak.nama}</h2>
          <p className="text-center text-slate-500 text-sm mb-6">{anak.usia}</p>
          
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-xs font-bold text-slate-400">NIK</span>
              <span className="text-sm font-semibold">{anak.nik}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-xs font-bold text-slate-400">Jenis Kelamin</span>
              <span className="text-sm font-semibold">{anak.jk}</span>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Informasi Tambahan */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold flex items-center gap-2 mb-4">
              <IconInfoCircle size={20} className="text-blue-500" /> Detail Identitas
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Tanggal Lahir</p>
                <p className="font-semibold mt-1">{anak.tglLahir}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Nama Ibu</p>
                <p className="font-semibold mt-1">{anak.ibu}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold flex items-center gap-2 mb-4">
              <IconStethoscope size={20} className="text-emerald-500" /> Informasi Kesehatan
            </h3>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm text-slate-600 italic">"{anak.riwayatKesehatan}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}