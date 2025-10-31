import React, { useState, useEffect } from "react";
import '../index.css';

export default function JobCard({ job, showActions = true, onApply, onFavorite, actionMessage }) {
  const [applied, setApplied] = useState(job.is_applied || false);
  const [favorited, setFavorited] = useState(job.is_favorited || false);


  useEffect(() => {
    setApplied(job.is_applied || false);
    setFavorited(job.is_favorited || false);
  }, [job.is_applied, job.is_favorited]);

  const handleApply = async () => {
    if (!onApply) return;
    const result = await onApply();
    if (result?.success) setApplied(true);
  };

  const handleFavorite = async () => {
    if (!onFavorite) return;
    const result = await onFavorite();
    if (result?.success) setFavorited(!favorited);
  };

  return (
    <div className="border p-4 rounded-md shadow-sm bg-white">
      <h3 className="font-bold text-lg">{job.title}</h3>
      <p className="text-gray-600">{job.location}</p>
      <p className="text-gray-600">{job.job_type} | {job.salary_range}</p>
      <p className="text-gray-500 text-sm">Posted by: {job.employer_name}</p>
      <p className="text-gray-500 text-sm">{new Date(job.created_at).toLocaleDateString()}</p>
      <p className="mt-2 text-gray-700">{job.description?.substring(0, 100)}...</p>

      {showActions && (
        <div className="mt-3 flex gap-2">
          <button
            disabled={applied}
            className={`px-3 py-1 rounded text-white ${applied ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"}`}
            onClick={handleApply}
          >
            {applied ? "Applied" : "Apply"}
          </button>

          <button
            className={`px-3 py-1 rounded text-white ${favorited ? "bg-red-500" : "bg-yellow-500"}`}
            onClick={handleFavorite}
          >
            {favorited ? "Unfavorite" : "Favorite"}
          </button>
        </div>
      )}

      {actionMessage && <p className="mt-2 text-sm text-blue-600">{actionMessage}</p>}
    </div>
  );
}
