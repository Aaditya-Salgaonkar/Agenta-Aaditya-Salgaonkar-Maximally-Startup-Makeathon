import React from 'react';
import { useDropzone } from 'react-dropzone';

interface FileItem {
  id: string;
  file: File;
}

interface UploadPageProps {
  onFilesUploaded: (files: FileItem[]) => void;
}

const UploadPage: React.FC<UploadPageProps> = ({ onFilesUploaded }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'application/pdf',
    onDrop: (acceptedFiles) => {
      const files = acceptedFiles.map((file) => ({
        id: Date.now() + '-' + file.name,
        file,
      }));
      onFilesUploaded(files);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        {...getRootProps()}
        className="border-dashed border-4 border-gray-400 border-rounded p-4 text-center"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the PDF file here ...</p>
        ) : (
          <p>Drag and drop a PDF file here, or click to select a file</p>
        )}
      </div>
    </div>
  );
};

export default UploadPage;