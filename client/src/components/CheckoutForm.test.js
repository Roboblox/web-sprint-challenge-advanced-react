import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText, getByRole, getByTestId } = render(<CheckoutForm />);
  const header = getByText(/checkout form/i);
  // Assert that the header is displayed
  // I expect the header to be in the document
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByText, getByRole, getByTestId, getByLabelText } = render(
    <CheckoutForm />
  );
  const firstNameInput = getByLabelText(/First Name:/i);
  const lastNameInput = getByLabelText(/Last Name:/i);
  const addressInput = getByLabelText(/Address:/i);
  const cityInput = getByLabelText(/City:/i);
  const stateInput = getByLabelText(/State:/i);
  const zipInput = getByLabelText(/Zip:/i);
  fireEvent.change(firstNameInput, { target: { value: "aa" } });
  fireEvent.change(lastNameInput, { target: { value: "bb" } });
  fireEvent.change(addressInput, { target: { value: "cc" } });
  fireEvent.change(cityInput, { target: { value: "zz" } });
  fireEvent.change(stateInput, { target: { value: "yye" } });
  fireEvent.change(zipInput, { target: { value: "ff" } });

  const submitButton = getByRole("button");
  fireEvent.click(submitButton);
  const successMessage = getByTestId("successMessage");
  expect(successMessage).toBeVisible();
  //   expect(firstNameInput.textContent).toBe(/ming/i);
  expect(getByText(/aa/i)).toBeInTheDocument();
  expect(getByText(/bb/i)).toBeInTheDocument();
  expect(getByText(/cc/i)).toBeInTheDocument();
  expect(getByText(/zz/i)).toBeInTheDocument();
  expect(getByText(/yye/i)).toBeInTheDocument();
  expect(getByText(/ff/i)).toBeInTheDocument();
});
