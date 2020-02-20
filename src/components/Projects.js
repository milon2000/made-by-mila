import React from "react";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";
import SingleProject from "./SingleProject";

class Projects extends React.Component {
    
    render() {

        return (
            <div className="projects-component">
                <Menu/>
                <section className="projects-section subpage">
                    <h2 className="title title-subpage">Here are a few design projects I've worked on recently</h2>
                    <SingleProject/>
                </section>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default Projects;