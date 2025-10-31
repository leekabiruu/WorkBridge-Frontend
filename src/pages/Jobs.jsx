import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import JobList from "../components/JobList";
import '../index.css';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const JOBS_PER_PAGE = 10;

  useEffect(() => {
    fetchJobs(currentPage, search);
  }, [currentPage, search]);

  const fetchJobs = async (page = 1, searchTerm = "") => {
    try {
      setLoading(true);
      const res = await api.get(`/jobs?page=${page}&limit=${JOBS_PER_PAGE}&search=${searchTerm}`);
      const jobsData = res.data.jobs || res.data;
      setJobs(jobsData);
      setTotalPages(res.data.totalPages || Math.ceil((res.data.total || jobsData.length) / JOBS_PER_PAGE));
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Job Listings</h1>

      {/* Search Bar */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search jobs by title..."
          value={search}
          onChange={handleSearchChange}
          className="border rounded-md px-4 py-2 w-full max-w-md"
        />
      </div>

      {/* Error */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Loading */}
      {loading && (
        <p className="text-center mt-6">Loading jobs...</p>
      )}

      {/* Job List */}
      {!loading && jobs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Link key={job.id} to={`/jobs/${job.id}`}>
              <JobList jobs={[job]} />
            </Link>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && jobs.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No jobs found.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
