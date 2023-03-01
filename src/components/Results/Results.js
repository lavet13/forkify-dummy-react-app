import './Results.scss';

import Preview from '../UI/Preview';

function Results({ onSaveIdPreview, page }) {
    console.log(page);

    const previewLinkHandler = e => {
        e.preventDefault();
        const link = e.target.closest('.preview__link');
        if (!link) return;

        onSaveIdPreview(
            decodeURIComponent(link.getAttribute('href').split('=')[1])
        );
    };

    return (
        <div onClick={previewLinkHandler} className="results">
            <Preview />
        </div>
    );
}

export default Results;
