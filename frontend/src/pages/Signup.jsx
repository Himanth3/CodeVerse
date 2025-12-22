import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            await api.post("register/", {
                username: username,
                email: email,
                password: password,
            });
            setShowPopup(true);
        } catch (err) {
            console.error(err);
            if (err.response && err.response.data) {
                const data = err.response.data;
                // Check for 'detail' (generic error) or field-specific errors
                if (data.detail) {
                    setError(data.detail);
                } else {
                    // Extract the first validation error
                    const keys = Object.keys(data);
                    if (keys.length > 0) {
                        const firstKey = keys[0];
                        const firstError = data[firstKey];
                        // Format: "username: A user with that username already exists."
                        // Or just the message if preferred. Let's include the field name for clarity.
                        // But for user friendliness, maybe we just show the message if it's clear.
                        // Let's go with "Field: Error" to be safe.

                        // Handle 'non_field_errors' specifically if needed, but this logic covers it (field name will be non_field_errors)
                        const msg = Array.isArray(firstError) ? firstError[0] : firstError;
                        if (firstKey === "non_field_errors") {
                            setError(msg);
                        } else {
                            // Capitalize first letter of key
                            const fieldName = firstKey.charAt(0).toUpperCase() + firstKey.slice(1);
                            setError(`${fieldName}: ${msg}`);
                        }
                    } else {
                        setError("Signup failed. Please try again.");
                    }
                }
            } else {
                setError("Signup failed. Server unreachable.");
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Create Account</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="form-group">
                        <label>User ID (Username)</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Choose a unique User ID"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a password"
                            required
                            autoComplete="new-password"
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            required
                            autoComplete="new-password"
                        />
                    </div>
                    <button type="submit" className="auth-button">Sign Up</button>

                    <div className="auth-link">
                        Already have an account?
                        <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>

            {/* Custom Popup */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-card">
                        <h3>Success!</h3>
                        <p>Signup successful! Please login to continue.</p>
                        <button className="popup-button" onClick={() => navigate("/login")}>
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Signup;
