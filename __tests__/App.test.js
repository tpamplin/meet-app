import { render } from "@testing-library/react";
import React from "react";
import App from "./../src/App";

describe("<App /> component", () => {
    let AppDOM;

    //Test Setup
    beforeEach(() => {
        AppDOM = render(<App />).container.firstChild;
    });

    //Tests
    test("renders list of events", () => {
        expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
    });
    test("render CitySearch", () => {
        expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
    });
});
