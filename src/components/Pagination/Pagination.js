import './Pagination.scss';

import icons from '../../resources/icons.svg';

function Pagination() {
    const iconArrowLeft = `${icons}#icon-arrow-left`;
    const iconArrowRight = `${icons}#icon-arrow-right`;

    return (
        <div className="pagination">
            <button className="btn--inline pagination__btn--prev">
                <svg className="search__icon">
                    <use href={iconArrowLeft}></use>
                </svg>
                <span>Page 1</span>
            </button>
            <button className="btn--inline pagination__btn--next">
                <span>Page 3</span>
                <svg className="search__icon">
                    <use href={iconArrowRight}></use>
                </svg>
            </button>
        </div>
    );
}

export default Pagination;
