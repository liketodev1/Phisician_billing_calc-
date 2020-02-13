import React, { useState } from 'react';
import './Select.scss';

const Select = () => {

  const [option, setOption] = useState('Actionable Potential Income');

  return (
    <div className='Select'>
      <div className='Select__input d-flex justify-content-center align-items-center'>
        <span className="d-flex align-items-center justify-content-between">
          { option }
        </span>
      </div>
      <ul className='Select__dropdown'>
        <li>Actionable Potential Income</li>
        <li>Number Of Patient This Month</li>
        <li>Preventative Care Bonus(es) Obtained</li>
        <li>Outside Use</li>
        <li>Access Bonus</li>
        <li>Group Access Bonus Calculation</li>
      </ul>
    </div>
  );
};

export default Select;