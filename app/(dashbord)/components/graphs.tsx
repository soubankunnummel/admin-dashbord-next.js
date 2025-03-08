import React from "react";
import LineGraph from "./graph/line-graph";
import Image from "next/image";

export default function Graphs() {
  return (
    <div className="flex w-full  gap-4 ">
      <LineGraph />
      <Image
        src="/assets/images/dashbord/bar-graph.png"
        width={500}
        height={500}
        alt="logo"
      />
    </div>
  );
}
