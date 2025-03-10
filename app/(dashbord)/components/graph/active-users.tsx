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
  { month: "March", desktop: 150 },
  { month: "April", desktop: 450 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 1200 },
  { month: "July", desktop: 500 },
  { month: "August", desktop: 209 },
  { month: "September", desktop: 209 },
  { month: "October", desktop: 600 },
  { month: "November", desktop: 209 },
  { month: "December", desktop: 209 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#199FB1",
  },
} satisfies ChartConfig;

export function ActiveUsers() {
  return (
    <Card className=" relative">
      <CardHeader>
        <CardTitle>Active Users</CardTitle>
      </CardHeader>
      <h1 className="text-3xl left-1/3 text-[#199FB1] font-bold absolute transform -translate-y-1/2   top-1/2   ">5556</h1>
      <CardContent className="p-0">
        <ChartContainer className="" config={chartConfig}>
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
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="linear"
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
