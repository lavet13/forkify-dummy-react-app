import { useState } from 'react';
import styles from './add-recipe-form.module.css';
import icons from '../../resources/icons.svg';

import Button from '../UI/button/button.component';
import Ingredients from '../ingredients/ingredients.component';
import FormInput from '../UI/form-input/form-input.component';
import IngredientsActions from '../ingredients/ingredients-actions.component';

const iconUploadCloud = `${icons}#icon-upload-cloud`;

const defaultFormFields = {
  title: '',
  sourceUrl: '',
  image: '',
  publisher: '',
  cookingTime: '',
  servings: '',
};

const AddRecipeForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, sourceUrl, image, publisher, cookingTime, servings } =
    formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = event => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log({ ...formFields });
    resetFormFields();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.upload}>
      <div className={styles.upload__column}>
        <h3 className={styles.upload__heading}>Recipe data</h3>
        <FormInput
          label='Title'
          id='title'
          onChange={handleChange}
          name='title'
          value={title}
          type='text'
        />

        <FormInput
          label='URL'
          id='sourceUrl'
          onChange={handleChange}
          name='sourceUrl'
          value={sourceUrl}
          type='text'
        />

        <FormInput
          label='Image URL'
          id='image'
          onChange={handleChange}
          name='image'
          value={image}
          type='text'
        />

        <FormInput
          label='Publisher'
          id='publisher'
          onChange={handleChange}
          name='publisher'
          value={publisher}
          type='text'
        />

        <FormInput
          label='Prep time'
          id='cookingTime'
          onChange={handleChange}
          name='cookingTime'
          value={cookingTime}
          type='number'
          min='30'
        />

        <FormInput
          label='Servings'
          id='servings'
          onChange={handleChange}
          name='servings'
          value={servings}
          type='number'
          min='1'
        />
      </div>

      <Ingredients />

      {/* <IngredientsActions onAddingIngredient={addIngredientHandler} /> */}

      <Button btn uploadBtn type='submit'>
        <svg>
          <use href={iconUploadCloud}></use>
        </svg>
        <span>Upload</span>
      </Button>
    </form>
  );
};

// const AddRecipeForm = () => {
//   const iconUploadCloud = `${icons}#icon-upload-cloud`;

//   //////////////////////////////////////////////////////////
//   const initialState = { value: '', isValid: null };
//   const reducerHelper = (state, action, validationHandler) => {
//     switch (action.type) {
//       case 'USER_INPUT':
//         return {
//           value: action.payload,
//           isValid: validationHandler(action.payload),
//         };

//       case 'INPUT_BLUR':
//         return {
//           value: state.value,
//           isValid: validationHandler(state.value),
//         };

//       case 'CLEAR_INPUT':
//         return initialState;

//       default:
//         return state;
//     }
//   };

//   const isValidTitle = title => title.length >= 5;
//   const titleReducer = (state, action) =>
//     reducerHelper(state, action, isValidTitle);

//   const [titleState, dispatchTitle] = useReducer(titleReducer, initialState);
//   const titleChangeHandler = e => {
//     dispatchTitle({ type: 'USER_INPUT', payload: e.target.value });
//   };
//   const validateTitleHandler = () => {
//     dispatchTitle({ type: 'INPUT_BLUR' });
//   };

//   const isValidSourceUrl = sourceUrl => sourceUrl.length >= 5;
//   const sourceUrlReducer = (state, action) =>
//     reducerHelper(state, action, isValidSourceUrl);

//   const [sourceUrlState, dispatchSourceUrl] = useReducer(
//     sourceUrlReducer,
//     initialState
//   );

//   const sourceUrlChangeHandler = e => {
//     dispatchSourceUrl({ type: 'USER_INPUT', payload: e.target.value });
//   };
//   const validateSourceUrlHandler = () => {
//     dispatchSourceUrl({ type: 'INPUT_BLUR' });
//   };

//   const isValidImage = image => image.length >= 5;
//   const imageReducer = (state, action) =>
//     reducerHelper(state, action, isValidImage);
//   const [imageState, dispatchImage] = useReducer(imageReducer, initialState);
//   const imageChangeHandler = e => {
//     dispatchImage({ type: 'USER_INPUT', payload: e.target.value });
//   };
//   const validateImageHandler = () => {
//     dispatchImage({ type: 'INPUT_BLUR' });
//   };

//   const isValidPublisher = publisher => publisher.length >= 5;
//   const publisherReducer = (state, action) =>
//     reducerHelper(state, action, isValidPublisher);
//   const [publisherState, dispatchPublisher] = useReducer(
//     publisherReducer,
//     initialState
//   );
//   const publisherChangeHandler = e => {
//     dispatchPublisher({ type: 'USER_INPUT', payload: e.target.value });
//   };
//   const validatePublisherHandler = () => {
//     dispatchPublisher({ type: 'INPUT_BLUR' });
//   };

