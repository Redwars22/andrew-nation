import React from "react";
import "./App.css";
import NavBarComponent from "./components/NavBar";
import { ComingSoonComponent } from "./components/ComingSoon";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./modules/context";
import Button from "./components/AndrewKit/button/button.component";

function App() {
  const isDev = false;

  window.location.replace("https://andrewnationdev.vercel.app");

  return (
    <ThemeContextProvider>
      <button className="floating-button" onClick={() => window.open("https://github.com/Redwars22")}>
        <i className="bi bi-github"/>
      </button>
      <div className="App">
        <NavBarComponent />
        <AboutMe />
        {isDev && <ComingSoonComponent />}
          <>
            <Projects />
            <Skills />
          </>
      </div>
      <Footer/> 
    </ThemeContextProvider>
  );
}

export default App;
