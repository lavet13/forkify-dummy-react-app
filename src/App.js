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
    return (
        <div>
            <div className="container">
                <Header>
                    <SearchForm />
                    <Nav />
                </Header>
                <SearchResults>
                    <Results />
                    <Pagination />
                </SearchResults>
                <Recipe />
            </div>
            <Overlay className="hidden" />
            <AddRecipeWindow className="hidden" />
        </div>
    );
}

export default App;
