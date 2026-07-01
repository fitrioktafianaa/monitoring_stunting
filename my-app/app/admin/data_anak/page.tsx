"use client";

import React, { useState, useEffect } from 'react';
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
  IconTrash,
  IconUser,
  IconStethoscope,
  IconNeedle,
  IconDroplet,
  IconId,
  IconHome,
  IconUsers,
  IconHeartbeat,
  IconThermometer,
  IconClock,
  IconActivity,
  IconHeart,
  IconAlertTriangle,
  IconRuler
} from '@tabler/icons-react';

export default function DataAnakPage() {
  const router = useRouter();
  
  // State untuk Navigasi Tab
  const [activeTab, setActiveTab] = useState<'data' | 'input' | 'riwayat' | 'status' | 'profil'>('data');

  // State untuk Anak yang Dipilih
  const [anakDipilih, setAnakDipilih] = useState<number | null>(null);

  // State untuk Tabel Data Balita
  const [dataBalita, setDataBalita] = useState([
    { id: 1, nama: "Dina Mariana", lahir: "12 Jan 2024 (18 bln)", ibu: "Siti Rahma", jk: "Perempuan" },
    { id: 2, nama: "Bagas Dwi", lahir: "05 Jul 2023 (24 bln)", ibu: "Ayu Lestari", jk: "Laki-laki" },
    { id: 3, nama: "Siti Aisyah", lahir: "20 Mar 2024 (15 bln)", ibu: "Rina Wati", jk: "Perempuan" },
    { id: 4, nama: "Muhammad Rizky", lahir: "14 Sep 2023 (21 bln)", ibu: "Dewi Kartika", jk: "Laki-laki" },
    { id: 5, nama: "Putri Ramadhani", lahir: "08 Apr 2024 (14 bln)", ibu: "Eka Susanti", jk: "Perempuan" },
    { id: 6, nama: "Ahmad Fauzi", lahir: "22 Nov 2023 (19 bln)", ibu: "Nurul Hidayah", jk: "Laki-laki" },
    { id: 7, nama: "Aisyah Putri", lahir: "30 Jun 2024 (12 bln)", ibu: "Maya Sari", jk: "Perempuan" },
    { id: 8, nama: "Bintang Pratama", lahir: "11 Feb 2024 (16 bln)", ibu: "Lestari Ningrum", jk: "Laki-laki" },
    { id: 9, nama: "Citra Dewi", lahir: "03 Ags 2023 (23 bln)", ibu: "Harmini", jk: "Perempuan" },
    { id: 10, nama: "Dani Kurniawan", lahir: "17 Mei 2024 (13 bln)", ibu: "Suci Rahayu", jk: "Laki-laki" },
  ]);

  // Load data tambahan dari localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('dataBalitaTambahan') || '[]');
    if (saved.length > 0) {
      setDataBalita(prev => {
        const next = [...prev];
        saved.forEach((item: { id: number; nama: string; lahir: string; ibu: string; jk: string }) => {
          const idx = next.findIndex(d => d.id === item.id);
          if (idx !== -1) {
            next[idx] = { ...next[idx], nama: item.nama, lahir: item.lahir, ibu: item.ibu, jk: item.jk };
          } else {
            next.push(item);
          }
        });
        return next;
      });
      setDataDetailAnak(prev => {
        const next = { ...prev };
        saved.forEach((item: { id: number; detail: Record<string, unknown> }) => {
          if (item.detail) {
            next[item.id] = item.detail as typeof next[number];
          }
        });
        return next;
      });
    }
  }, []);

  // State untuk Form Input Pengukuran
  const [formPengukuran, setFormPengukuran] = useState({
    balitaId: "",
    tanggal: "",
    caraUkur: "Terlentang (Panjang Badan)",
    berat: "",
    tinggi: "",
    suhu: "",
    detakJantung: "",
    tekananDarah: ""
  });

  // State untuk Pencarian
  const [searchQuery, setSearchQuery] = useState('');

  // Data Riwayat Pengukuran
  const [riwayatPengukuran, setRiwayatPengukuran] = useState([
    { nama: "Dina Mariana", tanggal: "25 Juni 2026", berat: "10.2", tinggi: "81.5" },
    { nama: "Bagas Dwi", tanggal: "26 Juni 2026", berat: "12.5", tinggi: "90.2" },
    { nama: "Siti Aisyah", tanggal: "24 Juni 2026", berat: "9.1", tinggi: "76.3" },
    { nama: "Muhammad Rizky", tanggal: "23 Juni 2026", berat: "11.8", tinggi: "87.4" },
    { nama: "Putri Ramadhani", tanggal: "22 Juni 2026", berat: "8.5", tinggi: "73.1" },
    { nama: "Ahmad Fauzi", tanggal: "21 Juni 2026", berat: "10.9", tinggi: "84.6" },
    { nama: "Aisyah Putri", tanggal: "20 Juni 2026", berat: "7.8", tinggi: "68.9" },
    { nama: "Bintang Pratama", tanggal: "25 Juni 2026", berat: "10.1", tinggi: "79.2" },
    { nama: "Citra Dewi", tanggal: "24 Juni 2026", berat: "11.3", tinggi: "88.7" },
    { nama: "Dani Kurniawan", tanggal: "23 Juni 2026", berat: "8.9", tinggi: "72.4" },
  ]);

  // Data Filter
  const filteredData = dataBalita.filter((anak) =>
    anak.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredRiwayat = riwayatPengukuran.filter((item) =>
    item.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Data Detail Anak (state agar bisa diupdate)
  const [dataDetailAnak, setDataDetailAnak] = useState<Record<number, {
    nik: string;
    usia: string;
    golonganDarah: string;
    namaAyah: string;
    namaIbu: string;
    alamat: string;
    posyandu: string;
    statusGizi: string;
    zScoreBB: number;
    zScoreTB: number;
    bbTerkini: number;
    tbTerkini: number;
    persentil: number;
    riwayatAlergi: string;
    riwayatPenyakit: string;
    imunisasiTerakhir: string;
    vitaminTerakhir: string;
    riwayatImunisasi: Array<{ nama: string; tanggal: string; status: string }>;
    beratBadan: number;
    tinggiBadan: number;
    tekananDarah: string;
    detakJantung: number;
    suhu: number;
    tanggalPemeriksaan: string;
  }>>({
    1: {
      nik: "6472011201240001",
      usia: "18 Bulan",
      golonganDarah: "A",
      namaAyah: "Budi Santoso",
      namaIbu: "Siti Rahma",
      alamat: "Jl. Sepinggan Baru No. 45, Balikpapan",
      posyandu: "Posyandu Sepinggan",
      statusGizi: "Normal",
      zScoreBB: -0.8,
      zScoreTB: -1.2,
      bbTerkini: 10.2,
      tbTerkini: 81.5,
      persentil: 45,
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
        { nama: "Campak", tanggal: "15 Feb 2026", status: "Selesai" }
      ],
      beratBadan: 10.2,
      tinggiBadan: 81.5,
      tekananDarah: "90/60",
      detakJantung: 110,
      suhu: 36.5,
      tanggalPemeriksaan: "15 Maret 2026"
    },
    2: {
      nik: "6472010507230002",
      usia: "24 Bulan",
      golonganDarah: "O",
      namaAyah: "Ahmad Lestari",
      namaIbu: "Ayu Lestari",
      alamat: "Jl. Manggar Sejahtera No. 12, Balikpapan",
      posyandu: "Puskesmas Manggar",
      statusGizi: "Gizi Kurang",
      zScoreBB: -0.8,
      zScoreTB: -2.5,
      bbTerkini: 12.5,
      tbTerkini: 90.2,
      persentil: 35,
      riwayatAlergi: "Alergi susu sapi",
      riwayatPenyakit: "Pernah diare ringan",
      imunisasiTerakhir: "Imunisasi DPT-3 (10 Jan 2026)",
      vitaminTerakhir: "Vitamin A (10 Jan 2026)",
      riwayatImunisasi: [
        { nama: "BCG", tanggal: "05 Jul 2023", status: "Selesai" },
        { nama: "Hepatitis B", tanggal: "05 Jul 2023", status: "Selesai" },
        { nama: "DPT-1", tanggal: "05 Okt 2023", status: "Selesai" },
        { nama: "DPT-2", tanggal: "05 Des 2023", status: "Selesai" },
        { nama: "DPT-3", tanggal: "10 Jan 2026", status: "Selesai" },
        { nama: "Polio", tanggal: "05 Okt 2023", status: "Selesai" }
      ],
      beratBadan: 12.5,
      tinggiBadan: 90.2,
      tekananDarah: "95/65",
      detakJantung: 105,
      suhu: 36.8,
      tanggalPemeriksaan: "10 Maret 2026"
    },
    3: {
      nik: "6472012003240003",
      usia: "15 Bulan",
      golonganDarah: "B",
      namaAyah: "Hendra Wati",
      namaIbu: "Rina Wati",
      alamat: "Jl. Klandasan Indah No. 8, Balikpapan",
      posyandu: "Posyandu Klandasan",
      statusGizi: "Normal",
      zScoreBB: -1.5,
      zScoreTB: -1.8,
      bbTerkini: 9.1,
      tbTerkini: 76.3,
      persentil: 40,
      riwayatAlergi: "Tidak ada alergi",
      riwayatPenyakit: "Tidak ada riwayat penyakit",
      imunisasiTerakhir: "Imunisasi Campak (20 Jan 2026)",
      vitaminTerakhir: "Vitamin A (20 Jan 2026)",
      riwayatImunisasi: [
        { nama: "BCG", tanggal: "20 Mar 2024", status: "Selesai" },
        { nama: "Hepatitis B", tanggal: "20 Mar 2024", status: "Selesai" },
        { nama: "DPT-1", tanggal: "20 Jun 2024", status: "Selesai" },
        { nama: "DPT-2", tanggal: "20 Agu 2024", status: "Selesai" },
        { nama: "DPT-3", tanggal: "20 Okt 2024", status: "Selesai" },
        { nama: "Polio", tanggal: "20 Jun 2024", status: "Selesai" },
        { nama: "Campak", tanggal: "20 Jan 2026", status: "Selesai" }
      ],
      beratBadan: 9.1,
      tinggiBadan: 76.3,
      tekananDarah: "88/58",
      detakJantung: 112,
      suhu: 36.7,
      tanggalPemeriksaan: "20 Maret 2026"
    },
    4: {
      nik: "6472011409230004",
      usia: "21 Bulan",
      golonganDarah: "AB",
      namaAyah: "Dewi Kartika",
      namaIbu: "Dewi Kartika",
      alamat: "Jl. Sepinggan Raya No. 22, Balikpapan",
      posyandu: "Posyandu Sepinggan",
      statusGizi: "Normal",
      zScoreBB: 0.3,
      zScoreTB: -0.5,
      bbTerkini: 11.8,
      tbTerkini: 87.4,
      persentil: 55,
      riwayatAlergi: "Tidak ada alergi",
      riwayatPenyakit: "Tidak ada riwayat penyakit",
      imunisasiTerakhir: "Imunisasi DPT-3 (15 Sep 2025)",
      vitaminTerakhir: "Vitamin A (15 Feb 2026)",
      riwayatImunisasi: [
        { nama: "BCG", tanggal: "14 Sep 2023", status: "Selesai" },
        { nama: "Hepatitis B", tanggal: "14 Sep 2023", status: "Selesai" },
        { nama: "DPT-1", tanggal: "14 Des 2023", status: "Selesai" },
        { nama: "DPT-2", tanggal: "14 Feb 2024", status: "Selesai" },
        { nama: "DPT-3", tanggal: "15 Sep 2025", status: "Selesai" },
        { nama: "Polio", tanggal: "14 Des 2023", status: "Selesai" }
      ],
      beratBadan: 11.8,
      tinggiBadan: 87.4,
      tekananDarah: "92/62",
      detakJantung: 108,
      suhu: 36.6,
      tanggalPemeriksaan: "15 Maret 2026"
    },
    5: {
      nik: "6472010804240005",
      usia: "14 Bulan",
      golonganDarah: "A",
      namaAyah: "Eko Susanto",
      namaIbu: "Eka Susanti",
      alamat: "Jl. Gunung Bahagia No. 5, Balikpapan",
      posyandu: "Posyandu Gunung Bahagia",
      statusGizi: "Stunting",
      zScoreBB: -2.1,
      zScoreTB: -2.8,
      bbTerkini: 8.5,
      tbTerkini: 73.1,
      persentil: 20,
      riwayatAlergi: "Alergi makanan laut",
      riwayatPenyakit: "Pernah campak ringan",
      imunisasiTerakhir: "Imunisasi Campak (08 Apr 2026)",
      vitaminTerakhir: "Vitamin A (08 Apr 2026)",
      riwayatImunisasi: [
        { nama: "BCG", tanggal: "08 Apr 2024", status: "Selesai" },
        { nama: "Hepatitis B", tanggal: "08 Apr 2024", status: "Selesai" },
        { nama: "DPT-1", tanggal: "08 Jul 2024", status: "Selesai" },
        { nama: "DPT-2", tanggal: "08 Sep 2024", status: "Selesai" },
        { nama: "DPT-3", tanggal: "08 Nov 2024", status: "Selesai" },
        { nama: "Polio", tanggal: "08 Jul 2024", status: "Selesai" },
        { nama: "Campak", tanggal: "08 Apr 2026", status: "Selesai" }
      ],
      beratBadan: 8.5,
      tinggiBadan: 73.1,
      tekananDarah: "85/55",
      detakJantung: 115,
      suhu: 36.9,
      tanggalPemeriksaan: "08 Maret 2026"
    },
    6: {
      nik: "6472012211230006",
      usia: "19 Bulan",
      golonganDarah: "O",
      namaAyah: "Ahmad Hidayah",
      namaIbu: "Nurul Hidayah",
      alamat: "Jl. Manggar Baru No. 18, Balikpapan",
      posyandu: "Puskesmas Manggar",
      statusGizi: "Normal",
      zScoreBB: -0.5,
      zScoreTB: -1.2,
      bbTerkini: 10.9,
      tbTerkini: 84.6,
      persentil: 48,
      riwayatAlergi: "Tidak ada alergi",
      riwayatPenyakit: "Tidak ada riwayat penyakit",
      imunisasiTerakhir: "Imunisasi Campak (22 Nov 2025)",
      vitaminTerakhir: "Vitamin A (22 Feb 2026)",
      riwayatImunisasi: [
        { nama: "BCG", tanggal: "22 Nov 2023", status: "Selesai" },
        { nama: "Hepatitis B", tanggal: "22 Nov 2023", status: "Selesai" },
        { nama: "DPT-1", tanggal: "22 Feb 2024", status: "Selesai" },
        { nama: "DPT-2", tanggal: "22 Apr 2024", status: "Selesai" },
        { nama: "DPT-3", tanggal: "22 Jun 2024", status: "Selesai" },
        { nama: "Polio", tanggal: "22 Feb 2024", status: "Selesai" },
        { nama: "Campak", tanggal: "22 Nov 2025", status: "Selesai" }
      ],
      beratBadan: 10.9,
      tinggiBadan: 84.6,
      tekananDarah: "90/60",
      detakJantung: 110,
      suhu: 36.5,
      tanggalPemeriksaan: "22 Maret 2026"
    },
    7: {
      nik: "6472013006240007",
      usia: "12 Bulan",
      golonganDarah: "B",
      namaAyah: "Rudi Sari",
      namaIbu: "Maya Sari",
      alamat: "Jl. Klandasan No. 3, Balikpapan",
      posyandu: "Posyandu Klandasan",
      statusGizi: "Normal",
      zScoreBB: -1.8,
      zScoreTB: -1.5,
      bbTerkini: 7.8,
      tbTerkini: 68.9,
      persentil: 38,
      riwayatAlergi: "Tidak ada alergi",
      riwayatPenyakit: "Tidak ada riwayat penyakit",
      imunisasiTerakhir: "Imunisasi Campak (30 Jun 2025)",
      vitaminTerakhir: "Vitamin A (30 Des 2025)",
      riwayatImunisasi: [
        { nama: "BCG", tanggal: "30 Jun 2024", status: "Selesai" },
        { nama: "Hepatitis B", tanggal: "30 Jun 2024", status: "Selesai" },
        { nama: "DPT-1", tanggal: "30 Sep 2024", status: "Selesai" },
        { nama: "DPT-2", tanggal: "30 Nov 2024", status: "Selesai" },
        { nama: "DPT-3", tanggal: "30 Jan 2025", status: "Selesai" },
        { nama: "Polio", tanggal: "30 Sep 2024", status: "Selesai" },
        { nama: "Campak", tanggal: "30 Jun 2025", status: "Selesai" }
      ],
      beratBadan: 7.8,
      tinggiBadan: 68.9,
      tekananDarah: "82/52",
      detakJantung: 118,
      suhu: 36.8,
      tanggalPemeriksaan: "30 Maret 2026"
    },
    8: {
      nik: "6472011102240008",
      usia: "16 Bulan",
      golonganDarah: "AB",
      namaAyah: "Budi Ningrum",
      namaIbu: "Lestari Ningrum",
      alamat: "Jl. Sepinggan Baru No. 30, Balikpapan",
      posyandu: "Puskesmas Manggar",
      statusGizi: "Gizi Kurang",
      zScoreBB: -2.3,
      zScoreTB: -2.2,
      bbTerkini: 10.1,
      tbTerkini: 79.2,
      persentil: 28,
      riwayatAlergi: "Alergi debu",
      riwayatPenyakit: "Pernah batuk pilek berulang",
      imunisasiTerakhir: "Imunisasi DPT-3 (11 Feb 2026)",
      vitaminTerakhir: "Vitamin A (11 Feb 2026)",
      riwayatImunisasi: [
        { nama: "BCG", tanggal: "11 Feb 2024", status: "Selesai" },
        { nama: "Hepatitis B", tanggal: "11 Feb 2024", status: "Selesai" },
        { nama: "DPT-1", tanggal: "11 Mei 2024", status: "Selesai" },
        { nama: "DPT-2", tanggal: "11 Jul 2024", status: "Selesai" },
        { nama: "DPT-3", tanggal: "11 Feb 2026", status: "Selesai" },
        { nama: "Polio", tanggal: "11 Mei 2024", status: "Selesai" }
      ],
      beratBadan: 10.1,
      tinggiBadan: 79.2,
      tekananDarah: "88/58",
      detakJantung: 114,
      suhu: 37.0,
      tanggalPemeriksaan: "11 Maret 2026"
    },
    9: {
      nik: "6472010308230009",
      usia: "23 Bulan",
      golonganDarah: "O",
      namaAyah: "Dedi Harmini",
      namaIbu: "Harmini",
      alamat: "Jl. Sepinggan Raya No. 42, Balikpapan",
      posyandu: "Posyandu Sepinggan",
      statusGizi: "Normal",
      zScoreBB: 0.5,
      zScoreTB: 0.2,
      bbTerkini: 11.3,
      tbTerkini: 88.7,
      persentil: 58,
      riwayatAlergi: "Tidak ada alergi",
      riwayatPenyakit: "Tidak ada riwayat penyakit",
      imunisasiTerakhir: "Imunisasi Campak (03 Ags 2025)",
      vitaminTerakhir: "Vitamin A (03 Feb 2026)",
      riwayatImunisasi: [
        { nama: "BCG", tanggal: "03 Ags 2023", status: "Selesai" },
        { nama: "Hepatitis B", tanggal: "03 Ags 2023", status: "Selesai" },
        { nama: "DPT-1", tanggal: "03 Nov 2023", status: "Selesai" },
        { nama: "DPT-2", tanggal: "03 Jan 2024", status: "Selesai" },
        { nama: "DPT-3", tanggal: "03 Mar 2024", status: "Selesai" },
        { nama: "Polio", tanggal: "03 Nov 2023", status: "Selesai" },
        { nama: "Campak", tanggal: "03 Ags 2025", status: "Selesai" }
      ],
      beratBadan: 11.3,
      tinggiBadan: 88.7,
      tekananDarah: "93/63",
      detakJantung: 106,
      suhu: 36.4,
      tanggalPemeriksaan: "03 Maret 2026"
    },
    10: {
      nik: "6472011705240010",
      usia: "13 Bulan",
      golonganDarah: "A",
      namaAyah: "Suci Rahayu",
      namaIbu: "Suci Rahayu",
      alamat: "Jl. Gunung Bahagia No. 15, Balikpapan",
      posyandu: "Posyandu Gunung Bahagia",
      statusGizi: "Normal",
      zScoreBB: -1.0,
      zScoreTB: -1.9,
      bbTerkini: 8.9,
      tbTerkini: 72.4,
      persentil: 42,
      riwayatAlergi: "Tidak ada alergi",
      riwayatPenyakit: "Tidak ada riwayat penyakit",
      imunisasiTerakhir: "Imunisasi Campak (17 Mei 2025)",
      vitaminTerakhir: "Vitamin A (17 Nov 2025)",
      riwayatImunisasi: [
        { nama: "BCG", tanggal: "17 Mei 2024", status: "Selesai" },
        { nama: "Hepatitis B", tanggal: "17 Mei 2024", status: "Selesai" },
        { nama: "DPT-1", tanggal: "17 Agu 2024", status: "Selesai" },
        { nama: "DPT-2", tanggal: "17 Okt 2024", status: "Selesai" },
        { nama: "DPT-3", tanggal: "17 Des 2024", status: "Selesai" },
        { nama: "Polio", tanggal: "17 Agu 2024", status: "Selesai" },
        { nama: "Campak", tanggal: "17 Mei 2025", status: "Selesai" }
      ],
      beratBadan: 8.9,
      tinggiBadan: 72.4,
      tekananDarah: "84/54",
      detakJantung: 116,
      suhu: 36.7,
      tanggalPemeriksaan: "17 Maret 2026"
    }
  });

  const detailAnak = anakDipilih ? dataDetailAnak[anakDipilih] : null;
  const namaAnakDipilih = dataBalita.find(a => a.id === anakDipilih)?.nama || "";

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

    const balitaId = Number(formPengukuran.balitaId);
    const beratBaru = parseFloat(formPengukuran.berat);
    const tinggiBaru = parseFloat(formPengukuran.tinggi);
    const tanggalFormatted = new Date(formPengukuran.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    // Parse nilai tambahan (jika kosong, gunakan nilai dari data existing)
    const suhuBaru = formPengukuran.suhu ? parseFloat(formPengukuran.suhu) : (dataDetailAnak[balitaId]?.suhu || 36.5);
    const detakJantungBaru = formPengukuran.detakJantung ? parseInt(formPengukuran.detakJantung) : (dataDetailAnak[balitaId]?.detakJantung || 110);
    const tekananDarahBaru = formPengukuran.tekananDarah || (dataDetailAnak[balitaId]?.tekananDarah || "90/60");

    // Update data detail anak
    setDataDetailAnak(prev => ({
      ...prev,
      [balitaId]: {
        ...prev[balitaId],
        bbTerkini: beratBaru,
        tbTerkini: tinggiBaru,
        beratBadan: beratBaru,
        tinggiBadan: tinggiBaru,
        suhu: suhuBaru,
        detakJantung: detakJantungBaru,
        tekananDarah: tekananDarahBaru,
        tanggalPemeriksaan: tanggalFormatted
      }
    }));

    // Update riwayat pengukuran
    setRiwayatPengukuran(prev => [
      { nama: dataBalita.find(a => a.id === balitaId)?.nama || "", tanggal: tanggalFormatted, berat: formPengukuran.berat, tinggi: formPengukuran.tinggi },
      ...prev
    ]);

    alert("Hasil pengukuran berhasil disimpan!");

    setFormPengukuran({
      balitaId: "",
      tanggal: "",
      caraUkur: "Terlentang (Panjang Badan)",
      berat: "",
      tinggi: "",
      suhu: "",
      detakJantung: "",
      tekananDarah: ""
    });

    setActiveTab('profil');
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
          <button onClick={() => setActiveTab('profil')} className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab === 'profil' ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
            <IconUser size={20} /> <span className="hidden md:inline">Profil Anak</span>
          </button>
        </div>


        {/* KONTEN: DATA BALITA */}
        {activeTab === 'data' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50">
              <div className="relative w-full md:w-72">
                <IconSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Cari nama balita..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl outline-none" 
                />
              </div>
              <Link href="/admin/data_anak/tambah" className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition shadow-sm cursor-pointer">
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
                  {filteredData.map((anak) => (
                    <tr key={anak.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-800">{anak.nama}</td>
                      <td className="p-4">{anak.lahir}</td>
                      <td className="p-4">{anak.ibu}</td>
                      <td className="p-4">{anak.jk}</td>
                      <td className="p-4 flex justify-end gap-2">
                        <button onClick={() => router.push(`/admin/data_anak/edit/${anak.id}`)} className="p-1.5 text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg transition cursor-pointer">
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
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Suhu Badan (°C)</label>
                  <input 
                    type="number" 
                    step="0.1" 
                    placeholder="Contoh: 36.5" 
                    value={formPengukuran.suhu}
                    onChange={(e) => setFormPengukuran({...formPengukuran, suhu: e.target.value})}
                    className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Detak Jantung (bpm)</label>
                  <input 
                    type="number" 
                    step="1" 
                    placeholder="Contoh: 110" 
                    value={formPengukuran.detakJantung}
                    onChange={(e) => setFormPengukuran({...formPengukuran, detakJantung: e.target.value})}
                    className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tekanan Darah</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: 90/60" 
                    value={formPengukuran.tekananDarah}
                    onChange={(e) => setFormPengukuran({...formPengukuran, tekananDarah: e.target.value})}
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

        {/* KONTEN: RIWAYAT PENGUKURAN (Versi Tampilkan Semua) */}
        {activeTab === 'riwayat' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="font-bold text-slate-900">Seluruh Riwayat Pengukuran</h3>
                <p className="text-xs text-slate-500 mt-1">Daftar lengkap hasil pengukuran dari seluruh balita yang terdaftar.</p>
              </div>
              <div className="relative w-full md:w-72">
                <IconSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Cari nama balita..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl outline-none" 
                />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="p-4">Nama Balita</th>
                    <th className="p-4">Tanggal</th>
                    <th className="p-4">Berat (kg)</th>
                    <th className="p-4">Tinggi (cm)</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600 divide-y divide-slate-100">
                  {filteredRiwayat.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="p-4 font-bold text-slate-800">{item.nama}</td>
                      <td className="p-4">{item.tanggal}</td>
                      <td className="p-4">{item.berat}</td>
                      <td className="p-4">{item.tinggi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* KONTEN 4: STATUS STUNTING */}
       {activeTab === 'status' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="font-bold text-slate-900">Status Stunting Seluruh Balita</h3>
                <p className="text-xs text-slate-500 mt-1">Data status gizi berdasarkan pengukuran terakhir.</p>
              </div>
              <div className="relative w-full md:w-72">
                <IconSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Cari nama balita..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl outline-none" 
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="p-4">Nama Balita</th>
                    <th className="p-4 text-center">Z-Score (BB/U)</th>
                    <th className="p-4 text-center">Status BB/U</th>
                    <th className="p-4 text-center">Z-Score (TB/U)</th>
                    <th className="p-4 text-center">Status TB/U</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600 divide-y divide-slate-100">
                  {filteredData.map((anak) => {
                    const statusData: Record<number, { bbScore: string; bbStatus: string; bbColor: string; tbScore: string; tbStatus: string; tbColor: string }> = {
                      1: { bbScore: "-1.2", bbStatus: "Normal", bbColor: "emerald", tbScore: "-3.1", tbStatus: "Stunting", tbColor: "red" },
                      2: { bbScore: "-0.8", bbStatus: "Normal", bbColor: "emerald", tbScore: "-2.5", tbStatus: "Stunting", tbColor: "red" },
                      3: { bbScore: "-1.5", bbStatus: "Normal", bbColor: "emerald", tbScore: "-1.8", tbStatus: "Normal", tbColor: "emerald" },
                      4: { bbScore: "+0.3", bbStatus: "Normal", bbColor: "emerald", tbScore: "-0.5", tbStatus: "Normal", tbColor: "emerald" },
                      5: { bbScore: "-2.1", bbStatus: "Gizi Kurang", bbColor: "amber", tbScore: "-2.8", tbStatus: "Stunting", tbColor: "red" },
                      6: { bbScore: "-0.5", bbStatus: "Normal", bbColor: "emerald", tbScore: "-1.2", tbStatus: "Normal", tbColor: "emerald" },
                      7: { bbScore: "-1.8", bbStatus: "Normal", bbColor: "emerald", tbScore: "-1.5", tbStatus: "Normal", tbColor: "emerald" },
                      8: { bbScore: "-2.3", bbStatus: "Gizi Kurang", bbColor: "amber", tbScore: "-2.2", tbStatus: "Gizi Kurang", tbColor: "amber" },
                      9: { bbScore: "+0.5", bbStatus: "Normal", bbColor: "emerald", tbScore: "+0.2", tbStatus: "Normal", tbColor: "emerald" },
                      10: { bbScore: "-1.0", bbStatus: "Normal", bbColor: "emerald", tbScore: "-1.9", tbStatus: "Normal", tbColor: "emerald" },
                    };
                    const s = statusData[anak.id] || { bbScore: "0", bbStatus: "Normal", bbColor: "emerald", tbScore: "0", tbStatus: "Normal", tbColor: "emerald" };
                    return (
                    <tr key={anak.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-800">{anak.nama}</td>
                      <td className="p-4 text-center">{s.bbScore}</td>
                      <td className="p-4 text-center">
                        <span className={`text-[10px] font-bold text-${s.bbColor}-600 bg-${s.bbColor}-50 px-2.5 py-1 rounded-full border border-${s.bbColor}-100`}>
                          {s.bbStatus}
                        </span>
                      </td>
                      <td className="p-4 text-center text-red-600 font-bold">{s.tbScore}</td>
                      <td className="p-4 text-center">
                        <span className={`text-[10px] font-bold text-${s.tbColor}-600 bg-${s.tbColor}-50 px-2.5 py-1 rounded-full border border-${s.tbColor}-100`}>
                          {s.tbStatus}
                        </span>
                      </td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* KONTEN 5: PROFIL ANAK */}
        {activeTab === 'profil' && (
          <div className="space-y-6">
            {/* Pilih Anak */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Pilih Anak untuk Melihat Profil Lengkap</label>
              <select
                value={anakDipilih || ""}
                onChange={(e) => setAnakDipilih(e.target.value ? Number(e.target.value) : null)}
                className="w-full md:w-96 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer"
              >
                <option value="">-- Pilih Anak --</option>
                {dataBalita.map((anak) => (
                  <option key={anak.id} value={anak.id}>{anak.nama}</option>
                ))}
              </select>
            </div>

            {anakDipilih && detailAnak ? (
              <>
                {/* Header Profil */}
                <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-6 rounded-2xl text-white shadow-lg">
                  <div className="flex items-center gap-6">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                      <IconBabyCarriage size={40} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{namaAnakDipilih}</h2>
                      <p className="text-blue-100">{detailAnak.usia} • {detailAnak.posyandu}</p>
                    </div>
                    <div className="ml-auto bg-white/15 px-5 py-3 rounded-xl backdrop-blur-sm border border-white/20">
                      <p className="text-[10px] uppercase font-bold text-blue-200">Status Gizi</p>
                      <p className="text-xl font-black">{detailAnak.statusGizi}</p>
                    </div>
                  </div>
                </div>

                {/* Data Identitas & Orang Tua */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Data Identitas */}
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-5 border-b border-slate-100 bg-blue-50/50">
                      <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        <IconUser size={18} className="text-blue-500" /> Data Identitas
                      </h3>
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-100 p-2 rounded-lg"><IconId size={16} className="text-slate-500" /></div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold text-slate-400 uppercase">NIK</p>
                          <p className="text-sm font-semibold text-slate-800">{detailAnak.nik}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-100 p-2 rounded-lg"><IconClock size={16} className="text-slate-500" /></div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Usia</p>
                          <p className="text-sm font-semibold text-slate-800">{detailAnak.usia}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-100 p-2 rounded-lg"><IconDroplet size={16} className="text-slate-500" /></div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Golongan Darah</p>
                          <p className="text-sm font-semibold text-slate-800">{detailAnak.golonganDarah}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-100 p-2 rounded-lg"><IconHome size={16} className="text-slate-500" /></div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Alamat</p>
                          <p className="text-sm font-semibold text-slate-800">{detailAnak.alamat}</p>
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
                            <IconUser size={18} className="text-violet-600" />
                          </div>
                          <p className="text-sm font-semibold text-slate-800">{detailAnak.namaAyah}</p>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Nama Ibu</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                            <IconUser size={18} className="text-pink-600" />
                          </div>
                          <p className="text-sm font-semibold text-slate-800">{detailAnak.namaIbu}</p>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Posyandu</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <IconStethoscope size={18} className="text-blue-600" />
                          </div>
                          <p className="text-sm font-semibold text-slate-800">{detailAnak.posyandu}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Kesehatan & Riwayat Imunisasi */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Data Kesehatan */}
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-5 border-b border-slate-100 bg-emerald-50/50">
                      <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        <IconStethoscope size={18} className="text-emerald-500" /> Data Kesehatan
                      </h3>
                    </div>
                    <div className="p-5 space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                        <div className="bg-red-100 p-2 rounded-lg"><IconAlertTriangle size={16} className="text-red-600" /></div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Riwayat Alergi</p>
                          <p className="text-sm font-semibold text-slate-800 mt-0.5">{detailAnak.riwayatAlergi}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                        <div className="bg-amber-100 p-2 rounded-lg"><IconActivity size={16} className="text-amber-600" /></div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Riwayat Penyakit</p>
                          <p className="text-sm font-semibold text-slate-800 mt-0.5">{detailAnak.riwayatPenyakit}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                        <div className="bg-blue-100 p-2 rounded-lg"><IconNeedle size={16} className="text-blue-600" /></div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Imunisasi Terakhir</p>
                          <p className="text-sm font-semibold text-slate-800 mt-0.5">{detailAnak.imunisasiTerakhir}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                        <div className="bg-violet-100 p-2 rounded-lg"><IconHeart size={16} className="text-violet-600" /></div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Vitamin Terakhir</p>
                          <p className="text-sm font-semibold text-slate-800 mt-0.5">{detailAnak.vitaminTerakhir}</p>
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
                        {detailAnak.riwayatImunisasi.map((imun, index) => (
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

                {/* Data Pemeriksaan Terakhir */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-5 border-b border-slate-100 bg-amber-50/50">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        <IconHeartbeat size={18} className="text-amber-500" /> Data Pemeriksaan Terakhir
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400">{detailAnak.tanggalPemeriksaan}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <IconRuler size={20} className="text-white" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium">Berat Badan</p>
                        <p className="text-xl font-black text-slate-800 mt-1">{detailAnak.beratBadan} <span className="text-xs font-bold text-slate-400">cm</span></p>
                      </div>
                      <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <IconScale size={20} className="text-white" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium">Tinggi Badan</p>
                        <p className="text-xl font-black text-slate-800 mt-1">{detailAnak.tinggiBadan} <span className="text-xs font-bold text-slate-400">cm</span></p>
                      </div>
                      <div className="text-center p-4 bg-red-50 rounded-xl border border-red-100">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <IconHeartbeat size={20} className="text-white" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium">Tekanan Darah</p>
                        <p className="text-xl font-black text-slate-800 mt-1">{detailAnak.tekananDarah}</p>
                      </div>
                      <div className="text-center p-4 bg-violet-50 rounded-xl border border-violet-100">
                        <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <IconActivity size={20} className="text-white" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium">Detak Jantung</p>
                        <p className="text-xl font-black text-slate-800 mt-1">{detailAnak.detakJantung} <span className="text-xs font-bold text-slate-400"> bpm</span></p>
                      </div>
                      <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-100">
                        <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <IconThermometer size={20} className="text-white" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium">Suhu Tubuh</p>
                        <p className="text-xl font-black text-slate-800 mt-1">{detailAnak.suhu} <span className="text-xs font-bold text-slate-400">°C</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
                <IconUser size={48} className="text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500 font-medium">Pilih anak di atas untuk melihat profil lengkap</p>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}