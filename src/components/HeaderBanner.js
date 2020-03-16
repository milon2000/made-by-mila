import React from "react";
import { Link } from 'react-router-dom';
import Translate from 'react-translate-component';



class HeaderBanner extends React.Component {
  render() {

    return (

        <section className="header__banner">
          <div className="content">
            <div className="header__intro">
            <Translate content="bannerTitle" component="h2" className="header__title title"/>
              
            </div>
            <div className="header__content">
            <Translate content="headerContent.headerP" component="p"/>
              <Link to="/projects"><Translate content="headerContent.headerButton" component="button" className="header__button button"/></Link>
   
            </div>
          </div>
        </section>
      
    );
  }

}

export default HeaderBanner;
