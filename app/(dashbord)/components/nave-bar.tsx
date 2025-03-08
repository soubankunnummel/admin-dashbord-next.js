import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex justify-between border-b-white border-b pb-5 w-full items-start  ">
      <div className="flex relative">
        {" "}
        <Input className="bg-[#FFFFFF33] outline-none md:w-[397px] p-5 " />{" "}
        <div className="bg-[#199FB1] text-white px-8 cursor-pointer p-2.5 rounded-xl absolute -right-1  ">
          {" "}
          <Search />
        </div>{" "}
      </div>

      <div className="flex gap-24 justify-center items-center">
        <Image
          src="/assets/images/dashbord/bell.png"
          width={30}
          height={30}
          alt="logo"
        />
        {/* <div className="flex justify-center items-center">profile</div> */}
        <Image
          src="/assets/images/dashbord/user.png"
          width={45}
          height={45}
          alt="logo"
        />
      </div>
    </nav>
  );
}
