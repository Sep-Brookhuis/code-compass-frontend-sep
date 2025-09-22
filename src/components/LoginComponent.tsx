import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../lib/api";
import "./login.css";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "");
    const password = String(fd.get("password") ?? "");

    try {
        const ok = await login(email, password);
        if (ok) {
            navigate("/home", { replace: true });
            return;
    }
  setError("Login failed");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

 return (
    <div className="page-wrap">
      <div className="card">
        <h1 className="title">Blitz Code Compass</h1>

        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="email" className="label">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              disabled={loading}
              className="input"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="password" className="label">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              required
              disabled={loading}
              className="input"
              autoComplete="current-password"
            />
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? "Bezig..." : "Login"}
          </button>

          {error && (
            <p className="error" role="alert" aria-live="polite">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

