import React from 'react';
import Header from './components/header/Header';
import IncomeBlock from './components/IncomeBlock/IncomeBlock';
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Header/>
      <Router>
        <IncomeBlock/>
      </Router>
    </div>
  );
};

export default App;