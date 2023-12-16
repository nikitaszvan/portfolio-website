import React from 'react';

const Header = () => {
  return (
    <header>
        <div>
            <div className="square-logo"></div>
            <h4>Nikita Van</h4>
            <img src="/images/slash.png" alt="slash" />
            <p>FRONT END DEVELOPER</p>
        </div>
        <nav>
            <a href="/">ABOUT ME</a>
            <a href="/">RESUME</a>
            <a href="/">PROJECTS</a>
            <a href="/">CONTACT</a>
        </nav>
    </header>
  )
}

export default Header;