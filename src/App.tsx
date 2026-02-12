import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import ProductMock from "./components/ProductMock";
import WhyNow from "./components/WhyNow";
import StatsStrip from "./components/StatsStrip";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <ProductMock />
      <WhyNow />
      <StatsStrip />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
