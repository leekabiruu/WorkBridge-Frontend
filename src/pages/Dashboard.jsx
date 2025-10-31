import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import JobCard from "../components/JobCard";
import '../index.css';

export default function Dashboard() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;

    const fetchProfileAndData = async () => {
      setLoading(true);
      try {
        const profileRes =
          user.role === "job_seeker"
            ? await api.get("/jobseekers/me")
            : await api.get("/employers/me");
        setProfile(profileRes.data);

        if (user.role === "job_seeker") {
          const [favRes, appRes] = await Promise.all([
            api.get("/favorites/"),
            api.get("/applications/"),
          ]);
          setFavorites(
            favRes.data.filter((f) => f.jobseeker_id === profileRes.data.id)
          );
          setApplications(
            appRes.data.filter((a) => a.jobseeker_id === profileRes.data.id)
          );
        } else {
          const jobsRes = await api.get("/jobs/");
          setJobs(jobsRes.data.filter((j) => j.employer_id === profileRes.data.id));
        }
      } catch (err) {
        console.error(err.response?.data || err);
        setError("Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileAndData();
  }, [user]);

  if (!user) {
    return (
      <p className="text-center mt-10 text-red-500">
        Please login to view dashboard.
      </p>
    );
  }

  if (loading) return <p className="text-center mt-10">Loading dashboard...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-6 space-y-6">
      {/* Profile Info */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white">
          {profile?.name?.[0] || profile?.user_id?.[0]}
        </div>
        <div>
          <h2 className="text-xl font-bold">{profile?.name || profile?.user_id}</h2>
          <p className="text-gray-600">{profile?.email}</p>
        </div>
      </div>

      {user.role === "job_seeker" && (
        <div className="space-y-6">
          <section>
            <h3 className="font-semibold text-lg mb-2">Your Applications</h3>
            {applications.length ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {applications.map((app) => (
                  <JobCard
                    key={app.job_id}
                    job={{ ...app.job, is_applied: true }}
                    showActions={false}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No applications yet.</p>
            )}
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">Favorite Jobs</h3>
            {favorites.length ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map((fav) => (
                  <JobCard
                    key={fav.job_id}
                    job={{ ...fav.job, is_favorited: true }}
                    showActions={true}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No favorite jobs yet.</p>
            )}
          </section>
        </div>
      )}

      {user.role === "employer" && (
        <div className="space-y-6">
          <section>
            <h3 className="font-semibold text-lg mb-2">Your Posted Jobs</h3>
            {jobs.length ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} showActions={true} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No jobs posted yet.</p>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
