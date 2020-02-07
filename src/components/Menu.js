import React from "react";

class Menu extends React.Component {
  state = {
    isOpen: false
  };

  openMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    let isOpenMenu = this.state.isOpen;
    console.log(this.state.isOpen);
    return (
      <header className="header">
        <div className="header__top-bar">
          <a href="/" className="header__logo">
            Made by Mila_
          </a>
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
                <a href="/">Home</a>
              </li>
              <li className="header__item">
                <a href="/about">About me</a>
              </li>
              <li className="header__item">
                <a href="/together">How we can work</a>
              </li>
              <li className="header__item">
                <a href="/technologies">Technologies</a>
              </li>
              <li className="header__item">
                <a href="/projects">Projects</a>
              </li>
              <li className="header__item">
                <a href="/contact">Let's work together</a>
              </li>
            </ul>
            <div className="connect">
              <p>Connect:</p>
              <p>contact@madebymila.net</p>
              <p>942 17 445</p>
              <img src="/img/github.png"></img>
              <img src="/img/linkedin.png"></img>
            </div>
          </nav>
        </div>
        </header>
      
    );
  }
}

export default Menu;
