import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/books';
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

  const id = Math.random();

  const dispatchBook = () => {
    dispatch(
      addBook({
        title,
        author,
        genre: 'blah',
        id,
      }),
    );
    setTimeout(() => dispatch(fetchBooks()), 500);
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
