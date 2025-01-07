import { render } from "@testing-library/react";
import React from "react";
import App from "./../src/App";

describe("<App /> component", () => {
    test("renders list of events", () => {
        const AppDOM = render(<App />).container.firstChild;
        expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
    });
    test("render CitySearch", () => {
        const AppDom = render(<App />).container.firstChild;
        expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
    });
});
