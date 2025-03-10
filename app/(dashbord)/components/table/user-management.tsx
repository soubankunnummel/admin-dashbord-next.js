"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import Action from "../action";
import Image from "next/image";

export default function UserManagement({
  users,
  isSerch = true,
}: {
  users: any;
  isSerch: boolean;
}) {
  const [open, setOpen] = useState(-1);

  const handleActoin = (index: number) => {
    setOpen(open === index ? -1 : index);
  };
  
  const actionRef = useRef<HTMLDivElement>(null);

  // Handle outside clicks to close the action modal
  useEffect(() => {
    function handleClickOutside(event : any) {
      if (open !== -1 && actionRef.current && !actionRef.current.contains(event.target)) {
        setOpen(-1);
      }
    }

    // Add event listener when a modal is open
    if (open !== -1) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Total users count (for demonstration - normally this would come from an API)

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      {/* User count display above the table */}

      {/* search bar */}

      {isSerch && (
        <div className="mb-10 flex items-center justify-end gap-4">
          <div className="flex relative">
            {" "}
            <Input
              className="bg-[#FFFFFF33] outline-none md:w-[457px] p-6 "
              placeholder="Search user by their name"
            />{" "}
            <div className="bg-[#199FB1] text-white px-8 cursor-pointer font-semibold p-2.5 text-xl rounded-xl absolute -right-1  ">
              {" "}
              Search
            </div>{" "}
          </div>
        </div>
      )}

      <div className="overflow-x-auto relative">
        {/* <p className="text-sm absolute top-9 text-[#7F7F7F] ">
          Showing {users.length} of {totalUsersCount} total users
        </p> */}
        <table className="table w-full sm:min-w-[300px]">
          <thead className="border-b-[2px] pb-3 border-b-[#199FB1]">
            <tr className="text-center">
              <th className="w-12 text-center">
                <input type="checkbox" className=" w-4 h-4" />
              </th>
              <th className="text-left">Name</th>
              <th className="text-center">User Deal</th>
              <th className="text-center">Block / Unblock</th>
              <th className="text-center">Ratings</th>
              <th className="text-center w-16">Actions</th>
            </tr>
          </thead>

          <tbody className="">
            {users.map((user: any, index: number) => (
              <tr
                key={user.id}
                className={cn(
                  "hover border-b   bg-red-70s0 ",
                  index % 2 == -0 ? "bg-[#F8F8F8] " : "bg-white"
                )}
              >
                <td className="text-center">
                  <input type="checkbox" className=" w-4 h-4 rounded-xl " />
                </td>
                <td className="text-left">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="rounded-full h-12 w-12">
                        <Image
                          src={user.avatar}
                          alt={user.name}
                          className="rounded-full"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                      <div className="text-sm opacity-50">{user.phone}</div>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="text-red-500 block">{user.sold} Sold</span>
                  <span className="text-green-500 block">
                    {user.bought} Bought
                  </span>
                </td>
                <td className="text-center">
                  <button
                    className={`btn ${
                      user.blocked
                        ? "bg-[#FF0838] text-white p-3 rounded-xl"
                        : "border border-[#FF8553] text-[#FF8553] px-6 py-2 rounded-xl"
                    } btn-sm`}
                  >
                    {user.blocked ? "Unblock" : "Block"}
                  </button>
                </td>
                <td className="text-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`text-xl ${
                        index < user.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </td>
                <td className="text-center relative">
                  <button
                    className="btn btn-ghost rotate-90 btn-sm"
                    onClick={() => handleActoin(index)}
                  >
                    ⋮
                  </button>
                  {open === index && (
                    <div className=" z-50  absolute right-12" ref={actionRef} >
                      <Action onClose={() => setOpen(-1)} />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <Paginations /> */}
      </div>
    </div>
  );
}
