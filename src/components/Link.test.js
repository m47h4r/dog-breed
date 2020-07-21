import React from "react";
import Link from "./Link";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Link", function () {
  it("should render the children it's passed", function () {
    const testText = "something";
    render(
      <Router>
        <Link to={testText}>
          <p>{testText}</p>
        </Link>
      </Router>
    );
    expect(screen.queryByText(testText)).not.toBeNull();
  });
});
