import type { ReactNode } from "react"

import { DashboardNav } from "../../components/dashboard/dashboard-nav"
import { DashboardTopbar } from "../../components/dashboard/dashboard-topbar"

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardTopbar />
      <div className="flex flex-1">
        {/* Add isolation layer to ensure nav events don't get masked */}
        <div style={{ isolation: 'isolate', position: 'relative', zIndex: 100 }}>
          <DashboardNav />
        </div>
        <main className="flex-1 overflow-auto p-4 md:p-6" style={{ position: 'relative', zIndex: 10 }}>
          <div className="mx-auto space-y-4">{children}</div>
        </main>
      </div>
    </div>
  )
}
