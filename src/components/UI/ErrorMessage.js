import './ErrorMessage.scss';

import icons from '../../resources/icons.svg';

function ErrorMessage({ text }) {
    const iconError = `${icons}#icon-alert-triangle`;

    return (
        <div className="error">
            <div>
                <svg>
                    <use href={iconError}></use>
                </svg>
            </div>
            <p>{text}</p>
        </div>
    );
}

export default ErrorMessage;
