import IngredientItem from './ingredient.component';
import styles from '../add-recipe-form/add-recipe-form.module.css';

const Ingredients = ({ ingredients, handleChange }) => {
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
