import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
    test("When a user opens the app event details are hidden by default", ({ given, when, then }) => {
        given("the app is open", () => {});

        when("an event is loaded", () => {});

        then("it will be collapsed.", () => {});
    });

    test("When a user clicks on the show details button the event will expand to show details", ({
        given,
        when,
        then,
    }) => {
        given("an event is collapsed", () => {});

        when("the show details button is clicked", () => {});

        then("the event will be expanded", () => {});
    });

    test("When a user clicks on the hide details button the event will collapse to hide details", ({
        given,
        when,
        then,
    }) => {
        given("an event is expanded", () => {});

        when("the hide details button is clicked,", () => {});

        then("the event will be collapsed.", () => {});
    });
});
