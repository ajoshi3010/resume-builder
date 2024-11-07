"use client";
import { useState } from 'react';
import ResumeSelector from '../components/ResumeSelector';
import CustomizationSidebar from '../components/CustomizationSidebar';
import LivePreview from '../components/LivePreview';

const Home = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<{ [section: string]: string[] }>({
    skills: [],
    education: [],
    experience: [],
    achievements: [],
  });

  // Static data for user details
  const userData = {
    skills: [
      { name: "JavaScript", level: "Advanced" },
      { name: "React", level: "Intermediate" },
      { name: "Node.js", level: "Advanced" },
      { name: "TypeScript", level: "Beginner" }
    ],
    education: [
      { degree: "Bachelor's Degree in Computer Science", institution: "University XYZ", startDate: "2018-08-01", endDate: "2022-06-01" },
      { degree: "Master's Degree in Software Engineering", institution: "University ABC", startDate: "2022-08-01", endDate: "2024-06-01" }
    ],
    experience: [
      { title: "Software Developer", company: "Tech Corp", startDate: "2022-07-01", endDate: "2023-12-31", description: "Developed front-end components using React." },
      { title: "Project Manager", company: "Innovate Ltd.", startDate: "2024-01-01", endDate: "Present", description: "Managed multiple software development projects." }
    ],
    achievements: [
      { title: "Hackathon Winner", description: "Won first place in XYZ Hackathon.", date: "2023-05-15" },
      { title: "Employee of the Year", description: "Awarded Employee of the Year for outstanding performance.", date: "2023-12-20" }
    ]
  };

  // Updated templates array with name, id, and img link
  const templates = [
    { id: 1, name: "Template One", imgLink: "https://via.placeholder.com/150" },
    { id: 2, name: "Template Two", imgLink: "https://via.placeholder.com/150" }
  ];

  const handleTemplateSelect = (template: number) => setSelectedTemplate(template);

  const handleToggleItem = (section: string, item: string) => {
    // Update selected items for the respective section
    const updatedSelectedItems = { ...selectedItems };
    if (updatedSelectedItems[section].includes(item)) {
      updatedSelectedItems[section] = updatedSelectedItems[section].filter((i) => i !== item);
    } else {
      updatedSelectedItems[section].push(item);
    }
    setSelectedItems(updatedSelectedItems); // Update the state in the parent
  };
  return (
    <div className="flex gap-4 p-8">
      {/* Resume Selector on the left with 20% width */}
      <div className="w-1/5">
        <ResumeSelector templates={templates} onSelectTemplate={handleTemplateSelect} />
      </div>

      {/* Live Preview in the center with 60% width */}
      <div className="w-3/5 overflow-hidden">
        <LivePreview template={selectedTemplate} selectedSections={selectedItems} userData={userData} />
      </div>

      {/* Customization Sidebar on the right with 20% width */}
      <div className="w-1/5 overflow-auto">
        <CustomizationSidebar userData={userData} selectedItems={selectedItems} onSectionToggle={handleToggleItem} />
      </div>
    </div>
  );
};

export default Home;
