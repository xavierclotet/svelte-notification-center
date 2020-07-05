import { fireEvent, render } from "@testing-library/svelte";
import App from "./App";

describe("App", () => {
  test("renders learn svelte link", async () => {
    const { container, getByText } = render(App);
    const input = container.querySelector("input");
    expect(getByText("Add new message"));
  });
});
