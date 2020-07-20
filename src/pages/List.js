import React, { useEffect, useReducer } from "react";

import "./List.css";

import Header from "../components/Header";
import Breed from "../components/Breed";

import config from "../config";

function useDogReducer() {
  const initState = {
    breedList: null,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  function reducer(state, action) {
    switch (action.type) {
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
    console.log(' i am in use effect of the list component ')
    fetch(config.api.breedListURL)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET-BREEDLIST", data: data }));
  }, [dispatch]);

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
