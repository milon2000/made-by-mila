import React from "react";
import Translate from "react-translate-component";

const ProjectList = {
  hairball: {
    img: "/img/hairball.jpg",
    title: "WordPress theme - Hairball",
    desc:
      "Easy to use theme created for organizations helping animals. Thanks to a robust theme options panel, there is no need to implement presented solutions via code. Based on my own design. Some features: custom header, custom post type, minimalistic, modern design.  ",
    class: "projects-img flex even",
    bg: "projects-description-1 projects-description flex",
    url: "http://milon202.vot.pl/Blog/",
    source: "https://github.com/milon2000/hairball"
  },
  wp: {
    img: "/img/wp.jpg",
    title: "WordPress website for photographers",
    desc:
      "Minimalist, modern design and development based on a commercial WordPress theme. Configuration of a plugin for three languages.",
    class: "projects-img flex",
    bg: "projects-description-2 projects-description flex",
    url: "http://www.barnefotografering.com/",
    source: "http://www.barnefotografering.com/"
  },
  psd: {
    img: "/img/psd.jpg",
    title: "PSD to HTML, CSS and jQuery",
    desc: "Static website based on a provided PSD file.",
    class: "projects-img flex even",
    bg: "projects-description-3 projects-description flex",
    url: "https://milon2000.github.io/WeeklyWebDevChallenge3/",
    source: "https://github.com/milon2000/WeeklyWebDevChallenge3"
  },
  calculator: {
    img: "/img/calculator.jpg",
    title: "Currency Calculator",
    desc:
      "App created in vanilla JavaScript with a calculator that fetches data from the Polish National Bank.",
    class: "projects-img flex",
    bg: "projects-description-4 projects-description flex",
    url: "http://designedbymila.com/calculator/",
    source: "https://github.com/milon2000/Currency_Calculator_API_NBP"
  },
  adjectives: {
    img: "/img/adjectives.jpg",
    title: "Application - Norwegian Adjectives",
    desc:
      "If you are learning Norwegian and are struggling with adjectives, this app is for you. It explains in a funny (I hope) way, how Norwegian adjectives and nouns work. Created in vanilla JavaScript.",
    class: "projects-img flex even",
    bg: "projects-description-5 projects-description flex",
    url: "https://milon2000.github.io/app-adjectives-in-Norwegian/",
    source: "https://github.com/milon2000/app-adjectives-in-Norwegian"
  },
  personal: {
    img: "/img/personal.jpg",
    title: "Personal website v1.0",
    desc: "Static website based on my own project.",
    class: "projects-img flex",
    bg: "projects-description-6 projects-description flex",
    url: "http://designedbymila.com/",
    source: "https://github.com/milon2000/designedbymila"
  },
  doit: {
    img: "/img/doit.jpg",
    title: "Just do it!",
    desc:
      "Simple to-do list. I was practicing plain JavaScript; basic DOM manipulation.",
    class: "projects-img flex even",
    bg: "projects-description-7 projects-description flex",
    url: "https://milon2000.github.io/justDoIt/",
    source: "https://github.com/milon2000/justDoIt"
  },
  shopware: {
    img: "/img/shop.jpg",
    title: "Online shop",
    desc:
      "I was part of a team who created that online shop. My main responsibility was to create the homepage with custom settings in the backend panel. The shop was built on the Shopware platform. ",
    class: "projects-img flex even",
    bg: "projects-description-8 projects-description flex",
    url: "https://www.outfits24.de/",
    source: "https://www.outfits24.de/"
  }
};

const Link1 = props => {
  return;
};

