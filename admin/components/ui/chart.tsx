"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Area,
  AreaChart,
  RadialBar,
  RadialBarChart,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  type ContentType,
  type TooltipProps,
} from "recharts"

import { cn } from "@/lib/utils"

// region: Chart

const chartVariants = cva("h-full w-full", {
  variants: {
    variant: {
      bar: "",
      line: "",
      area: "",
      pie: "",
      radial: "",
      scatter: "",
    },
  },
})

type ChartContextProps = {
  config: ChartConfig
  stack?: boolean
} & (
  | {
      variant: "bar"
      Chart: typeof BarChart
      Item: typeof Bar
    }
  | {
      variant: "line"
      Chart: typeof LineChart
      Item: typeof Line
    }
  | {
      variant: "area"
      Chart: typeof AreaChart
      Item: typeof Area
    }
  | {
      variant: "pie"
      Chart: typeof PieChart
      Item: typeof Pie
    }
  | {
      variant: "radial"
      Chart: typeof RadialBarChart
      Item: typeof RadialBar
    }
  | {
      variant: "scatter"
      Chart: typeof ScatterChart
      Item: typeof Scatter
    }
)

const ChartContext = React.createContext<ChartContextProps | null>(null)

type ChartProps = {
  config: ChartConfig
  children: React.ReactNode
  stack?: boolean
} & VariantProps<typeof chartVariants> &
  React.ComponentProps<typeof ResponsiveContainer>

function Chart({ config, stack, variant, className, children, ...props }: ChartProps) {
  const ChartPrimitive = React.useMemo(() => {
    if (variant === "bar") return BarChart
    if (variant === "line") return LineChart
    if (variant === "area") return AreaChart
    if (variant === "pie") return PieChart
    if (variant === "radial") return RadialBarChart
    if (variant === "scatter") return ScatterChart
    return null
  }, [variant])

  const ChartItem = React.useMemo(() => {
    if (variant === "bar") return Bar
    if (variant === "line") return Line
    if (variant === "area") return Area
    if (variant === "pie") return Pie
    if (variant === "radial") return RadialBar
    if (variant === "scatter") return Scatter
    return null
  }, [variant])

  if (!ChartPrimitive || !ChartItem) {
    return null
  }

  return (
    <ChartContext.Provider
      value={{
        config,
        stack,
        variant: variant!,
        Chart: ChartPrimitive as ChartContextProps["Chart"],
        Item: ChartItem as ChartContextProps["Item"],
      }}
    >
      <ResponsiveContainer className={cn(chartVariants({ variant }), className)} {...props}>
        {children}
      </ResponsiveContainer>
    </ChartContext.Provider>
  )
}
Chart.displayName = "Chart"

// endregion

// region: ChartContainer

const ChartContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex aspect-video items-center justify-center text-foreground", className)}
      {...props}
    />
  ),
)
ChartContainer.displayName = "ChartContainer"

// endregion

// region: ChartTooltip

type ChartTooltipProps = TooltipProps<any, any> & {
  hideIndicator?: boolean
  hideLabel?: boolean
  labelFormatter?: (value: string) => string
  valueFormatter?: (value: number) => string
}

