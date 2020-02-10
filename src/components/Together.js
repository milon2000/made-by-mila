import React from "react";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";

class Together extends React.Component {
    render() {
        return (
            <div className="together-component">
                <Menu/>
                <section className="together-section subpage">
                    <h2 className="title title-subpage">Together</h2>
                    <p>chbjldwk,chbjdkaclhdnj</p>
                </section>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default Together;