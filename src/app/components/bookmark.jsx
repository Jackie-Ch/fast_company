import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({ status, ...rest }) => {
  const { onClick } = rest;
  const bookMark = (status) => {
    if (status === true) {
      return <i className='bi bi-bookmark-fill'></i>;
    }
    return <i className='bi bi-bookmark'></i>;
  };
  return (
    <>
      <button className='btn btn-light' onClick={onClick}>
        {bookMark(status)}
      </button>
    </>
  );
};
Bookmark.propTypes = {
  status: PropTypes.bool.isRequired,
  rest: PropTypes.object
};

export default Bookmark;
