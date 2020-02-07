import React from "react";
import Menu from "./Menu";
import HeaderBanner from "./HeaderBanner";
import Footer from "./Footer";

class Projects extends React.Component {
    
    render() {
        console.log(window.location.href);
        return (
            <div className="projects-component">
                <Menu/>
                <section className="projects-section">
                    <h2 className="home-title pro-title">Just a few words about me...</h2>
                    <p> pariatur?</p>

                    <div className="projects-list">
                        <div className="projects-img flex">
                            <img src="/img/hairball.jpg"></img>
                        </div>
                        <div className="projects-description-1 flex">
                            <h2 className="home-title pro-title">Projekt 1</h2>
                            <p>jcdks,</p>
                        </div>
                    </div>

                    <div className="projects-list">
                    <div className="projects-description-2 flex">
                            <h2 className="home-title pro-title">Projekt 1</h2>
                            <p>jcdks,</p>
                        </div>
                        <div className="projects-img flex">
                            <img src="/img/wp.jpg"></img>
                        </div>
                    </div>


                    <div className="projects-list">
                    <div className="projects-img flex">
                            <img src="/img/psd.jpg"></img>
                        </div>
                    <div className="projects-description-3 flex">
                            <h2 className="home-title pro-title">Projekt 1</h2>
                            <p>jcdks,</p>
                        </div>
                        
                    </div>
                    
                    <div className="projects-list">
                    <div className="projects-description-4 flex">
                            <h2 className="home-title pro-title">Projekt 1</h2>
                            <p>jcdks,</p>
                        </div>
                        <div className="projects-img flex">
                            <img src="/img/personal.jpg"></img>
                        </div>
                    </div>
                    
                    <div className="projects-list">
                    <div className="projects-img flex">
                            <img src="/img/calculator.jpg"></img>
                        </div>
                    <div className="projects-description-5 flex">
                            <h2 className="home-title pro-title">Projekt 1</h2>
                            <p>jcdks,</p>
                        </div>
                        
                    </div>
                    
                    <div className="projects-list">
                    <div className="projects-description-6 flex">
                            <h2 className="home-title">Projekt 1</h2>
                            <p>jcdks,</p>
                        </div>
                        <div className="projects-img flex">
                            <img src="/img/adjectives.jpg"></img>
                        </div>
                    </div>
                    <div className="projects-list">
                    <div className="projects-img flex">
                            <img src="/img/doit.jpg"></img>
                        </div>
                    <div className="projects-description-7 flex">
                            <h2 className="home-title">Projekt 1</h2>
                            <p>jcdks,</p>
                        </div>
                        
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default Projects;