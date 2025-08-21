import React from 'react';
import { Recommendations as RecommendationsType } from '../types/resume';
import { BookOpen, Plus, AlertTriangle, ExternalLink } from 'lucide-react';

interface RecommendationsProps {
  recommendations: RecommendationsType;
}

export const Recommendations: React.FC<RecommendationsProps> = ({ recommendations }) => {
  return (
    <div className="space-y-8">
      {/* Skill Recommendations */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Plus className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Recommended Skills</h3>
        </div>
        
        <p className="text-gray-600 mb-4">
          Based on your current profile, these skills could enhance your marketability:
        </p>
        
        <div className="grid md:grid-cols-2 gap-3">
          {recommendations.skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">{skill}</span>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Course Recommendations */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Recommended Courses</h3>
        </div>
        
        <p className="text-gray-600 mb-4">
          These courses align with your career goals and skill gaps:
        </p>
        
        <div className="space-y-3">
          {recommendations.courses.map((course, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
              <div>
                <h4 className="font-medium text-gray-900">{course}</h4>
                <p className="text-sm text-gray-500">Online Course • Self-paced</p>
              </div>
              <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium">
                <span>View Course</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Improvement Suggestions */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Areas for Improvement</h3>
        </div>
        
        <p className="text-gray-600 mb-4">
          Consider these suggestions to strengthen your resume:
        </p>
        
        <div className="space-y-3">
          {recommendations.improvements.map((improvement, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
              <p className="text-gray-700">{improvement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};