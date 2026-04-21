import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { user } from "@/data/user";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const isMe = true;

  return (
    <div>
      <GeneralHeader backHref="/">
        <div className="font-bold text-lg">{user.name}</div>
        <div className="text-xs text-gray-500">{user.postCount} posts</div>
      </GeneralHeader>
      <section className="border-b-2 border-b-gray-900">
        <div className="bg-gray-500 h-28 relative">
          {user.cover && (
            <Image src={user.cover} alt="Cover" fill className="object-cover" />
          )}
        </div>
        <div className="relative -mt-12 flex justify-between items-end px-6">
          <Image
            src={user.avatar}
            alt={user.name}
            width={96}
            height={96}
            className="rounded-full"
          />
          <div className="w-32">
            {isMe && (
              <Link href={`/${user.slug}/edit`}>
                <Button label="Edit Profile" size="md"></Button>
              </Link>
            )}
            {!isMe && <Button label="Follow" size="md"></Button>}
          </div>
        </div>
        <div className="px-6 mt-4">
          <div className="text-xl font-bold">{user.name}</div>
          <div className="text-gray-500">@{user.slug}</div>
          <div className="py-5 text-lg text-gray-500">{user.bio}</div>
          {user.link && (
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLink} className="size-5!" />
              <Link href={user.link} target="_blank" className="text-blue-300">
                {user.link}
              </Link>
            </div>
          )}
          <div className="my-5 flex gap-6">
            <div className="text-xl text-gray-500">
              <span className="text-white">{user.followingCount}</span>{" "}
              Following
            </div>
            <div className="text-xl text-gray-500">
              <span className="text-white">{user.followersCount}</span>{" "}
              Followers
            </div>
          </div>
        </div>
      </section>
      <ProfileFeed />
    </div>
  );
}
