import React from "react";
import '../../styles/Header.css'
import { pageHeader } from '../../content';
import { Link } from 'react-router-dom';

type NavigationInput = {
  toggleHamburger: () => void;
  checkToggle: boolean;
}

const Navigation: React.FC<NavigationInput> = ({ toggleHamburger, checkToggle }) => {

  const openHamburgerMenu: JSX.Element = (
    <div className="open-hamburger"> 
       <ul className="open-nav-list-container">
          <Link to="/about" className="open-nav-item">
            <li>About</li>
          </Link>
          <Link to="/contact" className="open-nav-item">
            <li>Content</li>
          </Link>
        </ul>
    </div>
  );

  const horizontalNavList: JSX.Element = (
    <ul className="nav-list-container">
      <Link to="/about" className="nav-item">
        <li>About</li>
      </Link>
      <hr />
      <Link to="/contact" className="nav-item">
        <li>Content</li>
      </Link>
    </ul>
  )

  return (
      <div  className="header-container">
        <div>
          <h1 className="header-content">{pageHeader}</h1>
        </div>
        <button className="hamburger-container" onClick={() => toggleHamburger()}>
          <div className="hamburger-child">
            <div className="hamburger-border borderOne"></div>
            <div className="hamburger-border borderTwo"></div>
            <div className="hamburger-border borderThree"></div>
          </div>
        </button>

        {checkToggle && openHamburgerMenu}
        {horizontalNavList}
      </div>
  )};

export default Navigation;
