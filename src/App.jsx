import { useState } from "react";
// import "./App.css";
import NavbarMain from "./assets/components/Navbar/NavbarMain";
import HeroMain from "./assets/components/heroSection/HeroMain";
import HeroGradient from "./assets/components/heroSection/HeroGradient";
import SubHeroSection from "./assets/components/heroSection/SubHeroSection";
import AboutMeMain from "./assets/components/aboutMeSection/AboutMeMain";
import HelperSection from "./assets/components/HelperSection";
import SkillsMain from "./assets/components/skillsSection/SkillsMain";
import SubSkills from "./assets/components/skillsSection/SubSkills";
import ProjectMain from "./assets/components/projectSection/ProjectMain";
import ContactmeMain from "./assets/components/contactMeSection/ContactmeMain";
import FooterMain from "./assets/components/footerSection/FooterMain";

function App() {
  return <main className="font-body">
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
      <AboutMeMain/>
      <SkillsMain/>
      <ProjectMain/>
      <ContactmeMain/>
      <FooterMain/>
  </main>;
}

export default App;
