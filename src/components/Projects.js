import React from "react";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";
import SingleProject from "./SingleProject";
import Translate from 'react-translate-component';

class Projects extends React.Component {
    
    render() {

        return (
            <div className="projects-component">
                <Menu/>
                <section className="projects-section subpage">
                <Translate content="projectsPage.title" component="h2" className="title title-subpage"/>
                    <SingleProject/>
                </section>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default Projects;