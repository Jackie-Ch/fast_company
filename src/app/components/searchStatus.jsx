import React from 'react';
import PropTypes from 'prop-types';

const SearchStatus = ({ length }) => {
  const renderPhrase = () => {
    return length === 4 || length === 3 || length === 2
      ? 'человека'
      : 'человек';
  };
  return length ? (
    <h2>
      <span className='badge btn-primary'>
        {length} {renderPhrase()} тусанет с тобой сегодня
      </span>
    </h2>
  ) : (
    <h2>
      <span className='badge btn-danger'>Никто с тобой не тусанет</span>
    </h2>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired
};

export default SearchStatus;
