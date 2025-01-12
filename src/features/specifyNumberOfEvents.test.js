import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
    test("When the app is opened, show 32 events by default", ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        given("the app is open", () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
        });

        when("the user hasn't specified a number of events", () => {
            const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
            const numberInput = within(NumberOfEventsDOM).queryByRole("textbox");
            expect(numberInput.value).toBe("32");
        });

        then(/^(\d+) events will be shown by default.$/, async (arg0) => {
            const EventListDOM = AppDOM.querySelector("#event-list");
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole("listitem");
                expect(EventListItems.length).toBe(32);
            });
        });
    });

    test("When the user specifies a number of events to show, that number will be shown.", ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        given("the app is open", () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
        });

        when("the user specifies a number of events to be shown", async () => {
            const user = userEvent.setup();
            const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
            const numberInput = within(NumberOfEventsDOM).queryByRole("textbox");
            await user.type(numberInput, "{backspace}{backspace}15");
        });

        then("the number of events that the user has chosen will be shown.", async () => {
            const EventListDOM = AppDOM.querySelector("#event-list");
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole("listitem");
                expect(EventListItems.length).toBe(15);
            });
        });
    });
});
