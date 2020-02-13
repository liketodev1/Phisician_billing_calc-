import React from 'react';
import './AccountInfo.scss';
import Img from '../UI/Img/Img';
import AccountPhoto from '../../assets/images/account-photo.png';

const AccountInfo = () => {
  return (
    <div className='AccountInfo d-flex align-items-center text-light mt-5'>
      <Img src={ AccountPhoto } alt='account photo'/>

      <div className='account-info-text'>
        <h2 className='text-capitalize mb-1'>norah jones</h2>
        <p className='text-capitalize'>therapist</p>
      </div>
    </div>
  );
};

export default AccountInfo;