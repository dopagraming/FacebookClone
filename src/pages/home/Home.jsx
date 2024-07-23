import Navbard from "../../components/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./style.css";
const Home = ({ darkTheme, setDarkTheme }) => {
  return (
    <div>
      <Navbard darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div className="HomeContainer flex">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};
export default Home;
