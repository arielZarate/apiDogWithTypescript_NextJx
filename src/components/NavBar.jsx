import React from "react";
import Link from "next/link";
function NavBar() {
  return (
    <header className="flex bg-yellow-500 text-white rounded-md py-3  justify-between">
      <Link href="/">
        <h3 className="bg-slate-300 text-orange-700 w-30  rounded-lg text-3xl font-bold p-3">
          API DOG
        </h3>
      </Link>

      <ul className="font-bold text-slate-900 flex flex-row gap-3  justify-center  items-center mx-5">
        <Link
          href="/"
          className=" bg-slate-300 rounded-full text-pink-700 p-3 "
        >
          <li>Home</li>
        </Link>

        <Link
          href="/dog"
          className=" bg-slate-300 rounded-full p-3 text-cyan-900 "
        >
          <li>One Dog</li>
        </Link>
      </ul>
    </header>
  );
}

export default NavBar;
