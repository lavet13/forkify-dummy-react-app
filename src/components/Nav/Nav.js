import './Nav.scss';

import Bookmarks from '../Bookmarks/Bookmarks';
import icons from '../../resources/icons.svg';

function Nav({ onEditing }) {
    const iconEdit = `${icons}#icon-edit`;
    const iconBookmark = `${icons}#icon-bookmark`;

    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <button
                        onClick={onEditing}
                        className="nav__btn nav__btn--add-recipe"
                    >
                        <svg className="nav__icon">
                            <use href={iconEdit}></use>
                        </svg>
                        <span>Add recipe</span>
                    </button>
                </li>
                <li className="nav__item">
                    <button className="nav__btn nav__btn--bookmarks">
                        <svg className="nav__icon">
                            <use href={iconBookmark}></use>
                        </svg>
                        <span>Bookmarks</span>
                    </button>
                    <Bookmarks />
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
