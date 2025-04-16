"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardHeader } from "@/app/components/dashboard/dashboard-header";
import { DashboardShell } from "@/app/components/dashboard/dashboard-shell";
import { NewsAlerts } from "@/components/dashboard/news-alert";
import { Globe } from "lucide-react";

export default function NewsTabPage() {
    return (
        <DashboardShell>
            <DashboardHeader 
                heading="News & Alerts" 
                text="Latest supply chain news and disruption alerts from around the world."
            >
                <Badge className="bg-teal-600 text-white">
                    <Globe className="mr-1 h-3 w-3" />
                    Powered by Craftora
                </Badge>
            </DashboardHeader>
            
            <div className="grid gap-4">
                <Card className="col-span-3">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Global Supply Chain News</CardTitle>
                                <CardDescription>Latest news affecting supply chains and logistics operations worldwide</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <NewsAlerts />
                    </CardContent>
                </Card>
            </div>
        </DashboardShell>
    );
}