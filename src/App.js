import React, { useState } from "react";
import DropdownMenu from "./components/DropdownMenu";
import TagsList from "./components/TagsList";

function App() {
  const [tags, setTags] = useState([]);

  const removeTag = (remove) => {
    setTags((tags) => tags.filter((tag) => tag !== remove));
  };

  return (
    <div className="App">
      <h1 className="header">Custom Select Dropdown</h1>
      <DropdownMenu tags={tags} setTags={setTags} />
      <TagsList tags={tags} removeTag={removeTag} />
    </div>
  );
}

export default App;
