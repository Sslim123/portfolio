import React, { Suspense, useState } from "react";
import Header from "./Component/Header";
import Introduction from "./Component/Introduction";
import "./App.css";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Details from "./Component/Details";
import HardSkills from "./Component/HardSkills";
import LaptopLoop from "./Component/LaptopLoop";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
//import Reveal from "react-reveal/Reveal";
//import Scroller from "./Component/Scroller";
//import { useTranslation } from "react-i18next";
// import  Fullpage, {FullPageSection, FullPageSections } from "react-fullpage";
//import i18n from "i18next";
import { FullPage } from "react-full-page";
import LocalContexts from "./LocalContext";
import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n} = useTranslation();
  const [locale, setLocale] =useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));
  const changeTheLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  }
  const Loading = ()=>{
    return(
      <>Loading...</>
   ) };
    
    
  return (
    <div className="App">
      {/* <h3>{t("Welcome to React")}</h3> */}
      <LocalContexts.Provider value={{locale, setLocale}} >
    <Suspense fallback={<Loading/>}>

    
    <select value={locale} onChange={changeTheLanguage}>
      <option value="en">english</option>
      <option value="ar">arabic</option>

    </select>
   
      <Fade top distance="15%">
        <Header/>
        <FullPage controls>
          <Introduction />
        </FullPage>
        <FullPage>
          <Details />
        </FullPage>
        <FullPage>
          <HardSkills />
        </FullPage>
        <LaptopLoop />
        <Projects />
        <About />

        <Zoom duration="2000">
          <FullPage>
            <Contact />
          </FullPage>
        </Zoom>
        <Footer />
      </Fade>
      </Suspense>
    </LocalContexts.Provider>
    </div>
  );
}

// export default App;
