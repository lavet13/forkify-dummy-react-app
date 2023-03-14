import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Nav.module.css';
import otherStyles from '../Bookmarks/Bookmarks.module.css';

import Bookmarks from '../Bookmarks/Bookmarks';
import icons from '../../resources/icons.svg';
import Button from '../UI/Button';
import Backdrop from '../AddRecipeWindow/Backdrop';
import AddRecipeWindow from '../AddRecipeWindow/AddRecipeWindow';

function Nav() {
    const iconEdit = `${icons}#icon-edit`;
    const iconBookmark = `${icons}#icon-bookmark`;

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                    <Button navBtn onClick={startEditingHandler}>
                        <svg>
                            <use href={iconEdit}></use>
                        </svg>
                        <span>Add recipe</span>
                    </Button>
                    {isEditing &&
                        ReactDOM.createPortal(
                            <Backdrop
                                isEditing={isEditing}
                                onStopEditing={stopEditingHandler}
                            />,
                            document.querySelector('#backdrop-root')
                        )}
                    {isEditing &&
                        ReactDOM.createPortal(
                            <AddRecipeWindow
                                isEditing={isEditing}
                                onCancel={stopEditingHandler}
                            />,
                            document.querySelector('#overlay-root')
                        )}
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
