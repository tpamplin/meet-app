import React from "react";
import { render } from "@testing-library/react";
import EventList from "../src/components/EventList";

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
    test("renders the correct number of events", () => {
        EventListComponent.rerender(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />);
        expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
    });
});
