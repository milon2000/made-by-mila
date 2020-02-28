import React from "react";
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        return (
            <section className="main">
          <Link to="/projects" className="projects">
            <div className="projects-wrapper wrapper">
            <article className="projects__content content-subpage">
              <h2 className="projects__title title">
                Websites and web apps
              </h2>
              <p>
              I have completed more than 10 projects, including websites and web apps, both commercial and non-profit
              </p>
              <button className="button">See them all</button>
              
            </article>
            <figure className="projects__image image"></figure>
            </div>
          </Link>
          
            <Link to="/about" className="about">
              <div className="about-wrapper wrapper">
                <article className="about__content content-subpage">
                  <h2 className="about__title title">About me</h2>
                  <p>I am a frontend developer and photographer living in Kongsberg, Norway</p>
                  <button className="button">Read more about me</button>
                </article>
              </div>
            </Link>
            <Link to="/technologies" className="technologies">
              <div className="technologies-wrapper wrapper">
                <article className="technologies__content content-subpage">
                  <h2 className="technologies__title title">
                    Technologies
                  </h2>
                  <p>
                  My current IT stack includes both frontend and backend programming experience
                  </p>
                  <button className="button">See the details</button>
                </article>
              </div>
            </Link>
          
          <Link to="/together" className="together">
            <div className="together-wrapper wrapper">
              <article className="together__content content-subpage">
                <h2 className="together__title title">
                I can help bring your ideas to life
                </h2>
                <p>Powered by VS Code and coffee, I turn your requirements and needs into websites or web apps on time and in budget</p>
                <button className="button">Let's work together</button>
              </article>
              <figure className="together__image image"></figure>
            </div>
          </Link>
        </section>
        )
    }
}

export default Dashboard;
