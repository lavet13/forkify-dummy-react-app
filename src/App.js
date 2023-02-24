import './App.scss';
import SearchForm from './components/Search/SearchForm';
import './components/UI/Header';
import Header from './components/UI/Header';
import Nav from './components/Nav/Nav';

function App() {
    return (
        <div className="container">
            <Header>
                <SearchForm />
                <Nav />
            </Header>
        </div>
    );
}

export default App;
