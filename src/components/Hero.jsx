import Spline from "@splinetool/react-spline";
import { Rocket, Mail, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Dark, futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020] via-[#0a0f1f] to-[#070b15]" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Soft glow gradients (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/4 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-emerald-300" /> Role-based portal for Students, HODs, and TPOs
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              Streamline Campus Placements with Confidence
            </h1>
            <p className="mt-4 text-white/80 text-base md:text-lg">
              Manage drives, verify student profiles, and automate communications—all in one modern platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#resume" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-800/20 hover:shadow-fuchsia-700/20 transition-shadow">
                <Rocket className="h-4 w-4" /> Try Resume Builder
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/15">
                <Mail className="h-4 w-4" /> See Features
              </a>
            </div>

            {/* Metrics chips */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur shadow-lg shadow-black/10">
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="text-xs text-white/70">User Roles</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur shadow-lg shadow-black/10">
                <p className="text-2xl font-bold text-white">AI</p>
                <p className="text-xs text-white/70">Resume Parsing</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur shadow-lg shadow-black/10">
                <p className="text-2xl font-bold text-white">Reports</p>
                <p className="text-xs text-white/70">Excel / PDF</p>
              </div>
            </div>
          </div>

          {/* Glassmorphic preview card */}
          <div>
            <div className="relative rounded-2xl border border-white/15 bg-white/10 shadow-2xl p-6 backdrop-blur-md">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Placement portal preview"
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-white/15 bg-white/10 p-3 text-white/90">Secure signups and approvals</div>
                <div className="rounded-lg border border-white/15 bg-white/10 p-3 text-white/90">Drive creation and tracking</div>
                <div className="rounded-lg border border-white/15 bg-white/10 p-3 text-white/90">Automated emails at each stage</div>
                <div className="rounded-lg border border-white/15 bg-white/10 p-3 text-white/90">Offer letter uploads & download</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
