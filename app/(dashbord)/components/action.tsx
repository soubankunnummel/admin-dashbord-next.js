import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function Action({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="flex bg-[#D9D9D9] flex-col w-[200px] relative  rounded-xl py-8 px-5  ">
        <RxCross2 className="absolute top-2 left-2 text-[#7F7F7FA8] "  onClick={onClose}/>
        <button className="bg-[#199FB1] text-base font-normal w-full text-white p-3 rounded-xl ">
          {" "}
          View Profile
        </button>
        <button className="text-[#FF0838] text-base font-normal mt-5 ">
          {" "}
          Delete User
        </button>
      </div>
    </>
  );
}
