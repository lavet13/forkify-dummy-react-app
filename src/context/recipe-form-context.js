import React, { useReducer } from 'react';

const RecipeFormContext = React.createContext({
    titleState: null,
    sourceUrlState: null,
    imageState: null,
    publisherState: null,
    cookingTimeState: null,
    servingsState: null,

    onTitleChange: () => {},
    onSourceUrlChange: () => {},
    onImageChange: () => {},
    onPublisherChange: () => {},
    onCookingTimeChange: () => {},
    onServingsChange: () => {},

    onTitleBlur: () => {},
    onSourceUrlBlur: () => {},
    onImageBlur: () => {},
    onPublisherBlur: () => {},
    onCookingTimeBlur: () => {},
    onServingsBlur: () => {},

    clearRecipeInfo: () => {},
});

export const RecipeFormContextProvider = ({ children }) => {
    const initialState = { value: '', isValid: null };
    const reducerHelper = (state, action, validationHandler) => {
        switch (action.type) {
            case 'USER_INPUT':
                return {
                    value: action.payload,
                    isValid: validationHandler(action.payload),
                };

            case 'INPUT_BLUR':
                return {
                    value: state.value,
                    isValid: validationHandler(state.value),
                };

            case 'CLEAR_INPUT':
                return initialState;

            default:
                return state;
        }
    };

    const isValidTitle = title => title.length >= 5;
    const titleReducer = (state, action) =>
        reducerHelper(state, action, isValidTitle);

    const [titleState, dispatchTitle] = useReducer(titleReducer, initialState);

    const isValidSourceUrl = sourceUrl => sourceUrl.length >= 5;
    const sourceUrlReducer = (state, action) =>
        reducerHelper(state, action, isValidSourceUrl);

    const [sourceUrlState, dispatchSourceUrl] = useReducer(
        sourceUrlReducer,
        initialState
    );

    const isValidImage = image => image.length >= 5;
    const imageReducer = (state, action) =>
        reducerHelper(state, action, isValidImage);
    const [imageState, dispatchImage] = useReducer(imageReducer, initialState);

    const isValidPublisher = publisher => publisher.length >= 5;
    const publisherReducer = (state, action) =>
        reducerHelper(state, action, isValidPublisher);
    const [publisherState, dispatchPublisher] = useReducer(
        publisherReducer,
        initialState
    );

    const isValidCookingTime = cookingTime => +cookingTime > 30;
    const cookingTimeReducer = (state, action) =>
        reducerHelper(state, action, isValidCookingTime);
    const [cookingTimeState, dispatchCookingTime] = useReducer(
        cookingTimeReducer,
        initialState
    );

    const isValidServings = servings => +servings > 0;
    const servingsReducer = (state, action) =>
        reducerHelper(state, action, isValidServings);
    const [servingsState, dispatchServings] = useReducer(
        servingsReducer,
        initialState
    );

    const titleChangeHandler = e => {
        dispatchTitle({ type: 'USER_INPUT', payload: e.target.value });
    };
    const validateTitleHandler = () => {
        dispatchTitle({ type: 'INPUT_BLUR' });
    };

    const sourceUrlChangeHandler = e => {
        dispatchSourceUrl({ type: 'USER_INPUT', payload: e.target.value });
    };
    const validateSourceUrlHandler = () => {
        dispatchSourceUrl({ type: 'INPUT_BLUR' });
    };

    const imageChangeHandler = e => {
        dispatchImage({ type: 'USER_INPUT', payload: e.target.value });
    };
    const validateImageHandler = () => {
        dispatchImage({ type: 'INPUT_BLUR' });
    };

    const publisherChangeHandler = e => {
        dispatchPublisher({ type: 'USER_INPUT', payload: e.target.value });
    };
    const validatePublisherHandler = () => {
        dispatchPublisher({ type: 'INPUT_BLUR' });
    };

    const cookingTimeChangeHandler = e => {
        dispatchCookingTime({ type: 'USER_INPUT', payload: e.target.value });
    };
    const validateCookingTimeHandler = () => {
        dispatchCookingTime({ type: 'INPUT_BLUR' });
    };

    const servingsChangeHandler = e => {
        dispatchServings({ type: 'USER_INPUT', payload: e.target.value });
    };
    const validateServingsHandler = () => {
        dispatchServings({ type: 'INPUT_BLUR' });
    };

    const clearRecipeInfo = () => {
        dispatchTitle({ type: 'CLEAR_INPUT' });
        dispatchSourceUrl({ type: 'CLEAR_INPUT' });
        dispatchImage({ type: 'CLEAR_INPUT' });
        dispatchPublisher({ type: 'CLEAR_INPUT' });
        dispatchCookingTime({ type: 'CLEAR_INPUT' });
        dispatchServings({ type: 'CLEAR_INPUT' });
    };

    return (
        <RecipeFormContext.Provider
            value={{
                titleState,
                sourceUrlState,
                imageState,
                publisherState,
                cookingTimeState,
                servingsState,

                onTitleChange: titleChangeHandler,
                onSourceUrlChange: sourceUrlChangeHandler,
                onImageChange: imageChangeHandler,
                onPublisherChange: publisherChangeHandler,
                onCookingTimeChange: cookingTimeChangeHandler,
                onServingsChange: servingsChangeHandler,

                onTitleBlur: validateTitleHandler,
                onSourceUrlBlur: validateSourceUrlHandler,
                onImageBlur: validateImageHandler,
                onPublisherBlur: validatePublisherHandler,
                onCookingTimeBlur: validateCookingTimeHandler,
                onServingsBlur: validateServingsHandler,

                clearRecipeInfo,
            }}
        >
            {children}
        </RecipeFormContext.Provider>
    );
};

export default RecipeFormContext;
