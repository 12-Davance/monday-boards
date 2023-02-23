import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilterParams,
  clearFilterParams,
  findRecords,
} from '../saved-records/recordSlice';

const RecordsFilter = () => {
  const { filterParams } = useSelector((state) => state.records);
  const { searchValue, start, end } = filterParams;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findRecords(filterParams));
  }, [filterParams]);

  const onChange = (e) => {
    dispatch(
      setFilterParams({ ...filterParams, [e.target.id]: e.target.value })
    );
  };

  return (
    <div className='mb-3 d-flex flex-column flex-lg-row gap-3'>
      <input
        id='searchValue'
        className='form-control align-self-end'
        type='search'
        placeholder='search record'
        onChange={onChange}
        value={searchValue}
      />
      <div className='flex-fill'>
        <label htmlFor='from'>Date Range</label>
        <div className='d-flex flex-column flex-lg-row gap-3'>
          <input
            id='start'
            className='form-control'
            type='date'
            onChange={onChange}
            value={start}
          />
          <input
            id='end'
            className='form-control'
            type='date'
            onChange={onChange}
            value={end}
          />
        </div>
      </div>
      <button
        disabled={!searchValue && !start && !end}
        type='button'
        className='btn btn-danger align-self-end'
        onClick={() => {
          dispatch(clearFilterParams());
        }}>
        Clear
      </button>
    </div>
  );
};

export default RecordsFilter;
