import React, { use } from "react";
import { FaStar } from "react-icons/fa";
import { NavLink, useParams } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
const plantsPromise = fetch("/plants.json").then((res) => res.json());

const Plants = () => {
  const plants = use(plantsPromise);
  const { id } = useParams();
  console.log(id)
  return (
    <section>
        
    <div className="w-11/12 mx-auto my-10">
      <h2 className="flex justify-center items-center font-bold text-3xl my-5">
        Top Rated Indoor Plants ({plants.length})
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div
            key={plant.plantId}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-48 object-cover p-4"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {plant.plantName}
              </h3>
              <p>{plant.description}</p>
              <div className="flex justify-between p-2">
                <p className="text-green-700 font-bold mt-1">${plant.price}</p>
                <div className="flex items-center mt-2">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600">{plant.rating}</span>
                </div>
              </div>
              <NavLink
                to="/profile"
                className="flex justify-center w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-center"
              >
                View Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Plants;
