import React, { useEffect, useReducer } from "react";

import "./List.css";

import Header from "../components/Header";

import config from "../config";

function useDogReducer() {
  const initState = {
    isLoading: false,
    data: null,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  function reducer(state, action) {
    switch (action.type) {
      case "SET-LOADING":
        return { ...state, isLoading: true };
      case "SET-DATA":
        return { ...state, data: action.data };
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
      .then((data) => dispatch({ type: "SET-DATA", data: data }));
  }, []);

  return (
    <>
      <Header currentPage="list" />
      <div className="breed-wrapper">
        {state.data
          ? Object.keys(state.data.message).map((breed) => (
              <div className="breed">
                <div className="entity">{breed}</div>
              </div>
            ))
          : null}
      </div>
    </>
  );
}

export default List;
