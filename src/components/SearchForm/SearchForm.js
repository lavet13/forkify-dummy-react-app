import './SearchForm.scss';
import icons from '../../resources/icons.svg';

import Button from '../UI/Button';

function SearchForm() {
    const iconSearch = `${icons}#icon-search`;

    return (
        <form className="search">
            <input
                type="text"
                className="search__field"
                placeholder="Search over 1,000,000 recipes..."
            />
            <Button className="search__btn">
                <svg className="search__icon">
                    <use href={iconSearch}></use>
                </svg>
                <span>Search</span>
            </Button>
        </form>
    );
}

export default SearchForm;
