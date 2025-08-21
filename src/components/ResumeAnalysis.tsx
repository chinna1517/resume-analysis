import React, { useState } from 'react';
import { ResumeData } from '../types/resume';
import { ScoreCard } from './ScoreCard';
import { SkillsAnalysis } from './SkillsAnalysis';
import { Recommendations } from './Recommendations';
import { PersonalInfo } from './PersonalInfo';
import { ExperienceSection } from './ExperienceSection';
import { ArrowLeft, Download, Share2 } from 'lucide-react';

interface ResumeAnalysisProps {
  data: ResumeData;
  onReset: () => void;
}

export const ResumeAnalysis: React.FC<ResumeAnalysisProps> = ({ data, onReset }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'recommendations'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'skills', label: 'Skills Analysis' },
    { id: 'recommendations', label: 'Recommendations' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={onReset}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Upload New Resume</span>
          </button>
          <div className="h-6 w-px bg-gray-300" />
          <h1 className="text-2xl font-bold text-gray-900">Resume Analysis</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="btn-secondary">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </button>
          <button className="btn-primary">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Score Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <ScoreCard
          title="Overall Score"
          score={data.overallScore}
          description="Based on content quality, structure, and completeness"
          color="blue"
        />
        <ScoreCard
          title="ATS Compatibility"
          score={data.atsScore}
          description="How well your resume works with applicant tracking systems"
          color="green"
        />
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PersonalInfo data={data.personalInfo} />
            <ExperienceSection experience={data.experience} projects={data.projects} />
          </div>
          <div>
            <SkillsAnalysis skills={data.skills} />
          </div>
        </div>
      )}

      {activeTab === 'skills' && (
        <SkillsAnalysis skills={data.skills} detailed />
      )}

      {activeTab === 'recommendations' && (
        <Recommendations recommendations={data.recommendations} />
      )}
    </div>
  );
};