
export interface QuizQuestionType {
  id: string;
  question: string;
  image?: string; // URL to an image (e.g., https://picsum.photos/seed/imagename/300/200)
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
  sources?: GroundingChunk[];
}

export enum Tab {
  Info = 'info',
  Quiz = 'quiz',
}

export interface InfoSection {
  title: string;
  description: string;
  image?: string;
  example?: string;
  subSections?: InfoSection[];
}

export interface GroundingChunk {
  web?: {
    uri?: string; // Made optional
    title?: string; // Made optional
  };
  retrievedContext?: {
    uri: string;
    title: string;
  };
}
