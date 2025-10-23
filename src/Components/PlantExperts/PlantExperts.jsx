import React from "react";
import expert1 from '../../assets/expert-1.jpg'
import expert2 from '../../assets/expert-2.jpg'
import expert3 from '../../assets/expert-3.jpg'
import expert4 from '../../assets/expert-4.jpg'

const experts = [
  {
    name: "Alice Green",
    specialization: "Indoor Plants Specialist",
    image: expert1,

  },
  {
    name: "Bob Leaf",
    specialization: "Succulent & Cactus Care",
    image: expert2,
  },
  {
    name: "Clara Bloom",
    specialization: "Herbs & Vegetables",
    image: expert3,
  },
  {
    name: "David Root",
    specialization: "Ornamental Plants",
    image: expert4,
  },
];

const PlantExperts = () => {
  return (
    <section className="py-12 bg-green-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Green Experts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-40 h-40 object-cover mb-2"
              />
              <h3 className="text-xl font-semibold">{expert.name}</h3>
              <p className="text-green-700">{expert.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantExperts;
