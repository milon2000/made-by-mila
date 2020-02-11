import React from "react";
import HeaderBanner from "./HeaderBanner";
import Contact from "./Contact";
import Footer from "./Footer";
import Menu from "./Menu";
import Dashboard from "./Dashboard";

class App extends React.Component {
  render() {
    return (
      <div className="madeByMila">
        <Menu/>
        <HeaderBanner />
        <Dashboard />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
