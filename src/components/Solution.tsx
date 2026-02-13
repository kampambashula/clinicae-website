import { motion, type Variants } from "framer-motion";
import Container from "./Container";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 15 },
  },
};

export default function Solution() {
  const features = [
    {
      title: "Offline-first core",
      description: "Operate smoothly even in low-connectivity environments.",
    },
    {
      title: "Clean clinical workflows",
      description: "Streamline patient care with intuitive digital processes.",
    },
    {
      title: "National system integration",
      description: "Connect with government reporting and national health systems.",
    },
  ];

  return (
    <section id="solution" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Floating shapes for premium feel */}
      <motion.div
        className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-[#FF6B6B]/20 blur-3xl z-0"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#FF6B6B]/10 blur-3xl z-0"
        animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container>
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#103D54]">
            A resilient digital layer for frontline healthcare
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            CLINICAE centralizes workflows, records, and reporting into one secure operating system.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-10 relative z-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="h-12 w-12 bg-[#103D54]/10 rounded-xl mb-6"></div>
              <h3 className="text-xl font-semibold text-[#103D54] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
