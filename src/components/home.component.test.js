import { render,screen } from "@testing-library/react";
import HomeComponent from "./home.component";

describe("Home Component", () => {
    test("Input fiel test", () => {
        render(<HomeComponent />);
        const inputelement=screen.getByRole("textbox");
        expect(inputelement).toBeInTheDocument();
    });
})