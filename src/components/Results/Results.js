import React from 'react';
import styles from './Results.module.css';
import previewStyles from '../UI/Preview.module.css';

import Preview from '../UI/Preview';

function Results({ onSaveIdPreview, page }) {
    const previewLinkHandler = e => {
        e.preventDefault();

        const link = e.target.closest(`.${previewStyles.preview__link}`);
        if (!link) return;

        onSaveIdPreview(
            decodeURIComponent(link.getAttribute('href').split('=')[1])
        );
    };

    return (
        <div onClick={previewLinkHandler} className={styles.results}>
            <Preview />
        </div>
    );
}

export default Results;
