import React from "react";

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
              <a href="/projects"><button className="header__button button">
                See my work
              </button>
              </a>
            </div>
          </div>
        </section>
      
    );
  }
}

export default HeaderBanner;
