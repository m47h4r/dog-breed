import React from "react";
import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header", function () {
  it("should not render the current page", function () {
    const currentPage = "index";
    render(<Router><Header currentPage={currentPage} /></Router>);
    expect(screen.queryByText("Home")).toBeNull();
    expect(screen.queryByText("Breed List")).not.toBeNull();
    expect(screen.queryByText("Breed Quiz")).not.toBeNull();
  });
});
