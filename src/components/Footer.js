import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-wrapper">
            <div className="footer-component">
                <div className="social-media">
                <img src="/img/github.png"></img>
                <img src="/img/linkedin.png"></img>
                </div>
                <div className="copy">
                    <p>Created and developed by Made by Mila</p>
                    <p>Używam ciasteczek i dlatego niedługo będę gruba</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Footer;