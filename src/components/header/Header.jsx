import React, {useRef} from "react";
import "./Header.css";

const Header = (props) => {


  return (
    <header>
      <nav>
        <ul className="links-list">
          <a href='#home-con'>Home</a>
          <a href='#about-con'>About</a>
          <a href='#port-con'>Portfolio</a>
          <a href='#foot-con'>Contact</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
