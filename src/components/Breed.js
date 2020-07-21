import React, { useEffect, useReducer } from "react";

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
  const [state, dispatch] = useBreedReducer();

  useEffect(() => {
    fetch(
      config.api.breedImageURLPrefix + name + config.api.breedImageURLSuffix
    )
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET-IMAGE-URLS", data: data }));
  }, [dispatch, name]);

  return (
    <button
      className="breed"
      data-image-number={state.currentImageIndex}
      onClick={() => dispatch({ type: "INCREMENT-IMAGE-INDEX" })}
      style={{
        backgroundImage: `url(${
          state.imageURLs !== null
            ? state.currentImageIndex !== -1
              ? state.imageURLs.message[state.currentImageIndex]
              : "none"
            : "none"
        })`,
      }}
    >
      <div className={state.currentImageIndex !== -1 ? "name name--readable" : "name"}>{name}</div>
    </button>
  );
}

export default Breed;
