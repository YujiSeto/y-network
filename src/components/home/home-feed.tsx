import { TweetItem } from "../tweet/tweet-item";
import { tweet } from "@/data/tweet";

export const HomeFeed = () => {
  return (
    <div>
      {tweet.map((item) => (
        <TweetItem key={item.id} tweet={item} />
      ))}
    </div>
  );
};
