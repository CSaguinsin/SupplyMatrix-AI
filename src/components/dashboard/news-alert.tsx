"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, ChevronRight, Clock, ExternalLink, Loader2, Zap, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

interface NewsItem {
  title: string;
  description: string;
  content: string;
  pubDate: string;
  link: string;
  image_url?: string;
  source_id: string;
  category: string[];
  ai_summary?: string;
  country: string[];
  sentiment?: 'positive' | 'negative' | 'neutral';
  impact?: 'high' | 'medium' | 'low';
  isFallback?: boolean;
}

export function NewsAlerts() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [aiSummaries, setAiSummaries] = useState<{[key: string]: string}>({});
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [error, setError] = useState("");
  const [dataSource, setDataSource] = useState<string>("loading");
  const { toast } = useToast();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        console.log("NewsAlerts: Fetching news data...");
        
        // Fetch news data from NewsData.io
        const response = await fetch('/api/news');
        console.log("NewsAlerts: API response status:", response.status);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch news data: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("NewsAlerts: Data source:", data.source);
        
        // Check if we have a 'results' property
        if (!data.results || !Array.isArray(data.results)) {
          console.error("NewsAlerts: Unexpected API response format:", data);
          throw new Error("Unexpected API response format - missing results array");
        }
        
        setDataSource(data.source || "unknown");
        
        // Process news data
        const processedNews = data.results.map((item: any) => ({
          title: item.title || "Untitled News",
          description: item.description || '',
          content: item.content || item.description || '',
          pubDate: item.pubDate ? new Date(item.pubDate).toLocaleString() : new Date().toLocaleString(),
          link: item.link || "#",
          image_url: item.image_url,
          source_id: item.source_id || "News Source",
          category: Array.isArray(item.category) ? item.category : [],
          country: Array.isArray(item.country) ? item.country : [],
          isFallback: data.source !== 'newsdata',
        }));
        
        console.log(`NewsAlerts: Processed ${processedNews.length} news items`);
        setNews(processedNews);
        
        // Display toast if using fallback data
        if (data.source !== 'newsdata') {
          toast({
            title: "Using demo news data",
            description: "Live NewsData.io integration unavailable. Check your API key.",
            variant: "default",
          });
        }
        
        // Start generating AI summaries for the news items
        processedNews.forEach(async (item: NewsItem, index: number) => {
          if (index < 5) { // Only summarize the first 5 articles to save API calls
            generateAiSummary(item);
          }
        });
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load supply chain news. Please try again later.');
        
        // Use static fallback data when API fails completely
        const fallbackNews = getFallbackNewsItems();
        setNews(fallbackNews);
        setDataSource("client-fallback");
        
        toast({
          title: "News API Error",
          description: "Using demo data. Please check your API integration.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [toast]);

  const getFallbackNewsItems = (): NewsItem[] => {
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    
    return [
      {
        title: "Global Semiconductor Shortage Impacts Manufacturing",
        description: "The ongoing semiconductor shortage is causing significant disruptions to global manufacturing.",
        content: "Major manufacturers worldwide are continuing to grapple with the effects of the semiconductor shortage. Companies are investing in alternative sourcing strategies.",
        pubDate: yesterday.toLocaleString(),
        link: "#",
        source_id: "Supply Chain Digest",
        category: ["business", "technology"],
        country: ["us", "global"],
        isFallback: true,
      },
      {
        title: "Port Congestion in Asia Threatens Holiday Season",
        description: "Major shipping delays at Asian ports are raising concerns about product availability.",
        content: "Severe congestion at several major Asian ports is causing shipping delays of up to 2-3 weeks.",
        pubDate: now.toLocaleString(),
        link: "#",
        source_id: "Logistics Weekly",
        category: ["business", "shipping"],
        country: ["cn", "sg"],
        isFallback: true,
      },
      {
        title: "New Trade Agreement to Reduce Tariffs",
        description: "A newly signed trade agreement promises to reduce tariffs on manufacturing components.",
        content: "Representatives have signed a new agreement that will reduce tariffs on critical manufacturing components.",
        pubDate: yesterday.toLocaleString(),
        link: "#",
        source_id: "Global Trade Review",
        category: ["business", "politics"],
        country: ["us", "eu"],
        isFallback: true,
      }
    ];
  };

  const generateAiSummary = async (newsItem: NewsItem) => {
    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newsItem.title,
          content: newsItem.content,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate AI summary');
      }

      const data = await response.json();
      
      setAiSummaries(prev => ({
        ...prev,
        [newsItem.title]: data.summary
      }));
    } catch (err) {
      console.error('Error generating AI summary:', err);
    }
  };

  // Function to determine sentiment badge color
  const getSentimentBadge = (newsItem: NewsItem) => {
    const title = newsItem.title.toLowerCase();
    const content = newsItem.content.toLowerCase();
    
    // Simple keyword-based sentiment analysis if not provided
    if (!newsItem.sentiment) {
      const negativeKeywords = ['disruption', 'delay', 'strike', 'shortage', 'crisis', 'risk', 'issue', 'problem', 'tariff', 'shutdown'];
      const positiveKeywords = ['improvement', 'recovery', 'solution', 'opportunity', 'growth', 'resolved', 'partnership'];
      
      const hasNegative = negativeKeywords.some(word => title.includes(word) || content.includes(word));
      const hasPositive = positiveKeywords.some(word => title.includes(word) || content.includes(word));
      
      if (hasNegative && !hasPositive) return 'negative';
      if (hasPositive && !hasNegative) return 'positive';
      return 'neutral';
    }
    
    return newsItem.sentiment;
  };

  // Function to determine impact level
  const getImpactLevel = (newsItem: NewsItem) => {
    const title = newsItem.title.toLowerCase();
    const content = newsItem.content.toLowerCase();
    
    if (!newsItem.impact) {
      const highImpactKeywords = ['critical', 'severe', 'major', 'significant', 'widespread', 'global'];
      const mediumImpactKeywords = ['moderate', 'regional', 'limited', 'partial'];
      
      const hasHighImpact = highImpactKeywords.some(word => title.includes(word) || content.includes(word));
      const hasMediumImpact = mediumImpactKeywords.some(word => title.includes(word) || content.includes(word));
      
      if (hasHighImpact) return 'high';
      if (hasMediumImpact) return 'medium';
      return 'low';
    }
    
    return newsItem.impact;
  };

  // Filter news by category
  const filteredNews = activeCategory === "all" 
    ? news 
    : news.filter(item => 
        item.category.some(cat => cat.toLowerCase().includes(activeCategory.toLowerCase())));

  const renderSentimentBadge = (sentiment: string) => {
    switch(sentiment) {
      case 'positive':
        return <Badge className="bg-green-100 text-green-800">Positive</Badge>;
      case 'negative':
        return <Badge className="bg-red-100 text-red-800">Negative</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Neutral</Badge>;
    }
  };

  const renderImpactBadge = (impact: string) => {
    switch(impact) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800">High Impact</Badge>;
      case 'medium':
        return <Badge className="bg-amber-100 text-amber-800">Medium Impact</Badge>;
      default:
        return <Badge className="bg-blue-100 text-blue-800">Low Impact</Badge>;
    }
  };

  // Get relative time
  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };

  return (
    <div className="space-y-4">
      {dataSource !== 'newsdata' && dataSource !== 'loading' && (
        <div className="rounded-lg bg-amber-50 border-amber-200 border p-3 mb-4 flex items-center gap-2">
          <Info className="h-5 w-5 text-amber-500" />
          <div>
            <p className="text-sm font-medium text-amber-800">
              Using demo data - NewsData.io API integration issue
            </p>
            <p className="text-xs text-amber-700">
              Check your API key or server logs for more information.
            </p>
          </div>
        </div>
      )}
      
      <Tabs defaultValue="all" onValueChange={setActiveCategory}>
        <TabsList className="bg-slate-50 dark:bg-slate-900">
          <TabsTrigger value="all">All News</TabsTrigger>
          <TabsTrigger value="logistics">Logistics</TabsTrigger>
          <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
          <TabsTrigger value="trade">Trade & Tariffs</TabsTrigger>
          <TabsTrigger value="technology">Technology</TabsTrigger>
        </TabsList>
      </Tabs>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
          <span className="ml-2 text-gray-500">Loading supply chain news...</span>
        </div>
      ) : error ? (
        <div className="rounded-lg border border-red-200 p-4 bg-red-50">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <div className="text-red-800">{error}</div>
          </div>
        </div>
      ) : filteredNews.length === 0 ? (
        <div className="rounded-lg border p-4 text-center">
          <p className="text-gray-500">No news found for this category.</p>
        </div>
      ) : (
        filteredNews.map((item, index) => {
          const sentiment = getSentimentBadge(item);
          const impact = getImpactLevel(item);
          
          return (
            <div key={index} className="rounded-lg border bg-white dark:bg-slate-950 shadow-sm">
              <div className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                      <span className="font-medium">{item.source_id}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {getRelativeTime(item.pubDate)}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {renderSentimentBadge(sentiment)}
                      {renderImpactBadge(impact)}
                      {item.isFallback && (
                        <Badge variant="outline" className="bg-slate-100 text-slate-800 text-xs">
                          Demo Data
                        </Badge>
                      )}
                      {item.category.slice(0, 2).map((cat, idx) => (
                        <Badge key={idx} variant="outline">{cat}</Badge>
                      ))}
                    </div>
                    
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                    
                    {aiSummaries[item.title] && (
                      <Card className="mt-3 bg-teal-50 dark:bg-teal-950/50">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Zap className="h-4 w-4 text-teal-600" />
                            <span className="text-xs font-bold text-teal-700">AI ANALYSIS</span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-200">{aiSummaries[item.title]}</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                  
                  {item.image_url && (
                    <div className="hidden md:block flex-shrink-0">
                      <img 
                        src={item.image_url} 
                        alt={item.title} 
                        className="h-24 w-32 object-cover rounded-md" 
                      />
                    </div>
                  )}
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm" asChild>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Read Full Article
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
