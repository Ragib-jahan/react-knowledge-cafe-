import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h3 className='text-4xl'>Reading Time: {readingTime} </h3>
            </div>
            <h3 className="text-3xl text-center">Bookmarks: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark, idx) => <Bookmark bookmark={bookmark} key={idx} ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;