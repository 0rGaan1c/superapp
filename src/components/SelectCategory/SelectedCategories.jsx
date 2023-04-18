import React from "react";
import "./SelectedCategories.css";

const SelectedCategories = ({ selectedCategories, handleCategories }) => {
  return (
    <div className="selected-categories">
      <h1 className="super-app">Super app</h1>
      <p>Choose your</p>
      <p>entertainment</p>
      <p>category</p>

      <div className="selected-categories-list">
        {selectedCategories.map((category, idx) => {
          return (
            <div key={idx}>
              {category}{" "}
              <span
                onClick={() => {
                  handleCategories(category);
                }}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedCategories;
