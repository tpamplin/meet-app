import React from "react";
import { render } from "@testing-library/react";
import EventList from "../src/components/EventList";

describe("<EventList  /> component", () => {
    test('has an element with "list" role', () => {
        const EventListComponent = render(<EventList />);
        expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    });
});
