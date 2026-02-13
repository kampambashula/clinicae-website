import { motion } from "framer-motion";
import Screenshot from "../assets/clinicae-screenshot1.png";

export default function Hero() {
  return (
    <section
      className="relative bg-[#103D54] text-white min-h-screen flex items-center overflow-hidden"
      id="hero"
    >
      {/* Subtle background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Offline-First Clinic OS
          </h1>

          <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
            Clinicae is a resilient digital operating system designed to power
            modern clinic workflows — built specifically for Africa’s healthcare
            infrastructure and real-world constraints.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@clinicae.online?subject=Requesting Early Access to Clinicae"
              className="px-8 py-4 bg-[#FF6B6B] rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              Request Early Access
            </a>

            <a
              href="/clinicae-deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/40 rounded-xl font-semibold hover:bg-white hover:text-[#103D54] transition-all duration-300"
            >
              Download Deck
            </a>
          </div>

          <p className="text-sm text-white/60 mt-6">
            Currently onboarding pilot clinics and strategic partners.
          </p>
        </motion.div>

        {/* Right: Elevated Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex justify-center"
        >
          {/* Glow behind screenshot */}
          <div className="absolute inset-0 bg-[#FF6B6B]/10 blur-3xl rounded-full scale-110"></div>

          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-4 w-full max-w-xl border border-white/10">
            <img
              src={Screenshot}
              alt="Clinicae platform dashboard interface"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
