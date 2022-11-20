import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import BookForm from '../components/BookForm';
import { fetchBooks } from '../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="books-page">
      {books.map((book) => (
        <Book
          key={book.id}
          author={book.author}
          title={book.title}
          genre={book.genre}
          id={book.id}
        />
      ))}
      <BookForm />
    </div>
  );
};

export default BooksPage;
