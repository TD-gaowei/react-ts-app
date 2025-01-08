import App from "../App";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

describe("App component", () => {
  it("renders Vite and React logos", () => {
    const { getByAltText } = render(<App />);
    const viteLogo = getByAltText("Vite logo");
    const reactLogo = getByAltText("React logo");
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  it("renders the heading", () => {
    const { getByText } = render(<App />);
    const heading = getByText("Vite + React");
    expect(heading).toBeInTheDocument();
  });

  it("renders the button and increments count on click", async () => {
    const { getByRole } = render(<App />);
    const button = getByRole("button", { name: /count is 0/i });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(button).toHaveTextContent("count is 1");
  });

  it("renders the documentation link text", () => {
    const { getByText } = render(<App />);
    const docsText = getByText(
      /Click on the Vite and React logos to learn more/i
    );
    expect(docsText).toBeInTheDocument();
  });
});
