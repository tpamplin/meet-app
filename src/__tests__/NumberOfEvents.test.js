import React from "react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import { render } from "@testing-library/react";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(
            <NumberOfEvents currentNOE={32} setCurrentNOE={() => {}} setErrorAlert={() => {}} />
        );
    });

    test("NumberOfEvents component contains a textbox", () => {
        expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
    });

    test("Show 32 events by default", () => {
        const textInput = NumberOfEventsComponent.queryByRole("textbox");
        expect(textInput).toHaveValue("32");
    });

    test("NumberOfEvents changes value when user enters a different number", async () => {
        const user = userEvent.setup();
        const textInput = NumberOfEventsComponent.queryByRole("textbox");
        await user.type(textInput, "{backspace}{backspace}15");
        expect(textInput).toHaveValue("15");
    });
});
