import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Navbar from "../Components/Navbar/Navbar";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");

  const handleUpdateProfile = () => {
    if (!user) return;

    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        setMessage("Profile updated successfully!");
      })
      .catch((err) => {
        console.error(err);
        setMessage("Failed to update profile.");
      });
  };

  return (
    <section>
        <Navbar></Navbar>
        <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <div className="flex flex-col items-center mb-4">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName || "User"}
            className="w-24 h-24 rounded-full object-cover mb-2"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-2">
            <span className="text-xl font-bold text-gray-600">No Photo</span>
          </div>
        )}
        <p className="text-lg font-semibold">{user?.displayName || "User"}</p>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Display Name"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Photo URL"
          className="input input-bordered w-full"
        />
        <button
          onClick={handleUpdateProfile}
          className="btn btn-green mt-2"
        >
          Update Profile
        </button>
      </div>

      {message && <p className="text-green-600 mt-2">{message}</p>}
    </div>
    </section>
  );
};

export default Profile;
