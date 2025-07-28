import Contact from "./components/Contact";
// import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/project.jsx";
import Skills from "./components/Skills";
import AboutMe from "./components/aboutMe.jsx";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Portfolio/>
      {/* <Experience/> */}
      <AboutMe />
      <Contact/>
      <Footer/>
    </>
  )
}