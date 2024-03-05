"use client";

import Link from "next/link";
import { SetStateAction, useState } from "react";

export default function TextField() {
  const [name, setName] = useState("");

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setName(e.target.value);
  };

  return (
    <>
      <input
        className="w-1/2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-800 text-lg"
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter name..."
      />
      <Link
        href={{ pathname: "/hehe", query: { name: name } }}
        // as="/hehe"
        className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md text-center text-lg"
      >
        Hehe
      </Link>
    </>
  );
}
