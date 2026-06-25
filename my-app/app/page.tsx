import Link from "next/link"
import { IconLayoutDashboard, IconActivity, IconUsers, IconBook } from "@tabler/icons-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-[sans-serif] text-slate-800">
      
      {/* Navbar Minimalis */}
      <div className="sticky top-0 z-50 w-full px-4 md:px-0">
      <nav className="mx-auto max-w-6xl flex items-center justify-center px-6 py-5 bg-white rounded-b-2xl shadow-md">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-400 rounded-lg text-white">
            <IconActivity size={24} />
          </div>
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">
            Monitoring<span className="text-blue-400">Stunting</span>
          </span>
        </div>
      </nav>
      </div>

      {/* Hero Section */}
      <header className="mx-auto max-w-5xl text-center py-25 px-6">
        <span className="bg-blue-500 text-blue-50 text-xs font-bold px-3 py-2 rounded-full uppercase tracking-wider">
          Aplikasi Pemantauan Gizi Balita
        </span>
        <h1 className="py-4 mt-4 text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
          <span>Bersama Cegah Stunting, </span><br />
          <span className="block mt-3 text-blue-400">Sediakan Masa Depan Cerah.</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
          Platform digital terintegrasi untuk memantau tumbuh kembang anak, mencatat data antropometri balita, serta memberikan edukasi stunting secara real-time.
        </p>
        <div className="mt-8 py-6 flex justify-center gap-4">
          <Link
            href="/auth"
            className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-blue-100"
          >
            Mulai Monitoring Sekarang
          </Link>
        </div>
      </header>

            <section
        id="tentang-stunting"
        className="mx-auto max-w-6xl p-2 py-10 scroll-mt-24"
      >
        <div className="text-center mb-14">

          <h2 className="mt-4 text-4xl md:text-4xl font-black text-slate-900">
            Apa Itu Stunting?
          </h2>

          <p className="mt-4 text-slate-500 max-w-3xl mx-auto">
            Stunting merupakan kondisi gagal tumbuh pada anak akibat kekurangan gizi
            kronis yang berlangsung dalam waktu lama. Kondisi ini dapat memengaruhi
            pertumbuhan fisik, perkembangan kognitif, hingga kualitas hidup anak di
            masa depan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
              
            </div>

            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Dampak Pertumbuhan
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed">
              Anak dengan stunting memiliki tinggi badan di bawah standar usianya dan
              berisiko mengalami gangguan pertumbuhan jangka panjang.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              
            </div>

            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Perkembangan Kognitif
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed">
              Kekurangan nutrisi dapat memengaruhi perkembangan otak sehingga
              kemampuan belajar dan konsentrasi anak menjadi tidak optimal.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
              
            </div>

            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Pencegahan Dini
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed">
              Pemenuhan gizi seimbang, pemantauan pertumbuhan rutin, serta imunisasi
              lengkap merupakan langkah penting untuk mencegah stunting.
            </p>
          </div>

        </div>
      </section>

    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Kiri */}
        <div>
          <span className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full text-sm font-semibold">
            RISIKO STUNTING
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900 leading-tight">
            Dampak yang tidak terlihat hari ini,
            <span className="block text-blue-500">
              bisa memengaruhi masa depan anak.
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            Stunting tidak hanya memengaruhi tinggi badan anak,
            tetapi juga perkembangan otak, kesehatan, dan
            produktivitas saat dewasa.
          </p>
        </div>

        {/* Kanan */}
        <div className="space-y-8">
          
          <div className="border-b border-slate-200 pb-6">
            <p className="text-sm font-bold text-blue-500">01</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">
              Gangguan Kognitif
            </h3>
            <p className="text-slate-500 mt-2">
              Menurunkan kemampuan belajar, daya ingat,
              dan konsentrasi anak.
            </p>
          </div>

          <div className="border-b border-slate-200 pb-6">
            <p className="text-sm font-bold text-blue-500">02</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">
              Pertumbuhan Terhambat
            </h3>
            <p className="text-slate-500 mt-2">
              Tinggi badan anak tidak berkembang
              sesuai standar usianya.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-blue-500">03</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">
              Risiko Penyakit Kronis
            </h3>
            <p className="text-slate-500 mt-2">
              Meningkatkan risiko diabetes, hipertensi,
              dan gangguan metabolisme saat dewasa.
            </p>
          </div>

        </div>
      </div>
    </section>

      {/* Ringkasan Fitur / Edukasi Singkat */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Jelajahi Fitur Kami</h2>
          <p className="text-slate-500 mt-2">Pilih menu di bawah ini untuk langsung menuju layanan yang Anda butuhkan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Fitur 1 - Redirect ke Dashboard */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-3 h-full transition-all hover:shadow-md hover:border-blue-200 cursor-pointer">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <IconLayoutDashboard size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Dashboard Real-Time</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Pantau statistik sebaran stunting di wilayah Anda secara akurat menggunakan grafik pertumbuhan standar WHO.
              </p>
            </div>

          {/* Fitur 2 - Redirect ke Input Pengukuran */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-3 h-full transition-all hover:shadow-md hover:border-teal-200 cursor-pointer">
              <div className="p-3 bg-teal-50 text-teal-600 rounded-xl w-fit group-hover:bg-teal-500 group-hover:text-white transition-colors">
                <IconUsers size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">Pencatatan Data Balita</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Simpan dan telusuri riwayat tinggi badan, berat badan, serta status gizi anak secara berkala tanpa repot.
              </p>
            </div>
          

          {/* Fitur 3 - Redirect ke Artikel Edukasi */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-3 h-full transition-all hover:shadow-md hover:border-amber-200 cursor-pointer">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <IconBook size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Modul Edukasi</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Akses kumpulan artikel validasi medis mengenai resep MPASI bergizi dan pola asuh pencegahan stunting.
              </p>
            </div>
        

        </div>
      </section>

            {/* Stats Counter Section */}
      <section className="bg-slate-100/60 border-y border-slate-200/50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-black text-blue-400 tracking-tight">
                120+
              </span>
              <span className="text-xs md:text-sm text-slate-500 font-semibold tracking-wide uppercase">
                Posyandu Aktif
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-black text-blue-400 tracking-tight">
                1.500+
              </span>
              <span className="text-xs md:text-sm text-slate-500 font-semibold tracking-wide uppercase">
                Kader & Nakes
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-black text-blue-400 tracking-tight">
                18.450+
              </span>
              <span className="text-xs md:text-sm text-slate-500 font-semibold tracking-wide uppercase">
                Balita Termonitor
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-black text-blue-400 tracking-tight">
                98%
              </span>
              <span className="text-xs md:text-sm text-slate-500 font-semibold tracking-wide uppercase">
                Data Akurat WHO
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimalis */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-400 font-medium">
        &copy; {new Date().getFullYear()} Monitoring Stunting. 
      </footer>

    </div>
  )
}