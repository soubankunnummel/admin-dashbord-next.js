"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState({
    index: 0,
    route: "/",
  });

  const dashboardItems = [
    {
      name: "Dashboard",
      href: "/",
    },
    {
      name: "User Management",
      href: "/user-mangement",
    },
    {
      name: "Rating and Review",
      href: "/riting-review",
    },
    {
      name: "Settings",
      href: "/settings",
    },
    {
      name: "History",
      href: "/history",
    },
    {
      name: "All Bookings",
      href: "/all-bookings",
    },
    {
      name: "Push Notification",
      href: "/push-notification",
    },
    {
      name: "Transaction List",
      href: "/transaction-list",
    },
    {
      name: "Google Analytics",
      href: "/google-analytics",
    },
    // {
    //   name: "Multi-Currency",
    //   href: "/multi-currency",
    // },
    // {
    //   name: "Category",
    //   href: "/category",
    // },
    // {
    //   name: "Live Chat History",
    //   href: "/live-chat-history",
    // },
    // {
    //   name: "Package Plan",
    //   href: "/package-plan",
    // },
    // {
    //   name: "Referral History",
    //   href: "/referral-history",
    // },
    // {
    //   name: "Google Map",
    //   href: "/google-map",
    // },
  ];
  const router = useRouter();

  router.push(activeIndex.route);
  return (
    <div className="w-64 h-screen rounded-2xl bg-white flex flex-col p-4 space-y-2">
      {/* Logo */}
      <div className="text-2xl font-bold text-center py-4 bg-white rounded-xl ">
        Logo
      </div>

      {/* Sidebar Items */}
      {dashboardItems.map((item, index) => (
        <>
          <hr className="w-full my-5 bg-[#D8D8D8]  " />
          <div
            key={index}
            className={`flex items-center px-4 py-3 rounded-lg cursor-pointer text-[#199FB1]  font-medium hover:bg-[#199FB1] hover:text-[#FFF] transition ${
              activeIndex.index === index
                ? "bg-[#199FB1] text-[#FFF] font-semibold"
                : "bg-white text-[#199FB1]"
            } `}
            onClick={() =>
              setActiveIndex({
                index,
                route: item.href,
              })
            }
          >
            {/* <Link href={item.href}> */}
            {item.name}
            {/* </Link> */}
          </div>
        </>
      ))}
    </div>
  );
}
