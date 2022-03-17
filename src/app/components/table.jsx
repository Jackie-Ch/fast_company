import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import propTypes from 'prop-types';

const Table = ({ onSort, selectedSort, columns, data }) => {
  return (
    <table className="table table-hover">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data }} />
    </table>
  );
};

Table.propTypes = {
  onSort: propTypes.func,
  selectedSort: propTypes.object,
  columns: propTypes.object,
  data: propTypes.array
};

export default Table;
