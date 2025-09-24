import React, { useReducer, useState } from "react";
import ReservationForm from "./sections/ReservationForm";
import { fetchAPI } from "./sections/api";
import { Route, Routes, Outlet } from "react-router-dom";
import ReservationForm2 from "./sections/ReservationForm2";

// Function fiha times
function initializeTimes() {
  const today = new Date();
  return fetchAPI(today)
}

// To Change the time depend on the date
function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
}

const Reservations = () => {
    
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [formData, setFormData] = useState({ time: "", date: "", guests : 1, occasion: "Birthday", seating : 'Indoor' });


    const handleDateChange = (date) => {
        const times = fetchAPI(new Date(date));
        dispatch({ type: "UPDATE_TIMES", payload: times });
    };

     return (
    <>
    <Routes>
        <Route
          path=""
          element={
            <ReservationForm
              availableTimes={availableTimes}
              onDateChange={handleDateChange}
              formData={formData}
              setFormData={setFormData}
            />
          }
        />
        <Route
          path="/confirme-reservation"
          element={<ReservationForm2 formData={formData} />}
        />
      </Routes>
      <Outlet />
    </>
  );
};

export default Reservations;
