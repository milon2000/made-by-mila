import React from "react";
import HeaderBanner from "./HeaderBanner";
import Contact from "./Contact";
import Footer from "./Footer";
import Menu from "./Menu";

class App extends React.Component {
  render() {
    return (
      <div className="madeByMila">
        <Menu/>
        <HeaderBanner />
        <section className="main">
          <a href="/projects" className="projects">
            <div className="projects-wrapper">
            <article className="projects__content">
              <h2 className="projects__title home-title">
                Websites and web apps
              </h2>
              <p>
              I have completed over 10 projects, including websites and web apps, both commercial and non-profit
              </p>
              <button className="button">See them all</button>
              
            </article>
            <figure className="projects__image"></figure>
            </div>
          </a>
          
            <a href="/about" className="about">
              <div className="about-wrapper">
                <article className="about__content">
                  <h2 className="about__title home-title">About me</h2>
                  <p>I am a frontend developer and photographer living in Kongsberg, Norway</p>
                  <button className="button">Read more about me</button>
                </article>
              </div>
            </a>
            <a href="/technologies" className="technologies">
              <div className="technologies-wrapper">
                <article className="technologies__content">
                  <h2 className="technologies__title home-title">
                    Technologies
                  </h2>
                  <p>
                  My current IT stack includes both front and back-end programming experience
                  </p>
                  <button className="button">See the details</button>
                </article>
              </div>
            </a>
          
          <a href="/together" className="together">
            <div className="together-wrapper">
              <article className="together__content">
                <h2 className="together__title home-title">
                I can help bring your ideas to life
                </h2>
                <p>Powered by VS Code and coffee, I turn your requirements and needs into websites or web apps on time and budget</p>
                <button className="button">Let's work together</button>
              </article>
              <figure className="together__image"></figure>
            </div>
          </a>
        </section>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
