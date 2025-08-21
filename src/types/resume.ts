export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
}

export interface Recommendations {
  skills: string[];
  courses: string[];
  improvements: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  overallScore: number;
  atsScore: number;
  recommendations: Recommendations;
}