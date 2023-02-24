import './Button.scss';

function Button({ className, children }) {
    const classes = 'btn ' + (className || '');

    return <button className={classes}>{children}</button>;
}

export default Button;
