import './Header.scss';
import logo from '../../resources/logo.png';

function Header({ className, children }) {
    const classes = 'header ' + (className || '');

    return (
        <header className={classes}>
            <img className="header__logo" src={logo} alt="Logo" />
            {children}
        </header>
    );
}

export default Header;
