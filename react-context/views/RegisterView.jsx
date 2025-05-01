import { useNavigate, Link } from "react-router-dom";
import { useStoreContext } from "../context/user";
import { useState } from "react";
import "./RegisterView.css";

function RegisterView() {

    const navigate = useNavigate();
    const { setEmail, setFirstName, setLastName, setPassword } = useStoreContext();
    const [passwordCheck, setPasswordCheck] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        setEmail(formData.email);
        setFirstName(formData.firstName);
        setLastName(formData.lastName);
        setPassword(formData.password);
        navigate("/movies/genre/28");
    };

    return (
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <form onSubmit={handleRegister} className="register-form">
                <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    required
                />
                <input
                    type="password"
                    className="confirmPassword"
                    placeholder="Re-enter Password"
                    value={formData.confirmPassword}
                    required />
                <button type="submit">Register</button>
                <p className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default RegisterView;