import React from "react";
import { HistoryTable } from "../components/table/all-bookings";
 

export default function History() {
  const users = [
    {
      id: 1,
      name: "Yeray Rosalos",
      email: "yerayrosales@gmail.com",
      phone: "+91-098765432",
      avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      action: "Log in",
      bought: 1,
      date_time: 'July 3, 2023 12:29 pm',
    },
    {
      id: 2,
      name: "Talah Cotton",
      email: "talahcotton2@gmail.com",
      phone: "+91-098765432",
      avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
      action: "Booked a product",
      bought: 5,
      date_time: 'July 3, 2023 12:29 pm',

       
    },
    
  ];
  return (
    <div>
      <p className="text-xl text-[#F8F8F8] py-3 ">History</p>
      {/* <HistoryTable users={users} isSerch /> */}
      <HistoryTable/>
    </div>
  );
}
