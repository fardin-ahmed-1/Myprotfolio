import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import MySkills from "./MySkills"
import Portfolios from "./Portfolios/Portfolios"
import SkillLogo from "./SkillLogo"
import WorkingSection from "./Working/WorkingSection"

const Home = () => {
  return (
    <div>
      <div id="home">
      <Hero/>
      </div>
      <SkillLogo/>
      <div id="about" className="overflow-hidden">
      {/* <About/> */}
      <WorkingSection/>
      </div>
    
     <div id="portfolios">
     <Portfolios/>
     </div>
      <div id="contact">
      <Contact/>
      </div>
    </div>
  )
}

export default Home
