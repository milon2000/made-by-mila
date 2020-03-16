import React from "react";
import { Link } from 'react-router-dom';
import Translate from 'react-translate-component';


class Dashboard extends React.Component {
    render() {
        return (
            <section className="main">
          <Link to="/projects" className="projects">
            <div className="projects-wrapper wrapper">
            <article className="projects__content content-subpage">
              <Translate content="homePage.projectsTitle" component="h2" className="projects__title title"></Translate>
              <Translate content="homePage.projectsDescription" component="p"></Translate>
              <Link to="/projects"><Translate content="homePage.projectsButton" component="button" className="button"/></Link>              
            </article>
            <figure className="projects__image image"></figure>
            </div>
          </Link>
          
            <Link to="/about" className="about">
              <div className="about-wrapper wrapper">
                <article className="about__content content-subpage">
                <Translate content="homePage.aboutTitle" component="h2" className="about__title title"></Translate>
                <Translate content="homePage.aboutDescription" component="p"></Translate>
                <Link to="/about"><Translate content="homePage.aboutButton" component="button" className="button"/></Link>
      
                </article>
              </div>
            </Link>
            <Link to="/technologies" className="technologies">
              <div className="technologies-wrapper wrapper">
                <article className="technologies__content content-subpage">
                <Translate content="homePage.technologiesTitle" component="h2" className="technologies__title title"></Translate>
                <Translate content="homePage.technologiesDescription" component="p"></Translate>
                <Link to="/technologies"><Translate content="homePage.technologiesButton" component="button" className="button"/></Link>
                </article>
              </div>
            </Link>
          
          <Link to="/together" className="together">
            <div className="together-wrapper wrapper">
              <article className="together__content content-subpage">
              <Translate content="homePage.togetherTitle" component="h2" className="together__title title"></Translate>
              <Translate content="homePage.togetherDescription" component="p"></Translate>
              <Link to="/together"><Translate content="homePage.togetherButton" component="button" className="button"/></Link>
              </article>
              <figure className="together__image image"></figure>
            </div>
          </Link>
        </section>
        )
    }
}

export default Dashboard;
