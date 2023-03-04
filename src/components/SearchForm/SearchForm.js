import React, { useState } from 'react';
import styles from './SearchForm.module.css';
import icons from '../../resources/icons.svg';
import Button from '../UI/Button';

function SearchForm({ onSaveSearchData }) {
    const iconSearch = `${icons}#icon-search`;

    const [enteredSearchField, setEnteredSearchField] = useState('');

    const searchFieldChangeHandler = e => {
        setEnteredSearchField(e.target.value);
    };

    const formSubmitHandler = e => {
        e.preventDefault();

        setEnteredSearchField('');

        onSaveSearchData({ search: enteredSearchField });
    };

    return (
        <form onSubmit={formSubmitHandler} className={styles.search}>
            <input
                type="text"
                onChange={searchFieldChangeHandler}
                value={enteredSearchField}
                className={styles.search__field}
                placeholder="Search over 1,000,000 recipes..."
                required
            />
            <Button btn searchBtn type="submit">
                <svg>
                    <use href={iconSearch}></use>
                </svg>
                <span>Search</span>
            </Button>
        </form>
    );
}

export default SearchForm;
