import React from "react";
import { TotalSellers } from "./total-sellers";
import { ActiveUsers } from "./active-users";
import { TotalAds } from "./total-ads";
import { TotalBuyers } from "./total-buyers";

export default function LineGraph() {
  return (
    <div className="grid lg:w-1/2  grid-cols-2 gap-6 mb-5 ">
      <ActiveUsers/>
      <TotalBuyers/>
      <TotalAds/>
      <TotalSellers/>
    </div>
  );
}
