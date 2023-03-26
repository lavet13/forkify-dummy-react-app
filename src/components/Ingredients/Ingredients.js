import React from 'react';
import IngredientItem from './IngredientItem';
import styles from '../AddRecipeForm/AddRecipeForm.module.css';

const Ingredients = ({ ingredients }) => {
    return (
        <div className={styles.upload__column}>
            <h3 className={styles.upload__heading}>Ingredients</h3>
            {ingredients.map(([, value, isValid], i) => (
                <IngredientItem
                    key={i}
                    id={i}
                    value={value}
                    isValid={isValid}
                />
            ))}
        </div>
    );
};

export default Ingredients;
