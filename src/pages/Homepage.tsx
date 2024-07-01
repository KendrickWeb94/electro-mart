import Hero from "./Home/components/Hero"
import Navbar from "./Home/components/Navbar"


export const Homepage = () => {
  return (
    <div className="w-full relative h-auto">
      <Navbar />
      <br></br>
      <Hero />
    </div>
  )
}
