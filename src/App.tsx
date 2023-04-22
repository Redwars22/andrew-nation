import React from "react";
import "./App.css";
import NavBarComponent from "./components/NavBar";
import { ComingSoonComponent } from "./components/ComingSoon";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./modules/context";

function App() {
  const isDev = false;

  return (
    <ThemeContextProvider>
      <div className="App">
        <NavBarComponent />
        {isDev && <AboutMe />}
        {isDev && <ComingSoonComponent />}
        {!isDev && (
          <>
            <Projects />
            <Skills />
          </>
        )}
      </div>
      <Footer/> 
    </ThemeContextProvider>
  );
}

export default App;
