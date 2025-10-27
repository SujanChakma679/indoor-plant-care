import React, { Suspense, use } from "react";
import PlantSwiper from "../Swiper/PlantSwiper";
import PlantCareTips from "../PlantCareTips/PlantCareTips";
import PlantExperts from "../PlantExperts/PlantExperts";
import Plants from "../../Plants/Plants";

import { FaStar } from "react-icons/fa";
import PlantCard from "../../Pages/PlantCard";

const plantPromise = fetch("plants.json").then((res) => res.json());

const Home = () => {
  const plants = use(plantPromise);
  
  return (
    <div>
      <section className="my-5">
        <PlantSwiper></PlantSwiper>
      </section>

     <section>

      <h2 className="text-3xl font-bold text-center my-5 text-green-700">
        Top Rated Indoor Plants
      </h2>
      {/* <Suspense>
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
                           <p className="text-sm text-gray-600">{plant.description}</p>
                           <div className="flex justify-between items-center mt-2">
                             <p className="text-green-700 font-bold">${plant.price}</p>
                             <div className="flex items-center">
                               <FaStar className="text-yellow-400 mr-1" />
                               <span className="text-sm text-gray-600">{plant.rating}</span>
                             </div>
                           </div>
           
                           <button
                            //  onClick={() => handleViewDetails(plant.plantId)}
                             className="block text-center mt-3 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                           >
                             View Details
                           </button>
                         </div>
                       </div>
                     ))}
                   </div>
           </Suspense> */}

      <Suspense fallback={<p>Loading plants...</p>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {plants.map((plant) => (
            <PlantCard key={plant.id} data={plant} />
          ))}
        </div>
      </Suspense> 
 
     </section>

      <section>
        <PlantCareTips></PlantCareTips>
      </section>

      <section>
        <PlantExperts></PlantExperts>
      </section>
    </div>
  );
};

export default Home;
