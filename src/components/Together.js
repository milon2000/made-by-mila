import React from "react";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";
import Translate from 'react-translate-component';


class Together extends React.Component {
    render() {
        return (
            <div className="together-component">
                <Menu/>
                <section className="together-section subpage">
                    
                    <Translate content="togetherPage.togetherTitle" component="h2" className="title title-subpage"/>
                    <Translate content="togetherPage.p1" component="p"/>
                    <Translate content="togetherPage.p2" component="p"/>
                    
                    <Translate content="togetherPage.h1" component="h3" className="title-subpage"/>
                    <Translate content="togetherPage.h2" component="h4" className="title-subpage"/>

                    <Translate content="togetherPage.p3" component="p"/>


                    <Translate content="togetherPage.h3" component="h4" className="title-subpage"/>
                
                    <Translate content="togetherPage.p4" component="p"/>
                    <Translate content="togetherPage.h4" component="h4" className="title-subpage"/>
                    
                    <Translate content="togetherPage.p5" component="p"/>
                    <Translate content="togetherPage.h5" component="h4" className="title-subpage"/>
                    <Translate content="togetherPage.p6" component="p"/>
                    
                </section>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default Together;