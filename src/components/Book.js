import './Book.scss';
import { PropTypes } from 'prop-types';

const Book = ({ genre, author, name }) => (
  <div className="book">
    <div className="book__main">
      <span className="genre">{genre}</span>
      <h2>{name}</h2>
      <p>{author}</p>
      <div className="book__btns">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="book__percentage">
      <p>64%</p>
      <p>Completed</p>
    </div>
    <div className="book__chapter">
      <p className="current-chapter">Current Chapter</p>
      <p className="chapter">Chapter 17</p>
      <button type="button" className="update-progress">
        UPDATE progress
      </button>
    </div>
  </div>
);

Book.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  genre: PropTypes.string,
};

Book.defaultProps = {
  name: '',
  author: '',
  genre: '',
};

export default Book;
