import React from 'react';
import Image from './Image';
import CookingTime from './CookingTime';
import Publisher from './Publisher';
import SourceUrl from './SourceUrl';
import Title from './Title';
import styles from '../AddRecipeForm/AddRecipeForm.module.css';
import Servings from './Servings';

const RecipeIngredients = () => {
    return (
        <div className={styles.upload__column}>
            <h3 className={styles.upload__heading}>Recipe data</h3>

            <Title />
            <SourceUrl />
            <Image />
            <Publisher />
            <CookingTime />
            <Servings />
        </div>
    );
};

export default RecipeIngredients;
