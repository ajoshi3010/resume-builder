import { useState } from 'react';
import ResumeSelector from '../components/ResumeSelector';
import CustomizationSidebar from '../components/CustomizationSidebar';
import LivePreview from '../components/LivePreview';
import DownloadButton from '../components/DownloadButton';

const Home = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  const templates = [
    { id: 1, name: 'Template A', previewImage: '/template-a.png' },
    { id: 2, name: 'Template B', previewImage: '/template-b.png' },
  ];

  const handleTemplateSelect = (template) => setSelectedTemplate(template);
  const handleSectionToggle = (sections) => setSelectedSections(sections);

  const handleDownload = async () => {
    // Call the API to generate and download the PDF
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
        <LivePreview template={selectedTemplate} selectedSections={selectedSections} />
        <DownloadButton onDownload={handleDownload} />
      </div>
    </div>
  );
};

export default Home;
