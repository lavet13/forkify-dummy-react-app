import React, { useContext } from 'react';
import IngredientItem from './IngredientItem';
import styles from '../AddRecipeForm/AddRecipeForm.module.css';
import IngredientsContext from '../../context/ingredients-context';

const Ingredients = () => {
    const {
        ingredientsState: { value: ingredients },
    } = useContext(IngredientsContext);

    return (
        <div className={styles.upload__column}>
            <h3 className={styles.upload__heading}>Ingredients</h3>
            {ingredients.length !== 0 ? (
                ingredients.map(([, value, isValid], i) => (
                    <IngredientItem
                        key={i}
                        id={i}
                        value={value}
                        isValid={isValid}
                    />
                ))
            ) : (
                <p className={styles.paragraph}>No ingredients. Add new one!</p>
            )}
        </div>
    );
};

export default Ingredients;
