import type { ReactNode } from "react"
import Link from "next/link"
import { Globe } from "lucide-react"

interface AuthLayoutProps {
  children: ReactNode
  heading: string
  subheading: string
  footerText?: ReactNode
}

export function AuthLayout({ children, heading, subheading, footerText }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 md:p-8">
      <div className="w-full max-w-md space-y-8">
                    {/* Logo */}
                    <div className="flex flex-col items-center space-y-2 text-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-teal-600 group-hover:bg-teal-700 transition-colors">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900 ml-2">
                  Supply<span className="text-teal-600">Matrix</span>
                </span>
              </Link>
            </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm">{children}</div>

        {footerText && <div className="text-center text-sm">{footerText}</div>}
      </div>
    </div>
  )
}
