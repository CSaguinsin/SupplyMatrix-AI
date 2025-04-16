import Link from "next/link"
import {
  AlertTriangle,
  BarChart3,
  Globe,
  Home,
  LineChart,
  Newspaper,
  Settings,
  ShieldAlert,
  Truck,
  Users,
} from "lucide-react"

export function DashboardNav() {
  return (
    <div className="hidden border-r bg-gray-50/40 md:block md:w-64" style={{ zIndex: 50 }}>
      <div className="flex h-full flex-col gap-2 p-4">
      <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 group" style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}>
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-teal-600 group-hover:bg-teal-700 transition-colors">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900 ml-2">
                  Supply<span className="text-teal-600">Matrix</span>
                </span>
              </Link>
            </div>
        <div className="flex-1 py-2">
          <nav className="grid gap-1" style={{ position: 'relative', zIndex: 50 }}>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
            >
              <Home className="h-4 w-4" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link
              href="/dashboard/suppliers"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
            >
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Suppliers</span>
            </Link>
            <Link
              href="/dashboard/disruptions"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
            >
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">Disruptions</span>
              <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-medium text-red-600">
                24
              </span>
            </Link>
            <Link
              href="/dashboard/shipments"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
            >
              <Truck className="h-4 w-4" />
              <span className="text-sm font-medium">Shipments</span>
            </Link>
            <Link
              href="/newstab"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
            >
              <Newspaper className="h-4 w-4" />
              <span className="text-sm font-medium">News & Alerts</span>
            </Link>
            <div className="my-2 h-px bg-gray-200" />
            <h3 className="mb-1 px-3 text-xs font-medium text-gray-500">Analytics</h3>
            <Link
              href="/dashboard/risk-analysis"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
            >
              <ShieldAlert className="h-4 w-4" />
              <span className="text-sm font-medium">Risk Analysis</span>
            </Link>
            <Link
              href="/dashboard/trends"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
            >
              <LineChart className="h-4 w-4" />
              <span className="text-sm font-medium">Trends</span>
            </Link>
            <Link
              href="/dashboard/reports"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
            >
              <BarChart3 className="h-4 w-4" />
              <span className="text-sm font-medium">Reports</span>
            </Link>
            <div className="my-2 h-px bg-gray-200" />
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
            >
              <Settings className="h-4 w-4" />
              <span className="text-sm font-medium">Settings</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
