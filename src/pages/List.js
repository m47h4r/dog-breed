import React, { useEffect, useReducer } from "react";

import "./List.css";

import Header from "../components/Header";
import Breed from "../components/Breed";

import config from "../config";

function useDogReducer() {
  const initState = {
    isLoading: false,
    breedList: null,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  function reducer(state, action) {
    switch (action.type) {
      case "SET-LOADING":
        return { ...state, isLoading: true };
      case "SET-BREEDLIST":
        return { ...state, breedList: action.data };
      default:
        return { ...state };
    }
  }

  return [state, dispatch];
}

function List() {
  const [state, dispatch] = useDogReducer();

  useEffect(() => {
    dispatch({ type: "SET-LOADING" });
    fetch(config.api.breedListURL)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET-BREEDLIST", data: data }));
  }, []);

  return (
    <>
      <Header currentPage="list" />
      <div className="breed-wrapper">
        {state.breedList
          ? Object.keys(state.breedList.message).map((breed) => (
              <Breed name={breed} />
            ))
          : null}
      </div>
    </>
  );
}

export default List;
