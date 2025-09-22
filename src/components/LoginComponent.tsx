import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../lib/api";

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
  setError("Login failed.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
      <input type="email" name="email" required disabled={loading} />
        <label htmlFor="password">Password:</label>
      <input type="password" name="password" required disabled={loading} />
      <button type="submit" disabled={loading}>
        {loading ? "Bezig..." : "Login"}
      </button>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
    </form>
  );
}

export default LoginForm;

