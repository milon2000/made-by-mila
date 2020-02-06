import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="madeByMila">
        <Header />
        <section className="main">
          <a href="/projects" className="projects">
            <div className="projects-wrapper">
            <article className="projects__content">
              <h2 className="projects__title home-title">
                Websites and web apps
              </h2>
              <p>
                I have coded 5+ websites both commercials and non-profit
                projects. Simple applications helping everyday stuff!
              </p>
              <button className="button">See them all</button>
              
            </article>
            <figure className="projects__image"></figure>
            </div>
          </a>
          
            <a href="/about" className="about">
              <div className="about-wrapper">
                <article className="about__content">
                  <h2 className="about__title home-title">About</h2>
                  <p>Just few words about me</p>
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
                    My current IT stack includes both front and back-end
                    programming experiance
                  </p>
                  <button className="button">See the details</button>
                </article>
              </div>
            </a>
          
          <a href="/together" className="together">
            <div className="together-wrapper">
              <article className="together__content">
                <h2 className="together__title home-title">
                  I want you to have your own web place.
                </h2>
                <p>I tu kilka słów więcej o mnie</p>
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
