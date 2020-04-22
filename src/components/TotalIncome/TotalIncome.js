import React, { useState } from 'react';
import Container from '../../layouts/Container';
import Card from '../Card/Card';
import './TotalIncome.scss';
// import Select from '../UI/Select/Select';
import MySelect from '../UI/MySelect/MySelect';
import Chart from '../Chart/Chart';
import { connect } from 'react-redux';
import Cards from '../../Cards/Cards';
import Pagination from '../Pagination/Pagination';
// import { Line } from 'react-chartjs-2';


const TotalIncome = ({ billingData }) => {


  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

// Get current posts
  const indexOfLastCard = currentPage * cardsPerPage; // 3 * 5 = q15
  const indexOfFirsCard = indexOfLastCard - cardsPerPage;  // 10 - 5 = 5
  const currentCards = billingData.slice(indexOfFirsCard, indexOfLastCard);

// Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Pagination cardsPerPage={ cardsPerPage } totalCards={ billingData.length } paginate={ paginate }/>

      <Container classes='TotalIncome d-flex justify-content-between flex-wrap'>
        <Cards currentCards={ currentCards }/>
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

const mapState = ({ dataReducer }) => ({
  billingData: dataReducer.billingData
});

export default connect(mapState)(TotalIncome);
