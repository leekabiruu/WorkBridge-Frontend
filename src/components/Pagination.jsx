import React from "react";
import '../index.css';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null; 

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 mt-6 gap-1">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded ${
          currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-3 py-1 rounded ${
            number === currentPage ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {number}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded ${
          currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Next
      </button>
    </div>
  );
}
