import { motion } from "framer-motion";
import Screenshot from "../assets/1.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#103D54] text-white pt-28 md:pt-36 min-h-screen flex items-center overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute -top-40 -right-40 w-lg h-128 bg-[#FF6B6B]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-lg h-128 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Big Ambition Line */}
          <p className="text-sm uppercase tracking-widest text-white/60 mb-6">
            Offline-First Clinic OS
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8">
            Powering the future of resilient healthcare.
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
            An offline-first clinic operating system built for real-world
            infrastructure — designed to digitize workflows, strengthen
            reporting, and unlock the full potential of frontline care.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@clinicae.online?subject=Requesting Early Access to Clinicae"
              className="px-8 py-4 bg-[#FF6B6B] rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
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

          <p className="text-sm text-white/50 mt-6">
            Currently onboarding pilot clinics and strategic partners.
          </p>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Soft radial glow */}
          <div className="absolute inset-0 bg-[#FF6B6B]/10 blur-3xl rounded-full scale-110" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-4 w-full max-w-xl border border-white/10"
          >
            <img
              src={Screenshot}
              alt="Clinicae platform dashboard interface"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
