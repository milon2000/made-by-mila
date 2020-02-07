import React from "react";

class HeaderBanner extends React.Component {

  render() {
 
    return (

        <section className="header__banner">
          <div className="content">
            <div className="header__intro">
              <h2 className="header__title home-title">Hey, I am Mila</h2>
            </div>
            <div className="header__content">
              <p>I create websites and web apps
            
              </p>
              <button className="header__button buttons">
                See my works
              </button>
            </div>
          </div>
        </section>
      
    );
  }
}

export default HeaderBanner;
