import { TweetItem } from "@/components/tweet/tweet-item";
import { TweetPost } from "@/components/tweet/tweet-post";
import { GeneralHeader } from "@/components/ui/general-header";
import { tweets } from "@/data/tweet";

export default function Page() {
  return (
    <div>
      <GeneralHeader backHref="/">
        <div className="font-bold text-lg">Back</div>
      </GeneralHeader>
      <div className="border-t-2 border-gray-900">
        <TweetItem tweet={tweets[0]} />

        <div className="border-y-8 border-gray-900">
          <TweetPost/>
        </div>

        {tweets.map((tweet) => (
          <TweetItem key={tweet.id} tweet={tweet} hideComments />
        ))}
      </div>
    </div>
  );
}