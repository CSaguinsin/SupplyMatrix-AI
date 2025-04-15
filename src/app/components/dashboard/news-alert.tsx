import { Clock, ExternalLink, Globe, Newspaper } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function NewsAlerts() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-teal-100 p-2">
              <Newspaper className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <h3 className="font-medium">US Announces New Tariffs on Chinese Electronics</h3>
              <p className="mt-1 text-sm text-gray-500">
                The US government has announced a new round of tariffs targeting Chinese electronics and semiconductor
                products, with rates up to 25% set to take effect next month.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Globe className="h-3 w-3" /> Reuters
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 6 hours ago
                </Badge>
                <Badge className="bg-teal-600">AI Analyzed</Badge>
              </div>
            </div>
          </div>
          <Button size="sm" variant="outline" className="flex items-center gap-1">
            <ExternalLink className="h-3 w-3" />
            Read
          </Button>
        </div>
      </div>
      <div className="rounded-lg border p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-teal-100 p-2">
              <Newspaper className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <h3 className="font-medium">Port Workers Strike Continues in Rotterdam</h3>
              <p className="mt-1 text-sm text-gray-500">
                The strike at the Port of Rotterdam has entered its third day with no resolution in sight. Container
                processing has slowed by 70%, affecting shipments across Europe.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Globe className="h-3 w-3" /> Bloomberg
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 12 hours ago
                </Badge>
                <Badge className="bg-teal-600">AI Analyzed</Badge>
              </div>
            </div>
          </div>
          <Button size="sm" variant="outline" className="flex items-center gap-1">
            <ExternalLink className="h-3 w-3" />
            Read
          </Button>
        </div>
      </div>
      <div className="rounded-lg border p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-teal-100 p-2">
              <Newspaper className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <h3 className="font-medium">Power Outages Affect Manufacturing in Southern China</h3>
              <p className="mt-1 text-sm text-gray-500">
                Widespread power outages in Guangdong province are affecting manufacturing operations. Several major
                electronics factories report reduced capacity of up to 40%.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Globe className="h-3 w-3" /> South China Morning Post
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 1 day ago
                </Badge>
                <Badge className="bg-teal-600">AI Analyzed</Badge>
              </div>
            </div>
          </div>
          <Button size="sm" variant="outline" className="flex items-center gap-1">
            <ExternalLink className="h-3 w-3" />
            Read
          </Button>
        </div>
      </div>
      <div className="rounded-lg border p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-teal-100 p-2">
              <Newspaper className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <h3 className="font-medium">Security Concerns Disrupt Shipping Routes in Red Sea</h3>
              <p className="mt-1 text-sm text-gray-500">
                Ongoing security issues in the Red Sea and Suez Canal are forcing shipping companies to reroute vessels
                around the Cape of Good Hope, adding 10-14 days to shipping times.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Globe className="h-3 w-3" /> Financial Times
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 2 days ago
                </Badge>
                <Badge className="bg-teal-600">AI Analyzed</Badge>
              </div>
            </div>
          </div>
          <Button size="sm" variant="outline" className="flex items-center gap-1">
            <ExternalLink className="h-3 w-3" />
            Read
          </Button>
        </div>
      </div>
    </div>
  )
}
