import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import SocialLinks from "./components/Social-Links/SocialLinks";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <div>
     
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <TechStack />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
