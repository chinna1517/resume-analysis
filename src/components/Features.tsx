import React from 'react';
import { Brain, Target, TrendingUp, Shield, BookOpen, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced algorithms analyze your resume content and structure'
  },
  {
    icon: Target,
    title: 'ATS Optimization',
    description: 'Get insights on how to make your resume ATS-friendly'
  },
  {
    icon: TrendingUp,
    title: 'Skill Gap Analysis',
    description: 'Identify missing skills and get personalized recommendations'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data is processed securely and never stored permanently'
  },
  {
    icon: BookOpen,
    title: 'Course Recommendations',
    description: 'Get curated course suggestions to enhance your skills'
  },
  {
    icon: Users,
    title: 'Industry Insights',
    description: 'Compare your profile against industry standards'
  }
];

export const Features: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why Choose Our Resume Analyzer?
        </h2>
        <p className="text-lg text-gray-600">
          Get comprehensive insights to boost your career prospects
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="card hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};