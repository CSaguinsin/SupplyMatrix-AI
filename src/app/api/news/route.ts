import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get API key from environment variables - check both possible environment variable names
    const apiKey = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY || process.env.NEWSDATA_API_KEY;
    
    // For debugging - don't log the actual key in production
    console.log('NewsData API Key available:', !!apiKey);
    
    if (!apiKey) {
      console.error('NewsData API key is missing in environment variables');
      // Return fallback news data instead of error
      return NextResponse.json({
        results: getFallbackNewsData(),
        source: 'fallback'
      });
    }

    // Supply chain related keywords for news search
    const keywords = [
      'supply chain disruption',
      'logistics delays',
      'shipping crisis',
      'manufacturing shortage',
      'port congestion',
      'global trade',
      'tariff impact',
      'semiconductor shortage',
      'raw material shortage',
      'inventory management',
      'supplier risk',
      'transportation delays'
    ].join(' OR ');

    try {
      // Construct the NewsData.io API URL with relevant parameters
      const url = new URL('https://newsdata.io/api/1/news');
      url.searchParams.append('apikey', apiKey);
      url.searchParams.append('q', keywords);
      url.searchParams.append('language', 'en');
      url.searchParams.append('size', '10'); // Get 10 news articles
      url.searchParams.append('category', 'business,technology,world');

      // Fetch data from NewsData.io
      const response = await fetch(url.toString(), { 
        next: { revalidate: 3600 } // Cache for 1 hour
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('NewsData API error:', errorText, 'Status:', response.status);
        
        // Return fallback news data
        return NextResponse.json({
          results: getFallbackNewsData(),
          source: 'fallback-api-error',
          statusCode: response.status
        });
      }

      const data = await response.json();
      
      // Add source information to the response
      return NextResponse.json({
        ...data,
        source: 'newsdata'
      });
    } catch (apiError) {
      console.error('Error in NewsData API call:', apiError);
      
      // Return fallback news data
      return NextResponse.json({
        results: getFallbackNewsData(),
        source: 'fallback-request-error'
      });
    }
  } catch (error) {
    console.error('Error in news API route:', error);
    
    // Return fallback news data even for critical errors
    return NextResponse.json({
      results: getFallbackNewsData(),
      source: 'fallback-critical-error'
    });
  }
}

// Separate function for fallback news data to avoid code duplication
function getFallbackNewsData() {
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  
  return [
    {
      title: "Global Semiconductor Shortage Impacts Manufacturing",
      description: "The ongoing semiconductor shortage is causing significant disruptions to global manufacturing, particularly in the automotive and electronics industries.",
      content: "Major manufacturers worldwide are continuing to grapple with the effects of the semiconductor shortage that began in 2020. Recent reports indicate that the situation may persist through 2025, with automotive production estimated to be down by as much as 15% compared to pre-shortage forecasts. Companies are investing in alternative sourcing strategies and redesigning products to require fewer chips.",
      pubDate: yesterday.toISOString(),
      link: "https://example.com/semiconductor-shortage-2025",
      source_id: "Supply Chain Digest",
      category: ["business", "technology", "manufacturing"],
      country: ["us", "global"]
    },
    {
      title: "Port Congestion in Asia Threatens Holiday Season Deliveries",
      description: "Major shipping delays at Asian ports are raising concerns about product availability for the upcoming holiday season.",
      content: "Severe congestion at several major Asian ports, including Shanghai and Singapore, is causing shipping delays of up to 2-3 weeks. Retailers are already warning that popular items may be in short supply for the holiday season. The congestion stems from a combination of labor shortages, pandemic restrictions, and a surge in demand as economies reopen. Logistics experts recommend businesses implement alternative shipping routes and increase buffer inventory.",
      pubDate: now.toISOString(),
      link: "https://example.com/port-congestion-holiday-impact",
      source_id: "Logistics Weekly",
      category: ["business", "shipping", "retail"],
      country: ["cn", "sg", "global"]
    },
    {
      title: "New Trade Agreement to Reduce Tariffs on Manufacturing Components",
      description: "A newly signed trade agreement between major economies promises to reduce tariffs on critical manufacturing components.",
      content: "Representatives from the United States, European Union, Japan, and South Korea have signed a new agreement that will reduce tariffs on critical manufacturing components by an average of 18%. The agreement, set to take effect in January, focuses primarily on electronics, automotive parts, and raw materials. Industry analysts predict this could reduce manufacturing costs by 5-8% for companies in these sectors and help mitigate ongoing supply chain challenges.",
      pubDate: yesterday.toISOString(),
      link: "https://example.com/trade-agreement-tariff-reduction",
      source_id: "Global Trade Review",
      category: ["business", "politics", "trade"],
      country: ["us", "eu", "jp", "kr"]
    },
    {
      title: "AI-Powered Supply Chain Solutions Gain Traction Among Major Retailers",
      description: "Retailers are increasingly turning to artificial intelligence to optimize their supply chains and prevent disruptions.",
      content: "Major retailers including Walmart, Target, and Amazon are investing heavily in AI-powered supply chain solutions to better predict demand, optimize inventory, and identify potential disruptions before they impact operations. These systems can analyze thousands of variables from weather patterns to social media trends to provide more accurate forecasting. Early adopters report a 35% reduction in stockouts and a 28% decrease in excess inventory costs.",
      pubDate: now.toISOString(),
      link: "https://example.com/ai-supply-chain-retail",
      source_id: "Retail Technology Today",
      category: ["technology", "business", "retail"],
      country: ["us", "global"]
    },
    {
      title: "Rising Fuel Costs Impacting Global Logistics Operations",
      description: "Logistics companies are implementing surcharges as fuel prices continue to climb worldwide.",
      content: "With global fuel prices reaching multi-year highs, shipping and logistics companies are implementing fuel surcharges that are expected to increase transportation costs by 10-15%. The increases are affecting all transportation modes, including sea, air, and ground freight. Industry experts recommend businesses review their shipping contracts, consider consolidating shipments, and explore alternative transportation methods to mitigate these rising costs.",
      pubDate: yesterday.toISOString(),
      link: "https://example.com/fuel-costs-logistics-impact",
      source_id: "Transport Weekly",
      category: ["business", "economy", "transportation"],
      country: ["global"]
    }
  ];
}
