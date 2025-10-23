import React, { useState, useEffect } from 'react';

const PlantCareTips = () => {
  const [plantsCare, setPlantsCare] = useState([]);

  useEffect(() => {
    fetch("/plantCareTips.json")
      .then((res) => res.json())
      .then((data) => setPlantsCare(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Plant Care Tips</h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {plantsCare.map((tip) => (
          <div
            key={tip.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
          >
            <div className="text-4xl">{tip.icon}</div>
            <h3 className="text-xl font-semibold mt-2">{tip.title}</h3>
            <p className="text-gray-600 mt-1">{tip.description}</p>
            <p className="text-green-700 font-semibold mt-2">{tip.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCareTips;
