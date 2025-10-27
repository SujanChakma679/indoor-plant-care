
import React from "react";
import { useLoaderData, useParams, NavLink, useNavigate } from "react-router";

const PlantDetails = () => {
  const { id } = useParams();
  const plants = useLoaderData();
  const navigate = useNavigate();

  const plant = plants.find((p) => p.plantId == id); 

  if (!plant) return <p className="text-center mt-10">Plant not found </p>;

  return (
    <div className="flex justify-around items-center space-x-5 bg-white p-6 rounded-lg shadow-lg">
    <div>
        <img
        src={plant.image}
        alt={plant.plantName}
        className="h-[500px] object-cover rounded-md mb-4"
      />
    </div>
     <div>
         <h2 className="text-2xl font-bold text-green-700 mb-2">
        {plant.plantName}
      </h2>
      <p className="text-gray-700 mb-3">{plant.description}</p>
      <p className="text-green-600 font-semibold mb-2">Price: ${plant.price}</p>
      <p className="text-yellow-500 mb-2 font-semibold">⭐ {plant.rating}</p>
      <p className="text-green-600 font-semibold mb-2">Provider: {plant.providerName}</p>
      <p className="text-green-600 font-semibold mb-2">Care Level: {plant.careLevel}</p>
      <p className="text-green-600 font-semibold mb-2">Available Stock: {plant.availableStock}</p>

      <button
        onClick={() => navigate(`/plants/${plant.plantId}/book`)}
        className="block w-full text-center mb-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Book Consultation
      </button>

      <NavLink
        to="/plants"
        className="block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        Back to Plants
      </NavLink>
     </div>
    </div>
  );
};

export default PlantDetails;

