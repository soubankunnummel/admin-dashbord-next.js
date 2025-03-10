import React from "react";
import  LineGraph  from "./graph/line-graph";
import { BarGraph } from "./graph/bar-graph";

export default function Graphs() {
  return (
    <div className="flex lg:flex-row flex-col w-full  gap-4 ">
      <LineGraph />
      <BarGraph />
     
    </div>
  );
}
