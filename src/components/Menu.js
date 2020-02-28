import React from "react";
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  state = {
    isOpen: false
  };

  openMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    let isOpenMenu = this.state.isOpen;
    return (
      <header className="header">
        <div className="header__top-bar">
          <Link to="/" className="header__logo">
            Made by Mila_
          </Link>
          <div
            className={isOpenMenu ? "nav-toggle expanded" : "nav-toggle"}
            onClick={this.openMenu}
          >
            <div className="nav-toggle-div">
              <div className="nav-toggle-bar"></div>
            </div>
          </div>

          <nav className={isOpenMenu ? "nav expanded" : "nav"}>
            <ul className="header__list">
              <li className="header__item">
                <Link to="/">Home</Link>
              </li>
              <li className="header__item">
                <Link to="/about">About me</Link>
              </li>
              <li className="header__item">
                <Link to="/technologies">Technologies</Link>
              </li>
              <li className="header__item">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="header__item">
                <Link to="/together">Let's work together</Link>
              </li>
            </ul>
            <div className="connect">
              <p>Connect:</p>
              <p>contact@madebymila.net</p>
              <p>942 17 445</p>
              <a href="https://github.com/milon2000" target="_blank" rel="noopener noreferrer"><img src="/img/github.png" alt="Github Icon"></img></a>
              <a href="https://www.linkedin.com/in/milenakozlowska/" target="_blank" rel="noopener noreferrer"><img src="/img/linkedin.png" alt="LinkedIn Icon"></img></a>
            </div>
          </nav>
        </div>
        </header>
      
    );
  }
}

export default Menu;
