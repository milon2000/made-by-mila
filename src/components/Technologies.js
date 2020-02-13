import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Contact from "./Contact";

class Technologies extends React.Component {
    render() {
        return (
            <div className="technologies-component">
                <Menu/>
                <section className="tchnologies-section subpage">
                    <h2 className="title title-subpage">Technologies I have worked with</h2>
                    <div className="technologies-subpage-flex">
                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-html">
                            <h2 className="technologies__title-sub title">
                                HTML5
                            </h2>
                            <ul className="technologies__list-sub">
                                <li>Ssemantic HTML5 code abiding W3C markup validation</li>
                                <li>10+ websites</li>
                            </ul>
                        </article>
                    </div>

                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-css">
                            <h2 className="technologies__title-sub title">
                                CSS
                            </h2>
                            <ul className="technologies__list-sub">
                                <li>LESS preprocessor</li>
                                <li>10+ websites</li>
                            </ul>
                        </article>
                    </div>
                    </div>
                    
                    <div className="technologies-subpage-flex">
                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-js">
                            <h2 className="technologies__title-sub title">
                                JavaScript
                            </h2>
                            <ul className="technologies__list-sub">
                                <li>Vanilla JS and jQuery</li>
                                <li>React in progress - this website is created in React</li>
                            </ul>
                        </article>
                    </div>

                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-php">
                            <h2 className="technologies__title-sub title">
                                PHP
                            </h2>
                            <ul className="technologies__list-sub">
                                <li>Basic syntax knowledge</li>
                                <li>Using PHP to create WP themes and work with the Shopware platform</li>
                                <li>Smarty</li>
                            </ul>
                        </article>
                    </div>
                    </div>

                    <div className="technologies-subpage-flex">
                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-wp">
                            <h2 className="technologies__title-sub title">
                                WordPress
                            </h2>
                            <ul className="technologies__list-sub">
                                <li>Adjusting the existing theme to requirements</li>
                                <li>Creating WP theme from scratch</li>
                            </ul>
                        </article>
                    </div>

                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-shopware">
                            <h2 className="technologies__title-sub title">
                                Shopware
                            </h2>
                            <ul className="technologies__list-sub">
                                <li>Shopping Worlds, custom settings, hierarchy</li>
                            </ul>
                        </article>
                    </div>
                    </div>

                    
                    <div className="technologies-subpage-flex">
                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-git">
                            <h2 className="technologies__title-sub title">
                                GitHub
                            </h2>
                            <ul className="technologies__list-sub">
                                <li>For most of my projects, I use GIT version control and github.com as my repository host</li>
                            </ul>
                        </article>
                    </div>

                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-adobe">
                            <h2 className="technologies__title-sub title">
                                Adobe
                            </h2>
                            <ul className="technologies__list-sub">
                                <li>Photoshop, Illustrator, InDesign, After Effects</li>
                            </ul>
                        </article>
                    </div>
                    </div>
                    
                </section>
                <Contact/>
                <Footer/>
                
            </div>
        )
    }
}

export default Technologies;