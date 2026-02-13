import { motion } from "framer-motion";
import { CheckCircleIcon, PresentationChartLineIcon, DeviceTabletIcon } from '@heroicons/react/24/solid';

const points = [
  {
    text: "70% of clinics still rely on paper or fragmented systems",
    icon: <DeviceTabletIcon className="w-6 h-6 text-[#FF6B6B]" />,
    gradient: "from-[#FF6B6B]/40 to-[#FFACAC]/20",
  },
  {
    text: "Connectivity and infrastructure gaps hinder reporting",
    icon: <PresentationChartLineIcon className="w-6 h-6 text-[#FF6B6B]" />,
    gradient: "from-[#FF6B6B]/40 to-[#FFACAC]/20",
  },
  {
    text: "Clinicae provides offline-first resilient solutions",
    icon: <CheckCircleIcon className="w-6 h-6 text-[#FF6B6B]" />,
    gradient: "from-[#FF6B6B]/40 to-[#FFACAC]/20",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
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
      {/* Floating shapes */}
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#103D54] mb-12 text-center md:text-left">
          Why Now?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`p-10 rounded-3xl border border-white/20 backdrop-blur-lg bg-linear-to-br ${point.gradient} hover:shadow-2xl cursor-pointer relative overflow-hidden`}
            >
              {/* Accent icon in top-left */}
              <div className="absolute -top-4 -left-4 bg-white/30 p-3 rounded-full">
                {point.icon}
              </div>

              <p className="text-[#103D54] font-semibold text-lg md:text-xl leading-relaxed mt-6">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
