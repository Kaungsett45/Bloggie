
"use client"

import { useSession ,signOut } from "next-auth/react";
import { useState } from "react";
export default function profile(){
    const { data: session, status } = useSession();

    const handleSignOut =()=>{
        signOut({ callbackUrl: "/" });
      };



      const [isDropdownOpen, setDropdownOpen] = useState(false);

      const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
      };


    return(
        <>
  <div className="relative">
      {/* Avatar Button */}
      <img
        id="avatarButton"
        type="button"
        className="w-10 h-10 rounded-full cursor-pointer"
        src={session?.user?.image || "/default-avatar.png"}
        alt="User dropdown"
        onClick={toggleDropdown} // Toggle dropdown on click
      />

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          id="userDropdown"
          className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{session?.user?.name || "Guest User"}</div>
        
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Settings
              </a>
            </li>
           
          </ul>
          <div className="py-1">
            <button
              onClick={() => handleSignOut()}
              className="w-full text-left block px-4 py-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-600 dark:text-white"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
   </>
    )
}