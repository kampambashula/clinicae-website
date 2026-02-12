import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "bg-[#103D54]/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
        <div className="text-white font-bold text-2xl">CLINICAE</div>

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <a href="#problem" className="hover:text-[#FF6B6B] transition">Problem</a>
          </li>
          <li>
            <a href="#solution" className="hover:text-[#FF6B6B] transition">Solution</a>
          </li>
          <li>
            <a href="#team" className="hover:text-[#FF6B6B] transition">Team</a>
          </li>
          <li>
            <a href="#cta" className="hover:text-[#FF6B6B] transition">Get Access</a>
          </li>
        </ul>

        <button className="md:hidden px-4 py-2 border border-white rounded-lg text-white">
          Menu
        </button>
      </div>
    </nav>
  );
}
