import React, { useState } from 'react';
import api from '../api';
import 'bootstrap/dist/css/bootstrap.css';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const [count, setCount] = useState(api.users.fetchAll().length);
  console.log(count);
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter(user => user !== userId));
    setCount(() => count - 1);
  };
  const renderWordHuman = () => {
    return count === 4 || count === 3 || count === 2 ? 'человека' : 'человек';
  };
  const renderPhrase = () => {
    return count
      ? <span className='badge btn-primary'>{count} {renderWordHuman()} тусанет с тобой сегодня</span>
      : <span className='badge btn-danger'>Никто с тобой не тусанет</span>;
  };
  const renderUserQualities = (qualities) => {
    return qualities.map((quality) => (
      <span key={quality._id} className={`badge bg-${quality.color} m-1`}>
        {quality.name + ' '}
      </span>
    ))
  };
  return (
    <>
      <h2>{renderPhrase()}</h2>
      {users.length > 0 && (
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Качества</th>
              <th>Профессия</th>
              <th>Встретился, раз</th>
              <th>Оценка</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (<tr key={user._id}>
              <td>{user.name}</td>
              <td>{renderUserQualities(user.qualities)}</td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td><button className='btn btn-danger btn-sm' onClick={() => handleDelete(user)}>delete</button></td>
            </tr>))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default Users;