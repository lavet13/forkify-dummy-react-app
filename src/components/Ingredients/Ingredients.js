import React from 'react';
import IngredientItem from './IngredientItem';
import styles from '../AddRecipeForm/AddRecipeForm.module.css';

function Ingredients({ items, onSaveIngredient, isValidIngredients }) {
    console.log(isValidIngredients);

    return (
        <div className={styles.upload__column}>
            <h3 className={styles.upload__heading}>Ingredients</h3>
            {items.map(([ingredientId, value], i) => (
                <IngredientItem
                    key={ingredientId}
                    id={i}
                    value={value}
                    isValid={isValidIngredients[i]}
                    onSaveIngredient={onSaveIngredient}
                />
            ))}
        </div>
    );
}

export default Ingredients;
