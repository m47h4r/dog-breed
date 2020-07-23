import React from "react";
import List from "./List";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { rest } from "msw";
import { server } from "../mocks/server";

import { useBreedListReducer } from "./List";
import { act } from "react-dom/test-utils";

describe("Breed List", function () {
  describe("useBreedListReducer", function () {
    beforeEach(() => {
      const initValues = {
        breedList: null,
      };
    });

    it("should initialize values", function () {
      function Dummy() {
        const [state] = useBreedListReducer();
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

  describe("render", function () {
    it("should render the breed-wrapper", async function () {
      render(
        <Router>
          <List />
        </Router>
      );
      expect(await screen.findByTestId("breed-wrapper")).not.toBeNull();
    });

    it("should not render any breed element if the results is an empty object", async function () {
      render(
        <Router>
          <List />
        </Router>
      );
      expect(await screen.findByTestId("breed-wrapper")).toBeEmpty();
    });

    it("should render as many breed elements as the data.message length", async function () {
      server.use(
        rest.get("*/api/breeds/list/all", (req, res, ctx) => {
          return res(ctx.json({ message: { one: [], two: [] } }));
        })
      );
      render(
        <Router>
          <List />
        </Router>
      );
      expect(await screen.findAllByTestId("breed-button")).toHaveLength(2);
    });
  });
});