//   const isValidCookingTime = cookingTime => +cookingTime > 30;
//   const cookingTimeReducer = (state, action) =>
//     reducerHelper(state, action, isValidCookingTime);
//   const [cookingTimeState, dispatchCookingTime] = useReducer(
//     cookingTimeReducer,
//     initialState
//   );
//   const cookingTimeChangeHandler = e => {
//     dispatchCookingTime({ type: 'USER_INPUT', payload: e.target.value });
//   };
//   const validateCookingTimeHandler = () => {
//     dispatchCookingTime({ type: 'INPUT_BLUR' });
//   };

//   const isValidServings = servings => +servings > 0;
//   const servingsReducer = (state, action) =>
//     reducerHelper(state, action, isValidServings);
//   const [servingsState, dispatchServings] = useReducer(
//     servingsReducer,
//     initialState
//   );
//   const servingsChangeHandler = e => {
//     dispatchServings({ type: 'USER_INPUT', payload: e.target.value });
//   };
//   const validateServingsHandler = () => {
//     dispatchServings({ type: 'INPUT_BLUR' });
//   };

//   // ingredients: key, value, isValid
//   const initialIngredientsCount = 6;
//   const initialIngredientsState = {
//     value: Array.from({ length: initialIngredientsCount }, (_, i) => [
//       `ingredient-${i + 1}`,
//       '',
//       null,
//     ]),
//   };
//   const isValidIngredient = ingredients => {
//     const ingArray = ingredients.split(',');

//     return (
//       ingArray.length > 2 && ingArray.every(ing => ing.trim().length !== 0)
//     );
//   };

//   const ingredientsReducer = (state, action) => {
//     switch (action.type) {
//       case 'USER_INPUT': {
//         const [savedIndex, savedValue] = action.payload;

//         const [ingredientId] = state.value[savedIndex];
//         state.value.splice(savedIndex, 1, [
//           ingredientId,
//           savedValue,
//           isValidIngredient(savedValue),
//         ]);

//         return { value: [...state.value] };
//       }

//       case 'INPUT_BLUR': {
//         const savedIndex = action.payload;

//         const [ingredientId, ingValue] = state.value[savedIndex];
//         state.value.splice(savedIndex, 1, [
//           ingredientId,
//           ingValue,
//           isValidIngredient(ingValue),
//         ]);

//         return { value: [...state.value] };
//       }

//       case 'CLEAR_INPUT': {
//         return initialIngredientsState;
//       }

//       case 'ADD_INGREDIENT': {
//         return {
//           value: [
//             ...state.value,
//             [`ingredient-${state.value.length + 1}`, '', null],
//           ],
//         };
//       }

//       case 'REMOVE_INGREDIENT': {
//         const deleteId = action.payload;

//         return {
//           value: state.value.filter((_, index) => index !== deleteId),
//         };
//       }

//       default:
//         return state;
//     }
//   };

//   const addIngredientHandler = () => {
//     dispatchIngredients({ type: 'ADD_INGREDIENT' });
//   };

//   const deleteIngredientHandler = deleteId => {
//     dispatchIngredients({ type: 'REMOVE_INGREDIENT', payload: deleteId });
//   };

//   const [ingredientsState, dispatchIngredients] = useReducer(
//     ingredientsReducer,
//     initialIngredientsState
//   );

//   const saveIngredientHandler = savedIngredient => {
//     dispatchIngredients({ type: 'USER_INPUT', payload: savedIngredient });
//   };

//   const blurIngredientHandler = savedId => {
//     dispatchIngredients({ type: 'INPUT_BLUR', payload: savedId });
//   };

//   const [formIsValid, setFormIsValid] = useState(false);

//   const { isValid: titleIsValid } = titleState;
//   const { isValid: sourceUrlIsValid } = sourceUrlState;
//   const { isValid: imageIsValid } = imageState;
//   const { isValid: publisherIsValid } = publisherState;
//   const { isValid: cookingTimeIsValid } = cookingTimeState;
//   const { isValid: servingsIsValid } = servingsState;
//   const ingredientsIsValid =
//     ingredientsState.value.every(([, , isValid]) => isValid) &&
//     ingredientsState.value.length !== 0;

//   useEffect(() => {
//     console.log('EFFECT RUNNING');
//     setFormIsValid(
//       ingredientsIsValid &&
//         titleIsValid &&
//         sourceUrlIsValid &&
//         imageIsValid &&
//         publisherIsValid &&
//         cookingTimeIsValid &&
//         servingsIsValid
//     );
//   }, [
//     titleIsValid,
//     sourceUrlIsValid,
//     imageIsValid,
//     publisherIsValid,
//     cookingTimeIsValid,
//     servingsIsValid,
//     ingredientsIsValid,
//   ]);

