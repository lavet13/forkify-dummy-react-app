import React from 'react';

import styles from './App.module.css';
import SearchForm from './components/SearchForm/SearchForm';
import Header from './components/UI/Header';
import Nav from './components/Nav/Nav';
import SearchResults from './components/SearchResults/SearchResults';
import Recipe from './components/Recipe/Recipe';

function App() {
    const saveSearchDataHandler = enteredSearch => {
        console.log(enteredSearch);
    };

    return (
        <div className={styles.container}>
            <Header>
                <SearchForm onSaveSearchData={saveSearchDataHandler} />
                <Nav />
            </Header>
            <SearchResults />
            <Recipe />
        </div>
    );
}

export default App;
