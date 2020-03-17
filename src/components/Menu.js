import React from "react";
import { Link } from 'react-router-dom';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import en from '../lang/en';
import pl from '../lang/pl';
import no from '../lang/no';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('pl', pl);
counterpart.registerTranslations('no', no);
counterpart.setLocale('en');

class Menu extends React.Component {


  onLangChange = (e) => {
    this.setState({lang: e.target.value});
    counterpart.setLocale(e.target.value);
  }
  state = {
    isOpen: false,
    lang: 'en'
  };

  openMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    let isOpenMenu = this.state.isOpen;
    return (
      <header className="header">
        <div className="header__top-bar">
          <div>
          <Link to="/" className="header__logo">
            <img src="/img/logo.png"></img>
          </Link>
          </div>
          <div className="lang-buttons">
          <button value="en" onClick={this.onLangChange} className="button lang">EN</button>
          <button value="pl" onClick={this.onLangChange} className="button lang">PL</button>
          <button value="no" onClick={this.onLangChange} className="button lang">NO</button>
          </div>
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
            <Link to="/"><Translate content="menu.home" component="li" className="header__item"/></Link>
            <Link to="/about"><Translate content="menu.about" component="li" className="header__item"/></Link>
            <Link to="/technologies"><Translate content="menu.technologies" component="li" className="header__item"/></Link>
            <Link to="/projects"><Translate content="menu.projects" component="li" className="header__item"/></Link>
            <Link to="/together"><Translate content="menu.together" component="li" className="header__item"/></Link>
            </ul>
            <div>

            </div>
            <div className="connect">
            <Translate content="menu.connect" component="p"/>
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
