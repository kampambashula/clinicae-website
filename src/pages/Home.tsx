import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Problem from "../components/Problem"
import Solution from "../components/Solution"
import WhyNow from "../components/WhyNow"
import Team from "../components/Team"
import CTA from "../components/CTA"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <WhyNow />
      <Team />
      <CTA />
    </>
  )
}
