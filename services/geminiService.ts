
import { GoogleGenAI } from "@google/genai";
import { MENU_DATA } from "../constants.tsx";

// Robust API key initialization for browser environments
const getApiKey = () => {
  try {
    return (window as any).process?.env?.API_KEY || '';
  } catch {
    return '';
  }
};

export const getCoffeeRecommendation = async (userQuery: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    const menuContext = MENU_DATA.map(m => `${m.name} (${m.category}): ${m.description} - ${m.price}`).join('\n');
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the Virtual Concierge for Lucid Cafe in NYC. 
      The menu is:
      ${menuContext}
      
      User asks: "${userQuery}"
      
      Suggest the best 1-2 items from our menu based on their request. Keep the tone luxurious, warm, and brief. Mention the ingredients and why they would love it.`,
      config: {
        systemInstruction: "You are an upscale NYC cafe concierge. Be elegant, helpful, and concise.",
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't find a recommendation for you. Please ask our baristas when you arrive!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. Please check our menu highlights!";
  }
};
