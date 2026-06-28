"use client";

import React, { useState } from "react";
import { IconChevronDown, IconChevronUp, IconBook, IconHelpCircle } from "@tabler/icons-react";

export default function EdukasiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const daftarArtikel = [
    {
      id: 1,
      judul: "Mengenal Apa itu Stunting dan Penyebab Utamanya pada Anak",
      kategori: "Info Kesehatan",
      ringkasan: "Stunting adalah gangguan pertumbuhan akibat gizi buruk, infeksi berulang, dan stimulasi psikososial yang kurang memadai sejak dalam kandungan.",
      bacaWaktu: "5 mnt baca",
    },
    {
      id: 2,
      judul: "Daftar Makanan Tambahan (PMT) Tinggi Protein untuk Balita",
      kategori: "Nutrisi & Gizi",
      ringkasan: "Protein hewani seperti telur, ikan, dan daging terbukti sangat efektif menstimulasi pertumbuhan linear tinggi badan anak.",
      bacaWaktu: "4 mnt baca",
    },
    {
      id: 3,
      judul: "Pentingnya Pola Asuh dan Sanitasi Lingkungan Sehat",
      kategori: "Pola Asuh",
      ringkasan: "Selain nutrisi, kebersihan air serta sanitasi lingkungan memegang peran besar dalam menjaga sistem imun balita agar terhindar dari infeksi.",
      bacaWaktu: "6 mnt baca",
    }
  ];

  const daftarFaq = [
    {
      pertanyaan: "Apakah anak yang pendek pasti mengalami stunting?",
      jawaban: "Tidak selalu. Anak stunting pasti berperawakan pendek, namun anak pendek belum tentu stunting. Stunting terjadi karena masalah malnutrisi kronis berkepanjangan yang juga mengganggu fungsi kognitif otak."
    },
    {
      pertanyaan: "Pada usia berapa stunting paling kritis untuk dicegah?",
      jawaban: "Periode paling krusial adalah pada 1.000 Hari Pertama Kehidupan (HPK), terhitung sejak masa kehamilan ibu sampai anak menginjak usia 2 tahun."
    },
    {
      pertanyaan: "Bagaimana cara memantau indikasi awal stunting?",
      jawaban: "Rutin melakukan pengukuran tinggi dan berat badan anak di Posyandu setiap bulan. Amati apakah kurva pertumbuhan stabil mengikuti garis standar KMS atau justru melambat."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* HEADER HALAMAN */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Pusat Edukasi & Informasi</h1>
          <p className="text-slate-500 text-sm md:text-base">
            Tingkatkan pengetahuan mengenai pencegahan stunting, pemenuhan gizi seimbang, dan tips pola asuh anak di sini.
          </p>
        </div>

        {/* SECTION ARTIKEL */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <IconBook className="text-blue-600" size={24} />
            <h2 className="text-xl font-bold text-slate-800">Artikel Kesehatan Terpopuler</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {daftarArtikel.map((artikel) => (
              <div key={artikel.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">{artikel.kategori}</span>
                    <span className="text-xs text-slate-400">{artikel.bacaWaktu}</span>
                  </div>
                  <div className="text-3xl mb-3"></div>
                  <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">{artikel.judul}</h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">{artikel.ringkasan}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-blue-600 flex items-center gap-1">
                  Baca Selengkapnya <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION FAQ */}
        <div className="space-y-6 max-w-4xl mx-auto pt-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <IconHelpCircle className="text-indigo-600" size={24} />
            <h2 className="text-xl font-bold text-slate-800">Pertanyaan Sering Diajukan (FAQ)</h2>
          </div>

          <div className="space-y-3">
            {daftarFaq.map((faq, index) => {  
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm md:text-base text-slate-700 hover:bg-slate-50 focus:outline-none cursor pointer"
                  >
                    <span>{faq.pertanyaan}</span>
                    {isOpen ? <IconChevronUp size={18} className="text-slate-400" /> : <IconChevronDown size={18} className="text-slate-400" />}
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 border-t border-slate-100 bg-slate-50/50" : "max-h-0"}`}>
                    <p className="p-5 text-xs md:text-sm text-slate-500 leading-relaxed">{faq.jawaban}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}