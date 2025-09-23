import { useNavigate } from "react-router-dom";
import "./admin_page.css";

function HomePageComponent() {
  const navigate = useNavigate();

  return (
    <div className="page-wrap">
      <div className="card text-center">
        <h1 className="title">Welcome, Admin</h1>
        <p className="subtitle">You have successfully logged in.</p>

        <div className="mt-6">
          <button
            type="button"
            onClick={() => navigate("/create_user", { replace: false })}
            className="btn btn-primary"
            aria-label="Create a new user"
          >
            Create New User
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePageComponent;