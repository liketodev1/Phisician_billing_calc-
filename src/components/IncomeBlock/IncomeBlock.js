import React from 'react';
import './IncomeBlock.scss';
import TotalIncome from '../TotalIncome/TotalIncome';
import { NavLink, Route } from 'react-router-dom';

const IncomeBlock = () => {
  return (
    <>
      <div className="IncomeBlock">
        <ul className="nav nav-tabs container justify-content-between align-items-center">
          <li className="nav-item">
            <NavLink to='/test' className="nav-link ">
              <span className='center-link'>Profile</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/test2' className="nav-link">
              <span className='center-link'>Contact</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/total-income' className="nav-link ">
              <span className='center-link'>
                Total Income: <span>$3000</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="tab-content" id="myTabContent">
        {/*<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Total income
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile</div>*/ }
        {/*<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <TotalIncome/>
        </div>*/ }
        <Route path='/total-income' component={ TotalIncome }/>
        <Route path='/test'/>
        <Route path='/test2'/>
      </div>
    </>
  );
};

export default IncomeBlock;