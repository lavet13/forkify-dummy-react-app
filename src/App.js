import React, { useState } from 'react';

import './App.scss';
import SearchForm from './components/SearchForm/SearchForm';
import Header from './components/UI/Header';
import Nav from './components/Nav/Nav';
import SearchResults from './components/SearchResults/SearchResults';
import Results from './components/Results/Results';
import Pagination from './components/Pagination/Pagination';
import Recipe from './components/Recipe/Recipe';
import Overlay from './components/UI/Overlay';
import AddRecipeWindow from './components/AddRecipeWindow/AddRecipeWindow';

function App() {
    const saveSearchDataHandler = enteredSearch => {
        console.log(enteredSearch);
    };

    const saveIdPreviewHandler = selectedId => {
        console.log(selectedId);
    };

    const saveCurrentPageHandler = selectedPage => {
        setCurrentPage(selectedPage);
    };

    const [currentPage, setCurrentPage] = useState(1);

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div>
            <div className="container">
                <Header>
                    <SearchForm onSaveSearchData={saveSearchDataHandler} />
                    <Nav onEditing={startEditingHandler} />
                </Header>
                <SearchResults>
                    <Results
                        page={currentPage}
                        onSaveIdPreview={saveIdPreviewHandler}
                    />
                    <Pagination
                        page={currentPage}
                        onSaveCurrentPage={saveCurrentPageHandler}
                    />
                </SearchResults>
                <Recipe />
            </div>
            <Overlay isEditing={isEditing} onCancel={stopEditingHandler} />
            <AddRecipeWindow
                isEditing={isEditing}
                onCancel={stopEditingHandler}
            />
        </div>
    );
}

export default App;
