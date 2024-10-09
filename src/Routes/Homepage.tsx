import Hero from "../components/ui/Hero"
import Navbar from "../components/ui/Navbar"
import PopularSubjects from "../components/ui/PopularSubjects"


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
