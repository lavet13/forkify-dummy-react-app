import React, { useState } from 'react';
import styles from './AddRecipeForm.module.css';
import icons from '../../resources/icons.svg';

import Button from '../UI/Button';
import Ingredients from '../Ingredients/Ingredients';
import Control from '../UI/Control';

function AddRecipeForm() {
    const iconUploadCloud = `${icons}#icon-upload-cloud`;

    //////////////////////////////////////////////////////////
    const [enteredTitle, setEnteredTitle] = useState('');
    const [titleIsValid, setTitleIsValid] = useState(true);
    const isValidTitle = title => title.length >= 5;
    const validateTitleHandler = () => {
        setTitleIsValid(isValidTitle(enteredTitle));
    }; 

    const [enteredSourceUrl, setEnteredSourceUrl] = useState('');
    const [sourceUrlIsValid, setSourceUrlIsValid] = useState(true);
    const isValidSourceUrl = sourceUrl => sourceUrl.length >= 5;
    const validateSourceUrlHandler = () => {
        setSourceUrlIsValid(isValidSourceUrl(enteredSourceUrl));
    };

    const [enteredImage, setEnteredImage] = useState('');
    const [imageIsValid, setImageIsValid] = useState(true);
    const isValidImage = image => image.length >= 5;
    const validateImageHandler = () => {
        setImageIsValid(isValidImage(enteredImage));
    };

    const [enteredPublisher, setEnteredPublisher] = useState('');
    const [publisherIsValid, setPublisherIsValid] = useState(true);
    const isValidPublisher = publisher => publisher.length >= 5;
    const validatePublisherHandler = () => {
        setPublisherIsValid(isValidPublisher(enteredPublisher));
    };

    const [enteredCookingTime, setEnteredCookingTime] = useState('');
    const [cookingTimeIsValid, setCookingTimeIsValid] = useState(true);
    const isValidCookingTime = cookingTime => +cookingTime > 0;
    const validateCookingTimeHandler = () => {
        setCookingTimeIsValid(isValidCookingTime(enteredCookingTime));
    };

    const [enteredServings, setEnteredServings] = useState('');
    const [servingsIsValid, setServingsIsValid] = useState(true);
    const isValidServings = servings => +servings > 0;
    const validateServingsHandler = () => {
        setServingsIsValid(isValidServings(enteredServings));
    };

    const titleChangeHandler = e => {
        setEnteredTitle(e.target.value);

        setFormIsValid(
            isValidTitle(e.target.value) && 
            isValidSourceUrl(enteredSourceUrl) && 
            isValidImage(enteredImage) && 
            isValidPublisher(enteredPublisher) && 
            isValidCookingTime(enteredCookingTime) && 
            isValidServings(enteredServings) &&
            ingredients.every(([, ingValue]) => isValidIngredient(ingValue))
        );
    };
    const sourceUrlChangeHandler = e => {
        setEnteredSourceUrl(e.target.value);

        setFormIsValid(
            isValidTitle(enteredTitle) && 
            isValidSourceUrl(e.target.value) && 
            isValidImage(enteredImage) && 
            isValidPublisher(enteredPublisher) && 
            isValidCookingTime(enteredCookingTime) && 
            isValidServings(enteredServings) &&
            ingredients.every(([, ingValue]) => isValidIngredient(ingValue))
        );
    };
    const imageChangeHandler = e => {
        setEnteredImage(e.target.value);

        setFormIsValid(
            isValidTitle(enteredTitle) && 
            isValidSourceUrl(enteredSourceUrl) && 
            isValidImage(e.target.value) && 
            isValidPublisher(enteredPublisher) && 
            isValidCookingTime(enteredCookingTime) && 
            isValidServings(enteredServings) &&
            ingredients.every(([, ingValue]) => isValidIngredient(ingValue))
        );
    };
    const publisherChangeHandler = e => {
        setEnteredPublisher(e.target.value);
        
        setFormIsValid(
            isValidTitle(enteredTitle) && 
            isValidSourceUrl(enteredSourceUrl) && 
            isValidImage(enteredImage) && 
            isValidPublisher(e.target.value) && 
            isValidCookingTime(enteredCookingTime) && 
            isValidServings(enteredServings) &&
            ingredients.every(([, ingValue]) => isValidIngredient(ingValue))
        );
    };
    const cookingTimeChangeHandler = e => {
        setEnteredCookingTime(e.target.value);

        setFormIsValid(
            isValidTitle(enteredTitle) && 
            isValidSourceUrl(enteredSourceUrl) && 
            isValidImage(enteredImage) && 
            isValidPublisher(enteredPublisher) && 
            isValidCookingTime(e.target.value) && 
            isValidServings(enteredServings) &&
            ingredients.every(([, ingValue]) => isValidIngredient(ingValue))
        );
    };
    const servingsChangeHandler = e => {
        setEnteredServings(e.target.value);

        setFormIsValid(
            isValidTitle(enteredTitle) && 
            isValidSourceUrl(enteredSourceUrl) && 
            isValidImage(enteredImage) && 
            isValidPublisher(enteredPublisher) && 
            isValidCookingTime(enteredCookingTime) && 
            isValidServings(e.target.value) &&
            ingredients.every(([, ingValue]) => isValidIngredient(ingValue))
        );
    };

    // ingredients: key, value, isValid
    const [ingredients, setIngredients] = useState(
        Array.from({ length: 6 }, (_, i) => [`ingredient-${i + 1}`, '', true])
    );

    const isValidIngredient = ing =>
        ing.trim().length > 0 && ing.split(',').length > 2;

    const saveIngredientHandler = savedIngredient => {
        const [savedIndex, savedValue] = savedIngredient;

        setIngredients(prevIngredients => {
            const [ingredientId, , isValid] = prevIngredients[savedIndex];

            setFormIsValid(
                isValidIngredient(savedValue) &&
                prevIngredients.every(([, , isValid]) => isValid) &&
                isValidTitle(enteredTitle) && 
                isValidSourceUrl(enteredSourceUrl) && 
                isValidImage(enteredImage) && 
                isValidPublisher(enteredPublisher) && 
                isValidCookingTime(enteredCookingTime) && 
                isValidServings(enteredServings)
            );

            prevIngredients.splice(savedIndex, 1, [
                ingredientId,
                savedValue,
                isValidIngredient(savedValue) ? true : isValid,
            ]);

            return [...prevIngredients];
        });
    };

    const blurIngredientHandler = savedIngredient => {
        const [savedIndex, savedValue] = savedIngredient;

        setIngredients(prevIngredients => {
            const [ingredientId] = prevIngredients[savedIndex];

            prevIngredients.splice(savedIndex, 1, [ingredientId, savedValue, isValidIngredient(savedValue)]);

            return [...prevIngredients];
        });
    };

    const [formIsValid, setFormIsValid] = useState(false);

    const formSubmitHandler = e => {
        e.preventDefault();

        // FIXME add validation of title, sourceUrl, image, publisher, cookingTime, servings
        if (
            ingredients.some(([, value]) => value.trim().length === 0) && 
            isValidTitle(enteredTitle) && 
            isValidSourceUrl(enteredSourceUrl) && 
            isValidImage(enteredImage) && 
            isValidPublisher(enteredPublisher) && 
            isValidCookingTime(enteredCookingTime) && 
            isValidServings(enteredServings)
         )  return;

        const filledIngredients = ingredients.map(
            ([ingredientId, ingValue]) => [ingredientId, ingValue.trim()]
        );

        const enteredData = {
            title: enteredTitle.trim(),
            sourceUrl: enteredSourceUrl.trim(),
            image: enteredImage.trim(),
            publisher: enteredPublisher.trim(),
            cookingTime: +enteredCookingTime,
            servings: +enteredServings,
            ...Object.fromEntries(filledIngredients),
        };

        setEnteredTitle('');
        setEnteredSourceUrl('');
        setEnteredImage('');
        setEnteredPublisher('');
        setEnteredCookingTime('');
        setEnteredServings('');
        setIngredients(prevIngredients => prevIngredients.map(([ingredientId]) => [ingredientId, '', true]));
        setFormIsValid(false);

        console.log(enteredData);
    };

    return (
        <form onSubmit={formSubmitHandler} className={styles.upload}>
            <div className={styles.upload__column}>
                <h3 className={styles.upload__heading}>Recipe data</h3>
                <Control invalid={!titleIsValid && !formIsValid}>
                    <label>Title</label>
                    <input
                        onChange={titleChangeHandler}
                        onBlur={validateTitleHandler}
                        value={enteredTitle}
                        name="title"
                        type="text"
                    />
                </Control>

                <Control invalid={!sourceUrlIsValid && !formIsValid}>
                    <label>URL</label>
                    <input
                        onChange={sourceUrlChangeHandler}
                        onBlur={validateSourceUrlHandler}
                        value={enteredSourceUrl}
                        name="sourceUrl"
                        type="text"
                    />
                </Control>

                <Control invalid={!imageIsValid && !formIsValid}>
                    <label>Image URL</label>
                    <input
                        onChange={imageChangeHandler}
                        onBlur={validateImageHandler}
                        value={enteredImage}
                        name="image"
                        type="text"
                    />
                </Control>

                <Control invalid={!publisherIsValid && !formIsValid}>
                    <label>Publisher</label>
                    <input
                        onChange={publisherChangeHandler}
                        onBlur={validatePublisherHandler}
                        value={enteredPublisher}
                        name="publisher"
                        type="text"
                    />
                </Control>

                <Control invalid={!cookingTimeIsValid && !formIsValid}>
                    <label>Prep time</label>
                    <input
                        onChange={cookingTimeChangeHandler}
                        onBlur={validateCookingTimeHandler}
                        value={enteredCookingTime}
                        name="cookingTime"
                        type="number"
                    />
                </Control>

                <Control invalid={!servingsIsValid && !formIsValid}>
                    <label>Servings</label>
                    <input
                        onChange={servingsChangeHandler}
                        onBlur={validateServingsHandler}
                        value={enteredServings}
                        name="servings"
                        type="number"
                    />
                </Control>
            </div>

            <Ingredients
                items={ingredients}
                onSaveIngredient={saveIngredientHandler}
                onBlurIngredient={blurIngredientHandler}
            />

            <Button
                btn
                uploadBtn
                type="submit"
                disabled={!formIsValid}
                btnDisabled={!formIsValid}
            >
                <svg>
                    <use href={iconUploadCloud}></use>
                </svg>
                <span>Upload</span>
            </Button>
        </form>
    );
}

export default AddRecipeForm;
