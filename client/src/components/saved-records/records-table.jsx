import React from "react";
import moment from "moment";

const RecordsTable = ({ data }) => {
  const stateColors = {
    all: "primary",
    active: "success",
    archived: "secondary",
    deleted: "danger",
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Board</th>
            <th>State</th>
            <th>Kind</th>
            <th>Items</th>
            <th>Saved At</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ _id, id, name, state, board_kind, items, savedAt }) => (
            <tr key={_id}>
              <td>{id}</td>
              <td>{name}</td>
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
              <td>
                <span className="badge text-bg-info">{items.length}</span>
              </td>
              <td>{moment(savedAt).format("MMM Do YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordsTable;
