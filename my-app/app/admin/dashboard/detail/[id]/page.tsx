"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { IconArrowLeft, IconBabyCarriage, IconReportMedical } from '@tabler/icons-react';

export default function DetailAnakPage() {
  const params = useParams();
  const id = params.id as string;

  // Database simulasi dengan catatan dinamis
  const database: Record<string, any> = {
    dina: { 
      nama: "Dina Mariana", usia: "18 Bulan", posyandu: "Posyandu Sepinggan", 
      bb: "8.5 kg", tb: "72 cm", status: "Stunting",
      catatan: [
        { tanggal: "Juni 2026", isi: "Kenaikan berat badan tidak signifikan. Perlu rujukan ke Puskesmas." },
        { tanggal: "Mei 2026", isi: "Imunisasi lengkap. Namun tinggi badan di bawah kurva normal." }
      ]
    },
    bagas: { 
      nama: "Bagas Dwi", usia: "24 Bulan", posyandu: "Puskesmas Manggar", 
      bb: "10.2 kg", tb: "85 cm", status: "Gizi Kurang",
      catatan: [
        { tanggal: "Juni 2026", isi: "Status gizi membaik setelah pemberian PMT rutin." }
      ]
    },
    siti: { 
      nama: "Siti Aisyah", usia: "12 Bulan", posyandu: "Posyandu Klandasan", 
      bb: "7.8 kg", tb: "70 cm", status: "Stunting",
      catatan: [
        { tanggal: "Juni 2026", isi: "Anak aktif bergerak, namun asupan kalori masih perlu ditingkatkan." },
        { tanggal: "Mei 2026", isi: "Evaluasi awal menunjukkan indikasi awal stunting." }
      ]
    },
  };

  const anak = database[id] || { nama: "Data Tidak Ditemukan", catatan: [] };

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 bg-slate-50 min-h-screen">
      <Link href="/admin/dashboard" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-6 cursor-pointer">
        <IconArrowLeft size={18} /> Kembali ke Dashboard
      </Link>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        {/* Header Profil */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl"><IconBabyCarriage size={32} /></div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">{anak.nama}</h1>
            <p className="text-slate-500 text-sm">{anak.usia} | {anak.posyandu}</p>
          </div>
        </div>

        {/* Data Medis (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
            <p className="text-xs text-slate-400 font-bold uppercase">Berat Badan</p>
            <p className="text-xl font-black text-slate-800">{anak.bb || "-"}</p>
          </div>
          <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
            <p className="text-xs text-slate-400 font-bold uppercase">Tinggi Badan</p>
            <p className="text-xl font-black text-slate-800">{anak.tb || "-"}</p>
          </div>
          <div className="p-4 border border-red-50 rounded-xl bg-red-50">
            <p className="text-xs text-red-500 font-bold uppercase">Status Gizi</p>
            <p className="text-xl font-black text-red-600">{anak.status}</p>
          </div>
        </div>

        {/* Catatan Perkembangan (Dinamis) */}
        <div className="border-t border-slate-100 pt-6">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <IconReportMedical size={20} className="text-blue-500" /> Catatan Perkembangan
          </h3>
          
          <div className="space-y-4">
            {anak.catatan && anak.catatan.length > 0 ? (
              anak.catatan.map((item: any, index: number) => (
                <div key={index} className="pb-4 border-b border-slate-50 last:border-0">
                  <p className="text-sm font-bold text-slate-800">{item.tanggal}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.isi}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-400 italic">Belum ada catatan perkembangan untuk anak ini.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}