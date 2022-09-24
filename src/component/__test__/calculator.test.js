import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calculator from "../calculator";
test("Test numbers of button", () => {
  render(<Calculator />);
  const buttons = screen.queryAllByRole("button");
  expect(buttons).toHaveLength(0);
});
test("Test numbers of button", () => {
  render(<Calculator />);
  const button = screen.queryByText("AC");
  const inner = screen.queryByTestId("res");
  fireEvent.click(button, () => {
    inner.innerHTML = "";
  });
  expect(inner).toHaveTextContent("0");
});

test("Test percent button", () => {
  render(<Calculator />);
  const perbutton = screen.queryByText("%");
  const perinner = screen.queryByTestId("percent");
  fireEvent.click(perbutton, () => {
    perinner.innerHTML = "";
  });
  expect(perinner).toHaveTextContent("%");
});
test("Test +/- button", () => {
  render(<Calculator />);
  const plusorminbutton = screen.queryByText("+/-");
  const plusormininner = screen.queryByTestId("plusormin");
  fireEvent.click(plusorminbutton, () => {
    plusormininner.innerHTML = "";
  });
  expect(plusormininner).toHaveTextContent("+/-");
});
