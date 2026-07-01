"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { IconArrowLeft, IconBabyCarriage, IconReportMedical } from '@tabler/icons-react';

const database: Record<string, {
  nama: string; usia: string; posyandu: string;
  bb: string; tb: string; status: string;
  catatan: Array<{ tanggal: string; isi: string }>;
}> = {
  1: { 
    nama: "Dina Mariana", usia: "18 Bulan", posyandu: "Posyandu Sepinggan", 
    bb: "10.2 kg", tb: "81.5 cm", status: "Stunting",
    catatan: [
      { tanggal: "Juni 2026", isi: "Kenaikan berat badan tidak signifikan. Perlu rujukan ke Puskesmas." },
      { tanggal: "Mei 2026", isi: "Imunisasi lengkap. Namun tinggi badan di bawah kurva normal." }
    ]
  },
  2: { 
    nama: "Bagas Dwi", usia: "24 Bulan", posyandu: "Puskesmas Manggar", 
    bb: "12.5 kg", tb: "90.2 cm", status: "Gizi Kurang",
    catatan: [
      { tanggal: "Juni 2026", isi: "Status gizi membaik setelah pemberian PMT rutin." }
    ]
  },
  3: { 
    nama: "Siti Aisyah", usia: "15 Bulan", posyandu: "Posyandu Klandasan", 
    bb: "9.1 kg", tb: "76.3 cm", status: "Normal",
    catatan: [
      { tanggal: "Juni 2026", isi: "Anak aktif bergerak. Pertumbuhan sesuai kurva." }
    ]
  },
  4: { 
    nama: "Muhammad Rizky", usia: "21 Bulan", posyandu: "Posyandu Sepinggan", 
    bb: "11.8 kg", tb: "87.4 cm", status: "Normal",
    catatan: [
      { tanggal: "Juni 2026", isi: "Pertumbuhan normal. Imunisasi DPT-3 sudah selesai." }
    ]
  },
  5: { 
    nama: "Putri Ramadhani", usia: "14 Bulan", posyandu: "Posyandu Gunung Bahagia", 
    bb: "8.5 kg", tb: "73.1 cm", status: "Stunting",
    catatan: [
      { tanggal: "Juni 2026", isi: "Tinggi badan di bawah normal. Perlu intervensi gizi." },
      { tanggal: "Mei 2026", isi: "Indikasi awal stunting. Asupan kalori perlu ditingkatkan." }
    ]
  },
  6: { 
    nama: "Ahmad Fauzi", usia: "19 Bulan", posyandu: "Puskesmas Manggar", 
    bb: "10.9 kg", tb: "84.6 cm", status: "Normal",
    catatan: [
      { tanggal: "Juni 2026", isi: "Pertumbuhan stabil. Semua imunisasi lengkap." }
    ]
  },
  7: { 
    nama: "Aisyah Putri", usia: "12 Bulan", posyandu: "Posyandu Klandasan", 
    bb: "7.8 kg", tb: "68.9 cm", status: "Normal",
    catatan: [
      { tanggal: "Juni 2026", isi: "Usia 12 bulan, berat dan tinggi dalam batas normal." }
    ]
  },
  8: { 
    nama: "Bintang Pratama", usia: "16 Bulan", posyandu: "Puskesmas Manggar", 
    bb: "10.1 kg", tb: "79.2 cm", status: "Gizi Kurang",
    catatan: [
      { tanggal: "Juni 2026", isi: "Berat badan kurang. Perlu pemberian PMT tambahan." }
    ]
  },
  9: { 
    nama: "Citra Dewi", usia: "23 Bulan", posyandu: "Posyandu Sepinggan", 
    bb: "11.3 kg", tb: "88.7 cm", status: "Normal",
    catatan: [
      { tanggal: "Juni 2026", isi: "Pertumbuhan optimal. Tidak ada keluhan." }
    ]
  },
  10: { 
    nama: "Dani Kurniawan", usia: "13 Bulan", posyandu: "Posyandu Gunung Bahagia", 
    bb: "8.9 kg", tb: "72.4 cm", status: "Normal",
    catatan: [
      { tanggal: "Juni 2026", isi: "Pertumbuhan baik. Imunisasi lengkap." }
    ]
  },
};

export default function DetailAnakPage() {
  const params = useParams();
  const id = params.id as string;
  const [anak, setAnak] = useState(database[id] || { nama: "Data Tidak Ditemukan", usia: "-", posyandu: "-", bb: "-", tb: "-", status: "-", catatan: [] });

  useEffect(() => {
    if (database[id]) {
      setAnak(database[id]);
      return;
    }
    const saved = JSON.parse(localStorage.getItem('dataBalitaTambahan') || '[]');
    const found = saved.find((item: { id: number }) => String(item.id) === id);
    if (found) {
      setAnak({
        nama: found.nama,
        usia: found.detail?.usia || "-",
        posyandu: found.detail?.posyandu || "-",
        bb: found.detail?.bbTerkini ? `${found.detail.bbTerkini} kg` : "-",
        tb: found.detail?.tbTerkini ? `${found.detail.tbTerkini} cm` : "-",
        status: found.detail?.statusGizi || "Normal",
        catatan: []
      });
    }
  }, [id]);

  const statusColor = anak.status === 'Stunting' ? 'red' : anak.status === 'Gizi Kurang' ? 'amber' : 'emerald';

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
            <p className="text-xl font-black text-slate-800">{anak.bb}</p>
          </div>
          <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
            <p className="text-xs text-slate-400 font-bold uppercase">Tinggi Badan</p>
            <p className="text-xl font-black text-slate-800">{anak.tb}</p>
          </div>
          <div className={`p-4 border rounded-xl bg-${statusColor}-50`} style={{ borderColor: `var(--${statusColor}-200, #e2e8f0)` }}>
            <p className={`text-xs font-bold uppercase text-${statusColor}-500`}>Status Gizi</p>
            <p className={`text-xl font-black text-${statusColor}-600`}>{anak.status}</p>
          </div>
        </div>

        {/* Catatan Perkembangan (Dinamis) */}
        <div className="border-t border-slate-100 pt-6">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <IconReportMedical size={20} className="text-blue-500" /> Catatan Perkembangan
          </h3>
          
          <div className="space-y-4">
            {anak.catatan && anak.catatan.length > 0 ? (
              anak.catatan.map((item: { tanggal: string; isi: string }, index: number) => (
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