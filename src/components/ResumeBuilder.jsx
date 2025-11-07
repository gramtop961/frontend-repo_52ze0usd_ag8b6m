import { useMemo, useState } from "react";
import { FileText, Download, Sparkles, Check } from "lucide-react";

const TEMPLATES = {
  classic: {
    name: "Classic",
    classes: "font-inter",
  },
  modern: {
    name: "Modern",
    classes: "font-manrope",
  },
};

export default function ResumeBuilder() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Software Engineer",
    summary: "",
    skills: "React, Node.js, MongoDB, FastAPI",
    experience: "",
    education: "",
    template: "classic",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const preview = useMemo(() => {
    return {
      ...form,
      skillsList: form.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };
  }, [form]);

  const download = () => {
    const content = document.getElementById("resume-preview")?.innerHTML || "";
    const blob = new Blob([`<html><head><meta charset='utf-8'><title>Resume</title></head><body>${content}</body></html>`], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${form.name || "resume"}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Resume Builder</h2>
            <p className="mt-1 text-slate-600">Create a polished, ATS-friendly resume and submit it directly.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={download} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500">
              <Download className="h-4 w-4" /> Download
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Target Role</label>
                <input name="role" value={form.role} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Professional Summary</label>
                <textarea name="summary" rows={3} value={form.summary} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Key Skills (comma separated)</label>
                <input name="skills" value={form.skills} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Experience</label>
                <textarea name="experience" rows={4} value={form.experience} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Company • Role • Duration\n- Achievement/impact\n- Achievement/impact" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Education</label>
                <textarea name="education" rows={3} value={form.education} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Degree • Institute • Year • CGPA" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Template</label>
                <div className="mt-1 flex gap-3">
                  {Object.entries(TEMPLATES).map(([key, t]) => (
                    <button
                      key={key}
                      onClick={() => setForm((f) => ({ ...f, template: key }))}
                      className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm ${
                        form.template === key ? "border-indigo-500 text-indigo-700 bg-indigo-50" : "border-slate-300 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <FileText className="h-4 w-4" /> {t.name}
                      {form.template === key && <Check className="h-4 w-4 text-indigo-600" />}
                    </button>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  onClick={() => {
                    if (!form.summary) {
                      setForm((f) => ({ ...f, summary: `Results-driven ${f.role} with hands-on experience building scalable web apps. Adept at cross-functional collaboration, writing clean code, and delivering business value.` }));
                    }
                    if (!form.experience) {
                      setForm((f) => ({ ...f, experience: `Acme Corp • Frontend Intern • Jan 2024 – Jun 2024\n- Built responsive UI components in React and Tailwind, improving page speed by 28%.\n- Collaborated with backend team to integrate REST APIs and optimize data flows.` }));
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-md border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-100">
                  <Sparkles className="h-4 w-4" /> Smart Fill
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div id="resume-preview" className={`prose max-w-none ${TEMPLATES[form.template].classes}`}>
              <div className="border-b pb-3">
                <h3 className="m-0 text-2xl font-bold text-slate-900">{preview.name || "Your Name"}</h3>
                <p className="m-0 text-sm text-slate-600">{[preview.email, preview.phone].filter(Boolean).join(" • ")}</p>
                <p className="m-0 text-sm text-slate-600">Target Role: {preview.role}</p>
              </div>
              <div className="mt-4">
                <h4 className="m-0 text-lg font-semibold text-slate-900">Summary</h4>
                <p className="m-0 text-slate-700 whitespace-pre-line">{preview.summary || "Brief professional summary highlighting your strengths and impact."}</p>
              </div>
              <div className="mt-4">
                <h4 className="m-0 text-lg font-semibold text-slate-900">Skills</h4>
                <ul className="m-0 grid grid-cols-2 list-disc pl-5 text-slate-700">
                  {preview.skillsList.length > 0 ? (
                    preview.skillsList.map((s, i) => <li key={i}>{s}</li>)
                  ) : (
                    <li>JavaScript</li>
                  )}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="m-0 text-lg font-semibold text-slate-900">Experience</h4>
                <p className="m-0 text-slate-700 whitespace-pre-line">{preview.experience || "List your professional experience with impact-based bullets."}</p>
              </div>
              <div className="mt-4">
                <h4 className="m-0 text-lg font-semibold text-slate-900">Education</h4>
                <p className="m-0 text-slate-700 whitespace-pre-line">{preview.education || "Degree • Institute • Year • CGPA"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
