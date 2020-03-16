import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Contact from "./Contact";
import Translate from 'react-translate-component';


class Technologies extends React.Component {
    render() {
        return (
            <div className="technologies-component">
                <Menu/>
                <section className="tchnologies-section subpage">
                <Translate content="technologiesPage.title.technologiesTitle" component="h2" className="title title-subpage"/>
                    <div className="technologies-subpage-flex">
                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-html">
                        <Translate content="technologiesPage.html.title" component="h2" className="technologies__title-sub title"/>
                            <ul className="technologies__list-sub">
                            <Translate content="technologiesPage.html.li1" component="li"/>
                            <Translate content="technologiesPage.html.li2" component="li"/>
                            </ul>
                        </article>
                    </div>

                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-css">
                        <Translate content="technologiesPage.css.title" component="h2" className="technologies__title-sub title"/>
                            <ul className="technologies__list-sub">
                            <Translate content="technologiesPage.css.li1" component="li"/>
                            <Translate content="technologiesPage.css.li2" component="li"/>
                            </ul>
                        </article>
                    </div>
                    </div>
                    
                    <div className="technologies-subpage-flex">
                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-js">
                        <Translate content="technologiesPage.js.title" component="h2" className="technologies__title-sub title"/>
                            <ul className="technologies__list-sub">
                            <Translate content="technologiesPage.js.li1" component="li"/>
                            <Translate content="technologiesPage.js.li2" component="li"/>
                            </ul>
                        </article>
                    </div>

                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-php">
                        <Translate content="technologiesPage.php.title" component="h2" className="technologies__title-sub title"/>
                            <ul className="technologies__list-sub">
                            <Translate content="technologiesPage.php.li1" component="li"/>
                            <Translate content="technologiesPage.php.li2" component="li"/>
                            </ul>
                        </article>
                    </div>
                    </div>

                    <div className="technologies-subpage-flex">
                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-wp">
                        <Translate content="technologiesPage.wp.title" component="h2" className="technologies__title-sub title"/>
                            <ul className="technologies__list-sub">
                            <Translate content="technologiesPage.wp.li1" component="li"/>
                            <Translate content="technologiesPage.wp.li2" component="li"/>
                            </ul>
                        </article>
                    </div>

                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-shopware">
                        <Translate content="technologiesPage.shopware.title" component="h2" className="technologies__title-sub title"/>
                            <ul className="technologies__list-sub">
                            <Translate content="technologiesPage.shopware.li1" component="li"/>
                            <Translate content="technologiesPage.shopware.li2" component="li"/>
                            </ul>
                        </article>
                    </div>
                    </div>

                    
                    <div className="technologies-subpage-flex">
                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-git">
                        <Translate content="technologiesPage.github.title" component="h2" className="technologies__title-sub title"/>
                            <ul className="technologies__list-sub">
                            <Translate content="technologiesPage.shopware.li1" component="li"/>
                            </ul>
                        </article>
                    </div>

                    <div className="technologies-wrapper-sub wrapper">
                        <article className="technologies__content-sub content-subpage tech-adobe">
                        <Translate content="technologiesPage.adobe.title" component="h2" className="technologies__title-sub title"/>
                            <ul className="technologies__list-sub">
                            <Translate content="technologiesPage.adobe.li1" component="li"/>
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