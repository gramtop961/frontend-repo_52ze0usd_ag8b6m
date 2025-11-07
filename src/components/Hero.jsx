import { Rocket, Mail, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <ShieldCheck className="h-4 w-4" /> Role-based portal for Students, HODs, and TPOs
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Streamline Campus Placements with Confidence
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Manage drives, verify student profiles, and automate communications—all in one modern platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#resume" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500">
                <Rocket className="h-4 w-4" /> Try Resume Builder
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <Mail className="h-4 w-4" /> See Features
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg border bg-white p-4">
                <p className="text-2xl font-bold text-slate-900">3+</p>
                <p className="text-xs text-slate-500">User Roles</p>
              </div>
              <div className="rounded-lg border bg-white p-4">
                <p className="text-2xl font-bold text-slate-900">AI</p>
                <p className="text-xs text-slate-500">Resume Parsing</p>
              </div>
              <div className="rounded-lg border bg-white p-4">
                <p className="text-2xl font-bold text-slate-900">Reports</p>
                <p className="text-xs text-slate-500">Excel / PDF</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl border bg-white shadow-sm p-6">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-indigo-100 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-purple-100 blur-2xl" />
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Placement portal preview"
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border p-3">
                  Secure signups and approvals
                </div>
                <div className="rounded-lg border p-3">
                  Drive creation and tracking
                </div>
                <div className="rounded-lg border p-3">
                  Automated emails at each stage
                </div>
                <div className="rounded-lg border p-3">
                  Offer letter uploads & download
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
