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

const deleteIngredient = (ingredients, ingredientToDelete) =>
  ingredients.filter(ingredient => ingredient.id !== ingredientToDelete.id);

const isValidIngredient = ingredients => {
  const ingArray = ingredients.split(',');

  return ingArray.length > 2 && ingArray.every(ing => ing.trim().length !== 0);
};

const Ingredients = ({
  ingredients,
  setIngredientToRecipe,
  deleteIngredientFromRecipe,
}) => {
  const handleChange = event => {
    const { name, value } = event.target;

    setIngredientToRecipe(setIngredient(ingredients, { id: name, value }));
  };

  const handleDelete = ingredientToDelete => {
    deleteIngredientFromRecipe(
      deleteIngredient(ingredients, ingredientToDelete)
    );
  };

  return (
    <div className={styles.upload__column}>
      <h3 className={styles.upload__heading}>Ingredients</h3>
      {ingredients.length ? (
        ingredients.map((ingredient, index) => (
          <IngredientItem
            key={ingredient.id}
            index={index}
            ingredient={ingredient}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p className={styles.paragraph}>No ingredients. Add new one!</p>
      )}
    </div>
  );
};

export default Ingredients;
