import './Nav.scss';

import Bookmarks from '../Bookmarks/Bookmarks';
import icons from '../../resources/icons.svg';
import Button from '../UI/Button';

function Nav({ onEditing }) {
    const iconEdit = `${icons}#icon-edit`;
    const iconBookmark = `${icons}#icon-bookmark`;

    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <Button navBtn onClick={onEditing}>
                        <svg className="nav__icon">
                            <use href={iconEdit}></use>
                        </svg>
                        <span>Add recipe</span>
                    </Button>
                </li>
                <li className="nav__item">
                    <Button navBtn>
                        <svg className="nav__icon">
                            <use href={iconBookmark}></use>
                        </svg>
                        <span>Bookmarks</span>
                    </Button>
                    <Bookmarks />
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
