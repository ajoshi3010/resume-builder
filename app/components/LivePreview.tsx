import React from 'react';
import ResumePreview from './ResumePreview';
import ResumePreview2 from './ResumePreview2';
interface UserData {
  skills: { name: string; level: string }[];
  education: { degree: string; institution: string; startDate: string; endDate: string }[];
  experience: { title: string; company: string; startDate: string; endDate: string; description: string }[];
  achievements: { title: string; description: string; date: string }[];
}

interface LivePreviewProps {
  template: number;
  selectedSections: { [key: string]: string[] };
  userData: UserData;
}

const LivePreview: React.FC<LivePreviewProps> = ({ template, selectedSections, userData }) => {
  return (
    <div>
  {template === 1 ? (
    <ResumePreview selectedSections={selectedSections} userData={userData} />
  ) : template === 2 ? (
    <ResumePreview2 selectedSections={selectedSections} userData={userData} />
  ) : (
    <div className="text-center text-gray-500">
      Please select a valid template to preview.
    </div>
  )}
</div>

  );
};

export default LivePreview;
