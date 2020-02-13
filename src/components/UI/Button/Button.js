import React from 'react';
import './Button.scss';

const Button = ({ classes, text, children }) => {
  return (
    <button className={ `Button btn ${ classes || '' }` }>
      { text }
      { children }
    </button>
  );
};

export default Button;