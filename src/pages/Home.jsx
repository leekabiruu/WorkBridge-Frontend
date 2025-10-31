import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import '../index.css';

export default function Home() {
  const { user } = useAuth(); // Get logged-in user
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const JOBS_PER_PAGE = 9;

  const fetchJobs = async (page = 1) => {
    try {
      setLoading(true);
      const res = await api.get(`/jobs?page=${page}&limit=${JOBS_PER_PAGE}`);
      const data = res.data.jobs || res.data;

      setJobs(data);
      setTotalPages(
        res.data.totalPages ||
          Math.ceil((res.data.total || data.length) / JOBS_PER_PAGE)
      );
      setError("");
    } catch (err) {
      console.error(err);
      setError("⚠️ Failed to load jobs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(currentPage);
  }, [currentPage]);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 min-h-screen bg-gray-50">
      {/* 🧑‍💼 Welcome Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back, {user?.name || "User"} 👋
        </h1>
        <p className="text-gray-600 mt-2">
          {user?.role === "employer"
            ? "Manage your job postings and find top talent today."
            : "Browse the latest job listings and find your next opportunity."}
        </p>
      </div>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search jobs by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* ⚠️ Error Message */}
      {error && (
        <p className="text-red-500 text-center mt-4 font-medium">{error}</p>
      )}

      {/* 🧱 Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {loading ? (
          Array.from({ length: JOBS_PER_PAGE }).map((_, i) => (
            <div
              key={i}
              className="border p-4 rounded-md shadow-sm bg-gray-100 animate-pulse h-60"
            />
          ))
        ) : filteredJobs.length ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="col-span-full text-center p-6 border rounded-md bg-gray-100 text-gray-600">
            No jobs found matching your search.
          </div>
        )}
      </div>

      {/* 📄 Pagination */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center space-x-2 mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
