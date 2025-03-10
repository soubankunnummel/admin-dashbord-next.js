"use client";

import { Area, AreaChart, CartesianGrid } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 100 },
  { month: "February", desktop: 300 },
  { month: "March", desktop: 250 },
  { month: "April", desktop: 400 },
  { month: "May", desktop: 350 },
  { month: "June", desktop: 500 },
  { month: "July", desktop: 350 },
  { month: "August", desktop: 600 },
  { month: "September", desktop: 900 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#FF0838",
  },
} satisfies ChartConfig;

export function TotalSellers() {
  return (
    <Card className=" relative">
      <CardHeader>
        <CardTitle>Total Sellers</CardTitle>
      </CardHeader>
      <h1 className="text-3xl left-1/3 text-[#FF0838] font-bold absolute transform -translate-y-1/2   top-1/2   ">
        3480
      </h1>
      <CardContent className="p-0">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
          >
            <CartesianGrid vertical={false} />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
