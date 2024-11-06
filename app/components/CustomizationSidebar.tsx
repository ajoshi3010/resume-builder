import { useState } from 'react';

const sections = [
  { name: 'Skills', items: ['JavaScript', 'React', 'Node.js', 'TypeScript'] },
  { name: 'Education', items: ['Bachelor\'s Degree', 'Master\'s Degree'] },
  { name: 'Experience', items: ['Software Developer', 'Project Manager'] },
  { name: 'Achievements', items: ['Hackathon Winner', 'Employee of the Year'] },
];

// Define the type for the component's props
interface CustomizationSidebarProps {
  onSectionToggle: (sections: string[]) => void;
}

const CustomizationSidebar: React.FC<CustomizationSidebarProps> = ({ onSectionToggle }) => {
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const handleToggleSection = (section: string) => {
    const updatedOpenSections = new Set(openSections);
    if (updatedOpenSections.has(section)) {
      updatedOpenSections.delete(section);
    } else {
      updatedOpenSections.add(section);
    }
    setOpenSections(updatedOpenSections);
  };

  const handleToggleItem = (section: string, item: string) => {
    const updatedSections = selectedSections.includes(item)
      ? selectedSections.filter((sec) => sec !== item)
      : [...selectedSections, item];
    setSelectedSections(updatedSections);
    onSectionToggle(updatedSections); // Pass updated sections to the parent
  };

  return (
    <div className="fixed top-0 right-0 p-4 border border-gray-300 rounded-md shadow-sm w-64 h-full overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Edit your resume</h2>
      {sections.map((section) => (
        <div key={section.name} className="mb-4">
          <div
            className="cursor-pointer text-gray-700 font-medium flex justify-between items-center"
            onClick={() => handleToggleSection(section.name)}
          >
            <span>{section.name}</span>
            <span>{openSections.has(section.name) ? '-' : '+'}</span>
          </div>
          {openSections.has(section.name) && (
            <div className="mt-2 pl-4">
              {section.items.map((item) => (
                <div key={item} className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    id={item}
                    checked={selectedSections.includes(item)}
                    onChange={() => handleToggleItem(section.name, item)}
                    className="mr-2"
                  />
                  <label htmlFor={item} className="cursor-pointer text-gray-700 font-medium">{item}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomizationSidebar;
