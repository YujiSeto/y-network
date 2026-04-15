"use client";

import { user } from "@/data/user";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Button } from "../ui/button";

export const TweetPost = () => {
  const handleImageUpload = () => {};

  const handlePostClick = () => {};

  return (
    <div className="flex gap-6 px-8 py-6 border-b-2 border-gray-900">
      <div>
        <Image
          src={user.avatar}
          alt={user.name}
          width={40}
          height={40}
          className="size-12 object-cover rounded-full"
          loading="eager"
        />
      </div>
      <div className="flex-1">
        <div
          className="min-h-14 outline-none text-lg text-white empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)]"
          contentEditable
          role="textbox"
          data-placeholder="What is happening?!..."
        ></div>
        <div className="flex justify-between items-center mt-2">
          <div onClick={handleImageUpload} className="cursor-pointer">
            <FontAwesomeIcon icon={faImage} className="size-6!" />
          </div>
          <div className="w-28">
            <Button label="Post" size="md" onClick={handlePostClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
