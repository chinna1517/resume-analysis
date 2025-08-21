import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { ResumeAnalysis } from './components/ResumeAnalysis';
import { Header } from './components/Header';
import { Features } from './components/Features';
import { ResumeData } from './types/resume';

function App() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileUpload = async (file: File) => {
    setIsAnalyzing(true);
    
    // Simulate file processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock resume data - in a real app, this would come from your backend
    const mockData: ResumeData = {
      personalInfo: {
        name: "John Doe",
        email: "john.doe@email.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA"
      },
      skills: [
        { name: "Python", level: "Advanced", category: "Programming" },
        { name: "JavaScript", level: "Intermediate", category: "Programming" },
        { name: "React", level: "Intermediate", category: "Frontend" },
        { name: "Machine Learning", level: "Advanced", category: "AI/ML" },
        { name: "SQL", level: "Intermediate", category: "Database" },
        { name: "AWS", level: "Beginner", category: "Cloud" }
      ],
      experience: [
        {
          title: "Software Engineer",
          company: "Tech Corp",
          duration: "2022 - Present",
          description: "Developed web applications using React and Node.js"
        },
        {
          title: "Data Analyst Intern",
          company: "Data Solutions Inc",
          duration: "2021 - 2022",
          description: "Analyzed customer data and created visualization dashboards"
        }
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          institution: "University of Technology",
          year: "2021",
          gpa: "3.8"
        }
      ],
      projects: [
        {
          name: "E-commerce Platform",
          description: "Built a full-stack e-commerce application with React and Node.js",
          technologies: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
          name: "ML Prediction Model",
          description: "Developed a machine learning model for sales forecasting",
          technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"]
        }
      ],
      overallScore: 78,
      atsScore: 85,
      recommendations: {
        skills: ["Docker", "Kubernetes", "TypeScript", "GraphQL"],
        courses: [
          "Advanced React Development",
          "Cloud Architecture with AWS",
          "Machine Learning Engineering",
          "DevOps Fundamentals"
        ],
        improvements: [
          "Add more quantifiable achievements to your experience section",
          "Include relevant certifications to boost credibility",
          "Optimize keywords for ATS compatibility",
          "Add a professional summary section"
        ]
      }
    };
    
    setResumeData(mockData);
    setIsAnalyzing(false);
  };

  const handleReset = () => {
    setResumeData(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {!resumeData && !isAnalyzing && (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                AI-Powered Resume Analyzer
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get instant insights, skill recommendations, and ATS optimization tips 
                to boost your career prospects
              </p>
            </div>
            
            <FileUpload onFileUpload={handleFileUpload} />
            <Features />
          </>
        )}
        
        {isAnalyzing && (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mb-4"></div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Analyzing Your Resume</h2>
            <p className="text-gray-600">Please wait while we process your resume...</p>
          </div>
        )}
        
        {resumeData && (
          <ResumeAnalysis data={resumeData} onReset={handleReset} />
        )}
      </main>
    </div>
  );
}

export default App;