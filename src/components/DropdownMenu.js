import React, { useState } from "react";
import data from "../data";
import Options from "./Options";

const DropdownMenu = ({ tags, setTags }) => {
  const [options, setOptions] = useState(data);
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
    const filteredOptions = data.filter((op) =>
      op.value.toLowerCase().includes(e.target.value.trim().toLowerCase())
    );
    setOptions(filteredOptions);
  };

  return (
    <div className="dropdown">
      <div className="tags-container" onClick={() => setIsActive(!isActive)}>
        Select Fruits
        <span className="open">v</span>
      </div>
      {isActive && (
        <Options
          searchHandler={searchHandler}
          options={options}
          setOptions={setOptions}
          setIsActive={setIsActive}
          tags={tags}
          setTags={setTags}
          data={data}
        />
      )}
    </div>
  );
};

export default DropdownMenu;