//   const formSubmitHandler = e => {
//     e.preventDefault();

//     if (
//       !(
//         ingredientsIsValid &&
//         titleIsValid &&
//         sourceUrlIsValid &&
//         imageIsValid &&
//         publisherIsValid &&
//         cookingTimeIsValid &&
//         servingsIsValid
//       )
//     )
//       return;

//     const filledIngredients = ingredientsState.value.map(([, ingValue], i) => [
//       `ingredient-${i + 1}`,
//       ingValue.split(',').map(ing => ing.trim()),
//     ]);

//     const enteredData = {
//       title: titleState.value.trim(),
//       sourceUrl: sourceUrlState.value.trim(),
//       image: imageState.value.trim(),
//       publisher: publisherState.value.trim(),
//       cookingTime: +cookingTimeState.value,
//       servings: +servingsState.value,
//       ...Object.fromEntries(filledIngredients),
//     };

//     dispatchTitle({ type: 'CLEAR_INPUT' });
//     dispatchSourceUrl({ type: 'CLEAR_INPUT' });
//     dispatchImage({ type: 'CLEAR_INPUT' });
//     dispatchPublisher({ type: 'CLEAR_INPUT' });
//     dispatchCookingTime({ type: 'CLEAR_INPUT' });
//     dispatchServings({ type: 'CLEAR_INPUT' });
//     dispatchIngredients({ type: 'CLEAR_INPUT' });

//     console.log(enteredData);
//   };

//   return (
//     <form onSubmit={formSubmitHandler} className={styles.upload}>
//       <div className={styles.upload__column}>
//         <h3 className={styles.upload__heading}>Recipe data</h3>
//         <Control invalid={titleIsValid === false && !formIsValid}>
//           <label htmlFor='title'>Title</label>
//           <input
//             onChange={titleChangeHandler}
//             onBlur={validateTitleHandler}
//             value={titleState.value}
//             id='title'
//             type='text'
//           />
//         </Control>

//         <Control invalid={sourceUrlIsValid === false && !formIsValid}>
//           <label htmlFor='sourceUrl'>URL</label>
//           <input
//             onChange={sourceUrlChangeHandler}
//             onBlur={validateSourceUrlHandler}
//             value={sourceUrlState.value}
//             id='sourceUrl'
//             type='text'
//           />
//         </Control>

//         <Control invalid={imageIsValid === false && !formIsValid}>
//           <label htmlFor='image'>Image URL</label>
//           <input
//             onChange={imageChangeHandler}
//             onBlur={validateImageHandler}
//             value={imageState.value}
//             id='image'
//             type='text'
//           />
//         </Control>

//         <Control invalid={publisherIsValid === false && !formIsValid}>
//           <label htmlFor='publisher'>Publisher</label>
//           <input
//             onChange={publisherChangeHandler}
//             onBlur={validatePublisherHandler}
//             value={publisherState.value}
//             id='publisher'
//             type='text'
//           />
//         </Control>

//         <Control invalid={cookingTimeIsValid === false && !formIsValid}>
//           <label htmlFor='cookingTime'>Prep time</label>
//           <input
//             onChange={cookingTimeChangeHandler}
//             onBlur={validateCookingTimeHandler}
//             value={cookingTimeState.value}
//             id='cookingTime'
//             type='number'
//           />
//         </Control>

//         <Control invalid={servingsIsValid === false && !formIsValid}>
//           <label htmlFor='servings'>Servings</label>
//           <input
//             onChange={servingsChangeHandler}
//             onBlur={validateServingsHandler}
//             value={servingsState.value}
//             id='servings'
//             type='number'
//           />
//         </Control>
//       </div>

//       <Ingredients
//         ingredients={ingredientsState.value}
//         onDeleteIngredient={deleteIngredientHandler}
//         onSaveIngredient={saveIngredientHandler}
//         onBlurIngredient={blurIngredientHandler}
//       />

//       <IngredientsActions onAddingIngredient={addIngredientHandler} />

//       {formIsValid && (
//         <Button btn uploadBtn type='submit'>
//           <svg>
//             <use href={iconUploadCloud}></use>
//           </svg>
//           <span>Upload</span>
//         </Button>
//       )}
//       {!formIsValid && (
//         <Button
//           btn
//           uploadBtn
//           type='submit'
//           disabled={!formIsValid}
//           btnDisabled={!formIsValid}
//         >
//           <svg>
//             <use href={iconUploadCloud}></use>
//           </svg>
//           <span>Upload</span>
//         </Button>
//       )}
//     </form>
//   );
// };

export default AddRecipeForm;
