import React from 'react';
import Message from '../UI/message/message.component';
import Bookmark from './bookmark.component';
import styles from './bookmarks.module.css';

const Bookmarks = () => {
  return (
    <div className={styles.bookmarks}>
      <ul className={styles.bookmarks__list}>
        <Message
          text={'No bookmarks yet. Find a nice recipe and bookmark it :)'}
        />

        <Bookmark />
      </ul>
    </div>
  );
};

export default Bookmarks;
