import { useState } from 'react';

interface Template {
  id: number;
  name: string;
  imgLink: string;
}

interface ResumeSelectorProps {
  templates: Template[];
  onSelectTemplate: (template: number) => void;
}

const ResumeSelector: React.FC<ResumeSelectorProps> = ({ templates, onSelectTemplate }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const handleTemplateSelect = (templateId: number) => {
    setSelectedTemplate(templateId);
    onSelectTemplate(templateId);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-sm w-full max-w-xs">
      <div className="flex flex-col gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`p-4 border-2 rounded-md cursor-pointer ${
              selectedTemplate === template.id ? 'border-purple-600' : 'border-gray-300'
            }`}
            onClick={() => handleTemplateSelect(template.id)}
          >
            <div className="relative w-full" style={{ paddingTop: '141.42%' /* (11.69 / 8.27) * 100 */ }}>
              <img
                src={template.imgLink}
                alt={template.name}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="text-center">{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSelector;
