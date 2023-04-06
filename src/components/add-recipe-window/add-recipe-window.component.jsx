import React from 'react';
import ReactDOM from 'react-dom';
import styles from './add-recipe-window.module.css';
import AddRecipeForm from '../add-recipe-form/add-recipe-form.component';
import Backdrop from '../UI/backdrop/backdrop.component';
import Button from '../UI/button/button.component';
import Card from '../UI/card/card.component';

const AddRecipeWindow = ({ onCancel }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onStopEditing={onCancel} />,
        document.querySelector('#backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Card className={styles['add-recipe-window']}>
          <Button btnCloseModal onClick={onCancel}>
            &times;
          </Button>
          <AddRecipeForm />
        </Card>,
        document.querySelector('#overlay-root')
      )}
    </>
  );
};

export default AddRecipeWindow;
