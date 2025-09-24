import { useNavigate } from "react-router-dom";

function ReservationForm2({formData}) {
  const navigate = useNavigate();
  // const location = useLocation();

  // البيانات لي جاية من Form1
  // const formData = location.state || { time: "", date: "", occasion: "", guests : 1 };

  return (
    <div>
      <h3>Form 2</h3>
      <p>Smitk: {formData.time}</p>
      <p>Date: {formData.date}</p>
      <p>Occasion: {formData.occasion}</p>
      <p>Guests: {formData.guests}</p>
      <p>seating: {formData.seating}</p>

      <button onClick={() => navigate(-1)}>
        Back
      </button>
      <button>Submit Final</button>
    </div>
  );
}

export default ReservationForm2;
