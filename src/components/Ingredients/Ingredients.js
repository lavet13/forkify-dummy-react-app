import React from 'react';
import IngredientItem from './IngredientItem';
import styles from '../AddRecipeForm/AddRecipeForm.module.css';

const Ingredients = ({
    ingredients,
    onSaveIngredient,
    onBlurIngredient,
    onDeleteIngredient,
}) => {
    return (
        <div className={styles.upload__column}>
            <h3 className={styles.upload__heading}>Ingredients</h3>
            {ingredients.value.map(([ingredientId, value, isValid], i) => (
                <IngredientItem
                    key={ingredientId}
                    id={ingredientId}
                    index={i}
                    value={value}
                    isValid={isValid}
                    onSaveIngredient={onSaveIngredient}
                    onBlurIngredient={onBlurIngredient}
                    onDeleteIngredient={onDeleteIngredient}
                />
            ))}
        </div>
    );
};

export default Ingredients;
