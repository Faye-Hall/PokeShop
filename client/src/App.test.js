import React from "react";
import { ListItemSecondaryAction } from "@mui/material";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import { useCart } from "./Components/Context";
import FourOFour from "./Components/FourOFour";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Account from "./Components/Account";
import NotLoggedIn from "./Components/NotLoggedIn";

test("renders App Without Crashing Number", () => {
  //renders app withot crashing
  render(<App />);
});

it("handles button clicks", function () {
  const { getByText } = render(<Home />);
  const h2 = getByText("Add to Cart");

  // click on the button
  fireEvent.click(getByText("Add"));

  // is the count different?
  expect(h2).toHaveTextContent("1");
  expect(h2).not.toHaveTextContent("0");
});

it("handles button clicks", function () {
  const { getByText } = render(<Home />);
  const h2 = getByText("Delete to Cart");

  // click on the button
  fireEvent.click(getByText("Delete"));

  // is the count different?
  expect(h2).toHaveTextContent("0");
  expect(h2).not.toHaveTextContent("1");
});

test("Tests The Change In Shopping Cart", () => {
  const { getByText } = render(<Cart />);

  // add onix to shopping cart
  fireEvent.change(input, { item: { value: [onix] } });

  //expect onix to be in shopping cart
  expect(input.value).toBe("onix");
});

test("Tests Render of 404 Page", () => {
  //renders fourofour withot crashing
  const route = "/wrong-route";

  renderWithRouter(<FourOFour />, { route });

  //expect to display fourofor
  expect(screen.getByTestId("location-display")).toHaveTextContent(route);
});

test("Tests Render of Unauthorized Page", () => {
  //renders notloggin withot crashing
  const user = " ";
  const route = "/wrong-route";

  //renderpage with no user
  renderWithRouter(<NotLoggedIn />, { route });

  //expect to display not logged in
  expect(screen.getByTestId("location-display")).toHaveTextContent(route);
});

test("Tests The Disabled Pointer Events", () => {
  const { getByPlaceholderText } = render(disabled);
  expect(getByPlaceholderText(/Click me/i).closest("button")).toHaveAttribute(
    "disabled"
  );
});

test("It should allow the user to be deleted", () => {
  const username = "test-user";

  // need to make a change so React registers "" as a change
  fireEvent.change(input, { user: { username: { username } } });
  //user value should be 0
  expect(input.value).toBe("");
});
