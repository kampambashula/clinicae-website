import { motion } from "framer-motion";

export default function Team() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#103D54] mb-6">
          Built at the intersection of medicine and systems thinking
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          Clinicae is led by founders combining healthcare experience and
          economic systems design — enabling technology that works within
          real-world constraints.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Founder 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-2xl p-10 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-28 h-28 mx-auto mb-6 bg-gray-200 rounded-full"></div>
            <h3 className="text-2xl font-semibold text-[#103D54]">
              Kampamba Shula
            </h3>
            <p className="text-[#FF6B6B] font-medium mb-4">
              Economist • Software Developer
            </p>
            <p className="text-gray-600 leading-relaxed">
              Focused on building scalable digital systems that improve public
              sector efficiency, optimize workflows, and drive data-driven decisions.
            </p>
          </motion.div>

          {/* Founder 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-2xl p-10 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-28 h-28 mx-auto mb-6 bg-gray-200 rounded-full"></div>
            <h3 className="text-2xl font-semibold text-[#103D54]">
              Mumba Shula
            </h3>
            <p className="text-[#FF6B6B] font-medium mb-4">Medical Doctor</p>
            <p className="text-gray-600 leading-relaxed">
              Brings frontline clinical insight to ensure Clinicae reflects
              the realities of patient care, workflow efficiency, and practical
              implementation in real-world clinics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
