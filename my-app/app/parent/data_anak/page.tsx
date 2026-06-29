"use client";

import React, { useState, useEffect } from 'react';
import {
  IconBabyCarriage,
  IconStethoscope,
  IconRuler,
  IconScale,
  IconActivity,
  IconHeart,
  IconClock,
  IconUsers,
  IconNeedle,
  IconDroplet,
  IconId,
  IconHome,

  IconAlertTriangle,
} from '@tabler/icons-react';

export default function DataAnakParent() {
  const [anak, setAnak] = useState({
    nama: "Dina Mariana",
    nik: "6472011201240001",
    tglLahir: "12 Januari 2024",
    usia: "18 Bulan",
    jk: "Perempuan",
    golonganDarah: "A",
    alamat: "Jl. Sepinggan Baru No. 45, Balikpapan",
    posyandu: "Posyandu Sepinggan",
    namaIbu: "Siti Rahma",
    namaAyah: "Budi Santoso",
    statusGizi: "Normal",
    riwayatAlergi: "Tidak ada alergi yang terdeteksi",
    riwayatPenyakit: "Tidak ada riwayat penyakit serius",
    imunisasiTerakhir: "Imunisasi Campak (15 Feb 2026)",
    vitaminTerakhir: "Vitamin A (15 Feb 2026)",
    riwayatImunisasi: [
      { nama: "BCG", tanggal: "12 Feb 2024", status: "Selesai" },
      { nama: "Hepatitis B", tanggal: "12 Jan 2024", status: "Selesai" },
      { nama: "DPT-1", tanggal: "12 Apr 2024", status: "Selesai" },
      { nama: "DPT-2", tanggal: "12 Jun 2024", status: "Selesai" },
      { nama: "DPT-3", tanggal: "12 Agu 2024", status: "Selesai" },
      { nama: "Polio", tanggal: "12 Apr 2024", status: "Selesai" },
      { nama: "Campak", tanggal: "15 Feb 2026", status: "Selesai" },
    ],
    beratBadan: 10.2,
    tinggiBadan: 81.5,
  });

  useEffect(() => {
    const saved = localStorage.getItem('profilParent');
    if (saved) {
      const data = JSON.parse(saved);
      setAnak(prev => ({
        ...prev,
        nama: data.anak || prev.nama,
        namaIbu: data.nama || prev.namaIbu,
        alamat: data.alamat || prev.alamat,
      }));
    }
  }, []);

  return (
    <main className="px-6 md:px-10 py-8 animate-in fade-in duration-500 max-w-6xl mx-auto">

      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-8 rounded-3xl text-white shadow-xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <IconBabyCarriage size={48} />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{anak.nama}</h1>
              <p className="text-blue-100 font-medium mt-1">
                {anak.usia} &bull; {anak.posyandu}
              </p>
            </div>
          </div>
          <div className="bg-white/15 px-6 py-4 rounded-2xl backdrop-blur-sm border border-white/20">
            <p className="text-[10px] uppercase font-bold text-blue-200">Status Gizi</p>
            <p className="text-2xl font-black mt-1">{anak.statusGizi}</p>
          </div>
        </div>
      </div>

      {/* Data Identitas & Orang Tua */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Data Identitas */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-blue-50/50">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <IconId size={18} className="text-blue-500" /> Data Identitas
            </h3>
          </div>
          <div className="p-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-slate-100 p-2 rounded-lg"><IconId size={16} className="text-slate-500" /></div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">NIK</p>
                <p className="text-sm font-semibold text-slate-800">{anak.nik}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-100 p-2 rounded-lg"><IconClock size={16} className="text-slate-500" /></div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Tanggal Lahir</p>
                <p className="text-sm font-semibold text-slate-800">{anak.tglLahir}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-100 p-2 rounded-lg"><IconActivity size={16} className="text-slate-500" /></div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Usia</p>
                <p className="text-sm font-semibold text-slate-800">{anak.usia}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-100 p-2 rounded-lg"><IconDroplet size={16} className="text-slate-500" /></div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Jenis Kelamin</p>
                <p className="text-sm font-semibold text-slate-800">{anak.jk}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-100 p-2 rounded-lg"><IconDroplet size={16} className="text-red-400" /></div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Golongan Darah</p>
                <p className="text-sm font-semibold text-slate-800">{anak.golonganDarah}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-100 p-2 rounded-lg"><IconHome size={16} className="text-slate-500" /></div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Alamat</p>
                <p className="text-sm font-semibold text-slate-800">{anak.alamat}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Orang Tua */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-violet-50/50">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <IconUsers size={18} className="text-violet-500" /> Data Orang Tua
            </h3>
          </div>
          <div className="p-5 space-y-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Nama Ayah</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                  <IconUsers size={18} className="text-violet-600" />
                </div>
                <p className="text-sm font-semibold text-slate-800">{anak.namaAyah}</p>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Nama Ibu</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <IconUsers size={18} className="text-pink-600" />
                </div>
                <p className="text-sm font-semibold text-slate-800">{anak.namaIbu}</p>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Posyandu</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <IconStethoscope size={18} className="text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-slate-800">{anak.posyandu}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kesehatan & Imunisasi */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Riwayat Kesehatan */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-emerald-50/50">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <IconStethoscope size={18} className="text-emerald-500" /> Riwayat Kesehatan
            </h3>
          </div>
          <div className="p-5 space-y-3">
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
              <div className="bg-red-100 p-2 rounded-lg"><IconAlertTriangle size={16} className="text-red-600" /></div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Riwayat Alergi</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{anak.riwayatAlergi}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
              <div className="bg-amber-100 p-2 rounded-lg"><IconActivity size={16} className="text-amber-600" /></div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Riwayat Penyakit</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{anak.riwayatPenyakit}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
              <div className="bg-blue-100 p-2 rounded-lg"><IconNeedle size={16} className="text-blue-600" /></div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Imunisasi Terakhir</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{anak.imunisasiTerakhir}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
              <div className="bg-violet-100 p-2 rounded-lg"><IconHeart size={16} className="text-violet-600" /></div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Vitamin Terakhir</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{anak.vitaminTerakhir}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Riwayat Imunisasi */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-sky-50/50">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <IconNeedle size={18} className="text-sky-500" /> Riwayat Imunisasi
            </h3>
          </div>
          <div className="p-5">
            <div className="space-y-2">
              {anak.riwayatImunisasi.map((imun, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                      <IconNeedle size={14} className="text-sky-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{imun.nama}</p>
                      <p className="text-[10px] text-slate-500">{imun.tanggal}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full">
                    {imun.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
