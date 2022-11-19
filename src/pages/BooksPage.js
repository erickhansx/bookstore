import { useSelector } from 'react-redux';
import Book from '../components/Book';
import BookForm from '../components/BookForm';

const BooksPage = () => {
  const books = useSelector((state) => state.books);
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
