import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbard from "../../components/Navbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
const Profile = ({ darkTheme, setDarkTheme }) => {
  return (
    <div>
      <Navbard darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div className="HomeContainer flex">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <img className="profileCoverImg" src="assest/post/3.jpeg" alt="" />
            <img className="profileUserImg" src="assest/person/3.jpeg" alt="" />
            <h2 className="profileUsername">Caroline Ahmet</h2>
          </div>
          <div className="profileRightBottom flex">
            <Feed />
            <Rightbar Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
