import React, { useRef } from 'react';
import styles from './SearchForm.module.css';
import icons from '../../resources/icons.svg';
import Button from '../UI/Button';

function SearchForm({ onSaveSearchData }) {
    const iconSearch = `${icons}#icon-search`;

    const enteredSearchField = useRef();

    const formSubmitHandler = e => {
        e.preventDefault();

        if (!enteredSearchField.current.value) return;

        onSaveSearchData({ search: enteredSearchField.current.value });

        enteredSearchField.current.value = '';
    };

    return (
        <form onSubmit={formSubmitHandler} className={styles.search}>
            <input
                type="text"
                className={styles.search__field}
                placeholder="Search over 1,000,000 recipes..."
                ref={enteredSearchField}
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
