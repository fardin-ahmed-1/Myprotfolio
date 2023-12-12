import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import MySkills from "./MySkills"
import Portfolios from "./Portfolios/Portfolios"
import SkillLogo from "./SkillLogo"

const Home = () => {
  return (
    <div>
      <div id="home">
      <Hero/>
      </div>
      <SkillLogo/>
      <div id="about" className="overflow-hidden">
      <About/>
      </div>
      <div className="experince">
      <MySkills/>
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
