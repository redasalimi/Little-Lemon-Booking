import React from "react";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import restaurant from '/assets/imgs/restaurant200s.jpg'
import restaurant_B from '/assets/imgs/restaurant-b200.jpg'
import restaurantFood from '/assets/imgs/restauranfood200.jpg'

export default function ReservationForm({ availableTimes, onDateChange, formData, setFormData }) {
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setFormData({ ...formData, date: newDate });
    onDateChange(newDate);
  };

  return (
<>
    <section className="w-100 py-5" style={{ backgroundColor: "#495E57" }}>
      <div className="container">
        <h1 className="text-light mb-4 text-center" id="main-heading">
          Reservations
        </h1>

        <form className="row g-4">
          {/* Seating */}
          <div className="col-12 text-light d-flex gap-4 justify-content-center">
            <div>
              <input
                type="radio"
                id="Indoor"
                name="seating"
                value="Indoor"
                checked={formData.seating === "Indoor"}
                onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
              />
              <label htmlFor="Indoor" className="ms-2">
                Indoor seating
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="Outdoor"
                name="seating"
                value="Outdoor"
                checked={formData.seating === "Outdoor"}
                onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
              />
              <label htmlFor="Outdoor" className="ms-2">
                Outdoor seating
              </label>
            </div>
          </div>

          {/* Date */}
          <div className="col-12 col-md-6">
            <label htmlFor="res-date" className="form-label text-light">
              Date
            </label>
            <input
              className="form-control fw-bold"
              type="date"
              id="res-date"
              value={formData.date}
              onChange={handleDateChange}
            />
          </div>

          {/* Time */}
          <div className="col-12 col-md-6">
            <label htmlFor="res-time" className="form-label text-light">
              Time
            </label>
            <select
              className="form-select fw-bold"
              id="res-time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            >
              {availableTimes.map((t) => (
                <option key={t} value={t} className="fw-bold">
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Guests */}
          <div className="col-12 col-md-6">
            <label htmlFor="guests" className="form-label text-light">
              Number of diners
            </label>
            <input
              className="form-control fw-bold"
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            />
          </div>

          {/* Occasion */}
          <div className="col-12 col-md-6">
            <label htmlFor="occasion" className="form-label text-light">
              Occasion
            </label>
            <select
              id="occasion"
              value={formData.occasion}
              onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
              className="form-select fw-bold"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          
        </form>
      </div>
    </section>
    <section className="container my-5 py-5">
            <div className="row justify-content-center text-center g-4">
                {/* Image 1 */}
                <div className="col-12 col-sm-6 col-md-4">
                    <img
                        src={restaurant}
                        className="img-fluid rounded"
                        alt="Restaurant"
                        style={{ maxWidth: "200px" }}
                    />
                </div>

                {/* Image 2 */}
                <div className="col-12 col-sm-6 col-md-4">
                    <img
                        src={restaurantFood}
                        className="img-fluid rounded"
                        alt="Food"
                        style={{ maxWidth: "200px" }}
                    />
                </div>

                {/* Image 3 */}
                <div className="col-12 col-sm-6 col-md-4">
                    <img
                        src={restaurant_B}
                        className="img-fluid rounded"
                        alt="Another"
                        style={{ maxWidth: "200px" }}
                    />
                </div>
            </div>
            {/* Button */}
            <div className="col-12 text-center mt-5">
                <button
                style={{width: '200px', backgroundColor : '#f4ce14'}}
                type="button"
                onClick={() => navigate("/reservations/confirme-reservation", { state: formData })}
                className="btn fw-bold"
                >
                Reserve
                </button>
            </div>
    </section>
</>
  );
}
