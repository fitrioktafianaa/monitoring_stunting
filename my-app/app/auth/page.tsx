"use client"

import { useState } from "react"
import * as z from "zod"
import { IconLock, IconMail, IconBrandGoogle, IconBrandWhatsapp } from "@tabler/icons-react"

const loginSchema = z.object({
  email: z.string().email({ message: "Format email salah!" }),
  password: z.string().min(6, { message: "Password minimal 6 karakter!" }),
})

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    const result = loginSchema.safeParse({ email, password })

    if (!result.success) {
      const formattedErrors: { email?: string; password?: string } = {}
      result.error.issues.forEach((issue) => {
        if (issue.path[0] === "email") formattedErrors.email = issue.message
        if (issue.path[0] === "password") formattedErrors.password = issue.message
      })
      setErrors(formattedErrors)
    } else {
      console.log("Data Login:", result.data)
      alert("Login berhasil!")
      
            setEmail("")
            setPassword("")
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center mb-6 gap-1">
          <h2 className="text-xl font-bold text-slate-800">Monitoring Stunting</h2>
          <p className="text-sm text-slate-500 font-sans">Silakan masuk ke akun Anda</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Input Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <div className="relative flex items-center">
              <IconMail className="absolute left-3 h-5 w-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="nama@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white py-2 pl-10 pr-3 text-sm font-bold placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 text-slate-800"
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 font-sans">{errors.email}</p>}
          </div>

          {/* Input Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="relative flex items-center">
              <IconLock className="absolute left-3 h-5 w-5 text-slate-400" />
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 text-slate-800"
              />
            </div>
            {errors.password && <p className="text-xs text-red-500 font-sans">{errors.password}</p>}
          </div>

          {/* Button Submit */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 py-2 rounded-md text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Masuk
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-4 text-xs text-slate-400 uppercase">
          <span className="relative z-10 bg-white px-2">atau</span>
          <div className="absolute inset-0 top-2 border-t border-slate-200"></div>
        </div>

        {/* Google Login Button */}
        <button 
          type="button" 
          onClick={() => alert('Whatsapp Sign In')}
          className="flex w-full items-center justify-center rounded-md border border-slate-300 bg-white py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
         <IconBrandWhatsapp className="mr-2 h-4 w-4 text-green-500" />
          Masuk dengan Nomor Handphone
        </button>

      </div>
    </div>
  )
}
