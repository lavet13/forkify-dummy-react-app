import React, { useRef } from 'react';
import styles from './search-form.module.css';
import icons from '../../assets/icons.svg';
import Button from '../UI/button/button.component';

const SearchForm = ({ onSaveSearchData }) => {
  const iconSearch = `${icons}#icon-search`;

  const enteredSearchField = useRef();

  const formSubmitHandler = e => {
    e.preventDefault();

    if (!enteredSearchField.current.value) return;

    const search = enteredSearchField.current.value;

    onSaveSearchData({ search });

    enteredSearchField.current.value = '';
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.search}>
      <input
        type='text'
        className={styles.search__field}
        placeholder='Search over 1,000,000 recipes...'
        ref={enteredSearchField}
      />
      <Button btn searchBtn type='submit'>
        <svg>
          <use href={iconSearch}></use>
        </svg>
        <span>Search</span>
      </Button>
    </form>
  );
};

export default SearchForm;
