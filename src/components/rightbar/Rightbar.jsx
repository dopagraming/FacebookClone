import "./rightbar.css";
import { Users } from "../../data";
import OnlineUsers from "../onlineUsers/OnlineUsers";
const Rightbar = ({ Profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assest/gift.png" alt="" />
          <span className="brithdayText">
            <b>Ayman Sad</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd my-2" src="assest/ad.png" alt="" />
        <hr className="my-5 border-gray-300 dark:border-gray-700 border-3" />
        <h4 className="rightbarTitle mb-2 fw-bold">Online Frineds</h4>
        <ul className="rightbarFriendList">
          {Users.map((user, key) => (
            <OnlineUsers key={key} user={user} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <div className="profileRightbar">
          <h4 className="rightbarTitle">User Informtaion</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem flex">
              <p className="rightbarInfoKey">City: </p>
              <p className="rightbarInfoValue">Gaza</p>
            </div>
            <div className="rightbarInfoItem flex">
              <p className="rightbarInfoKey">From: </p>
              <p className="rightbarInfoValue">Turkiye</p>
            </div>
            <div className="rightbarInfoItem flex">
              <p className="rightbarInfoKey">Relationship: </p>
              <p className="rightbarInfoValue">Married</p>
            </div>
          </div>
          <h4 className="rightbarTitle">Friends</h4>
          <ul className="profileRightbarFriends">
            {Users.map((user, key) => (
              <li key={key} className="profileRightbarFriend">
                <img
                  className="profileRightbarFriendImg"
                  src={user.profilePicture}
                  alt=""
                />
                <p className="profileRightbarFriendUsername">{user.username}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar hidden md:block" style={{ flex: "2.5" }}>
      <div className="rightbarWrapper">
        {Profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
