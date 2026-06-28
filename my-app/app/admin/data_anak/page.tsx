"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  IconBabyCarriage, 
  IconScale, 
  IconHistory, 
  IconReportMedical,
  IconPlus,
  IconSearch,
  IconEdit,
  IconTrash
} from '@tabler/icons-react';

export default function DataAnakPage() {
  const router = useRouter();
  
  // State untuk Navigasi Tab
  const [activeTab, setActiveTab] = useState<'data' | 'input' | 'riwayat' | 'status'>('data');

  // State untuk Tabel Data Balita
  const [dataBalita, setDataBalita] = useState([
    { id: 1, nama: "Dina Mariana", lahir: "12 Jan 2024 (18 bln)", ibu: "Siti Rahma", jk: "Perempuan" },
    { id: 2, nama: "Bagas Dwi", lahir: "05 Jul 2023 (24 bln)", ibu: "Ayu Lestari", jk: "Laki-laki" },
  ]);

  // State untuk Form Input Pengukuran
  const [formPengukuran, setFormPengukuran] = useState({
    balitaId: "",
    tanggal: "",
    caraUkur: "Terlentang (Panjang Badan)",
    berat: "",
    tinggi: ""
  });

  // Fungsi Hapus Data
  const handleDelete = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      setDataBalita(dataBalita.filter((item) => item.id !== id));
    }
  };

  // Fungsi Simpan Form Pengukuran
  const handleSimpanPengukuran = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formPengukuran.balitaId || !formPengukuran.tanggal || !formPengukuran.berat || !formPengukuran.tinggi) {
      alert("Mohon lengkapi semua data yang bertanda bintang (*)");
      return;
    }

    alert("Hasil pengukuran berhasil disimpan!");

    setFormPengukuran({
      balitaId: "",
      tanggal: "",
      caraUkur: "Terlentang (Panjang Badan)",
      berat: "",
      tinggi: ""
    });

    setActiveTab('data');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-[sans-serif] text-slate-800 pb-12">
      <main className="mx-auto max-w-6xl px-4 md:px-6 mt-8">
        
        {/* Header Halaman */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Manajemen Data Anak</h1>
          <p className="text-slate-500 mt-1">Kelola data identitas balita, input hasil posyandu, dan pantau status gizi.</p>
        </div>

        {/* Tab Sub-Menu */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-6 border-b border-slate-200 pb-px">
          <button onClick={() => setActiveTab('data')} className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab === 'data' ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
            <IconBabyCarriage size={20} /> <span className="hidden md:inline">Data Balita</span>
          </button>
          <button onClick={() => setActiveTab('input')} className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab === 'input' ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
            <IconScale size={20} /> <span className="hidden md:inline">Input Pengukuran</span>
          </button>
          <button onClick={() => setActiveTab('riwayat')} className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab === 'riwayat' ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
            <IconHistory size={20} /> <span className="hidden md:inline">Riwayat Pengukuran</span>
          </button>
          <button onClick={() => setActiveTab('status')} className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab === 'status' ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
            <IconReportMedical size={20} /> <span className="hidden md:inline">Status Stunting</span>
          </button>
        </div>

        {/* KONTEN: DATA BALITA */}
        {activeTab === 'data' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50">
              <div className="relative w-full md:w-72">
                <IconSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Cari nama balita..." className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl outline-none" />
              </div>
              <Link href="/data_anak/tambah" className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition shadow-sm cursor-pointer">
                <IconPlus size={18} /> Tambah Data Balita
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="p-4">Nama Lengkap</th>
                    <th className="p-4">Tanggal Lahir</th>
                    <th className="p-4">Nama Ibu</th>
                    <th className="p-4">Jenis Kelamin</th>
                    <th className="p-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600 divide-y divide-slate-100">
                  {dataBalita.map((anak) => (
                    <tr key={anak.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-800">{anak.nama}</td>
                      <td className="p-4">{anak.lahir}</td>
                      <td className="p-4">{anak.ibu}</td>
                      <td className="p-4">{anak.jk}</td>
                      <td className="p-4 flex justify-end gap-2">
                        <button onClick={() => router.push(`/data_anak/edit/${anak.id}`)} className="p-1.5 text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg transition cursor-pointer">
                          <IconEdit size={18}/>
                        </button>
                        <button onClick={() => handleDelete(anak.id)} className="p-1.5 text-red-600 bg-red-50 hover:bg-red-600 hover:text-white rounded-lg transition cursor-pointer">
                          <IconTrash size={18}/>
                        </button>
                      </td> 
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* KONTEN 2: INPUT PENGUKURAN */}
        {activeTab === 'input' && (
          <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Form Pengukuran Bulanan</h3>
              <p className="text-xs text-slate-500 mt-1">Masukkan hasil timbangan dan panjang/tinggi badan balita dari posyandu.</p>
            </div>
            
            <form className="p-6 space-y-5" onSubmit={handleSimpanPengukuran}>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Pilih Balita <span className="text-red-500">*</span></label>
                <select 
                  required
                  value={formPengukuran.balitaId}
                  onChange={(e) => setFormPengukuran({...formPengukuran, balitaId: e.target.value})}
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer"
                >
                  <option value="">-- Pilih dari daftar --</option>
                  {dataBalita.map((anak) => (
                    <option key={anak.id} value={anak.id}>{anak.nama}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tanggal Pengukuran <span className="text-red-500">*</span></label>
                  <input 
                    type="date" 
                    required 
                    value={formPengukuran.tanggal}
                    onChange={(e) => setFormPengukuran({...formPengukuran, tanggal: e.target.value})}
                    className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Cara Ukur Panjang</label>
                  <select 
                    value={formPengukuran.caraUkur}
                    onChange={(e) => setFormPengukuran({...formPengukuran, caraUkur: e.target.value})}
                    className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer"
                  >
                    <option value="Terlentang (Panjang Badan)">Terlentang (Panjang Badan)</option>
                    <option value="Berdiri (Tinggi Badan)">Berdiri (Tinggi Badan)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Berat Badan (kg) <span className="text-red-500">*</span></label>
                  <input 
                    type="number" 
                    step="0.1" 
                    placeholder="Contoh: 8.5" 
                    required 
                    value={formPengukuran.berat}
                    onChange={(e) => setFormPengukuran({...formPengukuran, berat: e.target.value})}
                    className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tinggi/Panjang Badan (cm) <span className="text-red-500">*</span></label>
                  <input 
                    type="number" 
                    step="0.1" 
                    placeholder="Contoh: 75.2" 
                    required 
                    value={formPengukuran.tinggi}
                    onChange={(e) => setFormPengukuran({...formPengukuran, tinggi: e.target.value})}
                    className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  />
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-100">
                <button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-sm font-bold transition shadow-md shadow-blue-100 cursor-pointer">
                  Simpan Hasil Pengukuran
                </button>
              </div>
            </form>
          </div>
        )}

        {/* KONTEN 3: RIWAYAT PENGUKURAN */}
        {activeTab === 'riwayat' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 flex flex-col items-center justify-center text-center py-20">
             <IconHistory size={48} className="text-slate-300 mb-4" stroke={1.5} />
             <h3 className="font-bold text-slate-900 text-lg">Pilih Balita Terlebih Dahulu</h3>
             <p className="text-sm text-slate-500 mt-2 max-w-sm">Gunakan fitur pencarian di tab "Data Balita" atau pilih anak untuk melihat riwayat kurva pertumbuhan bulanan mereka di sini.</p>
             <button onClick={() => setActiveTab('data')} className="mt-6 text-sm font-bold text-blue-600 bg-blue-50 px-5 py-2 rounded-lg hover:bg-blue-100 transition cursor-pointer">
               Kembali ke Data Balita
             </button>
          </div>
        )}

        {/* KONTEN 4: STATUS STUNTING */}
        {activeTab === 'status' && (
          <div className="w-full">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
                Kalkulasi Z-Score Kemenkes
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-semibold mb-1">Status Gizi (Berat Badan / Umur)</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-slate-900">Z-Score: -1.2</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">Gizi Baik (Normal)</span>
                  </div>
                </div>
                <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
                  <p className="text-xs text-slate-500 font-semibold mb-1">Status Stunting (Tinggi Badan / Umur)</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-red-600">Z-Score: -3.1</span>
                    <span className="text-xs font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full">Sangat Pendek (Stunting)</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-6 leading-relaxed">
                *Perhitungan di atas menggunakan standar deviasi WHO 2006. Data sampel ditunjukkan untuk balita a.n <strong>Dina Mariana</strong> pada pengukuran terakhir bulan Juni 2026.
              </p>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}