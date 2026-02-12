import { motion } from "framer-motion";

const points = [
  "80% of clinics still rely on paper or fragmented systems",
  "Connectivity and infrastructure gaps hinder reporting",
  "Clinicae provides offline-first resilient solutions",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function WhyNow() {
  return (
    <motion.section
      id="why-now"
      className="py-32 bg-gray-50 relative overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
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

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#103D54] mb-12">
          Why Now?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              variants={item}
              className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-[#FF6B6B] hover:shadow-lg transition-all cursor-pointer"
            >
              <p className="text-[#103D54] font-semibold text-lg leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
