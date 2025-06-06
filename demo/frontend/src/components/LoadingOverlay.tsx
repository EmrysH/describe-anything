import React from 'react';

const LoadingOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center">
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-4">
          <path d="M5.92017 41.0562L27.0002 48.0802" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M5.92017 12.9438L27.0002 26.9998" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M27 5.91992L48.08 26.9999" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M5.92017 41.0559L27.0002 5.91992" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M27 48.08L48.08 27" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M27 27H48.08" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M5.92017 12.9439L27.0002 5.91992" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M5.92017 41.056L27.0002 27" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M5.92017 12.9438L27.0002 48.0798" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M26.9998 31.9201C29.7171 31.9201 31.9198 29.7173 31.9198 27.0001C31.9198 24.2828 29.7171 22.0801 26.9998 22.0801C24.2826 22.0801 22.0798 24.2828 22.0798 27.0001C22.0798 29.7173 24.2826 31.9201 26.9998 31.9201Z" fill="white" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M5.92 17.8639C8.63724 17.8639 10.84 15.6612 10.84 12.9439C10.84 10.2267 8.63724 8.02393 5.92 8.02393C3.20276 8.02393 1 10.2267 1 12.9439C1 15.6612 3.20276 17.8639 5.92 17.8639Z" fill="white" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M5.92 45.9757C8.63724 45.9757 10.84 43.773 10.84 41.0557C10.84 38.3385 8.63724 36.1357 5.92 36.1357C3.20276 36.1357 1 38.3385 1 41.0557C1 43.773 3.20276 45.9757 5.92 45.9757Z" fill="white" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M48.0806 31.9201C50.7979 31.9201 53.0006 29.7173 53.0006 27.0001C53.0006 24.2828 50.7979 22.0801 48.0806 22.0801C45.3634 22.0801 43.1606 24.2828 43.1606 27.0001C43.1606 29.7173 45.3634 31.9201 48.0806 31.9201Z" fill="white" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M26.9998 53.0002C29.7171 53.0002 31.9198 50.7974 31.9198 48.0802C31.9198 45.3629 29.7171 43.1602 26.9998 43.1602C24.2826 43.1602 22.0798 45.3629 22.0798 48.0802C22.0798 50.7974 24.2826 53.0002 26.9998 53.0002Z" fill="white" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M26.9998 10.84C29.7171 10.84 31.9198 8.63724 31.9198 5.92C31.9198 3.20276 29.7171 1 26.9998 1C24.2826 1 22.0798 3.20276 22.0798 5.92C22.0798 8.63724 24.2826 10.84 26.9998 10.84Z" fill="white" stroke="#1C2B33" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
        <p className="text-lg font-semibold text-gray-800">Loading image embedding...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay; 