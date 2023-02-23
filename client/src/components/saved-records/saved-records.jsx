import React, { useEffect } from 'react';
import Notification from '../shared/notification';
import RecordsFilter from './records-filter';
import RecordsTable from './records-table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecords } from './recordSlice';
import Loader from '../shared/loader';

const SavedRecords = () => {
  const { records, loading, filterParams } = useSelector(
    (state) => state.records
  );
  const { searchValue, start, end } = filterParams;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchValue && !start && !end) dispatch(fetchRecords());
  }, []);

  return (
    <>
      {<RecordsFilter />}
      {loading && <Loader />}
      {!loading && records.length === 0 && (
        <Notification title='📂 No Records!' type='danger' align='center' />
      )}
      {!loading && records.length > 0 && <RecordsTable data={records} />}
    </>
  );
};

export default SavedRecords;
