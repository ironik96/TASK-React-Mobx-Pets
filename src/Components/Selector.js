import React from "react";

const options = ["Cat", "Dog", "Rabbit"];

const Selector = ({ setType }) => {
  const optionTags = options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));
  return (
    <div className="selector-container">
      Type:
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="" selected>
          All
        </option>
        {optionTags}
      </select>
    </div>
  );
};

export default Selector;
