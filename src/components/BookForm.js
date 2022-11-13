import './BookForm.scss';

const BookForm = () => (
  <div className="book-form">
    <div>
      <h2 className="book-form__header">ADD NEW BOOK</h2>
    </div>
    <div className="inputs">
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="button">ADD BOOK</button>
    </div>
  </div>
);

export default BookForm;
