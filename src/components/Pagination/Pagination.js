import React from 'react';
import './Pagination.scss';

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {


  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginateHandler = (e, number) => {
    e.preventDefault();
    paginate(number);


  };

  return (
    <nav className='Pagination container'>
      <ul className="pagination">
        { pageNumbers.map(number => (
          <li key={ number } className='page-item'>
            <a href="!#" className='page-link' onClick={ e => paginateHandler(e, number) }>
              { number }
            </a>
          </li>
        )) }
      </ul>
    </nav>
  );
};

export default Pagination;
