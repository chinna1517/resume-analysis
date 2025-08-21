import React from 'react';
import { Skill } from '../types/resume';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface SkillsAnalysisProps {
  skills: Skill[];
  detailed?: boolean;
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

export const SkillsAnalysis: React.FC<SkillsAnalysisProps> = ({ skills, detailed = false }) => {
  const skillLevelMap = {
    'Beginner': 1,
    'Intermediate': 2,
    'Advanced': 3,
    'Expert': 4
  };

  const chartData = skills.map(skill => ({
    name: skill.name,
    level: skillLevelMap[skill.level],
    category: skill.category
  }));

  const categoryData = skills.reduce((acc, skill) => {
    const existing = acc.find(item => item.name === skill.category);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: skill.category, value: 1 });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  if (detailed) {
    return (
      <div className="space-y-8">
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Skills by Proficiency Level</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis domain={[0, 4]} tickFormatter={(value) => {
                const levels = ['', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];
                return levels[value] || '';
              }} />
              <Tooltip formatter={(value: number) => {
                const levels = ['', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];
                return [levels[value], 'Level'];
              }} />
              <Bar dataKey="level" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Skills by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Skills Overview</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <span className="font-medium text-gray-900">{skill.name}</span>
              <span className="text-sm text-gray-500 ml-2">({skill.category})</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-20 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(skillLevelMap[skill.level] / 4) * 100}%` }}
                />
              </div>
              <span className="text-sm text-gray-600 w-20 text-right">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};