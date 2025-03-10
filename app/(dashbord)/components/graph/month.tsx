"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { day: "1", desktop: 186, mobile: 80 },
  { day: "2", desktop: 305, mobile: 200 },
  { day: " 3", desktop: 237, mobile: 120 },
  { day: " 4", desktop: 73, mobile: 190 },
  { day: "5", desktop: 209, mobile: 130 },
  { day: "6", desktop: 214, mobile: 140 },
  { day: "7", desktop: 209, mobile: 130 },
  { day: "8", desktop: 209, mobile: 130 },
  { day: "9", desktop: 209, mobile: 130 },
  { day: "10", desktop: 209, mobile: 130 },
  { day: "11", desktop: 209, mobile: 130 },
  { day: "12", desktop: 209, mobile: 130 },
  { day: "13", desktop: 209, mobile: 130 },
  { day: "14", desktop: 209, mobile: 130 },
  { day: "15", desktop: 209, mobile: 130 },
  { day: "16", desktop: 209, mobile: 130 },
  { day: "17", desktop: 209, mobile: 130 },
  { day: "18", desktop: 209, mobile: 130 },
  { day: "19", desktop: 209, mobile: 130 },
  { day: "20", desktop: 209, mobile: 130 },
  { day: "21", desktop: 209, mobile: 130 },
  { day: "22", desktop: 209, mobile: 130 },
  { day: "23", desktop: 209, mobile: 250 },
  { day: "24", desktop: 209, mobile: 300 },
  { day: "25", desktop: 209, mobile: 350 },
  { day: "26", desktop: 209, mobile: 400 },
  { day: "27", desktop: 209, mobile: 450 },
  { day: "28", desktop: 209, mobile: 500 },
];
const colors = [
  "#8884d8",
  "#83a6ed",
  "#8dd1e1",
  "#82ca9d",
  "#a4de6c",
  "#d0ed57",
  "#ffc658",
  "#ff8042",
  "#ffbb28",
  "#ff7300",
  "#ff0000",
  "#ff00ff",
  "#800080",
  "#008080",
  "#000080",
  "#00ff00",
  "#00ffff",
  "#0000ff",
  "#ff00ff",
  "#800000",
  "#808000",
  "#008000",
  "#800080",
  "#808080",
  "#c0c0c0",
  "#ff69b4",
  "#ff1493",
  "#db7093",
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Month() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        {/* <line
        className="pb-10"
          dataKey="value"
          type="linear"
          stroke="var(--color-value)"
          strokeWidth={2}
          dot={false}
        /> */}
        <Bar
          dataKey="desktop"
          radius={0}
          fill={colors[Math.floor(Math.random() * colors.length)]}
        />
        {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
      </BarChart>
    </ChartContainer>
  );
}
