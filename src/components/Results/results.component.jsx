import React from 'react';
import styles from './results.module.css';
import previewStyles from '../UI/preview/preview.module.css';

import Preview from '../UI/preview/preview.component';

const Results = ({ onSaveIdPreview, page }) => {
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
};

export default Results;
