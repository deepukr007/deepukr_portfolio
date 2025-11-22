
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  skills: string[];
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  technologies: string[];
  points: string[];
  link?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
  grade: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Hobby {
  name: string;
  icon: string;
  description: string;
}
