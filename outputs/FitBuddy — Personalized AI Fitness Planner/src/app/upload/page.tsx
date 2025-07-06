typescript
// @filname: UploadPage.tsx

import React from 'react';
import { useDropzone } from 'react-dropzone';
import 'tailwindcss/tailwind.css';

interface FileWithPath extends File {
  path: string;
}

interface UploadPageProps {}

const UploadPage: React.FC<UploadPageProps> = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone<FileWithPath>({
    accept: '.csv',
  });

  const onDrop = (acceptedFiles: FileWithPath[]) => {
    acceptedFiles.forEach((file) => {
      // Handle file upload here
    });
  };

  return (
    <div {...getRootProps()} className="flex flex-col items-center justify-center w-full h-screen border-2 border-dashed border-gray-400">
      <input {...getInputProps()} />
      <div className="text-2xl font-bold text-center">Drag and drop your CSV file here</div>
      {isDragActive ? <div>Drop it here...</div> : <div>Or click to select a file</div>}
    </div>
  );
};

export default UploadPage;