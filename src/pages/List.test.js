import React from "react";
import Breed from "./List";
import { render, screen } from "@testing-library/react";

import { useBreedListReducer } from "./List";

describe("Breed List", function () {
  describe("useBreedListReducer", function () {
    beforeEach(() => {
      const initValues = {
        breedList: null,
      };
    });

    it("should initialize values", function () {
      function Dummy() {
        const [state, dispatch] = useBreedListReducer();
        expect(state.breedList).toBeNull();
      }
    });

    it("should set breedList on 'SET-BREEDLIST' action", function () {
      function Dummy() {
        const [state, dispatch] = useBreedListReducer();
        const fakeObject = { message: ["breedOne", "breedTwo"] };
        dispatch({ type: "SET-BREEDLIST", data: fakeObject });
        expect(state.breedList).toMatchObject(fakeObject);
      }
    });
  });
});
