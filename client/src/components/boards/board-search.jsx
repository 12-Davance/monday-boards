import React from "react";

const BoardSearch = ({ placeholder, param, onSearch, disabled }) => {
  return (
    <div>
      <input
        value={param}
        onChange={onSearch}
        disabled={disabled}
        className="form-control form-control-lg"
        type="search"
        placeholder={placeholder}
        aria-label=".form-control-lg example"
      />
    </div>
  );
};

export default BoardSearch;
