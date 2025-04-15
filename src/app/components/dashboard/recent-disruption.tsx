import { AlertTriangle, Clock, Globe, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export function RecentDisruptions() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 rounded-lg border p-3">
        <div className="rounded-full bg-red-100 p-2">
          <AlertTriangle className="h-4 w-4 text-red-600" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Port Strike - Rotterdam</p>
            <Badge variant="destructive">High Risk</Badge>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Rotterdam, Netherlands
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> 2 days ago
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-lg border p-3">
        <div className="rounded-full bg-amber-100 p-2">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Factory Shutdown - Shenzhen</p>
            <Badge variant="outline" className="bg-amber-100 text-amber-800">
              Medium Risk
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Shenzhen, China
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> 4 days ago
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-lg border p-3">
        <div className="rounded-full bg-amber-100 p-2">
          <Globe className="h-4 w-4 text-amber-600" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Tariff Increase - US/China</p>
            <Badge variant="outline" className="bg-amber-100 text-amber-800">
              Medium Risk
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Globe className="h-3 w-3" /> US/China Trade
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> Effective in 14 days
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-lg border p-3">
        <div className="rounded-full bg-red-100 p-2">
          <AlertTriangle className="h-4 w-4 text-red-600" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Shipping Delays - Suez Canal</p>
            <Badge variant="destructive">High Risk</Badge>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Suez Canal, Egypt
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> 1 week ago
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
