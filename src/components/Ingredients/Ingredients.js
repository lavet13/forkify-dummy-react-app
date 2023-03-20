import React from 'react';
import IngredientItem from './IngredientItem';
import styles from '../AddRecipeForm/AddRecipeForm.module.css';

function Ingredients({ items, onSaveIngredient, onBlurIngredient }) {
    return (
        <div className={styles.upload__column}>
            <h3 className={styles.upload__heading}>Ingredients</h3>
            {items.map(([ingredientId, value, isValid], i) => (
                <IngredientItem
                    key={ingredientId}
                    id={i}
                    value={value}
                    isValid={isValid}
                    onSaveIngredient={onSaveIngredient}
                    onBlurIngredient={onBlurIngredient}
                />
            ))}
        </div>
    );
}

export default Ingredients;
