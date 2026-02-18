import { motion } from "framer-motion";
import DesktopScreen from "../assets/3.png";
import TabletScreen from "../assets/4.png";
import MobileScreen from "../assets/2.png";

export default function ProductMock() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute top-10 left-10 w-48 md:w-72 h-48 md:h-72 bg-[#103D54]/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 md:w-72 h-48 md:h-72 bg-[#FF6B6B]/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#103D54] mb-6">
            Clinicae Across Every Device
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Desktop for administration. Tablet for mobility. Mobile for
            frontline workers. Fully offline-first and built for real-world
            clinic environments.
          </p>
        </motion.div>

        {/* Devices Wrapper */}
        <div className="relative flex justify-center items-center mt-16 lg:mt-0">

          {/* Desktop */}
          <motion.div
            className="relative z-20 bg-gray-900 rounded-xl md:rounded-2xl p-2 md:p-3 shadow-2xl 
                       w-[90%] sm:w-[80%] md:w-[75%] lg:w-150 max-w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Mac top bar */}
            <div className="flex space-x-2 mb-2">
              <span className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></span>
              <span className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></span>
            </div>

            <img
              src={DesktopScreen}
              alt="Clinicae Desktop View"
              className="rounded-lg w-full h-auto"
            />
          </motion.div>

          {/* Tablet (Hidden on very small screens for clean layout) */}
          <motion.div
            className="hidden sm:block absolute 
                       bottom-[-8%] left-[-8%] 
                       md:bottom-[-12%] md:left-[-12%]
                       z-10 bg-black rounded-xl md:rounded-2xl p-2 shadow-xl
                       w-[35%] md:w-65 max-w-65"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={TabletScreen}
              alt="Clinicae Tablet View"
              className="rounded-lg w-full h-auto"
            />
          </motion.div>

          {/* Mobile */}
          <motion.div
            className="absolute 
                       bottom-[-10%] right-[-5%] 
                       md:bottom-[-15%] md:right-[-8%]
                       z-30 bg-black rounded-3xl md:rounded-4xl p-2 shadow-2xl
                       w-[25%] sm:w-[22%] md:w-40 max-w-40"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={MobileScreen}
              alt="Clinicae Mobile View"
              className="rounded-[1.2rem] md:rounded-3xl w-full h-auto"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
