import React from 'react';
import { Experience, Project } from '../types/resume';
import { Briefcase, Code, Calendar } from 'lucide-react';

interface ExperienceSectionProps {
  experience: Experience[];
  projects: Project[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience, projects }) => {
  return (
    <div className="space-y-8">
      {/* Experience */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Work Experience</h3>
        </div>
        
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4 pb-6 last:pb-0">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">{exp.duration}</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">{exp.title}</h4>
              <p className="text-primary-600 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Projects</h3>
        </div>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h4>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-primary-100 text-primary-700 text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};