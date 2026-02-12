import { motion } from "framer-motion";
import Screenshot from "../assets/clinicae-screenshot1.png"; // adjust path as needed

export default function Hero() {
  return (
    <section
      className="relative bg-[#103D54] text-white min-h-screen flex items-center"
      id="hero"
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Clinicae: Offline-first Clinic OS
          </h1>
          <p className="text-lg text-white/80 mb-8">
            Transforming clinic operations with resilient, human-centered digital systems
            for Africa’s healthcare infrastructure.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-[#FF6B6B] rounded-xl font-semibold hover:opacity-90 transition">
              Request Early Access
            </button>
            <button className="px-8 py-4 border border-white/50 rounded-xl font-semibold hover:bg-white hover:text-[#103D54] transition">
              Download Deck
            </button>
          </div>
        </motion.div>

        {/* Right: Screenshot Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex justify-center"
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden">
            <img
              src={Screenshot}
              alt="Clinicae Screenshot"
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
