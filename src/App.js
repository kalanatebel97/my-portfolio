import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import SocialLinks from "./components/Social-Links/SocialLinks";

function App() {
  return (
    <div>
     
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
 <SocialLinks />
    </div>
  );
}

export default App;
