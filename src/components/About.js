import React from "react";
import Footer from "./Footer";
import Contact from "./Contact";
import Menu from "./Menu";
import { Link } from 'react-router-dom';
import Translate from 'react-translate-component';

class About extends React.Component {
    render() {
        return (
            <div className="about-component">
                <Menu/>
                <section className="about-section subpage">
                <Translate content="aboutPage.aboutTitle" component="h2" className="title title-subpage"/>
                    <Translate content="aboutPage.aboutTxt" component="p"/>
                </section>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default About;