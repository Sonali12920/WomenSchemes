import React from 'react';
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">

        <p>Women Schemes</p>
        <Typed
          className="typed-text"
          strings={["Scholarships", "Fellowships", "Internships", "Research"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        {/* <a href="#" className="btn-main-offer">Get Started</a> */}
      </div>
    </div>
  )
}
export default Header
