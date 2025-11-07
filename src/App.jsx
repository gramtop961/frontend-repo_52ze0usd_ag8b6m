import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ResumeBuilder from "./components/ResumeBuilder";
import DriveShowcase from "./components/DriveShowcase";
import Analytics from "./components/Analytics";

function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} CampusPlace. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#resume" className="hover:text-slate-900">Resume Tool</a>
          <a href="#drives" className="hover:text-slate-900">Drives</a>
          <a href="#analytics" className="hover:text-slate-900">Analytics</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <ResumeBuilder />
      <DriveShowcase />
      <Analytics />
      <Footer />
    </div>
  );
}
