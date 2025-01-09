import React from "react";
import App from "./../src/App";

import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../src/api";

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
    test("render NumberOfEvents", () => {
        expect(AppDOM.querySelector("#number-of-events")).toBeInTheDocument();
    });
});

describe("<App /> integrations", () => {
    let AppComponent;
    let user;
    let AppDOM;
    let EventListDOM;
    beforeEach(() => {
        user = userEvent.setup();
        AppComponent = render(<App />);
        AppDOM = AppComponent.container.firstChild;
        EventListDOM = AppDOM.querySelector("#event-list");
    });

    test("renders a list of events matching the city selected by the user", async () => {
        const CitySearchDOM = AppDOM.querySelector("#city-search");
        const CitySearchInput = within(CitySearchDOM).queryByRole("textbox");

        await user.type(CitySearchInput, "Berlin");
        const berlinSuggestionItem = within(CitySearchDOM).queryByText("Berlin, Germany");
        await user.click(berlinSuggestionItem);

        const allEvents = await getEvents();
        const berlinEvents = allEvents.filter((event) => event.location === "Berlin, Germany");

        const allRenderedEventItems = within(EventListDOM).queryAllByRole("listitem");

        expect(allRenderedEventItems.length).toBe(berlinEvents.length);

        allRenderedEventItems.forEach((event) => {
            expect(event.textContent).toContain("Berlin, Germany");
        });
    });

    test("Renders the correct number of events when the user enters a new number", async () => {
        const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
        const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole("textbox");
        await user.type(NumberOfEventsInput, "{backspace}{backspace}15");
        const allRenderedEventItems = within(EventListDOM).queryAllByRole("listitem");

        expect(allRenderedEventItems.length).toBe(15);
    });
});
