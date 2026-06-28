"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { IconLock, IconMail, IconEye, IconEyeOff } from "@tabler/icons-react";

// Schema validasi
const loginSchema = z.object({
  email: z.string().email({ message: "Format email salah!" }),
  password: z.string().min(6, { message: "Password minimal 6 karakter!" }),
});

const registerSchema = z.object({
  fullName: z.string().min(3, { message: "Nama lengkap minimal 3 karakter!" }),
  nip: z.string().min(10, { message: "NIK/NIP/No HP harus valid!" }),
  instansi: z.string().min(3, { message: "Nama instansi wajib diisi!" }),
  email: z.string().email({ message: "Format email salah!" }),
  whatsapp: z.string().min(10, { message: "Nomor WA minimal 10 digit!" }),
  password: z.string().min(6, { message: "Password minimal 6 karakter!" }),
});

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({ 
    fullName: "", nip: "", instansi: "", email: "", whatsapp: "", password: "" 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const schema = isLogin ? loginSchema : registerSchema;
    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => { fieldErrors[issue.path[0] as string] = issue.message; });
      setErrors(fieldErrors);
    } else {
      if (isLogin) {
        // LOGIKA DETEKSI PERAN
        // Contoh: Jika email mengandung 'admin', masuk ke admin. Jika tidak, masuk ke parent.
        if (formData.email.includes("admin")) {
          router.push("/admin/dashboard");
        } else {
          router.push("/parent/dashboard");
        }
      } else {
        alert("Pendaftaran berhasil! Silakan masuk.");
        setIsLogin(true);
        setFormData({ fullName: "", nip: "", instansi: "", email: "", whatsapp: "", password: "" });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-[sans-serif] p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-col items-center mb-6 gap-1">
          <h2 className="text-2xl font-extrabold text-slate-800">Monitoring Stunting</h2>
          <p className="text-sm text-slate-500">{isLogin ? "Silakan masuk ke akun Anda" : "Registrasi Akun Baru"}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <>
              <input name="fullName" value={formData.fullName} placeholder="Nama Lengkap" onChange={handleChange} className="w-full rounded-xl border border-slate-300 py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              {errors.fullName && <p className="text-[10px] text-red-500 -mt-3">{errors.fullName}</p>}
              
              <input name="nip" value={formData.nip} placeholder="NIK / NIP" onChange={handleChange} className="w-full rounded-xl border border-slate-300 py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              {errors.nip && <p className="text-[10px] text-red-500 -mt-3">{errors.nip}</p>}
              
              <input name="instansi" value={formData.instansi} placeholder="Instansi / Posyandu" onChange={handleChange} className="w-full rounded-xl border border-slate-300 py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              {errors.instansi && <p className="text-[10px] text-red-500 -mt-3">{errors.instansi}</p>}
              
              <input name="whatsapp" value={formData.whatsapp} placeholder="Nomor WhatsApp" onChange={handleChange} className="w-full rounded-xl border border-slate-300 py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              {errors.whatsapp && <p className="text-[10px] text-red-500 -mt-3">{errors.whatsapp}</p>}
            </>
          )}

          <div className="relative flex items-center">
            <IconMail className="absolute left-3 h-5 w-5 text-slate-400" />
            <input name="email" value={formData.email} placeholder="Email" onChange={handleChange} className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          {errors.email && <p className="text-[10px] text-red-500 -mt-3">{errors.email}</p>}

          <div className="relative flex items-center">
            <IconLock className="absolute left-3 h-5 w-5 text-slate-400" />
            <input type={showPassword ? "text" : "password"} name="password" value={formData.password} placeholder="Password" onChange={handleChange} className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 text-slate-400">
              {showPassword ? <IconEyeOff size={18}/> : <IconEye size={18}/>}
            </button>
          </div>
          {errors.password && <p className="text-[10px] text-red-500 -mt-3">{errors.password}</p>}

          <button type="submit" className="w-full bg-blue-600 py-3 rounded-xl text-sm font-bold text-white hover:bg-blue-700 transition cursor-pointer">
            {isLogin ? "Masuk" : "Daftar"}
          </button>
        </form>

        <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-6 text-xs text-slate-500 hover:text-blue-600 font-bold uppercase text-center cursor-pointer">
          {isLogin ? "Belum punya akun? Daftar" : "Sudah punya akun? Masuk"}
        </button>
      </div>
    </div>
  );
}