export type Difficulty = 'easy' | 'medium' | 'hard';
export type ApiProvider = 'system-gemini' | 'user-gemini' | 'custom';

export interface Question {
  id: string;
  caseStudy: string;
  options: string[];
  answer: string;
  explanation: string;
  difficulty: Difficulty;
  source: 'local' | 'ai';
  tags?: string[];
}

export interface UserStats {
  score: number;
  xp: number;
  level: number;
  longestStreak: number;
  gamesPlayed: number;
  badges: string[];
  solvedCases?: string[];
}

export interface AppSettings {
  difficulty: Difficulty;
  useCustomApi: boolean;
  apiProvider?: ApiProvider;
  customApiEndpoint?: string;
  customApiKey?: string;
  userGeminiKey?: string;
}
