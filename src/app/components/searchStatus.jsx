import React from 'react';
import PropTypes from 'prop-types';

const SearchStatus = ({ length }) => {
  const fun = () => {
    return length === 4 || length === 3 || length === 2
      ? 'человека'
      : 'человек';
  };
  return length ? (
    <span className="badge btn-primary">
      {length} {fun()} тусанет с тобой сегодня
    </span>
  ) : (
    <span className="badge btn-danger">Никто с тобой не тусанет</span>
  );
};
SearchStatus.propTypes = {
  length: PropTypes.number.isRequired
};

export default SearchStatus;
