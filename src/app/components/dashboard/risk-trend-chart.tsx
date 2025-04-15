export function RiskTrendChart() {
  return (
    <div className="h-[300px] w-full">
      <div className="flex h-full w-full items-center justify-center">
        <img
          src="/placeholder.svg?height=300&width=500"
          alt="Risk Trend Chart"
          className="h-full w-full object-contain"
        />
        {/* This would be replaced with an actual chart component */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-gray-500">Risk Trend Chart</p>
            <p className="text-xs text-gray-400">30-day risk score trend by category</p>
          </div>
        </div>
      </div>
    </div>
  )
}
