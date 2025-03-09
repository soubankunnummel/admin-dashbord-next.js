"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { day: "1", desktop: 186 },
  { month: "2", desktop: 305 },
  { month: "3", desktop: 237 },
  { month: "4", desktop: 73 },
  { month: "5", desktop: 209 },
  { month: "6", desktop: 214 },
  { month: "7", desktop: 209 },
  { month: "8", desktop: 209 },
  { month: "9", desktop: 209 },
  { month: "10", desktop: 209 },
  { month: "11", desktop: 209 },
  { month: "12", desktop: 209 },
  { month: "1", desktop: 209 },
  { month: "2", desktop: 209 },
  { month: "3", desktop: 209 },
  { month: "4", desktop: 209 },
  { month: "5", desktop: 209 },
  { month: "6", desktop: 209 },
  { month: "7", desktop: 209 },
  { month: "8", desktop: 209 },
  { month: "9", desktop: 209 },
  { month: "10", desktop: 209 },
  { month: "11", desktop: 209 },  
  { month: "12", desktop: 209 },

]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function TwoYear() {
  return (
    <CardContent>
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="desktop"
          type="linear"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  </CardContent>
  )
}
