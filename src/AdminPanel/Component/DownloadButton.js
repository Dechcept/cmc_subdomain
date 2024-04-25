// DownloadButton.js
import React from 'react';
import axios from 'axios';

const DownloadButton = ({ pdfUrl, fileName }) => {
  const handleDownload = async () => {
    try {
      const response = await axios.get(pdfUrl, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName || 'download.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDownload}>
      Download PDF
    </button>
  );
};

export default DownloadButton;
