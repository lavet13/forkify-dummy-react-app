import React from 'react';
import { Link } from 'react-router-dom';
import styles from './preview.module.css';

// import icons from '../../resources/icons.svg';

const Preview = () => {
  // const iconUser = `${icons}#icon-user`;

  return (
    <li>
      <Link className={styles.preview__link} to='/search/recipe'>
        <figure className={styles.preview__fig}>
          {/* <img src="src/img/test-1.jpg" alt="Test" /> */}
        </figure>
        <div className={styles.preview__data}>
          <h4 className={styles.preview__title}>Pasta with Tomato Cream ...</h4>
          <p className={styles.preview__publisher}>The Pioneer Woman</p>
          {/* <div className={styles['preview__user-generated']}>
                        <svg>
                            <use href={iconUser}></use>
                        </svg>
                    </div> */}
        </div>
      </Link>
    </li>
  );
};

export default Preview;
