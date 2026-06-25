"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import * as z from "zod"
import { IconLock, IconMail, IconEye, IconEyeOff, IconBrandWhatsapp } from "@tabler/icons-react"

const loginSchema = z.object({
  email: z.string().email({ message: "Format email salah!" }),
  password: z.string().min(6, { message: "Password minimal 6 karakter!" }),
})

const registerSchema = z.object({
  fullName: z.string().min(3, { message: "Nama lengkap minimal 3 karakter!" }),
  nip: z.string().min(10, { message: "NIK/NIP harus valid!" }),
  instansi: z.string().min(3, { message: "Nama instansi wajib diisi!" }),
  email: z.string().email({ message: "Format email salah!" }),
  whatsapp: z.string().min(10, { message: "Nomor WA minimal 10 digit!" }),
  password: z.string().min(6, { message: "Password minimal 6 karakter!" }),
})

export default function AuthPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showWaInput, setShowWaInput] = useState(false)
  const [waNumber, setWaNumber] = useState("")
  const [formData, setFormData] = useState({ fullName: "", nip: "", instansi: "", email: "", whatsapp: "", password: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    
    // Pilih schema berdasarkan mode
    const result = isLogin 
      ? loginSchema.safeParse({ email: formData.email, password: formData.password }) 
      : registerSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      result.error.issues.forEach((issue) => { fieldErrors[issue.path[0] as string] = issue.message })
      setErrors(fieldErrors)
    } else {
      if (isLogin) {
        router.push("/dashboard")
      } else {
        alert("Pendaftaran berhasil! Silakan masuk.")
        setIsLogin(true)
        setFormData({ fullName: "", nip: "", instansi: "", email: "", whatsapp: "", password: "" })
      }
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-slate-50 font-[sans-serif] p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-col items-center mb-6 gap-1.5">
          <h2 className="text-2xl font-extrabold text-slate-800">Monitoring Stunting</h2>
          <p className="text-sm text-slate-500">{isLogin ? "Silakan masuk ke akun Anda" : "Registrasi Akun Baru"}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <>
              <input name="fullName" value={formData.fullName} placeholder="Nama Lengkap" onChange={handleChange} className="w-full rounded-md border border-slate-300 py-2 px-3 text-sm outline-none" />
              <input name="nip" value={formData.nip} placeholder="NIK / NIP" onChange={handleChange} className="w-full rounded-md border border-slate-300 py-2 px-3 text-sm outline-none" />
              <input name="instansi" value={formData.instansi} placeholder="Instansi / Posyandu" onChange={handleChange} className="w-full rounded-md border border-slate-300 py-2 px-3 text-sm outline-none" />
              <input name="whatsapp" value={formData.whatsapp} placeholder="Nomor WhatsApp" onChange={handleChange} className="w-full rounded-md border border-slate-300 py-2 px-3 text-sm outline-none" />
            </>
          )}

          <div className="relative flex items-center">
            <IconMail className="absolute left-3 h-5 w-5 text-slate-400" />
            <input name="email" value={formData.email} placeholder="Email" onChange={handleChange} className="w-full rounded-md border border-slate-300 py-2 pl-10 pr-3 text-sm outline-none" />
          </div>

          <div className="relative flex items-center">
            <IconLock className="absolute left-3 h-5 w-5 text-slate-400" />
            <input type={showPassword ? "text" : "password"} name="password" value={formData.password} placeholder="Password" onChange={handleChange} className="w-full rounded-md border border-slate-300 py-2 pl-10 pr-10 text-sm outline-none" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 text-slate-400"><IconEye size={18}/></button>
          </div>
           {errors.password && <p className="text-[11px] text-red-500 font-medium mt-1">{errors.password}</p>}


          <button type="submit" className="w-full bg-blue-600 py-2 rounded-md text-sm font-semibold text-white hover:bg-blue-700 cursor-pointer">
            {isLogin ? "Masuk" : "Daftar"}
          </button>
        </form>

        {showWaInput && (
            <div className="mt-4 flex flex-col gap-2">
              <input placeholder="Contoh: 08123456789" value={waNumber} onChange={(e) => setWaNumber(e.target.value)} className="w-full rounded-md border border-blue-500 py-2 px-3 text-sm outline-none" />
            </div>
        )}

        <button 
          onClick={() => setIsLogin(!isLogin)} 
          className="w-full mt-6 text-xs text-slate-500 hover:text-blue-600 font-bold uppercase tracking-wide text-center cursor-pointer"
        >
          {isLogin ? "Belum punya akun? Daftar" : "Sudah punya akun? Masuk"}
        </button>
      </div>
    </div>
  )
}