import React from 'react';
import { useParams } from 'react-router-dom';
import UsersList from '../usersList';
import UserPage from '../userPage';

function Users() {
  const params = useParams();
  const { userId } = params;
  return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>;
}

export default Users;
