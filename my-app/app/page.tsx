import Link from "next/link"
import { IconLayoutDashboard, IconActivity, IconUsers, IconBook, IconExternalLink, IconBook2, IconHeartbeat, IconChefHat, IconLeaf, IconStethoscope, IconBrandYoutube, IconRuler2, IconBrain, IconShieldCheck } from "@tabler/icons-react"

export default function LandingPage() {
  const accentMap: Record<string, { bg: string; text: string; iconBg: string; iconHover: string; tagBg: string; gradient: string; hoverText: string }> = {
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", iconBg: "bg-emerald-50", iconHover: "hover:bg-emerald-600 hover:text-white", tagBg: "bg-emerald-50 text-emerald-600", gradient: "from-emerald-400 to-emerald-600", hoverText: "group-hover:text-emerald-600" },
    blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-50", iconHover: "hover:bg-blue-600 hover:text-white", tagBg: "bg-blue-50 text-blue-600", gradient: "from-blue-400 to-blue-600", hoverText: "group-hover:text-blue-600" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", iconBg: "bg-amber-50", iconHover: "hover:bg-amber-600 hover:text-white", tagBg: "bg-amber-50 text-amber-600", gradient: "from-amber-400 to-amber-600", hoverText: "group-hover:text-amber-600" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", iconBg: "bg-rose-50", iconHover: "hover:bg-rose-600 hover:text-white", tagBg: "bg-rose-50 text-rose-600", gradient: "from-rose-400 to-rose-600", hoverText: "group-hover:text-rose-600" },
    violet: { bg: "bg-violet-50", text: "text-violet-600", iconBg: "bg-violet-50", iconHover: "hover:bg-violet-600 hover:text-white", tagBg: "bg-violet-50 text-violet-600", gradient: "from-violet-400 to-violet-600", hoverText: "group-hover:text-violet-600" },
    sky: { bg: "bg-sky-50", text: "text-sky-600", iconBg: "bg-sky-50", iconHover: "hover:bg-sky-600 hover:text-white", tagBg: "bg-sky-50 text-sky-600", gradient: "from-sky-400 to-sky-600", hoverText: "group-hover:text-sky-600" },
  };

  const artikel = [
    {
      title: "Panduan Lengkap Gizi Seimbang untuk Balita",
      desc: "Komposisi ideal karbohidrat, protein, lemak, vitamin dan mineral yang dibutuhkan anak usia 1-5 tahun untuk tumbuh kembang optimal.",
      tag: "Gizi",
      link: "https://www.halodoc.com/artikel/panduan-gizi-seimbang-untuk-anak-balita",
      icon: <IconLeaf className="text-emerald-500" />,
      accent: "emerald",
    },
    {
      title: "Milestones Perkembangan Anak 0-5 Tahun",
      desc: "Panduan lengkap tahapan perkembangan motorik, bahasa, kognitif, dan sosial anak sesuai standar WHO.",
      tag: "Perkembangan",
      link: "https://www.halodoc.com/artikel/milestones-perkembangan-anak",
      icon: <IconStethoscope className="text-blue-500" />,
      accent: "blue",
    },
    {
      title: "Resep MPASI Bergizi untuk Usia 6-12 Bulan",
      desc: "Ide resep harian MPASI bergizi tinggi zat besi, protein, dan omega-3 untuk mencegah kekurangan gizi pada bayi.",
      tag: "MPASI",
      link: "https://www.halodoc.com/artikel/resep-mpasi-sehat-untuk-bayi-usia-6-12-bulan",
      icon: <IconChefHat className="text-amber-500" />,
      accent: "amber",
    },
    {
      title: "1000 Hari Pertama Kehidupan: Masa Kritis Anak",
      desc: "Mengapa periode dari kehamilan hingga usia 2 tahun menentukan kualitas kesehatan dan kecerdasan anak seumur hidup.",
      tag: "Penting",
      link: "https://www.halodoc.com/artikel/1000-hari-pertama-kehidupan",
      icon: <IconHeartbeat className="text-rose-500" />,
      accent: "rose",
    },
    {
      title: "Kenali Tanda-Tanda Stunting Sejak Dini",
      desc: "Cara mengenali gejala awal stunting pada anak dan langkah intervensi yang tepat sebelum terlambat.",
      tag: "Stunting",
      link: "https://rspp.co.id/artikel-detail-734-Stunting-di-Indonesia-Penyebab,-Dampak,-dan-Upaya-Pencegahan-.html",
      icon: <IconBook2 className="text-violet-500" />,
      accent: "violet",
    },
    {
      title: "Pola Asuh Positif untuk Tumbuh Kembang Anak",
      desc: "Tips praktik parenting yang mendukung perkembangan emosional, kognitif, dan fisik anak secara seimbang.",
      tag: "Parenting",
      link: "https://kemkes.go.id/id/cegah-stunting-dengan-perbaikan-pola-makan-pola-asuh-dan-sanitasi-2",
      icon: <IconUsers className="text-sky-500" />,
      accent: "sky",
    },
  ];

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
              <IconRuler2 className="text-red-500" size={24} />
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
              <IconBrain className="text-blue-500" size={24} />
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
              <IconShieldCheck className="text-green-500" size={24} />
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

      {/* Artikel & Edukasi */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <span className="bg-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Edukasi
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-black text-slate-900">Artikel & Tips Kesehatan</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">Kumpulan artikel terpercaya untuk membantu Anda memahami dan mencegah stunting pada anak.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {artikel.map((item, index) => {
            const c = accentMap[item.accent];
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-transparent cursor-pointer flex flex-col"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${c.gradient}`} />
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 ${c.iconBg} rounded-xl ${c.text} group-hover:bg-${item.accent}-600 group-hover:text-white transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider ${c.tagBg} px-2.5 py-1 rounded-full`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{item.desc}</p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Baca Selengkapnya
                    </span>
                    <IconExternalLink className="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-300" size={16} />
                  </div>
                </div>
              </a>
            );
          })}
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