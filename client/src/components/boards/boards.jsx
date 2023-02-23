import React, { useEffect } from "react";
import BoardSearch from "./board-search";
import Board from "./board";
import { fetchBoards, searchBoard } from "./boardSlice";
import { useDispatch, useSelector } from "react-redux";

const Boards = () => {
  const { mondayBoards, board, searchParam, loading, saving } = useSelector(
    (state) => state.boards
  );
  const dispatch = useDispatch();
  const query = "{boards {id name state board_kind items {id name state}}}";

  useEffect(() => {
    dispatch(fetchBoards(query));
  }, []);

  const onSearch = (e) => {
    const param = e.target.value;
    dispatch(searchBoard(param));
  };

  return (
    <div className="d-flex flex-column gap-3">
      <BoardSearch
        placeholder={loading ? "getting boards..." : "search board"}
        param={searchParam}
        onSearch={onSearch}
        disabled={loading || mondayBoards.length === 0}
      />
      {board && <Board data={board} />}
    </div>
  );
};

export default Boards;
