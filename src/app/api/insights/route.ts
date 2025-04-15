 import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

export async function GET() {
  try {
    // Get API key from environment variables - check both possible environment variable names
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    
    // For debugging - don't log the actual key in production
    console.log('Gemini API Key available:', !!apiKey);
    
    if (!apiKey) {
      console.error('Gemini API key is missing in environment variables');
      // Return fallback insights instead of error
      return NextResponse.json({
        insights: getFallbackInsights(),
        source: 'fallback'
      });
    }

    try {
      // Initialize the Gemini AI client
      const genAI = new GoogleGenerativeAI(apiKey);
      
      // Use the gemini-1.5-flash model with proper configuration
      // Note: If this model doesn't work, fallback to gemini-1.0-pro
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
          },
          {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
          },
        ],
      });

      // Create the prompt for generating supply chain AI insights
      const prompt = `
      As an AI supply chain analyst for SupplyMatrix AI, generate three strategic insights for a global manufacturing company.
      Each insight should focus on different aspects:
      
      1. A tariff or trade policy impact analysis
      2. A warning about a current or imminent supply chain disruption
      3. An opportunity to improve supply chain resilience
      
      For each insight, provide:
      - A brief title (5-7 words)
      - A concise description (1-2 sentences with specific actionable advice)
      - The type: "analysis", "warning", or "opportunity"
      - Priority: 1, 2, or 3 (where 1 is highest priority)
      
      Format your response as a valid JSON object with this structure:
      {
        "insights": [
          {
            "title": "...",
            "content": "...",
            "type": "...",
            "priority": ...
          },
          ...
        ]
      }
      `;

      try {
        // Generate content using Gemini AI with proper error handling
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text().trim();
        
        // Parse the JSON response from Gemini
        try {
          const parsedResponse = JSON.parse(text);
          return NextResponse.json({
            ...parsedResponse,
            source: 'gemini'
          });
        } catch (parseError) {
          console.error('Error parsing Gemini response as JSON:', parseError);
          console.log('Raw response from Gemini:', text);
          
          // Return fallback insights
          return NextResponse.json({
            insights: getFallbackInsights(),
            source: 'fallback-parse-error'
          });
        }
      } catch (generationError) {
        console.error('Error generating content with gemini-1.5-flash:', generationError);
        
        // Try fallback to gemini-1.0-pro
        try {
          const fallbackModel = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
          const fallbackResult = await fallbackModel.generateContent(prompt);
          const fallbackResponse = fallbackResult.response;
          const fallbackText = fallbackResponse.text().trim();
          
          try {
            const parsedResponse = JSON.parse(fallbackText);
            return NextResponse.json({
              ...parsedResponse,
              source: 'gemini-fallback-model'
            });
          } catch (parseError) {
            throw new Error('Failed to parse fallback model response');
          }
        } catch (fallbackError) {
          console.error('Error with fallback model:', fallbackError);
          throw generationError; // re-throw the original error
        }
      }
    } catch (apiError) {
      console.error('Error calling Gemini API:', apiError);
      
      // Return fallback insights
      return NextResponse.json({
        insights: getFallbackInsights(),
        source: 'fallback-api-error'
      });
    }
  } catch (error) {
    console.error('Error in insights API route:', error);
    
    // Return fallback insights even for critical errors
    return NextResponse.json({
      insights: getFallbackInsights(),
      source: 'fallback-critical-error'
    });
  }
}

// Separate function for fallback insights to avoid code duplication
function getFallbackInsights() {
  return [
    {
      title: "Semiconductor Tariff Impact Assessment",
      content: "New 18% tariffs on semiconductor imports will increase component costs by approximately $240K quarterly. Consider increasing inventory before implementation date and negotiating long-term contracts with key suppliers.",
      type: "analysis",
      priority: 1
    },
    {
      title: "Asia-Pacific Port Congestion Warning",
      content: "Severe weather patterns predicted in the South China Sea region will likely cause 7-10 day shipping delays starting next week. Expedite critical shipments and alert customers about potential delays.",
      type: "warning",
      priority: 2
    },
    {
      title: "Near-Shore Manufacturing Opportunity",
      content: "Analysis indicates shifting 35% of electronics assembly to Mexico could reduce logistics costs by 22% and cut lead times by 40%. Conduct feasibility study with top 3 contract manufacturers in Guadalajara.",
      type: "opportunity",
      priority: 3
    }
  ];
}
