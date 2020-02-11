import React from "react";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";
import SingleProject from "./SingleProject";

class Projects extends React.Component {
    
    render() {
        console.log(window.location.href);
        return (
            <div className="projects-component">
                <Menu/>
                <section className="projects-section subpage">
                    <h2 className="title title-subpage">Just a few words about me...</h2>
                    <p> pariatur?</p>
                    <SingleProject/>
                </section>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default Projects;