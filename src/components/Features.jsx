import { CheckCircle2, FileSpreadsheet, Users, MailCheck, BrainCircuit, Wand2, Building2, LineChart } from "lucide-react";

export default function Features() {
  const items = [
    { icon: <Building2 className="h-5 w-5 text-indigo-600" />, title: "Drive Management", desc: "Create drives, set eligibility, manage rounds, and track outcomes." },
    { icon: <Users className="h-5 w-5 text-indigo-600" />, title: "HOD Approvals", desc: "Approve signups, verify profiles, and oversee department stats." },
    { icon: <MailCheck className="h-5 w-5 text-indigo-600" />, title: "Automated Emails", desc: "Notify students at each stage with AI-generated templates." },
    { icon: <FileSpreadsheet className="h-5 w-5 text-indigo-600" />, title: "Reports & Analytics", desc: "Export department, offer, and student-wise reports." },
    { icon: <BrainCircuit className="h-5 w-5 text-indigo-600" />, title: "AI Parsing", desc: "Extract skills, experience and education from resumes." },
    { icon: <Wand2 className="h-5 w-5 text-indigo-600" />, title: "Smart Suggestions", desc: "Auto-suggest skills, achievements and job-fit analysis." },
    { icon: <LineChart className="h-5 w-5 text-indigo-600" />, title: "Dashboards", desc: "Live insights for TPO, HOD and students." },
    { icon: <CheckCircle2 className="h-5 w-5 text-indigo-600" />, title: "ATS-ready", desc: "Uniform, recruiter-friendly formatting for all resumes." },
  ];

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Everything you need for placements</h2>
          <p className="mt-3 text-slate-600">Purpose-built for colleges to manage the entire placement lifecycle.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">{item.icon}</div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
