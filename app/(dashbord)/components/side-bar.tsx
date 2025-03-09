"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

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
      // {
    //   name: "Google Analytics",
    //   href: "/google-analytics",
    // },
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
  const [open, setOpen] = useState(false);
  

  // router.push(activeIndex.route);
  return (
    <>
    {/* Sidebar */}
    <div
      className={cn(
        "w-64 h-full fixed top-0 left-0 bg-white z-40 p-4 space-y-2 rounded-xl transition-transform duration-300",
        open ? "translate-x-0" : "-translate-x-full",
        "md:translate-x-0 md:static md:block"
      )}
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-center py-4 bg-white rounded-xl">
        Logo
      </div>

      {/* Sidebar Items */}
      {dashboardItems.map((item, index) => (
        <React.Fragment key={index}>
          <hr className="w-full my-5 bg-[#D8D8D8]" />
          <Link href={item.href} passHref>
            <div
              className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium hover:bg-[#199FB1] hover:text-white transition ${
                activeIndex === index
                  ? "bg-[#199FB1] text-white font-semibold"
                  : "text-[#199FB1] bg-white"
              }`}
              onClick={() => {
                setActiveIndex(index);
                setOpen(false); // Close sidebar on selection (mobile)
              }}
            >
              {item.name}
            </div>
          </Link>
        </React.Fragment>
      ))}
    </div>

    {/* Toggle Button for Mobile */}
    <IoReorderThreeOutline
      className="text-3xl text-[#199FB1] md:hidden fixed top-5 left-5 z-50 cursor-pointer"
      onClick={() => setOpen(!open)}
    />
  </>
  );
}
