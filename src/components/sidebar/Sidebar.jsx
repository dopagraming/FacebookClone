import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import "./sidebar.css";
import { Users } from "../../data";
import CloseFriend from "../closeFriend/CloseFriend";
function Sidebar() {
  return (
    <div
      className="sidebar hidden lg:block"
      style={{ flex: "1.5", height: "calc(100vh - 60px)" }}
    >
      <div className="sidebarWrapper p-4">
        <ul className="sidebarList">
          <li className="sidebarListItme flex jus">
            <RssFeedIcon />
            <p>Feed</p>
          </li>
          <li className="sidebarListItme flex">
            <ChatIcon />
            <p>Chats</p>
          </li>
          <li className="sidebarListItme flex">
            <SlowMotionVideoIcon />
            <p>Videos</p>
          </li>
          <li className="sidebarListItme flex">
            <GroupsIcon />
            <p>Groups</p>
          </li>
          <li className="sidebarListItme flex">
            <BookmarksIcon />
            <p>Bookmarks</p>
          </li>
          <li className="sidebarListItme flex">
            <HelpOutlineIcon />
            <p>Questions</p>
          </li>
          <li className="sidebarListItme flex">
            <WorkOutlineIcon />
            <p>Jpbs</p>
          </li>
          <li className="sidebarListItme flex">
            <EmojiEventsIcon />
            <p>Events</p>
          </li>
          <li className="sidebarListItme flex">
            <SchoolIcon />
            <p>Courses</p>
          </li>
          <li className="sidebarListItme">
            <button class="bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-100 dark:border-gray-700 rounded shadow">
              Show More
            </button>
          </li>
        </ul>
        <hr className="my-5 border-gray-300 dark:border-gray-700 border-3" />
        <ul className="sidebarFriendList">
          {Users.map((user, key) => (
            <CloseFriend key={key} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
