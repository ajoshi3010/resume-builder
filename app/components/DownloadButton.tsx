const DownloadButton = ({ onDownload }) => {
    return (
      <button
        onClick={onDownload}
        className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md mt-4"
      >
        Download Resume
      </button>
    );
  };
  
  export default DownloadButton;
  