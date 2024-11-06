import { useState } from 'react';
import ResumeSelector from '../components/ResumeSelector';
import CustomizationSidebar from '../components/CustomizationSidebar';
import LivePreview from '../components/LivePreview';
import DownloadButton from '../components/DownloadButton';

type Template = {
    title: string;
    content: string;
    id:number;
    name:string;
    previewImage:string;
};

const Home = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  const templates: Template[] = [
    {
        id: 1, name: 'Template A', previewImage: '/template-a.png',
        title: 'title1',
        content: 'content1'
    },
    {
        id: 2, name: 'Template B', previewImage: '/template-b.png',
        title: 'title2',
        content: 'content2'
    },
  ];

  const handleTemplateSelect = (template: Template) => setSelectedTemplate(template);
  const handleSectionToggle = (sections: string[]) => setSelectedSections(sections);

  const handleDownload = async () => {
    if (!selectedTemplate) return; // Ensure template is selected

    const response = await fetch('/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ templateId: selectedTemplate.id, sections: selectedSections }),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
      a.click();
    } else {
      console.error('Failed to download resume.');
    }
  };

  return (
    <div className="flex gap-8 p-8">
      <CustomizationSidebar onSectionToggle={handleSectionToggle} />
      <div className="flex flex-col items-start gap-4 w-full max-w-5xl">
        <ResumeSelector templates={templates} onSelectTemplate={handleTemplateSelect} />
        <LivePreview template={selectedTemplate || { title: '', content: '' }} selectedSections={selectedSections} />
        <DownloadButton onDownload={handleDownload} />
      </div>
    </div>
  );
};

export default Home;
