import { useDispatch } from 'react-redux';
import './Book.scss';
import { PropTypes } from 'prop-types';
import { removeBook, fetchBooks } from '../redux/books/books';

const Book = ({
  genre, author, title, id,
}) => {
  const dispatch = useDispatch();
  const onClickRemove = () => {
    dispatch(removeBook(id));
    setTimeout(() => dispatch(fetchBooks()), 500);
  };
  return (
    <div className="book">
      <div className="book__main">
        <span className="genre">{genre}</span>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="book__btns">
          <button type="button">Comments</button>
          <button onClick={onClickRemove} id={id} type="button">
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book__percentage">
        <p className="book__percentage--number">64%</p>
        <p className="book__percentage--text">Completed</p>
      </div>
      <div className="book__chapter">
        <p className="current-chapter">Current Chapter</p>
        <p className="chapter">Chapter 17</p>
        <button type="button" className="update-progress">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  genre: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Book.defaultProps = {
  title: '',
  author: '',
  genre: '',
};

export default Book;
