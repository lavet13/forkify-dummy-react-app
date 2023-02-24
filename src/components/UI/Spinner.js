import './Spinner.scss';
import icons from '../../resources/icons.svg';

function Spinner() {
    const iconLoader = `${icons}#icon-loader`;

    return (
        <div className="spinner">
            <svg>
                <use href={iconLoader}></use>
            </svg>
        </div>
    );
}

export default Spinner;
