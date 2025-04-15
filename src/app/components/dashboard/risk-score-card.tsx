import type { ReactNode } from "react"
import { TrendingDown, TrendingUp } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RiskScoreCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  description: string
  icon?: ReactNode
}

export function RiskScoreCard({ title, value, change, trend, description, icon }: RiskScoreCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center space-x-2">
          <p className={`text-xs ${trend === "up" ? "text-red-600" : "text-green-600"} flex items-center space-x-1`}>
            <span>{change}</span>
            {trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          </p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
