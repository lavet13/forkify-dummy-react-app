import React from 'react';
import styles from './Preview.module.css';

// import icons from '../../resources/icons.svg';

const Preview = () => {
    // const iconUser = `${icons}#icon-user`;

    return (
        <li>
            <a className={styles.preview__link} href='?id=23456'>
                <figure className={styles.preview__fig}>
                    {/* <img src="src/img/test-1.jpg" alt="Test" /> */}
                </figure>
                <div className={styles.preview__data}>
                    <h4 className={styles.preview__title}>
                        Pasta with Tomato Cream ...
                    </h4>
                    <p className={styles.preview__publisher}>
                        The Pioneer Woman
                    </p>
                    {/* <div className={styles['preview__user-generated']}>
                        <svg>
                            <use href={iconUser}></use>
                        </svg>
                    </div> */}
                </div>
            </a>
        </li>
    );
};

export default Preview;
