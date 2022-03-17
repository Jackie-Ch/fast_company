import React from 'react';
import Qualities from './qualitie';
import propTypes from 'prop-types';

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((qual) => (
        <Qualities {...qual} key={qual._id} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: propTypes.array
};

export default QualitiesList;
