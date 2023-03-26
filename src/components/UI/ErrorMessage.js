import React from 'react';
import styles from './ErrorMessage.module.css';

import icons from '../../resources/icons.svg';

const ErrorMessage = ({ text }) => {
    const iconError = `${icons}#icon-alert-triangle`;

    return (
        <div className={styles.error}>
            <div>
                <svg>
                    <use href={iconError}></use>
                </svg>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default ErrorMessage;
