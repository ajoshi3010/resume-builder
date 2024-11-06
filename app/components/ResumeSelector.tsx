import { useState } from 'react';

interface Template {
    title: string;
    content: string;
    previewImage:string;
    id:number;
    name:string;
}

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
    <div className="p-4 border border-gray-300 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Choose from our resume templates</h2>
      <div className="grid grid-cols-2 gap-4">
        {templates.map((template, index) => (
          <div
            key={index}
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
