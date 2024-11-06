import { useState } from 'react';

type Template = {
  id: number;
  name: string;
  previewImage: string;
  title: string;
  content: string;
  [key: string]: string | number;  // Allow both string and number values
};


interface ResumeSelectorProps {
  templates: Template[];
  onSelectTemplate: (template: Template) => void;
}

const ResumeSelector: React.FC<ResumeSelectorProps> = ({ templates, onSelectTemplate }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    onSelectTemplate(template);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-sm w-full max-w-xs">
      <h2 className="text-xl font-semibold mb-4">Choose from our resume templates</h2>
      <div className="flex flex-col gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`p-4 border-2 rounded-md cursor-pointer ${
              selectedTemplate?.id === template.id ? 'border-purple-600' : 'border-gray-300'
            }`}
            onClick={() => handleTemplateSelect(template)}
          >
            <img src={template.previewImage} alt="Template preview" className="w-full mb-2" />
            <button className="w-full text-purple-600 font-medium">{template.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSelector;
