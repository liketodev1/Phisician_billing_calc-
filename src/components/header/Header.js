import React from 'react';
import './Header.scss';
import NavBar from '../NavBar/NavBar';
import Container from '../../layouts/Container';
import BgVideo from '../../assets/videos/bg-video.webm';
import AccountInfo from '../AccountInfo/AccountInfo';

const Header = () => {
  return (
    <header className="Header">
      <video autoPlay loop={ true } className="bg-video" width="100%">
        <source src={ BgVideo } type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <Container>
        <NavBar/>
        <AccountInfo/>
      </Container>
    </header>
  );
};

export default Header;