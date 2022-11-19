import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './BookForm.scss';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
    console.log(author);
  };

  const dispatchBook = () => {
    dispatch(
      addBook({
        title,
        author,
        genre: 'blah',
        id: 4,
      }),
    );
  };
  return (
    <div className="book-form">
      <div>
        <h2 className="book-form__header">ADD NEW BOOK</h2>
      </div>
      <div className="inputs">
        <input onChange={onChangeTitle} type="text" placeholder="Book title" />
        <input onChange={onChangeAuthor} type="text" placeholder="Author" />
        <button onClick={dispatchBook} type="button">
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

export default BookForm;
