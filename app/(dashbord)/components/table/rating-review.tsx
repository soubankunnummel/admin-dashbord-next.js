import React, { use } from "react";
import Paginations from "../pagination";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function RatingAndReviewTable({ users }: any) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      {/* User count display above the table */}

      {/* search bar */}

      {
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
      }

      <div className="overflow-x-auto relative">
        {/* <p className="text-sm absolute top-9 text-[#7F7F7F] ">
        Showing {users.length} of {totalUsersCount} total users
      </p> */}
        <table className="table w-full">
          <thead className="border-b-[2px] pb-3 border-b-[#199FB1]">
            <tr className="text-center">
              <th className="w-12 text-center">
                <input type="checkbox" className=" w-4 h-4" />
              </th>
              <th className="text-left">Name</th>
              <th className="text-center">Comment </th>
              <th className="text-center">Ratings</th>
              <th className="text-center">Date & Time</th>
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
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="rounded-full"
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
                <td>
                  <p> {user.comment} </p>
                </td>

                {/* rating */}
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

                <td className="text-center">
                  <p>{user.date_time} </p>
                </td>

                <td className="text-center">
                  {!user.actioni_done && (
                    <div className="flex gap-3">
                      <Image
                        src={"/assets/icons/tik.png"}
                        width={35}
                        height={35}
                        alt="Logo"
                      />
                      <Image
                        src={"/assets/icons/cross.png"}
                        width={35}
                        height={35}
                        alt="Logo"
                      />
                    </div>
                  )}
                  {user.actioni_done && (
                    <>
                      {user.aproved ? (
                        <button className="bg-[#0FD43E] p-2 rounded-xl text-white text-lg  ">
                          Approved
                        </button>
                      ) : (
                        <button className="bg-[#FF0838] p-2 px-3 rounded-xl text-white text-lg ">
                          {" "}
                          Declined
                        </button>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Paginations />
      </div>
    </div>
  );
}
