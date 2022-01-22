import React from 'react';
import Qualities from './qualitie';
import Bookmark from './bookmark';
import PropTypes from 'prop-types';

const User = ({
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  _id,
  bookmark,
  onDelete,
  onToggleBookmark
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((qual) => (
          <Qualities {...qual} key={qual._id} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark status={bookmark} onClick={() => onToggleBookmark(_id)} />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
User.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.object.isRequired,
  qualities: PropTypes.array.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  bookmark: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleBookmark: PropTypes.func.isRequired
};

export default User;
