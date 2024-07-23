import { useState } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../data";
const Post = ({ post }) => {
  const [count, setcount] = useState(post?.like);
  const [bool, setBool] = useState(true);
  const counter = () => {
    if (bool) {
      setcount(count + 1);
      setBool(!bool);
    } else {
      setcount(count - 1);
      setBool(!bool);
    }
  };
  console.log(post?.userId);
  console.log(Users[1]);
  return (
    <div className="post w-100 my-5 p-3 shadow-lg rounded">
      <div className="postWrapper">
        <div className="postTop flex justify-between ">
          <div className="topRight flex items-center cursor-pointer">
            <img
              className="userImg rounded-full me-2 "
              src={Users[post?.userId + 1]?.profilePicture}
              alt=""
            />
            <p className="userName me-2">{Users[post?.userId + 1]?.username}</p>
            <span className="timeAgo">{post?.date}</span>
          </div>
          <div className="topLeft">
            <MoreVertIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="postCenter mt-3 rounded">
          <img className="postImg rounded" src={post?.photo} alt="" />
        </div>
        <div className="postBottom mt-3">
          <div className="bottomRight flex items-center justify-between">
            <div className="flex">
              <img src="/assest/like/like.png" alt="" onClick={counter} />
              <img src="/assest/like/heart.png" alt="" onClick={counter} />
              <p>{count} People Like It</p>
            </div>
            <p>{post?.comment} comment</p>
          </div>
          <div className="bottomLeft"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
