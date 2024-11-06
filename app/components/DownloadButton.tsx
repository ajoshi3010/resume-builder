interface DownloadButtonProps {
    onDownload: () => void;
  }
  
  const DownloadButton: React.FC<DownloadButtonProps> = ({ onDownload }) => {
    return (
      <button
        onClick={onDownload}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Download PDF
      </button>
    );
  };
  
  export default DownloadButton;
  