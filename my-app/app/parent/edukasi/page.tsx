"use client";

import React from 'react';
import { IconExternalLink, IconBook2, IconHeartbeat, IconChefHat } from '@tabler/icons-react';

export default function EdukasiParent() {
  const artikel = [
    {
      title: "Stunting di Indonesia: Penyebab, Dampak, dan Upaya Pencegahan",
      desc: "Risiko tertinggi: usia 12-23 bulan (22,4%) akibat kegagalan pemberian MP-ASI ",
      tag: "Penting",
      link: "https://rspp.co.id/artikel-detail-734-Stunting-di-Indonesia-Penyebab,-Dampak,-dan-Upaya-Pencegahan-.html",
      icon: <IconBook2 className="text-blue-500" />
    },
    {
      title: "Nutrisi Terbaik untuk Mencegah Stunting",
      desc: "Panduan asupan nutrisi dan protein hewani yang wajib diberikan dalam 1000 Hari Pertama Kehidupan.",
      tag: "Nutrisi",
      link: "https://www.halodoc.com/artikel/4-nutrisi-penting-untuk-mencegah-terjadinya-stunting",
      icon: <IconChefHat className="text-emerald-500" />
    },
    {
      title: "Pola Hidup Bersih & Sehat",
      desc: "Pentingnya sanitasi dan lingkungan bersih untuk mendukung penyerapan nutrisi anak secara optimal.",
      tag: "Kesehatan",
      link: "https://kemkes.go.id/id/cegah-stunting-dengan-perbaikan-pola-makan-pola-asuh-dan-sanitasi-2",
      icon: <IconHeartbeat className="text-red-500" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800">Pusat Edukasi</h1>
        <p className="text-slate-500 mt-2">Dapatkan informasi terpercaya untuk mendukung tumbuh kembang anak sehat dan cerdas.</p>
      </div>

      <div className="grid gap-6">
        {artikel.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all flex items-start gap-4 cursor-pointer"
          >
            <div className="bg-slate-100 p-3 rounded-xl">{item.icon}</div>
            <div className="flex-1">
              <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                {item.tag}
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
            </div>
            <IconExternalLink className="text-slate-300 group-hover:text-blue-500" size={20} />
          </a>
        ))}
      </div>

      <div className="mt-10 bg-slate-800 p-8 rounded-2xl text-center text-white">
        <h3 className="font-bold text-lg">Butuh Konsultasi Lanjut?</h3>
        <p className="text-slate-400 text-sm mt-2 mb-6">Hubungi petugas puskesmas atau dokter spesialis anak di Puskesmas terdekat.</p>
        <a
          href="https://www.google.com/maps/search/puskesmas+terdekat"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-500 transition cursor-pointer"
        >
          Hubungi Petugas Puskesmas
        </a>
      </div>
    </div>
  );
}