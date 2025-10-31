import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import JobCard from "./JobCard";
import Pagination from "./Pagination";
import api from "../services/api";
import '../index.css';

export default function JobList() {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const JOBS_PER_PAGE = 10;

  const [actionMessages, setActionMessages] = useState({}); 

  useEffect(() => {
    fetchJobs(currentPage);
  }, [currentPage]);

  const fetchJobs = async (page = 1) => {
    try {
      setLoading(true);
      const res = await api.get(`/jobseekers/jobs?page=${page}&limit=${JOBS_PER_PAGE}`);
      const jobsData = (res.data.jobs || res.data).map((job) => ({
        ...job,
        is_applied: job.is_applied || false,
        is_favorited: job.is_favorited || false,
      }));
      setJobs(jobsData);
      setTotalPages(res.data.totalPages || Math.ceil((res.data.total || jobsData.length) / JOBS_PER_PAGE));
    } catch (err) {
      console.error(err);
      setError("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  const applyJob = async (jobId) => {
    try {
      const res = await api.post(`/jobseekers/jobs/${jobId}/apply`, { job_seeker_id: user.id });
      if (res.status === 200) {
        setJobs((prevJobs) =>
          prevJobs.map((job) =>
            job.id === jobId ? { ...job, is_applied: true } : job
          )
        );
        setActionMessages((prev) => ({ ...prev, [jobId]: "Application submitted!" }));
      }
    } catch (err) {
      console.error(err);
      setActionMessages((prev) => ({ ...prev, [jobId]: err.response?.data?.msg || "Failed to apply" }));
    }
  };

  const addFavorite = async (jobId) => {
    try {
      const res = await api.post(`/jobseekers/favorites/${jobId}`, { user_id: user.id });
      if (res.status === 200) {
        setJobs((prevJobs) =>
          prevJobs.map((job) =>
            job.id === jobId ? { ...job, is_favorited: !job.is_favorited } : job
          )
        );
        setActionMessages((prev) => ({ ...prev, [jobId]: "Favorite status updated" }));
      }
    } catch (err) {
      console.error(err);
      setActionMessages((prev) => ({ ...prev, [jobId]: err.response?.data?.msg || "Failed to update favorite" }));
    }
  };

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id}>
            <JobCard
              job={job}
              showActions={true}
              onApply={() => applyJob(job.id)}
              onFavorite={() => addFavorite(job.id)}
            />
            {actionMessages[job.id] && (
              <p className="text-green-600 text-sm mt-1">{actionMessages[job.id]}</p>
            )}
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
