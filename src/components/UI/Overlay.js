import './Overlay.scss';

function Overlay({ className }) {
    const classes = 'overlay ' + (className || '');
    return <div className={classes}></div>;
}

export default Overlay;
