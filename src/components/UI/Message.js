import React from 'react';
import styles from './Message.module.css';

import icons from '../../resources/icons.svg';

const Message = ({ text }) => {
    const iconSmile = `${icons}#icon-smile`;

    return (
        <div className={styles.message}>
            <div>
                <svg>
                    <use href={iconSmile}></use>
                </svg>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Message;
