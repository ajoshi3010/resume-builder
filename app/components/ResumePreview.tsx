"use client";
import React, { useRef } from 'react';
interface ResumePreviewProps {
  selectedSections: { [section: string]: string[] };
  userData: {
    skills: { name: string; level: string }[];
    education: { degree: string; institution: string; startDate: string; endDate: string }[];
    experience: { title: string; company: string; startDate: string; endDate: string; description: string }[];
    achievements: { title: string; description: string; date: string }[];
  };
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ selectedSections, userData }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4 sm:p-8">
      <div className="flex w-full max-w-6xl text-gray-800 font-sans text-sm space-x-6">
        
        {/* Resume Container */}
        <div ref={resumeRef} className="flex w-full text-gray-800 font-sans text-sm space-x-6 bg-white shadow-lg rounded-xl p-4 sm:p-8">
          
          {/* Left Column */}
          <div className="w-7/12 space-y-6 border-r border-gray-300 pr-4 sm:pr-6">
            <div className="text-3xl font-bold text-gray-900">Your Name Here</div>
            <div className="text-lg text-gray-600">Ph.D. Candidate | Your Specialization</div>

            {/* Experience Section */}
            {selectedSections.experience && (
              <div>
                <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">Experience</h2>
                <div className="space-y-4">
                  {userData.experience
                    .filter((exp) => selectedSections.experience.includes(exp.title))
                    .map((exp, index) => (
                      <div key={index}>
                        <div className="flex justify-between">
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-gray-600 italic">
                            {exp.title} | {exp.startDate} – {exp.endDate}
                          </span>
                        </div>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>{exp.description}</li>
                        </ul>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="w-5/12 space-y-6 pl-4 sm:pl-6">
            {/* Education Section */}
            {selectedSections.education && (
              <div>
                <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">Education</h2>
                {userData.education
                  .filter((edu) => selectedSections.education.includes(edu.degree))
                  .map((edu, index) => (
                    <div key={index}>
                      <span className="font-medium">{edu.institution}</span>
                      <p className="text-gray-600 italic">{edu.degree}, {edu.startDate} – {edu.endDate}</p>
                    </div>
                  ))}
              </div>
            )}

            {/* Skills Section */}
            {selectedSections.skills && (
              <div>
                <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">Skills</h2>
                <ul className="space-y-1 text-gray-700">
                  {userData.skills
                    .filter((skill) => selectedSections.skills.includes(skill.name))
                    .map((skill, index) => (
                      <li key={index}>
                        <span className="font-medium">{skill.name}:</span> {skill.level}
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Achievements Section */}
            {selectedSections.achievements && (
              <div>
                <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">Achievements</h2>
                {userData.achievements
                  .filter((ach) => selectedSections.achievements.includes(ach.title))
                  .map((ach, index) => (
                    <div key={index}>
                      <span className="font-medium">{ach.title}</span>
                      <p>{ach.description}</p>
                      <p className="text-gray-600 italic">{ach.date}</p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
