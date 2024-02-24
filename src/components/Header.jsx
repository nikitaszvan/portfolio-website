import React from 'react';
import { RxSlash } from "react-icons/rx";

const Header = () => {
  return (
    <header>
        <div>
            <div className="square-logo"></div>
            <h4>Nikita Van</h4>
            <RxSlash className="slash-icon"/>
            <p>FRONT END DEVELOPER</p>
        </div>
        <nav>
            <a href="/">ABOUT ME</a>
            <a href="#resume-section">RESUME</a>
            <a href="#projects-section">PROJECTS</a>
            <a href="/">CONTACT</a>
        </nav>
    </header>
  )
}

export default Header;