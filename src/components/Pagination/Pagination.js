import React, { useState, useRef } from 'react';
import './Pagination.scss';

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {

  const paginationContainer = useRef(null);

  const [toggle, setToggle] = useState(true);

  const setActiveClass = () => {

// Get all buttons with class="btn" inside the container
    let paginationItems = paginationContainer.current.getElementsByClassName('page-item');

// Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < paginationItems.length; i++) {
      paginationItems[i].addEventListener('click', function () {
        let currentItem = document.getElementsByClassName('active');
        currentItem[0].className = currentItem[0].className.replace(' active', '');
        this.className += ' active';
      });
    }
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginateHandler = (e, number) => {
    e.preventDefault();
    paginate(number);

    let paginationItems = paginationContainer.current.getElementsByClassName('page-item');
    console.log('paginationItems', paginationItems);

    setActiveClass();
  };

  return (
    <nav className='Pagination container'>
      <ul className="pagination" ref={ paginationContainer }>
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
