import React from 'react';
import Container from '../../layouts/Container';
import Card from '../card/Card';
import './TotalIncome.scss';
// import Select from '../UI/Select/Select';
import MySelect from '../UI/MySelect/MySelect';
import Chart from '../Chart/Chart';
// import { Line } from 'react-chartjs-2';

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
      <Container classes='d-flex'>
        {/*<Select/>*/ }
        {/*<Select classes='the-trend'/>*/ }
        <MySelect/>
        <MySelect classes='the-trend'/>
      </Container>
      <Container classes='chart-container my-5'>
        <Chart/>
      </Container>
    </>
  );
};

export default TotalIncome;