import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

export async function POST(request: Request) {
  try {
    // Get API key from environment variables - check both possible environment variable names
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    
    // For debugging - don't log the actual key in production
    console.log('Gemini API Key available for summarization:', !!apiKey);
    
    if (!apiKey) {
      console.error('Gemini API key is missing in environment variables');
      return NextResponse.json({ 
        summary: "Unable to generate AI summary. API key missing.",
        source: "error"
      });
    }

    // Get request body
    const { title, content } = await request.json();
    
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
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

      // Create the prompt for supply chain-focused analysis
      const prompt = `
      As a supply chain analyst for SupplyMatrix AI, analyze the following news article and provide a concise 2-3 sentence summary 
      focused specifically on potential supply chain impacts. Highlight risks, disruptions, or opportunities relevant to global supply chains.
      
      News Title: ${title}
      
      News Content: ${content}
      
      Supply Chain Impact Analysis (2-3 sentences only):
      `;

      try {
        // Generate content using Gemini AI with proper error handling
        const result = await model.generateContent(prompt);
        const response = result.response;
        const summary = response.text().trim();

        // Return the AI-generated summary
        return NextResponse.json({ 
          summary,
          source: "gemini" 
        });
      } catch (generationError) {
        console.error('Error generating summary with gemini-1.5-flash:', generationError);
        
        // Try fallback to gemini-1.0-pro
        try {
          const fallbackModel = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
          const fallbackResult = await fallbackModel.generateContent(prompt);
          const fallbackResponse = fallbackResult.response;
          const fallbackSummary = fallbackResponse.text().trim();
          
          return NextResponse.json({ 
            summary: fallbackSummary,
            source: "gemini-fallback-model" 
          });
        } catch (fallbackError) {
          console.error('Error with fallback model:', fallbackError);
          
          return generateFallbackSummary(title, content);
        }
      }
    } catch (apiError) {
      console.error('Error in Gemini API call:', apiError);
      return generateFallbackSummary(title, content);
    }
  } catch (error) {
    console.error('Error in summarize API route:', error);
    return NextResponse.json({ 
      summary: "An error occurred while generating the AI summary. Using rule-based analysis instead.",
      source: "error" 
    });
  }
}

// Generate a basic summary when AI fails
function generateFallbackSummary(title: string, content: string) {
  // Simple keyword-based analysis
  const supplyChainKeywords = [
    { keyword: "shortage", impact: "potential supply constraints" },
    { keyword: "disruption", impact: "supply chain delays" },
    { keyword: "tariff", impact: "increased costs" },
    { keyword: "port", impact: "logistics challenges" },
    { keyword: "factory", impact: "production issues" },
    { keyword: "inventory", impact: "stock management concerns" },
    { keyword: "logistics", impact: "distribution challenges" },
    { keyword: "shipping", impact: "transport delays" },
    { keyword: "supplier", impact: "vendor relationship considerations" },
    { keyword: "manufacturing", impact: "production implications" }
  ];
  
  // Detect keywords in content
  const detectedKeywords = supplyChainKeywords.filter(item => 
    title.toLowerCase().includes(item.keyword) || content.toLowerCase().includes(item.keyword)
  );
  
  if (detectedKeywords.length > 0) {
    // Use detected keywords to generate summary
    const impacts = detectedKeywords.slice(0, 2).map(k => k.impact);
    return NextResponse.json({
      summary: `This news may cause ${impacts.join(" and ")} for supply chains. Companies should monitor the situation and develop contingency plans accordingly.`,
      source: "rule-based"
    });
  }
  
  // Generic fallback if no keywords detected
  return NextResponse.json({
    summary: "This news may have indirect implications for global supply chains. Businesses should assess potential impacts on their specific operations and monitor for further developments.",
    source: "generic-fallback"
  });
}
