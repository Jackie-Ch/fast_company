import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import api from '../api';
import QualitiesList from './quolitiesList';

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();
  console.log(user);
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  });
  const history = useHistory();

  const handleSave = function () {
    history.push('/users');
  };

  if (user) {
    return (
      <>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <p>CompletedMeeting: {user.completedMeetings}</p>
        <h2>Rate: {user.rate}</h2>
        <button onClick={handleSave}>Все пользователи</button>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

UserPage.propTypes = {
  userId: propTypes.string.isRequired
};
export default UserPage;
