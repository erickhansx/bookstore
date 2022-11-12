const BookForm = () => {
  return (
    <div className="book-form">
      <div>
        <h2 className="book-form__header">ADD NEW BOOK</h2>
      </div>
      <div className="inputs">
        <input type="text" />
        <input list="Categories" placeHolder="Categories" />
        <datalist id="Categories">
          <option value="Action" />
          <option value="Drama" />
          <option value="Horror" />
          <option value="Suspense" />
          <option value="Biography" />
          <option value="Documentary" />
        </datalist>
      </div>
    </div>
  );
};

export default BookForm;
