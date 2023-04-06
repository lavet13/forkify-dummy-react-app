import React from 'react';
import styles from './pagination.module.css';

import icons from '../../resources/icons.svg';
import Button from '../UI/button/button.component';

const Pagination = ({ onSaveCurrentPage, page }) => {
  const iconArrowLeft = `${icons}#icon-arrow-left`;
  const iconArrowRight = `${icons}#icon-arrow-right`;

  const nextPageHandler = e => {
    onSaveCurrentPage(page + 1);
  };

  const prevPageHandler = e => {
    onSaveCurrentPage(page - 1);
  };

  return (
    <div className={styles.pagination}>
      {page > 1 && (
        <Button btnInline floatLeft onClick={prevPageHandler}>
          <svg>
            <use href={iconArrowLeft}></use>
          </svg>
          <span>Page {page - 1}</span>
        </Button>
      )}
      <Button btnInline floatRight onClick={nextPageHandler}>
        <span>Page {page + 1}</span>
        <svg>
          <use href={iconArrowRight}></use>
        </svg>
      </Button>
    </div>
  );
};

export default Pagination;
