import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      id="cta"
      className="relative overflow-hidden bg-[#103D54] py-32 text-white text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#103D54] to-[#0b2c3b] opacity-90 pointer-events-none"></div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#FF6B6B]/30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#FF6B6B]/20 blur-3xl"
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Help build the future of clinic infrastructure
        </h2>

        <p className="text-lg text-white/80 mb-12">
          We are onboarding pilot partners and strategic collaborators. 
          Join us in building resilient, human-centered health systems.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-10 py-4 bg-[#FF6B6B] rounded-xl font-semibold text-lg hover:opacity-90 transition-all shadow-lg">
            Request Early Access
          </button>

          <button className="px-10 py-4 border border-white/50 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#103D54] transition-all shadow-sm">
            Download Deck
          </button>
        </div>
      </div>
    </motion.section>
  );
}
