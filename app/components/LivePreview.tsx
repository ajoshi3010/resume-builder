import React from 'react';

const LivePreview = ({ template, selectedSections }) => {
  if (!template) {
    return <p>Please select a template to see the preview.</p>;
  }

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-sm w-full max-w-3xl">
      <h2 className="text-xl font-semibold mb-4">{template.name} - Preview</h2>
      <div className="p-4 bg-white rounded-md shadow-md">
        {selectedSections.includes('Skills') && (
          <div className="mb-4">
            <h3 className="font-semibold">Skills</h3>
            <p>Product design, UX/UI Design, etc.</p>
          </div>
        )}
        {selectedSections.includes('Education') && (
          <div className="mb-4">
            <h3 className="font-semibold">Education</h3>
            <p>University of XYZ - BA Hons Graphic Design</p>
          </div>
        )}
        {selectedSections.includes('Experience') && (
          <div className="mb-4">
            <h3 className="font-semibold">Experience</h3>
            <p>Product Designer at ABC Company</p>
          </div>
        )}
        {selectedSections.includes('Achievements') && (
          <div className="mb-4">
            <h3 className="font-semibold">Achievements</h3>
            <p>Achievement 1, Achievement 2</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LivePreview;
