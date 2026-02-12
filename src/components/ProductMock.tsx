import { motion } from "framer-motion";
import Screenshot1 from "../assets/clinicae-screenshot1.png"; // adjust path
import Screenshot2 from "../assets/clinicae-screenshot2.png"; // optional second image

export default function ProductMock() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Floating background shapes */}
      <motion.div
        className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-[#FF6B6B]/30 blur-3xl z-0"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#FF6B6B]/20 blur-3xl z-0"
        animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#103D54] mb-6">
            See Clinicae in Action
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Offline-first clinic management software designed for resilience, efficiency,
            and human-centered care. Clinicae helps clinics operate smoothly even in low-connectivity
            environments, keeping patient data secure and workflows seamless.
          </p>
        </motion.div>

        {/* Right: Screenshot Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Screenshot */}
            <img
              src={Screenshot1}
              alt="Clinicae Screenshot"
              className="w-full h-auto"
            />

            {/* Optional: additional smaller mockups or screenshots */}
            {Screenshot2 && (
              <div className="grid grid-cols-2 gap-4 mt-4 px-2">
                <img
                  src={Screenshot2}
                  alt="Clinicae Screenshot 2"
                  className="w-full h-auto rounded-xl"
                />
                <div className="h-24 bg-[#103D54]/10 rounded-xl"></div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
