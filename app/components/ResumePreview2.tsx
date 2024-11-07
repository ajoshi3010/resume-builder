import React, { useRef } from 'react';

interface ResumePreview2Props {
  selectedSections: { [section: string]: string[] };
  userData: {
    skills: { name: string; level: string }[];
    education: { degree: string; institution: string; startDate: string; endDate: string }[];
    experience: { title: string; company: string; startDate: string; endDate: string; description: string }[];
    achievements: { title: string; description: string; date: string }[];
  };
}

const ResumePreview2: React.FC<ResumePreview2Props> = ({ selectedSections, userData }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4 sm:p-8">
      <div className="flex w-full max-w-6xl text-gray-800 font-sans text-sm space-x-6">
        
        {/* Resume Container */}
        <div ref={resumeRef} className="flex w-full text-gray-800 font-sans text-sm space-x-6 bg-white shadow-lg rounded-xl p-4 sm:p-8">
          <div className="max-w-5xl mx-auto p-6">
            {/* Header */}
            <header className="text-center mb-6">
              <h1 className="text-4xl font-bold">Anirudh</h1>
              <p className="text-lg mt-1">
                Hyderabad | 
                <a href={`mailto:anirudh@gmail.com`} className="text-blue-600 hover:underline ml-2">anirudh@gmail.com</a> | 
                <a href={`tel:8639464974`} className="text-blue-600 hover:underline ml-2">8639464974</a> | 
                <a href="mywebsite.com" className="text-blue-600 hover:underline ml-2">mywebsite.com</a> | 
                <a href="mylinkedin" className="text-blue-600 hover:underline ml-2">LinkedIn</a> | 
                <a href="mygithub" className="text-blue-600 hover:underline ml-2">GitHub</a>
              </p>
            </header>

            {/* Education Section */}
            {selectedSections.education && selectedSections.education.length > 0 && (
              <section className="mb-6">
                <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Education</h2>
                {userData.education.map((edu, index) => (
                  selectedSections.education.includes(edu.degree) && (
                    <div className="grid grid-cols-2 gap-4 mb-4" key={index}>
                      <div>
                        <p className="font-semibold">{edu.startDate}-{edu.endDate}</p>
                        <p className="text-lg">{edu.institution}, {edu.degree}</p>
                      </div>
                    </div>
                  )
                ))}
              </section>
            )}

            {/* Experience Section */}
            {selectedSections.experience && selectedSections.experience.length > 0 && (
              <section className="mb-6">
                <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Experience</h2>
                {userData.experience.map((job, index) => (
                  selectedSections.experience.includes(job.title) && (
                    <div className="mb-6" key={index}>
                      <div className="flex justify-between">
                        <p className="font-semibold">{job.startDate}-{job.endDate}</p>
                        <p className="text-right font-semibold">{job.title}, {job.company}</p>
                      </div>
                      <p className="text-lg">{job.description}</p>
                    </div>
                  )
                ))}
              </section>
            )}

            {/* Skills Section */}
            {selectedSections.skills && selectedSections.skills.length > 0 && (
              <section className="mb-6">
                <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Skills</h2>
                <ul className="list-disc ml-6 space-y-1">
                  {userData.skills.map((skill, index) => (
                    selectedSections.skills.includes(skill.name) && (
                      <li key={index}>{skill.name} ({skill.level})</li>
                    )
                  ))}
                </ul>
              </section>
            )}

            {/* Achievements Section */}
            {selectedSections.achievements && selectedSections.achievements.length > 0 && (
              <section className="mb-6">
                <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Achievements</h2>
                {userData.achievements.map((achievement, index) => (
                  selectedSections.achievements.includes(achievement.title) && (
                    <div className="mb-6" key={index}>
                      <div className="flex justify-between">
                        <p className="text-right">{achievement.date}</p>
                      </div>
                      <p>{achievement.description}</p>
                    </div>
                  )
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview2;
