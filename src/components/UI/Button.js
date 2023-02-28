import './Button.scss';

function Button({ className, children, type = 'button' }) {
    const classes = 'btn ' + (className || '');

    return (
        <button className={classes} type={type}>
            {children}
        </button>
    );
}

export default Button;
