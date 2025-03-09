"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
  { month: "January", desktop: 100 },
  { month: "February", desktop:300 },
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






  
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ActiveUsers() {
  return (
    <Card className=" ">
      <CardHeader>
        <CardTitle>Active Users</CardTitle>
         
      </CardHeader>
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
            {/* <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            /> */}
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
  )
}
