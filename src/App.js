import React from 'react';

import styles from './App.module.css';
import SearchForm from './components/search-form/search-form.component';
import Header from './components/header/header.component';
import Nav from './components/nav/nav.component';
import SearchResults from './components/search-results/search-results.component';
import Recipe from './components/recipe/recipe.component';

const App = () => {
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
};

export default App;
