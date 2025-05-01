import { useNavigate, Link } from "react-router-dom";
import { useStoreContext } from "../context/user";
import "./LoginView.css"

function LoginView() {

    const navigate = useNavigate();
    const { email, password } = useStoreContext();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!formData.email == email || !formData.password == password) {
            alert("Email or Password incorrect!");
            return;
        }
        navigate("/movies/genre/28");
    };

    return (
        <div className="login-view">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleLogin} className="login-form">
                <input
                    type="email"
                    value={formData.email}
                    placeholder="Email"
                    required
                    className="login-input"
                />
                <input
                    type="password"
                    value={formData.password}
                    placeholder="Password"
                    required
                    className="login-input"
                />
                <button type="submit" className="login-button">
                    Login
                </button>
                <p className="register-link">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
}
export default LoginView;