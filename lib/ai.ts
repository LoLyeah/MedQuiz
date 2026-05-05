import { GoogleGenAI } from '@google/genai';
import { Question, Difficulty, AppSettings } from './types';

export async function generateQuestions(
  count: number,
  difficulty: Difficulty,
  settings: AppSettings
): Promise<Question[]> {
  const prompt = `Generate ${count} medical diagnosis multiple-choice questions. 
Difficulty: ${difficulty}. 
Return a JSON array of objects. Each object must have exactly these keys:
- caseStudy: a short clinical clinical case study string (e.g. "A 45-year-old male presents with...")
- options: array of exactly 5 string choices (medical conditions)
- answer: the correct string (must exactly match one of the options)
- explanation: a detailed clinical insight explaining why the answer is correct and others are less likely.
- tags: array of 2-3 short strings describing topics (e.g. ["Cardiology", "Arrhythmia"]).
Respond ONLY with the JSON array, no markdown formatting like \`\`\`json.`;

  const isCustom = settings.apiProvider === 'custom' || settings.useCustomApi;
  const isUserGemini = settings.apiProvider === 'user-gemini';

  if (isCustom && settings.customApiEndpoint) {
    const res = await fetch(settings.customApiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(settings.customApiKey ? { 'Authorization': `Bearer ${settings.customApiKey}` } : {})
      },
      body: JSON.stringify({
        model: settings.customApiModel || "llama3-8b-8192",
        messages: [{ role: "user", content: prompt }]
      })
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch from custom API');
    }

    const data = await res.json();
    let content = data.choices?.[0]?.message?.content || data.content || '';
    
    // Clean up Markdown backticks if they exist
    content = content.replace(/```json/g, '').replace(/```/g, '');
    
    // Fallback: try to find the array boundaries
    const startIdx = content.indexOf('[');
    const endIdx = content.lastIndexOf(']');
    if (startIdx >= 0 && endIdx >= startIdx) {
        content = content.substring(startIdx, endIdx + 1);
    }

    const parsed: Omit<Question, 'id' | 'source' | 'difficulty'>[] = JSON.parse(content);
    return parsed.map(p => ({
      ...p,
      id: `ai-${Math.random().toString(36).substring(7)}`,
      source: 'ai',
      difficulty,
      modelId: settings.customApiModel || "custom-model"
    }));
  } else {
    let apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (isUserGemini && settings.userGeminiKey) {
      apiKey = settings.userGeminiKey;
    }
    
    if (!apiKey) {
      throw new Error('Gemini API Key is missing. Please provide it in settings or ensure default is configured.');
    }
    const ai = new GoogleGenAI({ apiKey: apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const text = response.text || '';
    const parsed: Omit<Question, 'id' | 'source' | 'difficulty'>[] = JSON.parse(text);
    return parsed.map(p => ({
      ...p,
      id: `ai-${Math.random().toString(36).substring(7)}`,
      source: 'ai',
      difficulty,
      modelId: 'gemini-2.5-flash'
    }));
  }
}

export async function checkApiConnection(settings: AppSettings): Promise<boolean> {
  try {
    const isCustom = settings.apiProvider === 'custom' || settings.useCustomApi;
    const isUserGemini = settings.apiProvider === 'user-gemini';

    if (isCustom && settings.customApiEndpoint) {
      if (!settings.customApiEndpoint) return false;
      const res = await fetch(settings.customApiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(settings.customApiKey ? { 'Authorization': `Bearer ${settings.customApiKey}` } : {})
        },
        body: JSON.stringify({
          model: settings.customApiModel || "llama3-8b-8192",
          messages: [{ role: "user", content: "Reply with ok" }]
        })
      });
      return res.ok;
    } else {
      let apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (isUserGemini && settings.userGeminiKey) {
        apiKey = settings.userGeminiKey;
      }
      if (!apiKey) return false;
      const ai = new GoogleGenAI({ apiKey: apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: 'Reply with ok',
      });
      return !!response.text;
    }
  } catch (e) {
    return false;
  }
}
