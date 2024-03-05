"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Hehe() {
  const searchParams = useSearchParams();
  let name = searchParams.get("name");
  const router = useRouter();
  let hehe = "F*ck You";

  if (name === "Ishita" || name === "ishita") {
    hehe = "Hehehehehe";
    name = "";
  }

  const handleClick = () => {
    router.back();
  };

  return (
    <div className="flex min-h-screen flex-row items-center justify-center">
      <button className="focus:outline-none" onClick={handleClick}>
        <img
          src="/home.svg"
          alt="Home Icon"
          className="absolute top-0 left-0 h-20 w-20 m-4"
        />
      </button>
      <div className="flex-1"></div>
      <div className="flex flex-col flex-1 items-center text-2xl md:text-5xl">
        <p>{hehe}</p>
        <p>{name}</p>
        {/* <p className="flex flex-col text-3xl md:text-5xl">F*ck you {name}</p> */}
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
