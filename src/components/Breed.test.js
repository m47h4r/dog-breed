import React from "react";
import Breed from "./Breed";

import { useBreedReducer } from "./Breed";

describe("useBreedReducer", function () {
  beforeEach(() => {
    const initValues = {
      currentImageIndex: -1,
      imageURLs: null,
    };
  });

  it("should initialize values", function () {
    function Dummy() {
      const [state, dispatch] = useBreedReducer();

      expect(state.currentImageIndex).toBe(initValues.currentImageIndex);
      expect(state.imageURLs).toBe(initValues.imageURLs);
    }
  });

  it("should set imageURLs on 'SET-IMAGE-URLS' action", function () {
    function Dummy() {
      const [state, dispatch] = useBreedReducer();
      const fakeObject = { message: ["some", "another"] };
      dispatch({ type: 'SET-IMAGE-URLS', data: fakeObject });
      expect(state.imageURLs).toMatchObject(fakeObject)
    }
  });
});
