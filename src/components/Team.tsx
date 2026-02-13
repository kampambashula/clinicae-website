import { motion } from "framer-motion";
import kampamba from "../assets/kampamba.jpg";
import mumba from "../assets/mumba.jpg";

export default function Team() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      {/* Subtle background accents */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#FF6B6B]/10 blur-3xl z-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-[#103D54]/5 blur-3xl z-0"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#103D54] mb-6">
          Built at the intersection of medicine and systems thinking
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-20 text-lg leading-relaxed">
          Clinicae is led by founders combining healthcare experience and
          economic systems design — enabling technology that works within
          real-world constraints.
        </p>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Founder 1 – Mumba First */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="bg-gray-50 rounded-3xl p-14 shadow-sm hover:shadow-2xl transition-all"
          >
            <div className="flex justify-center mb-10">
              <div className="p-2 rounded-full bg-linear-to-br from-[#FF6B6B] to-[#FF8E8E] shadow-lg">
                <img
                  src={mumba}
                  alt="Mumba Shula"
                  className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full bg-white"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#103D54]">
              Mumba Shula
            </h3>

            <p className="text-[#FF6B6B] font-medium mb-4">
              Medical Doctor
            </p>

            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              Brings frontline clinical insight to ensure Clinicae reflects
              the realities of patient care, workflow efficiency, and practical
              implementation in real-world clinics.
            </p>
          </motion.div>

          {/* Founder 2 */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="bg-gray-50 rounded-3xl p-14 shadow-sm hover:shadow-2xl transition-all"
          >
            <div className="flex justify-center mb-10">
              <div className="p-2 rounded-full bg-linear-to-br from-[#FF6B6B] to-[#FF8E8E] shadow-lg">
                <img
                  src={kampamba}
                  alt="Kampamba Shula"
                  className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full bg-white"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#103D54]">
              Kampamba Shula
            </h3>

            <p className="text-[#FF6B6B] font-medium mb-4">
              Economist • Software Developer
            </p>

            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              Focused on building scalable digital systems that improve public
              sector efficiency, optimize workflows, and drive data-driven decisions.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
