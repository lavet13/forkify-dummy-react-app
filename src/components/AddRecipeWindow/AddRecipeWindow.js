import './AddRecipeWindow.scss';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';

function AddRecipeWindow({ className }) {
    const classes = 'add-recipe-window ' + (className || '');

    return (
        <div className={classes}>
            <button className="btn--close-modal">&times;</button>
            <AddRecipeForm />
        </div>
    );
}

export default AddRecipeWindow;
