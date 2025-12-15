import React from "react";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <h1 className="font-extrabold text-5xl text-center">My Profile</h1>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <img className="rounded-2xl " src={user.photoURL} alt="user Photo" />
        <h2 className="text-4xl font-bold">{user.displayName}</h2>
        <h2 className="text-2xl font-semibold">{user.email}</h2>
      </div>
    </div>
  );
};

export default MyProfile;
