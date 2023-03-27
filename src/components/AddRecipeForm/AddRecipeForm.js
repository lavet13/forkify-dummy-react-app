import React, { useState, useEffect, useReducer, useContext } from 'react';
import styles from './AddRecipeForm.module.css';
import icons from '../../resources/icons.svg';

import Ingredients from '../Ingredients/Ingredients';
import IngredientsActions from '../Ingredients/IngredientsActions';
import IngredientsContext from '../../context/ingredients-context';
import RecipeFormContext from '../../context/recipe-form-context';
import RecipeIngredients from '../RecipeIngredients/RecipeIngredients';
import FormIsValidContext from '../../context/form-isvalid-context';
import SubmitButton from '../UI/SubmitButton';

const AddRecipeForm = () => {
    const iconUploadCloud = `${icons}#icon-upload-cloud`;

    //////////////////////////////////////////////////////////
    const { ingredientsState, clearIngredients } =
        useContext(IngredientsContext);

    const {
        titleState,
        sourceUrlState,
        imageState,
        publisherState,
        cookingTimeState,
        servingsState,

        clearRecipeInfo,
    } = useContext(RecipeFormContext);

    const { formIsValid, setFormIsValid } = useContext(FormIsValidContext);

    const { isValid: titleIsValid } = titleState;
    const { isValid: sourceUrlIsValid } = sourceUrlState;
    const { isValid: imageIsValid } = imageState;
    const { isValid: publisherIsValid } = publisherState;
    const { isValid: cookingTimeIsValid } = cookingTimeState;
    const { isValid: servingsIsValid } = servingsState;
    const ingredientsIsValid =
        ingredientsState.value.every(([, , isValid]) => isValid) &&
        ingredientsState.value.length !== 0;

    useEffect(() => {
        console.log('EFFECT RUNNING');
        setFormIsValid(
            ingredientsIsValid &&
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
        ingredientsIsValid,
    ]);

    const formSubmitHandler = e => {
        e.preventDefault();

        if (
            !(
                ingredientsIsValid &&
                titleIsValid &&
                sourceUrlIsValid &&
                imageIsValid &&
                publisherIsValid &&
                cookingTimeIsValid &&
                servingsIsValid
            )
        )
            return;

        const filledIngredients = ingredientsState.value.map(
            ([, ingValue], i) => [
                `ingredient-${i + 1}`,
                ingValue.split(',').map(ing => ing.trim()),
            ]
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

        clearRecipeInfo();
        clearIngredients();

        console.log(enteredData);
    };

    return (
        <form onSubmit={formSubmitHandler} className={styles.upload}>
            <RecipeIngredients />

            <Ingredients />

            <IngredientsActions />

            <SubmitButton iconUploadCloud={iconUploadCloud}></SubmitButton>
        </form>
    );
};

export default AddRecipeForm;
