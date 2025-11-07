import { Briefcase, CalendarDays, UserCheck } from "lucide-react";

const MOCK_DRIVES = [
  { company: "TechNova", role: "Full Stack Developer", date: "Nov 18", applicants: 142 },
  { company: "FinEdge", role: "Data Analyst", date: "Nov 21", applicants: 97 },
  { company: "CloudOps", role: "DevOps Engineer", date: "Nov 26", applicants: 65 },
];

export default function DriveShowcase() {
  return (
    <section id="drives" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Upcoming Placement Drives</h2>
            <p className="mt-1 text-slate-600">Discover active opportunities and enroll instantly.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500">
            <UserCheck className="h-4 w-4" /> Enroll Now
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {MOCK_DRIVES.map((d) => (
            <div key={d.company} className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                  <Briefcase className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{d.company}</h3>
                  <p className="text-sm text-slate-600">{d.role}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                <div className="inline-flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" /> {d.date}
                </div>
                <div>{d.applicants} applicants</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
