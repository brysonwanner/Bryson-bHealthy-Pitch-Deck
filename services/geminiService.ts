import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCollaborationIdeas = async (brandName: string, brandIndustry: string) => {
  const model = "gemini-2.5-flash";
  
  const prompt = `
    You are the AI agent for a content creator named "Bryson bHealthy".
    Bryson is a weightloss and fitness influencer who values Integrity, Charity, Accountability, and Endurance above all else.
    He refuses to be a sell-out. He only promotes products that actually help people.
    
    A brand named "${brandName}" (Industry context: ${brandIndustry || 'General'}) is interested in partnering.
    
    Generate 3 short, creative, and specific collaboration ideas that Bryson could pitch to them.
    These ideas must align with his core values (e.g., honest reviews, community challenges, educational content).
    
    Format the output as a JSON array of objects with 'title' and 'description' keys.
    Example:
    [
      { "title": "The Integrity Review", "description": "A raw, unedited 30-day trial..." }
    ]
  `;

  try {
    const result = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });
    
    return JSON.parse(result.text);
  } catch (error) {
    console.error("Error generating ideas:", error);
    return [
      { title: "The Honest Journey", description: "Bryson integrates the product into his daily routine for 30 days and documents the unfiltered results." },
      { title: "Community Challenge", description: "A co-branded accountability challenge where followers use the product to reach a specific health milestone." },
      { title: "Educational Deep Dive", description: "A video explaining the science behind the product, aligning with Bryson's value of Intelligence." }
    ];
  }
};
