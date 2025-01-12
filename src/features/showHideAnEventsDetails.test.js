import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
    test("When a user opens the app event details are hidden by default", ({ given, when, then }) => {
        let AppComponent;
        given("the app is open", () => {
            AppComponent = render(<App />);
        });

        when("an event is loaded", async () => {
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const event = AppDOM.querySelector(".event");
                expect(event).toBeInTheDocument();
            });
        });

        then("it will be collapsed.", async () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector(".details");
            expect(eventDetails).not.toBeInTheDocument;
        });
    });

    test("When a user clicks on the show details button the event will expand to show details", ({
        given,
        when,
        then,
    }) => {
        let AppComponent;
        let eventDetails;
        let AppDOM;
        given("an event is collapsed", async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                eventDetails = AppDOM.querySelector(".details");
                expect(eventDetails).not.toBeInTheDocument;
            });
        });

        when("the show details button is clicked", async () => {
            const user = userEvent.setup();
            const EventListDOM = AppDOM.querySelector("#event-list");
            const showDetails = EventListDOM.querySelector(".details-button");
            await user.click(showDetails);
        });

        then("the event will be expanded", async () => {
            await waitFor(() => {
                eventDetails = AppDOM.querySelector(".details");
                expect(eventDetails).toBeInTheDocument;
            });
        });
    });

    test("When a user clicks on the hide details button the event will collapse to hide details", ({
        given,
        when,
        then,
    }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        let showDetails;
        let user;
        given("an event is expanded", async () => {
            user = userEvent.setup();
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector("#event-list");
            showDetails = EventListDOM.querySelector(".details-button");
            await user.click(showDetails);
        });

        when("the hide details button is clicked,", async () => {
            await user.click(showDetails);
        });

        then("the event will be collapsed.", () => {
            const eventDetails = EventListDOM.querySelector(".details");
            expect(eventDetails).not.toBeInTheDocument();
        });
    });
});
