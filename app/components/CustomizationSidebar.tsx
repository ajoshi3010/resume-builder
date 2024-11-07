"use client"
import { useState } from 'react';

// Define the types for the component's props
interface CustomizationSidebarProps {
  userData: {
    skills: { name: string; level: string }[];
    education: { degree: string; institution: string }[];
    experience: { title: string; company: string; description: string }[];
    achievements: { title: string; description: string }[];
  };
  selectedItems: { [section: string]: string[] }; // Selected items are passed as props
  onSectionToggle: (section: string, item: string) => void; // Function to toggle section items
}

const CustomizationSidebar: React.FC<CustomizationSidebarProps> =  ({ userData, selectedItems, onSectionToggle }) => {

  
  const handleToggleItem = (section: string, item: string) => {
    // Use the handler passed from the parent
    onSectionToggle(section, item);
  };
  return (
    <div className="fixed top-0 right-0 p-4 border border-gray-300 rounded-md shadow-sm w-64 h-full overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Edit your resume</h2>
      {[ 
        { name: 'skills', items: userData.skills.map((skill) => skill.name),heading:"Skills" },
        { name: 'education', items: userData.education.map((edu) => edu.degree),heading:"Education" },
        { name: 'experience', items: userData.experience.map((exp) => exp.title) ,heading:"Experience"},
        { name: 'achievements', items: userData.achievements.map((ach) => ach.title) ,heading:"Achievements"},
      ].map((section) => (
        <div key={section.name} className="mb-4">
          <h3 className="cursor-pointer text-gray-700 font-medium">{section.heading}</h3>
          <div className="mt-2 pl-4">
            {section.items.map((item) => (
              <div key={item} className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id={item}
                  checked={selectedItems[section.name]?.includes(item) ?? false} // Safe check
                  onChange={() => handleToggleItem(section.name, item)}
                  className="mr-2"
                />
                <label htmlFor={item} className="cursor-pointer text-gray-700 font-medium">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomizationSidebar;