const ChartTooltip = ({
  hideIndicator = false,
  hideLabel = false,
  labelFormatter,
  valueFormatter,
  className,
  content,
  contentStyle,
  labelStyle,
  wrapperStyle,
  ...props
}: ChartTooltipProps) => {
  const { config } = useChart()

  const defaultFormatter = React.useCallback(
    (value: string, name: string) => {
      const formattedValue = valueFormatter ? valueFormatter(Number(value)) : value
      if (hideIndicator) {
        return formattedValue
      }
      return (
        <span className="flex items-center">
          <span
            className="mr-1.5 flex h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: `hsl(${(config[name] as ChartConfigItem).color})`,
            }}
          />{" "}
          {formattedValue}
        </span>
      )
    },
    [hideIndicator, valueFormatter, config],
  )

  const defaultLabelFormatter = React.useCallback(
    (value: string) => {
      return labelFormatter ? labelFormatter(value) : value
    },
    [labelFormatter],
  )

  const defaultContent = React.useCallback(
    ({ active, payload, label }: TooltipProps<any, any>) => {
      if (active && payload && payload.length) {
        return (
          <div className={cn("rounded-lg border bg-background p-2 shadow-sm", className)} style={contentStyle}>
            {!hideLabel && (
              <div className="text-sm text-muted-foreground" style={labelStyle}>
                {defaultLabelFormatter(label)}
              </div>
            )}
            <ul className="grid text-xs">
              {payload.map((item, index) => (
                <li key={index} className="flex items-center justify-between gap-4">
                  <span style={wrapperStyle}>{defaultFormatter(item.value, item.name)}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      }

      return null
    },
    [
      hideLabel,
      labelFormatter,
      valueFormatter,
      className,
      contentStyle,
      labelStyle,
      wrapperStyle,
      defaultFormatter,
      defaultLabelFormatter,
    ],
  )

  return <Tooltip cursor={false} content={content || defaultContent} {...props} />
}
ChartTooltip.displayName = "ChartTooltip"

// endregion

// region: ChartLegend

type ChartLegendProps = React.ComponentProps<typeof Legend> & {
  hideIcon?: boolean
}

const ChartLegend = ({ className, hideIcon = false, content, ...props }: ChartLegendProps) => {
  const { config } = useChart()

  const defaultContent: ContentType<any, any> = React.useCallback(
    ({ payload }) => {
      if (payload && payload.length) {
        return (
          <ul className={cn("flex flex-wrap items-center gap-2", className)}>
            {payload.map((item, index) => {
              if (item.inactive) {
                return null
              }

              return (
                <li key={index} className="flex items-center gap-1 text-xs text-muted-foreground">
                  {!hideIcon && (
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: `hsl(${(config[item.value as string] as ChartConfigItem).color})`,
                      }}
                    />
                  )}
                  {item.value}
                </li>
              )
            })}
          </ul>
        )
      }

      return null
    },
    [hideIcon, className, config],
  )

  return <Legend content={content || defaultContent} {...props} />
}
ChartLegend.displayName = "ChartLegend"

// endregion

// region: ChartCrosshair

const ChartCrosshair = React.forwardRef<any, React.ComponentProps<typeof CartesianGrid>>(
  ({ className, ...props }, ref) => {
    const { variant } = useChart()

    if (variant === "pie" || variant === "radial") {
      return null
    }

    return (
      <CartesianGrid
        ref={ref}
        className={cn("text-muted-foreground", className)}
        strokeDasharray="3 3"
        vertical={false}
        {...props}
      />
    )
  },
)
ChartCrosshair.displayName = "ChartCrosshair"

// endregion

// region: ChartAxis

type ChartAxisProps = React.ComponentProps<typeof XAxis> & {
  hideAxis?: boolean
}

const ChartAxis = React.forwardRef<any, ChartAxisProps>(({ hideAxis = false, ...props }, ref) => {
  const { variant } = useChart()

  if (variant === "pie" || variant === "radial") {
    return null
  }

  if (hideAxis) {
    return <XAxis ref={ref} axisLine={false} tickLine={false} {...props} />
  }

  return <XAxis ref={ref} axisLine={false} tickLine={false} className="text-sm" {...props} />
})
ChartAxis.displayName = "ChartAxis"

const ChartYAxis = React.forwardRef<any, ChartAxisProps>(({ hideAxis = false, ...props }, ref) => {
  const { variant } = useChart()

  if (variant === "pie" || variant === "radial") {
    return null
  }

  if (hideAxis) {
    return <YAxis ref={ref} axisLine={false} tickLine={false} {...props} />
  }

  return <YAxis ref={ref} axisLine={false} tickLine={false} className="text-sm" {...props} />
})
ChartYAxis.displayName = "ChartYAxis"

// endregion

// region: ChartGrid

const ChartGrid = React.forwardRef<any, React.ComponentProps<typeof CartesianGrid>>(({ className, ...props }, ref) => {
  const { variant } = useChart()

  if (variant === "pie" || variant === "radial") {
    return null
  }

  return (
    <CartesianGrid
      ref={ref}
      className={cn("stroke-border stroke-1", className)}
      strokeDasharray="3 3"
      vertical={false}
      {...props}
    />
  )
})
ChartGrid.displayName = "ChartGrid"

// endregion

// region: ChartBar

type ChartBarProps = React.ComponentProps<typeof Bar> & {
  active?: boolean
}

const ChartBar = React.forwardRef<any, ChartBarProps>(({ className, active, ...props }, ref) => {
  const { config, stack } = useChart()

  return (
    <Bar
      ref={ref}
      className={cn(active && "stroke-foreground stroke-1", stack && "stroke-background", className)}
      fill={`hsl(${config[props.dataKey as string].color})`}
      {...props}
    />
  )
})
ChartBar.displayName = "ChartBar"

// endregion

// region: ChartLine

type ChartLineProps = React.ComponentProps<typeof Line> & {
  active?: boolean
}

const ChartLine = React.forwardRef<any, ChartLineProps>(({ className, active, ...props }, ref) => {
  const { config } = useChart()

  return (
    <Line
      ref={ref}
      className={cn(active && "stroke-foreground stroke-1", className)}
      stroke={`hsl(${config[props.dataKey as string].color})`}
      {...props}
    />
  )
})
ChartLine.displayName = "ChartLine"

// endregion

// region: ChartArea

type ChartAreaProps = React.ComponentProps<typeof Area> & {
  active?: boolean
}

const ChartArea = React.forwardRef<any, ChartAreaProps>(({ className, active, ...props }, ref) => {
  const { config } = useChart()

  return (
    <Area
      ref={ref}
      className={cn(active && "stroke-foreground stroke-1", className)}
      fill={`hsl(${config[props.dataKey as string].color})`}
      stroke={`hsl(${config[props.dataKey as string].color})`}
      {...props}
    />
  )
})
ChartArea.displayName = "ChartArea"

// endregion

// region: ChartPie

type ChartPieProps = React.ComponentProps<typeof Pie> & {
  active?: boolean
}

const ChartPie = React.forwardRef<any, ChartPieProps>(({ className, active, ...props }, ref) => {
  const { config } = useChart()

  return (
    <Pie
      ref={ref}
      className={cn(active && "stroke-foreground stroke-1", className)}
      fill={`hsl(${config[props.dataKey as string].color})`}
      {...props}
    />
  )
})
ChartPie.displayName = "ChartPie"

// endregion

// region: ChartRadial

type ChartRadialProps = React.ComponentProps<typeof RadialBar> & {
  active?: boolean
}

const ChartRadial = React.forwardRef<any, ChartRadialProps>(({ className, active, ...props }, ref) => {
  const { config } = useChart()

  return (
    <RadialBar
      ref={ref}
      className={cn(active && "stroke-foreground stroke-1", className)}
      fill={`hsl(${config[props.dataKey as string].color})`}
      {...props}
    />
  )
})
ChartRadial.displayName = "ChartRadial"

// endregion

// region: ChartScatter

type ChartScatterProps = React.ComponentProps<typeof Scatter> & {
  active?: boolean
}

const ChartScatter = React.forwardRef<any, ChartScatterProps>(({ className, active, ...props }, ref) => {
  const { config } = useChart()

  return (
    <Scatter
      ref={ref}
      className={cn(active && "stroke-foreground stroke-1", className)}
      fill={`hsl(${config[props.dataKey as string].color})`}
      {...props}
    />
  )
})
ChartScatter.displayName = "ChartScatter"

// endregion

// region: ChartPrimitive

type ChartPrimitiveProps = React.ComponentProps<typeof Slot> & {
  asChild?: boolean
}

const ChartPrimitive = React.forwardRef<any, ChartPrimitiveProps>(({ asChild, className, ...props }, ref) => {
  const { Chart: ChartPrimitive, config, stack } = useChart()
  const Comp = asChild ? Slot : "div"

  return (
    <Comp ref={ref} className={cn("h-full w-full", className)} {...props}>
      <ChartPrimitive {...props} />
    </Comp>
  )
})
ChartPrimitive.displayName = "ChartPrimitive"

// endregion

// region: Hooks

type ChartConfigItem = {
  label: string
  color: string
}

type ChartConfig = {
  [key: string]: ChartConfigItem
}

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <Chart />")
  }

  return context
}

// endregion

export {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  ChartCrosshair,
  ChartAxis,
  ChartYAxis,
  ChartGrid,
  ChartBar,
  ChartLine,
  ChartArea,
  ChartPie,
  ChartRadial,
  ChartScatter,
  ChartPrimitive,
  useChart,
  type ChartConfig,
}

// Re-exporting Recharts components for direct use
export {
  CartesianGrid,
  Line,
  LineChart,
  Bar,
  BarChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
}
