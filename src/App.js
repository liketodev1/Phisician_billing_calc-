import React from 'react';
import Header from './components/header/Header';
import IncomeBlock from './components/IncomeBlock/IncomeBlock';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Header/>
      <Router>
        <IncomeBlock/>
      </Router>
      <Footer/>
    </div>
  );
};

export default App;
