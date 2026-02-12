import Container from "./Container";
import { motion } from "framer-motion";
import ProblemImage from "../assets/clinicae-problem.jpg"; // adjust path

export default function Problem() {
  return (
    <section id="problem" className="py-32 bg-white relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center relative">

          {/* LEFT VISUAL BLOCK */}
          <motion.div
            className="bg-gray-50 rounded-3xl p-4 shadow-lg relative z-10 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={ProblemImage}
              alt="Clinic problem visual"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>

          {/* Floating shapes behind visual */}
          <motion.div
            className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-[#FF6B6B]/30 blur-3xl z-0"
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-8 -left-4 w-32 h-32 rounded-full bg-[#FF6B6B]/20 blur-3xl z-0"
            animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#103D54]">
              Clinics are running on fragile infrastructure
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Paper records, disconnected systems, and unreliable connectivity reduce operational efficiency 
              and compromise patient care delivery across clinics.
            </p>

            <ul className="mt-8 space-y-4 text-gray-700 pl-5 list-disc">
              <li>Fragmented patient data causing gaps in care</li>
              <li>Manual reporting burdens staff and delays decisions</li>
              <li>Poor system integration limits workflow efficiency</li>
            </ul>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
