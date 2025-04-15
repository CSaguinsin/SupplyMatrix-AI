"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, Loader2, Shield, TrendingUp } from "lucide-react";

interface Insight {
  title: string;
  content: string;
  type: 'warning' | 'opportunity' | 'analysis';
  priority: number;
}

export function GeminiInsights() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true);
        
        // Fetch insights using Gemini AI
        const response = await fetch('/api/insights');
        
        if (!response.ok) {
          throw new Error('Failed to fetch AI insights');
        }
        
        const data = await response.json();
        setInsights(data.insights);
      } catch (err) {
        console.error('Error fetching AI insights:', err);
        
        // Fallback to placeholder insights if API fails
        setInsights([
          {
            title: "Tariff Impact Analysis",
            content: "Recent 25% tariff increases on electronics from Asia will impact 12 of your suppliers. Estimated cost increase: $320K monthly. Consider alternative sourcing from Vietnam or Mexico.",
            type: "analysis",
            priority: 1
          },
          {
            title: "Port Congestion Alert",
            content: "Severe congestion at Port of Rotterdam affecting 8 shipments. Recommend expediting critical components via air freight and increasing safety stock for affected parts.",
            type: "warning",
            priority: 2
          },
          {
            title: "Resilience Opportunity",
            content: "Analysis shows 30% of high-risk components have single-source suppliers. Diversifying top 5 critical components could reduce disruption risk by 45%.",
            type: "opportunity",
            priority: 3
          }
        ]);
        
        setError('Using offline AI insights. Connect to the API for real-time analysis.');
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  const getIconForInsightType = (type: string) => {
    switch(type) {
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'opportunity':
        return <Shield className="h-4 w-4 text-green-500" />;
      case 'analysis':
      default:
        return <TrendingUp className="h-4 w-4 text-amber-500" />;
    }
  };

  const getTitleForInsightType = (type: string, title: string) => {
    if (title) return title;
    
    switch(type) {
      case 'warning':
        return 'Risk Alert';
      case 'opportunity':
        return 'Opportunity Identified';
      case 'analysis':
      default:
        return 'Supply Chain Analysis';
    }
  };

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-teal-600" />
          <span className="ml-2 text-gray-500">Analyzing supply chain data...</span>
        </div>
      ) : (
        <>
          {error && (
            <div className="text-xs text-gray-400 italic mb-2">{error}</div>
          )}
          
          {insights.map((insight, index) => (
            <div key={index} className="rounded-lg border p-3">
              <div className="flex items-center gap-2">
                {getIconForInsightType(insight.type)}
                <p className="text-sm font-medium">
                  {getTitleForInsightType(insight.type, insight.title)}
                </p>
              </div>
              <p className="mt-2 text-sm text-gray-500">{insight.content}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
