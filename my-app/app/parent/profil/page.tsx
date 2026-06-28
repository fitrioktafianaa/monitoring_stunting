"use client";

import React from 'react';
import { IconUser, IconEdit, IconMail, IconPhone, IconMapPin, IconBabyCarriage } from '@tabler/icons-react';

export default function ProfilParent() {
  const user = {
    nama: "Siti Rahma",
    email: "siti.rahma@email.com",
    telepon: "0812 3456 7890",
    alamat: "Jl. Mawar No. 12, Balikpapan",
    anak: "Dina Mariana"
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 animate-in fade-in duration-500">
      <h1 className="text-2xl font-bold mb-6">Profil Bunda</h1>

      {/* Kartu Profil Utama */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative mb-6">
        <button className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition">
          <IconEdit size={18} className="text-slate-600" />
        </button>
        
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {user.nama.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user.nama}</h2>
            <p className="text-slate-500">Akun Orang Tua</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="flex items-center gap-3">
            <IconMail className="text-blue-500" />
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Email</p>
              <p className="text-sm font-semibold">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <IconPhone className="text-blue-500" />
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Telepon</p>
              <p className="text-sm font-semibold">{user.telepon}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:col-span-2">
            <IconMapPin className="text-blue-500" />
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Alamat</p>
              <p className="text-sm font-semibold">{user.alamat}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Anak Terhubung */}
      <div className="bg-slate-800 p-6 rounded-2xl flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <IconBabyCarriage className="text-blue-400" size={32} />
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">Anak Terhubung</p>
            <p className="font-bold">{user.anak}</p>
          </div>
        </div>
        <button className="text-xs bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition">
          Lihat Data Anak
        </button>
      </div>
    </div>
  );
}