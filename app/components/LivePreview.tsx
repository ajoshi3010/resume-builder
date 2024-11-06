type Template = {
  id: number;
  name: string;
  previewImage: string;
  title: string;
  content: string;
  [key: string]: string | number;  // Allow both string and number values
};

interface LivePreviewProps {
  template: Template;  // Use Template type
  selectedSections: string[];
}


const LivePreview: React.FC<LivePreviewProps> = ({ template, selectedSections }) => {
  return (
    <div className="live-preview bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{template.title}</h2>
      <div>
        {selectedSections.map((section, index) => (
          <div key={index} className="section mb-4">
            <h3 className="text-xl font-semibold">{section}</h3>
            <p>{template[section] || template.content}</p> {/* Dynamically render content for each section */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivePreview;
