import './Pagination.scss';

import icons from '../../resources/icons.svg';

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
                <button
                    onClick={prevPageHandler}
                    className="btn--inline pagination__btn--prev"
                >
                    <svg className="search__icon">
                        <use href={iconArrowLeft}></use>
                    </svg>
                    <span>Page {page - 1}</span>
                </button>
            )}
            <button
                onClick={nextPageHandler}
                className="btn--inline pagination__btn--next"
            >
                <span>Page {page + 1}</span>
                <svg className="search__icon">
                    <use href={iconArrowRight}></use>
                </svg>
            </button>
        </div>
    );
}

export default Pagination;
