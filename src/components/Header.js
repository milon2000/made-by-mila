import React from "react";

class Header extends React.Component {
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
          </nav>
        </div>
        <section className="header__banner">
          <div className="content">
            <div className="header__intro">
              <h2 className="header__title home-title">Hi, my name is Mila</h2>
            </div>
            <div className="header__content">
              <p>I BUILD WEBSITES, WEB APPS AND MAKE YOUR INTERNET NICE</p>
              <button className="header__button buttons">
                See my works -->
              </button>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
