import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [loading, setLoading] = useState(false);

  // ✅ Persist user
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // ✅ Attach token to axios requests
  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        if (user?.access) {
          config.headers.Authorization = `Bearer ${user.access}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
    };
  }, [user]);

  // ✅ Login
  const login = async (emailOrUsername, password, role) => {
    setLoading(true);
    try {
      const res = await api.post("/auth/login", {
        username: emailOrUsername,
        password,
        role,
      });

      const data = res.data;

      setUser({
        ...data.user,
        access: data.access_token, // ✅ token key matches backend
        refresh: data.refresh_token,
      });

      setLoading(false);
      navigate("/"); // ✅ redirect after login
      return { success: true };

    } catch (err) {
      setLoading(false);
      return {
        success: false,
        message: err.response?.data?.message || "Login failed",
      };
    }
  };

  // ✅ Signup (auto-login)
  const signup = async (form) => {
    setLoading(true);
    try {
      const res = await api.post("/auth/register", form);
      const { email } = res.data;

      const loginRes = await login(email, form.password, form.role);
      setLoading(false);
      return loginRes;

    } catch (err) {
      setLoading(false);
      return {
        success: false,
        message: err.response?.data?.message || "Signup failed",
      };
    }
  };

  // ✅ Logout
  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook
export const useAuth = () => useContext(AuthContext);
