import React from "react";
import Breed from "./Breed";
import { render, screen, act } from "@testing-library/react";

import { useBreedReducer } from "./Breed";

describe("Breed", function () {
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
        dispatch({ type: "SET-IMAGE-URLS", data: fakeObject });
        expect(state.imageURLs).toMatchObject(fakeObject);
      }
    });

    it("should increment currentImageIndex by one", function () {
      function Dummy() {
        const [state, dispatch] = useBreedReducer();
        const fakeObject = { message: ["first", "second"] };
        dispatch({ type: "INCREMENT-IMAGE-INDEX" });
        expect(state.currentImageIndex).toBe(initValues.currentImageIndex + 1);
      }
    });

    it("should set currentImageIndex to one if it's value exceeds the imageURLs length", function () {
      function Dummy() {
        const [state, dispatch] = useBreedReducer();
        const fakeObject = { message: ["first", "second"] };
        dispatch({ type: "INCREMENT-IMAGE-INDEX" });
        dispatch({ type: "INCREMENT-IMAGE-INDEX" });
        dispatch({ type: "INCREMENT-IMAGE-INDEX" });
        expect(state.currentImageIndex).toBe(0);
      }
    });
  });

  describe("render", function () {
    it("should return the button element", function () {
      render(<Breed />);
      expect(screen.getByTestId("breed-button")).not.toBeNull();
    });

    it("should return a <div> with the corresponding name", function () {
      const testName = "test name";
      render(<Breed name={testName} />);
      expect(screen.getByText(testName)).not.toBeNull();
    });
  });
});
