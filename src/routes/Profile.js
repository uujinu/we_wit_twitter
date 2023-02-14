import React from "react";
import { authService } from "fbase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    signOut(authService);
    navigate("/");
  };

  return (
    <>
      <button onClick={onLogoutClick}>Log Out</button>
    </>
  );
};


export default Profile;