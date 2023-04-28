import IngredientItem from './ingredient.component';
import styles from '../add-recipe-form/add-recipe-form.module.css';

const setIngredient = (ingredients, ingredientToChange) => {
  return ingredients.map(ingredient => {
    if (ingredient.id === ingredientToChange.id) {
      return {
        ...ingredient,
        value: ingredientToChange.value,
        isValid: isValidIngredient(ingredientToChange.value),
      };
    }

    return ingredient;
  });
};

const isValidIngredient = ingredients => {
  const ingArray = ingredients.split(',');

  return ingArray.length > 2 && ingArray.every(ing => ing.trim().length !== 0);
};

const Ingredients = ({ ingredients, setIngredients }) => {
  const handleChange = event => {
    const { name, value } = event.target;

    setIngredients(setIngredient(ingredients, { id: name, value }));
  };

  return (
    <div className={styles.upload__column}>
      <h3 className={styles.upload__heading}>Ingredients</h3>
      {ingredients.length ? (
        ingredients.map(({ id, value, isValid }, index) => (
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
        ))
      ) : (
        <p className={styles.paragraph}>No ingredients. Add new one!</p>
      )}
    </div>
  );
};

export default Ingredients;
