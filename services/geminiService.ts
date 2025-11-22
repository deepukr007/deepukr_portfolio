import { GoogleGenAI } from "@google/genai";
import { FULL_RESUME_CONTEXT } from "../constants";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateChatResponse = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  if (!apiKey) {
    return "I'm currently in offline mode (API Key missing). Please contact Deepu directly via email!";
  }

  try {
    // We construct a chat session. For simplicity in this stateless service, 
    // we will just send the history + context as a prompt or use a fresh chat if history is short.
    // However, @google/genai supports chat history.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: FULL_RESUME_CONTEXT,
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster simple Q&A
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response = await chat.sendMessage({
      message: message
    });

    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
};