"use client";
import { useState } from 'react';
import ResumeSelector from '../components/ResumeSelector';
import CustomizationSidebar from '../components/CustomizationSidebar';
import LivePreview from '../components/LivePreview';
import DownloadButton from '../components/DownloadButton';

type Template = {
    id: number;
    name: string;
    previewImage: string;
    title: string;
    content: string;
    [key: string]: string | number;  // Allow both string and number values
  };
  
  
  

  const Home = () => {
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
    const [selectedSections, setSelectedSections] = useState<string[]>([]);
  
    const templates: Template[] = [
      {
        id: 1,
        name: 'Template A',
        previewImage: 'https://png.pngtree.com/png-vector/20221217/ourmid/pngtree-example-sample-grungy-stamp-vector-png-image_15560590.png',
        title: 'Resume Template A',
        content: 'General content for template A',
        education: 'Bachelor of Science in Computer Science',  // Example section
        experience: '2 years of experience as a software developer',  // Example section
      },
      {
        id: 2,
        name: 'Template B',
        previewImage: 'https://png.pngtree.com/png-vector/20221217/ourmid/pngtree-example-sample-grungy-stamp-vector-png-image_15560590.png',
        title: 'Resume Template B',
        content: 'General content for template B',
        education: 'Master of Science in Computer Science',
        experience: '3 years of experience as a senior developer',
      },
    ];
  
    const handleTemplateSelect = (template: Template) => setSelectedTemplate(template);
    const handleSectionToggle = (sections: string[]) => setSelectedSections(sections);
  
    const handleDownload = async () => {
      if (!selectedTemplate) return;
  
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
