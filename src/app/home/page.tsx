"use client"

import { useSession } from "next-auth/react";
import Image from "../../../node_modules/next/image";
import { Roboto } from 'next/font/google';
import { FaSearch } from "react-icons/fa";

import Profile from "../components/profile";
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  const { data: session, status } = useSession();

 
  return (
    <>
  

         {session ? (
          <>
           <div className={`mt-2 ${roboto.className}  p-2 px-2 rounded-md flex items-center justify-between`}>
          
           <h1 className="text-black font-semibold text-lg ">Bloggie</h1>
          
          {/* Search Bar with Icon */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search user..." 
              className="text-black border-black border-2  p-2 pl-10 rounded-md focus:outline-none  w-64"
            />
            {/* Search Icon */}
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <Profile></Profile>
         <div>
          
         
          </div>
           </div>
           {/**Post create  */}
          <div className="mt-2 flex justify-center">
            <button className="font-semibold text-black border-2 border-black px-4 py-2 rounded-full mx-2 shadow-lg">Create Blog</button>
          
          </div>
          
</>   ) : (
        <p>You are not logged in.</p>
      )}
    </>
  );
}
