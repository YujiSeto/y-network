"use client";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export const NavLogout = () => {
  const router = useRouter();

  const handleLogout = () => {
    console.log("Logout triggered");
    router.push("/signin");
  };

  return (
    <div
      onClick={handleLogout}
      className={`cursor-pointer flex items-center gap-6 py-3 opacity-50 hover:opacity-100 transition-opacity`}
    >
      <FontAwesomeIcon
        icon={faArrowRightFromBracket}
        className="size-6! pointer-events-none"
      />
      <div className="text-lg pointer-events-none">Logout</div>
    </div>
  );
};
