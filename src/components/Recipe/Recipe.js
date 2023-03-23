import React, { useState } from 'react';

import Message from '../UI/Message';
import styles from './Recipe.module.css';

import icons from '../../resources/icons.svg';
import Button from '../UI/Button';
import A from '../UI/A';

const iconClock = `${icons}#icon-clock`;
const iconUsers = `${icons}#icon-users`;
const iconUser = `${icons}#icon-user`;
const iconMinusCircle = `${icons}#icon-minus-circle`;
const iconPlusCircle = `${icons}#icon-plus-circle`;
const iconBookmarkFill = `${icons}#icon-bookmark-fill`;
const iconBookmarkUnFill = `${icons}#icon-bookmark`;
const iconCheck = `${icons}#icon-check`;
const iconArrowRight = `${icons}#icon-arrow-right`;

const Recipe = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const bookmarkChangeHandler = () => {
        setIsBookmarked(isBookmarked => !isBookmarked);
    };

    const [currentServings, setCurrentServings] = useState(4);
    const nextServingsHandler = () => {
        setCurrentServings(currentServings => currentServings + 1);
    };

    const prevServingsHandler = () => {
        setCurrentServings(currentServings => {
            return currentServings > 1 ? currentServings - 1 : currentServings;
        });
    };

    return (
        <div className={styles.recipe}>
            <Message text="Start by searching for a recipe or an ingredient. Have fun!"></Message>
            <figure className={styles.recipe__fig}>
                {/* <img
                    src="src/img/test-1.jpg"
                    alt="Tomato"
                    className="recipe__img"
                /> */}
                <h1 className={styles.recipe__title}>
                    <span>Pasta with tomato cream sauce</span>
                </h1>
            </figure>

            <div className={styles.recipe__details}>
                <div className={styles.recipe__info}>
                    <svg className={styles['recipe__info-icon']}>
                        <use href={iconClock}></use>
                    </svg>
                    <span
                        className={`${styles['recipe__info-data']} ${styles['recipe__info-data--minutes']}`}
                    >
                        45
                    </span>
                    <span className={styles['recipe__info-text']}>minutes</span>
                </div>
                <div className={styles.recipe__info}>
                    <svg className={styles['recipe__info-icon']}>
                        <use href={iconUsers}></use>
                    </svg>
                    <span
                        className={`${styles['recipe__info-data']} ${styles['recipe__info-data--people']}`}
                    >
                        {currentServings}
                    </span>
                    <span className={styles['recipe__info-text']}>
                        servings
                    </span>

                    <div className={styles['recipe__info-buttons']}>
                        <Button btnTiny onClick={prevServingsHandler}>
                            <svg>
                                <use href={iconMinusCircle}></use>
                            </svg>
                        </Button>
                        <Button btnTiny onClick={nextServingsHandler}>
                            <svg>
                                <use href={iconPlusCircle}></use>
                            </svg>
                        </Button>
                    </div>
                </div>

                <div className={styles['recipe__user-generated']}>
                    <svg>
                        <use href={iconUser}></use>
                    </svg>
                </div>

                <Button btnRound onClick={bookmarkChangeHandler}>
                    <svg>
                        <use
                            href={
                                isBookmarked
                                    ? iconBookmarkFill
                                    : iconBookmarkUnFill
                            }
                        ></use>
                    </svg>
                </Button>
            </div>

            <div className={styles.recipe__ingredients}>
                <h2 className={styles['heading--2']}>Recipe ingredients</h2>
                <ul className={styles['recipe__ingredient-list']}>
                    <li className={styles.recipe__ingredient}>
                        <svg className={styles.recipe__icon}>
                            <use href={iconCheck}></use>
                        </svg>
                        <div className={styles.recipe__quantity}>1000</div>
                        <div className={styles.recipe__description}>
                            <span className={styles.recipe__unit}>g</span>
                            pasta
                        </div>
                    </li>

                    <li className={styles.recipe__ingredient}>
                        <svg className={styles.recipe__icon}>
                            <use href={iconCheck}></use>
                        </svg>
                        <div className={styles.recipe__quantity}>0.5</div>
                        <div className={styles.recipe__description}>
                            <span className={styles.recipe__unit}>cup</span>
                            ricotta cheese
                        </div>
                    </li>
                </ul>
            </div>

            <div className={styles.recipe__directions}>
                <h2 className={styles['heading--2']}>How to cook it</h2>
                <p className={styles['recipe__directions-text']}>
                    This recipe was carefully designed and tested by
                    <span className={styles.recipe__publisher}>
                        {' '}
                        The Pioneer Woman
                    </span>
                    . Please check out directions at their website.
                </p>
                <A href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/">
                    <span>Directions</span>
                    <svg>
                        <use href={iconArrowRight}></use>
                    </svg>
                </A>
            </div>
        </div>
    );
};

export default Recipe;
