import React from 'react';
import PropTypes from 'prop-types';

const Qualities = ({ color, name, _id }) => {
  return (
    <span key={_id} className={`badge bg-${color} m-1`}>
      {name + ' '}
    </span>
  );
};

Qualities.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};

export default Qualities;
