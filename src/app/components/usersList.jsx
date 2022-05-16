/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { paginate } from '../utils/paginate';
import Pagination from './pagination';
import PropTypes from 'prop-types';
import api from '../api';
import GroupList from './groupList';
import SearchStatus from './searchStatus';
import UsersTable from './usersTable';
import _ from 'lodash';

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' });
  const [users, setUsers] = useState();
  console.log(users);
  const pageSize = 8;

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  if (users) {
    const filteredUsers = selectedProf
      ? users.filter(
          (user) =>
            JSON.stringify(user.profession) === JSON.stringify(selectedProf)
        )
      : users;

    const count = filteredUsers.length;

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);
    console.log(userCrop);
    const clearFilter = () => {
      setSelectedProf();
    };

    const handleSort = (item) => {
      setSortBy(item);
    };

    return (
      <>
        <div className="d-flex">
          {professions && (
            <div className="d-flex flex-column flex-shrink-0 p-3 pt-1">
              <GroupList
                items={professions}
                onItemSelect={handleProfessionSelect}
                selectedItem={selectedProf}
              />
              <button
                className={'btn btn-secondary mt-2'}
                onClick={clearFilter}
              >
                Clear
              </button>
            </div>
          )}
          <div className="d-flex flex-column">
            <SearchStatus length={count} />
            {count > 0 && (
              <UsersTable
                users={userCrop}
                onSort={handleSort}
                selectedSort={sortBy}
                onDelete={handleDelete}
                onToggleBookmark={handleToggleBookmark}
              />
            )}
            <div className="d-flex justify-content-center">
              <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  return <h2>loading</h2>;
};

UsersList.propTypes = {
  users: PropTypes.array
};

export default UsersList;
