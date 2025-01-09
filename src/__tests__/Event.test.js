import React from "react";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { getEvents } from "../api";
import mockData from "../mock-data";
import Event from "../components/Event";

describe("<Event /> component", () => {
    let EventComponent;
    const event = mockData[0];
    beforeEach(() => {
        EventComponent = render(<Event event={event} />);
    });

    test("renders a title", () => {
        const eventTitle = EventComponent.queryByText(event.summary);
        expect(eventTitle).toBeInTheDocument();
    });

    test("renders event location", () => {
        const eventLocation = EventComponent.queryByText(event.location);
        expect(eventLocation).toBeInTheDocument();
    });

    test("renders event start time", () => {
        const eventStartTime = EventComponent.queryByText(event.created);
        expect(eventStartTime).toBeInTheDocument();
    });

    test("renders a show details button", () => {
        const showDetailsButton = EventComponent.queryByText("Show Details");
        expect(showDetailsButton).toBeInTheDocument();
    });

    test("event details are hidden by default", () => {
        const EventDetails = EventComponent.container.querySelector(".details");
        expect(EventDetails).not.toBeInTheDocument();
    });

    test("show details when user clicks on the show details button", async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText("Show Details");
        await user.click(showDetailsButton);
        const EventDetails = EventComponent.container.querySelector(".details");
        expect(EventDetails).toBeInTheDocument();
    });

    test("hide details when user clicks on hide details button", async () => {
        const user = userEvent.setup();
        const hideDetailsButton = EventComponent.queryByText("Hide Details");
        await user.click(hideDetailsButton);
        const EventDetails = EventComponent.container.querySelector(".details");
        expect(EventDetails).not.toBeInTheDocument();
    });
});
