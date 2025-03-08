import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Welcome() {
  return (
    <div className="flex bg-white rounded-2xl md:px-10 py-14 flex-col items-center justify-center">
      <Image
        src="/assets/images/auth/dashbord-logo.png"
        width={200}
        height={200}
        alt="logo"
        className="object-contain"
      />
      <h1 className="text-3xl md:text-5xl font-bold text-center mt-10">Welcome </h1>
      <h2 className="text-[#FF8553] md:text-4xl text-2xl font-bold text-center ">
        to the Free Shops App Admin Panel
      </h2>

      <p className="text-[#7F7F7F] text-xl mt-9 max-w-2xl text-center ">
        {" "}
        Manage and monitor all aspects of your app seamlessly from one place.
        Use the tools below to get started.
      </p>
      <Button className="mt-10 font-bold text-xl rounded-xl  bg-[#199FB1] hover:bg-[#168a99] text-center "size={"lg"}>
        {" "}
        <Link href="/profile-update">Get Start</Link>
      </Button>
    </div>
  );
}
