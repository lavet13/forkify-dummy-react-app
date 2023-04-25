import { useState } from 'react';
import IngredientItem from './ingredient.component';
import styles from '../add-recipe-form/add-recipe-form.module.css';

const initialIngredientsCount = 6;
const initialIngredientsState = new Map(
  Array.from({ length: initialIngredientsCount }, (_, i) => [
    `ingredient-${i + 1}`,
    ['', null],
  ])
);
const Ingredients = () => {
  const [ingredients, setIngredients] = useState(initialIngredientsState);

  const isValidIngredient = ingredients => {
    const ingArray = ingredients.split(',');

    return (
      ingArray.length > 2 && ingArray.every(ing => ing.trim().length !== 0)
    );
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setIngredients(
      new Map([...ingredients.set(name, [value, isValidIngredient(value)])])
    );
  };

  return (
    <div className={styles.upload__column}>
      <h3 className={styles.upload__heading}>Ingredients</h3>
      {ingredients.size ? (
        [...ingredients.keys()].map((id, index) => {
          const [value, isValid] = ingredients.get(id);
          return (
            <IngredientItem
              key={id}
              id={id}
              name={id}
              title={id}
              index={index}
              value={value}
              isValid={isValid}
              type='text'
              placeholder="Format: 'Quantity,Unit,Description'"
              onChange={handleChange}
            />
          );
        })
      ) : (
        <p className={styles.paragraph}>No ingredients. Add new one!</p>
      )}
    </div>
  );
};

export default Ingredients;
