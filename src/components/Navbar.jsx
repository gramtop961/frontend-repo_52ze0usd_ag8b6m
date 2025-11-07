import { GraduationCap, Briefcase, FileText, BarChart3 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
            <span className="text-lg font-semibold text-slate-900">CampusPlace</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#resume" className="hover:text-slate-900 inline-flex items-center gap-1">
              <FileText className="h-4 w-4" /> Resume Tool
            </a>
            <a href="#drives" className="hover:text-slate-900 inline-flex items-center gap-1">
              <Briefcase className="h-4 w-4" /> Drives
            </a>
            <a href="#analytics" className="hover:text-slate-900 inline-flex items-center gap-1">
              <BarChart3 className="h-4 w-4" /> Analytics
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Log in</button>
            <button className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}
