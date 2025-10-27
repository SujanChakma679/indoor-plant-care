import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const PlantCard = (plant) => {
  const { user } = useContext(AuthContext); 
   const navigate = useNavigate();


  const handleViewDetails = () => {
    console.log(plant.data.plantId)
    if (user && user.email) {
      navigate(`/plants/${plant.data.plantId}`); 
    } else {
      navigate("/auth/login");
    }
  };
  return (
    
      <div className="p-6">
        <img
          src={plant.data.image}
          alt={plant.data.plantName}
          className="w-full h-48 object-cover p-4"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            {plant.data.plantName}
          </h3>
          <p className="text-sm text-gray-600">{plant.data.description}</p>
          <div className="flex justify-between items-center mt-2 px-2">
            <p className="text-green-700 font-bold">${plant.data.price}</p>
            <div className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-sm text-gray-600">{plant.data.rating}</span>
            </div>
          </div>

          
            <button
             onClick={() => handleViewDetails(plant.data.plantId)}
            className="block text-center mt-3 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            View Details
          </button>
          
        </div>
      </div>
   
  );
};

export default PlantCard;
