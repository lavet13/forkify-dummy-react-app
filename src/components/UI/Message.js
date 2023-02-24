import './Message.scss';

import icons from '../../resources/icons.svg';

function Message({ text }) {
    const iconSmile = `${icons}#icon-smile`;

    return (
        <div className="message">
            <div>
                <svg>
                    <use href={iconSmile}></use>
                </svg>
            </div>
            <p>{text}</p>
        </div>
    );
}

export default Message;
