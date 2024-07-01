import Hero from "./Home/components/Hero"
import Navbar from "./Home/components/Navbar"
import PopularSubjects from "./Home/components/PopularSubjects"


export const Homepage = () => {
  return (
    <div className="w-full relative h-auto">
      <Navbar />
      <br></br>
      <Hero />
      <br></br>
      <PopularSubjects />
    </div>
  )
}
