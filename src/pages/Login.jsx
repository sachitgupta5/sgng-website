import { useState } from "react";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="hero-gradient relative flex min-h-screen items-center justify-center px-4">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent-500/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-primary-300/[0.08] blur-[100px]" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-white">
            SGNG <span className="text-accent-500">&amp;</span> Associates
          </h1>
          <p className="mt-2 text-sm text-white/50">Internal Team Portal</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-8 shadow-2xl backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15 ring-1 ring-accent-500/30">
              <Lock className="h-5 w-5 text-accent-500" />
            </div>
          </div>
          <h2 className="mb-1 text-center text-xl font-bold text-white">Team Login</h2>
          <p className="mb-8 text-center text-sm text-white/40">
            Sign in with your team credentials
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                <input
                  id="email"
                  type="email"
                  placeholder="you@sgng.in"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.06] py-3 pl-11 pr-4 text-sm text-white placeholder-white/25 outline-none transition-all duration-200 focus:border-accent-500/50 focus:bg-white/[0.08] focus:ring-1 focus:ring-accent-500/30"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.06] py-3 pl-11 pr-11 text-sm text-white placeholder-white/25 outline-none transition-all duration-200 focus:border-accent-500/50 focus:bg-white/[0.08] focus:ring-1 focus:ring-accent-500/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-accent-500 py-3 text-sm font-bold tracking-wide text-primary-900 transition-all duration-300 hover:bg-accent-600 hover:text-white hover:shadow-[0_4px_24px_-4px_rgba(255,215,0,0.5)] cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-white/30">
            Contact your administrator if you need access.
          </p>
        </div>
      </div>
    </div>
  );
}
