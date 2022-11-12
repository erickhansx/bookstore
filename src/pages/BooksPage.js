import Book from '../components/Book';
import BookForm from '../components/BookForm';

const BooksPage = () => {
  const dummyBooks = [
    {
      genre: 'Action',
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <div className="books-page">
      <Book
        genre={dummyBooks[0].genre}
        name={dummyBooks[0].name}
        author={dummyBooks[0].author}
      />
      <BookForm />
    </div>
  );
};

export default BooksPage;
