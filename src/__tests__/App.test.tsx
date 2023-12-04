import '@testing-library/jest-dom';
import { render } from "@testing-library/react"
import App from "../app/App"

describe("App", () => {
  it("should run without crashing", () => {
    render(<App />);
  });
});