import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../src/components/NumberOfEvents";
import { render } from "@testing-library/react";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents currentNOE={32} setCurrentNOE={() => {}} />);
    });

    test("NumberOfEvents component contains a textbox", () => {
        expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
    });

    test("Show 32 events by default", () => {
        const textInput = NumberOfEventsComponent.queryByRole("textbox");
        expect(textInput).toHaveValue("32");
    });
});
