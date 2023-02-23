import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRecords, searchRecords } from '../../api/recordAPI';
import { toast } from 'react-toastify';

const initialState = {
  searchData: [],
  records: [],
  filterParams: {
    searchValue: '',
    start: '',
    end: '',
  },
  loading: false,
};

export const fetchRecords = createAsyncThunk('records/fetch', async () => {
  return getRecords();
});

export const findRecords = createAsyncThunk(
  'records/search',
  async (params) => {
    return searchRecords(params);
  }
);

export const recordsSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    setFilterParams: (state, action) => {
      state.filterParams = action.payload;
    },
    clearFilterParams: (state) => {
      state.filterParams = {
        searchValue: '',
        start: '',
        end: '',
      };
      state.records = state.searchData;
    },
  },
  extraReducers: (builder) => {
    // fetch records cases
    builder.addCase(fetchRecords.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecords.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
      state.searchData = action.payload;
    });
    builder.addCase(fetchRecords.rejected, (state, action) => {
      state.loading = false;
      state.records = [];
      state.searchData = [];
      toast(action.error.message, { type: 'error', autoClose: 3000 });
    });
    // find records cases
    builder.addCase(findRecords.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(findRecords.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(findRecords.rejected, (state, action) => {
      state.loading = false;
      state.records = [];
      toast(action.error.message, { type: 'error', autoClose: 3000 });
    });
  },
});

export default recordsSlice.reducer;
export const { setFilterParams, clearFilterParams } = recordsSlice.actions;
