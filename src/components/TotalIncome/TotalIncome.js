import React from 'react';
import Container from '../../layouts/Container';
import Card from '../card/Card';
import './TotalIncome.scss';
import Select from '../UI/Select/Select';

const TotalIncome = () => {
  return (
    <>
      <Container classes='TotalIncome d-flex justify-content-between flex-wrap'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Container>
      <Container>
        <Select/>
      </Container>
    </>
  );
};

export default TotalIncome;