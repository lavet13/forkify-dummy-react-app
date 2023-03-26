import React, { useState } from 'react';
import styles from './SearchResults.module.css';
import Results from '../Results/Results';
import Pagination from '../Pagination/Pagination';

const SearchResults = () => {
    const saveIdPreviewHandler = selectedId => {
        console.log(selectedId);
    };

    const saveCurrentPageHandler = selectedPage => {
        console.log(selectedPage);

        setCurrentPage(selectedPage);
    };

    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className={styles['search-results']}>
            <Results
                page={currentPage}
                onSaveIdPreview={saveIdPreviewHandler}
            />
            <Pagination
                page={currentPage}
                onSaveCurrentPage={saveCurrentPageHandler}
            />
        </div>
    );
};

export default SearchResults;
