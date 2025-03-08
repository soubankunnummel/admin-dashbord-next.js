// components/ui/custom-separator.tsx
"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface CustomSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
  dotColor?: string
  lineColor?: string
}

const CustomSeparator = React.forwardRef<HTMLDivElement, CustomSeparatorProps>(
  (
    { 
      className, 
      orientation = "horizontal", 
      decorative = true, 
      dotColor = "#E25845", 
      lineColor = "#E25845", 
      ...props 
    },
    ref
  ) => (
    <div
      ref={ref}
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation === "horizontal" ? "horizontal" : "vertical"}
      className={cn(
        "flex items-center",
        orientation === "horizontal" 
          ? "w-full flex-row" 
          : "h-full flex-col",
        className
      )}
      {...props}
    >
      <div 
        className={cn(
          "rounded-full",
          orientation === "horizontal" 
            ? "h-2 w-2 shrink-0" 
            : "h-2 w-2 shrink-0"
        )}
        style={{ backgroundColor: dotColor }}
      />
      <div 
        className={cn(
          "shrink-0",
          orientation === "horizontal" 
            ? "h-[1px] w-full" 
            : "h-full w-[1px]"
        )}
        style={{ backgroundColor: lineColor }}
      />
      <div 
        className={cn(
          "rounded-full",
          orientation === "horizontal" 
            ? "h-2 w-2 shrink-0" 
            : "h-2 w-2 shrink-0"
        )}
        style={{ backgroundColor: dotColor }}
      />
    </div>
  )
)

CustomSeparator.displayName = "CustomSeparator"

export { CustomSeparator }