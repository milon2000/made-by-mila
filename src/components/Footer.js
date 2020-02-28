import React from "react";
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-wrapper">
            <div className="footer-component">
                <div className="social-media">
                <a href="https://github.com/milon2000" target="_blank"  rel="noopener noreferrer"><img src="/img/github.png" alt="GitHub Icon"></img></a>
                <a href="https://www.linkedin.com/in/milenakozlowska/" target="_blank" rel="noopener noreferrer"><img src="/img/linkedin.png" alt=" LinkedIn Icon"></img></a>
                </div>
                <div className="copy">
                    <p>Designed and developed by <Link to="/">Made by Mila</Link></p>
                    <p>I use cookies and similar technologies to run this website to understand how you use it. By choosing to continue, you are accepting my privacy policy.</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Footer;