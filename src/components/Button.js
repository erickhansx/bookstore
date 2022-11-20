import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Button = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const onClickStatus = (event) => {
    dispatch(checkStatus());
    event.currentTarget.classList.toggle('btn-off');

    fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gsPcb8D6x3QfolcShzQl/books',
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: 'item_4',
          title: 'Harr_3',
          author: 'Y_3',
          category: 'N_3',
        }),

        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    ).then((response) => response.text());
  };
  return (
    <div className="big-container">
      <button className="categories-btn" type="button" onClick={onClickStatus}>
        Check Status
      </button>
      <p>{categories}</p>
    </div>
  );
};

export default Button;
