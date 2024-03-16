import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TransArabic from "../Localization/Arabices.json";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const languages = TransArabic.map((elem) => {
    if (i18n.language === "en") {
      return {
        title: elem.English.title,
        Home: elem.English.Home,
        Projects: elem.English.Projects,
        Contact: elem.English.Contact,
        About: elem.English.About,
        
      };
    } else if (i18n.language === "ar") {
      return {
        title: elem.Arabic.title,
        Home: elem.Arabic.Home,
        Projects: elem.Arabic.Projects,
        Contact: elem.Arabic.Contact,
        About: elem.Arabic.About,
        


      };
    } else {
      return elem;
    }
  });

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav-bar">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="nav">
              {languages.map((language) => (
                <>
                  <h3>{language.title}</h3>
                  <a href="/" key={language.Home}>
                    {t(language.Home)}
                  </a>
                  <a href="#projects">{(language.Projects)}</a>
                  <a href="#form-contact">{(language.Contact)}</a>
                  <a href="#about"> {(language.About)} </a>
                </>
              ))}
            </Nav>
          </Navbar.Collapse>
          <button
            onClick={() => {
              i18n.changeLanguage("ar");
            }}
          >
            arabic
          </button>
          <button
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            english
          </button>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