class SingleProject extends React.Component {
  render() {
    return (
      <div>
        <div className="projects-list">
          <div className="projects-img flex even">
            <img src="/img/hairball.jpg" alt="Project"></img>
          </div>
          <div className="projects-description-1 projects-description flex">
            <Translate
              content="projectsPage.hairball.hairballTitle"
              component="h2"
              className="title pro-title"
            />
            <Translate
              content="projectsPage.hairball.hairballTxt"
              component="p"
            />
            <div className="buttons">
              <a
                href="http://milon202.vot.pl/Blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.hairball.hairballProject"
                  component="button"
                  className="button"
                />
              </a>
              <a
                href="https://github.com/milon2000/hairball"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.hairball.hairballSource"
                  component="button"
                  className="button"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="projects-list">
          <div className="projects-img flex">
            <img src="/img/wp.jpg" alt="Project"></img>
          </div>
          <div className="projects-description-2 projects-description flex">
            <Translate
              content="projectsPage.barnefotograf.barnefotografTitle"
              component="h2"
              className="title pro-title"
            />
            <Translate
              content="projectsPage.barnefotograf.barnefotografTxt"
              component="p"
            />
            <div className="buttons">
              <a
                href="http://www.barnefotografering.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.barnefotograf.barnefotografProject"
                  component="button"
                  className="button"
                />
              </a>
              <a
                href="http://www.barnefotografering.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.barnefotograf.barnefotografSource"
                  component="button"
                  className="button"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="projects-list">
          <div className="projects-img flex even">
            <img src="/img/psd.jpg" alt="Project"></img>
          </div>
          <div className="projects-description-3 projects-description flex">
            <Translate
              content="projectsPage.psd.psdTitle"
              component="h2"
              className="title pro-title"
            />
            <Translate
              content="projectsPage.psd.psdTxt"
              component="p"
            />
            <div className="buttons">
              <a
                href="https://milon2000.github.io/WeeklyWebDevChallenge3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.psd.psdProject"
                  component="button"
                  className="button"
                />
              </a>
              <a
                href="https://github.com/milon2000/WeeklyWebDevChallenge3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.psd.psdSource"
                  component="button"
                  className="button"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="projects-list">
          <div className="projects-img flex">
            <img src="/img/calculator.jpg" alt="Project"></img>
          </div>
          <div className="projects-description-4 projects-description flex">
            <Translate
              content="projectsPage.calculator.calculatorTitle"
              component="h2"
              className="title pro-title"
            />
            <Translate
              content="projectsPage.calculator.calculatorTxt"
              component="p"
            />
            <div className="buttons">
              <a
                href="http://designedbymila.com/calculator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.psd.psdProject"
                  component="button"
                  className="button"
                />
              </a>
              <a
                href="https://github.com/milon2000/Currency_Calculator_API_NBP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.calculator.calculatorSource"
                  component="button"
                  className="button"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="projects-list">
          <div className="projects-img flex even">
            <img src="/img/adjectives.jpg" alt="Project"></img>
          </div>
          <div className="projects-description-5 projects-description flex">
            <Translate
              content="projectsPage.app.appTitle"
              component="h2"
              className="title pro-title"
            />
            <Translate
              content="projectsPage.app.appTxt"
              component="p"
            />
            <div className="buttons">
              <a
                href="https://milon2000.github.io/app-adjectives-in-Norwegian/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.app.appProject"
                  component="button"
                  className="button"
                />
              </a>
              <a
                href="https://github.com/milon2000/app-adjectives-in-Norwegian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.app.appSource"
                  component="button"
                  className="button"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="projects-list">
          <div className="projects-img flex">
            <img src="/img/personal.jpg" alt="Project"></img>
          </div>
          <div className="projects-description-6 projects-description flex">
            <Translate
              content="projectsPage.personal.personalTitle"
              component="h2"
              className="title pro-title"
            />
            <Translate
              content="projectsPage.personal.personalTxt"
              component="p"
            />
            <div className="buttons">
              <a
                href="http://designedbymila.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.personal.personalProject"
                  component="button"
                  className="button"
                />
              </a>
              <a
                href="https://github.com/milon2000/designedbymila"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.personal.personalSource"
                  component="button"
                  className="button"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="projects-list">
          <div className="projects-img flex even">
            <img src="/img/doit.jpg" alt="Project"></img>
          </div>
          <div className="projects-description-7 projects-description flex">
            <Translate
              content="projectsPage.do.doTitle"
              component="h2"
              className="title pro-title"
            />
            <Translate
              content="projectsPage.do.doTxt"
              component="p"
            />
            <div className="buttons">
              <a
                href="https://milon2000.github.io/justDoIt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.do.doProject"
                  component="button"
                  className="button"
                />
              </a>
              <a
                href="https://github.com/milon2000/justDoIt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.do.doSource"
                  component="button"
                  className="button"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="projects-list">
          <div className="projects-img flex">
            <img src="/img/shop.jpg" alt="Project"></img>
          </div>
          <div className="projects-description-7 projects-description flex">
            <Translate
              content="projectsPage.shop.shopTitle"
              component="h2"
              className="title pro-title"
            />
            <Translate
              content="projectsPage.shop.shopTxt"
              component="p"
            />
            <div className="buttons">
              <a
                href="https://www.outfits24.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate
                  content="projectsPage.shop.shopProject"
                  component="button"
                  className="button"
                />
              </a>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SingleProject;
