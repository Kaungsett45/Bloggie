"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Login from "../login/page";

export default function Home() {

    const { data: session, status } = useSession();

    return(

        <>
        <h1>Welcome to Bloggie</h1>
        {session ? (
        <div className="flex items-center gap-4">
            <img src={session.user.image} alt="Profile" className="w-8 h-8 rounded-full" />
            <span>{session.user.name}</span>
            <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 rounded-md"
            >
            Sign Out
            </button>
        </div>
        ) : (
                <Login/>
        )}



        </>
    )
}


  
  