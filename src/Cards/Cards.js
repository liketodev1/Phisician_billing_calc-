import React from 'react';
import Card from '../components/Card/Card';
import Container from '../layouts/Container';

const Cards = ({ currentCards }) => {
  return (
    <>
      { currentCards.map(({ id, ...props }) => (
        <Card key={ id } { ...props }/>

      )) }
    </>
  );
};

export default Cards;
