import "./admin_page.css";

function CreateUserPageComponent() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email"));
    const displayName = String(formData.get("display_name"));
    const role = String(formData.get("role"));

    await fetch("http://127.0.0.1:5000/api/create_user", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({email,displayName,role}),
    });
  }

  return (
    <div className="page-wrap">
      <div className="card">
        <h1 className="title">Create New User</h1>

        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="email" className="label">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="input"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="display_name" className="label">Display Name</label>
            <input
              id="display_name"
              type="text"
              name="display_name"
              required
              className="input"
            />
          </div>

            <div>
                <label className="label">Role</label>
                <div className="radio-group">
                    <label className="radio-option">
                        <input type="radio" name="role" value="TRAINEE" required/>
                        <span>Trainee</span>
                    </label>

                    <label className="radio-option">
                        <input type="radio" name="role" value="ADMIN" required/>
                        <span>Admin</span>
                    </label>
                </div>
            </div>

          <button type="submit" className="btn btn-primary">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUserPageComponent;