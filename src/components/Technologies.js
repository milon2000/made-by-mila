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
                    <div className="technologies-subpage-flex">
                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-html">
                            <h2 className="technologies__title-sub title">
                                HTML
                            </h2>
                            <ul className="technologies__list-sub">
                                <li>semantic code</li>
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
                                <li>semantic code</li>
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
                                <li>semantic code</li>
                                <li>10+ websites</li>
                            </ul>
                        </article>
                    </div>

                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-php">
                            <h2 className="technologies__title-sub title">
                                PHP
                            </h2>
                            <ul className="technologies__list-sub">
                                <li>semantic code</li>
                                <li>10+ websites</li>
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
                                <li>semantic code</li>
                                <li>10+ websites</li>
                            </ul>
                        </article>
                    </div>

                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-shopware">
                            <h2 className="technologies__title-sub title">
                                PHP
                            </h2>
                            <ul className="technologies__list-sub">
                                <li>semantic code</li>
                                <li>10+ websites</li>
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
                                <li>semantic code</li>
                                <li>10+ websites</li>
                            </ul>
                        </article>
                    </div>

                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-adobe">
                            <h2 className="technologies__title-sub title">
                                Adobe
                            </h2>
                            <ul className="technologies__list-sub">
                                <li>semantic code</li>
                                <li>10+ websites</li>
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