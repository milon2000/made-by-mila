import React from "react";

class HeaderBanner extends React.Component {

  render() {
 
    return (

        <section className="header__banner">
          <div className="content">
            <div className="header__intro">
              <h2 className="header__title title">Hey, I am Mila</h2>
            </div>
            <div className="header__content">
              <p>I create websites and web aaplications
            
              </p>
              <button className="header__button button">
                See my works
              </button>
            </div>
          </div>
        </section>
      
    );
  }
}

export default HeaderBanner;
