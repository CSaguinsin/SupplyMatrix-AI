export function SupplyChainMap() {
    return (
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg border bg-gray-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="Global Supply Chain Map"
            className="h-full w-full object-cover"
          />
          {/* This would be replaced with an actual interactive map component */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-gray-500">Interactive Supply Chain Map</p>
              <p className="text-xs text-gray-400">Showing 24 active disruptions across 14 countries</p>
            </div>
          </div>
          {/* Example disruption markers */}
          <div className="absolute left-[30%] top-[40%] h-4 w-4 animate-pulse rounded-full bg-red-500"></div>
          <div className="absolute left-[60%] top-[30%] h-4 w-4 animate-pulse rounded-full bg-red-500"></div>
          <div className="absolute left-[75%] top-[45%] h-4 w-4 animate-pulse rounded-full bg-amber-500"></div>
          <div className="absolute left-[40%] top-[60%] h-4 w-4 animate-pulse rounded-full bg-amber-500"></div>
        </div>
      </div>
    )
  }
  