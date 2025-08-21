import React from 'react';
import { PersonalInfo as PersonalInfoType } from '../types/resume';
import { Mail, Phone, MapPin, User } from 'lucide-react';

interface PersonalInfoProps {
  data: PersonalInfoType;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ data }) => {
  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <User className="w-5 h-5 text-primary-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <User className="w-5 h-5 text-gray-400" />
          <span className="text-gray-900 font-medium">{data.name}</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-400" />
          <a href={`mailto:${data.email}`} className="text-primary-600 hover:text-primary-700">
            {data.email}
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-gray-400" />
          <a href={`tel:${data.phone}`} className="text-primary-600 hover:text-primary-700">
            {data.phone}
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-gray-400" />
          <span className="text-gray-700">{data.location}</span>
        </div>
      </div>
    </div>
  );
};