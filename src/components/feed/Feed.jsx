import Share from "../share/Share";
import Post from "../../components/post/Post";
import { Posts } from "../../data";
const Feed = () => {
  return (
    <div className="feed p-4" style={{ flex: "5.5" }}>
      <div className="feedWrapper">
        <Share />
        {Posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
        <Post />
      </div>
    </div>
  );
};

export default Feed;
