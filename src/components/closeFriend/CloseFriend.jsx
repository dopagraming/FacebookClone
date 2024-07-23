import React from "react";

const CloseFriend = ({ user }) => {
  return (
    <li className="sidebarFreind">
      <img src={user.profilePicture} alt="" />
      <p className="sidebarFriendName">{user.username}</p>
    </li>
  );
};

export default CloseFriend;
