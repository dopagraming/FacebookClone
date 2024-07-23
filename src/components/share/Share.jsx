import "./share.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
const Share = () => {
  return (
    <div className="share w-100 bg-gray-200 dark:bg-gray-800 p-3 rounded shadow-md dark:shadow-xl">
      <div className="shareWrapper">
        <div className="shareTop w-100 flex items-center">
          <img
            className="shareImg"
            src="./assest/person/1.jpeg"
            alt=""
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <textarea
            className="shareText w-100 ms-3 dark:text-white"
            placeholder="What's in your mind Dopa ?"
          />
        </div>
        <hr className="my-5 border-gray-300" />
        <div className="shareBottom flex justify-between">
          <div className="shareOptions flex justify-between">
            <div className="shareOption flex items-center cursor-pointer me-4">
              <PermMedia className="me-1 text-green-400" />
              <span>Photo Or Video</span>
            </div>
            <div className="shareOption flex items-center cursor-pointer me-4">
              <PeopleAltIcon className="me-1 text-blue-500" />
              <span>Tag</span>
            </div>
            <div className="shareOption flex items-center cursor-pointer me-4">
              <Room className="me-1 text-orange-400" />
              <span>Loction</span>
            </div>
            <div className="shareOption flex items-center cursor-pointer me-4">
              <EmojiEmotions className="me-1 text-yellow-400" />
              <span>Feel</span>
            </div>
          </div>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
