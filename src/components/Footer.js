import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-wrapper">
            <div className="footer-component">
                <div className="social-media">
                <a href="https://github.com/milon2000" target="_blank"><img src="/img/github.png"></img></a>
                <a href="https://www.linkedin.com/in/milenakozlowska/" target="_blank"><img src="/img/linkedin.png"></img></a>
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