import React, { useState } from "react";

const Notes = ({ submit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    submit(value);
  };

  return (
    <div>
      <p>Write a note</p>
      <textarea onChange={handleChange} value={value} />
      <div onClick={onSubmit}>submit</div>
    </div>
  );
};

export default Notes;
