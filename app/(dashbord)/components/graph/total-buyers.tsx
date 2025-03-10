"use client";

import { Area, AreaChart, CartesianGrid,   } from "recharts";

import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 200 },
  { month: "March", desktop: 130 },
  { month: "April", desktop: 150 },
  { month: "May", desktop: 120 },
  { month: "June", desktop: 100 },
  { month: "July", desktop: 120 },
  { month: "August", desktop: 80 },
  { month: "September", desktop: 100 },
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
    color: "#0FD43E",
  },
} satisfies ChartConfig;

export function TotalBuyers() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle> Total Buyers</CardTitle>
      </CardHeader>
      <CardContent className="  p-0">
        <ChartContainer className=" " config={chartConfig}>
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
