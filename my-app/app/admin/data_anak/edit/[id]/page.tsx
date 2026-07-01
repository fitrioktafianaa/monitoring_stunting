"use client";

import React, { useState, use, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IconArrowLeft, IconDeviceFloppy } from '@tabler/icons-react';

export default function EditAnakPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  
  const { id } = use(params);

  const defaultData: Record<string, { nama: string; nik: string; lahir: string; ibu: string; namaAyah: string; posyandu: string; jk: string }> = {
    "1": { nama: "Dina Mariana", nik: "6472011201240001", lahir: "2024-01-12", ibu: "Siti Rahma", namaAyah: "Budi Santoso", posyandu: "1", jk: "P" },
    "2": { nama: "Bagas Dwi", nik: "6472010507230002", lahir: "2023-07-05", ibu: "Ayu Lestari", namaAyah: "Ahmad Lestari", posyandu: "2", jk: "L" },
    "3": { nama: "Siti Aisyah", nik: "6472012003240003", lahir: "2024-03-20", ibu: "Rina Wati", namaAyah: "Hendra Wati", posyandu: "3", jk: "P" },
    "4": { nama: "Muhammad Rizky", nik: "6472011409230004", lahir: "2023-09-14", ibu: "Dewi Kartika", namaAyah: "Dewi Kartika", posyandu: "1", jk: "L" },
    "5": { nama: "Putri Ramadhani", nik: "6472010804240005", lahir: "2024-04-08", ibu: "Eka Susanti", namaAyah: "Eko Susanto", posyandu: "1", jk: "P" },
    "6": { nama: "Ahmad Fauzi", nik: "6472012211230006", lahir: "2023-11-22", ibu: "Nurul Hidayah", namaAyah: "Ahmad Hidayah", posyandu: "2", jk: "L" },
    "7": { nama: "Aisyah Putri", nik: "6472013006240007", lahir: "2024-06-30", ibu: "Maya Sari", namaAyah: "Rudi Sari", posyandu: "3", jk: "P" },
    "8": { nama: "Bintang Pratama", nik: "6472011102240008", lahir: "2024-02-11", ibu: "Lestari Ningrum", namaAyah: "Budi Ningrum", posyandu: "2", jk: "L" },
    "9": { nama: "Citra Dewi", nik: "6472010308230009", lahir: "2023-08-03", ibu: "Harmini", namaAyah: "Dedi Harmini", posyandu: "1", jk: "P" },
    "10": { nama: "Dani Kurniawan", nik: "6472011705240010", lahir: "2024-05-17", ibu: "Suci Rahayu", namaAyah: "Suci Rahayu", posyandu: "1", jk: "L" },
  };

  const getInitialData = () => {
    const saved = JSON.parse(localStorage.getItem('dataBalitaTambahan') || '[]');
    const found = saved.find((item: { id: number }) => String(item.id) === id);
    if (found) {
      return {
        nama: found.nama || "",
        nik: found.detail?.nik || "",
        lahir: found.detail?.lahirAsli || "",
        ibu: found.ibu || "",
        namaAyah: found.detail?.namaAyah || "",
        posyandu: found.detail?.posyandu === 'Posyandu Sepinggan' ? '1' : found.detail?.posyandu === 'Puskesmas Manggar' ? '2' : '3',
        jk: found.jk === 'Laki-laki' ? 'L' : 'P',
      };
    }
    return defaultData[id] || { nama: "", nik: "", lahir: "", ibu: "", namaAyah: "", posyandu: "", jk: "" };
  };

  const [formData, setFormData] = useState(getInitialData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const saved = JSON.parse(localStorage.getItem('dataBalitaTambahan') || '[]');
    const index = saved.findIndex((item: { id: number }) => String(item.id) === id);

    const bulan = formData.lahir
      ? Math.floor((Date.now() - new Date(formData.lahir).getTime()) / (1000 * 60 * 60 * 24 * 30))
      : 0;
    const tanggalFormatted = formData.lahir
      ? new Date(formData.lahir).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
      : "";

    if (index !== -1) {
      saved[index] = {
        ...saved[index],
        nama: formData.nama,
        lahir: `${tanggalFormatted} (${bulan} bln)`,
        ibu: formData.ibu,
        jk: formData.jk === 'L' ? 'Laki-laki' : 'Perempuan',
        detail: {
          ...saved[index].detail,
          nik: formData.nik,
          namaIbu: formData.ibu,
          namaAyah: formData.namaAyah || '-',
          usia: `${bulan} Bulan`,
          posyandu: formData.posyandu === '1' ? 'Posyandu Sepinggan' : formData.posyandu === '2' ? 'Puskesmas Manggar' : 'Posyandu Klandasan',
          lahirAsli: formData.lahir,
        }
      };
      localStorage.setItem('dataBalitaTambahan', JSON.stringify(saved));
    } else {
      const newEntry = {
        id: Number(id),
        nama: formData.nama,
        lahir: `${tanggalFormatted} (${bulan} bln)`,
        ibu: formData.ibu,
        jk: formData.jk === 'L' ? 'Laki-laki' : 'Perempuan',
        detail: {
          nik: formData.nik,
          usia: `${bulan} Bulan`,
          golonganDarah: '-',
          namaAyah: formData.namaAyah || '-',
          namaIbu: formData.ibu,
          alamat: '-',
          posyandu: formData.posyandu === '1' ? 'Posyandu Sepinggan' : formData.posyandu === '2' ? 'Puskesmas Manggar' : 'Posyandu Klandasan',
          lahirAsli: formData.lahir,
          statusGizi: 'Normal',
          zScoreBB: 0,
          zScoreTB: 0,
          bbTerkini: 0,
          tbTerkini: 0,
          persentil: 0,
          riwayatAlergi: 'Tidak ada',
          riwayatPenyakit: 'Tidak ada',
          imunisasiTerakhir: '-',
          vitaminTerakhir: '-',
          riwayatImunisasi: [],
          beratBadan: 0,
          tinggiBadan: 0,
          tekananDarah: '-',
          detakJantung: 0,
          suhu: 0,
          tanggalPemeriksaan: '-'
        }
      };
      saved.push(newEntry);
      localStorage.setItem('dataBalitaTambahan', JSON.stringify(saved));
    }

    alert(`Data anak berhasil diupdate!`);
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
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nama Lengkap Balita *</label>
                <input 
                  type="text" 
                  value={formData.nama}
                  onChange={(e) => setFormData({...formData, nama: e.target.value})}
                  required
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">NIK / KIA *</label>
                <input 
                  type="text" 
                  maxLength={16}
                  value={formData.nik}
                  onChange={(e) => setFormData({...formData, nik: e.target.value})}
                  required
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tanggal Lahir *</label>
                <input 
                  type="date" 
                  value={formData.lahir}
                  onChange={(e) => setFormData({...formData, lahir: e.target.value})}
                  required
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Jenis Kelamin *</label>
                <div className="flex gap-4 h-[46px] items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="jk" value="L" checked={formData.jk === 'L'} onChange={(e) => setFormData({...formData, jk: e.target.value})} required className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">Laki-laki</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="jk" value="P" checked={formData.jk === 'P'} onChange={(e) => setFormData({...formData, jk: e.target.value})} required className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">Perempuan</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nama Ibu Kandung *</label>
                <input 
                  type="text" 
                  value={formData.ibu}
                  onChange={(e) => setFormData({...formData, ibu: e.target.value})}
                  required
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nama Ayah Kandung</label>
                <input 
                  type="text" 
                  value={formData.namaAyah}
                  onChange={(e) => setFormData({...formData, namaAyah: e.target.value})}
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Posyandu *</label>
              <select 
                value={formData.posyandu}
                onChange={(e) => setFormData({...formData, posyandu: e.target.value})}
                required
                className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
              >
                <option value="">-- Pilih Posyandu/Puskesmas --</option>
                <option value="1">Posyandu Sepinggan</option>
                <option value="2">Puskesmas Manggar</option>
                <option value="3">Posyandu Klandasan</option>
              </select>
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-3">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold transition cursor-pointer">
                 Simpan Perubahan
              </button>
              <button type="button" onClick={() => router.back()} className="px-6 py-3 rounded-xl border border-slate-300 text-sm font-bold text-slate-600 hover:bg-slate-50 transition cursor-pointer">
                Batal
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}