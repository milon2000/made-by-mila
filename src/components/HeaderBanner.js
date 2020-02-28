import React from "react";
import { Link } from 'react-router-dom';

class HeaderBanner extends React.Component {

  render() {
 
    return (

        <section className="header__banner">
          <div className="content">
            <div className="header__intro">
              <h2 className="header__title title">Hey, I'm Mila</h2>
            </div>
            <div className="header__content">
              <p>I create websites and web applications
            
              </p>
              <Link to="/projects"><button className="header__button button">
                See my work
              </button>
              </Link>
            </div>
          </div>
        </section>
      
    );
  }
}

export default HeaderBanner;
