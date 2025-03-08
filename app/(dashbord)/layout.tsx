import Image from "next/image";
import React from "react";
import Sidebar from "./components/side-bar";
import NavBar from "./components/nave-bar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-auto bg-[#EAEAEB]  z-50 relative">
      <Image
        src="/assets/images/dashbord/dashbord-banner.png"
        width={1000}
        height={1000}
        alt="logo"
        className=" absolute top-0 -z-50 w-full "
      />
      <div className="flex   gap-4 md:px-32 md:py-10 w-full  ">
        <Sidebar />
        <div className="flex flex-col w-full h-full ">
          <NavBar />

          {children}
        </div>
      </div>
    </div>
  );
}
