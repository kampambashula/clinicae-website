export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#FF6B6B]/20 blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[#FF6B6B]/10 blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 z-10 space-y-4 md:space-y-0">
        {/* Left: Copyright */}
        <p className="text-gray-500">
          © {new Date().getFullYear()} Clinicae. All rights reserved.
        </p>

        {/* Center: Brand Line */}
        <p className="italic text-gray-400">
          Cura. Structura. Futurum.
        </p>

        {/* Right: Section Links */}
        <div className="flex flex-wrap gap-6">
          <a href="#problem" className="hover:text-[#FF6B6B] transition-colors">
            Problem
          </a>
          <a href="#why-now" className="hover:text-[#FF6B6B] transition-colors">
            Why Now
          </a>
          <a href="#team" className="hover:text-[#FF6B6B] transition-colors">
            Team
          </a>
          <a href="#cta" className="hover:text-[#FF6B6B] transition-colors">
            Get Involved
          </a>
        </div>
      </div>
    </footer>
  );
}
