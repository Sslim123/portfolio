import React from "react";
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
//import {  useTranslation } from "react-i18next";
// import  Fullpage, {FullPageSection, FullPageSections } from "react-fullpage";
//import i18n from "i18next";
import  { FullPage }  from "react-full-page";




export default function App() {

// const lngs = [
//   { code: "en", native: "English" },
//   { code: "ar", native: "arabic" },
// ];
//      const { t, i18n } = useTranslation();
//       const handleTrans = (code) => {
//       i18n.changeLanguage(code);
//     };
    return (
      <div className="App">
        {/* <h2>{t('Welcome toReact')}</h2>
        {lngs.map((lng, i) => {
        const { code, native } = lng;
        return <button onClick={() => handleTrans(code)}>{native}</button>;
       <Scroller/>
      })} */}

          {/* <Fullpage>
            <FullPageSections>
              <FullPageSection>


              </FullPageSection>
            </FullPageSections>

          </Fullpage> */}
        <Fade top distance="15%">
        <Header />
        <FullPage controls>

          <Introduction />
        </FullPage>
          <FullPage>

          <Details />
          </FullPage>
          <FullPage>

            <HardSkills />
          </FullPage>
            <LaptopLoop/>
          <Projects />
          <About />

          <Zoom  duration="2000">
          <FullPage>
          <Contact />
          </FullPage>
          </Zoom>
          <Footer />

        </Fade>
      </div>
    );
}

// export default App;
