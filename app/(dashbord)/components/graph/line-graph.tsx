import Image from "next/image";
import React from "react";

export default function LineGraph() {
  return (
    <div className="grid grid-cols-2 gap-6 mb-5 ">
      <Image
        src="/assets/images/dashbord/graph-1.png"
        width={300}
        height={300}
        alt="logo"
      />
      <Image
        src="/assets/images/dashbord/graph-1.png"
        width={300}
        height={300}
        alt="logo"
      />
      <Image
        src="/assets/images/dashbord/graph-1.png"
        width={300}
        height={300}
        alt="logo"
      />
      <Image
        src="/assets/images/dashbord/graph-1.png"
        width={300}
        height={300}
        alt="logo"
      />
    </div>
  );
}
