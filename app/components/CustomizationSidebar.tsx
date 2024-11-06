import { useState } from 'react';

const sections = ['Skills', 'Education', 'Experience', 'Achievements'];

const CustomizationSidebar = ({ onSectionToggle }) => {
  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  const handleToggle = (section: string) => {
    const updatedSections = selectedSections.includes(section)
      ? selectedSections.filter((sec) => sec !== section)
      : [...selectedSections, section];
    setSelectedSections(updatedSections);
    onSectionToggle(updatedSections);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-sm w-64">
      <h2 className="text-xl font-semibold mb-4">Edit your resume</h2>
      {sections.map((section, index) => (
        <div key={index} className="mb-2 flex items-center">
          <input
            type="checkbox"
            id={section}
            checked={selectedSections.includes(section)}
            onChange={() => handleToggle(section)}
            className="mr-2"
          />
          <label htmlFor={section} className="cursor-pointer text-gray-700 font-medium">{section}</label>
        </div>
      ))}
    </div>
  );
};

export default CustomizationSidebar;
