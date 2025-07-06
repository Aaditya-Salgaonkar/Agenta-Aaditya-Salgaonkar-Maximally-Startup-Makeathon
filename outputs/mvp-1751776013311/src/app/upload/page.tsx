import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FileUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);

  const toggleDragActive = () => {
    setDragActive(!dragActive);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      toggleDragActive();
    } else if (e.type === 'dragleave') {
      toggleDragActive();
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggleDragActive();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
    }
  };

  const handleUpload = () => {
    if (files) {
      // Handle file upload here
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
      // Send a POST request to your API endpoint
      fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          // Handle successful upload
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error during upload
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className={`w-80 h-80 border-dashed border-2 border-gray-400 border-opacity-50 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer ${
          dragActive ? 'border-blue-500' : ''
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="hidden"
          onChange={handleFileInputChange}
          multiple
        />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>
        <p className="mt-2 text-gray-500">
          Drag and drop files here or{' '}
          <label
            htmlFor="file-input"
            className="text-blue-500 underline cursor-pointer"
          >
            browse
          </label>
        </p>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        onClick={handleUpload}
        disabled={!files}
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;