import Message from '../UI/Message';
// import BookmarkItem from './BookmarkItem';
import './Bookmarks.scss';

function Bookmarks() {
    return (
        <div className="bookmarks">
            <ul className="bookmarks__list">
                <Message
                    text={
                        'No bookmarks yet. Find a nice recipe and bookmark it :)'
                    }
                />

                {/* <BookmarkItem /> */}
            </ul>
        </div>
    );
}

export default Bookmarks;
