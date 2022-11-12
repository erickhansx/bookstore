const Book = (props) => {
  return (
    <div className="book">
      <div className="book__main">
        <span className="genre">{props.genre}</span>
        <h2>{props.name}</h2>
        <p>{props.author}</p>
        <div className="book__btns">
          <a>Comments</a>
          <a>Remove</a>
          <a>Edit</a>
        </div>
      </div>
      <div className="book__percentage">
        <p>64%</p>
        <p>Completed</p>
      </div>
      <div className="book__chapter">
        <p className="current-chapter">Current Chapter</p>
        <p className="chapter">Chapter 17</p>
        <button className="update-progress">UPDATE progress</button>
      </div>
    </div>
  );
};

export default Book;
