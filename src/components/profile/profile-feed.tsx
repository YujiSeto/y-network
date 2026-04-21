import { TweetItem } from "../tweet/tweet-item";
import { tweets } from "@/data/tweet";

export const ProfileFeed = () => {
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetItem key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};
