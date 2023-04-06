import React from 'react';
import IngredientItem from './ingredient.component';
import styles from '../add-recipe-form/add-recipe-form.module.css';

const Ingredients = ({
  ingredients,
  onDeleteIngredient,
  onSaveIngredient,
  onBlurIngredient,
}) => {
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
            onDeleteIngredient={onDeleteIngredient}
            onSaveIngredient={onSaveIngredient}
            onBlurIngredient={onBlurIngredient}
          />
        ))
      ) : (
        <p className={styles.paragraph}>No ingredients. Add new one!</p>
      )}
    </div>
  );
};

export default Ingredients;
