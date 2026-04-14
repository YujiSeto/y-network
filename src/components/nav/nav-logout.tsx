"use client";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export const NavLogout = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/signin");
  };

  return (
    <div
      onClick={handleLogout}
      className={`cursor-pointer flex items-center gap-6 py-3 opacity-50 hover:opacity-100 transition-opacity`}
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} className="size-6" />
      <div className="text-lg">Logout</div>
    </div>
  );
};
