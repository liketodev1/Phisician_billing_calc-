import React from 'react';
import './NavBar.scss';
import logo from '../../assets/images/company-logo.svg';
import Button from '../UI/Button/Button';
import Img from '../UI/Img/Img';

const NavBar = () => {
  return (
    <nav className="NavBar nav justify-content-between align-items-center mt-3">
      <a className="nav-link active" href="/">
        <Img src={ logo } alt="company logo"/>
      </a>
      <span className="d-flex">
        <a className="nav-link mr-3 text-capitalize" href="/">homepage</a>
        <Button classes='text-capitalize' text='log out'/>
      </span>
    </nav>
  );
};

export default NavBar;