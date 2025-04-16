"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Calendar,
  ChevronDown,
  Clock,
  ExternalLink,
  Filter,
  Globe,
  MapPin,
  Search,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DashboardHeader } from "../../components/dashboard/dashboard-header"
import { DashboardShell } from "../../components/dashboard/dashboard-shell"
import { RiskScoreCard } from "../../components/dashboard/risk-score-card"
import { SupplyChainMap } from "../../components/dashboard/supply-chain-map"
import { RecentDisruptions } from "../../components/dashboard/recent-disruption"
import { SupplierRiskTable } from "../../components/dashboard/supplier-risk-table"
import { RiskTrendChart } from "../../components/dashboard/risk-trend-chart"
import { NewsAlerts } from "@/components/dashboard/news-alert"
import Link from "next/link"

// Inline implementation instead of external import to avoid path issues
const GeminiInsights = () => {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-amber-500" />
          <p className="text-sm font-medium">Tariff Impact Analysis</p>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Recent 25% tariff increases on electronics from Asia will impact 12 of your suppliers. Estimated
          cost increase: $320K monthly. Consider alternative sourcing from Vietnam or Mexico.
        </p>
      </div>
      <div className="rounded-lg border p-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <p className="text-sm font-medium">Port Congestion Alert</p>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Severe congestion at Port of Rotterdam affecting 8 shipments. Recommend expediting critical
          components via air freight and increasing safety stock for affected parts.
        </p>
      </div>
      <div className="rounded-lg border p-3">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-green-500" />
          <p className="text-sm font-medium">Resilience Opportunity</p>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Analysis shows 30% of high-risk components have single-source suppliers. Diversifying top 5
          critical components could reduce disruption risk by 45%.
        </p>
      </div>
    </div>
  );
};

// Create a condensed version of NewsAlerts for the dashboard preview
const NewsPreview = () => {
  return (
    <NewsAlerts previewMode={true} maxItems={3} />
  );
};

export default function DashboardPage() {
  // Use explicit state management for tabs
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Monitor your supply chain risks and disruptions in real-time.">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 Days
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </DashboardHeader>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <RiskScoreCard
          title="Global Risk Score"
          value="68"
          change="+12"
          trend="up"
          description="High risk level"
          icon={<AlertTriangle className="h-4 w-4" />}
        />
        <RiskScoreCard
          title="Active Disruptions"
          value="24"
          change="+5"
          trend="up"
          description="Across 14 countries"
          icon={<Globe className="h-4 w-4" />}
        />
        <RiskScoreCard
          title="At-Risk Suppliers"
          value="37"
          change="-3"
          trend="down"
          description="Improved from last month"
          icon={<Users className="h-4 w-4" />}
        />
        <RiskScoreCard
          title="Avg. Delivery Delay"
          value="6.4d"
          change="+1.2d"
          trend="up"
          description="Majority in Asia region"
          icon={<Clock className="h-4 w-4" />}
        />
      </div>

      <div className="space-y-4">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === "overview"
                ? "border-b-2 border-teal-600 font-medium text-teal-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("suppliers")}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === "suppliers"
                ? "border-b-2 border-teal-600 font-medium text-teal-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Suppliers
          </button>
          <button
            onClick={() => setActiveTab("disruptions")}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === "disruptions"
                ? "border-b-2 border-teal-600 font-medium text-teal-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Disruptions
          </button>
          <button
            onClick={() => setActiveTab("news")}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === "news"
                ? "border-b-2 border-teal-600 font-medium text-teal-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            News
          </button>
        </div>

        <div className="grid gap-4">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              {/* Map Section */}
              {/* <Card>
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle>Global Supply Chain Map</CardTitle>
                      <CardDescription>Real-time view of supplier locations and active disruptions</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-red-500">8 High Risk</Badge>
                      <Badge className="bg-amber-500">14 Medium Risk</Badge>
                      <Badge className="bg-green-500">42 Low Risk</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-0 sm:px-2">
                  <div className="aspect-[16/9] rounded-lg bg-gray-100 sm:aspect-[21/9]">
                    <SupplyChainMap />
                  </div>
                </CardContent>
              </Card> */}

              {/* Dashboard Content Grid with Insights and News Preview
              <div className="grid gap-4 md:grid-cols-5">
                <Card className="md:col-span-3">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="space-y-1">
                      <CardTitle>Risk Trends</CardTitle>
                      <CardDescription>30-day risk analysis by category</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <RiskTrendChart />
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="space-y-1">
                      <CardTitle>Recent Disruptions</CardTitle>
                      <CardDescription>Latest events affecting your suppliers</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <RecentDisruptions />
                  </CardContent>
                </Card>
              </div> */}

              {/* New Section: AI Insights and News Preview */}
              <div className="grid gap-4 md:grid-cols-2">
                {/* AI-Generated Insights */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="space-y-1">
                      <CardTitle>AI-Generated Insights</CardTitle>
                      <CardDescription>Gemini AI analysis of current supply chain trends</CardDescription>
                    </div>
                    <Badge className="bg-teal-600">Powered by Gemini AI</Badge>
                  </CardHeader>
                  <CardContent>
                    <GeminiInsights />
                  </CardContent>
                  <CardFooter className="flex justify-end pt-0">
                    <Button variant="outline" size="sm">
                      Request Custom Analysis
                    </Button>
                  </CardFooter>
                </Card>

                {/* News Preview */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="space-y-1">
                      <CardTitle>Latest News</CardTitle>
                      <CardDescription>Supply chain news affecting your operations</CardDescription>
                    </div>
                    <Badge className="bg-teal-600">
                      <Globe className="mr-1 h-3 w-3" />
                      Powered by Craftora
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <NewsPreview />
                  </CardContent>
                  <CardFooter className="flex justify-end pt-0">
                    <Link href="/newstab">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View All News
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'suppliers' && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Supplier Risk Assessment</CardTitle>
                    <CardDescription>Risk analysis of your supplier network</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input type="search" placeholder="Search suppliers..." className="w-[200px] pl-8 md:w-[300px]" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <SupplierRiskTable />
              </CardContent>
            </Card>
          )}

          {activeTab === 'disruptions' && (
            <Card>
              <CardHeader>
                <CardTitle>Active Disruptions</CardTitle>
                <CardDescription>Current events affecting your supply chain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Disruption content goes here - simplified for brevity */}
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-red-100 p-2">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Port Strike - Rotterdam</h3>
                          <p className="text-sm text-gray-500">
                            Worker strike affecting container processing. Expected to last 5-7 days.
                          </p>
                        </div>
                      </div>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                  {/* More disruptions would be listed here */}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'news' && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>News & Alerts</CardTitle>
                    <CardDescription>Latest news affecting global supply chains</CardDescription>
                  </div>
                  <Badge className="bg-teal-600">Powered by NewsAPI.io</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <NewsAlerts />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </DashboardShell>
  );
}
