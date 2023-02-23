import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBoards, saveBoardData } from "../../api/boardAPI";
import { toast } from "react-toastify";

const initialState = {
  mondayBoards: [],
  board: null,
  searchParam: "",
  loading: false,
  saving: false,
};

export const fetchBoards = createAsyncThunk("boards/fetch", async (params) => {
  return getBoards(params);
});

export const saveBoard = createAsyncThunk("boards/save", async (data) => {
  return saveBoardData(data);
});

export const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    searchBoard: (state, action) => {
      state.searchParam = action.payload;
      if (action.payload === "") {
        state.board = null;
      } else {
        state.board = state.mondayBoards.find((item) =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
  },
  extraReducers: (builder) => {
    // fetch boards cases
    builder.addCase(fetchBoards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBoards.fulfilled, (state, action) => {
      state.loading = false;
      state.mondayBoards = action.payload;
    });
    builder.addCase(fetchBoards.rejected, (state, action) => {
      state.loading = false;
      state.mondayBoards = [];
      toast(action.error.message, { type: "error", autoClose: 3000 });
    });
    // save board cases
    builder.addCase(saveBoard.pending, (state) => {
      state.saving = true;
    });
    builder.addCase(saveBoard.fulfilled, (state) => {
      state.saving = false;
      toast("Board state saved", { type: "success", autoClose: 3000 });
    });
    builder.addCase(saveBoard.rejected, (state, action) => {
      state.saving = false;
      toast(action.error.message, { type: "error", autoClose: 3000 });
    });
  },
});

export default boardsSlice.reducer;
export const { searchBoard } = boardsSlice.actions;
