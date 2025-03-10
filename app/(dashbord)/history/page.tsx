import React from "react";
import { HistoryTable } from "../components/table/all-bookings";
 

export default function History() {
 ;
  return (
    <div>
      <p className="text-xl text-[#F8F8F8] py-3 ">History</p>
      {/* <HistoryTable users={users} isSerch /> */}
      <HistoryTable/>
    </div>
  );
}
