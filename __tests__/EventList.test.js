import React from "react";
import { render, within, waitFor } from "@testing-library/react";
import { getEvents } from "../src/api";
import EventList from "../src/components/EventList";
import App from "../src/App";

describe("<EventList  /> component", () => {
    let EventListComponent;

    //Test Setup
    beforeEach(() => {
        EventListComponent = render(<EventList />);
    });

    //Testing
    test('has an element with "list" role', () => {
        expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    });
    test("renders the correct number of events", async () => {
        const allEvents = await getEvents();
        EventListComponent.rerender(<EventList events={allEvents} />);
        expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
    });
});

describe("<EventList /> integration", () => {
    let AppComponent;
    beforeEach(() => {
        AppComponent = render(<App />);
    });

    test("renders a list of 32 events when the app is mounted and rendered", async () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDom = AppDOM.querySelector("#event-list");
        await waitFor(() => {
            const EventListItems = within(EventListDom).queryAllByRole("listitem");
            expect(EventListItems.length).toBe(32);
        });
    });
});
