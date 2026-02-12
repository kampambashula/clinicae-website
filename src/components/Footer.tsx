export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 relative overflow-hidden">
      {/* Subtle floating shapes for continuity */}
      <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-[#FF6B6B]/20 blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#FF6B6B]/10 blur-3xl z-0"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 z-10">
        {/* Left: Copyright */}
        <p>© {new Date().getFullYear()} Clinicae. All rights reserved.</p>

        {/* Center: Brand Line */}
        <p className="mt-4 md:mt-0 italic text-gray-400">
          Cura. Structura. Futurum.
        </p>

        {/* Right: Links */}
        <div className="mt-4 md:mt-0 flex gap-6">
          <a
            href="#problem"
            className="hover:text-[#103D54] transition-colors"
          >
            Problem
          </a>
          <a
            href="#why-now"
            className="hover:text-[#103D54] transition-colors"
          >
            Why Now
          </a>
          <a
            href="#team"
            className="hover:text-[#103D54] transition-colors"
          >
            Team
          </a>
          <a
            href="#cta"
            className="hover:text-[#103D54] transition-colors"
          >
            Get Involved
          </a>
        </div>
      </div>
    </footer>
  );
}
