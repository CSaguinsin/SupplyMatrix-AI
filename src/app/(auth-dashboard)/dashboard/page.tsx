"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Calendar,
  ChevronDown,
  Clock,
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DashboardHeader } from "../../components/dashboard/dashboard-header"
import { DashboardShell } from "../../components/dashboard/dashboard-shell"
import { RiskScoreCard } from "../../components/dashboard/risk-score-card"
import { SupplyChainMap } from "../../components/dashboard/supply-chain-map"
import { RecentDisruptions } from "../../components/dashboard/recent-disruption"
import { SupplierRiskTable } from "../../components/dashboard/supplier-risk-table"
import { RiskTrendChart } from "../../components/dashboard/risk-trend-chart"
import { NewsAlerts } from "../../components/dashboard/news-alert"

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
          description="8% of your suppliers"
          icon={<Users className="h-4 w-4" />}
        />
        <RiskScoreCard
          title="Tariff Impact"
          value="$1.2M"
          change="+$320K"
          trend="up"
          description="Estimated monthly impact"
          icon={<TrendingUp className="h-4 w-4" />}
        />
      </div>

      {/* Controlled tabs with onClick handlers to ensure client-side navigation works */}
      <div className="space-y-4">
        <div className="flex border-b">
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'overview' ? 'border-b-2 border-teal-600 text-teal-600' : 'text-gray-500'}`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('overview');
            }}
          >
            Overview
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'suppliers' ? 'border-b-2 border-teal-600 text-teal-600' : 'text-gray-500'}`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('suppliers');
            }}
          >
            Suppliers
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'disruptions' ? 'border-b-2 border-teal-600 text-teal-600' : 'text-gray-500'}`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('disruptions');
            }}
          >
            Disruptions
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'news' ? 'border-b-2 border-teal-600 text-teal-600' : 'text-gray-500'}`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('news');
            }}
          >
            News & Alerts
          </button>
        </div>

        {/* Tab content */}
        <div className="mt-4">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Global Supply Chain Disruptions</CardTitle>
                    <CardDescription>Real-time view of active disruptions affecting your supply chain</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <SupplyChainMap />
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Risk Trend Analysis</CardTitle>
                    <CardDescription>30-day risk score trend by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RiskTrendChart />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="space-y-1">
                      <CardTitle>Recent Disruptions</CardTitle>
                      <CardDescription>Latest supply chain events affecting your operations</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <RecentDisruptions />
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
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
