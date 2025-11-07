import { BarChart3, TrendingUp, Users } from "lucide-react";

export default function Analytics() {
  return (
    <section id="analytics" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Insights & Performance</h2>
          <p className="mt-2 text-slate-600">Quick glance at placement progress and engagement.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-600">Active Drives</p>
              <BarChart3 className="h-4 w-4 text-indigo-600" />
            </div>
            <p className="mt-2 text-3xl font-bold text-slate-900">12</p>
            <p className="text-xs text-emerald-600 inline-flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +3 this week
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-600">Students Enrolled</p>
              <Users className="h-4 w-4 text-indigo-600" />
            </div>
            <p className="mt-2 text-3xl font-bold text-slate-900">1,248</p>
            <p className="text-xs text-emerald-600 inline-flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +5.2%
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-600">Offers Released</p>
              <BarChart3 className="h-4 w-4 text-indigo-600" />
            </div>
            <p className="mt-2 text-3xl font-bold text-slate-900">86</p>
            <p className="text-xs text-emerald-600 inline-flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +12%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
