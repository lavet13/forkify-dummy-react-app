import React, { useState, useEffect, useReducer } from 'react';
import styles from './AddRecipeForm.module.css';
import icons from '../../resources/icons.svg';

import Button from '../UI/Button';
import Ingredients from '../Ingredients/Ingredients';
import Control from '../UI/Control';

function AddRecipeForm() {
    const iconUploadCloud = `${icons}#icon-upload-cloud`;

    //////////////////////////////////////////////////////////
    const initialState = { value: '', isValid: null };
    const reducerHelper = (state, action, validationHandler) => {
        switch (action.type) {
            case 'USER_INPUT':
                return {
                    value: action.payload,
                    isValid: validationHandler(action.payload),
                };

            case 'INPUT_BLUR':
                return {
                    value: state.value,
                    isValid: validationHandler(state.value),
                };
            default:
                return state;
        }
    };

    const isValidTitle = title => title.length >= 5;
    const titleReducer = (state, action) =>
        reducerHelper(state, action, isValidTitle);

    const [titleState, dispatchTitle] = useReducer(titleReducer, initialState);
    const titleChangeHandler = e => {
        dispatchTitle({ type: 'USER_INPUT', payload: e.target.value });
    };
    const validateTitleHandler = () => {
        dispatchTitle({ type: 'INPUT_BLUR' });
    };

    const isValidSourceUrl = sourceUrl => sourceUrl.length >= 5;
    const sourceUrlReducer = (state, action) =>
        reducerHelper(state, action, isValidSourceUrl);

    const [sourceUrlState, dispatchSourceUrl] = useReducer(
        sourceUrlReducer,
        initialState
    );

    const sourceUrlChangeHandler = e => {
        dispatchSourceUrl({ type: 'USER_INPUT', payload: e.target.value });
    };
    const validateSourceUrlHandler = () => {
        dispatchSourceUrl({ type: 'INPUT_BLUR' });
    };

    const isValidImage = image => image.length >= 5;
    const imageReducer = (state, action) =>
        reducerHelper(state, action, isValidImage);
    const [imageState, dispatchImage] = useReducer(imageReducer, initialState);
    const imageChangeHandler = e => {
        dispatchImage({ type: 'USER_INPUT', payload: e.target.value });
    };
    const validateImageHandler = () => {
        dispatchImage({ type: 'INPUT_BLUR' });
    };

    const isValidPublisher = publisher => publisher.length >= 5;
    const publisherReducer = (state, action) =>
        reducerHelper(state, action, isValidPublisher);
    const [publisherState, dispatchPublisher] = useReducer(
        publisherReducer,
        initialState
    );
    const publisherChangeHandler = e => {
        dispatchPublisher({ type: 'USER_INPUT', payload: e.target.value });
    };
    const validatePublisherHandler = () => {
        dispatchPublisher({ type: 'INPUT_BLUR' });
    };

    const isValidCookingTime = cookingTime => +cookingTime > 0;
    const cookingTimeReducer = (state, action) =>
        reducerHelper(state, action, isValidCookingTime);
    const [cookingTimeState, dispatchCookingTime] = useReducer(
        cookingTimeReducer,
        initialState
    );
    const cookingTimeChangeHandler = e => {
        dispatchCookingTime({ type: 'USER_INPUT', payload: e.target.value });
    };
    const validateCookingTimeHandler = () => {
        dispatchCookingTime({ type: 'INPUT_BLUR' });
    };

    const isValidServings = servings => servings.length >= 5;
    const servingsReducer = (state, action) =>
        reducerHelper(state, action, isValidServings);
    const [servingsState, dispatchServings] = useReducer(
        servingsReducer,
        initialState
    );
    const servingsChangeHandler = e => {
        dispatchServings({ type: 'USER_INPUT', payload: e.target.value });
    };
    const validateServingsHandler = () => {
        dispatchServings({ type: 'INPUT_BLUR' });
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
            const [ingredientId] = prevIngredients[savedIndex];

            prevIngredients.splice(savedIndex, 1, [
                ingredientId,
                savedValue,
                isValidIngredient(savedValue) ? true : false,
            ]);

            return [...prevIngredients];
        });
    };

    const blurIngredientHandler = savedIngredient => {
        const [savedIndex, savedValue] = savedIngredient;

        setIngredients(prevIngredients => {
            const [ingredientId] = prevIngredients[savedIndex];

            prevIngredients.splice(savedIndex, 1, [
                ingredientId,
                savedValue,
                isValidIngredient(savedValue) ? true : false,
            ]);

            return [...prevIngredients];
        });
    };

    const [formIsValid, setFormIsValid] = useState(false);

    const { isValid: titleIsValid } = titleState;
    const { isValid: sourceUrlIsValid } = sourceUrlState;
    const { isValid: imageIsValid } = imageState;
    const { isValid: publisherIsValid } = publisherState;
    const { isValid: cookingTimeIsValid } = cookingTimeState;
    const { isValid: servingsIsValid } = servingsState;

    useEffect(() => {
        console.log('EFFECT RUNNING');
        setFormIsValid(
            ingredients.every(([, ingValue]) => isValidIngredient(ingValue)) &&
                titleIsValid &&
                sourceUrlIsValid &&
                imageIsValid &&
                publisherIsValid &&
                cookingTimeIsValid &&
                servingsIsValid
        );
    }, [
        titleIsValid,
        sourceUrlIsValid,
        imageIsValid,
        publisherIsValid,
        cookingTimeIsValid,
        servingsIsValid,
        ingredients,
    ]);

    const formSubmitHandler = e => {
        e.preventDefault();

        if (
            !(
                ingredients.every(([, ingValue]) =>
                    isValidIngredient(ingValue)
                ) &&
                titleState.isValid &&
                sourceUrlState.isValid &&
                imageState.isValid &&
                publisherState.isValid &&
                cookingTimeState.isValid &&
                servingsState.isValid
            )
        )
            return;

        const filledIngredients = ingredients.map(
            ([ingredientId, ingValue]) => [ingredientId, ingValue.trim()]
        );

        const enteredData = {
            title: titleState.value.trim(),
            sourceUrl: sourceUrlState.value.trim(),
            image: imageState.value.trim(),
            publisher: publisherState.value.trim(),
            cookingTime: +cookingTimeState.value,
            servings: +servingsState.value,
            ...Object.fromEntries(filledIngredients),
        };

        dispatchTitle(initialState);
        dispatchSourceUrl(initialState);
        dispatchImage(initialState);
        dispatchPublisher(initialState);
        dispatchCookingTime(initialState);
        dispatchServings(initialState);
        setIngredients(prevIngredients =>
            prevIngredients.map(([ingredientId]) => [ingredientId, '', true])
        );
        setFormIsValid(false);

        console.log(enteredData);
    };

    return (
        <form onSubmit={formSubmitHandler} className={styles.upload}>
            <div className={styles.upload__column}>
                <h3 className={styles.upload__heading}>Recipe data</h3>
                <Control invalid={titleState.isValid === false && !formIsValid}>
                    <label>Title</label>
                    <input
                        onChange={titleChangeHandler}
                        onBlur={validateTitleHandler}
                        value={titleState.value}
                        name="title"
                        type="text"
                    />
                </Control>

                <Control
                    invalid={sourceUrlState.isValid === false && !formIsValid}
                >
                    <label>URL</label>
                    <input
                        onChange={sourceUrlChangeHandler}
                        onBlur={validateSourceUrlHandler}
                        value={sourceUrlState.value}
                        name="sourceUrl"
                        type="text"
                    />
                </Control>

                <Control invalid={imageState.isValid === false && !formIsValid}>
                    <label>Image URL</label>
                    <input
                        onChange={imageChangeHandler}
                        onBlur={validateImageHandler}
                        value={imageState.value}
                        name="image"
                        type="text"
                    />
                </Control>

                <Control
                    invalid={publisherState.isValid === false && !formIsValid}
                >
                    <label>Publisher</label>
                    <input
                        onChange={publisherChangeHandler}
                        onBlur={validatePublisherHandler}
                        value={publisherState.value}
                        name="publisher"
                        type="text"
                    />
                </Control>

                <Control
                    invalid={cookingTimeState.isValid === false && !formIsValid}
                >
                    <label>Prep time</label>
                    <input
                        onChange={cookingTimeChangeHandler}
                        onBlur={validateCookingTimeHandler}
                        value={cookingTimeState.value}
                        name="cookingTime"
                        type="number"
                    />
                </Control>

                <Control invalid={servingsState.isValid && !formIsValid}>
                    <label>Servings</label>
                    <input
                        onChange={servingsChangeHandler}
                        onBlur={validateServingsHandler}
                        value={servingsState.value}
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

            {formIsValid && (
                <Button btn uploadBtn type="submit">
                    <svg>
                        <use href={iconUploadCloud}></use>
                    </svg>
                    <span>Upload</span>
                </Button>
            )}
            {!formIsValid && (
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
            )}
        </form>
    );
}

export default AddRecipeForm;
