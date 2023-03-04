import React from 'react';
import Message from '../UI/Message';
import BookmarkItem from './BookmarkItem';
import styles from './Bookmarks.module.css';

function Bookmarks() {
    return (
        <div className={styles.bookmarks}>
            <ul className={styles.bookmarks__list}>
                <Message
                    text={
                        'No bookmarks yet. Find a nice recipe and bookmark it :)'
                    }
                />

                <BookmarkItem />
            </ul>
        </div>
    );
}

export default Bookmarks;
