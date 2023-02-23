import React from "react";
import { saveBoard } from "./boardSlice";
import { useDispatch, useSelector } from "react-redux";

const Board = ({ data }) => {
  const { saving } = useSelector((state) => state.boards);
  const { name, state, items, board_kind } = data;
  const dispatch = useDispatch();
  const stateColors = {
    all: "primary",
    active: "success",
    archived: "secondary",
    deleted: "danger",
  };

  const onSave = (data) => {
    dispatch(saveBoard(data));
  };

  return (
    <div className="card">
      {/*{JSON.stringify(board)}*/}
      <div className="card-header">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Board Name</th>
                <th>State</th>
                <th>Kind</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h1 className="display-6">{name}</h1>
                </td>
                <td>
                  <span className={`badge bg-${stateColors[state]}`}>
                    {state}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge bg-${
                      board_kind === "public" ? "primary" : "dark"
                    }`}
                  >
                    {board_kind}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>Item</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 &&
                items.map(({ id, name, state }) => (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>
                      <span className="badge bg-success">{state}</span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer">
        <button
          disabled={saving}
          onClick={() => onSave(data)}
          type="button"
          className="btn btn-success"
        >
          {saving && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}{" "}
          <span>{saving ? "Saving..." : "Save"}</span>
        </button>
      </div>
    </div>
  );
};

export default Board;
