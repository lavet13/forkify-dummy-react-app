import React from 'react';
import styles from './Nav.module.css';
import otherStyles from '../Bookmarks/Bookmarks.module.css';

import Bookmarks from '../Bookmarks/Bookmarks';
import icons from '../../resources/icons.svg';
import Button from '../UI/Button';

function Nav({ onEditing }) {
    const iconEdit = `${icons}#icon-edit`;
    const iconBookmark = `${icons}#icon-bookmark`;

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                    <Button navBtn onClick={onEditing}>
                        <svg>
                            <use href={iconEdit}></use>
                        </svg>
                        <span>Add recipe</span>
                    </Button>
                </li>
                <li className={styles.nav__item}>
                    <Button navBtn bookmarkClass={otherStyles.bookmarks}>
                        <svg>
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
