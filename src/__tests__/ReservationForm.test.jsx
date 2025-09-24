import { render, screen } from "@testing-library/react";
import ReservationForm from "../pages/sections/ReservationForm";
import "@testing-library/jest-dom";

test("renders the reservation form heading", () => {
  render(<ReservationForm availableTimes={["17:00", "18:00"]} />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});
