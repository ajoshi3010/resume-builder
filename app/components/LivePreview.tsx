interface LivePreviewProps {
    template: {
      // Define the specific structure of the template object if you know it
      title: string;
      content: string;
      // Add other fields based on your data structure
    };
    selectedSections: string[];
  }
  
  const LivePreview: React.FC<LivePreviewProps> = ({ template, selectedSections }) => {
    return (
      <div className="live-preview bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{template.title}</h2>
        <div>
          {selectedSections.map((section, index) => (
            <div key={index} className="section">
              <h3 className="text-xl font-semibold">{section}</h3>
              <p>{template.content}</p> {/* Adjust based on your template structure */}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LivePreview;
  