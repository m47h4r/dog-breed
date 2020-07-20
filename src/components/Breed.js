import React, { useEffect, useState, useReducer } from "react";

import "./Breed.css";

import config from "../config";

function useBreedReducer() {
  const initState = {
    currentImageIndex: -1,
    imageURLs: null,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT-IMAGE-INDEX": {
        const imageURLsLength = state.imageURLs.message.length;
        let newImageIndex = -1;
        if (+state.currentImageIndex === +imageURLsLength - 1) {
          newImageIndex = 0;
        } else {
          newImageIndex = state.currentImageIndex + 1;
        }
        return { ...state, currentImageIndex: newImageIndex };
      }
      case "SET-IMAGE-URLS": {
        return { ...state, imageURLs: action.data };
      }
      default:
        return { ...state };
    }
  }

  return [state, dispatch];
}

function Breed({ name }) {
  // let [imageIndex, setImageIndex] = useState(-1);
  // const [images, setImages] = useState(null);
  const [state, dispatch] = useBreedReducer();

  useEffect(() => {
    fetch(
      config.api.breedImageURLPrefix + name + config.api.breedImageURLSuffix
    )
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET-IMAGE-URLS", data: data }));
  }, []);

  return (
    <button
      className="breed"
      data-image-number={state.currentImageIndex}
      onClick={() => dispatch({ type: "INCREMENT-IMAGE-INDEX" })}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))," +
          `url(${
            state.imageURLs !== null
              ? state.currentImageIndex !== -1
                ? state.imageURLs.message[state.currentImageIndex]
                : "none"
              : "none"
          })`,
      }}
    >
      <div className="entity">{name}</div>
    </button>
  );
}

export default Breed;
