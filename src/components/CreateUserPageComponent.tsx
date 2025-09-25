import React, { useState, useEffect } from "react";
import "./admin_page.css";

function CreateUserPageComponent() {
  const [notice, setNotice] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (notice) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);

        setTimeout(() => setNotice(null), 500);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notice]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email"));
    const displayName = String(formData.get("display_name"));
    const role = String(formData.get("role"));

    const res = await fetch("http://localhost:5000/api/create_user", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, displayName, role }),
    });

    if (res.ok) {
      setNotice({ type: "success", text: "User created successfully" });
      setLoading(false);
      e.currentTarget.reset();


    } else {
      setNotice({ type: "error", text: "Failed to create user" });
      setLoading(false);
    }
  }



  return (
    <div className="page-wrap">
      <div className="card">
        <h1 className="title">Create New User</h1>

        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="email" className="label">Email</label>
            <input id="email" type="email" name="email" required className="input" />
          </div>

          <div>
            <label htmlFor="display_name" className="label">Display Name</label>
            <input id="display_name" type="text" name="display_name" required className="input" />
          </div>

          <div>
            <label className="label">Role</label>
            <div className="radio-group">
              <label className="radio-option">
                <input type="radio" name="role" value="TRAINEE" required />
                <span>Trainee</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="role" value="ADMIN" required />
                <span>Admin</span>
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Creating..." : "Create User"}
          </button>

          {notice && (
            <div
              className={`alert ${notice.type === "success" ? "alert-success" : "alert-error"} ${
                visible ? "fade-in" : "fade-out"
              }`}
            >
              {notice.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateUserPageComponent;
