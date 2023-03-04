import React from 'react';
import styles from './Spinner.module.css';
import icons from '../../resources/icons.svg';

function Spinner() {
    const iconLoader = `${icons}#icon-loader`;

    return (
        <div className={styles.spinner}>
            <svg>
                <use href={iconLoader}></use>
            </svg>
        </div>
    );
}

export default Spinner;
