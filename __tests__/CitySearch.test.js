import React from "react";
import { render } from "@testing-library/react";
import CitySearch from "../src/components/CitySearch";

describe("<CitySearch /> component", () => {
    TestEnvironment("renders text input", () => {
        const CitySearchComponent = render(<CitySearch />);
        const cityTextBox = CitySearchComponent.queryByRole("textbox");
        expect(cityTextBox).toBeInDocument();
        expect(cityTextBox).toHaveClass("city");
    });
});
