import React from 'react';
import styles from './SearchResults.module.css';

function SearchResults({ children }) {
    return <div className={styles['search-results']}>{children}</div>;
}

export default SearchResults;
