import Imag from "../images/IMG_0250.png";
import Bounce from "react-reveal/Bounce";
// import  { FullPage }  from "react-full-page";
import { useTranslation } from "react-i18next";
import arabic from "../Localization/Arabices.json";

export default function Introduction() {
  const {  i18n } = useTranslation();

  const arab = arabic.map((elm) => {
    if (i18n.language === "en") {
      return {
        iam: elm.Intro1.iam,
        more: elm.Intro1.more,
        roll: elm.Intro1.roll,
        pation: elm.Intro1.pation,
      };
    } else if (i18n.language === "ar") {
      return {
        iam: elm.Intro2.iam,
        more: elm.Intro2.more,
        roll: elm.Intro2.roll,
        pation: elm.Intro2.pation,
      };
    } else {
      return elm;
    }
  });

  console.log(arab);
  return (
    <div className="intro" aria-label="theSection">
      {arab.map((elem) => (
        
          <Bounce left delay={100}>
            <div id="animate">
              <div className="animate-1">
                <>
                  <span>{<em>{elem.iam}</em>}</span>
                </>
              </div>
              <div id="animate-2">
                <h5>{elem.roll}</h5>
              </div>
              <section className="animate-section">
                <p>{elem.pation} </p>
                <li>
                  <a href="#details">{elem.more}</a>
                </li>
              </section>
            </div>
          </Bounce>
        
      ))}
      <Bounce delay={1000}>
        <div className="intro-img">
          <img src={Imag} alt="my profile of me" />
        </div>
      </Bounce>
    </div>
  );
}
