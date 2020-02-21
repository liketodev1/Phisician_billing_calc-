import React from 'react';
import './Footer.scss';
import Container from '../Container';
import Img from '../../components/UI/Img/Img';
import LogoFooter from '../../assets/images/logo-footer.svg';

const Footer = () => {
  return (
    <footer className='Footer d-flex align-items-center'>
      <Container classes='d-flex align-items-center justify-content-between'>
        <div><Img src={ LogoFooter }/></div>
        <div className='Footer__copyright'>All Rights Reserved</div>
      </Container>
    </footer>
  );
};

export default Footer;