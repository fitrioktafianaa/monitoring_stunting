"use client";

import React from 'react';
import Link from 'next/link';
import { IconArrowLeft, IconBabyCarriage, IconScale, IconReportMedical } from '@tabler/icons-react';

export default function DetailAnakPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Link href="/admin/dashoard" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-6">
        <IconArrowLeft size={18} /> Kembali ke Dashboard
      </Link>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
        {/* Header Profil */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl"><IconBabyCarriage size={32} /></div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Dina Mariana</h1>
            <p className="text-slate-500 text-sm">18 Bulan | Posyandu Sepinggan</p>
          </div>
        </div>

        {/* Data Medis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
            <p className="text-xs text-slate-400 font-bold uppercase">Berat Badan</p>
            <p className="text-xl font-black text-slate-800">8.5 kg</p>
          </div>
          <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
            <p className="text-xs text-slate-400 font-bold uppercase">Tinggi Badan</p>
            <p className="text-xl font-black text-slate-800">72 cm</p>
          </div>
          <div className="p-4 border border-red-50 rounded-xl bg-red-50">
            <p className="text-xs text-red-500 font-bold uppercase">Status Gizi</p>
            <p className="text-xl font-black text-red-600">Stunting</p>
          </div>
        </div>

        {/* Riwayat Catatan */}
        <div className="border-t border-slate-100 pt-6">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <IconReportMedical size={20} className="text-blue-500" /> Catatan Perkembangan
          </h3>
          <div className="space-y-4">
            <div className="pb-4 border-b border-slate-50">
              <p className="text-sm font-bold text-slate-800">Juni 2026</p>
              <p className="text-sm text-slate-500">Kenaikan berat badan tidak signifikan. Perlu rujukan ke Puskesmas untuk pemberian PMT.</p>
            </div>
            <div className="pb-4">
              <p className="text-sm font-bold text-slate-800">Mei 2026</p>
              <p className="text-sm text-slate-500">Imunisasi lengkap. Kondisi anak sehat namun pertumbuhan tinggi badan di bawah kurva normal.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}