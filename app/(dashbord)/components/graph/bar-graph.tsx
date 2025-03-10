"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Month } from "./month";
import { Year } from "./year";
import { TwoYear } from "./two-year";
import { ThreeYear } from "./three-year";

export function BarGraph() {
  const [select, setSelect] = useState("Month");
  return (
    <Card className="lg:w-1/2 max-h-[552px] h-full ">
      <CardHeader>
        <CardTitle>Company Growth</CardTitle>
      </CardHeader>
      <CardContent>
        {(() => {
          switch (select) {
            case "Month":
              return <Month />;
            case "Year":
              return <Year />;
            case "2 Year":
              return <TwoYear />;
            case "3 Year":
              return <ThreeYear />;
            default:
              return null;
          }
        })()}
      </CardContent>
      <CardFooter className="flex   flex-wrap gap-2 justify-center sm:justify-between w-full">
        {["Month", "Year", "2 Year", "3 Year"].map((item, index) => (
          <button
            key={index}
            className={cn(
              "text-sm sm:text-base md:text-lg lg:text-xl p-3 sm:p-4 border rounded-lg sm:rounded-xl border-[#199FB1] font-normal w-full sm:w-auto",
              item === select && "bg-[#199FB1] font-bold text-white"
            )}
            onClick={() => setSelect(item)}
          >
            {item}
          </button>
        ))}
      </CardFooter>
    </Card>
  );
}
