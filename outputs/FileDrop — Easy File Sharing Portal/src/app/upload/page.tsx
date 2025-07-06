typescript
// FileUpload.tsx

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { twMerge } from 'tailwind-merge';

interface FileUploadProps {
  onFilesUploaded: (files: File[]) => void;
}

interface DropzoneProps {
  isDragActive: boolean;
  isDragReject: boolean;
  getRootProps: () => JSX.Element;
  getInputProps: () => JSX.Element;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFilesUploaded }) => {
  const onDrop = useCallback(acceptedFiles => {
    onFilesUploaded(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, [onFilesUploaded]);

  const {
    isDragActive,
    isDragReject,
    getRootProps,
    getInputProps,
  } = useDropzone({ onDrop, accept: 'image/*,application/pdf' });

  return (
    <div
      {...getRootProps()}
      className={twMerge(
        'w-full h-64 border-2 border-dashed rounded-lg p-4 text-center transition-colors duration-300',
        isDragActive ? 'border-blue-500' : isDragReject ? 'border-red-500' : 'border-gray-400'
      )}
    >
      <input {...getInputProps()} />
      <div className="mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m-6 5 7.5-7.5M21 12H6"
          />
        </svg>
        <p className="mt-2 text-sm text-gray-500">
          Drag and drop files here or click to upload. Only images and PDFs are allowed.
        </p>
      </div>
    </div>
  );
};

export default FileUpload;