import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SearchForm from './components/search-form/search-form.component';
import Header from './routes/header/header.component';
import Nav from './components/nav/nav.component';
import SearchResults from './routes/search-results/search-results.component';
import Recipe from './routes/recipe/recipe.component';

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
