import React, { useState } from 'react';
import styles from './AddRecipeForm.module.css';
import icons from '../../resources/icons.svg';

import Button from '../UI/Button';
import Ingredients from '../Ingredients/Ingredients';

function AddRecipeForm() {
    const iconUploadCloud = `${icons}#icon-upload-cloud`;

    //////////////////////////////////////////////////////////
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredSourceUrl, setEnteredSourceUrl] = useState('');
    const [enteredImage, setEnteredImage] = useState('');
    const [enteredPublisher, setEnteredPublisher] = useState('');
    const [enteredCookingTime, setEnteredCookingTime] = useState('');
    const [enteredServings, setEnteredServings] = useState('');

    const titleChangeHandler = e => {
        setEnteredTitle(e.target.value);
    };
    const sourceUrlChangeHandler = e => {
        setEnteredSourceUrl(e.target.value);
    };
    const imageChangeHandler = e => {
        setEnteredImage(e.target.value);
    };
    const publisherChangeHandler = e => {
        setEnteredPublisher(e.target.value);
    };
    const cookingTimeChangeHandler = e => {
        setEnteredCookingTime(e.target.value);
    };
    const servingsChangeHandler = e => {
        setEnteredServings(e.target.value);
    };

    const [ingredients, setIngredients] = useState(
        Array.from({ length: 6 }, (_, i) => [`ingredient-${i + 1}`, ''])
    );

    const [isValidIngredients, setIsValidIngredients] = useState(
        Array.from({ length: ingredients.length }, () => true)
    );

    const saveIngredientHandler = savedIngredient => {
        const [index, value] = savedIngredient;

        if (value.trim().length > 0)
            setIsValidIngredients(prevValidIngredients => {
                return prevValidIngredients.map((isValid, i) =>
                    i === index ? true : isValid
                );
            });

        setIngredients(prevIngredients => {
            return prevIngredients.map(([ingredientId, ingValue], ingIndex) => [
                ingredientId,
                ingIndex === index ? value : ingValue,
            ]);
        });
    };

    const formSubmitHandler = e => {
        e.preventDefault();

        if (ingredients.some(([_, value]) => value.trim().length === 0)) {
            setIsValidIngredients(prevValidIngredients =>
                prevValidIngredients.map((isValid, i) =>
                    ingredients[i][1].trim().length === 0 ? false : isValid
                )
            );
            return;
        }

        const enteredData = {
            title: enteredTitle,
            sourceUrl: enteredSourceUrl,
            image: enteredImage,
            publisher: enteredPublisher,
            cookingTime: enteredCookingTime,
            servings: enteredServings,
            ...Object.fromEntries(ingredients),
        };

        console.log(enteredData);
    };

    return (
        <form onSubmit={formSubmitHandler} className={styles.upload}>
            <div className={styles.upload__column}>
                <h3 className={styles.upload__heading}>Recipe data</h3>
                <label>Title</label>
                <input
                    onChange={titleChangeHandler}
                    value={enteredTitle}
                    name="title"
                    type="text"
                />
                <label>URL</label>
                <input
                    onChange={sourceUrlChangeHandler}
                    value={enteredSourceUrl}
                    name="sourceUrl"
                    type="text"
                />
                <label>Image URL</label>
                <input
                    onChange={imageChangeHandler}
                    value={enteredImage}
                    name="image"
                    type="text"
                />
                <label>Publisher</label>
                <input
                    onChange={publisherChangeHandler}
                    value={enteredPublisher}
                    name="publisher"
                    type="text"
                />
                <label>Prep time</label>
                <input
                    onChange={cookingTimeChangeHandler}
                    value={enteredCookingTime}
                    name="cookingTime"
                    type="number"
                />
                <label>Servings</label>
                <input
                    onChange={servingsChangeHandler}
                    value={enteredServings}
                    name="servings"
                    type="number"
                />
            </div>

            <Ingredients
                items={ingredients}
                onSaveIngredient={saveIngredientHandler}
                isValidIngredients={isValidIngredients}
            />

            <Button btn uploadBtn type="submit">
                <svg>
                    <use href={iconUploadCloud}></use>
                </svg>
                <span>Upload</span>
            </Button>
        </form>
    );
}

export default AddRecipeForm;
