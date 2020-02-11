import React from "react";

class Dashboard extends React.Component {
    render() {
        return (
            <section className="main">
          <a href="/projects" className="projects">
            <div className="projects-wrapper">
            <article className="projects__content">
              <h2 className="projects__title title">
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
                  <h2 className="about__title title">About me</h2>
                  <p>I am a frontend developer and photographer living in Kongsberg, Norway</p>
                  <button className="button">Read more about me</button>
                </article>
              </div>
            </a>
            <a href="/technologies" className="technologies">
              <div className="technologies-wrapper">
                <article className="technologies__content">
                  <h2 className="technologies__title title">
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
                <h2 className="together__title title">
                I can help bring your ideas to life
                </h2>
                <p>Powered by VS Code and coffee, I turn your requirements and needs into websites or web apps on time and budget</p>
                <button className="button">Let's work together</button>
              </article>
              <figure className="together__image"></figure>
            </div>
          </a>
        </section>
        )
    }
}

export default Dashboard;
