import React from 'react';
import styles from './ingredients-actions.module.css';
import Button from '../UI/button/button.component';

function IngredientsActions({ onAddingIngredient }) {
  return (
    <div className={styles.actions}>
      <Button btn btnUpload onClick={onAddingIngredient}>
        Add ingredient
      </Button>
    </div>
  );
}

export default IngredientsActions;
