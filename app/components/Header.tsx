"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Header() {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("onshape");
    }
  }, [status]);

  console.log(session);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white bg-opacity-10 backdrop-blur-lg z-10"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl text-white">
          OnShape Plugin
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link
            href="#features"
            className="text-white hover:text-pink-200 transition duration-300"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-white hover:text-pink-200 transition duration-300"
          >
            How It Works
          </Link>
          <Link
            href="#"
            className="text-white hover:text-pink-200 transition duration-300"
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {status === "loading" ? (
            <p className="text-white">Loading...</p>
          ) : session?.authenticated ? (
            <div className="flex items-center space-x-3">
              <p className="text-white">Welcome, {session.user?.name}</p>
              {/* <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
              >
                Logout
              </button> */}
            </div>
          ) : (
            // <button
            //   onClick={() => signIn("onshape")}
            //   className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            // >
            //   Login with Onshape
            // </button>
            ""
          )}
        </div>
      </nav>
    </motion.header>
  );
}
