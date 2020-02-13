import React from 'react';

const Img = ({ src, alt, classes }) => {
  return (
    <img src={ src } alt={ alt } className={ `Img ${ classes || '' }` }/>
  );
};

export default Img;