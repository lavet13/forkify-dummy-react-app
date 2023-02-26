import React, { useState } from 'react';
import './AddRecipeForm.scss';
import icons from '../../resources/icons.svg';

function AddRecipeForm() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredSourceUrl, setEnteredSourceUrl] = useState('');
    const [enteredImage, setEnteredImage] = useState('');
    const [enteredPublisher, setEnteredPublisher] = useState('');
    const [enteredCookingTime, setEnteredCookingTime] = useState('');
    const [enteredServings, setEnteredServings] = useState('');

    const [enteredIngredientOne, setEnteredIngredientOne] = useState('');

    const iconUploadCloud = `${icons}#icon-upload-cloud`;

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
    const ingredientOneChangeHandler = e => {
        setEnteredIngredientOne(e.target.value);
    };

    return (
        <form className="upload">
            <div className="upload__column">
                <h3 className="upload__heading">Recipe data</h3>
                <label>Title</label>
                <input
                    onChange={titleChangeHandler}
                    value={enteredTitle}
                    required
                    name="title"
                    type="text"
                />
                <label>URL</label>
                <input
                    onChange={sourceUrlChangeHandler}
                    value={enteredSourceUrl}
                    required
                    name="sourceUrl"
                    type="text"
                />
                <label>Image URL</label>
                <input
                    onChange={imageChangeHandler}
                    value={enteredImage}
                    required
                    name="image"
                    type="text"
                />
                <label>Publisher</label>
                <input
                    onChange={publisherChangeHandler}
                    value={enteredPublisher}
                    required
                    name="publisher"
                    type="text"
                />
                <label>Prep time</label>
                <input
                    onChange={cookingTimeChangeHandler}
                    value={enteredCookingTime}
                    required
                    name="cookingTime"
                    type="number"
                />
                <label>Servings</label>
                <input
                    onChange={servingsChangeHandler}
                    value={enteredServings}
                    required
                    name="servings"
                    type="number"
                />
            </div>

            <div className="upload__column">
                <h3 className="upload__heading">Ingredients</h3>
                <label>Ingredient 1</label>
                <input
                    onChange={ingredientOneChangeHandler}
                    value={enteredIngredientOne}
                    type="text"
                    required
                    name="ingredient-1"
                    placeholder="Format: 'Quantity,Unit,Description'"
                />
            </div>

            <button className="btn upload__btn">
                <svg>
                    <use href={iconUploadCloud}></use>
                </svg>
                <span>Upload</span>
            </button>
        </form>
    );
}

export default AddRecipeForm;
