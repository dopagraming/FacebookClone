import "./online.css";
const OnlineUsers = ({ user }) => {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarFriendContainer">
          <img className="rightbarProfilImg" src={user.profilePicture} alt="" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </div>
  );
};

export default OnlineUsers;
