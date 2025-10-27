import React, { useState } from "react";
import { useNavigate } from "react-router";

import toast from "react-hot-toast";

const PlantBooking = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking info:", formData);

    toast.success("Booked successfully!");
    alert("Successfully booked ");
//     <div className="toast toast-top toast-end">
//   <div className="alert alert-success">
//     <span>Booked successfully.</span>
//   </div>
// </div>

    
    navigate("/plants");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-green-600 mb-4">
       PLease fill up the Form for Consultation
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input w-full mb-3"
          required
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input w-full mb-3"
          required
        />

        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input w-full mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default PlantBooking;
