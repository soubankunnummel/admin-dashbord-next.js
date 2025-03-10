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
  { month: "January", desktop: 80 },
  { month: "February", desktop: 120 },
  { month: "March", desktop: 110 },
  { month: "April", desktop: 150 },
  { month: "May", desktop: 140 },
  { month: "June", desktop: 180 },
  { month: "July", desktop: 175 },
  { month: "August", desktop: 190 },
  { month: "September", desktop: 90 },
  { month: "October", desktop: 180 },
  { month: "November", desktop: 200 },
  { month: "December", desktop: 180 },
  { month: "January", desktop: 220 },
  { month: "February", desktop: 209 },
  { month: "March", desktop: 250 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#FFCC40",
  },
} satisfies ChartConfig;

export function TotalAds() {
  return (
    <Card className="relative  ">
      <CardHeader className="w-full">
        <CardTitle className="text-start">Total Ads </CardTitle>
      </CardHeader>
      <h1 className="text-3xl left-1/3 z-10 text-[#FFCC40] font-bold absolute top-1/2 transform -translate-y-1/2">
      459
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
            {/* <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            /> */}
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
