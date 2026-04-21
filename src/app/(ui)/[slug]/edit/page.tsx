import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/text-area";
import { user } from "@/data/user";
import { faCamera } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <GeneralHeader backHref={`/${user.slug}`}>
        <div className="font-bold text-lg">Edit Profile</div>
      </GeneralHeader>
      <section className="border-b-2 border-b-gray-900">
        <div className="flex justify-center items-center gap-4 bg-gray-500 h-28 relative">
          {user.cover && (
            <Image src={user.cover} alt="Cover" fill className="object-cover" />
          )}
          <div className="relative cursor-pointer bg-black/80  flex justify-center items-center size-12 rounded-full">
            <FontAwesomeIcon icon={faCamera} className="size-6!" />
          </div>
          <div className="relative cursor-pointer bg-black/80  flex justify-center items-center size-12 rounded-full">
            <FontAwesomeIcon icon={faXmark} className="size-6!" />
          </div>
        </div>
        <div className="relative -mt-12 px-6">
          <Image
            src={user.avatar}
            alt={user.name}
            width={96}
            height={96}
            className="rounded-full"
          />
          <div className="-mt-24 size-24 flex justify-center items-center ">
            <div className="relative cursor-pointer bg-black/80  flex justify-center items-center size-12 rounded-full">
              <FontAwesomeIcon icon={faCamera} className="size-6!" />
            </div>
          </div>
        </div>
      </section>
      <section className="p=6 flex flex-col gap-4">
        <label>
          <p className="text-lg text-gray-500 mb-2">Name</p>
          <Input value={user.name} placeholder="Type your name" />
        </label>
        <label>
          <p className="text-lg text-gray-500 mb-2">Bio</p>
          <TextArea value={user.bio} placeholder="Type your bio" rows={4} />
        </label>
        <label>
          <p className="text-lg text-gray-500 mb-2">Website</p>
          <Input value={user.link} placeholder="Type your website" />
        </label>

        <Button label="Save Changes" size="lg" />
      </section>
    </div>
  );
}
