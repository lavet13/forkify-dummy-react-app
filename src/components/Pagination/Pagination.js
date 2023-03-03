import './Pagination.scss';

import icons from '../../resources/icons.svg';
import Button from '../UI/Button';

function Pagination({ onSaveCurrentPage, page }) {
    const iconArrowLeft = `${icons}#icon-arrow-left`;
    const iconArrowRight = `${icons}#icon-arrow-right`;

    const nextPageHandler = e => {
        onSaveCurrentPage(page + 1);
    };

    const prevPageHandler = e => {
        onSaveCurrentPage(page - 1);
    };

    return (
        <div className="pagination">
            {page > 1 && (
                <Button btnInline floatLeft onClick={prevPageHandler}>
                    <svg className="search__icon">
                        <use href={iconArrowLeft}></use>
                    </svg>
                    <span>Page {page - 1}</span>
                </Button>
            )}
            <Button btnInline floatRight onClick={nextPageHandler}>
                <span>Page {page + 1}</span>
                <svg className="search__icon">
                    <use href={iconArrowRight}></use>
                </svg>
            </Button>
        </div>
    );
}

export default Pagination;
