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
Respond ONLY with the JSON array, no markdown formatting like \`\`\`json.`;

  if (settings.useCustomApi && settings.customApiEndpoint) {
    const res = await fetch(settings.customApiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(settings.customApiKey ? { 'Authorization': `Bearer ${settings.customApiKey}` } : {})
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      })
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch from custom API');
    }

    const data = await res.json();
    let content = data.choices?.[0]?.message?.content || data.content;
    
    if (content.startsWith('\`\`\`json')) {
        content = content.replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '');
    }

    const parsed: Omit<Question, 'id' | 'source' | 'difficulty'>[] = JSON.parse(content);
    return parsed.map(p => ({
      ...p,
      id: `ai-${Math.random().toString(36).substring(7)}`,
      source: 'ai',
      difficulty
    }));
  } else {
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      throw new Error('NEXT_PUBLIC_GEMINI_API_KEY is missing');
    }
    const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });
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
      difficulty
    }));
  }
}
