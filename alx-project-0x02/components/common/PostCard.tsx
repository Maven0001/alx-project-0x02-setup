import { type PostProps } from "../../interfaces";

const Posts: React.FC<PostProps> = ({ title, content, userId, body }) => {
  return (
    <div>
      <h1>This is the {title}</h1>
      <p>The man is a goat {content}</p>
      <p>UserId:{userId}</p>
      <p>{body}</p>
    </div>
  );
};

export default Posts;
