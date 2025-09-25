import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./logout.css";

function LogoutComponent(){
    const navigate = useNavigate()
    const { logout_user } = useAuth();

    async function logout() {
        const res = await fetch("http://localhost:5000/api/logout", {
            method: "POST",
            credentials: "include",
        });
        if (res.ok) {
            navigate("/login", {replace: true})
            setTimeout(() => {
                logout_user()
            }, 100)
        } else {
        }
    }


    return(
        <button onClick={logout} type="button" className="logout-btn">Logout</button>
    )
}

export default LogoutComponent;