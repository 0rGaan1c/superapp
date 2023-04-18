import React, { useState } from "react";
import SelectedCategories from "../../components/SelectCategory/SelectedCategories";
import Action from "../../assets/category/action.png";
import Drama from "../../assets/category/drama.png";
import Fantasy from "../../assets/category/fantasy.png";
import Fiction from "../../assets/category/fiction.png";
import Horror from "../../assets/category/horror.png";
import Music from "../../assets/category/music.png";
import Romance from "../../assets/category/romance.png";
import Western from "../../assets/category/western.png";
import Thriller from "../../assets/category/thriller.png";
import "./index.css";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    src: Action,
    name: "Action",
    color: "#FF5209",
  },
  {
    src: Drama,
    name: "Drama",
    color: "#D7A4FF",
  },
  {
    src: Romance,
    name: "Romance",
    color: "#148A08",
  },
  {
    src: Thriller,
    name: "Thriller",
    color: "#84C2FF",
  },
  {
    src: Western,
    name: "Western",
    color: "#912500",
  },
  {
    src: Horror,
    name: "Horror",
    color: "#7358FF",
  },
  {
    src: Fantasy,
    name: "Fantasy",
    color: "#FF4ADE",
  },
  {
    src: Music,
    name: "Music",
    color: "#E61E32",
  },
  {
    src: Fiction,
    name: "Fiction",
    color: "#6CD061",
  },
];

const SelectCategory = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [error, setError] = useState("");

  const handleCategories = (category) => {
    if (selectedCategories.includes(category)) {
      const updatedCategories = selectedCategories.filter(
        (selectedCategory) => {
          return selectedCategory !== category;
        }
      );

      setSelectedCategories(updatedCategories);
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  console.log(selectedCategories);

  return (
    <>
      <div className="select-category-page">
        <SelectedCategories
          selectedCategories={selectedCategories}
          handleCategories={handleCategories}
        />

        <div style={{ width: "55%" }}>
          <div className="select-category-container">
            {categories.map(({ src, name, color }, idx) => {
              return (
                <div
                  key={idx}
                  className="category-card"
                  style={{
                    backgroundColor: color,
                    border: selectedCategories.includes(name)
                      ? "6px solid #11B800"
                      : "",
                  }}
                  onClick={() => handleCategories(name)}
                >
                  <p>{name}</p>
                  <img src={src} alt={name} />
                </div>
              );
            })}
          </div>

          {error && <p className="category-error">{error}</p>}
          <div className="button-container">
            <button
              className="button"
              onClick={() => {
                if (selectedCategories.length < 3) {
                  setError("Please select atleast 3 categories.");
                  return;
                }
                localStorage.setItem(
                  "categories",
                  JSON.stringify(selectedCategories)
                );
                navigate("/dummy");
              }}
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCategory;
